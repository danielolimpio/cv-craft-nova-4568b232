import { FileText, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-footer-background text-footer-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img src={logo} alt="Fazer Currículo" className="h-12" />
            </Link>
            
            <p className="text-footer-foreground/80 leading-relaxed mb-6 max-w-lg">
              A plataforma mais completa do Brasil para criação de currículos profissionais. 
              Ferramentas avançadas e gratuitas para garantir que seu currículo se destaque 
              e seja aprovado pelas melhores empresas.
            </p>
            
            <div className="flex space-x-4 mb-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-footer-foreground/10 rounded-lg flex items-center justify-center hover:bg-[#006B3D] hover:text-white transition-all duration-300"
                >
                  <Social className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-footer-foreground/80">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@fazercurriculo.com</span>
              </div>
              <div className="flex items-center space-x-2 text-footer-foreground/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(12) 98251-9116</span>
              </div>
              <div className="flex items-center space-x-2 text-footer-foreground/80">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Av. Julia Freire, 1200 - Expedicionários</span>
              </div>
              <div className="flex items-center space-x-2 text-footer-foreground/80 ml-6">
                <span className="text-sm">João Pessoa - PB - Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-footer-foreground/80 hover:text-[#006B3D] transition-colors duration-300">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/criar-curriculo" className="text-footer-foreground/80 hover:text-[#006B3D] transition-colors duration-300">
                  Criar Currículo
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-footer-foreground/80 hover:text-[#006B3D] transition-colors duration-300">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-footer-foreground/80 hover:text-[#006B3D] transition-colors duration-300">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-footer-foreground/80 hover:text-[#006B3D] transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-footer-foreground/80 hover:text-[#006B3D] transition-colors duration-300">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-6">Suporte</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/central-de-ajuda" className="text-footer-foreground/80 hover:text-[#006B3D] transition-colors duration-300">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-footer-foreground/80 hover:text-[#006B3D] transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-footer-foreground/80 hover:text-[#006B3D] transition-colors duration-300">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="text-footer-foreground/80 hover:text-[#006B3D] transition-colors duration-300">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-footer-foreground/80 hover:text-[#006B3D] transition-colors duration-300">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/lgpd" className="text-footer-foreground/80 hover:text-[#006B3D] transition-colors duration-300">
                  LGPD
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-footer-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-footer-foreground/60 text-sm">
              © 2025 Copyright | Fazer Currículo Grátis | Todos os direitos reservados | Desenvolvido por <a href="https://danielolimpio.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#006B3D] transition-colors">DanielOlimpio</a>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-footer-foreground/60">
              <Link to="/politica-de-privacidade" className="hover:text-[#006B3D] transition-colors duration-300">
                Política de Privacidade
              </Link>
              <Link to="/termos-de-uso" className="hover:text-[#006B3D] transition-colors duration-300">
                Termos de Uso
              </Link>
              <Link to="/lgpd" className="hover:text-[#006B3D] transition-colors duration-300">
                LGPD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;