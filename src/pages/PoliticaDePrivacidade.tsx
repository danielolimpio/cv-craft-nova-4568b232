import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Shield } from "lucide-react";
import { Helmet } from "react-helmet";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";

const PoliticaDePrivacidade = () => {
  const breadcrumbItems = [
    { label: "Política de Privacidade" }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Política de Privacidade", url: "/politica-de-privacidade" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Política de Privacidade - Fazer Currículo</title>
        <meta name="description" content="Conheça nossa política de privacidade e como protegemos seus dados pessoais na plataforma Fazer Currículo." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fazercurriculo.com/politica-de-privacidade" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Política de Privacidade - Fazer Currículo" />
        <meta property="og:description" content="Conheça nossa política de privacidade e como protegemos seus dados pessoais." />
        <meta property="og:url" content="https://fazercurriculo.com/politica-de-privacidade" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fazercurriculo.com/og-fazer-curriculo.png" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Fazer Currículo" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Política de Privacidade - Fazer Currículo" />
        <meta name="twitter:description" content="Conheça nossa política de privacidade e proteção de dados." />
        <meta name="twitter:image" content="https://fazercurriculo.com/og-fazer-curriculo.png" />
        
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="flex justify-center mb-6 mt-8">
            <Shield className="w-16 h-16" style={{ color: '#006B3D' }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Política de Privacidade</h1>
          <p className="text-muted-foreground mb-8">Última atualização: 29 de novembro de 2025</p>

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
                <li>Exibir anúncios relevantes através do Google AdSense</li>
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
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos cookies para melhorar sua experiência. Você pode configurar seu navegador para 
                recusar cookies, mas isso pode afetar algumas funcionalidades do site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cookies de terceiros (como Google Analytics e Google AdSense) podem ser usados para 
                personalizar anúncios e analisar o tráfego do site. Para mais informações sobre como 
                o Google usa dados, visite a <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de Privacidade do Google</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Publicidade</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Este site utiliza o Google AdSense para exibir anúncios relevantes. O Google pode usar 
                cookies e tecnologias semelhantes para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Exibir anúncios personalizados baseados em suas visitas anteriores a este e outros sites</li>
                <li>Medir a eficácia dos anúncios</li>
                <li>Evitar que você veja o mesmo anúncio repetidamente</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Você pode gerenciar suas preferências de anúncios visitando o <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Gerenciador de Preferências de Anúncios do Google</a> 
                ou optar por não receber anúncios personalizados através da <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Digital Advertising Alliance</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Alterações nesta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre alterações 
                significativas publicando a nova política nesta página e atualizando a data de "última 
                atualização".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Contato</h2>
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
