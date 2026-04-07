/**
 * Pre-render script: Generates static HTML files for each route
 * so Google crawlers can index content without executing JavaScript.
 * 
 * Run after `vite build`: node scripts/prerender.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '..', 'dist');
const BASE_URL = 'https://fazercurriculo.com';

// Read the built index.html as template
const template = readFileSync(resolve(DIST, 'index.html'), 'utf-8');

// All routes with their unique SEO metadata
const routes = [
  {
    path: '/',
    title: 'Criar Currículo Grátis Online — Modelos Profissionais 2026 | Fazer Currículo',
    description: 'Crie seu currículo profissional gratuitamente com modelos modernos otimizados para ATS. Ferramenta 100% grátis, fácil e rápida. Comece agora!',
    keywords: 'criar currículo grátis, fazer currículo online, currículo profissional, modelos de currículo, currículo ATS',
    ogType: 'website',
  },
  {
    path: '/como-funciona',
    title: 'Como Funciona o Fazer Currículo — Passo a Passo Simples | 2026',
    description: 'Veja como criar seu currículo profissional em 3 passos simples. Escolha o modelo, preencha seus dados e baixe em PDF. 100% grátis e sem cadastro.',
    keywords: 'como fazer currículo, passo a passo currículo, criar currículo online grátis',
    ogType: 'website',
  },
  {
    path: '/criar-curriculo',
    title: 'Criar Currículo Grátis Agora — Editor Online Profissional | Fazer Currículo',
    description: 'Use nosso editor gratuito para criar seu currículo profissional. Modelos prontos, otimização ATS e download em PDF. Sem cadastro, sem pegadinha.',
    keywords: 'criar currículo, editor de currículo grátis, currículo online, gerar currículo PDF',
    ogType: 'website',
  },
  {
    path: '/sobre',
    title: 'Sobre Nós — Fazer Currículo | Plataforma Gratuita de Currículos',
    description: 'Conheça a missão do Fazer Currículo: ajudar milhões de brasileiros a criar currículos profissionais gratuitamente e conquistar o emprego dos sonhos.',
    keywords: 'sobre fazer currículo, plataforma currículo grátis, quem somos',
    ogType: 'website',
  },
  {
    path: '/contato',
    title: 'Contato — Fale Conosco | Fazer Currículo',
    description: 'Entre em contato com a equipe do Fazer Currículo. Tire dúvidas, envie sugestões ou solicite suporte. Respondemos em até 24 horas.',
    keywords: 'contato fazer currículo, suporte, fale conosco',
    ogType: 'website',
  },
  {
    path: '/blog',
    title: 'Blog — Dicas de Currículo, Carreira e Emprego | Fazer Currículo',
    description: 'Artigos com dicas práticas para melhorar seu currículo, se preparar para entrevistas e conquistar o emprego ideal. Atualizado semanalmente.',
    keywords: 'dicas currículo, blog emprego, carreira profissional, mercado de trabalho 2026',
    ogType: 'website',
  },
  {
    path: '/central-de-ajuda',
    title: 'Central de Ajuda — Perguntas e Suporte | Fazer Currículo',
    description: 'Encontre respostas para as perguntas mais comuns sobre como criar, editar e baixar seu currículo no Fazer Currículo.',
    keywords: 'ajuda currículo, suporte, perguntas frequentes, como usar',
    ogType: 'website',
  },
  {
    path: '/faq',
    title: 'FAQ — Perguntas Frequentes sobre Currículo | Fazer Currículo',
    description: 'Respostas para as dúvidas mais comuns sobre criação de currículo, formatação, ATS e muito mais. Tudo explicado de forma simples e direta.',
    keywords: 'FAQ currículo, perguntas frequentes, dúvidas currículo',
    ogType: 'website',
  },
  {
    path: '/termos-de-uso',
    title: 'Termos de Uso | Fazer Currículo',
    description: 'Leia os termos de uso da plataforma Fazer Currículo. Regras claras para uma experiência segura e transparente.',
    keywords: 'termos de uso, regras, política',
    ogType: 'website',
  },
  {
    path: '/politica-de-privacidade',
    title: 'Política de Privacidade | Fazer Currículo',
    description: 'Saiba como o Fazer Currículo protege seus dados pessoais. Transparência e segurança para todos os usuários.',
    keywords: 'política de privacidade, proteção de dados, LGPD',
    ogType: 'website',
  },
  {
    path: '/lgpd',
    title: 'LGPD — Proteção de Dados | Fazer Currículo',
    description: 'Entenda como o Fazer Currículo está em conformidade com a Lei Geral de Proteção de Dados (LGPD).',
    keywords: 'LGPD, proteção de dados, lei geral, privacidade',
    ogType: 'website',
  },
  {
    path: '/sitemap',
    title: 'Mapa do Site | Fazer Currículo',
    description: 'Navegue por todas as páginas do Fazer Currículo. Encontre artigos, ferramentas e informações facilmente.',
    keywords: 'mapa do site, sitemap, navegação',
    ogType: 'website',
  },
  // ===== BLOG ARTICLES =====
  {
    path: '/blog/como-criar-curriculo-profissional-2026',
    title: 'Como Criar um Currículo Profissional que se Destaca em 2026',
    description: 'Descubra as técnicas mais eficazes para criar um currículo que chama atenção dos recrutadores — com estratégias atualizadas para 2026.',
    keywords: 'como criar currículo 2026, currículo profissional, dicas currículo',
    ogType: 'article',
  },
  {
    path: '/blog/10-erros-comuns-curriculos',
    title: '10 Erros Comuns em Currículos que Eliminam Candidatos — Evite Agora',
    description: 'Conheça os 10 erros mais comuns que fazem recrutadores descartarem currículos em segundos. Saiba como corrigir cada um deles.',
    keywords: 'erros currículo, erros comuns, currículo rejeitado, dicas recrutadores',
    ogType: 'article',
  },
  {
    path: '/blog/preparar-curriculo-sistemas-ats',
    title: 'Como Preparar seu Currículo para Sistemas ATS — Guia Completo 2026',
    description: 'Aprenda a otimizar seu currículo para passar nos filtros automáticos (ATS) que 99% das grandes empresas usam. Guia prático e atualizado.',
    keywords: 'currículo ATS, sistemas rastreamento, otimizar currículo ATS',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-primeiro-emprego-o-que-incluir',
    title: 'Currículo para Primeiro Emprego — O que Incluir (Guia 2026)',
    description: 'Saiba exatamente o que colocar no currículo para o primeiro emprego, mesmo sem experiência. Modelo e dicas práticas para se destacar.',
    keywords: 'currículo primeiro emprego, sem experiência, jovem aprendiz, primeiro currículo',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-sem-experiencia-estrategias',
    title: 'Currículo Sem Experiência — Estratégias para Jovens e Iniciantes',
    description: 'Aprenda estratégias comprovadas para criar um currículo forte mesmo sem experiência profissional. Ideal para estudantes e iniciantes.',
    keywords: 'currículo sem experiência, estudante, iniciante, primeiro emprego',
    ogType: 'article',
  },
  {
    path: '/blog/objetivo-profissional-curriculo',
    title: 'Objetivo Profissional no Currículo — Como Escrever (Com Exemplos)',
    description: 'Descubra como escrever um objetivo profissional que impressiona recrutadores. Exemplos prontos para diversas áreas e níveis de experiência.',
    keywords: 'objetivo profissional, currículo objetivo, exemplos objetivo profissional',
    ogType: 'article',
  },
  {
    path: '/blog/destaque-habilidades-estrategia-impacto',
    title: 'Como Destacar Habilidades no Currículo — Estratégia de Impacto',
    description: 'Aprenda a destacar suas habilidades de forma estratégica no currículo para maximizar suas chances de ser chamado para entrevistas.',
    keywords: 'habilidades currículo, competências, soft skills, hard skills',
    ogType: 'article',
  },
  {
    path: '/blog/perfil-linkedin-recrutadores',
    title: 'Como Otimizar seu Perfil LinkedIn para Recrutadores em 2026',
    description: 'Guia completo para otimizar seu LinkedIn e ser encontrado por recrutadores. Dicas práticas para aumentar sua visibilidade profissional.',
    keywords: 'perfil LinkedIn, recrutadores, otimizar LinkedIn, networking profissional',
    ogType: 'article',
  },
  {
    path: '/blog/carta-apresentacao-empregador',
    title: 'Carta de Apresentação — Como Escrever para Conquistar o Empregador',
    description: 'Modelo e dicas para escrever uma carta de apresentação que complementa seu currículo e impressiona o empregador.',
    keywords: 'carta de apresentação, cover letter, empregador, modelo carta',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-estagio-estudantes',
    title: 'Currículo para Estágio — Guia Completo para Estudantes 2026',
    description: 'Saiba como montar um currículo para estágio que se destaca. Dicas específicas para universitários e estudantes técnicos.',
    keywords: 'currículo estágio, estudante, universitário, vaga estágio',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-vs-linkedin-2026',
    title: 'Currículo vs LinkedIn em 2026 — Qual é Mais Importante?',
    description: 'Compare currículo tradicional e LinkedIn: quando usar cada um, como otimizar ambos e qual tem mais peso para recrutadores em 2026.',
    keywords: 'currículo vs LinkedIn, recrutamento 2026, diferenças currículo LinkedIn',
    ogType: 'article',
  },
  {
    path: '/blog/o-que-recrutadores-buscam-curriculo',
    title: 'O Que Recrutadores Realmente Buscam em um Currículo Hoje',
    description: 'Descubra o que recrutadores analisam nos primeiros 7 segundos do seu currículo e como garantir que você passe nesse filtro inicial.',
    keywords: 'recrutadores currículo, o que recrutadores buscam, análise currículo',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-ingles-estrutura-erros',
    title: 'Currículo em Inglês — Estrutura, Erros Comuns e Exemplos Práticos',
    description: 'Guia completo para criar um currículo em inglês profissional. Estrutura correta, erros a evitar e exemplos prontos para copiar.',
    keywords: 'currículo inglês, resume, CV english, currículo internacional',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-ti-priorizar-2026',
    title: 'Currículo para Área de TI — O Que Priorizar em 2026',
    description: 'Saiba como montar um currículo de TI que se destaca: habilidades técnicas, projetos, certificações e o que recrutadores tech realmente avaliam.',
    keywords: 'currículo TI, desenvolvedor, programador, tecnologia, currículo tech',
    ogType: 'article',
  },
  {
    path: '/blog/profissoes-mais-vagas-brasil-2030',
    title: 'Quais Profissões Terão Mais Vagas no Brasil até 2030?',
    description: 'Descubra as carreiras com maior demanda futura segundo o Ministério do Trabalho, MEC e relatórios do WEF — e como se preparar agora.',
    keywords: 'profissões futuro, vagas 2030, carreiras em alta, mercado trabalho Brasil',
    ogType: 'article',
  },
];

/**
 * Generate a static HTML file for a given route
 */
function generatePage(route) {
  const canonical = route.path === '/' 
    ? `${BASE_URL}/` 
    : `${BASE_URL}${route.path}`;
  
  const ogImage = `${BASE_URL}/og-fazer-curriculo.png`;
  
  // Build unique <head> content for this route
  const headTags = `
    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <meta name="keywords" content="${route.keywords}" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="canonical" href="${canonical}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="${route.ogType}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="Fazer Currículo" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${ogImage}" />`;

  // Build noscript content for crawlers that don't execute JS
  const noscriptContent = `
    <noscript>
      <div style="max-width:800px;margin:0 auto;padding:40px 20px;font-family:system-ui,sans-serif;">
        <header style="margin-bottom:32px;">
          <a href="/" style="font-size:24px;font-weight:bold;color:#1a1a2e;text-decoration:none;">Fazer Currículo</a>
          <nav style="margin-top:16px;">
            <a href="/" style="margin-right:16px;color:#4361ee;">Início</a>
            <a href="/como-funciona" style="margin-right:16px;color:#4361ee;">Como Funciona</a>
            <a href="/criar-curriculo" style="margin-right:16px;color:#4361ee;">Criar Currículo</a>
            <a href="/blog" style="margin-right:16px;color:#4361ee;">Blog</a>
            <a href="/sobre" style="margin-right:16px;color:#4361ee;">Sobre</a>
            <a href="/contato" style="color:#4361ee;">Contato</a>
          </nav>
        </header>
        <main>
          <h1>${route.title}</h1>
          <p>${route.description}</p>
          ${route.ogType === 'article' ? `
          <p><a href="/blog" style="color:#4361ee;">← Voltar para o Blog</a></p>
          ` : ''}
          <p><a href="/criar-curriculo" style="display:inline-block;padding:12px 24px;background:#4361ee;color:white;text-decoration:none;border-radius:8px;margin-top:16px;">Criar Currículo Grátis</a></p>
        </main>
        <footer style="margin-top:48px;padding-top:24px;border-top:1px solid #eee;font-size:14px;color:#666;">
          <p>© ${new Date().getFullYear()} Fazer Currículo — Plataforma gratuita para criação de currículos profissionais.</p>
          <nav style="margin-top:8px;">
            <a href="/termos-de-uso" style="margin-right:12px;color:#666;">Termos de Uso</a>
            <a href="/politica-de-privacidade" style="margin-right:12px;color:#666;">Privacidade</a>
            <a href="/lgpd" style="margin-right:12px;color:#666;">LGPD</a>
            <a href="/sitemap" style="color:#666;">Mapa do Site</a>
          </nav>
        </footer>
      </div>
    </noscript>`;

  // Replace the template's <title> and meta tags
  let html = template;

  // Remove existing title, description, keywords, canonical, og, twitter tags from template
  html = html.replace(/<title>[^<]*<\/title>/, '');
  html = html.replace(/<meta\s+name="description"[^>]*\/?>/g, '');
  html = html.replace(/<meta\s+name="keywords"[^>]*\/?>/g, '');
  html = html.replace(/<link\s+rel="canonical"[^>]*\/?>/g, '');
  html = html.replace(/<meta\s+property="og:[^"]*"[^>]*\/?>/g, '');
  html = html.replace(/<meta\s+name="twitter:[^"]*"[^>]*\/?>/g, '');

  // Insert new head tags right after <head> opening + charset + viewport
  html = html.replace(
    /<meta name="viewport"[^>]*\/?>/,
    (match) => `${match}\n${headTags}`
  );

  // Add noscript content inside body, before the root div
  html = html.replace(
    '<div id="root"></div>',
    `${noscriptContent}\n    <div id="root"></div>`
  );

  return html;
}

// Generate all pages
let count = 0;
for (const route of routes) {
  const html = generatePage(route);
  
  if (route.path === '/') {
    // Overwrite the root index.html
    writeFileSync(resolve(DIST, 'index.html'), html, 'utf-8');
    count++;
    continue;
  }
  
  // Create directory structure: /sobre -> dist/sobre/index.html
  const dirPath = resolve(DIST, route.path.slice(1)); // remove leading /
  mkdirSync(dirPath, { recursive: true });
  writeFileSync(resolve(dirPath, 'index.html'), html, 'utf-8');
  count++;
}

console.log(`✅ Pre-rendered ${count} static HTML pages`);

// List generated directories for verification
const generatedPaths = routes.filter(r => r.path !== '/').map(r => r.path);
console.log('Generated paths:');
generatedPaths.forEach(p => console.log(`  ${p}/index.html`));
