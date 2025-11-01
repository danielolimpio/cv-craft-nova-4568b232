import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const PoliticaDePrivacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16" style={{ color: '#006B3D' }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Política de Privacidade</h1>
          <p className="text-muted-foreground mb-8">Última atualização: 28 de outubro de 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                O FazerCurriculo.com está comprometido em proteger sua privacidade. Esta Política de Privacidade 
                explica como coletamos, usamos, divulgamos e protegemos suas informações quando você usa nosso serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Informações que Coletamos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Coletamos as seguintes informações quando você usa nosso serviço:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Dados do Currículo:</strong> Nome, contato, experiência profissional, formação, 
                habilidades e outras informações que você escolhe incluir em seu currículo</li>
                <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, 
                tempo de permanência e outras informações de uso</li>
                <li><strong>Cookies:</strong> Utilizamos cookies para melhorar sua experiência e analisar 
                o uso do site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Como Usamos suas Informações</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Fornecer e manter nosso serviço de criação de currículos</li>
                <li>Melhorar e personalizar sua experiência</li>
                <li>Analisar como o serviço é usado</li>
                <li>Detectar, prevenir e resolver problemas técnicos</li>
                <li>Comunicar atualizações e novidades (se você optar por receber)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Armazenamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Os dados do seu currículo são armazenados localmente no seu navegador (localStorage). Não 
                armazenamos suas informações pessoais em nossos servidores, exceto dados de análise 
                anônimos para melhorar o serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Compartilhamento de Informações</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>Para proteger nossos direitos e segurança</li>
                <li>Com provedores de serviços que nos auxiliam na operação do site (sob 
                acordos de confidencialidade)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Segurança dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas 
                informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, 
                nenhum método de transmissão pela Internet é 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Seus Direitos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você tem o direito de:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados imprecisos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Opor-se ao processamento de seus dados</li>
                <li>Solicitar a portabilidade de seus dados</li>
                <li>Retirar seu consentimento a qualquer momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies para melhorar sua experiência. Você pode configurar seu navegador para 
                recusar cookies, mas isso pode afetar algumas funcionalidades do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Alterações nesta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre alterações 
                significativas publicando a nova política nesta página e atualizando a data de "última 
                atualização".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através 
                do email contato@fazercurriculo.com ou pelo telefone (12) 98251-9116.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidade;
