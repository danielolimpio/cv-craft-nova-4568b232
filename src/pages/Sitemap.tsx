import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { FileText, Home, Info, Mail, BookOpen, HelpCircle, Shield, Users } from "lucide-react";
import { Helmet } from "react-helmet";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";

const Sitemap = () => {
  const breadcrumbItems = [
    { label: "Mapa do Site" }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Sitemap", url: "/sitemap" }
  ]);

  const sitemapSections = [
    {
      title: "Páginas Principais",
      icon: Home,
      links: [
        { url: "/", label: "Início" },
        { url: "/criar-curriculo", label: "Criar Currículo" },
        { url: "/como-funciona", label: "Como Funciona" },
        { url: "/sobre", label: "Sobre" },
        { url: "/contato", label: "Contato" },
      ],
    },
    {
      title: "Blog - Artigos sobre Currículo",
      icon: BookOpen,
      links: [
        { url: "/blog", label: "Blog Principal" },
        { url: "/blog/como-criar-curriculo-profissional-2026", label: "Como Criar um Currículo Profissional em 2026" },
        { url: "/blog/10-erros-comuns-curriculos", label: "10 Erros Comuns em Currículos que Você Deve Evitar" },
        { url: "/blog/preparar-curriculo-sistemas-ats", label: "Como Preparar Seu Currículo para Sistemas ATS" },
        { url: "/blog/curriculo-primeiro-emprego-o-que-incluir", label: "Currículo para Primeiro Emprego: O Que Incluir e Evitar" },
        { url: "/blog/curriculo-sem-experiencia-estrategias", label: "Currículo Sem Experiência: Estratégias para Jovens e Iniciantes" },
        { url: "/blog/objetivo-profissional-curriculo", label: "Objetivo Profissional no Currículo: Exemplos Práticos" },
        { url: "/blog/destaque-habilidades-estrategia-impacto", label: "Destaque suas Habilidades com Estratégia e Impacto" },
        { url: "/blog/perfil-linkedin-recrutadores", label: "Como Criar um Perfil no LinkedIn que Atrai Recrutadores" },
        { url: "/blog/carta-apresentacao-empregador", label: "Carta de Apresentação que Conquiste o Empregador" },
        { url: "/blog/curriculo-estagio-estudantes", label: "Currículo para Estágio: O Guia Definitivo para Estudantes" },
        { url: "/blog/curriculo-vs-linkedin-2026", label: "Diferença Entre Currículo e Perfil no LinkedIn em 2026" },
        { url: "/blog/o-que-recrutadores-buscam-curriculo", label: "O Que Recrutadores Realmente Buscam em um Currículo Hoje" },
        { url: "/blog/curriculo-ingles-estrutura-erros", label: "Currículo em Inglês: Estrutura, Erros Comuns e Exemplos" },
        { url: "/blog/curriculo-ti-priorizar-2026", label: "Currículo para Área de TI: O Que Priorizar em 2026" },
        { url: "/blog/profissoes-mais-vagas-brasil-2030", label: "Quais profissões terão mais vagas no Brasil até 2030?" },
      ],
    },
    {
      title: "Suporte e Ajuda",
      icon: HelpCircle,
      links: [
        { url: "/central-de-ajuda", label: "Central de Ajuda" },
        { url: "/faq", label: "Perguntas Frequentes (FAQ)" },
      ],
    },
    {
      title: "Legal e Privacidade",
      icon: Shield,
      links: [
        { url: "/termos-de-uso", label: "Termos de Uso" },
        { url: "/politica-de-privacidade", label: "Política de Privacidade" },
        { url: "/lgpd", label: "LGPD - Lei Geral de Proteção de Dados" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Mapa do Site - Fazer Currículo | Navegação Completa</title>
        <meta 
          name="description" 
          content="Navegue por todas as páginas do Fazer Currículo: ferramentas, artigos, guias e recursos para criar currículos profissionais." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fazercurriculo.com/sitemap" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mapa do Site - Fazer Currículo" />
        <meta property="og:description" content="Navegue por todas as páginas do Fazer Currículo: ferramentas, artigos e recursos." />
        <meta property="og:url" content="https://fazercurriculo.com/sitemap" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fazercurriculo.com/og-fazer-curriculo.png" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Fazer Currículo" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mapa do Site - Fazer Currículo" />
        <meta name="twitter:description" content="Navegue por todas as páginas do Fazer Currículo." />
        <meta name="twitter:image" content="https://fazercurriculo.com/og-fazer-curriculo.png" />
        
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-12 max-w-6xl">
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <FileText className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Mapa do Site
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navegue por todas as páginas e recursos disponíveis no Fazer Currículo
          </p>
        </div>

        {/* Sitemap Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {sitemapSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {section.title}
                  </h2>
                </div>
                
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.url}
                        className="text-muted-foreground hover:text-primary hover:underline transition-colors flex items-start gap-2 group"
                      >
                        <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
          <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Pronto para Criar Seu Currículo?</h2>
          <p className="text-muted-foreground mb-6">
            Comece agora a criar um currículo profissional de forma gratuita
          </p>
          <Link
            to="/criar-curriculo"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Criar Currículo Grátis
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Última atualização: {new Date().toLocaleDateString('pt-BR')} | 
            <a href="/sitemap.xml" className="ml-1 hover:text-primary underline" target="_blank" rel="noopener noreferrer">
              Sitemap XML para robôs
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;
