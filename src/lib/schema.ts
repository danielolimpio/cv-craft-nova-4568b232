// Entity-Based SEO Schema.org structured data system
// Inspired by InLinks.com entity optimization methodology

const BASE_URL = "https://fazercurriculo.com";
const SITE_NAME = "Fazer Currículo";
const LOGO_URL = `${BASE_URL}/og-fazer-curriculo.png`;

// ==========================================
// CORE ENTITY DEFINITIONS
// ==========================================

/** Central entity: the organization with full entity graph */
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  "name": SITE_NAME,
  "url": BASE_URL,
  "logo": {
    "@type": "ImageObject",
    "@id": `${BASE_URL}/#logo`,
    "url": LOGO_URL,
    "width": 1200,
    "height": 630
  },
  "image": LOGO_URL,
  "description": "Plataforma gratuita para criar currículos profissionais online com templates otimizados para ATS. Mais de 50 mil currículos criados.",
  "sameAs": [
    "https://www.instagram.com/fazercurriculooficial"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": `${BASE_URL}/contato`,
    "availableLanguage": ["Portuguese"],
    "areaServed": "BR"
  },
  "knowsAbout": [
    "Currículo Profissional",
    "CV",
    "Modelo de Currículo",
    "Currículo ATS",
    "Currículo sem Experiência",
    "Carta de Apresentação",
    "LinkedIn",
    "Entrevista de Emprego",
    "Recrutamento e Seleção",
    "Mercado de Trabalho"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Brasil"
  }
});

/** WebSite entity with SearchAction */
export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "name": SITE_NAME,
  "url": BASE_URL,
  "publisher": { "@id": `${BASE_URL}/#organization` },
  "inLanguage": "pt-BR",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BASE_URL}/blog?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

/** SoftwareApplication entity for the curriculum builder tool */
export const generateSoftwareAppSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${BASE_URL}/#app`,
  "name": "Fazer Currículo - Criador de Currículos Online",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "url": `${BASE_URL}/criar-curriculo`,
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250",
    "bestRating": "5"
  },
  "description": "Ferramenta gratuita para criar currículos profissionais otimizados para ATS com download em PDF",
  "creator": { "@id": `${BASE_URL}/#organization` },
  "about": [
    { "@type": "Thing", "name": "Currículo", "sameAs": "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)" },
    { "@type": "Thing", "name": "Applicant Tracking System", "sameAs": "https://en.wikipedia.org/wiki/Applicant_tracking_system" }
  ]
});

// ==========================================
// ENTITY-ENRICHED ARTICLE SCHEMA
// ==========================================

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ArticleEntity {
  name: string;
  sameAs?: string;
  type?: string;
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
  /** Entity-based: topics this article is about */
  about?: ArticleEntity[];
  /** Entity-based: related articles in the same cluster */
  relatedLinks?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

/** BreadcrumbList schema */
export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Início",
      "item": BASE_URL
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": item.name,
      "item": `${BASE_URL}${item.url}`
    }))
  ]
});

/** Entity-enriched Article schema with about, mentions, and isPartOf */
export const generateArticleSchema = (article: Article) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE_URL}${article.url}#article`,
    "headline": article.title,
    "description": article.description,
    "image": article.image.startsWith("http") ? article.image : `${BASE_URL}${article.image}`,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "wordCount": 2500,
    "inLanguage": "pt-BR",
    "author": {
      "@type": "Person",
      "name": article.author.name,
      "url": article.author.url ? `${BASE_URL}${article.author.url}` : undefined,
      "jobTitle": "Especialista em Carreiras e Currículos",
      "worksFor": { "@id": `${BASE_URL}/#organization` }
    },
    "publisher": { "@id": `${BASE_URL}/#organization` },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}${article.url}`
    },
    "isPartOf": { "@id": `${BASE_URL}/#website` }
  };

  // Entity-based: add about entities with sameAs for knowledge graph connection
  if (article.about && article.about.length > 0) {
    schema.about = article.about.map(entity => ({
      "@type": entity.type || "Thing",
      "name": entity.name,
      ...(entity.sameAs ? { "sameAs": entity.sameAs } : {})
    }));
  }

  // Entity-based: add related links for topic cluster signal
  if (article.relatedLinks && article.relatedLinks.length > 0) {
    schema.relatedLink = article.relatedLinks.map(link => `${BASE_URL}${link}`);
  }

  return schema;
};

/** FAQPage schema */
export const generateFAQSchema = (faqs: FAQ[]) => ({
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
});

/** HowTo schema for pillar page */
export const generateHowToSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${BASE_URL}/como-funciona#howto`,
  "name": "Como Criar um Currículo Profissional Online Grátis",
  "description": "Passo a passo para criar seu currículo profissional gratuitamente em menos de 10 minutos",
  "totalTime": "PT10M",
  "tool": {
    "@type": "HowToTool",
    "name": "Fazer Currículo - Criador Online Grátis"
  },
  "about": [
    { "@type": "Thing", "name": "Currículo", "sameAs": "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)" },
    { "@type": "Thing", "name": "PDF", "sameAs": "https://pt.wikipedia.org/wiki/Portable_Document_Format" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Acesse o criador de currículos",
      "text": "Clique em 'Criar Currículo Grátis' para abrir o editor online",
      "url": `${BASE_URL}/criar-curriculo`
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Preencha seus dados profissionais",
      "text": "Complete os campos com dados pessoais, experiências, formação acadêmica e habilidades"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Personalize o visual do currículo",
      "text": "Ajuste fontes, cores, foto e layout conforme sua preferência profissional"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Baixe em PDF",
      "text": "Baixe seu currículo profissional em PDF de alta qualidade, pronto para enviar"
    }
  ]
});

/** WebPage schema for institutional pages */
export const generateWebPageSchema = (title: string, description: string, url: string, about?: ArticleEntity[]) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}${url}`,
    "name": title,
    "description": description,
    "url": `${BASE_URL}${url}`,
    "isPartOf": { "@id": `${BASE_URL}/#website` },
    "publisher": { "@id": `${BASE_URL}/#organization` },
    "inLanguage": "pt-BR"
  };

  if (about && about.length > 0) {
    schema.about = about.map(entity => ({
      "@type": entity.type || "Thing",
      "name": entity.name,
      ...(entity.sameAs ? { "sameAs": entity.sameAs } : {})
    }));
  }

  return schema;
};

// ==========================================
// TOPIC CLUSTER DEFINITIONS
// ==========================================

export interface ClusterArticle {
  title: string;
  url: string;
  description: string;
}

/** Topic cluster map for internal linking */
export const topicClusters: Record<string, ClusterArticle[]> = {
  "tipos-curriculo": [
    { title: "Como Criar um Currículo Profissional em 2026", url: "/blog/como-criar-curriculo-profissional-2026", description: "Guia completo para criar currículo que se destaca" },
    { title: "Currículo para Primeiro Emprego", url: "/blog/curriculo-primeiro-emprego-o-que-incluir", description: "O que incluir quando não tem experiência formal" },
    { title: "Currículo Sem Experiência: Estratégias", url: "/blog/curriculo-sem-experiencia-estrategias", description: "Técnicas para valorizar seu currículo mesmo sem experiência" },
    { title: "Currículo para Estágio", url: "/blog/curriculo-estagio-estudantes", description: "Guia definitivo para estudantes que buscam estágio" },
    { title: "Currículo ATS: Como Preparar", url: "/blog/preparar-curriculo-sistemas-ats", description: "Otimize seu currículo para sistemas de triagem automatizada" },
  ],
  "estrutura-otimizacao": [
    { title: "Objetivo Profissional no Currículo", url: "/blog/objetivo-profissional-curriculo", description: "Como escrever um objetivo que impressiona recrutadores" },
    { title: "Habilidades no Currículo", url: "/blog/destaque-habilidades-estrategia-impacto", description: "Estratégias para destacar competências com impacto" },
    { title: "10 Erros Comuns no Currículo", url: "/blog/10-erros-comuns-curriculos", description: "Erros que eliminam candidatos e como evitá-los" },
    { title: "Currículo em Inglês", url: "/blog/curriculo-ingles-estrutura-erros", description: "Estrutura correta e erros fatais no CV em inglês" },
  ],
  "carreira-mercado": [
    { title: "Currículo vs LinkedIn em 2026", url: "/blog/curriculo-vs-linkedin-2026", description: "Quando usar cada um e como alinhar sua presença profissional" },
    { title: "Perfil LinkedIn para Recrutadores", url: "/blog/perfil-linkedin-recrutadores", description: "Como otimizar seu perfil para ser encontrado por headhunters" },
    { title: "Currículo para TI em 2026", url: "/blog/curriculo-ti-priorizar-2026", description: "O que priorizar no currículo para área de tecnologia" },
    { title: "Profissões com Mais Vagas até 2030", url: "/blog/profissoes-mais-vagas-brasil-2030", description: "As carreiras com maior demanda no Brasil até 2030" },
  ],
  "processo-seletivo": [
    { title: "Carta de Apresentação", url: "/blog/carta-apresentacao-empregador", description: "Como escrever uma carta que complementa seu currículo" },
    { title: "O Que Recrutadores Buscam", url: "/blog/o-que-recrutadores-buscam-curriculo", description: "Critérios reais usados na triagem de currículos" },
    { title: "Networking Profissional", url: "/blog/perfil-linkedin-recrutadores", description: "Construa conexões que abrem portas profissionais" },
  ]
};

/** Get related articles for a given article URL (same cluster + cross-cluster) */
export const getRelatedArticles = (currentUrl: string, maxItems: number = 4): ClusterArticle[] => {
  const related: ClusterArticle[] = [];
  let currentCluster = "";

  // Find current cluster
  for (const [cluster, articles] of Object.entries(topicClusters)) {
    if (articles.some(a => a.url === currentUrl)) {
      currentCluster = cluster;
      // Add same-cluster articles (excluding current)
      related.push(...articles.filter(a => a.url !== currentUrl));
      break;
    }
  }

  // Add cross-cluster articles if needed
  if (related.length < maxItems) {
    for (const [cluster, articles] of Object.entries(topicClusters)) {
      if (cluster !== currentCluster) {
        related.push(articles[0]); // Add pillar of each other cluster
        if (related.length >= maxItems + 2) break;
      }
    }
  }

  return related.slice(0, maxItems);
};

// ==========================================
// ENTITY DEFINITIONS FOR ARTICLES
// ==========================================

/** Pre-defined entities for each article to connect to the knowledge graph */
export const articleEntities: Record<string, ArticleEntity[]> = {
  "/blog/como-criar-curriculo-profissional-2026": [
    { name: "Currículo", sameAs: "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)", type: "Thing" },
    { name: "Applicant Tracking System", sameAs: "https://en.wikipedia.org/wiki/Applicant_tracking_system", type: "Thing" },
    { name: "Recrutamento", sameAs: "https://pt.wikipedia.org/wiki/Recrutamento", type: "Thing" },
  ],
  "/blog/10-erros-comuns-curriculos": [
    { name: "Currículo", sameAs: "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)", type: "Thing" },
    { name: "Processo seletivo", sameAs: "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_de_pessoal", type: "Thing" },
  ],
  "/blog/preparar-curriculo-sistemas-ats": [
    { name: "Applicant Tracking System", sameAs: "https://en.wikipedia.org/wiki/Applicant_tracking_system", type: "Thing" },
    { name: "Currículo", sameAs: "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)", type: "Thing" },
    { name: "Automação", sameAs: "https://pt.wikipedia.org/wiki/Automa%C3%A7%C3%A3o", type: "Thing" },
  ],
  "/blog/curriculo-primeiro-emprego-o-que-incluir": [
    { name: "Primeiro emprego", type: "Thing" },
    { name: "Currículo", sameAs: "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)", type: "Thing" },
    { name: "Mercado de trabalho", sameAs: "https://pt.wikipedia.org/wiki/Mercado_de_trabalho", type: "Thing" },
  ],
  "/blog/curriculo-sem-experiencia-estrategias": [
    { name: "Currículo", sameAs: "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)", type: "Thing" },
    { name: "Experiência profissional", type: "Thing" },
    { name: "Habilidades transferíveis", type: "Thing" },
  ],
  "/blog/objetivo-profissional-curriculo": [
    { name: "Objetivo profissional", type: "Thing" },
    { name: "Currículo", sameAs: "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)", type: "Thing" },
    { name: "Carreira", sameAs: "https://pt.wikipedia.org/wiki/Carreira", type: "Thing" },
  ],
  "/blog/destaque-habilidades-estrategia-impacto": [
    { name: "Competências profissionais", type: "Thing" },
    { name: "Currículo", sameAs: "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)", type: "Thing" },
    { name: "Soft skills", sameAs: "https://en.wikipedia.org/wiki/Soft_skills", type: "Thing" },
  ],
  "/blog/perfil-linkedin-recrutadores": [
    { name: "LinkedIn", sameAs: "https://pt.wikipedia.org/wiki/LinkedIn", type: "Thing" },
    { name: "Networking", sameAs: "https://pt.wikipedia.org/wiki/Networking", type: "Thing" },
    { name: "Recrutamento", sameAs: "https://pt.wikipedia.org/wiki/Recrutamento", type: "Thing" },
  ],
  "/blog/carta-apresentacao-empregador": [
    { name: "Carta de apresentação", type: "Thing" },
    { name: "Currículo", sameAs: "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)", type: "Thing" },
    { name: "Processo seletivo", sameAs: "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_de_pessoal", type: "Thing" },
  ],
  "/blog/curriculo-estagio-estudantes": [
    { name: "Estágio", sameAs: "https://pt.wikipedia.org/wiki/Est%C3%A1gio", type: "Thing" },
    { name: "Currículo", sameAs: "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)", type: "Thing" },
    { name: "Estudante universitário", type: "Thing" },
  ],
  "/blog/curriculo-vs-linkedin-2026": [
    { name: "LinkedIn", sameAs: "https://pt.wikipedia.org/wiki/LinkedIn", type: "Thing" },
    { name: "Currículo", sameAs: "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)", type: "Thing" },
    { name: "Marca pessoal", type: "Thing" },
  ],
  "/blog/o-que-recrutadores-buscam-curriculo": [
    { name: "Recrutamento", sameAs: "https://pt.wikipedia.org/wiki/Recrutamento", type: "Thing" },
    { name: "Currículo", sameAs: "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)", type: "Thing" },
    { name: "Seleção de pessoal", sameAs: "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_de_pessoal", type: "Thing" },
  ],
  "/blog/curriculo-ingles-estrutura-erros": [
    { name: "Língua inglesa", sameAs: "https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa", type: "Thing" },
    { name: "Currículo", sameAs: "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)", type: "Thing" },
    { name: "Globalização", sameAs: "https://pt.wikipedia.org/wiki/Globaliza%C3%A7%C3%A3o", type: "Thing" },
  ],
  "/blog/curriculo-ti-priorizar-2026": [
    { name: "Tecnologia da informação", sameAs: "https://pt.wikipedia.org/wiki/Tecnologia_da_informa%C3%A7%C3%A3o", type: "Thing" },
    { name: "Currículo", sameAs: "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)", type: "Thing" },
    { name: "Desenvolvimento de software", sameAs: "https://pt.wikipedia.org/wiki/Desenvolvimento_de_software", type: "Thing" },
  ],
  "/blog/profissoes-mais-vagas-brasil-2030": [
    { name: "Mercado de trabalho", sameAs: "https://pt.wikipedia.org/wiki/Mercado_de_trabalho", type: "Thing" },
    { name: "Profissão", sameAs: "https://pt.wikipedia.org/wiki/Profiss%C3%A3o", type: "Thing" },
    { name: "Brasil", sameAs: "https://pt.wikipedia.org/wiki/Brasil", type: "Thing" },
  ],
};
