import { Button } from "@/components/ui/button";
import { Menu, X, FileText, Sparkles, Target, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Fazer Currículo" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-all duration-300 font-medium">
              Início
            </Link>
            <Link to="/sobre" className="text-foreground hover:text-primary transition-all duration-300 font-medium">
              Sobre
            </Link>
            <Link to="/como-funciona" className="text-foreground hover:text-primary transition-all duration-300 font-medium">
              Como Funciona
            </Link>
            <Link to="/criar-curriculo" className="text-foreground hover:text-primary transition-all duration-300 font-medium">
              Criar Currículo
            </Link>
            <Link to="/contato" className="text-foreground hover:text-primary transition-all duration-300 font-medium">
              Contato
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
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
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2"
              >
                Início
              </Link>
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
              <Link
                to="/criar-curriculo"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2"
              >
                Criar Currículo
              </Link>
              <Link
                to="/contato"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2"
              >
                Contato
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/criar-curriculo">
                  <Button className="btn-hero w-full">
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