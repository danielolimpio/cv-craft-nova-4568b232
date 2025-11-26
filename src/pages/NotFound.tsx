import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Home, BookOpen, Mail, HelpCircle, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { url: "/", label: "Página Inicial", icon: Home, description: "Voltar para a home" },
    { url: "/criar-curriculo", label: "Criar Currículo", icon: FileText, description: "Crie seu currículo grátis" },
    { url: "/blog", label: "Blog", icon: BookOpen, description: "Artigos sobre currículos" },
    { url: "/como-funciona", label: "Como Funciona", icon: Sparkles, description: "Saiba como funciona" },
    { url: "/central-de-ajuda", label: "Central de Ajuda", icon: HelpCircle, description: "Precisa de ajuda?" },
    { url: "/contato", label: "Contato", icon: Mail, description: "Entre em contato" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>404 - Página Não Encontrada | Fazer Currículo</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-32 max-w-4xl">
        <div className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-2">404</h1>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Página Não Encontrada
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
        </div>

        {/* Popular Pages Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-6">
            Páginas Populares
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {popularPages.map((page, index) => {
              const Icon = page.icon;
              return (
                <Link
                  key={index}
                  to={page.url}
                  className="bg-card border border-border rounded-lg p-4 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {page.label}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {page.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20 mb-8">
          <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Crie Seu Currículo Agora</h3>
          <p className="text-muted-foreground mb-6">
            Aproveite para criar um currículo profissional de forma gratuita
          </p>
          <Link
            to="/criar-curriculo"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Sparkles className="w-5 h-5" />
            Criar Currículo Grátis
          </Link>
        </div>

        {/* Sitemap Link */}
        <div className="text-center">
          <p className="text-muted-foreground mb-2">
            Procurando algo específico?
          </p>
          <Link
            to="/sitemap"
            className="text-primary hover:underline font-medium inline-flex items-center gap-2"
          >
            Ver todas as páginas no Mapa do Site →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
