import { Facebook, Twitter, Linkedin, Instagram, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import danielPhoto from "@/assets/daniel-olimpio.jpg";

const AuthorBio = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="my-12 p-8 bg-muted/30 rounded-lg border border-border">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Foto do Autor */}
        <img 
          src={danielPhoto} 
          alt="Daniel Olimpio - Autor" 
          className="w-24 h-24 rounded-full object-cover flex-shrink-0"
        />
        
        {/* Informações Básicas */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">Daniel Olimpio</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Autor/Redator e Desenvolvedor Web
          </p>
          
          {/* Redes Sociais */}
          <div className="flex gap-3 mb-4">
            <a 
              href="https://www.facebook.com/danielolimpio.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://x.com/danielolimpio_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Twitter/X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/danielolimpio-com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/danielolimpio_com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://danielolimpio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Website"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
          
          {/* Botão Ver Mais/Menos */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm text-primary hover:underline transition-all"
          >
            {isExpanded ? (
              <>
                Ver menos <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Ver mais sobre o autor <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
          
          {/* Descrição Expandida */}
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-border space-y-3 text-muted-foreground animate-in fade-in slide-in-from-top-2 duration-300">
              <p className="text-sm">
                Combinando tecnologia e criatividade para criar soluções digitais impactantes
              </p>
              <p className="text-sm">
                Com mais de 20 anos de atuação no mercado digital, sou especializado em desenvolvimento 
                web e design de interfaces, unindo performance, usabilidade e identidade visual em cada projeto.
              </p>
              <p className="text-sm">
                Minha expertise está em transformar ideias complexas em soluções digitais funcionais, 
                escaláveis e visualmente marcantes. Trabalho com foco na harmonia entre código limpo, 
                arquitetura eficiente e design responsivo, sempre priorizando a experiência do usuário 
                e os objetivos do negócio.
              </p>
              <div className="flex flex-wrap gap-2 text-xs mt-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Full Stack Development</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">UI/UX Design</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Brand Identity</span>
              </div>
              <Link 
                to="/sobre" 
                className="inline-block mt-4 text-sm text-primary hover:underline"
              >
                Saiba mais na página Sobre →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
