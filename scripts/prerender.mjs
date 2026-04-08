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
    title: 'Fazer Currículo Grátis Online em 5 Minutos | 2026',
    description: 'Crie seu currículo profissional grátis agora — sem cadastro. Modelos prontos, otimizados para ATS e com download em PDF. Mais de 50 mil currículos já criados.',
    keywords: 'criar currículo grátis, fazer currículo online, currículo profissional, modelos de currículo, currículo ATS',
    ogType: 'website',
  },
  {
    path: '/como-funciona',
    title: 'Como Criar Currículo Online Grátis: 4 Passos Simples',
    description: 'Veja como criar seu currículo profissional em 4 passos — escolha o modelo, preencha, personalize e baixe em PDF. 100% grátis, sem cadastro.',
    keywords: 'como fazer currículo, passo a passo currículo, criar currículo online grátis',
    ogType: 'website',
  },
  {
    path: '/criar-curriculo',
    title: 'Criar Currículo Grátis Agora — Editor Online com PDF',
    description: 'Monte seu currículo profissional agora mesmo: editor online grátis, sem cadastro, com templates modernos e download em PDF. Pronto em 5 minutos.',
    keywords: 'criar currículo, editor de currículo grátis, currículo online, gerar currículo PDF',
    ogType: 'website',
  },
  {
    path: '/sobre',
    title: 'Sobre o Fazer Currículo — Quem Somos e Nossa Missão',
    description: 'Conheça o Fazer Currículo: plataforma 100% gratuita que já ajudou milhares de brasileiros a criar currículos profissionais e conquistar vagas.',
    keywords: 'sobre fazer currículo, plataforma currículo grátis, quem somos',
    ogType: 'website',
  },
  {
    path: '/contato',
    title: 'Fale Conosco — Contato Fazer Currículo',
    description: 'Tem dúvidas sobre como criar seu currículo? Entre em contato com nossa equipe — respondemos em até 24h. Suporte gratuito e humanizado.',
    keywords: 'contato fazer currículo, suporte, fale conosco',
    ogType: 'website',
  },
  {
    path: '/blog',
    title: 'Blog sobre Currículo e Carreira — Dicas Práticas | 2026',
    description: 'Artigos com dicas práticas para melhorar seu currículo, se preparar para entrevistas e conquistar o emprego ideal. Atualizado semanalmente.',
    keywords: 'dicas currículo, blog emprego, carreira profissional, mercado de trabalho 2026',
    ogType: 'website',
  },
  {
    path: '/central-de-ajuda',
    title: 'Central de Ajuda — Tutoriais e Suporte | Fazer Currículo',
    description: 'Precisa de ajuda? Veja tutoriais passo a passo, dicas de uso e respostas rápidas para criar seu currículo profissional sem complicação.',
    keywords: 'ajuda currículo, suporte, perguntas frequentes, como usar',
    ogType: 'website',
  },
  {
    path: '/faq',
    title: 'Perguntas Frequentes sobre Currículo Online Grátis | FAQ',
    description: 'Respostas rápidas: como baixar em PDF, se é grátis mesmo, como funciona o ATS, se precisa de cadastro e muito mais. Tire suas dúvidas agora.',
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
    title: 'Como Criar um Currículo que se Destaca em 2026 [Guia]',
    description: 'Guia completo com técnicas atualizadas para 2026: o que incluir, o que evitar e exemplos reais para criar um currículo que impressiona recrutadores.',
    keywords: 'como criar currículo 2026, currículo profissional, dicas currículo',
    ogType: 'article',
  },
  {
    path: '/blog/10-erros-comuns-curriculos',
    title: '10 Erros no Currículo que Te Eliminam — Como Corrigir',
    description: 'Seu currículo pode estar sendo descartado por erros simples. Veja os 10 mais comuns (com exemplos) e como corrigir cada um para ser chamado para entrevistas.',
    keywords: 'erros currículo, erros comuns, currículo rejeitado, dicas recrutadores',
    ogType: 'article',
  },
  {
    path: '/blog/preparar-curriculo-sistemas-ats',
    title: 'Currículo para ATS: Como Passar nos Filtros Automáticos',
    description: 'Seu currículo é rejeitado antes de chegar ao recrutador? Aprenda a otimizar para sistemas ATS com dicas práticas, palavras-chave e formatação correta.',
    keywords: 'currículo ATS, sistemas rastreamento, otimizar currículo ATS',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-primeiro-emprego-o-que-incluir',
    title: 'Currículo para Primeiro Emprego: O Que Colocar [2026]',
    description: 'Nunca trabalhou? Veja exatamente o que incluir (e o que evitar) no currículo de primeiro emprego — com exemplos prontos e dicas de recrutadores.',
    keywords: 'currículo primeiro emprego, sem experiência, jovem aprendiz, primeiro currículo',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-sem-experiencia-estrategias',
    title: 'Currículo Sem Experiência: 7 Estratégias que Funcionam',
    description: 'Primeiro emprego ou mudança de carreira? Veja 7 estratégias comprovadas para montar um currículo competitivo mesmo sem experiência profissional.',
    keywords: 'currículo sem experiência, estudante, iniciante, primeiro emprego',
    ogType: 'article',
  },
  {
    path: '/blog/objetivo-profissional-curriculo',
    title: 'Objetivo Profissional no Currículo — 15 Exemplos Prontos',
    description: 'Não sabe o que escrever no objetivo? Veja 15 exemplos prontos por área (TI, saúde, administração) e aprenda a escrever um objetivo que chama atenção.',
    keywords: 'objetivo profissional, currículo objetivo, exemplos objetivo profissional',
    ogType: 'article',
  },
  {
    path: '/blog/destaque-habilidades-estrategia-impacto',
    title: 'Como Destacar Habilidades no Currículo com Impacto',
    description: 'Aprenda a identificar, organizar e comunicar suas habilidades de forma estratégica — com exemplos práticos que chamam atenção de recrutadores.',
    keywords: 'habilidades currículo, competências, soft skills, hard skills',
    ogType: 'article',
  },
  {
    path: '/blog/perfil-linkedin-recrutadores',
    title: 'Perfil LinkedIn: Como Atrair Recrutadores em 2026',
    description: 'Recrutadores buscam no LinkedIn antes de abrir seu currículo. Veja como otimizar título, resumo, foto e experiências para ser encontrado e chamado.',
    keywords: 'perfil LinkedIn, recrutadores, otimizar LinkedIn, networking profissional',
    ogType: 'article',
  },
  {
    path: '/blog/carta-apresentacao-empregador',
    title: 'Carta de Apresentação: Como Escrever e Conquistar a Vaga',
    description: 'Veja como escrever uma carta de apresentação persuasiva com exemplos prontos — o complemento ideal para seu currículo se destacar.',
    keywords: 'carta de apresentação, cover letter, empregador, modelo carta',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-estagio-estudantes',
    title: 'Currículo para Estágio: Guia Completo para Estudantes',
    description: 'Estudante buscando estágio? Veja como montar um currículo que destaca sua formação, projetos acadêmicos e habilidades — mesmo sem experiência.',
    keywords: 'currículo estágio, estudante, universitário, vaga estágio',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-vs-linkedin-2026',
    title: 'Currículo vs LinkedIn: Qual Usar e Quando? [2026]',
    description: 'Currículo ou LinkedIn — qual o recrutador olha primeiro? Entenda as diferenças, quando priorizar cada um e como alinhar os dois para máximo impacto.',
    keywords: 'currículo vs LinkedIn, recrutamento 2026, diferenças currículo LinkedIn',
    ogType: 'article',
  },
  {
    path: '/blog/o-que-recrutadores-buscam-curriculo',
    title: 'O Que Recrutadores Buscam no Currículo — 5 Critérios',
    description: 'Baseado em entrevistas reais com recrutadores: os 5 critérios que fazem seu currículo ser selecionado ou descartado em segundos. Veja como se destacar.',
    keywords: 'recrutadores currículo, o que recrutadores buscam, análise currículo',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-ingles-estrutura-erros',
    title: 'Currículo em Inglês: Estrutura + Exemplos Prontos [2026]',
    description: 'Vai se candidatar a vagas internacionais? Veja a estrutura correta do currículo em inglês, erros comuns de brasileiros e exemplos prontos para copiar.',
    keywords: 'currículo inglês, resume, CV english, currículo internacional',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-ti-priorizar-2026',
    title: 'Currículo para TI: O Que Priorizar em 2026 [Guia]',
    description: 'Desenvolvedor, analista ou DevOps? Veja o que colocar no currículo de TI em 2026: GitHub, certificações, projetos reais e as skills que recrutadores buscam.',
    keywords: 'currículo TI, desenvolvedor, programador, tecnologia, currículo tech',
    ogType: 'article',
  },
  {
    path: '/blog/profissoes-mais-vagas-brasil-2030',
    title: 'Profissões com Mais Vagas no Brasil até 2030 [Dados]',
    description: 'Quais carreiras terão mais vagas até 2030? Veja dados do Ministério do Trabalho, MEC e WEF — com salários, formações e como se preparar agora.',
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
