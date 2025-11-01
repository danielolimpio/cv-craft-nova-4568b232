import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 max-w-md bg-background border border-border rounded-lg shadow-lg p-6 z-50 animate-in slide-in-from-bottom-5">
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Fechar"
      >
        <X className="h-5 w-5" />
      </button>
      
      <h3 className="text-lg font-semibold mb-3 pr-6">Cookies e Privacidade</h3>
      
      <p className="text-sm text-muted-foreground mb-4">
        Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
        <Link to="/politica-de-privacidade" className="text-primary hover:underline">
          Política de Privacidade
        </Link>
        .
      </p>

      <div className="flex flex-wrap gap-2 text-xs mb-4">
        <Link to="/politica-de-privacidade" className="text-muted-foreground hover:text-primary transition-colors">
          Política de Privacidade
        </Link>
        <span className="text-muted-foreground">•</span>
        <Link to="/termos-de-uso" className="text-muted-foreground hover:text-primary transition-colors">
          Termos de Uso
        </Link>
        <span className="text-muted-foreground">•</span>
        <Link to="/lgpd" className="text-muted-foreground hover:text-primary transition-colors">
          LGPD
        </Link>
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={handleReject}
          className="flex-1"
        >
          Rejeitar
        </Button>
        <Button
          onClick={handleAccept}
          className="flex-1"
        >
          Concordar
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
