// SEO utility functions for meta tags and structured data

const BASE_URL = "https://fazercurriculo.com";
const SITE_NAME = "Fazer Currículo";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-fazer-curriculo.png`;

export interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: "website" | "article";
  ogImage?: string;
  noIndex?: boolean;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    section?: string;
  };
}

export const generateSEOMeta = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  article,
}: SEOProps) => {
  const fullCanonical = canonical.startsWith("http") 
    ? canonical 
    : `${BASE_URL}${canonical}`;
  
  const fullOgImage = ogImage.startsWith("http") 
    ? ogImage 
    : `${BASE_URL}${ogImage}`;

  return {
    title,
    description,
    canonical: fullCanonical,
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    og: {
      title,
      description,
      url: fullCanonical,
      type: ogType,
      image: fullOgImage,
      imageWidth: "1200",
      imageHeight: "630",
      locale: "pt_BR",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      site: "@FazerCurriculo",
      title,
      description,
      image: fullOgImage,
    },
    article: article ? {
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime || article.publishedTime,
      author: article.author,
      section: article.section,
    } : undefined,
  };
};

// Generate WebPage schema for non-article pages
export const generateWebPageSchema = (
  title: string,
  description: string,
  url: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url.startsWith("http") ? url : `${BASE_URL}${url}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": SITE_NAME,
      "url": BASE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": DEFAULT_OG_IMAGE
      }
    }
  };
};

// Generate LocalBusiness schema for contact page
export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SITE_NAME,
    "url": BASE_URL,
    "email": "contato@fazercurriculo.com",
    "telephone": "(12) 98251-9116",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Julia Freire, 1200",
      "addressLocality": "João Pessoa",
      "addressRegion": "PB",
      "addressCountry": "BR"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "Gratuito"
  };
};

// Generate SoftwareApplication schema for the curriculum builder
export const generateSoftwareAppSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Fazer Currículo - Criador de Currículos",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    },
    "description": "Ferramenta gratuita para criar currículos profissionais otimizados para ATS"
  };
};

// Generate HowTo schema for "Como Funciona" page
export const generateHowToSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Criar um Currículo Profissional",
    "description": "Passo a passo para criar seu currículo profissional gratuitamente",
    "totalTime": "PT10M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Clique em Criar Currículo",
        "text": "Acesse a ferramenta de criação de currículos clicando no botão 'Criar Currículo Grátis'"
      },
      {
        "@type": "HowToStep",
        "name": "Preencha suas informações",
        "text": "Complete os campos com seus dados pessoais, experiências e formação"
      },
      {
        "@type": "HowToStep",
        "name": "Personalize o visual",
        "text": "Ajuste fontes, cores e layout conforme sua preferência"
      },
      {
        "@type": "HowToStep",
        "name": "Baixe em PDF",
        "text": "Quando satisfeito, baixe seu currículo profissional em PDF"
      }
    ]
  };
};
