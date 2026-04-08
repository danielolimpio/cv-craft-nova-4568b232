import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Users, Sparkles, Facebook, Twitter, Linkedin, Instagram, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { generateBreadcrumbSchema } from "@/lib/schema";
import danielPhoto from "@/assets/daniel-olimpio.jpg";

const Sobre = () => {
  const breadcrumbItems = [
    { label: "Sobre" }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Sobre", url: "/sobre" }
  ]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Sobre o Fazer Currículo — Quem Somos e Nossa Missão</title>
        <meta name="description" content="Conheça o Fazer Currículo: plataforma 100% gratuita que já ajudou milhares de brasileiros a criar currículos profissionais e conquistar vagas." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fazercurriculo.com/sobre" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sobre Nós - Fazer Currículo" />
        <meta property="og:description" content="Conheça a missão do Fazer Currículo: democratizar o acesso a ferramentas profissionais de criação de currículos." />
        <meta property="og:url" content="https://fazercurriculo.com/sobre" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fazercurriculo.com/og-fazer-curriculo.png" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Fazer Currículo" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre Nós - Fazer Currículo" />
        <meta name="twitter:description" content="Conheça a missão do Fazer Currículo: democratizar o acesso a ferramentas profissionais." />
        <meta name="twitter:image" content="https://fazercurriculo.com/og-fazer-curriculo.png" />
        
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <main className="pt-32">
        <div className="container mx-auto px-4 max-w-4xl mb-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nossa Missão: Democratizar o Acesso a Currículos Profissionais
          </h1>
          <p className="text-xl text-muted-foreground">
            Acreditamos que todos merecem ter acesso a ferramentas profissionais de qualidade, 
            independentemente de sua situação financeira.
          </p>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-16 px-4" style={{ backgroundColor: "#2C2C2C" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(0, 107, 61, 0.1)" }}>
                  <Target className="w-6 h-6" style={{ color: "#006B3D" }} />
                </div>
                <CardTitle>Nossa Visão</CardTitle>
                <CardDescription>
                  Tornar-se a principal plataforma brasileira para criação de currículos 
                  profissionais, ajudando milhões de pessoas a conquistarem suas oportunidades 
                  de carreira.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(0, 107, 61, 0.1)" }}>
                  <Heart className="w-6 h-6" style={{ color: "#006B3D" }} />
                </div>
                <CardTitle>Nossos Valores</CardTitle>
                <CardDescription>
                  Gratuidade, qualidade, simplicidade e inovação. Nos comprometemos a oferecer 
                  sempre o melhor serviço sem cobrar nada dos nossos usuários.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(0, 107, 61, 0.1)" }}>
                  <Users className="w-6 h-6" style={{ color: "#006B3D" }} />
                </div>
                <CardTitle>Nossa Comunidade</CardTitle>
                <CardDescription>
                  Mais de 50.000 profissionais já confiaram em nós para criar seus currículos. 
                  Fazemos parte da jornada de sucesso de cada um deles.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-8">Nossa História</h3>
          <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                O <strong>FazerCurriculo.com</strong> nasceu da frustração de ver tantas pessoas 
                talentosas sendo impedidas de progredir em suas carreiras simplesmente por não terem 
                acesso a ferramentas profissionais de criação de currículos.
              </p>
            <p className="mb-6">
              Percebemos que a maioria das plataformas cobrava valores elevados por recursos básicos, 
              ou oferecia versões gratuitas tão limitadas que não eram realmente úteis. Decidimos 
              mudar isso.
            </p>
            <p className="mb-6">
              Criamos uma plataforma 100% gratuita, sem pegadinhas, sem limites artificiais e sem 
              marcas d'água. Nossa ferramenta oferece recursos de nível profissional que você 
              encontraria apenas em serviços premium.
            </p>
            <p>
              Hoje, milhares de profissionais usam nossa plataforma todos os meses para criar 
              currículos que realmente se destacam. E continuamos evoluindo, adicionando novos 
              recursos e melhorias baseadas no feedback da nossa comunidade.
            </p>
          </div>
        </div>
      </section>

      {/* Developer Profile Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img 
                  src={danielPhoto} 
                  alt="Daniel Olimpio - Desenvolvedor Web" 
                  className="w-80 h-80 object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold mb-2">Daniel Olimpio</h2>
              <p className="text-xl mb-6" style={{ color: "#006B3D" }}>Especialista em Estratégias de Carreira</p>
              
              <h3 className="text-xl font-semibold mb-3">Sobre Mim</h3>
              <p className="text-muted-foreground mb-6">
                Daniel Olimpio é especialista em estratégias de carreira há mais de 8 anos, com experiência 
                em recrutamento corporativo e orientação profissional. Já ajudou mais de 3.000 brasileiros 
                a transformarem seus currículos em ferramentas de conquista — muitos conseguiram entrevistas 
                em empresas como Nubank, Ambev e XP.
              </p>

              <h3 className="text-xl font-semibold mb-3">Minha Missão</h3>
              <p className="text-muted-foreground mb-4">
                Após ver centenas de bons profissionais sendo ignorados por currículos genéricos, ele criou 
                o FazerCurrículo.com com uma abordagem prática: foco em resultados, linguagem de ATS e 
                storytelling estratégico.
              </p>
              <p className="text-muted-foreground mb-6">
                Hoje, ele lidera o projeto com a missão de transformar currículos em portas abertas — 
                porque ninguém merece ser invisível.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/danielolimpio.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#006B3D] hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/danielolimpio_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#006B3D] hover:text-white transition-colors"
                  aria-label="Twitter/X"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/danielolimpio-com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#006B3D] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/danielolimpio_com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#006B3D] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://danielolimpio.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#006B3D] hover:text-white transition-colors"
                  aria-label="Website"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#2C2C2C" }}>
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Por Que Nos Escolher?</h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#006B3D" }}></div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-white">100% Gratuito Para Sempre</h4>
                <p className="text-white/80">
                  Sem taxas escondidas, sem planos premium obrigatórios, sem limites de uso. 
                  Tudo é realmente grátis.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#006B3D" }}></div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-white">Sem Cadastro Necessário</h4>
                <p className="text-white/80">
                  Você não precisa criar conta, fornecer email ou passar por processos burocráticos. 
                  É só acessar e criar.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#006B3D" }}></div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-white">Qualidade Profissional</h4>
                <p className="text-white/80">
                  Nossos templates são desenvolvidos seguindo as melhores práticas de RH e são 
                  compatíveis com sistemas ATS (Applicant Tracking Systems).
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#006B3D" }}></div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-white">Privacidade Garantida</h4>
                <p className="text-white/80">
                  Seus dados não são armazenados em nossos servidores. Tudo fica apenas no seu 
                  navegador, garantindo total privacidade.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#006B3D" }}></div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-white">Suporte Contínuo</h4>
                <p className="text-white/80">
                  Atualizamos constantemente nossa plataforma com novos recursos, templates e 
                  melhorias baseadas no feedback dos usuários.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto Para Começar?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Junte-se a milhares de profissionais que já criaram seus currículos conosco!
          </p>
          <Link to="/criar-curriculo">
            <Button className="btn-hero" size="lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Criar Meu Currículo Grátis
            </Button>
          </Link>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
