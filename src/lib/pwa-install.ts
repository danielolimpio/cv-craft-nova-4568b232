/**
 * Native PWA install trigger.
 *
 * - Captures Chrome/Edge/Android `beforeinstallprompt` event.
 * - Fires the native browser install prompt on the user's first interaction
 *   (click / tap / keypress) — satisfying the user-gesture requirement.
 * - On iOS Safari there is no programmatic install API; the browser shows
 *   its own native "Compartilhar → Adicionar à Tela de Início" affordance.
 *   We do nothing custom there (no modals).
 * - On Desktop Chrome/Edge the install icon appears in the address bar
 *   automatically when manifest criteria are met.
 *
 * Persists state in localStorage so we don't re-prompt installed users
 * across deploys.
 */

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

const STORAGE_KEY = "pwa-install-state-v1";

type InstallState = {
  installed?: boolean;
  dismissedAt?: number;
};

const getState = (): InstallState => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
};

const setState = (patch: InstallState) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...getState(), ...patch }));
  } catch {
    /* ignore */
  }
};

export function initPwaInstall() {
  if (typeof window === "undefined") return;

  // Already installed / running standalone — do nothing.
  const isStandalone =
    window.matchMedia?.("(display-mode: standalone)").matches ||
    // iOS Safari standalone flag
    (window.navigator as unknown as { standalone?: boolean }).standalone === true;

  if (isStandalone) {
    setState({ installed: true });
    return;
  }

  let deferredPrompt: BeforeInstallPromptEvent | null = null;
  let promptShown = false;

  const onBeforeInstallPrompt = (e: Event) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
  };

  const onAppInstalled = () => {
    setState({ installed: true });
    deferredPrompt = null;
  };

  const triggerNativePrompt = async () => {
    if (promptShown || !deferredPrompt) return;
    promptShown = true;
    try {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "dismissed") {
        setState({ dismissedAt: Date.now() });
      } else if (choice.outcome === "accepted") {
        setState({ installed: true });
      }
    } catch {
      /* user gesture lost or unsupported — silently ignore */
    } finally {
      deferredPrompt = null;
      removeFirstClickListeners();
    }
  };

  const onFirstUserGesture = () => {
    void triggerNativePrompt();
  };

  const addFirstClickListeners = () => {
    document.addEventListener("click", onFirstUserGesture, { once: false, passive: true });
    document.addEventListener("touchend", onFirstUserGesture, { once: false, passive: true });
    document.addEventListener("keydown", onFirstUserGesture, { once: false, passive: true });
  };

  const removeFirstClickListeners = () => {
    document.removeEventListener("click", onFirstUserGesture);
    document.removeEventListener("touchend", onFirstUserGesture);
    document.removeEventListener("keydown", onFirstUserGesture);
  };

  window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
  window.addEventListener("appinstalled", onAppInstalled);

  // Always wire the gesture listener — when `beforeinstallprompt` fires later,
  // the next user click triggers the native prompt immediately.
  addFirstClickListeners();
}
