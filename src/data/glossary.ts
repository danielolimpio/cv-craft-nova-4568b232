// ============================================================================
// GLOSSÁRIO PREMIUM — Fazer Currículo
// Hub de autoridade temática com verbetes otimizados para Featured Snippets,
// AI Overviews e Topic Clusters. Cada termo segue estrutura E-E-A-T completa.
// ============================================================================

export type GlossaryCategory =
  | "curriculo"
  | "ats-recrutamento"
  | "carreira"
  | "processo-seletivo"
  | "mercado-trabalho"
  | "legislacao"
  | "empreendedorismo"
  | "tecnologia-ia"
  | "linkedin-marca-pessoal"
  | "trabalho-exterior";

export interface GlossaryFAQ {
  q: string;
  a: string;
}

export interface GlossaryTerm {
  /** Slug amigável usado em /glossario/o-que-e-[slug] */
  slug: string;
  /** Termo canônico (aparece como H1) */
  term: string;
  /** Sinônimos, siglas, variações — usados para busca instantânea e link building */
  synonyms: string[];
  /** Palavras-chave secundárias e LSI para reforço semântico */
  keywords: string[];
  /** Categoria principal para filtros e clusters */
  category: GlossaryCategory;
  /** Definição objetiva de 40–60 palavras — otimizada para Featured Snippet */
  shortDefinition: string;
  /** Resumo rápido em bullets */
  quickSummary: string[];
  /** Definição completa (parágrafos) */
  fullDefinition: string[];
  /** Como funciona / etapas */
  howItWorks: string[];
  /** Exemplo prático */
  practicalExample: string;
  /** Por que é importante */
  whyItMatters: string;
  /** Principais vantagens */
  advantages: string[];
  /** Possíveis desvantagens (quando aplicável) */
  disadvantages?: string[];
  /** Erros comuns */
  commonMistakes: string[];
  /** Curiosidades (opcional) */
  curiosities?: string[];
  /** Perguntas frequentes */
  faq: GlossaryFAQ[];
  /** Termos relacionados (slugs) para link interno semântico */
  relatedTerms: string[];
  /** Artigos recomendados do blog */
  recommendedArticles: { title: string; url: string }[];
  /** Referências externas */
  references: { label: string; url: string }[];
  /** Entidade Wikipedia/Wikidata (sameAs) para DefinedTerm schema */
  sameAs?: string;
  /** Datas ISO */
  datePublished: string;
  dateUpdated: string;
  /** Tempo estimado de leitura em minutos */
  readingTime: number;
  /** Popularidade (0–100) — controla ordenação em "mais pesquisados" */
  popularity: number;
  /** Marca como destaque na home do glossário */
  featured?: boolean;
}

export const glossaryCategories: Record<GlossaryCategory, { label: string; description: string }> = {
  "curriculo": { label: "Currículo", description: "Estrutura, formatos e boas práticas de currículo profissional." },
  "ats-recrutamento": { label: "ATS & Recrutamento", description: "Sistemas de rastreamento, triagem automatizada e recrutamento moderno." },
  "carreira": { label: "Carreira", description: "Desenvolvimento profissional, transição e planejamento de carreira." },
  "processo-seletivo": { label: "Processo Seletivo", description: "Entrevistas, dinâmicas, testes e negociação salarial." },
  "mercado-trabalho": { label: "Mercado de Trabalho", description: "Tendências, salários e profissões em alta no Brasil." },
  "legislacao": { label: "Legislação Trabalhista", description: "CLT, direitos, benefícios e reforma trabalhista." },
  "empreendedorismo": { label: "Empreendedorismo", description: "MEI, CNPJ, autônomo e trabalho por conta própria." },
  "tecnologia-ia": { label: "Tecnologia & IA", description: "Inteligência artificial, automação e futuro do trabalho." },
  "linkedin-marca-pessoal": { label: "LinkedIn & Marca Pessoal", description: "Perfil profissional, networking e presença digital." },
  "trabalho-exterior": { label: "Trabalho no Exterior", description: "Vistos, oportunidades internacionais e mobilidade global." },
};

// ============================================================================
// VERBETES — Curadoria premium 2026 baseada em intenção real de busca
// ============================================================================

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "curriculo",
    term: "Currículo",
    synonyms: ["CV", "Curriculum Vitae", "Currículo Profissional", "Resumé"],
    keywords: ["currículo", "cv", "curriculum vitae", "currículo profissional", "modelo de currículo"],
    category: "curriculo",
    sameAs: "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)",
    shortDefinition:
      "Currículo é o documento profissional que apresenta, de forma resumida e estruturada, a trajetória de uma pessoa — dados pessoais, experiências, formação acadêmica, habilidades e conquistas — com o objetivo de comprovar sua qualificação para uma vaga de emprego e conquistar uma entrevista.",
    quickSummary: [
      "Documento de 1 a 2 páginas que resume a trajetória profissional.",
      "Serve como cartão de visita para conquistar uma entrevista.",
      "Em 2026, precisa ser otimizado para leitura humana e para sistemas ATS.",
    ],
    fullDefinition: [
      "O currículo é a principal ferramenta de comunicação entre candidato e recrutador. Ele reúne, em ordem estratégica, os dados que provam que você é capaz de entregar valor para uma vaga específica.",
      "Diferente de uma biografia, o currículo é um documento persuasivo e escaneável — recrutadores gastam em média de 6 a 8 segundos na primeira leitura, o que exige clareza, hierarquia visual e foco em resultados.",
      "Em 2026, o currículo brasileiro moderno costuma ter entre 1 e 2 páginas, fonte legível, uma coluna (para passar por ATS), verbos de ação e conquistas mensuráveis.",
    ],
    howItWorks: [
      "Cabeçalho com nome, cidade, telefone, e-mail e LinkedIn.",
      "Resumo profissional (2–4 linhas) alinhado à vaga.",
      "Experiências em ordem cronológica reversa, com resultados mensuráveis.",
      "Formação acadêmica e cursos relevantes.",
      "Habilidades técnicas e comportamentais alinhadas ao anúncio da vaga.",
    ],
    practicalExample:
      "Para uma vaga de analista de marketing, o currículo destaca no topo: 'Analista de Marketing com 4 anos de experiência em performance, responsável por reduzir CAC em 32% e aumentar leads qualificados em 2,1x na empresa X'.",
    whyItMatters:
      "Um currículo bem estruturado pode dobrar a taxa de convite para entrevista. É o único ativo que o candidato controla 100% no processo seletivo e o principal fator para passar pela triagem automatizada.",
    advantages: [
      "Padroniza sua apresentação profissional.",
      "Facilita a triagem por recrutadores e sistemas ATS.",
      "Comprova qualificação com dados concretos.",
      "Pode ser reutilizado e adaptado para múltiplas vagas.",
    ],
    commonMistakes: [
      "Enviar o mesmo currículo genérico para todas as vagas.",
      "Ultrapassar 2 páginas sem necessidade.",
      "Usar e-mail informal ou foto pouco profissional.",
      "Descrever tarefas em vez de resultados.",
      "Ignorar palavras-chave da descrição da vaga.",
    ],
    curiosities: [
      "A palavra 'currículo' vem do latim curriculum vitae, que significa 'curso da vida'.",
      "No Brasil, 78% dos currículos rejeitados têm erros de português ou de formatação.",
    ],
    faq: [
      { q: "Qual o tamanho ideal de um currículo?", a: "Entre 1 e 2 páginas para a maioria dos profissionais brasileiros. Cargos executivos podem ir a 3 páginas quando a experiência justifica." },
      { q: "Currículo precisa ter foto?", a: "No Brasil, foto é opcional. Se optar por incluir, use imagem profissional, fundo neutro e vestimenta compatível com o setor da vaga." },
      { q: "PDF ou Word: qual formato enviar?", a: "PDF preserva a formatação e é o padrão. Envie em Word apenas quando a vaga solicitar explicitamente, geralmente por causa do sistema ATS." },
    ],
    relatedTerms: ["ats", "carta-de-apresentacao", "objetivo-profissional", "curriculo-lattes", "linkedin"],
    recommendedArticles: [
      { title: "Como Criar um Currículo Profissional em 2026", url: "/blog/como-criar-curriculo-profissional-2026" },
      { title: "10 Erros Comuns em Currículos", url: "/blog/10-erros-comuns-curriculos" },
    ],
    references: [
      { label: "Currículo no Wikipédia", url: "https://pt.wikipedia.org/wiki/Curr%C3%ADculo_(documento)" },
    ],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 6,
    popularity: 98,
    featured: true,
  },
  {
    slug: "ats",
    term: "ATS (Applicant Tracking System)",
    synonyms: ["Applicant Tracking System", "Sistema de Rastreamento de Candidatos", "Software de Recrutamento", "Gupy", "Kenoby"],
    keywords: ["ats", "sistema ats", "currículo ats", "otimizar currículo ats", "palavras-chave ats"],
    category: "ats-recrutamento",
    sameAs: "https://en.wikipedia.org/wiki/Applicant_tracking_system",
    shortDefinition:
      "ATS (Applicant Tracking System) é o software que empresas usam para receber, filtrar e organizar currículos automaticamente. Em 2026, mais de 90% das grandes empresas brasileiras utilizam algum ATS — como Gupy, Kenoby, Vagas ou Solides — que elimina candidatos antes mesmo da leitura humana.",
    quickSummary: [
      "Software de triagem automática de currículos.",
      "Usa palavras-chave e critérios objetivos para ranquear candidatos.",
      "Rejeita currículos com formatação complexa (colunas, tabelas, imagens).",
    ],
    fullDefinition: [
      "O ATS é o guardião invisível dos processos seletivos modernos. Ele lê o currículo em texto puro, cruza com a descrição da vaga e atribui uma pontuação de aderência.",
      "Só candidatos com pontuação alta chegam ao recrutador humano — por isso, otimizar para o ATS não é opcional em vagas de médias e grandes empresas.",
    ],
    howItWorks: [
      "O candidato envia o currículo em PDF ou Word.",
      "O ATS extrai o texto e o converte em campos estruturados.",
      "Faz o match entre palavras-chave da vaga e do currículo.",
      "Ranqueia os candidatos por aderência.",
      "Envia os top rankeados para o recrutador humano avaliar.",
    ],
    practicalExample:
      "Uma vaga de Analista de Dados exige 'SQL, Python e Power BI'. O ATS busca essas três palavras no currículo. Um candidato que escreveu apenas 'ferramentas de BI' pode ser eliminado, mesmo dominando as três tecnologias.",
    whyItMatters:
      "Cerca de 90% dos currículos são descartados na triagem automática. Otimizar para ATS pode multiplicar por 3 as chances de chegar ao recrutador humano.",
    advantages: [
      "Reduz o tempo de contratação para as empresas.",
      "Padroniza critérios objetivos de avaliação.",
      "Elimina viés inicial baseado em foto ou nome.",
    ],
    disadvantages: [
      "Pode descartar bons profissionais por má formatação.",
      "Depende de palavras-chave literais, não de sinônimos ou contexto.",
      "Formatos criativos e visualmente ricos costumam ser rejeitados.",
    ],
    commonMistakes: [
      "Usar tabelas, colunas ou imagens no currículo.",
      "Salvar como imagem ou PDF escaneado.",
      "Ignorar palavras-chave da descrição da vaga.",
      "Nomear seções de forma criativa ('Minha jornada' em vez de 'Experiência Profissional').",
    ],
    faq: [
      { q: "Como saber se meu currículo passa no ATS?", a: "Ferramentas como Jobscan, Enhancv e Skillroads simulam a leitura do ATS. Regra prática: se o texto puder ser copiado limpo do PDF, o ATS lê." },
      { q: "PDF ou Word para ATS?", a: "PDF gerado em texto (não escaneado) é aceito pela maioria dos ATS modernos. Se a vaga pedir Word, envie .docx." },
      { q: "Fontes seguras para ATS?", a: "Arial, Calibri, Helvetica, Georgia e Times New Roman. Evite fontes decorativas e ícones no lugar de texto." },
    ],
    relatedTerms: ["curriculo", "palavras-chave", "recrutamento", "gupy", "screening"],
    recommendedArticles: [
      { title: "Como Preparar Seu Currículo para Sistemas ATS", url: "/blog/preparar-curriculo-sistemas-ats" },
      { title: "O Que Recrutadores Realmente Buscam", url: "/blog/o-que-recrutadores-buscam-curriculo" },
    ],
    references: [
      { label: "Applicant Tracking System — Wikipedia", url: "https://en.wikipedia.org/wiki/Applicant_tracking_system" },
    ],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 7,
    popularity: 96,
    featured: true,
  },
  {
    slug: "carta-de-apresentacao",
    term: "Carta de Apresentação",
    synonyms: ["Cover Letter", "Carta de Motivação"],
    keywords: ["carta de apresentação", "cover letter", "carta motivação"],
    category: "curriculo",
    shortDefinition:
      "Carta de apresentação é um texto curto, geralmente de meia página, que acompanha o currículo e explica por que o candidato é a pessoa certa para aquela vaga específica. Ela personaliza a candidatura, conecta a trajetória do profissional ao contexto da empresa e reforça o interesse na oportunidade.",
    quickSummary: [
      "Texto de 3 a 4 parágrafos que acompanha o currículo.",
      "Personaliza a candidatura para cada vaga.",
      "Explica motivação e fit cultural, algo que o currículo não faz.",
    ],
    fullDefinition: [
      "Enquanto o currículo é o 'o que', a carta de apresentação é o 'por quê'. Ela responde à pergunta que todo recrutador se faz: por que você quer essa vaga, nessa empresa, agora?",
      "Em 2026, com o volume de candidaturas por vaga em alta, uma boa carta de apresentação pode ser o diferencial entre ser esquecido no meio da pilha ou ir direto para a entrevista.",
    ],
    howItWorks: [
      "Abertura direta com o cargo e onde viu a vaga.",
      "Parágrafo com sua principal conquista alinhada à vaga.",
      "Parágrafo mostrando conhecimento sobre a empresa.",
      "Encerramento com chamada para próximos passos.",
    ],
    practicalExample:
      "Ao se candidatar para uma vaga na Nubank, mencionar que ampliou a base de clientes em 40% em uma fintech anterior conecta sua experiência ao contexto do banco digital.",
    whyItMatters:
      "Recrutadores relatam que candidatos com carta personalizada têm até 50% mais chance de serem chamados para entrevista.",
    advantages: [
      "Diferencia a candidatura em vagas concorridas.",
      "Permite explicar transições de carreira ou gaps.",
      "Demonstra pesquisa e interesse real pela empresa.",
    ],
    commonMistakes: [
      "Reciclar a mesma carta para todas as vagas.",
      "Repetir o currículo sem agregar contexto.",
      "Escrever mais de uma página.",
      "Focar em si mesmo em vez de valor para a empresa.",
    ],
    faq: [
      { q: "Toda vaga pede carta de apresentação?", a: "Não. Mas envie sempre que possível — mesmo quando opcional, ela demonstra interesse e pode desempatar a decisão." },
      { q: "Qual o tamanho ideal?", a: "Entre 250 e 400 palavras. Deve caber em meia página." },
    ],
    relatedTerms: ["curriculo", "recrutamento", "processo-seletivo"],
    recommendedArticles: [
      { title: "Carta de Apresentação que Conquiste o Empregador", url: "/blog/carta-apresentacao-empregador" },
    ],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 82,
  },
  {
    slug: "objetivo-profissional",
    term: "Objetivo Profissional",
    synonyms: ["Resumo Profissional", "Sumário Executivo", "Career Objective", "Professional Summary"],
    keywords: ["objetivo profissional", "resumo profissional", "objetivo currículo"],
    category: "curriculo",
    shortDefinition:
      "Objetivo profissional é a seção do topo do currículo que declara, em 2 a 4 linhas, quem é o candidato, o que ele oferece e a posição que busca. Em 2026, a tendência é substituir o antigo 'objetivo' genérico por um 'resumo profissional' focado em resultados e alinhado à vaga.",
    quickSummary: [
      "Aparece logo abaixo dos dados de contato.",
      "Deve ser específico para cada vaga.",
      "Substituiu o antigo modelo 'busco oportunidade de crescimento'.",
    ],
    fullDefinition: [
      "O objetivo profissional moderno funciona como uma vitrine. Em segundos, ele diz ao recrutador se vale a pena continuar lendo. Deve conter seu cargo atual/desejado, principais competências e uma conquista mensurável.",
    ],
    howItWorks: [
      "Comece pelo cargo desejado ou perfil.",
      "Inclua tempo de experiência e área.",
      "Cite 1 ou 2 conquistas com números.",
      "Alinhe as habilidades às exigências da vaga.",
    ],
    practicalExample:
      "'Desenvolvedor Front-End com 5 anos de experiência em React e Next.js, responsável por migração de plataforma que reduziu tempo de carregamento em 60% e melhorou conversão em 22%.'",
    whyItMatters:
      "Um bom resumo profissional aumenta o tempo médio de leitura do currículo — e é frequentemente o único trecho lido no primeiro filtro.",
    advantages: [
      "Contextualiza rapidamente o candidato.",
      "Melhora a aderência a palavras-chave ATS.",
      "Permite personalização por vaga sem reescrever tudo.",
    ],
    commonMistakes: [
      "Usar frases genéricas como 'busco crescimento'.",
      "Escrever em primeira pessoa ('eu sou...').",
      "Ultrapassar 4 linhas.",
    ],
    faq: [
      { q: "Objetivo profissional ainda é necessário?", a: "Sim, mas atualizado. Prefira o formato 'resumo profissional' focado em valor entregue." },
    ],
    relatedTerms: ["curriculo", "palavras-chave", "personal-branding"],
    recommendedArticles: [{ title: "Objetivo Profissional no Currículo", url: "/blog/objetivo-profissional-curriculo" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 4,
    popularity: 85,
  },
  {
    slug: "soft-skills",
    term: "Soft Skills",
    synonyms: ["Habilidades Comportamentais", "Competências Socioemocionais"],
    keywords: ["soft skills", "habilidades comportamentais", "competências socioemocionais"],
    category: "carreira",
    sameAs: "https://en.wikipedia.org/wiki/Soft_skills",
    shortDefinition:
      "Soft skills são as habilidades comportamentais e interpessoais — como comunicação, liderança, adaptabilidade, inteligência emocional e resolução de problemas — que determinam como uma pessoa se relaciona e entrega resultados no trabalho. Em 2026, são consideradas o principal diferencial em um mercado dominado por automação e IA.",
    quickSummary: [
      "Habilidades ligadas ao comportamento e à interação humana.",
      "Complementam as hard skills (técnicas).",
      "Estão no topo das exigências do Fórum Econômico Mundial para 2030.",
    ],
    fullDefinition: [
      "Enquanto hard skills podem ser certificadas e ensinadas em cursos, soft skills se desenvolvem por meio de prática, feedback e autoconhecimento. Elas são difíceis de medir, mas fáceis de perceber.",
      "Empresas relatam que 92% das contratações fracassam por falta de soft skills, não de competência técnica.",
    ],
    howItWorks: [
      "Identifique as soft skills exigidas na vaga.",
      "Traduza cada uma em um exemplo comportamental (método STAR).",
      "Prove com contexto, ação e resultado, em vez de apenas listar.",
    ],
    practicalExample:
      "Em vez de escrever 'boa comunicação', prove: 'Liderei apresentação semanal para diretoria com 40 pessoas, aumentando aprovação de projetos em 25%'.",
    whyItMatters:
      "Segundo o Fórum Econômico Mundial (Future of Jobs 2025), pensamento analítico, resiliência e liderança estão entre as 10 competências mais demandadas até 2030.",
    advantages: [
      "Complementam qualquer trajetória técnica.",
      "São transferíveis entre setores.",
      "Difíceis de substituir por IA.",
    ],
    commonMistakes: [
      "Listar sem exemplos concretos.",
      "Escolher soft skills desalinhadas com a vaga.",
      "Confundir traços de personalidade com competências.",
    ],
    faq: [
      { q: "Quais são as principais soft skills em 2026?", a: "Pensamento analítico, resiliência, aprendizado contínuo, liderança e alfabetização em IA lideram os rankings do WEF." },
    ],
    relatedTerms: ["hard-skills", "curriculo", "entrevista-por-competencias"],
    recommendedArticles: [
      { title: "Destaque suas Habilidades com Estratégia e Impacto", url: "/blog/destaque-habilidades-estrategia-impacto" },
      { title: "IA no mercado de trabalho até 2030", url: "/blog/inteligencia-artificial-mercado-trabalho-profissoes-2030" },
    ],
    references: [
      { label: "Soft skills — Wikipedia", url: "https://en.wikipedia.org/wiki/Soft_skills" },
      { label: "WEF Future of Jobs Report", url: "https://www.weforum.org/reports/the-future-of-jobs-report" },
    ],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 6,
    popularity: 90,
    featured: true,
  },
  {
    slug: "hard-skills",
    term: "Hard Skills",
    synonyms: ["Competências Técnicas", "Habilidades Técnicas"],
    keywords: ["hard skills", "habilidades técnicas", "competências técnicas"],
    category: "carreira",
    shortDefinition:
      "Hard skills são as competências técnicas, ensináveis e mensuráveis — como idiomas, programação, Excel avançado, contabilidade ou operação de máquinas — que podem ser comprovadas por certificados, cursos e testes práticos. São o requisito mínimo para a maioria das vagas.",
    quickSummary: [
      "Competências técnicas e mensuráveis.",
      "Podem ser certificadas por cursos e diplomas.",
      "Devem ser priorizadas por nível de proficiência.",
    ],
    fullDefinition: [
      "Hard skills variam por área: para TI podem ser linguagens de programação; para marketing, ferramentas como Google Ads e SEO; para saúde, procedimentos e uso de equipamentos.",
      "No currículo, devem aparecer alinhadas às exigências da vaga e, quando possível, com nível de domínio (básico, intermediário, avançado).",
    ],
    howItWorks: [
      "Liste as hard skills exigidas na vaga.",
      "Cruze com o que você domina.",
      "Priorize as mais críticas no topo.",
      "Complemente com certificações relevantes.",
    ],
    practicalExample:
      "Para uma vaga de Analista de Dados: 'SQL (avançado), Python (intermediário), Power BI (avançado), Excel (avançado), Estatística Descritiva (intermediário)'.",
    whyItMatters:
      "Hard skills são o filtro inicial do ATS. Sem elas, você não chega à fase de entrevista, mesmo com soft skills excelentes.",
    advantages: [
      "Fáceis de comprovar e certificar.",
      "Objetivas e mensuráveis.",
      "Aumentam empregabilidade em áreas técnicas.",
    ],
    commonMistakes: [
      "Listar tecnologias que você não domina.",
      "Não indicar nível de proficiência.",
      "Manter no currículo skills obsoletas.",
    ],
    faq: [
      { q: "Como comprovar hard skills?", a: "Certificados oficiais, portfólio, projetos no GitHub, testes técnicos ou notas em provas de proficiência (TOEFL, CELPE, AWS Certified, etc.)." },
    ],
    relatedTerms: ["soft-skills", "curriculo", "ats"],
    recommendedArticles: [{ title: "Destaque suas Habilidades com Estratégia e Impacto", url: "/blog/destaque-habilidades-estrategia-impacto" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 84,
  },
  {
    slug: "linkedin",
    term: "LinkedIn",
    synonyms: ["Perfil LinkedIn", "Rede Profissional"],
    keywords: ["linkedin", "perfil linkedin", "rede social profissional", "networking"],
    category: "linkedin-marca-pessoal",
    sameAs: "https://pt.wikipedia.org/wiki/LinkedIn",
    shortDefinition:
      "LinkedIn é a maior rede social profissional do mundo, com mais de 1 bilhão de usuários em 2026, sendo mais de 80 milhões no Brasil. Funciona como currículo dinâmico, plataforma de networking e principal fonte de recrutamento para vagas de cargos qualificados.",
    quickSummary: [
      "Rede profissional presente em mais de 200 países.",
      "Usada por 95% dos recrutadores brasileiros para buscar candidatos.",
      "Complementa — e não substitui — o currículo tradicional.",
    ],
    fullDefinition: [
      "O LinkedIn é hoje um portfólio vivo. Diferente do currículo, ele permite recomendações, conteúdo autoral, endosso de habilidades e interação com decisores.",
      "Perfis otimizados aparecem nas primeiras posições das buscas de recrutadores, gerando oportunidades passivas — vagas que chegam sem candidatura ativa.",
    ],
    howItWorks: [
      "Foto profissional e capa personalizada.",
      "Headline com cargo + valor entregue (não apenas o cargo).",
      "Seção 'Sobre' em 1ª pessoa contando sua trajetória.",
      "Experiências detalhadas com resultados.",
      "Publicações e interações consistentes na rede.",
    ],
    practicalExample:
      "Trocar headline de 'Analista de Marketing' por 'Analista de Marketing | Performance | Reduzo CAC e escalo mídia paga em fintechs' aumenta em até 3x o número de recrutadores que visitam o perfil.",
    whyItMatters:
      "88% dos recrutadores usam o LinkedIn como principal ferramenta de busca. Um perfil desatualizado é como não existir para o mercado.",
    advantages: [
      "Gera oportunidades passivas.",
      "Amplia rede de contatos qualificados.",
      "Constrói autoridade em nichos específicos.",
    ],
    disadvantages: [
      "Perfil incompleto passa impressão negativa.",
      "Exige tempo de manutenção e conteúdo.",
    ],
    commonMistakes: [
      "Copiar o currículo no perfil sem adaptar a linguagem.",
      "Foto informal ou headline apenas com cargo.",
      "Não pedir recomendações.",
      "Ficar meses sem interagir.",
    ],
    faq: [
      { q: "LinkedIn substitui o currículo?", a: "Não. Complementa. A maioria das candidaturas ainda exige currículo em PDF, mas o LinkedIn é o principal canal de descoberta." },
      { q: "Vale a pena o LinkedIn Premium?", a: "Para quem está buscando emprego ativamente, sim — libera InMail, insights de vagas e visibilidade ampliada." },
    ],
    relatedTerms: ["personal-branding", "networking", "curriculo", "headhunter"],
    recommendedArticles: [
      { title: "Como Criar um Perfil no LinkedIn que Atrai Recrutadores", url: "/blog/perfil-linkedin-recrutadores" },
      { title: "Diferença Entre Currículo e Perfil no LinkedIn em 2026", url: "/blog/curriculo-vs-linkedin-2026" },
    ],
    references: [{ label: "LinkedIn — Wikipedia", url: "https://pt.wikipedia.org/wiki/LinkedIn" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 7,
    popularity: 94,
    featured: true,
  },
  {
    slug: "personal-branding",
    term: "Personal Branding",
    synonyms: ["Marca Pessoal", "Branding Pessoal"],
    keywords: ["personal branding", "marca pessoal", "branding pessoal"],
    category: "linkedin-marca-pessoal",
    shortDefinition:
      "Personal branding, ou marca pessoal, é o processo de construir e comunicar deliberadamente a percepção que o mercado tem de você. Envolve posicionamento, presença digital, produção de conteúdo e coerência entre discurso e entrega — transformando o profissional em referência em seu nicho.",
    quickSummary: [
      "Como o mercado te enxerga quando você não está na sala.",
      "Combina competências, valores e reputação.",
      "Impacta diretamente salário, oportunidades e influência.",
    ],
    fullDefinition: [
      "Marca pessoal não é performance — é curadoria estratégica do que você já é. Envolve escolher em qual nicho quer ser lembrado e alinhar todas as ações (currículo, LinkedIn, entrega no trabalho, networking) a esse posicionamento.",
    ],
    howItWorks: [
      "Defina seu nicho e público-alvo.",
      "Escolha 2 a 3 pilares de conteúdo.",
      "Produza consistentemente em uma ou duas plataformas.",
      "Meça engajamento e ajuste posicionamento.",
    ],
    practicalExample:
      "Um advogado especializado em direito digital que publica semanalmente análises de casos LGPD no LinkedIn constrói autoridade e passa a ser convidado para bancas e palestras.",
    whyItMatters:
      "Profissionais com marca pessoal forte relatam salários 20–30% acima da média e maior facilidade em transições de carreira.",
    advantages: [
      "Amplia oportunidades passivas.",
      "Fortalece autoridade no nicho.",
      "Aumenta poder de negociação salarial.",
    ],
    commonMistakes: [
      "Copiar o estilo de influenciadores.",
      "Falta de consistência na frequência.",
      "Focar em vaidade em vez de valor entregue.",
    ],
    faq: [
      { q: "Preciso ser influenciador para ter marca pessoal?", a: "Não. Marca pessoal é sobre reputação profissional, não sobre número de seguidores." },
    ],
    relatedTerms: ["linkedin", "networking", "curriculo"],
    recommendedArticles: [{ title: "Diferença Entre Currículo e Perfil no LinkedIn em 2026", url: "/blog/curriculo-vs-linkedin-2026" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 76,
  },
  {
    slug: "networking",
    term: "Networking",
    synonyms: ["Rede de Contatos", "Networking Profissional"],
    keywords: ["networking", "rede de contatos", "conexões profissionais"],
    category: "carreira",
    sameAs: "https://pt.wikipedia.org/wiki/Networking",
    shortDefinition:
      "Networking é a construção estratégica e o cultivo contínuo de uma rede de contatos profissionais com o objetivo de trocar conhecimento, gerar oportunidades e apoiar mutuamente o crescimento de carreira. Estudos mostram que 70% das vagas no mercado brasileiro são preenchidas via indicação.",
    quickSummary: [
      "Rede de relacionamentos profissionais.",
      "Base para indicações e oportunidades ocultas.",
      "Pode ser feito presencialmente ou online.",
    ],
    fullDefinition: [
      "Networking moderno não é sobre coletar cartões de visita, e sim cultivar relações com valor real: ajudar antes de pedir, compartilhar conhecimento e manter contato consistente.",
    ],
    howItWorks: [
      "Identifique pessoas e comunidades do seu nicho.",
      "Ofereça valor antes de pedir algo.",
      "Mantenha contato periódico (curtidas, comentários, mensagens).",
      "Cultive relações em eventos, meetups e associações.",
    ],
    practicalExample:
      "Enviar um artigo relevante a um antigo colega ou parabenizá-lo por uma promoção pode gerar mais oportunidades do que enviar 100 candidaturas frias.",
    whyItMatters:
      "Segundo o LinkedIn, 85% das vagas são preenchidas via networking — muitas nem chegam a ser publicadas.",
    advantages: [
      "Acesso a vagas ocultas.",
      "Recomendações qualificadas.",
      "Suporte em transições e mudanças de carreira.",
    ],
    commonMistakes: [
      "Só ativar a rede quando precisa de algo.",
      "Enviar mensagens padronizadas em massa.",
      "Não manter contato regular.",
    ],
    faq: [
      { q: "Networking funciona para quem é introvertido?", a: "Sim. Networking online e em grupos pequenos costuma ser eficaz e menos desgastante que grandes eventos." },
    ],
    relatedTerms: ["linkedin", "personal-branding", "indicacao"],
    recommendedArticles: [{ title: "Como Criar um Perfil no LinkedIn que Atrai Recrutadores", url: "/blog/perfil-linkedin-recrutadores" }],
    references: [{ label: "Networking — Wikipedia", url: "https://pt.wikipedia.org/wiki/Networking" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 80,
  },
  {
    slug: "headhunter",
    term: "Headhunter",
    synonyms: ["Caça-Talentos", "Recrutador Executivo"],
    keywords: ["headhunter", "caça talentos", "recrutador executivo"],
    category: "ats-recrutamento",
    shortDefinition:
      "Headhunter é o profissional ou consultoria especializada em recrutar candidatos passivos para posições estratégicas — geralmente gerência, diretoria e cargos técnicos raros. Diferente do recrutador tradicional, o headhunter abordar profissionais que não estão buscando emprego ativamente.",
    quickSummary: [
      "Recruta para cargos de média/alta liderança.",
      "Aborda candidatos passivos.",
      "Trabalha por hunting fee (percentual do salário anual).",
    ],
    fullDefinition: [
      "Headhunters atuam por mandato de empresas clientes que precisam preencher vagas confidenciais ou de difícil preenchimento. Costumam mapear o mercado, filtrar candidatos e conduzir entrevistas técnicas antes de indicar shortlists.",
    ],
    howItWorks: [
      "Empresa contrata headhunter para vaga sigilosa.",
      "Headhunter mapeia o mercado no LinkedIn e em sua rede.",
      "Aborda candidatos com perfil desejado.",
      "Entrevista, avalia e apresenta shortlist à empresa.",
    ],
    practicalExample:
      "Uma multinacional precisa contratar um CFO. Em vez de publicar vaga, contrata headhunter que mapeia 30 executivos qualificados e apresenta 5 finalistas em 45 dias.",
    whyItMatters:
      "Ter visibilidade para headhunters é essencial para acessar vagas executivas que nunca são anunciadas publicamente.",
    advantages: [
      "Acesso a vagas confidenciais e melhores pacotes.",
      "Processo mais rápido e personalizado.",
      "Feedback qualificado sobre posicionamento.",
    ],
    commonMistakes: [
      "Perfil de LinkedIn incompleto ou desatualizado.",
      "Não retornar contato de headhunter em momento errado — mantenha diálogo sempre.",
    ],
    faq: [
      { q: "Preciso pagar headhunter?", a: "Não. Quem paga é a empresa contratante. Desconfie de qualquer 'headhunter' que cobre do candidato." },
    ],
    relatedTerms: ["linkedin", "recrutamento", "networking"],
    recommendedArticles: [],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 4,
    popularity: 68,
  },
  {
    slug: "recrutamento",
    term: "Recrutamento e Seleção",
    synonyms: ["R&S", "Processo de Contratação"],
    keywords: ["recrutamento", "recrutamento e seleção", "r&s", "processo seletivo"],
    category: "ats-recrutamento",
    sameAs: "https://pt.wikipedia.org/wiki/Recrutamento",
    shortDefinition:
      "Recrutamento e seleção é o conjunto de etapas usadas por empresas para atrair, filtrar e escolher candidatos para uma vaga. Envolve divulgação da oportunidade, triagem por ATS, testes, entrevistas, dinâmicas e checagem de referências, sendo hoje um processo cada vez mais orientado por dados.",
    quickSummary: [
      "Etapas: atração, triagem, avaliação e contratação.",
      "Combina ATS, entrevistas e testes.",
      "Em 2026, algoritmos assumem parte da triagem inicial.",
    ],
    fullDefinition: [
      "Recrutamento é a fase de atração (vagas, LinkedIn, banco de talentos). Seleção é a fase de filtragem e escolha (testes, dinâmicas, entrevistas). Juntas, formam o funil de contratação.",
    ],
    howItWorks: [
      "Requisição da vaga pelo gestor.",
      "Descrição de perfil e divulgação.",
      "Triagem inicial (ATS + RH).",
      "Testes técnicos e comportamentais.",
      "Entrevistas com RH e gestor.",
      "Proposta e admissão.",
    ],
    practicalExample:
      "Vaga para Product Manager: 800 candidatos → ATS filtra 200 → RH avalia 40 → 15 entrevistas → 5 case → 2 finalistas → 1 contratado.",
    whyItMatters:
      "Entender o processo permite ao candidato se preparar melhor para cada fase, aumentando drasticamente as chances de aprovação.",
    advantages: [
      "Reduz risco de má contratação.",
      "Padroniza avaliação.",
      "Amplia diversidade quando bem estruturado.",
    ],
    commonMistakes: [
      "Achar que só o currículo importa.",
      "Não pesquisar sobre a empresa.",
      "Ignorar feedback de etapas anteriores.",
    ],
    faq: [
      { q: "Quanto tempo dura um processo seletivo?", a: "Em média 30 a 60 dias no Brasil, podendo chegar a 90 dias para cargos executivos." },
    ],
    relatedTerms: ["ats", "entrevista", "dinamica-de-grupo", "headhunter"],
    recommendedArticles: [
      { title: "O Que Recrutadores Realmente Buscam", url: "/blog/o-que-recrutadores-buscam-curriculo" },
    ],
    references: [{ label: "Recrutamento — Wikipedia", url: "https://pt.wikipedia.org/wiki/Recrutamento" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 6,
    popularity: 82,
  },
  {
    slug: "entrevista",
    term: "Entrevista de Emprego",
    synonyms: ["Entrevista", "Job Interview"],
    keywords: ["entrevista", "entrevista emprego", "job interview"],
    category: "processo-seletivo",
    sameAs: "https://pt.wikipedia.org/wiki/Entrevista_de_emprego",
    shortDefinition:
      "Entrevista de emprego é a conversa estruturada entre candidato e empresa para avaliar aderência técnica, comportamental e cultural a uma vaga. Em 2026, predominam formatos híbridos: primeira etapa por vídeo, testes assíncronos e entrevistas presenciais apenas nas fases finais.",
    quickSummary: [
      "Etapa decisiva do processo seletivo.",
      "Pode ser por telefone, vídeo ou presencial.",
      "Combina perguntas técnicas, comportamentais e situacionais.",
    ],
    fullDefinition: [
      "A entrevista moderna vai além do 'me fala de você'. Recrutadores usam metodologias como STAR e entrevistas por competências para reduzir viés e prever desempenho futuro.",
    ],
    howItWorks: [
      "Pesquise sobre empresa, produto e entrevistadores.",
      "Prepare respostas para perguntas comportamentais no método STAR.",
      "Tenha 3 perguntas inteligentes para fazer.",
      "Cuide do ambiente e conexão em entrevistas por vídeo.",
    ],
    practicalExample:
      "Pergunta: 'Fale sobre um conflito com colega'. Resposta STAR: Situação — projeto atrasado; Tarefa — mediar entre design e engenharia; Ação — propus reunião semanal; Resultado — entrega em dia e NPS interno subiu 20%.",
    whyItMatters:
      "Candidatos que se preparam com método STAR têm taxa de aprovação 2,5x maior segundo estudos da LinkedIn Talent Solutions.",
    advantages: [
      "Mostra habilidades que o currículo não revela.",
      "Permite avaliar a empresa também.",
      "Constrói relacionamento com o recrutador.",
    ],
    commonMistakes: [
      "Não pesquisar sobre a empresa.",
      "Falar mal de empregadores anteriores.",
      "Não ter perguntas para fazer.",
      "Chegar atrasado ou com problemas de conexão.",
    ],
    faq: [
      { q: "Quanto dura uma entrevista?", a: "Em média 30 a 60 minutos. Painéis com múltiplos entrevistadores podem chegar a 2 horas." },
      { q: "Como se vestir para entrevista online?", a: "Roupa igual à presencial: da cintura pra cima, tom sóbrio e coerente com o setor." },
    ],
    relatedTerms: ["metodo-star", "entrevista-por-competencias", "recrutamento", "case"],
    recommendedArticles: [{ title: "Como se Preparar para Entrevista em 2026", url: "/blog/como-se-preparar-entrevista-emprego-2026" }],
    references: [{ label: "Entrevista de emprego — Wikipedia", url: "https://pt.wikipedia.org/wiki/Entrevista_de_emprego" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 7,
    popularity: 93,
    featured: true,
  },
  {
    slug: "metodo-star",
    term: "Método STAR",
    synonyms: ["STAR", "STAR Method", "Situação Tarefa Ação Resultado"],
    keywords: ["método star", "star method", "entrevista por competências"],
    category: "processo-seletivo",
    shortDefinition:
      "Método STAR é a estrutura de resposta mais recomendada para entrevistas comportamentais, dividindo a resposta em quatro blocos: Situação (contexto), Tarefa (o que precisava ser feito), Ação (o que você fez) e Resultado (o impacto mensurável). Foi criado pela consultoria Development Dimensions International (DDI).",
    quickSummary: [
      "Estrutura de resposta em quatro etapas.",
      "Usada em entrevistas por competências.",
      "Reduz respostas vagas e aumenta credibilidade.",
    ],
    fullDefinition: [
      "STAR ajuda o candidato a contar histórias objetivas e mensuráveis. Substitui respostas genéricas ('sou bom em liderança') por evidências concretas de comportamento passado, que preveem comportamento futuro.",
    ],
    howItWorks: [
      "Situação: descreva o cenário em 2–3 frases.",
      "Tarefa: qual era seu papel/desafio.",
      "Ação: o que você fez, em detalhes.",
      "Resultado: números, prazos, impactos gerados.",
    ],
    practicalExample:
      "Pergunta: 'Fale sobre um erro que cometeu'. STAR: S — lancei campanha sem revisar copy; T — reverter dano de marca; A — enviei correção, pedi desculpa pública e mudei processo com revisão dupla; R — recuperamos 90% do CTR e o novo processo evitou 3 incidentes similares.",
    whyItMatters:
      "Consultorias globais estimam que candidatos que dominam STAR têm até 40% mais aprovação em entrevistas estruturadas.",
    advantages: [
      "Torna as respostas objetivas e memoráveis.",
      "Reduz nervosismo com estrutura pronta.",
      "Prova competências com evidências.",
    ],
    commonMistakes: [
      "Pular o Resultado.",
      "Focar no 'nós' em vez do 'eu'.",
      "Escolher histórias sem métrica.",
    ],
    faq: [
      { q: "Toda pergunta pede STAR?", a: "Não. Use STAR para perguntas comportamentais ('conte uma vez em que...'). Perguntas técnicas exigem estrutura própria." },
    ],
    relatedTerms: ["entrevista", "entrevista-por-competencias", "soft-skills"],
    recommendedArticles: [{ title: "Como se Preparar para Entrevista em 2026", url: "/blog/como-se-preparar-entrevista-emprego-2026" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 4,
    popularity: 78,
  },
  {
    slug: "entrevista-por-competencias",
    term: "Entrevista por Competências",
    synonyms: ["Behavioral Interview", "Competency-Based Interview"],
    keywords: ["entrevista por competências", "behavioral interview", "avaliação comportamental"],
    category: "processo-seletivo",
    shortDefinition:
      "Entrevista por competências é o formato em que o recrutador faz perguntas específicas sobre situações reais do passado do candidato, partindo do princípio de que comportamento passado é o melhor preditor de comportamento futuro. Cada pergunta é vinculada a uma competência mapeada no perfil da vaga.",
    quickSummary: [
      "Foca em comportamentos passados reais.",
      "Cada pergunta avalia uma competência específica.",
      "Recomenda-se responder com método STAR.",
    ],
    fullDefinition: [
      "Nesse formato, perguntas tipo 'me fala de uma vez em que você...' substituem hipóteses. O objetivo é reduzir viés e prever desempenho com base em evidências.",
    ],
    howItWorks: [
      "Empresa mapeia competências críticas para a vaga.",
      "Elabora banco de perguntas por competência.",
      "Entrevistador aprofunda com perguntas de follow-up.",
      "Candidato responde no formato STAR.",
    ],
    practicalExample:
      "Competência 'orientação a resultados' → 'Fale sobre uma meta em que você superou a expectativa.' Resposta STAR com números e impacto.",
    whyItMatters:
      "É o formato mais usado em multinacionais e empresas de tecnologia por sua eficácia em prever desempenho.",
    advantages: [
      "Reduz viés inconsciente.",
      "Permite comparação objetiva entre candidatos.",
      "Foca em evidências, não em promessas.",
    ],
    commonMistakes: [
      "Improvisar sem histórias preparadas.",
      "Falar em teoria ('eu costumo...') em vez de fatos.",
    ],
    faq: [
      { q: "Como me preparar?", a: "Liste 5 a 8 histórias fortes, cada uma cobrindo 2 ou 3 competências, com estrutura STAR." },
    ],
    relatedTerms: ["entrevista", "metodo-star", "soft-skills"],
    recommendedArticles: [{ title: "Como se Preparar para Entrevista em 2026", url: "/blog/como-se-preparar-entrevista-emprego-2026" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 72,
  },
  {
    slug: "dinamica-de-grupo",
    term: "Dinâmica de Grupo",
    synonyms: ["Dinâmica", "Group Assessment"],
    keywords: ["dinâmica de grupo", "assessment", "processo seletivo em grupo"],
    category: "processo-seletivo",
    shortDefinition:
      "Dinâmica de grupo é a etapa do processo seletivo em que vários candidatos interagem simultaneamente, resolvendo desafios propostos por recrutadores que observam comportamentos como liderança, comunicação, empatia, colaboração e resolução de conflitos. É comum em programas de trainee e estágio.",
    quickSummary: [
      "Vários candidatos avaliados em conjunto.",
      "Foco em observação comportamental.",
      "Comum em trainee, estágio e jovem aprendiz.",
    ],
    fullDefinition: [
      "Recrutadores não esperam que candidatos 'ganhem' a dinâmica. Eles avaliam como cada um interage: quem escuta, quem propõe, quem media, quem constrói junto e quem atropela.",
    ],
    howItWorks: [
      "Grupos de 6 a 12 candidatos.",
      "Desafio ou case proposto (30–90 minutos).",
      "Discussão em grupo com prazo.",
      "Apresentação do resultado.",
      "Observadores avaliam comportamentos.",
    ],
    practicalExample:
      "Grupo recebe cenário: 'A empresa precisa cortar 20% dos custos. Que áreas cortariam e por quê?' Recrutadores observam quem estrutura, quem pondera e quem consegue conciliar visões diferentes.",
    whyItMatters:
      "Mostra comportamentos que não aparecem em entrevistas individuais, especialmente colaboração e influência.",
    advantages: [
      "Revela dinâmicas de trabalho em equipe.",
      "Otimiza tempo do recrutador.",
    ],
    commonMistakes: [
      "Tentar dominar a conversa.",
      "Ficar em silêncio o tempo todo.",
      "Desqualificar ideias dos colegas.",
    ],
    faq: [
      { q: "Como se destacar em uma dinâmica?", a: "Equilibre escuta e contribuição, faça perguntas boas, valorize ideias alheias e ajude o grupo a chegar em consenso." },
    ],
    relatedTerms: ["entrevista", "recrutamento", "trainee"],
    recommendedArticles: [],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 4,
    popularity: 62,
  },
  {
    slug: "trainee",
    term: "Programa Trainee",
    synonyms: ["Trainee", "Programa de Trainees"],
    keywords: ["trainee", "programa trainee", "programa de trainees"],
    category: "carreira",
    shortDefinition:
      "Programa trainee é uma trilha corporativa acelerada, com duração de 12 a 24 meses, voltada para recém-formados com alto potencial. Combina rotação por áreas, mentoria com executivos e projetos estratégicos, com o objetivo de formar futuros líderes da empresa.",
    quickSummary: [
      "Duração média de 12 a 24 meses.",
      "Salários iniciais entre R$ 5 mil e R$ 12 mil.",
      "Processos seletivos extremamente concorridos.",
    ],
    fullDefinition: [
      "Trainees passam por rotações que aceleram sua visão sistêmica do negócio. Ao final, costumam assumir posições de coordenação ou gerência júnior.",
    ],
    howItWorks: [
      "Inscrição online com currículo.",
      "Testes online (lógico, inglês, cases).",
      "Dinâmicas de grupo.",
      "Painéis com executivos.",
      "Business case final.",
    ],
    practicalExample:
      "Programa Trainee Ambev, iFood e Itaú são referências no Brasil, com mais de 100 mil inscritos para 30–100 vagas.",
    whyItMatters:
      "Acelera carreira em 3 a 5 anos e oferece rede de contatos privilegiada, mas exige altíssima preparação e resistência ao processo seletivo.",
    advantages: [
      "Aceleração de carreira.",
      "Rede de contatos executiva.",
      "Formação estruturada.",
    ],
    disadvantages: [
      "Concorrência altíssima.",
      "Rotina intensa.",
      "Rotação pode dificultar aprofundamento em uma área.",
    ],
    commonMistakes: [
      "Focar apenas nos processos famosos.",
      "Subestimar testes lógicos e inglês.",
    ],
    faq: [
      { q: "Preciso de MBA para trainee?", a: "Não. Trainee é para recém-formados (geralmente até 2 anos após graduação). MBA é para estágios seguintes." },
    ],
    relatedTerms: ["dinamica-de-grupo", "processo-seletivo", "estagio"],
    recommendedArticles: [{ title: "Quais profissões terão mais vagas no Brasil até 2030?", url: "/blog/profissoes-mais-vagas-brasil-2030" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 74,
  },
  {
    slug: "estagio",
    term: "Estágio",
    synonyms: ["Programa de Estágio", "Internship"],
    keywords: ["estágio", "estagio", "programa de estágio", "estagiário"],
    category: "carreira",
    sameAs: "https://pt.wikipedia.org/wiki/Est%C3%A1gio",
    shortDefinition:
      "Estágio é a atividade educativa supervisionada, regida no Brasil pela Lei 11.788/2008, que permite ao estudante matriculado em curso técnico ou superior aplicar conhecimentos em ambiente real de trabalho. Tem carga máxima de 30h/semana, direito a bolsa, recesso remunerado e não gera vínculo empregatício.",
    quickSummary: [
      "Regido pela Lei 11.788/2008 (Lei do Estágio).",
      "Carga máxima de 30 horas semanais.",
      "Direito a recesso de 30 dias após 12 meses.",
    ],
    fullDefinition: [
      "Estágio é a principal porta de entrada para o mercado formal. Diferente do jovem aprendiz e do trabalho CLT, é um contrato regido por lei própria, exige matrícula em curso e supervisão de professor orientador.",
    ],
    howItWorks: [
      "Estudante deve estar matriculado em curso reconhecido.",
      "Assina Termo de Compromisso de Estágio (TCE).",
      "Instituição de ensino acompanha via professor orientador.",
      "Empresa paga bolsa e vale-transporte (se >20h).",
    ],
    practicalExample:
      "Estudante de Marketing faz 6h/dia durante o curso, ganhando bolsa de R$ 1.800 e vale-transporte. Ao final, é efetivado como Analista Júnior.",
    whyItMatters:
      "Cerca de 70% dos estagiários são efetivados pelas empresas, tornando o estágio o principal atalho para o primeiro emprego CLT.",
    advantages: [
      "Experiência prática enquanto estuda.",
      "Bolsa + vale-transporte.",
      "Sem descontos trabalhistas.",
      "Alta taxa de efetivação.",
    ],
    disadvantages: [
      "Sem FGTS, 13º ou férias remuneradas.",
      "Limite de 30h semanais reduz salário.",
    ],
    commonMistakes: [
      "Aceitar estágio fora da área de estudo.",
      "Ignorar o TCE ou trabalhar mais que 30h.",
    ],
    faq: [
      { q: "Estagiário tem 13º e férias?", a: "Não. Tem recesso remunerado de 30 dias após 12 meses de contrato (ou proporcional)." },
      { q: "Estágio pode virar CLT direto?", a: "Sim. A empresa pode efetivar a qualquer momento. Não é obrigatório aguardar o fim do contrato." },
    ],
    relatedTerms: ["jovem-aprendiz", "clt", "trainee"],
    recommendedArticles: [{ title: "Currículo para Estágio: O Guia Definitivo", url: "/blog/curriculo-estagio-estudantes" }],
    references: [{ label: "Lei 11.788/2008 (Lei do Estágio)", url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11788.htm" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 6,
    popularity: 86,
  },
  {
    slug: "jovem-aprendiz",
    term: "Jovem Aprendiz",
    synonyms: ["Menor Aprendiz", "Programa Jovem Aprendiz"],
    keywords: ["jovem aprendiz", "menor aprendiz", "aprendizagem"],
    category: "carreira",
    shortDefinition:
      "Jovem Aprendiz é o contrato especial CLT previsto na Lei 10.097/2000 para adolescentes e jovens de 14 a 24 anos, combinando atividade prática na empresa com formação teórica em instituição qualificada (SENAI, SENAC, entidades sem fins lucrativos). Tem duração máxima de 2 anos.",
    quickSummary: [
      "Idade: 14 a 24 anos (sem limite para PcD).",
      "Contrato CLT com todos os direitos proporcionais.",
      "Empresas médias e grandes têm cota obrigatória.",
    ],
    fullDefinition: [
      "É a principal política pública de inclusão de jovens no mercado formal. Combina 20 a 30h semanais de trabalho com curso teórico obrigatório.",
    ],
    howItWorks: [
      "Empresa contrata via entidade formadora.",
      "Jovem trabalha parte do dia e estuda a outra.",
      "Salário mínimo/hora, FGTS reduzido a 2%.",
      "Duração até 24 meses.",
    ],
    practicalExample:
      "Jovem de 16 anos assina contrato Jovem Aprendiz em rede de fast-food, trabalha 4h/dia e faz curso técnico no SENAC nas outras 4h.",
    whyItMatters:
      "Reduz o desemprego juvenil (que passa de 20% no Brasil em 2026) e forma mão de obra qualificada.",
    advantages: [
      "Primeira carteira assinada.",
      "Curso profissionalizante gratuito.",
      "Todos os direitos CLT (proporcionais).",
    ],
    commonMistakes: [
      "Confundir com estágio (é CLT, não estágio).",
      "Não valorizar a certificação da entidade formadora.",
    ],
    faq: [
      { q: "Jovem Aprendiz tem carteira assinada?", a: "Sim, é contrato CLT com FGTS de 2% e todos os direitos proporcionais." },
    ],
    relatedTerms: ["estagio", "clt", "primeiro-emprego"],
    recommendedArticles: [{ title: "Currículo para Primeiro Emprego", url: "/blog/curriculo-primeiro-emprego-o-que-incluir" }],
    references: [{ label: "Lei 10.097/2000", url: "https://www.planalto.gov.br/ccivil_03/leis/l10097.htm" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 79,
  },
  {
    slug: "primeiro-emprego",
    term: "Primeiro Emprego",
    synonyms: ["1º Emprego", "Início de Carreira"],
    keywords: ["primeiro emprego", "1º emprego", "início carreira"],
    category: "carreira",
    shortDefinition:
      "Primeiro emprego é a entrada formal no mercado de trabalho, geralmente por meio de estágio, jovem aprendiz ou vagas de nível operacional. É considerado um dos maiores desafios profissionais no Brasil, dada a alta exigência de experiência prévia mesmo em vagas iniciais.",
    quickSummary: [
      "Principais portas: estágio, jovem aprendiz e trainee.",
      "Currículo foca em cursos, projetos e voluntariado.",
      "Recrutadores valorizam atitude tanto quanto técnica.",
    ],
    fullDefinition: [
      "Sem experiência formal, o candidato precisa comprovar valor por outras evidências: cursos livres, projetos pessoais, participação em ligas acadêmicas, voluntariado, iniciação científica ou trabalhos informais.",
    ],
    howItWorks: [
      "Identifique vagas de entrada compatíveis.",
      "Estruture currículo com base em habilidades e experiências não formais.",
      "Aproveite oportunidades de estágio e aprendiz.",
      "Prepare-se para entrevistas com foco em potencial.",
    ],
    practicalExample:
      "Candidato de 17 anos sem experiência inclui: 'Projeto voluntário de arrecadação (organizou equipe de 12 pessoas e captou R$ 8 mil em 3 meses)' — comprovando liderança e organização.",
    whyItMatters:
      "O primeiro emprego molda a trajetória. Escolhas iniciais impactam salário e progressão nos 5 anos seguintes.",
    advantages: [
      "Ganho de experiência prática.",
      "Rede de contatos profissional.",
      "Autonomia financeira.",
    ],
    commonMistakes: [
      "Enviar currículo sem personalização.",
      "Desistir após poucas rejeições.",
      "Focar só em salário e ignorar aprendizado.",
    ],
    faq: [
      { q: "É melhor estágio ou CLT no primeiro emprego?", a: "Depende. Estágio permite conciliar com faculdade e testar áreas. CLT dá estabilidade e melhores benefícios." },
    ],
    relatedTerms: ["estagio", "jovem-aprendiz", "curriculo"],
    recommendedArticles: [
      { title: "Currículo para Primeiro Emprego", url: "/blog/curriculo-primeiro-emprego-o-que-incluir" },
      { title: "Currículo Sem Experiência: Estratégias", url: "/blog/curriculo-sem-experiencia-estrategias" },
    ],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 88,
  },
  {
    slug: "clt",
    term: "CLT (Consolidação das Leis do Trabalho)",
    synonyms: ["Consolidação das Leis do Trabalho", "Regime CLT", "Carteira Assinada"],
    keywords: ["clt", "carteira assinada", "regime clt", "direitos trabalhistas"],
    category: "legislacao",
    sameAs: "https://pt.wikipedia.org/wiki/Consolida%C3%A7%C3%A3o_das_Leis_do_Trabalho",
    shortDefinition:
      "CLT é a Consolidação das Leis do Trabalho, decreto-lei 5.452/1943 que rege a relação entre empregado e empregador no Brasil. Garante direitos como carteira assinada, salário mínimo, jornada de 44 horas, FGTS, 13º salário, férias remuneradas, aviso prévio, licenças e proteção contra demissões arbitrárias.",
    quickSummary: [
      "Principal lei trabalhista do Brasil desde 1943.",
      "Garante direitos como FGTS, 13º e férias.",
      "Foi alterada pela Reforma Trabalhista de 2017.",
    ],
    fullDefinition: [
      "A CLT define os pilares da relação empregatícia formal. Trabalhador CLT tem estabilidade jurídica, mas custo maior para a empresa, o que gerou o crescimento de contratos alternativos como MEI e PJ.",
    ],
    howItWorks: [
      "Empregador registra o empregado na CTPS Digital.",
      "Descontos automáticos de INSS e IRRF.",
      "Recolhimento mensal de FGTS (8% do salário).",
      "Direito a férias, 13º, aviso prévio e verbas rescisórias.",
    ],
    practicalExample:
      "Um empregado CLT com salário de R$ 4.000 recebe: 13º proporcional, férias + 1/3, FGTS de R$ 320/mês, INSS descontado em folha e proteção em caso de demissão sem justa causa.",
    whyItMatters:
      "É o regime mais protetivo ao trabalhador brasileiro e ainda cobre a maior parte da força de trabalho formal.",
    advantages: [
      "Estabilidade e proteção jurídica.",
      "FGTS, 13º, férias e aposentadoria pelo INSS.",
      "Seguro-desemprego em caso de demissão.",
    ],
    disadvantages: [
      "Salário líquido menor que PJ para mesmo custo.",
      "Menor flexibilidade de jornada.",
    ],
    commonMistakes: [
      "Aceitar trabalhar sem carteira assinada.",
      "Confundir CLT com estágio.",
      "Ignorar direitos e não guardar comprovantes.",
    ],
    faq: [
      { q: "Diferença entre CLT e PJ?", a: "CLT tem vínculo empregatício, direitos e descontos automáticos. PJ é prestação de serviços via CNPJ, sem vínculo e com maior liquidez, mas sem direitos trabalhistas." },
    ],
    relatedTerms: ["fgts", "13-salario", "ferias", "aviso-previo", "pj", "mei"],
    recommendedArticles: [{ title: "Direitos Trabalhistas CLT 2026", url: "/blog/direitos-trabalhistas-clt-brasil-guia-completo" }],
    references: [{ label: "CLT no Planalto", url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 7,
    popularity: 95,
    featured: true,
  },
  {
    slug: "fgts",
    term: "FGTS (Fundo de Garantia do Tempo de Serviço)",
    synonyms: ["Fundo de Garantia", "FGTS"],
    keywords: ["fgts", "fundo de garantia", "saque fgts", "multa 40%"],
    category: "legislacao",
    sameAs: "https://pt.wikipedia.org/wiki/Fundo_de_Garantia_do_Tempo_de_Servi%C3%A7o",
    shortDefinition:
      "FGTS é o Fundo de Garantia do Tempo de Serviço, depósito mensal de 8% do salário bruto que o empregador faz em uma conta vinculada ao trabalhador CLT na Caixa Econômica Federal. Serve como poupança forçada para situações como demissão sem justa causa, compra de imóvel, doença grave e aposentadoria.",
    quickSummary: [
      "8% do salário depositado pelo empregador.",
      "Multa de 40% em demissão sem justa causa.",
      "Pode ser sacado em situações específicas.",
    ],
    fullDefinition: [
      "Criado em 1966, o FGTS acabou com a estabilidade decenal e substituiu por poupança individual. Em 2026, rende TR + 3% ao ano + parte da distribuição de lucros do Fundo.",
    ],
    howItWorks: [
      "Empresa recolhe 8% mensalmente.",
      "Valor fica em conta na Caixa em nome do trabalhador.",
      "Consulta pelo app FGTS.",
      "Saque nas hipóteses previstas em lei.",
    ],
    practicalExample:
      "Trabalhador com salário de R$ 3.000 tem R$ 240/mês depositados no FGTS. Após 5 anos, tem cerca de R$ 15 mil + rendimentos, disponíveis em caso de demissão sem justa causa.",
    whyItMatters:
      "Além da poupança, o FGTS financia habitação popular via Minha Casa Minha Vida e é essencial na compra de imóvel.",
    advantages: [
      "Poupança automática.",
      "Multa rescisória protege em demissões.",
      "Pode ser usado em imóvel financiado.",
    ],
    commonMistakes: [
      "Não conferir depósitos mensais.",
      "Ignorar valores esquecidos em contas antigas.",
    ],
    faq: [
      { q: "Quando posso sacar o FGTS?", a: "Demissão sem justa causa, aposentadoria, compra de imóvel, doenças graves, saque-aniversário (opcional) e outras hipóteses previstas em lei." },
    ],
    relatedTerms: ["clt", "aviso-previo", "verbas-rescisorias", "seguro-desemprego"],
    recommendedArticles: [{ title: "Direitos Trabalhistas CLT 2026", url: "/blog/direitos-trabalhistas-clt-brasil-guia-completo" }],
    references: [{ label: "FGTS no Wikipédia", url: "https://pt.wikipedia.org/wiki/Fundo_de_Garantia_do_Tempo_de_Servi%C3%A7o" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 6,
    popularity: 92,
  },
  {
    slug: "13-salario",
    term: "13º Salário",
    synonyms: ["Décimo Terceiro", "Gratificação Natalina"],
    keywords: ["13 salário", "décimo terceiro", "gratificação natalina"],
    category: "legislacao",
    shortDefinition:
      "13º salário é a gratificação natalina obrigatória aos trabalhadores CLT, prevista pela Lei 4.090/1962, equivalente a 1/12 do salário para cada mês trabalhado no ano. Pago em duas parcelas: primeira até 30 de novembro e segunda até 20 de dezembro, com desconto de INSS e IRRF apenas na segunda.",
    quickSummary: [
      "Pago em duas parcelas até novembro e dezembro.",
      "Vale 1/12 do salário por mês trabalhado.",
      "Direito de CLT, aposentado e pensionista.",
    ],
    fullDefinition: [
      "Também conhecido como gratificação natalina, o 13º é o principal alívio financeiro do fim de ano para o trabalhador brasileiro. Também é devido proporcionalmente em caso de demissão sem justa causa.",
    ],
    howItWorks: [
      "Empregador calcula 1/12 do salário por mês.",
      "Meses com mais de 15 dias trabalhados contam integralmente.",
      "1ª parcela: metade do valor, sem descontos.",
      "2ª parcela: complemento, com INSS e IR retidos.",
    ],
    practicalExample:
      "Salário de R$ 3.000: 1ª parcela em novembro = R$ 1.500. 2ª parcela em dezembro = R$ 1.500 – INSS – IR.",
    whyItMatters:
      "Movimenta bilhões na economia brasileira todo fim de ano e é uma das principais 'poupanças forçadas' do trabalhador.",
    advantages: [
      "Reforço financeiro anual garantido.",
      "Ajuda a quitar dívidas ou investir.",
    ],
    commonMistakes: [
      "Achar que estagiário tem 13º (não tem).",
      "Não conferir cálculo em admissões/demissões.",
    ],
    faq: [
      { q: "Estagiário tem 13º?", a: "Não. Estagiário é regido pela Lei 11.788/2008 e não tem direito a 13º." },
    ],
    relatedTerms: ["clt", "ferias", "verbas-rescisorias"],
    recommendedArticles: [{ title: "Direitos Trabalhistas CLT 2026", url: "/blog/direitos-trabalhistas-clt-brasil-guia-completo" }],
    references: [{ label: "Lei 4.090/1962", url: "https://www.planalto.gov.br/ccivil_03/leis/l4090.htm" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 4,
    popularity: 86,
  },
  {
    slug: "ferias",
    term: "Férias",
    synonyms: ["Férias Remuneradas", "Férias CLT"],
    keywords: ["férias", "férias remuneradas", "1/3 de férias", "abono pecuniário"],
    category: "legislacao",
    shortDefinition:
      "Férias são o período anual de descanso obrigatório e remunerado, previsto na CLT, de 30 dias corridos a cada 12 meses trabalhados. Devem ser pagas com adicional de 1/3 constitucional e podem ser fracionadas em até três períodos, sendo um de no mínimo 14 dias e os outros de pelo menos 5 dias cada.",
    quickSummary: [
      "30 dias após 12 meses de trabalho.",
      "Adicional de 1/3 constitucional obrigatório.",
      "Podem ser fracionadas em até 3 períodos.",
    ],
    fullDefinition: [
      "Férias são direito indisponível — não podem ser 'vendidas' totalmente. O trabalhador pode converter até 1/3 em abono pecuniário e a empresa deve conceder até o fim do período concessivo (24 meses).",
    ],
    howItWorks: [
      "Empregador comunica com 30 dias de antecedência.",
      "Pagamento é feito até 2 dias antes do início.",
      "Trabalhador recebe salário + 1/3.",
      "Se optar por abono, vende até 10 dias e trabalha nesses.",
    ],
    practicalExample:
      "Trabalhador com salário de R$ 3.000 recebe R$ 4.000 nas férias (R$ 3.000 + R$ 1.000 do 1/3 constitucional).",
    whyItMatters:
      "Descanso remunerado é essencial à saúde e produtividade. Descumprimento gera pagamento em dobro.",
    advantages: [
      "Descanso remunerado.",
      "Reforço financeiro com o 1/3.",
      "Direito garantido por lei.",
    ],
    commonMistakes: [
      "Não usar o período dentro dos 24 meses.",
      "Ignorar o pagamento em dobro por atraso.",
    ],
    faq: [
      { q: "Posso vender todas as férias?", a: "Não. O máximo permitido é vender 10 dias (1/3), trabalhando nesse período." },
    ],
    relatedTerms: ["clt", "13-salario", "verbas-rescisorias"],
    recommendedArticles: [{ title: "Direitos Trabalhistas CLT 2026", url: "/blog/direitos-trabalhistas-clt-brasil-guia-completo" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 84,
  },
  {
    slug: "aviso-previo",
    term: "Aviso Prévio",
    synonyms: ["Aviso Prévio Indenizado", "Aviso Prévio Trabalhado"],
    keywords: ["aviso prévio", "aviso indenizado", "aviso trabalhado", "aviso prévio proporcional"],
    category: "legislacao",
    shortDefinition:
      "Aviso prévio é a comunicação obrigatória entre empregado e empregador sobre o fim do contrato de trabalho sem justa causa. Tem duração mínima de 30 dias, acrescida de 3 dias para cada ano trabalhado, até o limite de 90 dias. Pode ser trabalhado (com redução de 2h/dia) ou indenizado.",
    quickSummary: [
      "Mínimo de 30 dias + 3 por ano trabalhado.",
      "Máximo total de 90 dias.",
      "Pode ser trabalhado ou indenizado.",
    ],
    fullDefinition: [
      "Aviso prévio proporcional foi instituído pela Lei 12.506/2011. Trabalhado, dá direito a redução de jornada. Indenizado, é pago integralmente sem exigência de comparecimento.",
    ],
    howItWorks: [
      "Empresa comunica demissão sem justa causa.",
      "Empregado escolhe redução de 2h/dia ou 7 dias corridos ao fim.",
      "Ou empresa paga o período correspondente sem exigir presença.",
    ],
    practicalExample:
      "Empregado com 4 anos de casa: 30 + (4×3) = 42 dias de aviso prévio proporcional.",
    whyItMatters:
      "Garante ao trabalhador tempo para reorganizar vida financeira e buscar novo emprego.",
    advantages: [
      "Estabilidade financeira transitória.",
      "Tempo para buscar novo emprego.",
    ],
    commonMistakes: [
      "Não exigir cálculo proporcional correto.",
      "Aceitar pedido de demissão sem entender consequências (perde direitos).",
    ],
    faq: [
      { q: "Aviso prévio conta para férias e 13º?", a: "Sim. O aviso prévio (mesmo indenizado) integra o tempo de serviço para todos os efeitos." },
    ],
    relatedTerms: ["clt", "verbas-rescisorias", "fgts"],
    recommendedArticles: [{ title: "Direitos Trabalhistas CLT 2026", url: "/blog/direitos-trabalhistas-clt-brasil-guia-completo" }],
    references: [{ label: "Lei 12.506/2011", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12506.htm" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 78,
  },
  {
    slug: "verbas-rescisorias",
    term: "Verbas Rescisórias",
    synonyms: ["Rescisão Contratual", "Acerto Trabalhista"],
    keywords: ["verbas rescisórias", "rescisão", "acerto trabalhista", "cálculo rescisão"],
    category: "legislacao",
    shortDefinition:
      "Verbas rescisórias são o conjunto de valores que o empregador precisa pagar ao trabalhador CLT no fim do contrato: saldo de salário, aviso prévio, férias vencidas e proporcionais + 1/3, 13º proporcional, saque do FGTS e, em demissão sem justa causa, multa de 40% sobre o FGTS.",
    quickSummary: [
      "Saldo de salário + aviso + férias + 13º + FGTS.",
      "Multa de 40% do FGTS em dispensa sem justa causa.",
      "Prazo de pagamento: 10 dias corridos após o desligamento.",
    ],
    fullDefinition: [
      "As verbas variam conforme o tipo de rescisão: sem justa causa (todas), com justa causa (só saldo e férias vencidas), pedido de demissão (sem multa 40% e sem seguro-desemprego), demissão consensual (metade da multa e aviso).",
    ],
    howItWorks: [
      "Empresa calcula verbas na rescisão.",
      "Emite TRCT (Termo de Rescisão).",
      "Paga em até 10 dias corridos.",
      "Trabalhador saca FGTS + multa via Caixa.",
    ],
    practicalExample:
      "Empregado com 2 anos, salário R$ 3.000, sem justa causa: saldo (dias trabalhados) + aviso (30 dias) + férias proporcionais + 1/3 + 13º proporcional + saque FGTS + multa de 40% = valor total costuma superar 5 salários.",
    whyItMatters:
      "Acerto correto pode representar mais de 6 meses de salário — errar é perder direitos.",
    advantages: [
      "Amortece impacto financeiro da demissão.",
      "Garantido por lei.",
    ],
    commonMistakes: [
      "Não conferir cálculo antes de assinar.",
      "Confundir tipos de rescisão.",
    ],
    faq: [
      { q: "E se a empresa não pagar em 10 dias?", a: "Cabe multa correspondente a 1 salário do empregado, além de correção monetária e juros." },
    ],
    relatedTerms: ["clt", "aviso-previo", "fgts", "seguro-desemprego"],
    recommendedArticles: [{ title: "Direitos Trabalhistas CLT 2026", url: "/blog/direitos-trabalhistas-clt-brasil-guia-completo" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 6,
    popularity: 82,
  },
  {
    slug: "seguro-desemprego",
    term: "Seguro-Desemprego",
    synonyms: ["Seguro Desemprego"],
    keywords: ["seguro desemprego", "seguro-desemprego", "requerer seguro desemprego"],
    category: "legislacao",
    shortDefinition:
      "Seguro-desemprego é o benefício temporário pago pelo governo federal ao trabalhador CLT dispensado sem justa causa, com o objetivo de garantir renda enquanto ele busca nova colocação. Em 2026, são pagas de 3 a 5 parcelas, cujo valor varia de acordo com a média salarial e o tempo de contribuição.",
    quickSummary: [
      "3 a 5 parcelas conforme tempo de trabalho.",
      "Solicitação em até 120 dias após a dispensa.",
      "Feito pela Carteira de Trabalho Digital ou app CAIXA Tem.",
    ],
    fullDefinition: [
      "É um benefício da Seguridade Social financiado pelo FAT. Trabalhador com pelo menos 12 meses de vínculo tem direito nas primeiras solicitações; regras se ajustam nas seguintes.",
    ],
    howItWorks: [
      "Solicitação online via CTPS Digital ou gov.br.",
      "Análise automática do INSS/MTE.",
      "Parcelas depositadas mensalmente na conta ou Caixa Tem.",
    ],
    practicalExample:
      "Empregado com salário médio de R$ 2.500 pode receber 5 parcelas de aproximadamente R$ 2.000, totalizando cerca de R$ 10 mil em 5 meses.",
    whyItMatters:
      "Evita queda brusca de renda e riscos de superendividamento após demissão.",
    advantages: [
      "Renda temporária garantida.",
      "Solicitação 100% digital.",
    ],
    commonMistakes: [
      "Perder prazo de solicitação (120 dias).",
      "Não atualizar CTPS digital.",
    ],
    faq: [
      { q: "Quem tem direito ao seguro-desemprego?", a: "Trabalhador CLT dispensado sem justa causa, com tempo mínimo de trabalho e sem outra renda de vínculo formal." },
    ],
    relatedTerms: ["clt", "verbas-rescisorias", "fgts"],
    recommendedArticles: [{ title: "Direitos Trabalhistas CLT 2026", url: "/blog/direitos-trabalhistas-clt-brasil-guia-completo" }],
    references: [{ label: "Seguro-Desemprego — Gov.br", url: "https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 85,
  },
  {
    slug: "mei",
    term: "MEI (Microempreendedor Individual)",
    synonyms: ["Microempreendedor Individual", "MEI"],
    keywords: ["mei", "microempreendedor individual", "cnpj mei", "das mei"],
    category: "empreendedorismo",
    sameAs: "https://pt.wikipedia.org/wiki/Microempreendedor_individual",
    shortDefinition:
      "MEI é o Microempreendedor Individual, categoria jurídica criada pela Lei Complementar 128/2008 para formalizar profissionais autônomos com faturamento de até R$ 81 mil por ano em 2026. Oferece CNPJ, alíquota fixa mensal (DAS) e cobertura previdenciária básica.",
    quickSummary: [
      "Limite de faturamento: R$ 81 mil/ano em 2026.",
      "Alíquota fixa mensal (DAS).",
      "Cobertura básica do INSS.",
    ],
    fullDefinition: [
      "MEI é a porta de entrada para o empreendedorismo formal no Brasil. Reúne mais de 15 milhões de pessoas em 2026 e permite emissão de nota fiscal, contratação de 1 empregado e acesso a crédito PJ.",
    ],
    howItWorks: [
      "Cadastro grátis no Portal do Empreendedor.",
      "Escolha de até 3 atividades (CNAEs permitidos).",
      "Pagamento mensal do DAS.",
      "Declaração anual (DASN-SIMEI) até 31 de maio.",
    ],
    practicalExample:
      "Cabeleireira autônoma paga cerca de R$ 75/mês de DAS, emite nota fiscal, contribui para o INSS e tem CNPJ para abrir conta bancária PJ.",
    whyItMatters:
      "Formaliza a atividade, garante contribuição previdenciária e amplia oportunidades de crédito e contratos.",
    advantages: [
      "Formalização barata e simples.",
      "Emissão de nota fiscal.",
      "Cobertura previdenciária.",
      "Acesso a crédito PJ.",
    ],
    disadvantages: [
      "Aposentadoria apenas por 1 salário mínimo.",
      "Limite de faturamento anual.",
      "Lista restrita de atividades.",
    ],
    commonMistakes: [
      "Não entregar DASN-SIMEI (multa e bloqueio).",
      "Extrapolar faturamento sem migrar para ME.",
      "Confundir renda pessoal com faturamento do CNPJ.",
    ],
    faq: [
      { q: "MEI pode ter carteira assinada?", a: "Sim. É possível ser CLT e MEI ao mesmo tempo, desde que a empresa contratante não seja a do CNPJ." },
    ],
    relatedTerms: ["cnpj", "das", "pj", "clt", "simples-nacional"],
    recommendedArticles: [{ title: "MEI 2026: guia completo", url: "/blog/mei-microempreendedor-individual-guia-completo-abrir-cnpj" }],
    references: [{ label: "Portal do Empreendedor", url: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 8,
    popularity: 96,
    featured: true,
  },
  {
    slug: "cnpj",
    term: "CNPJ",
    synonyms: ["Cadastro Nacional da Pessoa Jurídica"],
    keywords: ["cnpj", "cadastro nacional pessoa jurídica", "abrir cnpj"],
    category: "empreendedorismo",
    sameAs: "https://pt.wikipedia.org/wiki/Cadastro_Nacional_da_Pessoa_Jur%C3%ADdica",
    shortDefinition:
      "CNPJ é o Cadastro Nacional da Pessoa Jurídica, número de 14 dígitos emitido pela Receita Federal que identifica empresas e outras entidades jurídicas no Brasil. É obrigatório para atividades formais, emissão de nota fiscal, contratação e abertura de conta bancária empresarial.",
    quickSummary: [
      "Identificação oficial de empresas no Brasil.",
      "14 dígitos + dígito verificador.",
      "Obrigatório para MEI, ME, EIRELI, LTDA e SA.",
    ],
    fullDefinition: [
      "O CNPJ substituiu o antigo CGC em 1998. É o equivalente do CPF para pessoas jurídicas e permite consulta pública sobre situação cadastral, sócios e atividades econômicas (CNAEs).",
    ],
    howItWorks: [
      "Solicitação online no e-CAC da Receita Federal ou no REDESIM.",
      "Vinculado a uma natureza jurídica (MEI, LTDA, etc.).",
      "Situação cadastral pode ser: ativa, suspensa, inapta, baixada.",
    ],
    practicalExample:
      "MEI aberto no Portal do Empreendedor já sai com CNPJ pronto no mesmo dia, permitindo abrir conta PJ e emitir NF.",
    whyItMatters:
      "Sem CNPJ, não há como formalizar contratos empresariais, emitir NF ou acessar linhas de crédito PJ.",
    advantages: [
      "Legalidade e credibilidade.",
      "Acesso a crédito e contratos B2B.",
      "Possibilidade de emissão de NF.",
    ],
    commonMistakes: [
      "Manter CNPJ inativo sem entregar declarações.",
      "Usar CNPJ para atividade não permitida.",
    ],
    faq: [
      { q: "CNPJ tem custo?", a: "Abrir MEI é grátis. Outras naturezas têm custos de registro (Junta Comercial, cartório) que variam de R$ 200 a R$ 1.500." },
    ],
    relatedTerms: ["mei", "pj", "simples-nacional", "das"],
    recommendedArticles: [{ title: "MEI 2026: guia completo", url: "/blog/mei-microempreendedor-individual-guia-completo-abrir-cnpj" }],
    references: [{ label: "CNPJ — Wikipédia", url: "https://pt.wikipedia.org/wiki/Cadastro_Nacional_da_Pessoa_Jur%C3%ADdica" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 4,
    popularity: 88,
  },
  {
    slug: "das",
    term: "DAS (Documento de Arrecadação do Simples Nacional)",
    synonyms: ["DAS-MEI", "Guia DAS"],
    keywords: ["das", "das mei", "boleto das", "pagar das"],
    category: "empreendedorismo",
    shortDefinition:
      "DAS é o Documento de Arrecadação do Simples Nacional, boleto mensal que reúne em uma única guia os tributos devidos pelas empresas optantes do Simples — incluindo o MEI. Para o MEI em 2026, o valor gira em torno de R$ 75 a R$ 80 e substitui INSS, ISS e ICMS.",
    quickSummary: [
      "Boleto único mensal do Simples Nacional.",
      "Vencimento: dia 20 de cada mês.",
      "MEI paga valor fixo; outras empresas, percentual sobre faturamento.",
    ],
    fullDefinition: [
      "O DAS-MEI é essencial para manter o CNPJ ativo. Atraso gera juros e multa e, se prolongado, pode levar à exclusão do Simples.",
    ],
    howItWorks: [
      "Emissão pelo Portal do Simples Nacional ou app MEI.",
      "Pagamento via internet banking, Pix ou lotérica.",
      "Comprovante deve ser guardado por 5 anos.",
    ],
    practicalExample:
      "MEI comércio em 2026: DAS de R$ 76 (5% do salário mínimo + R$ 1 de ICMS).",
    whyItMatters:
      "Pagar em dia mantém contribuição previdenciária, direito a benefícios INSS e CNPJ regular.",
    advantages: [
      "Simplifica arrecadação.",
      "Valor fixo previsível.",
    ],
    commonMistakes: [
      "Deixar acumular meses.",
      "Não conferir vencimento do dia 20.",
    ],
    faq: [
      { q: "O que acontece se eu não pagar o DAS?", a: "Perde direitos previdenciários e pode ter CNPJ suspenso. Regularize com parcelamento no Portal do Simples." },
    ],
    relatedTerms: ["mei", "simples-nacional", "cnpj"],
    recommendedArticles: [{ title: "MEI 2026: guia completo", url: "/blog/mei-microempreendedor-individual-guia-completo-abrir-cnpj" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 4,
    popularity: 80,
  },
  {
    slug: "pj",
    term: "PJ (Pessoa Jurídica)",
    synonyms: ["Prestador PJ", "Contrato PJ"],
    keywords: ["pj", "trabalhar como pj", "clt vs pj", "pjotização"],
    category: "empreendedorismo",
    shortDefinition:
      "PJ significa Pessoa Jurídica e, no contexto de contratação, refere-se ao profissional que presta serviços para empresas por meio de seu próprio CNPJ, emitindo nota fiscal. Diferente do CLT, o PJ não tem vínculo empregatício, mas costuma receber salário líquido maior — em troca de assumir tributos, previdência e direitos por conta própria.",
    quickSummary: [
      "Presta serviço via CNPJ.",
      "Sem carteira, FGTS, 13º ou férias.",
      "Salário líquido geralmente 30–50% maior que CLT.",
    ],
    fullDefinition: [
      "O regime PJ cresceu especialmente em TI, marketing digital e criação. Exige gestão financeira: reserva para férias, INSS, imposto e emergências.",
    ],
    howItWorks: [
      "Abra CNPJ (MEI ou ME).",
      "Assine contrato de prestação de serviços.",
      "Emita NF mensal.",
      "Recolha impostos via DAS ou Simples Nacional.",
    ],
    practicalExample:
      "Desenvolvedor CLT com R$ 8 mil pode virar PJ recebendo R$ 12 mil, mas precisa provisionar R$ 3 mil/mês para férias, 13º, INSS e imposto.",
    whyItMatters:
      "Escolher entre CLT e PJ impacta diretamente renda líquida, aposentadoria e segurança financeira.",
    advantages: [
      "Maior salário líquido.",
      "Flexibilidade de projetos.",
      "Autonomia tributária.",
    ],
    disadvantages: [
      "Sem direitos trabalhistas.",
      "Requer disciplina financeira.",
      "Rescisão sem aviso ou multa.",
    ],
    commonMistakes: [
      "Comparar bruto CLT com bruto PJ sem descontos.",
      "Não guardar reserva para férias e 13º.",
      "Aceitar pejotização em vaga que era claramente CLT.",
    ],
    faq: [
      { q: "PJ vale a pena?", a: "Depende. Faça a conta considerando 30% de reserva sobre o bruto para simular renda comparável ao CLT." },
    ],
    relatedTerms: ["clt", "mei", "cnpj", "pejotizacao"],
    recommendedArticles: [{ title: "MEI 2026: guia completo", url: "/blog/mei-microempreendedor-individual-guia-completo-abrir-cnpj" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 6,
    popularity: 90,
    featured: true,
  },
  {
    slug: "simples-nacional",
    term: "Simples Nacional",
    synonyms: ["Regime Simples", "Simples"],
    keywords: ["simples nacional", "regime simples", "tributação simples"],
    category: "empreendedorismo",
    sameAs: "https://pt.wikipedia.org/wiki/Simples_Nacional",
    shortDefinition:
      "Simples Nacional é o regime tributário unificado para microempresas (ME) e empresas de pequeno porte (EPP), previsto na Lei Complementar 123/2006, que reúne oito tributos federais, estaduais e municipais em uma única guia (DAS). Em 2026, comporta faturamento de até R$ 4,8 milhões por ano.",
    quickSummary: [
      "Regime simplificado para ME e EPP.",
      "Unifica 8 tributos em uma só guia.",
      "Faturamento máximo: R$ 4,8 milhões/ano em 2026.",
    ],
    fullDefinition: [
      "O Simples Nacional é a escolha padrão para pequenas empresas por reduzir burocracia e, em muitos casos, carga tributária. Sua alíquota varia por faixa de receita e atividade (anexos I a V).",
    ],
    howItWorks: [
      "Empresa opta pelo Simples na abertura ou até 31 de janeiro.",
      "Recolhimento mensal via DAS.",
      "Cálculo automático pelo Portal do Simples.",
    ],
    practicalExample:
      "Loja de roupas com faturamento anual de R$ 300 mil (Anexo I) paga alíquota efetiva de cerca de 6,5% em DAS mensal único.",
    whyItMatters:
      "Reduz custo tributário e complexidade, permitindo que o empresário foque no negócio.",
    advantages: [
      "Menos burocracia.",
      "Alíquotas geralmente menores.",
      "Guia única de pagamento.",
    ],
    commonMistakes: [
      "Escolher o Anexo errado.",
      "Não conferir sublimite estadual.",
    ],
    faq: [
      { q: "MEI faz parte do Simples Nacional?", a: "Sim. O MEI é uma modalidade dentro do Simples com regras próprias e alíquota fixa." },
    ],
    relatedTerms: ["mei", "cnpj", "das"],
    recommendedArticles: [{ title: "MEI 2026: guia completo", url: "/blog/mei-microempreendedor-individual-guia-completo-abrir-cnpj" }],
    references: [{ label: "Simples Nacional — Wikipédia", url: "https://pt.wikipedia.org/wiki/Simples_Nacional" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 74,
  },
  {
    slug: "home-office",
    term: "Home Office",
    synonyms: ["Trabalho Remoto", "Teletrabalho"],
    keywords: ["home office", "trabalho remoto", "teletrabalho", "work from home"],
    category: "mercado-trabalho",
    shortDefinition:
      "Home office é a modalidade de trabalho realizada preponderantemente fora das dependências do empregador, com uso de tecnologias de comunicação. No Brasil, é regido pelos artigos 75-A a 75-F da CLT, incluídos pela Lei 14.442/2022, e pode ser em regime integral ou híbrido.",
    quickSummary: [
      "Regido pela Lei 14.442/2022 (teletrabalho).",
      "Pode ser integral ou híbrido.",
      "Empresa deve ressarcir despesas conforme contrato.",
    ],
    fullDefinition: [
      "Após a pandemia, o home office se consolidou. A Lei 14.442/2022 modernizou o teletrabalho na CLT, permitindo modelos híbridos e trabalho por produção sem controle de jornada.",
    ],
    howItWorks: [
      "Contrato deve especificar regime (integral, híbrido, por produção).",
      "Empresa e empregado definem quem paga equipamentos e infraestrutura.",
      "Aditivo contratual em caso de mudança.",
    ],
    practicalExample:
      "Analista contratado como híbrido comparece 2 dias por semana ao escritório e trabalha 3 dias em casa, com reembolso de R$ 200/mês em auxílio home office.",
    whyItMatters:
      "Amplia oportunidades de trabalho e melhora qualidade de vida, mas exige disciplina, ergonomia e clareza contratual.",
    advantages: [
      "Economia de tempo e deslocamento.",
      "Flexibilidade de horários.",
      "Amplia leque de vagas geográficas.",
    ],
    disadvantages: [
      "Isolamento social.",
      "Dificuldade em separar vida pessoal e trabalho.",
      "Custos com internet e energia.",
    ],
    commonMistakes: [
      "Não formalizar mudança de regime em aditivo.",
      "Ignorar cuidados de ergonomia.",
    ],
    faq: [
      { q: "Home office dá direito a vale-transporte?", a: "Não. O benefício se destina ao deslocamento e é substituído por eventual auxílio home office previsto em contrato ou acordo." },
    ],
    relatedTerms: ["clt", "trabalho-hibrido", "nomade-digital"],
    recommendedArticles: [{ title: "Home Office no Brasil em 2026", url: "/blog/home-office-brasil-direitos-clt-vagas-remotas" }],
    references: [{ label: "Lei 14.442/2022", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14442.htm" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 7,
    popularity: 94,
    featured: true,
  },
  {
    slug: "trabalho-hibrido",
    term: "Trabalho Híbrido",
    synonyms: ["Modelo Híbrido", "Hybrid Work"],
    keywords: ["trabalho híbrido", "hibrido", "modelo híbrido"],
    category: "mercado-trabalho",
    shortDefinition:
      "Trabalho híbrido é o modelo em que o profissional alterna dias presenciais no escritório e dias em home office, buscando equilíbrio entre colaboração presencial e flexibilidade do trabalho remoto. Em 2026, tornou-se o padrão em grande parte das empresas de tecnologia e serviços do Brasil.",
    quickSummary: [
      "Alterna presencial e remoto.",
      "Padrão em grandes empresas urbanas.",
      "Reduz custos e melhora retenção.",
    ],
    fullDefinition: [
      "O modelo híbrido combina o melhor dos dois mundos. Estudos mostram maior satisfação, menor rotatividade e produtividade equivalente ou superior ao presencial integral.",
    ],
    howItWorks: [
      "Empresa define política (2x, 3x, flex).",
      "Contrato formaliza regime.",
      "Colaboradores agendam presenças conforme necessidade de equipe.",
    ],
    practicalExample:
      "Empresa adota modelo 3x2: colaboradores estão no escritório terça, quarta e quinta, e trabalham de casa segunda e sexta.",
    whyItMatters:
      "É o modelo preferido por 68% dos trabalhadores brasileiros em pesquisas de 2026 e reduz custos operacionais das empresas.",
    advantages: [
      "Equilíbrio entre colaboração e autonomia.",
      "Retenção de talentos.",
      "Redução de deslocamento.",
    ],
    commonMistakes: [
      "Definir dias sem lógica de equipe.",
      "Cobrar presença sem propósito claro.",
    ],
    faq: [
      { q: "Trabalho híbrido tem regras diferentes na CLT?", a: "Segue a Lei 14.442/2022, com formalização do regime em contrato. Não gera direito a vale-transporte nos dias remotos." },
    ],
    relatedTerms: ["home-office", "clt", "nomade-digital"],
    recommendedArticles: [{ title: "Home Office no Brasil em 2026", url: "/blog/home-office-brasil-direitos-clt-vagas-remotas" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 4,
    popularity: 82,
  },
  {
    slug: "nomade-digital",
    term: "Nômade Digital",
    synonyms: ["Digital Nomad"],
    keywords: ["nômade digital", "digital nomad", "trabalhar viajando"],
    category: "mercado-trabalho",
    shortDefinition:
      "Nômade digital é o profissional que combina trabalho 100% remoto com mobilidade geográfica constante, morando temporariamente em cidades ou países diferentes enquanto mantém sua atividade profissional. Em 2026, mais de 50 países — incluindo o Brasil — já oferecem visto específico para nômades digitais.",
    quickSummary: [
      "Trabalha remotamente enquanto viaja.",
      "Brasil oferece visto de nômade digital desde 2022.",
      "Requer disciplina, boa internet e planejamento fiscal.",
    ],
    fullDefinition: [
      "O estilo de vida nômade digital cresceu com a normalização do trabalho remoto. Requer atenção especial à tributação, previdência e cobertura de saúde internacional.",
    ],
    howItWorks: [
      "Trabalho totalmente remoto com equipe distribuída.",
      "Base rotativa em cidades com boa infraestrutura.",
      "Uso de coworkings, cafés e casas mobiliadas.",
    ],
    practicalExample:
      "Designer PJ passa 3 meses em Florianópolis, 2 meses em Lisboa e 4 meses em Chiang Mai, atendendo clientes brasileiros por videoconferência.",
    whyItMatters:
      "Modelo cresce entre profissionais de tecnologia e criação, ampliando oportunidades de vida e trabalho global.",
    advantages: [
      "Estilo de vida flexível.",
      "Networking internacional.",
    ],
    disadvantages: [
      "Complexidade fiscal.",
      "Isolamento e distância da família.",
    ],
    commonMistakes: [
      "Não regularizar situação tributária no país de residência.",
      "Depender de conexões instáveis.",
    ],
    faq: [
      { q: "Nômade digital paga imposto no Brasil?", a: "Depende do vínculo. Residentes fiscais no Brasil declaram renda global; residentes no exterior seguem regras próprias." },
    ],
    relatedTerms: ["home-office", "pj", "trabalho-hibrido", "visto-de-trabalho"],
    recommendedArticles: [{ title: "Home Office no Brasil em 2026", url: "/blog/home-office-brasil-direitos-clt-vagas-remotas" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 70,
  },
  {
    slug: "inteligencia-artificial",
    term: "Inteligência Artificial",
    synonyms: ["IA", "AI", "Artificial Intelligence"],
    keywords: ["inteligência artificial", "ia", "ai", "chatgpt", "ia generativa"],
    category: "tecnologia-ia",
    sameAs: "https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_artificial",
    shortDefinition:
      "Inteligência Artificial é o ramo da ciência da computação que desenvolve sistemas capazes de realizar tarefas que tradicionalmente exigiam inteligência humana — como interpretar linguagem, reconhecer imagens, tomar decisões e aprender com dados. Em 2026, IA generativa (ChatGPT, Gemini, Claude) já é parte do dia a dia de milhões de profissionais.",
    quickSummary: [
      "Automatiza tarefas cognitivas.",
      "Base de assistentes como ChatGPT e Gemini.",
      "Redefine profissões e habilidades exigidas.",
    ],
    fullDefinition: [
      "A IA generativa é uma subárea que cria conteúdo novo (texto, imagem, código) a partir de padrões aprendidos. Alfabetização em IA se tornou competência essencial em todas as áreas.",
    ],
    howItWorks: [
      "Modelos treinados com grandes volumes de dados.",
      "Respondem a comandos (prompts) do usuário.",
      "Podem ser integrados a fluxos de trabalho e sistemas.",
    ],
    practicalExample:
      "Analista de RH usa ChatGPT para gerar rascunhos de descrição de vaga, economizando 3 horas de trabalho por semana.",
    whyItMatters:
      "Segundo o WEF, 44% das habilidades exigidas nas profissões vão mudar até 2030 devido à IA — e quem não se adaptar perde relevância.",
    advantages: [
      "Aumenta produtividade.",
      "Automatiza tarefas repetitivas.",
      "Libera tempo para trabalho estratégico.",
    ],
    disadvantages: [
      "Riscos éticos e de viés.",
      "Impacto em algumas profissões operacionais.",
    ],
    commonMistakes: [
      "Ignorar a tecnologia por medo.",
      "Confiar em respostas sem verificar.",
    ],
    faq: [
      { q: "IA vai roubar meu emprego?", a: "IA vai automatizar tarefas, não profissões inteiras. Quem usa IA vai substituir quem não usa, mais do que a IA vai substituir humanos." },
    ],
    relatedTerms: ["engenheiro-de-prompt", "automacao", "hard-skills", "soft-skills"],
    recommendedArticles: [{ title: "IA no mercado de trabalho até 2030", url: "/blog/inteligencia-artificial-mercado-trabalho-profissoes-2030" }],
    references: [{ label: "IA — Wikipédia", url: "https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_artificial" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 7,
    popularity: 97,
    featured: true,
  },
  {
    slug: "engenheiro-de-prompt",
    term: "Engenheiro de Prompt",
    synonyms: ["Prompt Engineer", "Prompt Engineering"],
    keywords: ["engenheiro de prompt", "prompt engineer", "prompt engineering"],
    category: "tecnologia-ia",
    shortDefinition:
      "Engenheiro de Prompt é o profissional especializado em criar, testar e otimizar comandos (prompts) para modelos de IA generativa, com o objetivo de obter respostas mais precisas, seguras e alinhadas aos objetivos do negócio. É uma das profissões emergentes de maior crescimento em 2026.",
    quickSummary: [
      "Cria e refina prompts para IA generativa.",
      "Combina domínio de negócio, linguística e tecnologia.",
      "Salários iniciais entre R$ 8 mil e R$ 20 mil.",
    ],
    fullDefinition: [
      "Vai além de 'escrever bons pedidos'. Envolve engenharia sistemática, testes A/B, avaliação de qualidade e integração com pipelines de produção.",
    ],
    howItWorks: [
      "Identifica objetivo do negócio.",
      "Formula prompts com contexto e restrições.",
      "Avalia respostas e itera.",
      "Integra em fluxos automatizados.",
    ],
    practicalExample:
      "Prompt engineer de e-commerce cria templates que geram descrições de produtos em segundos com tom de voz da marca, economizando 400 horas/mês.",
    whyItMatters:
      "Empresas que dominam prompt engineering escalam operações e ganham vantagem competitiva.",
    advantages: [
      "Profissão em alta demanda.",
      "Salários acima da média.",
      "Habilidade transferível entre setores.",
    ],
    commonMistakes: [
      "Não versionar prompts.",
      "Ignorar testes de segurança.",
    ],
    faq: [
      { q: "Preciso ser programador para ser prompt engineer?", a: "Não. Bases de conhecimento em linguagem, lógica e domínio de negócio são tão importantes quanto código." },
    ],
    relatedTerms: ["inteligencia-artificial", "automacao", "hard-skills"],
    recommendedArticles: [{ title: "IA no mercado de trabalho até 2030", url: "/blog/inteligencia-artificial-mercado-trabalho-profissoes-2030" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 78,
  },
  {
    slug: "automacao",
    term: "Automação",
    synonyms: ["Automação de Processos", "RPA"],
    keywords: ["automação", "automacao", "rpa", "automação de processos"],
    category: "tecnologia-ia",
    sameAs: "https://pt.wikipedia.org/wiki/Automa%C3%A7%C3%A3o",
    shortDefinition:
      "Automação é o uso de tecnologia para executar tarefas repetitivas sem intervenção humana constante, incluindo desde robôs industriais até fluxos digitais criados por RPA e IA. No trabalho de escritório, automação de processos reduz custos, erros e libera tempo para atividades estratégicas.",
    quickSummary: [
      "Executa tarefas repetitivas sem intervenção humana.",
      "Aplicada em fábricas, escritórios e atendimento.",
      "RPA e IA generativa são as principais tecnologias em 2026.",
    ],
    fullDefinition: [
      "A automação evoluiu do chão de fábrica para o escritório. Ferramentas de RPA como UiPath e n8n, integradas com IA generativa, permitem automatizar processos ponta a ponta.",
    ],
    howItWorks: [
      "Mapeia processo repetitivo.",
      "Escolhe ferramenta (RPA, script, IA).",
      "Implementa fluxo automatizado.",
      "Monitora e otimiza.",
    ],
    practicalExample:
      "Contabilidade automatiza importação de notas fiscais no ERP, reduzindo 20 horas de trabalho manual por mês.",
    whyItMatters:
      "Empresas que automatizam reduzem custos e ganham escala. Profissionais que dominam automação se tornam indispensáveis.",
    advantages: [
      "Reduz custos operacionais.",
      "Diminui erros.",
      "Libera tempo humano para trabalho estratégico.",
    ],
    disadvantages: [
      "Impacto em vagas operacionais.",
      "Investimento inicial.",
    ],
    commonMistakes: [
      "Automatizar processo ruim (torna o erro mais rápido).",
      "Ignorar governança.",
    ],
    faq: [
      { q: "Automação vai eliminar empregos?", a: "Vai transformar. Vagas operacionais diminuem, mas surgem novas vagas em desenho, manutenção e governança dos fluxos automatizados." },
    ],
    relatedTerms: ["inteligencia-artificial", "engenheiro-de-prompt"],
    recommendedArticles: [{ title: "IA no mercado de trabalho até 2030", url: "/blog/inteligencia-artificial-mercado-trabalho-profissoes-2030" }],
    references: [{ label: "Automação — Wikipédia", url: "https://pt.wikipedia.org/wiki/Automa%C3%A7%C3%A3o" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 72,
  },
  {
    slug: "upskilling",
    term: "Upskilling",
    synonyms: ["Requalificação", "Aprimoramento"],
    keywords: ["upskilling", "requalificação", "aprimoramento profissional"],
    category: "carreira",
    shortDefinition:
      "Upskilling é o processo contínuo de aprimorar competências dentro da mesma área de atuação, mantendo o profissional atualizado com novas ferramentas, metodologias e tecnologias. É complementar ao reskilling (requalificação para outra área) e essencial em um mercado transformado pela IA.",
    quickSummary: [
      "Aprimora competências existentes.",
      "Foco na mesma área de atuação.",
      "Prioridade estratégica de RH em 2026.",
    ],
    fullDefinition: [
      "Enquanto o reskilling prepara para mudança de carreira, o upskilling mantém o profissional relevante em sua área — como um analista contábil aprendendo automação e IA para acelerar fechamento mensal.",
    ],
    howItWorks: [
      "Mapear gaps de competências atuais.",
      "Escolher cursos, certificações e projetos.",
      "Aplicar aprendizados no trabalho real.",
    ],
    practicalExample:
      "Copywriter aprende a usar IA generativa para produzir 3x mais texto sem perder qualidade — upskilling puro dentro da mesma função.",
    whyItMatters:
      "A cada 5 anos, cerca de 40% das habilidades técnicas se tornam obsoletas segundo o WEF.",
    advantages: [
      "Mantém empregabilidade.",
      "Aumenta valor de mercado.",
      "Suporta promoções internas.",
    ],
    commonMistakes: [
      "Estudar sem aplicar.",
      "Colecionar certificados sem foco.",
    ],
    faq: [
      { q: "Diferença entre upskilling e reskilling?", a: "Upskilling melhora a mesma função. Reskilling forma para uma nova função ou área." },
    ],
    relatedTerms: ["reskilling", "soft-skills", "hard-skills"],
    recommendedArticles: [{ title: "IA no mercado de trabalho até 2030", url: "/blog/inteligencia-artificial-mercado-trabalho-profissoes-2030" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 4,
    popularity: 68,
  },
  {
    slug: "reskilling",
    term: "Reskilling",
    synonyms: ["Requalificação Profissional", "Recolocação"],
    keywords: ["reskilling", "requalificação profissional", "mudar de área"],
    category: "carreira",
    shortDefinition:
      "Reskilling é a requalificação profissional para atuação em uma área totalmente diferente da atual, geralmente motivada pela obsolescência da função original, mudança de setor ou nova fase de carreira. É uma das principais respostas ao avanço da IA e automação no mercado de trabalho.",
    quickSummary: [
      "Requalifica para nova área.",
      "Aplicado em transições de carreira.",
      "Programas corporativos crescem no Brasil desde 2023.",
    ],
    fullDefinition: [
      "Reskilling exige investimento em cursos e experiência prática. Empresas que oferecem programas internos de reskilling reduzem rotatividade e retêm conhecimento organizacional.",
    ],
    howItWorks: [
      "Identificar área-alvo e demandas do mercado.",
      "Traçar plano de estudos e projetos práticos.",
      "Buscar experiência via voluntariado, freelas ou mentoria.",
      "Reformular currículo destacando habilidades transferíveis.",
    ],
    practicalExample:
      "Operador de telemarketing passa por bootcamp e migra para carreira em análise de dados, mantendo salário e ganhando estabilidade.",
    whyItMatters:
      "O WEF estima que 1 bilhão de pessoas precisarão de reskilling até 2030 devido à transformação tecnológica.",
    advantages: [
      "Abre novas oportunidades.",
      "Recupera empregabilidade.",
      "Adapta profissional ao mercado atual.",
    ],
    commonMistakes: [
      "Escolher área sem pesquisar demanda.",
      "Focar só em teoria sem projetos práticos.",
    ],
    faq: [
      { q: "Quanto tempo leva um reskilling completo?", a: "De 6 a 24 meses, dependendo da complexidade da nova área e da dedicação semanal." },
    ],
    relatedTerms: ["upskilling", "carreira", "primeiro-emprego"],
    recommendedArticles: [{ title: "IA no mercado de trabalho até 2030", url: "/blog/inteligencia-artificial-mercado-trabalho-profissoes-2030" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 70,
  },
  {
    slug: "visto-de-trabalho",
    term: "Visto de Trabalho",
    synonyms: ["Work Visa", "Visto H1B", "Visto H2B"],
    keywords: ["visto de trabalho", "work visa", "visto h1b", "visto h2b", "trabalhar no exterior"],
    category: "trabalho-exterior",
    sameAs: "https://pt.wikipedia.org/wiki/Visto_(documento)",
    shortDefinition:
      "Visto de trabalho é a autorização oficial emitida por um país estrangeiro que permite ao portador exercer atividade profissional remunerada em seu território, dentro de regras específicas de duração, tipo de atividade e empregador patrocinador. Cada país mantém múltiplas categorias, como H-1B, H-2B, EB-3 e J-1 nos EUA.",
    quickSummary: [
      "Autorização oficial para trabalhar em outro país.",
      "Categorias variam por país e tipo de vaga.",
      "Costuma exigir empregador patrocinador (sponsor).",
    ],
    fullDefinition: [
      "Vistos de trabalho são a via legal para brasileiros atuarem no exterior. Nos EUA, os principais são H-1B (profissionais especializados), H-2B (sazonais), EB-3 (green card) e J-1 (intercâmbio). Europa e Canadá têm equivalentes próprios.",
    ],
    howItWorks: [
      "Empresa estrangeira envia oferta de emprego (offer letter).",
      "Petição enviada à autoridade migratória.",
      "Entrevista no consulado.",
      "Emissão do visto e viagem.",
    ],
    practicalExample:
      "Engenheiro de software brasileiro recebe oferta de empresa americana, passa pelo processo de H-1B com sponsor, aguarda loteria anual e obtém visto para 3 anos, renovável.",
    whyItMatters:
      "Oportunidades internacionais podem multiplicar salários e ampliar experiência profissional.",
    advantages: [
      "Acesso a salários em moeda forte.",
      "Experiência internacional valorizada.",
      "Rede de contatos global.",
    ],
    disadvantages: [
      "Processos longos e caros.",
      "Dependência do empregador.",
    ],
    commonMistakes: [
      "Cair em golpes de agências não licenciadas.",
      "Trabalhar em visto turístico.",
    ],
    faq: [
      { q: "Preciso de agência para tirar visto de trabalho?", a: "Não é obrigatório, mas em vistos como H-2B a agência licenciada agiliza o processo. Sempre verifique credenciais oficiais." },
    ],
    relatedTerms: ["nomade-digital", "trabalho-exterior", "linkedin"],
    recommendedArticles: [{ title: "Trabalhar nos Estados Unidos: guia de vistos e vagas", url: "/blog/trabalhar-nos-estados-unidos-guia-vistos-vagas" }],
    references: [{ label: "SeasonalJobs (Dept. of Labor)", url: "https://seasonaljobs.dol.gov/" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 7,
    popularity: 88,
    featured: true,
  },
  {
    slug: "concurso-publico",
    term: "Concurso Público",
    synonyms: ["Concurso", "CNU"],
    keywords: ["concurso público", "concurso", "cnu", "servidor público"],
    category: "carreira",
    shortDefinition:
      "Concurso público é o processo seletivo oficial previsto pela Constituição Federal brasileira para o ingresso em cargos efetivos da administração pública. Garante isonomia, meritocracia e estabilidade após 3 anos de estágio probatório, sendo uma das principais aspirações profissionais de milhões de brasileiros.",
    quickSummary: [
      "Ingresso legal em cargos públicos efetivos.",
      "Etapas: prova objetiva, discursiva, títulos e curso de formação (quando cabível).",
      "CNU e concursos federais oferecem salários iniciais acima de R$ 8 mil.",
    ],
    fullDefinition: [
      "O concurso é obrigatório para todos os cargos públicos efetivos, conforme o art. 37, II, da CF. As bancas mais conhecidas são CESPE/Cebraspe, FGV, FCC, VUNESP e Cesgranrio.",
    ],
    howItWorks: [
      "Publicação de edital.",
      "Inscrição do candidato.",
      "Prova objetiva (múltipla escolha).",
      "Provas discursivas ou títulos, quando previsto.",
      "Aprovação e nomeação conforme vagas.",
    ],
    practicalExample:
      "Concurso do Banco do Brasil 2024/2025 teve mais de 1 milhão de inscritos para 6.000 vagas de Escriturário, com salário inicial de R$ 3,6 mil e benefícios.",
    whyItMatters:
      "Concurso é uma das principais rotas para estabilidade e salários competitivos no Brasil, especialmente em regiões com baixa oferta privada.",
    advantages: [
      "Estabilidade após estágio probatório.",
      "Salários e benefícios acima do setor privado em muitas carreiras.",
      "Progressão e aposentadoria integral em algumas carreiras.",
    ],
    disadvantages: [
      "Concorrência alta.",
      "Preparação exige meses ou anos.",
    ],
    commonMistakes: [
      "Estudar sem plano ou cronograma.",
      "Focar só em teoria e não fazer questões.",
    ],
    faq: [
      { q: "Concurso público paga bem?", a: "Depende da carreira. Auditor da Receita, Delegado, Diplomata e Juiz Federal ultrapassam R$ 30 mil iniciais." },
    ],
    relatedTerms: ["clt", "carreira", "trainee"],
    recommendedArticles: [{ title: "Concurso Público 2026: guia completo", url: "/blog/concurso-publico-brasil-guia-completo-preparacao" }],
    references: [{ label: "Concursos.gov.br", url: "https://www.gov.br/gestao/pt-br/assuntos/concursos" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 7,
    popularity: 89,
    featured: true,
  },
  {
    slug: "palavras-chave",
    term: "Palavras-chave (no currículo)",
    synonyms: ["Keywords", "Termos-chave"],
    keywords: ["palavras-chave currículo", "keywords ats", "termos vaga"],
    category: "ats-recrutamento",
    shortDefinition:
      "Palavras-chave são os termos técnicos, ferramentas, cargos e competências extraídos diretamente da descrição da vaga e inseridos estrategicamente no currículo. São o principal critério usado pelos sistemas ATS para ranquear candidatos e definir quem chega ao recrutador humano.",
    quickSummary: [
      "Extraídas da descrição da vaga.",
      "Critério central de ranqueamento no ATS.",
      "Devem aparecer no contexto, sem forçar (keyword stuffing).",
    ],
    fullDefinition: [
      "O ATS busca correspondência literal. Um candidato com 'SQL' no currículo é ranqueado acima de quem escreveu apenas 'banco de dados' — mesmo dominando SQL. Por isso, alinhar termos ao anúncio é essencial.",
    ],
    howItWorks: [
      "Analise 3 a 5 vagas do mesmo cargo.",
      "Liste termos que se repetem.",
      "Incorpore em seções apropriadas (resumo, experiência, skills).",
    ],
    practicalExample:
      "Vaga pede 'gestão de tráfego pago, Google Ads, Facebook Ads e otimização de campanhas'. O currículo deve conter esses termos literais.",
    whyItMatters:
      "Currículos otimizados por palavras-chave têm 3x mais chances de passar pelo ATS.",
    advantages: [
      "Aumenta match no ATS.",
      "Melhora clareza para o recrutador.",
    ],
    commonMistakes: [
      "Forçar termos sem contexto (keyword stuffing).",
      "Ignorar variações e sinônimos.",
    ],
    faq: [
      { q: "Quantas palavras-chave devo usar?", a: "Distribua entre 10 e 20 termos ao longo do currículo, de forma natural e no contexto certo." },
    ],
    relatedTerms: ["ats", "curriculo", "objetivo-profissional"],
    recommendedArticles: [{ title: "Como Preparar Seu Currículo para Sistemas ATS", url: "/blog/preparar-curriculo-sistemas-ats" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 4,
    popularity: 84,
  },
  {
    slug: "curriculo-lattes",
    term: "Currículo Lattes",
    synonyms: ["Lattes", "Plataforma Lattes"],
    keywords: ["currículo lattes", "lattes", "plataforma lattes cnpq"],
    category: "curriculo",
    shortDefinition:
      "Currículo Lattes é o padrão de currículo acadêmico da Plataforma Lattes, mantida pelo CNPq, obrigatório no Brasil para pesquisadores, estudantes de pós-graduação e docentes. Reúne formação, produção científica, atuação profissional e projetos de pesquisa em uma base pública e padronizada.",
    quickSummary: [
      "Currículo acadêmico oficial do Brasil.",
      "Obrigatório para pesquisa e pós-graduação.",
      "Vinculado ao CNPq.",
    ],
    fullDefinition: [
      "Diferente do currículo tradicional, o Lattes tem estrutura fixa, exportação em PDF/RTF e é consultável por qualquer pessoa. É a principal fonte de dados para avaliação de bolsas Capes/CNPq e ingresso em programas de pós-graduação.",
    ],
    howItWorks: [
      "Cadastro na Plataforma Lattes (CNPq).",
      "Preenchimento por áreas (formação, produção, atuação).",
      "Atualização periódica recomendada.",
      "Exportação em PDF ou RTF.",
    ],
    practicalExample:
      "Doutoranda em Educação atualiza artigos publicados e apresentações em congressos para submeter proposta a edital de bolsa Capes.",
    whyItMatters:
      "Sem Lattes atualizado, o pesquisador brasileiro é praticamente invisível para programas de pós-graduação e agências de fomento.",
    advantages: [
      "Padroniza informações acadêmicas.",
      "Facilita avaliação por bancas.",
      "Base pública e verificável.",
    ],
    commonMistakes: [
      "Deixar informações desatualizadas.",
      "Ignorar seções relevantes.",
    ],
    faq: [
      { q: "Currículo Lattes substitui o currículo tradicional?", a: "Não. É complementar. Para vagas corporativas, use currículo tradicional; para academia, Lattes." },
    ],
    relatedTerms: ["curriculo", "objetivo-profissional"],
    recommendedArticles: [],
    references: [{ label: "Plataforma Lattes — CNPq", url: "https://lattes.cnpq.br/" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 4,
    popularity: 70,
  },
  {
    slug: "gupy",
    term: "Gupy",
    synonyms: ["Plataforma Gupy", "Gupy ATS"],
    keywords: ["gupy", "plataforma gupy", "gupy ats", "vagas gupy"],
    category: "ats-recrutamento",
    shortDefinition:
      "Gupy é a maior plataforma brasileira de recrutamento e ATS, usada por milhares de empresas — incluindo Ambev, Magazine Luiza e Nubank — para receber, filtrar e organizar candidaturas. Usa inteligência artificial para ranquear candidatos com base em aderência à descrição da vaga.",
    quickSummary: [
      "Principal ATS do Brasil.",
      "Usa IA para ranqueamento.",
      "Testes comportamentais e técnicos integrados.",
    ],
    fullDefinition: [
      "Além de armazenar candidatos, Gupy oferece testes de fit cultural, redação, lógica e provas técnicas. Perfis com maior aderência sobem para o topo do ranking do recrutador.",
    ],
    howItWorks: [
      "Candidato cria conta única para todas as vagas Gupy.",
      "Preenche perfil detalhado.",
      "Se candidata a vagas de empresas parceiras.",
      "Faz testes exigidos pela vaga.",
    ],
    practicalExample:
      "Ao se candidatar a uma vaga no iFood via Gupy, o candidato preenche o perfil uma vez e ele passa a ser considerado automaticamente em vagas compatíveis de outras empresas.",
    whyItMatters:
      "Otimizar o perfil Gupy amplia visibilidade em milhares de vagas simultaneamente.",
    advantages: [
      "Uma conta para milhares de vagas.",
      "Feedback em algumas fases do processo.",
    ],
    commonMistakes: [
      "Perfil incompleto ou desatualizado.",
      "Ignorar palavras-chave da vaga no cadastro.",
    ],
    faq: [
      { q: "Preciso pagar para usar Gupy?", a: "Não. Para candidatos é 100% gratuito. Quem paga são as empresas contratantes." },
    ],
    relatedTerms: ["ats", "recrutamento", "palavras-chave"],
    recommendedArticles: [{ title: "Como Preparar Seu Currículo para Sistemas ATS", url: "/blog/preparar-curriculo-sistemas-ats" }],
    references: [{ label: "Gupy Oficial", url: "https://www.gupy.io/" }],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 4,
    popularity: 80,
  },
  {
    slug: "screening",
    term: "Screening (Triagem)",
    synonyms: ["Triagem", "Pré-triagem", "Resume Screening"],
    keywords: ["screening", "triagem currículo", "resume screening"],
    category: "ats-recrutamento",
    shortDefinition:
      "Screening, ou triagem, é a primeira fase do processo seletivo, na qual currículos são filtrados por critérios objetivos — como palavras-chave, formação, tempo de experiência e localização. Em 2026, essa etapa é dominada por sistemas ATS com apoio de IA generativa, reduzindo horas de análise manual.",
    quickSummary: [
      "Primeira fase de filtragem.",
      "Feita por ATS e IA em grandes empresas.",
      "Elimina até 90% dos candidatos antes do RH humano.",
    ],
    fullDefinition: [
      "Screening pode ser 100% automático (ATS) ou combinado com uma segunda camada humana (RH). Currículos mal formatados ou sem palavras-chave são cortados sem chegar a ninguém.",
    ],
    howItWorks: [
      "ATS extrai texto do currículo.",
      "Compara com descrição da vaga.",
      "Ranqueia por aderência.",
      "RH revisa top rankeados.",
    ],
    practicalExample:
      "Vaga com 500 candidatos: ATS filtra 100 → RH lê 50 → 20 vão para entrevista.",
    whyItMatters:
      "Passar pelo screening é a maior barreira em vagas concorridas.",
    advantages: [
      "Reduz tempo de contratação.",
      "Padroniza critérios iniciais.",
    ],
    commonMistakes: [
      "Currículo mal formatado.",
      "Palavras-chave ausentes.",
    ],
    faq: [
      { q: "Como saber se passei no screening?", a: "Grandes plataformas mostram status ('em análise', 'em processo'). Sistemas antigos podem não notificar." },
    ],
    relatedTerms: ["ats", "gupy", "palavras-chave", "recrutamento"],
    recommendedArticles: [{ title: "Como Preparar Seu Currículo para Sistemas ATS", url: "/blog/preparar-curriculo-sistemas-ats" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 4,
    popularity: 66,
  },
  {
    slug: "pejotizacao",
    term: "Pejotização",
    synonyms: ["Contratação PJ Fraudulenta"],
    keywords: ["pejotização", "pejotizacao", "clt disfarçada de pj"],
    category: "legislacao",
    shortDefinition:
      "Pejotização é a prática de contratar como PJ (via CNPJ) um trabalhador cuja relação, na prática, tem todas as características de vínculo CLT — subordinação, habitualidade, pessoalidade e onerosidade. É considerada fraude trabalhista e pode ser reconhecida como vínculo empregatício pela Justiça do Trabalho.",
    quickSummary: [
      "PJ fraudulento com características de CLT.",
      "Considerado fraude pelo TST.",
      "Justiça pode reconhecer vínculo e obrigar pagamentos retroativos.",
    ],
    fullDefinition: [
      "A pejotização priva o trabalhador de FGTS, 13º, férias e proteção social. Empresas usam o modelo para reduzir custos, mas correm risco de passivo trabalhista alto se questionadas na Justiça.",
    ],
    howItWorks: [
      "Empresa exige abertura de CNPJ como condição de contratação.",
      "Trabalhador emite NF mensal.",
      "Se comprovada subordinação, Justiça pode converter em CLT.",
    ],
    practicalExample:
      "Desenvolvedor contratado como PJ, cumpre horário fixo, usa e-mail corporativo, tem chefe direto e trabalha exclusivamente para a empresa. Configura pejotização.",
    whyItMatters:
      "Trabalhador pejotizado pode buscar reconhecimento judicial de vínculo e receber verbas trabalhistas retroativas.",
    advantages: [],
    disadvantages: [
      "Perda de direitos trabalhistas.",
      "Insegurança jurídica.",
      "Risco de auditoria à empresa.",
    ],
    commonMistakes: [
      "Aceitar pejotização por desespero.",
      "Não guardar provas da subordinação (mensagens, e-mails).",
    ],
    faq: [
      { q: "Todo contrato PJ é pejotização?", a: "Não. PJ é legítimo quando há autonomia, múltiplos clientes e ausência de subordinação. Pejotização é o PJ que disfarça relação CLT." },
    ],
    relatedTerms: ["pj", "clt", "verbas-rescisorias"],
    recommendedArticles: [{ title: "Direitos Trabalhistas CLT 2026", url: "/blog/direitos-trabalhistas-clt-brasil-guia-completo" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 5,
    popularity: 76,
  },
  {
    slug: "salario-emocional",
    term: "Salário Emocional",
    synonyms: ["Benefícios Emocionais", "Employee Experience"],
    keywords: ["salário emocional", "benefícios emocionais", "experiência do colaborador"],
    category: "mercado-trabalho",
    shortDefinition:
      "Salário emocional é o conjunto de benefícios não financeiros — como flexibilidade, propósito, autonomia, reconhecimento, plano de carreira e ambiente saudável — que uma empresa oferece para atrair e reter talentos. Em 2026, é um dos principais critérios de escolha dos profissionais brasileiros.",
    quickSummary: [
      "Benefícios não monetários.",
      "Flexibilidade e propósito no topo da lista.",
      "Determinante em retenção de talentos.",
    ],
    fullDefinition: [
      "Estudos da FIA mostram que 70% dos profissionais brasileiros trocariam de emprego por melhor qualidade de vida, mesmo com salário igual.",
    ],
    howItWorks: [
      "Empresa mapeia expectativas dos colaboradores.",
      "Oferece pacote de benefícios não financeiros.",
      "Mede impacto em engajamento e turnover.",
    ],
    practicalExample:
      "Empresa oferece 4 dias de trabalho semanal e horários flexíveis, aumentando retenção em 40% mesmo sem reajustar salários.",
    whyItMatters:
      "Empresas competitivas em salário emocional retêm talentos que não seriam retidos apenas por dinheiro.",
    advantages: [
      "Melhora bem-estar.",
      "Reduz turnover.",
      "Atrai talentos jovens e sêniores.",
    ],
    commonMistakes: [
      "Confundir salário emocional com benefícios triviais (frutas, ping-pong).",
      "Não medir impacto real.",
    ],
    faq: [
      { q: "Salário emocional substitui aumento?", a: "Não. É complementar. Sem base salarial justa, salário emocional não segura talentos." },
    ],
    relatedTerms: ["home-office", "trabalho-hibrido", "networking"],
    recommendedArticles: [],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 4,
    popularity: 64,
  },
  {
    slug: "negociacao-salarial",
    term: "Negociação Salarial",
    synonyms: ["Pretensão Salarial", "Negociação de Oferta"],
    keywords: ["negociação salarial", "pretensão salarial", "negociar salário"],
    category: "processo-seletivo",
    shortDefinition:
      "Negociação salarial é o processo em que candidato e empresa acordam o valor da remuneração e o pacote de benefícios de uma vaga. Envolve pesquisa de mercado, definição de pretensão realista, contraproposta e negociação de itens além do salário — como bônus, plano de carreira, home office e PLR.",
    quickSummary: [
      "Combina pesquisa de mercado e defesa de valor.",
      "Inclui salário base, bônus, benefícios e evolução.",
      "É esperada pelos recrutadores — não negociar prejudica.",
    ],
    fullDefinition: [
      "Uma boa negociação começa antes da entrevista, com pesquisa de faixa salarial em plataformas como Glassdoor, Vagas.com e LoveMondays. Durante o processo, apresenta-se pretensão com faixa e base em pesquisa.",
    ],
    howItWorks: [
      "Pesquise faixa salarial para o cargo/senioridade/região.",
      "Defina piso, alvo e teto.",
      "Apresente pretensão em faixa (não valor fixo).",
      "Contraproponha considerando benefícios e evolução.",
    ],
    practicalExample:
      "Analista sênior pesquisa faixa entre R$ 8 e R$ 12 mil, apresenta pretensão de R$ 10 a R$ 12 mil e negocia contra-proposta que inclui R$ 11 mil + PLR e revisão em 6 meses.",
    whyItMatters:
      "Salário inicial define a base para reajustes e para próximas propostas na carreira.",
    advantages: [
      "Aumenta remuneração inicial.",
      "Estabelece percepção de valor.",
    ],
    commonMistakes: [
      "Aceitar 1ª oferta sem contraproposta.",
      "Pedir valor sem pesquisa.",
      "Negociar apenas o salário base.",
    ],
    faq: [
      { q: "Devo dizer meu salário atual na entrevista?", a: "Não é obrigatório. Prefira falar em pretensão futura, evitando ancorar a proposta no passado." },
    ],
    relatedTerms: ["entrevista", "salario-emocional", "clt", "pj"],
    recommendedArticles: [{ title: "Como Negociar Salário em Entrevista de Emprego", url: "/blog/como-negociar-salario-entrevista" }],
    references: [],
    datePublished: "2026-04-15",
    dateUpdated: "2026-04-15",
    readingTime: 6,
    popularity: 88,
    featured: true,
  },
];

// ============================================================================
// HELPERS DE CONSULTA
// ============================================================================

export const totalTerms = glossaryTerms.length;

export const getTermBySlug = (slug: string): GlossaryTerm | undefined =>
  glossaryTerms.find((t) => t.slug === slug);

export const getFeaturedTerms = (limit = 6): GlossaryTerm[] =>
  glossaryTerms.filter((t) => t.featured).slice(0, limit);

export const getMostSearchedTerms = (limit = 8): GlossaryTerm[] =>
  [...glossaryTerms].sort((a, b) => b.popularity - a.popularity).slice(0, limit);

export const getRecentTerms = (limit = 6): GlossaryTerm[] =>
  [...glossaryTerms]
    .sort((a, b) => (b.dateUpdated || "").localeCompare(a.dateUpdated || ""))
    .slice(0, limit);

export const getTermsByCategory = (cat: GlossaryCategory): GlossaryTerm[] =>
  glossaryTerms.filter((t) => t.category === cat);

export const getRelatedTerms = (slug: string, limit = 6): GlossaryTerm[] => {
  const term = getTermBySlug(slug);
  if (!term) return [];
  const explicit = term.relatedTerms
    .map((s) => getTermBySlug(s))
    .filter(Boolean) as GlossaryTerm[];
  if (explicit.length >= limit) return explicit.slice(0, limit);
  const sameCategory = glossaryTerms
    .filter((t) => t.slug !== slug && t.category === term.category && !explicit.find((e) => e.slug === t.slug))
    .slice(0, limit - explicit.length);
  return [...explicit, ...sameCategory];
};

export const getPrevNextTerms = (slug: string): { prev?: GlossaryTerm; next?: GlossaryTerm } => {
  const sorted = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term, "pt-BR"));
  const idx = sorted.findIndex((t) => t.slug === slug);
  return {
    prev: idx > 0 ? sorted[idx - 1] : undefined,
    next: idx >= 0 && idx < sorted.length - 1 ? sorted[idx + 1] : undefined,
  };
};

/** Índice A–Z com contagem por letra */
export const getAlphabetIndex = (): { letter: string; terms: GlossaryTerm[] }[] => {
  const map = new Map<string, GlossaryTerm[]>();
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  alphabet.forEach((l) => map.set(l, []));
  for (const t of glossaryTerms) {
    const raw = (t.term.charAt(0) || "#").toUpperCase();
    // Normalize accents
    const normalized = raw.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const letter = /[A-Z]/.test(normalized) ? normalized : "#";
    if (!map.has(letter)) map.set(letter, []);
    map.get(letter)!.push(t);
  }
  // Sort each bucket
  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([letter, terms]) => ({
      letter,
      terms: terms.sort((a, b) => a.term.localeCompare(b.term, "pt-BR")),
    }));
};

/** Busca instantânea por termo, sinônimo ou palavra-chave */
export const searchTerms = (query: string): GlossaryTerm[] => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return glossaryTerms.filter((t) => {
    const haystack = [t.term, ...t.synonyms, ...t.keywords, t.shortDefinition]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
};

/** URL canônica de um verbete */
export const glossaryTermUrl = (slug: string) => `/glossario/o-que-e-${slug}`;
