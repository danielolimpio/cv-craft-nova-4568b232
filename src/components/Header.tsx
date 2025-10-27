import { Button } from "@/components/ui/button";
import { Menu, X, FileText, Sparkles, Target, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-premium rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="text-xl font-bold text-gradient-primary">
              FazerCurriculo.com
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-all duration-300 font-medium">
              Início
            </a>
            <Link to="/sobre" className="text-foreground hover:text-primary transition-all duration-300 font-medium">
              Sobre
            </Link>
            <Link to="/como-funciona" className="text-foreground hover:text-primary transition-all duration-300 font-medium">
              Como Funciona
            </Link>
            <a href="#templates" className="text-foreground hover:text-primary transition-all duration-300 font-medium">
              Templates
            </a>
            <a href="#ferramentas" className="text-foreground hover:text-primary transition-all duration-300 font-medium">
              Ferramentas IA
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Entrar
            </Button>
            <Link to="/criar-curriculo">
              <Button className="btn-hero">
                <Sparkles className="w-4 h-4 mr-2" />
                Criar Currículo Grátis
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-4 py-4 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <a
                href="#inicio"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2"
              >
                Início
              </a>
              <Link
                to="/sobre"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2"
              >
                Sobre
              </Link>
              <Link
                to="/como-funciona"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2"
              >
                Como Funciona
              </Link>
              <a
                href="#templates"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2"
              >
                Templates
              </a>
              <a
                href="#ferramentas"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2"
              >
                Ferramentas IA
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Entrar
                </Button>
                <Link to="/criar-curriculo">
                  <Button className="btn-hero">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Criar Currículo Grátis
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;