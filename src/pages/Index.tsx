import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TemplatesSection from "@/components/TemplatesSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { generateOrganizationSchema, generateWebSiteSchema, generateSoftwareAppSchema } from "@/lib/schema";

const Index = () => {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  const softwareAppSchema = generateSoftwareAppSchema();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Fazer Currículo Grátis Online em 5 Min ✓ Modelo 2026</title>
        <meta name="description" content="Crie seu currículo profissional grátis em 5 minutos — sem cadastro. Modelos prontos para ATS + download em PDF. Já são 50 mil currículos criados. Conquiste sua vaga!" />
        <meta name="keywords" content="criar currículo grátis, currículo profissional, fazer currículo online, modelos de currículo, currículo ATS, currículo para emprego" />
        <link rel="canonical" href="https://fazercurriculo.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Fazer Currículo Grátis Online em 5 Min ✓ Modelo 2026" />
        <meta property="og:description" content="Crie seu currículo grátis em 5 min — sem cadastro. Modelos ATS + PDF. 50 mil currículos criados!" />
        <meta property="og:url" content="https://fazercurriculo.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fazercurriculo.com/og-fazer-curriculo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fazer Currículo Grátis Online em 5 Minutos | 2026" />
        <meta name="twitter:description" content="Crie seu currículo profissional grátis agora — sem cadastro, com modelos prontos e download em PDF." />
        <meta name="twitter:image" content="https://fazercurriculo.com/og-fazer-curriculo.png" />
        
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(softwareAppSchema)}
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
