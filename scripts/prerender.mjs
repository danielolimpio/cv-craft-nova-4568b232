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
    title: 'Fazer Currículo Grátis Online em 5 Min ✓ Modelo 2026',
    description: 'Crie seu currículo profissional grátis em 5 minutos — sem cadastro. Modelos prontos para ATS + download em PDF. Já são 50 mil currículos criados. Conquiste sua vaga!',
    keywords: 'fazer currículo gratuito, fazer curriculo online, criar curriculo gratis, currículo grátis, fazer curriculo gratis, curriculo gratis, currículo fazer gratuito, currículo online grátis, curriculo gratis online, fazer currículo online, criar currículo grátis, fazer currículo online gratuito, fazer currículo online grátis, currículo gratuito, curriculos gratis, fazer curriculo de graça, sites para fazer currículo grátis, criar curriculo grátis, montar currículo grátis, currículo online gratis, montar um currículo grátis, curriculo online gratis, fazer um currículo grátis, site fazer curriculo, site para fazer curriculo, sites para fazer curriculo gratis, como fazer currículo grátis, criar curriculo online, elaborar curriculo gratis, curriculo de graça, fazer currículo, fazer curriculo, curriculo fazer, criar um currículo grátis, montar curriculo gratis, site para fazer currículo grátis, curriculo fazer gratis, fazer curriculum vitae gratis, fazer curriculum gratis, sites para criar curriculo, curriculo digital gratis, criar curriculo gratuito, curriculo virtual gratis, fazer currículo grátis, como fazer curriculo gratis, montar currículo online gratis, faça seu currículo, como fazer currículo online gratis, currículo gratuito fazer, fazer curriculo online gratis, montar currículo online grátis, faça seu curriculo, criador de curriculo gratis, fazer um curriculo gratis, site para criar curriculo gratis, site de fazer currículo, fazer curriculo gratis online, site para montar curriculo, sites para curriculo, montar curriculo online gratis, currículo online gratuito, faca seu curriculo, como fazer um currículo grátis, criar curriculum vitae gratis, como fazer um curriculo gratis, criar currículo de graça, criar currículo gratis, fazer currículo de graça, site para fazer curriculo gratis, curriculo online grátis, fazer curriculo simples gratis, site de curriculo gratis, site que faz curriculo, fazer curriculum online gratis, site para criar curriculo, faça seu curriculo gratis, fazer um currículo online gratis, fazer meu curriculo gratis, site de fazer curriculo, currículo gratis online, curriculos online gratis, sites para fazer curriculo de graça, montagem de currículo grátis, currículos gratuitos, curriculo de graca, cv gratis, curriculo online fazer, currículo pdf grátis, currículo baixar gratis, criar um curriculo gratis, site para fazer currículo, curriculo fazer online, gerar curriculo gratis, curriculo online gratuito, editar currículo grátis, sites para fazer curriculo, fazer currículo online gratis, curriculo fazer agora, meu currículo grátis, fazer currículo gratis, atualizar currículo grátis, meu currículo gratis, fazer um currículo online, site para curriculo, fazer curriculo gratuito, site de fazer curriculo gratis, site para montar currículo, curriculo online, currículo gratis, site de curriculo, criação de curriculo gratis, criar curriculo online gratis, sites para montar curriculo, curriculo 2026, cadastrar curriculo gratis, fazer curriculos, currículo fazer, criar curriculos gratis, currículo fazer online, faz currículo, cria currículo grátis, fazer curriculo grátis, fazer um curriculo online, onde fazer currículo grátis, curriculo gratis fazer, fazer curriculo profissional, criar curriculo profissional, criar currículo online grátis, melhor site para fazer curriculo, cadastrar currículo gratis, criar currículo gratuito, currículo para baixar gratis, montar um curriculo gratis, onde fazer um curriculo, criar curriculo de graça, criar curriculo gratuitamente, cadastrar currículo grátis, currículo grátis baixar, site que faz currículo, meu curriculo gratis, currículo digital grátis, fazer cv gratis, currículo moderno 2026, modelo de currículo Word grátis para preencher, fazer currículo online em 5 minutos, currículo para jovem aprendiz, currículo para estágio universitário, currículo para vagas remotas',
    ogType: 'website',
  },
  {
    path: '/como-funciona',
    title: 'Como Fazer Currículo em 4 Passos ✓ Grátis e Rápido',
    description: 'Aprenda como criar seu currículo profissional em 4 passos simples — escolha o modelo, preencha, personalize e baixe em PDF. 100% grátis, sem cadastro. Comece agora!',
    keywords: 'como fazer currículo, como fazer currículo grátis, como fazer curriculo gratis, como fazer um currículo grátis, como fazer um curriculo gratis, como fazer um currículo gratis, como fazer curriculo, como fazer currículo online gratis, como fazer currículo online grátis, como fazer curriculo no celular grátis, como montar curriculo sem experiencia profissional, como elaborar curriculo passo a passo no Word, como fazer curriculo bonito e profissional, como criar curriculo para primeiro emprego, como fazer curriculo simples e objetivo, passo a passo currículo, criar currículo online grátis, fazer curriculum vitae online gratis, fazer curriculo gratis primeiro emprego, montar currículo passo a passo, como fazer curriculo no Word, como fazer curriculo no celular',
    ogType: 'website',
  },
  {
    path: '/criar-curriculo',
    title: 'Criar Currículo Grátis Agora ✓ Editor Online + PDF',
    description: 'Monte seu currículo profissional agora: editor online grátis, sem cadastro, templates modernos e download em PDF. Pronto em 5 minutos. Comece já!',
    keywords: 'criar currículo, editor de currículo grátis, currículo online, gerar currículo PDF, editor de currículo online grátis sem cadastro, gerador de currículo em PDF para baixar, criar currículo no celular grátis, fazer currículo online com foto, criar currículo ATS aprovado, montar currículo profissional grátis em minutos, criar curriculo, criar currículo grátis, criar currículo online, criar currículo profissional, criar curriculum vitae, criar curriculo online gratis, gerar curriculo gratis, montar curriculo, montar curriculo online, montar currículo grátis, editar currículo grátis, currículo PDF grátis, currículo para baixar grátis, currículo digital grátis, baixar currículo PDF, criador de curriculo gratis, currículo 2026, currículo moderno',
    ogType: 'website',
  },
  {
    path: '/sobre',
    title: 'Sobre Nós — Fazer Currículo ✓ 50 Mil CVs Criados',
    description: 'Conheça o Fazer Currículo: plataforma 100% gratuita que já ajudou 50 mil brasileiros a criar currículos profissionais e conquistar a vaga dos sonhos.',
    keywords: 'sobre fazer currículo, plataforma currículo grátis, quem somos',
    ogType: 'website',
  },
  {
    path: '/contato',
    title: 'Contato — Fale com o Fazer Currículo em 24h',
    description: 'Precisa de ajuda com seu currículo? Fale conosco — respondemos em até 24h com suporte gratuito e humanizado. Tire suas dúvidas e conquiste sua vaga!',
    keywords: 'contato fazer currículo, suporte, fale conosco',
    ogType: 'website',
  },
  {
    path: '/blog',
    title: 'Blog Currículo e Carreira ✓ 15 Dicas Práticas | 2026',
    description: 'Dicas comprovadas para criar currículos que impressionam recrutadores. Artigos sobre ATS, LinkedIn, primeiro emprego e mais. Atualize-se e conquiste sua vaga!',
    keywords: 'dicas currículo, blog emprego, carreira profissional, mercado de trabalho 2026, dicas para passar em entrevista de emprego, como conseguir o primeiro emprego sem experiência, como se destacar no LinkedIn para recrutadores, dicas de currículo para 2026, melhores profissões em alta no Brasil, como mudar de carreira aos 30, 40 e 50 anos, o que não colocar em um currículo, o que nao colocar no curriculo, o que não colocar no currículo, erros comuns em currículos brasileiros 2025, erros que eliminam o currículo, erros comuns currículo evitar, erros comuns currículo estagiário brasil, currículo errado, curriculo errado, ats currículo, currículo ats, curriculo ats, sistema ats, ats curriculo, exemplos de ats, objetivo de carreira para currículo, objetivo profissional, objetivo curriculum exemplo, objetivos profissionais para curriculo, objetivo profissional curriculo exemplos, exemplos de objetivos para currículo, o que colocar no objetivo do currículo, bons objetivos para curriculum, exemplo de um bom objetivo para curriculum, informe seu objetivo profissional exemplos, objetivo curriculo, objetivo profissional curriculum, propósito de vida profissional exemplos',
    ogType: 'website',
  },
  {
    path: '/central-de-ajuda',
    title: 'Central de Ajuda ✓ Tutoriais Passo a Passo | Currículo',
    description: 'Tutoriais passo a passo para criar seu currículo perfeito. Dicas de formatação, PDF, ATS e mais — tudo explicado de forma simples. Resolva em minutos!',
    keywords: 'ajuda currículo, suporte, perguntas frequentes, como usar',
    ogType: 'website',
  },
  {
    path: '/faq',
    title: 'FAQ Currículo Online Grátis — 10 Respostas Rápidas',
    description: 'É realmente grátis? Precisa de cadastro? Como baixar em PDF? Veja as 10 perguntas mais comuns sobre criar currículo online — respostas diretas e sem enrolação.',
    keywords: 'FAQ currículo, perguntas frequentes, dúvidas currículo',
    ogType: 'website',
  },
  {
    path: '/termos-de-uso',
    title: 'Termos de Uso | Fazer Currículo',
    description: 'Leia os termos de uso da plataforma Fazer Currículo. Condições para utilização do serviço gratuito de criação de currículos.',
    keywords: 'termos de uso, regras, política',
    ogType: 'website',
  },
  {
    path: '/politica-de-privacidade',
    title: 'Política de Privacidade | Fazer Currículo',
    description: 'Conheça nossa política de privacidade e como protegemos seus dados pessoais na plataforma Fazer Currículo.',
    keywords: 'política de privacidade, proteção de dados, LGPD',
    ogType: 'website',
  },
  {
    path: '/lgpd',
    title: 'LGPD — Proteção de Dados | Fazer Currículo',
    description: 'Saiba como o Fazer Currículo está em conformidade com a LGPD e como protegemos seus dados pessoais segundo a legislação brasileira.',
    keywords: 'LGPD, proteção de dados, lei geral, privacidade',
    ogType: 'website',
  },
  {
    path: '/sitemap',
    title: 'Mapa do Site | Fazer Currículo — Navegação Completa',
    description: 'Navegue por todas as páginas do Fazer Currículo: ferramentas, artigos, guias e recursos para criar currículos profissionais.',
    keywords: 'mapa do site, sitemap, navegação',
    ogType: 'website',
  },
  // ===== BLOG ARTICLES =====
  {
    path: '/blog/como-criar-curriculo-profissional-2026',
    title: 'Como Criar Currículo Profissional 2026 ✓ Guia Completo',
    description: 'Guia definitivo para 2026: o que incluir, o que evitar e exemplos reais. Aumente suas chances em 70% com um currículo que impressiona recrutadores em 6 segundos.',
    keywords: 'como criar currículo 2026, currículo profissional, dicas currículo',
    ogType: 'article',
  },
  {
    path: '/blog/10-erros-comuns-curriculos',
    title: '10 Erros no Currículo que Te Eliminam ✓ Corrija Agora',
    description: '78% dos currículos são descartados por erros evitáveis. Veja os 10 mais comuns com exemplos de antes/depois e corrija o seu hoje. Pare de perder vagas!',
    keywords: 'erros currículo, erros comuns, currículo rejeitado, dicas recrutadores, o que não colocar em um currículo, o que nao colocar no curriculo, o que não colocar no currículo, erros comuns em currículos brasileiros 2025, erros que eliminam o currículo, erros comuns currículo evitar, erros comuns currículo estagiário brasil, erros comuns em currículos estagiários brasil, currículo errado, curriculo errado',
    ogType: 'article',
  },
  {
    path: '/blog/preparar-curriculo-sistemas-ats',
    title: 'Currículo ATS: 90% São Rejeitados ✓ Como Passar',
    description: '90% dos currículos são eliminados por robôs antes de chegar ao recrutador. Aprenda a otimizar para ATS com palavras-chave certas e formatação aprovada.',
    keywords: 'currículo ATS, sistemas rastreamento, otimizar currículo ATS, ats currículo, curriculo ats, ats curriculo, sistema ats, exemplos de ats, currículo aprovado em ATS, palavras-chave ATS, formatação ATS, currículo passar no ATS',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-primeiro-emprego-o-que-incluir',
    title: 'Currículo Primeiro Emprego: O Que Colocar ✓ 2026',
    description: 'Nunca trabalhou? Veja exatamente o que incluir no currículo de primeiro emprego — com exemplos prontos e dicas de recrutadores. Conquiste sua 1ª vaga!',
    keywords: 'currículo primeiro emprego, sem experiência, jovem aprendiz, primeiro currículo',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-sem-experiencia-estrategias',
    title: 'Currículo Sem Experiência: 7 Estratégias ✓ Funciona',
    description: 'Sem experiência profissional? Use estas 7 estratégias comprovadas para montar um currículo competitivo com projetos, voluntariado e habilidades. Comece agora!',
    keywords: 'currículo sem experiência, estudante, iniciante, primeiro emprego',
    ogType: 'article',
  },
  {
    path: '/blog/objetivo-profissional-curriculo',
    title: 'Objetivo Profissional: 15 Exemplos Prontos ✓ Copie Já',
    description: 'Não sabe o que escrever no objetivo do currículo? Copie 15 exemplos prontos por área (TI, saúde, administração). Impressione o recrutador nos primeiros segundos!',
    keywords: 'objetivo profissional, currículo objetivo, exemplos objetivo profissional, objetivo de carreira para currículo, objetivo de carreira, objetivo curriculum exemplo, objetivos profissionais para curriculo, objetivo profissional curriculo exemplos, exemplos de objetivos para currículo, o que colocar no objetivo do currículo, bons objetivos para curriculum, exemplo de um bom objetivo para curriculum, informe seu objetivo profissional exemplos, objetivo curriculo, objetivo profissional curriculum, propósito de vida profissional exemplos, objetivos profissionais curriculum, objetivo exemplo de curriculo, curriculum objetivos exemplos, objetivo para curriculum exemplos',
    ogType: 'article',
  },
  {
    path: '/blog/destaque-habilidades-estrategia-impacto',
    title: 'Habilidades no Currículo: Estratégia de Impacto ✓ 2026',
    description: 'Aprenda a destacar suas habilidades com impacto real no currículo. Exemplos práticos de hard e soft skills que recrutadores buscam em 2026. Destaque-se agora!',
    keywords: 'habilidades currículo, competências, soft skills, hard skills',
    ogType: 'article',
  },
  {
    path: '/blog/perfil-linkedin-recrutadores',
    title: 'Perfil LinkedIn: Atraia 3x Mais Recrutadores ✓ 2026',
    description: '87% dos recrutadores buscam no LinkedIn antes do currículo. Otimize título, resumo, foto e experiências para ser encontrado e chamado para entrevistas.',
    keywords: 'perfil LinkedIn, recrutadores, otimizar LinkedIn, networking profissional',
    ogType: 'article',
  },
  {
    path: '/blog/carta-apresentacao-empregador',
    title: 'Carta de Apresentação: Modelo Pronto ✓ Conquiste a Vaga',
    description: 'Escreva uma carta de apresentação que conquiste o empregador — com modelo pronto para copiar. O complemento perfeito do currículo para se destacar na seleção.',
    keywords: 'carta de apresentação, cover letter, empregador, modelo carta',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-estagio-estudantes',
    title: 'Currículo para Estágio: Guia Definitivo ✓ Estudantes',
    description: 'Estudante buscando estágio? Monte um currículo que destaca formação, projetos acadêmicos e habilidades — mesmo sem experiência. Modelo pronto + dicas!',
    keywords: 'currículo estágio, estudante, universitário, vaga estágio',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-vs-linkedin-2026',
    title: 'Currículo vs LinkedIn 2026: Qual Usar e Quando? ✓',
    description: 'Currículo ou LinkedIn — qual o recrutador olha primeiro? Descubra quando priorizar cada um e como alinhar os dois para máximo impacto na sua carreira.',
    keywords: 'currículo vs LinkedIn, recrutamento 2026, diferenças currículo LinkedIn',
    ogType: 'article',
  },
  {
    path: '/blog/o-que-recrutadores-buscam-curriculo',
    title: 'O Que Recrutadores Buscam no Currículo ✓ 5 Critérios',
    description: 'Baseado em entrevistas reais: os 5 critérios que fazem seu currículo ser selecionado ou descartado em 6 segundos. Veja como se destacar da concorrência!',
    keywords: 'recrutadores currículo, o que recrutadores buscam, análise currículo',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-ingles-estrutura-erros',
    title: 'Currículo em Inglês: Estrutura + Exemplos ✓ 2026',
    description: 'Vai se candidatar a vagas internacionais? Veja a estrutura correta do CV em inglês, erros fatais de brasileiros e exemplos prontos para copiar e adaptar.',
    keywords: 'currículo inglês, resume, CV english, currículo internacional',
    ogType: 'article',
  },
  {
    path: '/blog/curriculo-ti-priorizar-2026',
    title: 'Currículo TI 2026: O Que Priorizar ✓ Guia Dev',
    description: 'Dev, analista ou DevOps? Veja o que colocar no currículo de TI em 2026: GitHub, certificações, projetos reais e as skills que recrutadores realmente buscam.',
    keywords: 'currículo TI, desenvolvedor, programador, tecnologia, currículo tech',
    ogType: 'article',
  },
  {
    path: '/blog/profissoes-mais-vagas-brasil-2030',
    title: 'Profissões com Mais Vagas até 2030 ✓ Dados Oficiais',
    description: 'Quais carreiras terão mais vagas até 2030? Dados do Ministério do Trabalho e WEF com salários, formações necessárias e como se preparar agora. Não fique para trás!',
    keywords: 'profissões futuro, vagas 2030, carreiras em alta, mercado trabalho Brasil',
    ogType: 'article',
  },
];

/**
 * Generate a static HTML file for a given route
 */
function generatePage(route) {
  const canonical = route.canonicalPath
    ? `${BASE_URL}${route.canonicalPath}`
    : route.path === '/'
      ? `${BASE_URL}/`
      : `${BASE_URL}${route.path}/`;

  const ogImage = `${BASE_URL}/og-fazer-curriculo.png`;
  const robots = route.robots ?? 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  // Build unique <head> content for this route
  const headTags = `
    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <meta name="keywords" content="${route.keywords}" />
    <meta name="robots" content="${robots}" />
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
    writeFileSync(resolve(DIST, 'index.html'), html, 'utf-8');
    count++;
    continue;
  }

  const dirPath = resolve(DIST, route.path.slice(1));
  mkdirSync(dirPath, { recursive: true });
  writeFileSync(resolve(dirPath, 'index.html'), html, 'utf-8');
  count++;
}

const notFoundHtml = generatePage({
  path: '/404',
  canonicalPath: '/',
  title: '404 - Página Não Encontrada | Fazer Currículo',
  description: 'A página que você tentou acessar não existe. Use a navegação do site para encontrar o conteúdo certo.',
  keywords: '404, página não encontrada, fazer currículo',
  ogType: 'website',
  robots: 'noindex, nofollow'
});
writeFileSync(resolve(DIST, '404.html'), notFoundHtml, 'utf-8');
count++;

console.log(`✅ Pre-rendered ${count} static HTML pages`);

const generatedPaths = routes.filter(r => r.path !== '/').map(r => `${r.path}/index.html`);
generatedPaths.push('/404.html');
console.log('Generated paths:');
generatedPaths.forEach(p => console.log(`  ${p}`));
