import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Index from "./pages/Index";
import ComoFunciona from "./pages/ComoFunciona";
import CriarCurriculo from "./pages/CriarCurriculo";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Blog from "./pages/Blog";
import BlogArticle1 from "./pages/BlogArticle1";
import BlogArticle2 from "./pages/BlogArticle2";
import BlogArticle3 from "./pages/BlogArticle3";
import BlogArticle4 from "./pages/BlogArticle4";
import BlogArticle5 from "./pages/BlogArticle5";
import BlogArticle6 from "./pages/BlogArticle6";
import BlogArticle7 from "./pages/BlogArticle7";
import BlogArticle8 from "./pages/BlogArticle8";
import BlogArticle9 from "./pages/BlogArticle9";
import BlogArticle10 from "./pages/BlogArticle10";
import BlogArticle11 from "./pages/BlogArticle11";
import BlogArticle12 from "./pages/BlogArticle12";
import BlogArticle13 from "./pages/BlogArticle13";
import CentralDeAjuda from "./pages/CentralDeAjuda";
import FAQ from "./pages/FAQ";
import TermosDeUso from "./pages/TermosDeUso";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";
import LGPD from "./pages/LGPD";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/criar-curriculo" element={<CriarCurriculo />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/como-criar-curriculo-profissional-2026" element={<BlogArticle1 />} />
          <Route path="/blog/10-erros-comuns-curriculos" element={<BlogArticle2 />} />
          <Route path="/blog/preparar-curriculo-sistemas-ats" element={<BlogArticle3 />} />
          <Route path="/blog/curriculo-primeiro-emprego-o-que-incluir" element={<BlogArticle4 />} />
          <Route path="/blog/curriculo-sem-experiencia-estrategias" element={<BlogArticle5 />} />
          <Route path="/blog/objetivo-profissional-curriculo" element={<BlogArticle6 />} />
          <Route path="/blog/destaque-habilidades-estrategia-impacto" element={<BlogArticle7 />} />
            <Route path="/blog/perfil-linkedin-recrutadores" element={<BlogArticle8 />} />
            <Route path="/blog/carta-apresentacao-empregador" element={<BlogArticle9 />} />
            <Route path="/blog/curriculo-estagio-estudantes" element={<BlogArticle10 />} />
            <Route path="/blog/curriculo-vs-linkedin-2026" element={<BlogArticle11 />} />
            <Route path="/blog/o-que-recrutadores-buscam-curriculo" element={<BlogArticle12 />} />
            <Route path="/blog/curriculo-ingles-estrutura-erros" element={<BlogArticle13 />} />
          <Route path="/central-de-ajuda" element={<CentralDeAjuda />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
          <Route path="/lgpd" element={<LGPD />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
