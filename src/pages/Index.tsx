import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TemplatesSection from "@/components/TemplatesSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";

const Index = () => {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Criar Currículo Grátis Online - Modelos Profissionais | Fazer Currículo</title>
        <meta name="description" content="Crie seu currículo profissional gratuitamente com nossos modelos modernos e otimizados para ATS. Ferramenta 100% grátis para criar currículos que impressionam recrutadores." />
        <meta name="keywords" content="criar currículo grátis, currículo profissional, fazer currículo online, modelos de currículo, currículo ATS, currículo para emprego" />
        <link rel="canonical" href="https://fazercurriculo.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Criar Currículo Grátis Online - Modelos Profissionais" />
        <meta property="og:description" content="Crie seu currículo profissional gratuitamente com nossos modelos modernos e otimizados para ATS. 100% grátis para sempre." />
        <meta property="og:url" content="https://fazercurriculo.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fazercurriculo.com/og-fazer-curriculo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Criar Currículo Grátis Online - Modelos Profissionais" />
        <meta name="twitter:description" content="Crie seu currículo profissional gratuitamente com nossos modelos modernos e otimizados para ATS." />
        <meta name="twitter:image" content="https://fazercurriculo.com/og-fazer-curriculo.png" />
        
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>
      
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TemplatesSection />
        <BlogPreviewSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
