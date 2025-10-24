import { FileText, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer-background text-footer-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="text-xl font-bold">
                CriarCurriculoGratis.com
              </div>
            </div>
            
            <p className="text-footer-foreground/80 leading-relaxed mb-6 max-w-lg">
              A plataforma mais avançada do Brasil para criação de currículos profissionais. 
              Utilizamos inteligência artificial para garantir que seu currículo se destaque 
              e seja aprovado pelas melhores empresas.
            </p>
            
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-footer-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Social className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                "Criar Currículo",
                "Templates",
                "Ferramentas IA",
                "Blog",
                "Tutoriais",
                "Exemplos"
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-footer-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-6">Suporte</h4>
            <ul className="space-y-3 mb-6">
              {[
                "Central de Ajuda",
                "FAQ",
                "Contato",
                "Termos de Uso",
                "Privacidade",
                "LGPD"
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-footer-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-footer-foreground/80">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@criarcurriculogratis.com</span>
              </div>
              <div className="flex items-center space-x-2 text-footer-foreground/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-footer-foreground/80">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-footer-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-footer-foreground/60 text-sm">
              © 2024 CriarCurriculoGratis.com. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-footer-foreground/60">
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;