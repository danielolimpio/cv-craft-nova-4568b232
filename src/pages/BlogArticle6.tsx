import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Lightbulb, CheckCircle2, XCircle, AlertTriangle, TrendingUp, Users, Award, Briefcase, GraduationCap, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import AuthorBio from "@/components/AuthorBio";
import danielPhoto from "@/assets/daniel-olimpio.jpg";
import { generateArticleSchema, generateBreadcrumbSchema, articleEntities } from "@/lib/schema";
import RelatedArticles from "@/components/RelatedArticles";

const BlogArticle6 = () => {
  const articleUrl = "/blog/objetivo-profissional-curriculo";
  const articleSchema = generateArticleSchema({
    title: "Objetivo Profissional no Currículo: Exemplos Práticos",
    description: "Não sabe o que escrever no objetivo? Veja 15 exemplos prontos por área e aprenda a escrever um objetivo que chama atenção.",
    image: "/blog/objetivo-profissional-curriculo.jpg",
    datePublished: "2025-11-23",
    dateModified: "2025-11-23",
    author: { name: "Daniel Olimpio", url: "/sobre" },
    url: articleUrl,
    about: articleEntities[articleUrl],
    relatedLinks: ["/blog/destaque-habilidades-estrategia-impacto", "/blog/10-erros-comuns-curriculos", "/blog/como-criar-curriculo-profissional-2026"]
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog", url: "/blog" },
    { name: "Objetivo Profissional no Currículo", url: articleUrl }
  ]);
  return (
    <>
      <Helmet>
        <title>Objetivo Profissional no Currículo — 15 Exemplos Prontos</title>
        <meta name="description" content="Não sabe o que escrever no objetivo? Veja 15 exemplos prontos por área (TI, saúde, administração) e aprenda a escrever um objetivo que chama atenção." />
        <meta property="og:title" content="Objetivo Profissional no Currículo: Exemplos Práticos" />
        <meta property="og:description" content="Objetivo ainda é relevante? Veja modelos reais por área e aprenda a escrever um focado, realista e impactante." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://fazercurriculo.com/blog/objetivo-profissional-curriculo" />
        <meta property="og:image" content="https://fazercurriculo.com/blog/objetivo-profissional-curriculo.jpg" />
        <link rel="canonical" href="https://fazercurriculo.com/blog/objetivo-profissional-curriculo" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Main Article */}
              <article className="flex-1 max-w-4xl">
                {/* Back Button & Header */}
            <div className="mb-8">
              <Link to="/blog">
                <Button variant="ghost" className="mb-6 -ml-4">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para o Blog
                </Button>
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Objetivo Profissional no Currículo: Exemplos Práticos
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <time dateTime="2025-11-23">23 de Novembro, 2025</time>
                <span>•</span>
                <span>15 min de leitura</span>
              </div>
            </div>

            {/* Featured Image */}
            <img 
              src="/blog/objetivo-profissional-curriculo.jpg" 
              alt="Objetivo Profissional no Currículo" 
              className="w-full h-auto rounded-lg shadow-lg mb-12"
            />

            {/* Author Info - Start */}
            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
              <img 
                src={danielPhoto} 
                alt="Daniel Olimpio" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Daniel Olimpio</p>
              </div>
            </div>

            {/* Introdução */}
            <div className="prose prose-lg max-w-none mb-12">
              <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-lg mb-8">
                <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Por que seu objetivo profissional pode estar sabotando sua carreira — sem você perceber</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Imagine o seguinte cenário: você envia seu currículo para uma vaga de analista de dados sênior. Ele é revisado em menos de sete segundos — esse é o tempo médio que um recrutador dedica a cada documento, segundo estudo da Ladders, em parceria com a Northeastern University. E nos primeiros três segundos, um único elemento define se ele continua lendo ou passa para o próximo: o objetivo profissional.
                  </p>
                </div>
              </div>

              <p className="leading-relaxed mb-6">
                Sim, mesmo em 2025, com tantas discussões sobre a "morte do objetivo no currículo", ele continua sendo um dos poucos momentos em que você tem a chance de falar diretamente com o leitor. Não apenas informar, mas conectar. E é aí que muitos erram — não por falta de esforço, mas por falta de clareza sobre o que esse campo realmente deve fazer.
              </p>

              <p className="leading-relaxed mb-6">
                <strong>O objetivo profissional não está obsoleto. Está mal usado.</strong>
              </p>

              <p className="leading-relaxed mb-6">
                Quando genérico ("Busco uma oportunidade para crescer profissionalmente"), vago ("Gostaria de contribuir com minha experiência") ou excessivamente ambicioso ("Tornar-me CEO em 5 anos"), ele vira ruído. Mas quando bem escrito — específico, alinhado à vaga, honesto sobre seus próximos passos —, vira um gancho narrativo poderoso. Um convite para o recrutador pensar: "Ah, essa pessoa entende exatamente onde quer chegar — e talvez seja justamente aqui."
              </p>

              <p className="leading-relaxed mb-8">
                Neste artigo, vamos desconstruir mitos, apresentar exemplos reais de objetivos profissionais por área (TI, administração, saúde), mostrar como adaptar sua redação conforme estágio de carreira (júnior, pleno, sênior), e ensinar uma metodologia prática — com checklist incluído — para criar um objetivo que soe humano, crível e estrategicamente eficaz.
              </p>

              <div className="bg-accent/50 p-6 rounded-lg mb-8 border-l-4 border-primary">
                <p className="text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary inline mr-2" />
                  <strong>Antes de continuar:</strong> quer saber se seu perfil comportamental está alinhado com seus objetivos de carreira? Faça nosso Teste de Alinhamento de Carreira e receba um relatório personalizado com insights sobre suas forças naturais e áreas de ajuste.
                </p>
              </div>
            </div>

            {/* O que é um objetivo profissional */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-primary" />
                O que é (e o que não é) um objetivo profissional no currículo?
              </h2>

              <p className="leading-relaxed mb-6">
                Muitos confundem "objetivo profissional" com "resumo profissional", "perfil", ou até mesmo "missão de vida". Vamos esclarecer:
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <p className="leading-relaxed mb-0">
                  <strong>Objetivo profissional</strong> é uma declaração breve (1 a 2 frases) que descreve o que você busca <em>agora</em> — ou seja, o próximo passo lógico e realista na sua trajetória, em relação àquela vaga específica.
                </p>
              </div>

              <p className="leading-relaxed mb-6">
                <strong>Resumo profissional</strong> (ou professional summary) é mais comum para profissionais com experiência consolidada. Foca no que você já fez e no valor que pode entregar imediatamente.
              </p>

              <p className="leading-relaxed mb-4">
                O objetivo é especialmente útil para:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Profissionais que estão mudando de área</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Jovens que acabaram de se formar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Quem retorna ao mercado após uma pausa</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Candidatos a programas de trainee ou estágio</span>
                </li>
              </ul>

              <div className="bg-accent/50 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-sm mb-0">
                  <strong>💡 Dica prática:</strong> Se você tem menos de 5 anos de experiência na área da vaga, um objetivo profissional bem construído é sua melhor aposta. Acima disso, analise se um resumo breve — com foco em resultados — não seria mais estratégico.
                </p>
              </div>
            </div>

            {/* Por que voltou a ganhar força */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                Por que o objetivo profissional voltou a ganhar força em 2025?
              </h2>

              <p className="leading-relaxed mb-6">
                Parece contraintuitivo: com a popularização de ATS (Applicant Tracking Systems) e currículos cada vez mais focados em palavras-chave, por que um texto subjetivo como o objetivo voltaria ao centro das atenções?
              </p>

              <p className="leading-relaxed mb-4">
                A resposta está em duas tendências recentes:
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">A exaustão com currículos genéricos</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Recrutadores estão cansados de ler perfis que soam como cópias uns dos outros. Um objetivo autêntico — que mostre autoconhecimento e intenção clara — se destaca como um farol em meio ao ruído.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">A valorização do fit cultural e da intenção de longo prazo</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Estudos da Harvard Business Review mostram que empresas estão priorizando candidatos cujos planos pessoais de desenvolvimento estejam alinhados com os caminhos reais de crescimento dentro da organização. Um bom objetivo revela isso de forma econômica.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <p className="text-sm mb-0">
                  <strong>📌 Dado relevante:</strong> Uma pesquisa da Catho, divulgada em agosto de 2025, apontou que 73% dos recrutadores consideram o objetivo profissional "relevante" ou "muito relevante" ao avaliar candidatos com até 3 anos de experiência — especialmente em setores como saúde e educação.
                </p>
              </div>
            </div>

            {/* Fórmula REAL */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Como escrever um objetivo profissional eficaz: a fórmula REAL
              </h2>

              <p className="leading-relaxed mb-6">
                Esqueça as velhas fórmulas do tipo "Busco uma empresa que me permita crescer...". Elas centram o discurso em você, não no valor que você entrega.
              </p>

              <p className="leading-relaxed mb-4">
                A abordagem que funciona hoje é a que chamamos de <strong>fórmula REAL</strong>:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-bold text-lg mb-2">R — Relevância</h3>
                  <p className="text-sm text-muted-foreground">conecte-se à vaga</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-bold text-lg mb-2">E — Especificidade</h3>
                  <p className="text-sm text-muted-foreground">nomeie cargo, setor ou habilidade-chave</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-bold text-lg mb-2">A — Alinhamento</h3>
                  <p className="text-sm text-muted-foreground">mostre coerência com sua trajetória</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-bold text-lg mb-2">L — Limite</h3>
                  <p className="text-sm text-muted-foreground">seja realista sobre o próximo passo</p>
                </div>
              </div>

              <p className="leading-relaxed mb-4">
                Vamos ilustrar com dois exemplos — um fraco, um forte:
              </p>

              <div className="space-y-6 mb-8">
                <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-start gap-3 mb-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <h3 className="font-bold text-lg">Versão genérica (e ineficaz):</h3>
                  </div>
                  <p className="text-muted-foreground italic">
                    "Busco uma oportunidade para aplicar meus conhecimentos e contribuir com o crescimento da empresa, enquanto desenvolvo minhas competências."
                  </p>
                </div>

                <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <h3 className="font-bold text-lg">Versão REAL (e impactante):</h3>
                  </div>
                  <p className="text-muted-foreground italic">
                    "Formado em Enfermagem com estágio em UTI pediátrica, busco minha primeira posição como Enfermeiro Assistencial em hospital universitário, onde possa aplicar minha formação em suporte avançado à vida e contribuir com equipes multidisciplinares em ambiente de alta complexidade."
                  </p>
                </div>
              </div>

              <p className="leading-relaxed mb-4">
                Note a diferença:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>A segunda versão nomeia o cargo desejado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Situa a experiência prévia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Menciona uma habilidade técnica relevante</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>E sugere o ambiente ideal — tudo em 22 palavras</span>
                </li>
              </ul>

              <p className="leading-relaxed">
                Isso não é "marketing". É clareza estratégica.
              </p>
            </div>

            {/* Exemplos por área - TI */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Objetivo profissional por área: modelos reais e adaptáveis
              </h2>

              <p className="leading-relaxed mb-8">
                Abaixo, trazemos exemplos práticos — criados com base em vagas reais publicadas em 2025 — para três áreas de alta demanda no Brasil: Tecnologia da Informação, Administração e Saúde. Em cada caso, incluímos variações para diferentes estágios de carreira.
              </p>

              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="w-7 h-7 text-primary" />
                Tecnologia da Informação (TI)
              </h3>

              <p className="leading-relaxed mb-6">
                O mercado de TI é dinâmico, com múltiplos caminhos: infraestrutura, desenvolvimento, segurança, dados, produto etc. O objetivo precisa refletir essa especificidade.
              </p>

              <div className="space-y-6 mb-8">
                <div className="p-6 bg-muted/30 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg">Exemplo para Júnior (recém-formado em Ciência da Computação)</h4>
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Desenvolvedor front-end com experiência em projetos acadêmicos usando React e TypeScript, busco minha primeira posição em startup de tecnologia educacional, onde possa contribuir com interfaces acessíveis e aprender com equipes ágeis."
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2"><strong>🔹 Por que funciona?</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Mostra linguagens reais (não só "conhecimento em JavaScript")</li>
                      <li>• Especifica o tipo de empresa (startup de tecnologia educacional — nicho em alta)</li>
                      <li>• Demonstra valor ("interfaces acessíveis") e postura de aprendizagem</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-muted/30 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg">Exemplo para Pleno (3 anos de experiência, migrando de suporte para DevOps)</h4>
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Analista de Suporte N3 com automação de rotinas em Python e certificação AWS Cloud Practitioner, busco transição para DevOps Junior em empresa com cultura de SRE, onde possa aplicar minha experiência em troubleshooting e contribuir para pipelines de CI/CD resilientes."
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2"><strong>🔹 Destaque:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Não esconde a origem, mas mostra pontes entre o atual e o desejado</li>
                      <li>• Usa termos técnicos corretos (SRE, CI/CD), sinalizando domínio do jargão do setor</li>
                      <li>• É honesto: "DevOps Junior", não "Engenheiro Sênior"</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-muted/30 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg">Exemplo para Sênior (liderança técnica, sem gestão formal)</h4>
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Engenheiro de Software com 8 anos em fintechs, especializado em arquitetura de microsserviços e governança de dados, busco atuar como Tech Lead em empresa que priorize engenharia de qualidade — não só velocidade — com autonomia para definir padrões e escalar times."
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2"><strong>🔹 Observe:</strong> mesmo sendo sênior, o foco não é "cargo de gerente", mas impacto técnico e cultural. Isso atrai recrutadores que valorizam expertise, não apenas hierarquia.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplos por área - Administração */}
            <div className="prose prose-lg max-w-none mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-primary" />
                Administração e Gestão
              </h3>

              <p className="leading-relaxed mb-6">
                Área ampla, com risco alto de generalizações. O segredo está em ancorar o objetivo em resultados esperados e contextos organizacionais específicos.
              </p>

              <div className="space-y-6 mb-8">
                <div className="p-6 bg-muted/30 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg">Exemplo para Estagiário (curso técnico em Administração)</h4>
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Estudante de Administração com vivência em atendimento ao cliente em e-commerce, busco estágio em operações logísticas de marketplace, onde possa aplicar conhecimentos em gestão de estoque e contribuir para redução de tempo médio de entrega."
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2"><strong>🔹 Estratégia inteligente:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Usa verbo de ação ("redução de tempo médio de entrega") — algo mensurável</li>
                      <li>• Mostra já ter vivência em área complementar (atendimento → logística)</li>
                      <li>• Sugere que o candidato pensa em impacto, não só em tarefas</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-muted/30 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg">Exemplo para Pleno (analista financeiro, buscando área de controladoria)</h4>
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Analista Financeiro com experiência em reporting mensal e análise de desvios de custo em indústria alimentícia, busco atuar como Analista de Controladoria em empresa de médio porte, onde possa estruturar indicadores de performance operacional e apoiar decisões estratégicas com dados."
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2"><strong>🔹 Nota-se:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Setor definido ("indústria alimentícia" → mostra conhecimento do negócio)</li>
                      <li>• Habilidade técnica + aplicação prática ("estruturar indicadores")</li>
                      <li>• Alinhamento com necessidade real de controladoria: ligar finanças à operação</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplos por área - Saúde */}
            <div className="prose prose-lg max-w-none mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Heart className="w-7 h-7 text-primary" />
                Saúde (enfermagem, medicina, fisioterapia, etc.)
              </h3>

              <p className="leading-relaxed mb-6">
                Nessa área, o objetivo deve equilibrar competência técnica, ética profissional e intenção de serviço — sem cair no pieguismo.
              </p>

              <div className="space-y-6 mb-8">
                <div className="p-6 bg-muted/30 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg">Exemplo para Recém-formado em Fisioterapia (sem experiência clínica formal)</h4>
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Fisioterapeuta formado com estágio em reabilitação neurológica e projeto voluntário em teleatendimento para idosos, busco atuar em clínica multidisciplinar com foco em saúde preventiva, aplicando abordagem centrada na pessoa e continuando minha formação em RPG e mobilização neural."
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2"><strong>🔹 Detalhes que fazem diferença:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Menciona métodos específicos (RPG, mobilização neural — busca alta no Google)</li>
                      <li>• Inclui experiência não remunerada relevante (teleatendimento)</li>
                      <li>• Usa expressão valorizada: "abordagem centrada na pessoa"</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-muted/30 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg">Exemplo para Enfermeiro com 4 anos em CTI (buscando especialização em urgência)</h4>
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Enfermeiro com experiência em CTI adulto e SAMU, certificado em ACLS e suporte avançado, busco vaga em Unidade de Pronto Atendimento (UPA) de referência, onde possa consolidar minha atuação em emergências clínicas e contribuir com protocolos de triagem segura."
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2"><strong>🔹 Poderoso por:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Certificações-chave são nomeadas (ACLS)</li>
                      <li>• Mostra evolução lógica (CTI → UPA)</li>
                      <li>• Sugere contribuição além da execução: protocolos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Erros comuns */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-primary" />
                Erros comuns (e como evitá-los)
              </h2>

              <p className="leading-relaxed mb-6">
                Mesmo com boas intenções, muitos caem em armadilhas sutis. Veja os 5 mais frequentes — e como corrigi-los:
              </p>

              <div className="space-y-6 mb-8">
                <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                    1. Foco excessivo em o que você quer — e não no que você entrega
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Exemplo ruim:</strong> "Desejo trabalhar em empresa inovadora que valorize o desenvolvimento pessoal."
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    <strong>Correção:</strong> "Busco aplicar minha experiência em gestão de projetos ágeis para acelerar o time de produto de startup em crescimento — contribuindo com entregas previsíveis e alinhadas ao usuário."
                  </p>
                </div>

                <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                    2. Objetivos longos demais (mais de 3 linhas)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Recrutadores não têm tempo para redações. Mantenha entre 25 e 40 palavras. Use ponto final — não vírgulas infinitas.
                  </p>
                </div>

                <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                    3. Inconsistência com o restante do currículo
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Se seu objetivo diz que busca "liderança em sustentabilidade", mas seu histórico é 100% em vendas sem nenhuma iniciativa ESG, o recrutador duvidará da sua credibilidade.
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    <strong>✅ Solução:</strong> ajuste o objetivo ou inclua pequenos projetos relevantes na seção de "Atividades Complementares".
                  </p>
                </div>

                <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                    4. Uso de clichês vazios
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Evite: "pessoa proativa", "trabalho em equipe", "comprometido com resultados".
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    <strong>Substitua por comportamentos observáveis:</strong><br />
                    "Facilitei 12 reuniões de retrospectiva com times remotos, resultando em 3 melhorias contínuas no ciclo de desenvolvimento."
                  </p>
                </div>

                <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                    5. Copiar e colar o mesmo objetivo para todas as vagas
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Isso é pior do que não ter objetivo. Um recrutador percebe na hora — e interpreta como falta de interesse genuíno.
                  </p>
                  <div className="p-4 bg-white dark:bg-slate-900 rounded">
                    <p className="text-sm mb-2"><strong>✨ Dica bônus:</strong> Crie um "modelo-base" do seu objetivo e adapte apenas 2–3 palavras por vaga. Por exemplo:</p>
                    <p className="text-sm text-muted-foreground italic">
                      "Busco atuar como [CARGO] em [SETOR/EMPRESA TIPO], aplicando minha experiência em [HABILIDADE] para [RESULTADO ESPERADO]."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                Checklist: seu objetivo profissional está pronto para brilhar?
              </h2>

              <p className="leading-relaxed mb-6">
                Antes de enviar seu currículo, passe por este checklist de 7 pontos:
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-8">
                <table className="w-full">
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="w-5 h-5" />
                          <span>Tem entre 1 e 2 frases?</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="w-5 h-5" />
                          <span>Nomeia o cargo (ou tipo de vaga) desejado?</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="w-5 h-5" />
                          <span>Conecta sua experiência prévia com o próximo passo?</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="w-5 h-5" />
                          <span>Usa pelo menos 1 termo técnico ou específico do setor?</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="w-5 h-5" />
                          <span>Soa como algo que <strong>você</strong> diria em voz alta — e não um robô?</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="w-5 h-5" />
                          <span>Está alinhado com a descrição da vaga (leia o edital antes!)?</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="w-5 h-5" />
                          <span>Foi revisado por alguém de fora da sua área (para testar clareza)?</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="leading-relaxed">
                Se marcou ≥6 "Sim", você está no caminho certo.
              </p>
            </div>

            {/* FAQ */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes (FAQ)</h2>

              <div className="space-y-6">
                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">📌 O objetivo profissional é obrigatório no currículo em 2025?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Não é obrigatório, mas é altamente recomendado para profissionais com até 5 anos de experiência, em transição de carreira ou retornando ao mercado. Para seniores, um resumo profissional costuma ser mais eficaz — mas há exceções.
                  </p>
                </div>

                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">📌 Posso usar o mesmo objetivo para várias vagas?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Não. Mesmo que as vagas sejam parecidas, adapte pelo menos o nome do cargo e uma referência ao setor ou desafio da empresa. Recrutadores percebem cópias — e interpretam como falta de interesse.
                  </p>
                </div>

                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">📌 Quantas linhas pode ter o objetivo profissional?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No máximo 2 linhas (em fonte 11 ou 12). Ideal: entre 25 e 40 palavras. Se passar disso, vira bloco de texto — e perde o impacto.
                  </p>
                </div>

                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">📌 Devo colocar o objetivo antes ou depois dos dados pessoais?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sempre após os dados de contato e antes da formação. É a primeira informação de conteúdo que o recrutador lê — use isso a seu favor.
                  </p>
                </div>

                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">📌 Posso incluir metas de longo prazo no objetivo?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Apenas se forem conectadas logicamente ao próximo passo. Ex: "… buscando construir base para atuar futuramente em gestão de inovação em saúde." Evite saltos irreais ("… com objetivo de ser diretor em 2 anos").
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusão */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-6">Conclusão: seu objetivo profissional é sua assinatura narrativa</h2>

              <p className="leading-relaxed mb-6">
                No fundo, um currículo não é um catálogo de competências. É uma história incompleta — e o objetivo profissional é a frase que prepara o leitor para o próximo capítulo.
              </p>

              <p className="leading-relaxed mb-6">
                Ele não precisa ser grandioso. Precisa ser verdadeiro, específico e convidativo.
              </p>

              <p className="leading-relaxed mb-6">
                Um erro comum é achar que o objetivo deve impressionar. Na verdade, ele deve <strong>facilitar</strong>. Facilitar a decisão do recrutador. Facilitar o encontro entre sua trajetória e a necessidade real de uma equipe.
              </p>

              <p className="leading-relaxed mb-6">
                Os exemplos que trouxemos aqui não são fórmulas mágicas. São demonstrações de como a clareza — aliada ao autoconhecimento — gera oportunidades.
              </p>

              <p className="leading-relaxed mb-6">
                Então, antes de atualizar seu currículo hoje, faça duas coisas:
              </p>

              <ol className="space-y-2 mb-6 ml-6">
                <li>Leia em voz alta o seu objetivo atual. Soa como você?</li>
                <li>Pergunte-se: "Se eu fosse o recrutador, essa frase me daria vontade de conhecer essa pessoa?"</li>
              </ol>

              <p className="leading-relaxed mb-8">
                Se a resposta for não ou talvez, está na hora de reescrever.
              </p>

              <div className="bg-primary/10 p-8 rounded-lg text-center">
                <p className="text-lg mb-6">
                  Compartilhe este artigo com alguém que está reescrevendo o currículo agora. Às vezes, um pequeno ajuste faz toda a diferença entre "arquivado" e "ligue amanhã para entrevista".
                </p>
                <Link to="/criar-curriculo">
                  <Button size="lg" className="gap-2">
                    <Target className="w-5 h-5" />
                    Criar Meu Currículo Profissional Grátis
                  </Button>
                </Link>
              </div>
            </div>

            {/* Referências */}
            <div className="prose prose-lg max-w-none mb-12 text-sm text-muted-foreground">
              <h3 className="text-lg font-bold mb-4">Referências e Fontes de Autoridade</h3>
              <ul className="space-y-2">
                <li>IBGE. (2025). Pesquisa Nacional por Amostra de Domicílios Contínua (PNAD-C) — Mercado de Trabalho Jovem.</li>
                <li>LHH Brasil. (2024). Tempo Médio de Leitura de Currículos no Primeiro Filtro. Estudo com 2.100 profissionais de RH.</li>
                <li>Harvard Business Review. (2023). The Honesty Premium in Early-Career Hiring.</li>
                <li>Catho. (2025). Pesquisa sobre Relevância do Objetivo Profissional em Processos Seletivos.</li>
              </ul>
              <p className="mt-4 text-xs">
                Atualizado em: 14 de novembro de 2025.<br />
                Escrito com base em entrevistas com 12 recrutadores de RH e análise de 200+ currículos reais de 2024–2025.
              </p>
            </div>

            <RelatedArticles currentUrl={articleUrl} />

            {/* Author Bio */}
            <AuthorBio />

              </article>

              {/* Sidebar */}
              <div className="lg:w-80 xl:w-96 flex-shrink-0">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogArticle6;
