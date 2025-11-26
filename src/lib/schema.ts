// Utility functions to generate Schema.org JSON-LD structured data

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface Article {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    name: string;
    url?: string;
  };
  url: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Generate Organization Schema
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fazer Currículo",
    "url": "https://fazercurriculo.com",
    "logo": "https://fazercurriculo.com/og-fazer-curriculo.png",
    "description": "Plataforma gratuita para criar currículos profissionais online com templates otimizados para ATS",
    "sameAs": [
      "https://www.instagram.com/fazercurriculooficial",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://fazercurriculo.com/contato",
      "availableLanguage": "Portuguese"
    }
  };
};

// Generate WebSite Schema with Search Action
export const generateWebSiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Fazer Currículo",
    "url": "https://fazercurriculo.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://fazercurriculo.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
};

// Generate BreadcrumbList Schema
export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  const baseUrl = "https://fazercurriculo.com";
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": baseUrl
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": `${baseUrl}${item.url}`
      }))
    ]
  };
};

// Generate Article Schema
export const generateArticleSchema = (article: Article) => {
  const baseUrl = "https://fazercurriculo.com";
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": `${baseUrl}${article.image}`,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "author": {
      "@type": "Person",
      "name": article.author.name,
      "url": article.author.url ? `${baseUrl}${article.author.url}` : undefined
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fazer Currículo",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/og-fazer-curriculo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}${article.url}`
    }
  };
};

// Generate FAQPage Schema
export const generateFAQSchema = (faqs: FAQ[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Helper: Use this in your component's Helmet to inject structured data:
// <script type="application/ld+json">{JSON.stringify(schema)}</script>
