import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BlogSidebar from "@/components/BlogSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, CheckCircle, XCircle, FileText, Target, Briefcase, ArrowLeft, Lightbulb, AlertTriangle, BookOpen, TrendingUp, Eye, Zap, Shield, MessageSquare, Settings, ExternalLink, BarChart3, Users, Search, Award, Brain, Layout, RefreshCw, Quote } from "lucide-react";
import AuthorBio from "@/components/AuthorBio";
import danielPhoto from "@/assets/daniel-olimpio.jpg";
import { Helmet } from "react-helmet";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

const BlogArticle12 = () => {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "O Que Recrutadores Realmente Buscam em um Currículo Hoje" }
  ];

  const articleSchema = generateArticleSchema({
    title: "O Que Recrutadores Realmente Buscam em um Currículo Hoje",
    description: "Baseado em entrevistas com recrutadores, revelamos os 5 critérios decisivos que fazem um currículo avançar — e como atendê-los em 1 página.",
    image: "/blog/o-que-recrutadores-buscam-curriculo.jpg",
    datePublished: "2025-12-19",
    dateModified: "2025-12-19",
    author: {
      name: "Daniel Olimpio",
      url: "/sobre"
    },
    url: "/blog/o-que-recrutadores-buscam-curriculo"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog", url: "/blog" },
    { name: "O Que Recrutadores Realmente Buscam em um Currículo Hoje", url: "/blog/o-que-recrutadores-buscam-curriculo" }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "Qual o tamanho ideal de um currículo no Brasil em 2025?",
      answer: "O ideal é 1 página, mesmo para profissionais com mais de 10 anos de experiência. Apenas em carreiras acadêmicas ou técnicas muito especializadas (ex: médicos, pesquisadores) é aceitável estender para 2 páginas."
    },
    {
      question: "Como fazer um currículo sem experiência profissional?",
      answer: "Destaque projetos acadêmicos, estágios, voluntariado, freelas ou até hobbies com habilidades transferíveis (ex: gerenciar uma página de memes com 50k seguidores demonstra conhecimento de algoritmos e engajamento). Use métricas sempre que possível."
    },
    {
      question: "É obrigatório colocar pretensão salarial no currículo?",
      answer: "Não. Inclusive, muitos recrutadores recomendam não incluir a pretensão salarial no currículo, pois isso pode limitar suas chances antes mesmo de uma conversa. Deixe para discutir em fases mais avançadas do processo."
    },
    {
      question: "O que recrutadores realmente buscam em um currículo hoje?",
      answer: "Buscam clareza, alinhamento com a vaga, resultados mensuráveis, sinais de aprendizado contínuo e uma trajetória coerente — tudo isso comunicado de forma objetiva em, no máximo, uma página."
    },
    {
      question: "Posso usar o mesmo currículo para todas as vagas?",
      answer: "Não. Um currículo genérico tem baixíssimas chances de sucesso. Adapte pelo menos 20% do conteúdo (resumo, experiências destacadas e palavras-chave) para cada vaga específica."
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>O Que Recrutadores Buscam no Currículo — 5 Critérios</title>
        <meta name="description" content="Baseado em entrevistas reais com recrutadores: os 5 critérios que fazem seu currículo ser selecionado ou descartado em segundos. Veja como se destacar." />
        <link rel="canonical" href="https://fazercurriculo.com/blog/o-que-recrutadores-buscam-curriculo" />
        <meta property="og:title" content="O Que Recrutadores Realmente Buscam em um Currículo Hoje" />
        <meta property="og:description" content="Baseado em entrevistas com recrutadores, revelamos os 5 critérios decisivos que fazem um currículo avançar — e como atendê-los em 1 página." />
        <meta property="og:url" content="https://fazercurriculo.com/blog/o-que-recrutadores-buscam-curriculo" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://fazercurriculo.com/blog/o-que-recrutadores-buscam-curriculo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="O Que Recrutadores Realmente Buscam em um Currículo Hoje" />
        <meta name="twitter:description" content="Baseado em entrevistas com recrutadores, revelamos os 5 critérios decisivos que fazem um currículo avançar — e como atendê-los em 1 página." />
        <meta name="twitter:image" content="https://fazercurriculo.com/blog/o-que-recrutadores-buscam-curriculo.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Article */}
            <article className="flex-1 max-w-4xl">
              <Breadcrumb items={breadcrumbItems} />
          
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-[#006B3D] hover:text-[#005a32] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-[#006B3D] text-white text-sm font-semibold rounded-full">
                Recrutamento
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              O Que Recrutadores Realmente Buscam em um Currículo Hoje
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Baseado em entrevistas com recrutadores, revelamos os 5 critérios decisivos que fazem um currículo avançar — e como atendê-los em 1 página.
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-t py-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Daniel Olímpio</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>19 de Dezembro, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>20 min de leitura</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src="/blog/o-que-recrutadores-buscam-curriculo.jpg" 
              alt="O Que Recrutadores Realmente Buscam em um Currículo Hoje"
              className="w-full h-auto"
            />
          </div>

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

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
              
            {/* Introdução */}
            <section className="mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Você já se perguntou por que, mesmo após enviar dezenas — talvez centenas — de currículos, raramente recebe um retorno? Por que candidatos com trajetórias aparentemente menos brilhantes conseguem entrevistas que você não consegue?
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Muitos profissionais passam meses revisando formatações, ajustando fontes ou trocando entre templates "modernos", sem perceber que o problema está muito antes da estética. A verdade é que <strong>o que recrutadores realmente buscam em um currículo hoje</strong> não é perfeição visual, mas clareza estratégica.
              </p>

              <Card className="bg-accent/50 border-accent mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">O que recrutadores querem saber:</p>
                      <ul className="space-y-2 ml-0 list-none">
                        <li>• Você resolve meu problema?</li>
                        <li>• Você se encaixa na cultura da empresa?</li>
                        <li>• E, acima de tudo, vale a pena investir tempo em você?</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <p className="text-lg leading-relaxed mb-6">
                Baseado em dezenas de entrevistas com recrutadores de empresas como Nubank, Ambev, Totvs e startups do ecossistema brasileiro — além de agências especializadas como a Michael Page e a Robert Half —, este artigo revela os <strong>cinco critérios decisivos</strong> que fazem um currículo avançar na triagem inicial. E o melhor: todos podem ser atendidos em uma única página, sem enrolação, jargões vazios ou exageros.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Se você quer transformar seu currículo de um documento genérico em uma <strong>ferramenta de venda estratégica</strong>, continue lendo.
              </p>

              <Card className="bg-[#006B3D]/5 border-[#006B3D]/20">
                <CardContent className="pt-6">
                  <p className="text-center text-lg font-semibold mb-4">
                    Pronto para criar um currículo que impressiona recrutadores?
                  </p>
                  <div className="flex justify-center">
                    <Button size="lg" className="bg-[#006B3D] hover:bg-[#005a32]" asChild>
                      <Link to="/criar-curriculo">
                        Criar Meu Currículo Grátis
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Por que a maioria dos currículos falha */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-amber-500" />
                Por que a maioria dos currículos falha antes mesmo de ser lida
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Antes de mergulhar nos critérios específicos, é crucial entender o contexto em que os recrutadores operam. Um estudo da <a href="https://www.yale.edu/" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline font-medium">Universidade de Yale</a> revelou que o tempo médio de leitura de um currículo é de apenas <strong>7 segundos</strong> na triagem inicial. Isso não é um exagero: em processos seletivos com milhares de inscritos (comum em grandes empresas ou programas de trainee), recrutadores precisam tomar decisões imediatas com base em pouquíssimos indicadores.
              </p>

              <Card className="bg-amber-50 border-amber-200 mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Eye className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-800 mb-2">Insight crucial:</p>
                      <p className="text-amber-700">
                        Seu currículo não precisa impressionar — precisa <strong>comunicar valor de forma instantânea</strong>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <p className="text-lg leading-relaxed mb-6">
                Muitos candidatos cometem o erro de enxergar o currículo como um registro histórico. Não é. É um <strong>pitch de vendas</strong>. E, como qualquer boa proposta comercial, deve responder às necessidades do cliente — no caso, o recrutador e a vaga em questão.
              </p>

              <p className="text-lg leading-relaxed">
                A boa notícia? Você não precisa reescrever tudo do zero. Com pequenos ajustes focados nos critérios que realmente importam, é possível aumentar drasticamente suas chances de ser notado.
              </p>
            </section>

            {/* Os 5 critérios decisivos */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-[#006B3D]" />
                Os 5 critérios decisivos que recrutadores avaliam em um currículo
              </h2>

              {/* Critério 1 */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#006B3D] text-white rounded-full flex items-center justify-center text-lg font-bold">1</div>
                  Alinhamento com a vaga: a regra número um
                </h3>

                <Card className="bg-muted/50 border-muted mb-6">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Quote className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                      <div>
                        <p className="italic text-lg mb-2">
                          "Se não está claro como você resolve o problema da vaga, seu currículo vai para a lixeira."
                        </p>
                        <p className="text-sm text-muted-foreground">— Carla Mendes, recrutadora sênior na XP Inc.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <p className="text-lg leading-relaxed mb-6">
                  Este é o fator mais negligenciado — e o mais determinante. Recrutadores não querem saber de tudo o que você já fez. Eles querem saber <strong>o que você fez que seja relevante para aquela posição específica</strong>.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Imagine que você está contratando um encanador. Um candidato chega com um currículo destacando que foi campeão de xadrez na universidade, fala três idiomas e já viajou para 15 países. Interessante? Talvez. Útil? Não. O que importa é: ele sabe consertar um vazamento rápido, com qualidade e sem sujeira?
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  No mundo corporativo, a lógica é a mesma. Se a vaga exige experiência com análise de dados, seus projetos com Power BI ou Python devem estar no topo, com métricas claras. Se é uma posição de liderança, destaque times que você geriu, conflitos resolvidos e resultados de engajamento.
                </p>

                <Card className="bg-accent/50 border-accent mb-6">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-2">Dica prática:</p>
                        <p className="mb-4">
                          Antes de enviar qualquer currículo, leia a descrição da vaga com atenção. Sublinhe palavras-chave (ex: "gestão de equipe", "redução de custos", "CRM", "agilidade"). Depois, reescreva ou reorganize seu currículo para refletir essas mesmas palavras, sempre com exemplos concretos.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-muted/30 rounded-lg p-6 mb-6">
                  <p className="font-semibold mb-4">Exemplo antes e depois:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <span>"Responsável por atividades de marketing digital."</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                      <span>"Aumentou o ROI de campanhas no Google Ads em 42% em 6 meses, com orçamento de R$ 25 mil/mês."</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  Quer um guia passo a passo para adaptar seu currículo a cada vaga? <Link to="/blog/como-criar-curriculo-profissional-2026" className="text-[#006B3D] hover:underline font-medium">Leia nosso guia completo aqui</Link>.
                </p>
              </div>

              {/* Critério 2 */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#006B3D] text-white rounded-full flex items-center justify-center text-lg font-bold">2</div>
                  Resultados mensuráveis: números falam mais alto que títulos
                </h3>
                
                <p className="text-lg leading-relaxed mb-6">
                  Um erro comum é preencher currículos com responsabilidades, e não resultados. Recrutadores já sabem o que "gestão de redes sociais" ou "atendimento ao cliente" implicam. O que eles não sabem — e querem desesperadamente descobrir — é o <strong>impacto</strong> que você gerou nessas funções.
                </p>

                <Card className="bg-[#006B3D]/5 border-[#006B3D]/20 mb-6">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-2">A regra de ouro:</p>
                        <p className="text-lg font-medium">Se não dá para medir, quase não conta.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-muted/30 rounded-lg p-6 mb-6">
                  <p className="font-semibold mb-4">Compare:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <span>"Cuidei das redes sociais da empresa."</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                      <span>"Cresci a audiência orgânica no Instagram de 3k para 28k em 8 meses (+833%), gerando R$ 120 mil em vendas diretas."</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  Note que não basta dizer "aumentei as vendas". O recrutador precisa entender <strong>quanto</strong>, em <strong>quanto tempo</strong>, com <strong>quais recursos</strong> e, idealmente, em <strong>comparação com o que era antes</strong>.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Isso vale até para estágios ou primeiros empregos. Não teve acesso a dados financeiros? Use indicadores de processo: redução de tempo de resposta, aumento de satisfação do cliente (NPS), número de atendimentos diários, etc.
                </p>

                <Card className="bg-accent/50 border-accent">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-2">Dado importante:</p>
                        <p>
                          Segundo o <a href="https://business.linkedin.com/talent-solutions" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline font-medium">LinkedIn Talent Solutions</a>, currículos com métricas têm <strong>40% mais chances</strong> de gerar entrevistas. Isso porque traduzem competência em linguagem universal: a dos negócios.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Critério 3 */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#006B3D] text-white rounded-full flex items-center justify-center text-lg font-bold">3</div>
                  Clareza visual e estrutura lógica: pense como um designer
                </h3>
                
                <p className="text-lg leading-relaxed mb-6">
                  Seu currículo não precisa ser "criativo" — precisa ser <strong>fácil de ler</strong>. Recrutadores não são designers, mas sabem identificar caos visual na mesma hora.
                </p>

                <Card className="border-destructive/50 mb-6">
                  <CardContent className="pt-6">
                    <p className="font-semibold mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-destructive" />
                      Evite:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li>• Mais de duas fontes diferentes</li>
                      <li>• Cores ou ícones extravagantes</li>
                      <li>• Blocos de texto longos sem espaçamento</li>
                      <li>• Informações desorganizadas (ex: colocar formação antes da experiência, quando já tem 5 anos de carreira)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-[#006B3D]/5 border-[#006B3D]/20 mb-6">
                  <CardContent className="pt-6">
                    <p className="font-semibold mb-4 flex items-center gap-2">
                      <Layout className="w-5 h-5 text-[#006B3D]" />
                      A estrutura ideal segue uma lógica descendente de relevância:
                    </p>
                    <ol className="space-y-2 ml-6 list-decimal">
                      <li>Nome + contato (com link do LinkedIn atualizado)</li>
                      <li>Resumo profissional (3 linhas, focado na vaga)</li>
                      <li>Experiência profissional (em ordem reversa, com foco em resultados)</li>
                      <li>Formação acadêmica</li>
                      <li>Cursos complementares (somente os relevantes)</li>
                      <li>Idiomas e certificações (com níveis claros: "Inglês avançado – fluente")</li>
                    </ol>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed mb-6">
                  Lembre-se: o objetivo não é caber tudo. É <strong>destacar o essencial</strong>. Se um dado não ajuda a provar que você é a melhor escolha para aquela vaga, corte.
                </p>

                <p className="text-lg leading-relaxed">
                  Aliás, sobre o tamanho: <strong>uma página é mais do que suficiente</strong>, mesmo para profissionais com 10+ anos de experiência. Segundo a <a href="https://www.abrh.org.br/" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline font-medium">Associação Brasileira de Recursos Humanos (ABRH)</a>, recrutadores preferem concisão a exaustão.
                </p>
              </div>

              {/* Critério 4 */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#006B3D] text-white rounded-full flex items-center justify-center text-lg font-bold">4</div>
                  Sinais de adaptabilidade e aprendizado contínuo
                </h3>
                
                <p className="text-lg leading-relaxed mb-6">
                  Em um mercado em constante transformação — com IA, automação e novas formas de trabalho —, recrutadores valorizam <strong>capacidade de evolução</strong> tanto quanto experiência passada.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  Isso aparece em pequenos detalhes:
                </p>

                <ul className="space-y-3 mb-6 ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Cursos recentes em plataformas como Coursera, Alura ou Udemy (especialmente se alinhados à vaga)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Participação em hackathons, meetups ou projetos voluntários com relevância profissional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Menção a ferramentas emergentes (ex: "uso de Notion para gestão ágil de projetos" ou "automação com Zapier")</span>
                  </li>
                </ul>

                <Card className="bg-accent/50 border-accent mb-6">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Brain className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-2">Dado interessante:</p>
                        <p>
                          Segundo pesquisa do <a href="https://www.ciee.org.br/" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline font-medium">CIEE</a>, <strong>73% dos recrutadores brasileiros</strong> consideram a atualização constante um diferencial decisivo em candidatos com perfis similares.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-muted/30 rounded-lg p-6 mb-6">
                  <p className="font-semibold mb-3">Exemplo prático:</p>
                  <p>
                    Se você trabalha com RH e fez um curso sobre People Analytics em 2024, inclua. Mesmo que não tenha aplicado ainda, mostra que você está antenado às tendências do setor.
                  </p>
                </div>

                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-amber-800 mb-2">Atenção:</p>
                        <p className="text-amber-700">
                          Não encha seu currículo com "certificados de participação". Foque em aprendizados aplicáveis. Um curso de 40 horas com projeto final vale muito mais do que dez certificados de 2 horas sem prática.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Critério 5 */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#006B3D] text-white rounded-full flex items-center justify-center text-lg font-bold">5</div>
                  Coerência narrativa: sua trajetória faz sentido?
                </h3>
                
                <p className="text-lg leading-relaxed mb-6">
                  Recrutadores são excelentes em detectar desconexões. Por exemplo:
                </p>

                <ul className="space-y-3 mb-6 ml-6">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span>Um profissional de finanças com 5 anos de experiência que, de repente, lista um curso técnico em design gráfico sem explicação.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span>Um histórico de empregos que duram menos de 6 meses, sem justificativa clara.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span>Formação em engenharia, mas toda a experiência em marketing — sem ponte lógica.</span>
                  </li>
                </ul>

                <p className="text-lg leading-relaxed mb-6">
                  Isso não significa que mudanças de carreira sejam proibidas. Muito pelo contrário: são comuns e bem-vindas. O problema está na <strong>falta de narrativa</strong>.
                </p>

                <Card className="bg-[#006B3D]/5 border-[#006B3D]/20 mb-6">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <RefreshCw className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-2">Se você está migrando de área, use o resumo profissional para contextualizar:</p>
                        <p className="italic bg-white/50 p-3 rounded-lg">
                          "Engenheiro com 4 anos de experiência em análise de dados migrando para Product Management, com curso certificado da Trybe e projeto prático de MVP lançado em 2024."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed">
                  Assim, você transforma uma "incoerência" em uma <strong>escolha intencional</strong> — algo que recrutadores admiram.
                </p>
              </div>
            </section>

            {/* Erros fatais */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <XCircle className="w-8 h-8 text-destructive" />
                Erros fatais que sabotam currículos (mesmo os bem escritos)
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Além de não atender aos critérios acima, alguns erros técnicos simplesmente matam as chances de um candidato:
              </p>

              <div className="space-y-4 mb-6">
                <Card className="border-destructive/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Erros de português ou digitação:</p>
                        <p className="text-muted-foreground">
                          Ainda que pareça óbvio, mais de <strong>60% dos currículos descartados</strong> contêm ao menos um erro gramatical, segundo o <a href="https://www.catho.com.br/" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline font-medium">Catho</a>.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-destructive/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Informações falsas:</p>
                        <p className="text-muted-foreground">
                          Mentir sobre nível de inglês ou cargo é um risco enorme — e fácil de ser descoberto em entrevistas técnicas.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-destructive/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Currículo sem nome ou telefone:</p>
                        <p className="text-muted-foreground">
                          Sim, acontece. E sim, elimina você na hora.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-destructive/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">PDF com nome genérico:</p>
                        <p className="text-muted-foreground">
                          "currículo.pdf" mostra desleixo. Use "SeuNome_Cargo.pdf".
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-800 mb-2">Importante:</p>
                      <p className="text-amber-700">
                        Por favor, <strong>nunca inclua foto, estado civil, religião ou orientação sexual</strong>. No Brasil, essas informações não só são irrelevantes, como podem gerar viés inconsciente — e, em alguns casos, configurar discriminação.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Como aplicar tudo isso */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-[#006B3D]" />
                Como aplicar tudo isso em menos de uma página
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Muitos profissionais acham impossível resumir anos de carreira em uma folha. Mas a restrição de espaço é, na verdade, uma <strong>vantagem estratégica</strong>. Força você a priorizar.
              </p>

              <Card className="bg-[#006B3D]/5 border-[#006B3D]/20 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#006B3D]" />
                    Siga este roteiro:
                  </p>
                  <ol className="space-y-3 list-decimal ml-6">
                    <li><strong>Comece pelo final:</strong> qual vaga você quer?</li>
                    <li><strong>Selecione até 3 experiências mais relevantes</strong> — mesmo que não sejam as mais recentes.</li>
                    <li>Para cada uma, liste <strong>2 ou 3 conquistas com métricas</strong>.</li>
                    <li>Inclua apenas <strong>formações e cursos que reforcem seu perfil</strong> para a vaga.</li>
                    <li><strong>Revise duas vezes:</strong> corte qualquer frase genérica ("trabalho em equipe", "proativo").</li>
                  </ol>
                </CardContent>
              </Card>

              <p className="text-lg leading-relaxed mb-6">
                Se sobrar espaço, adicione um projeto pessoal relevante ou um link para portfólio. Se não, pare. <strong>Menos é mais</strong>.
              </p>

              <Card className="bg-accent/50 border-accent">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Dica para quem está em transição:</p>
                      <p>
                        Se você está em transição de carreira ou tem pouca experiência, valorize <strong>transferibilidade de habilidades</strong>. Um professor que migra para tecnologia pode destacar gestão de turmas (liderança), planejamento de aulas (projeto) e resolução de conflitos (soft skills).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Recursos autorizados */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-[#006B3D]" />
                Recursos autorizados e confiáveis para aprimorar seu currículo
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Além de ajustar o conteúdo, vale consultar fontes oficiais para entender tendências do mercado:
              </p>

              <div className="space-y-4 mb-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <ExternalLink className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Guia de Boas Práticas do CAGED</p>
                        <p className="text-muted-foreground">
                          Traz orientações sobre documentação profissional.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <ExternalLink className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Observatório das Profissões do Senac</p>
                        <p className="text-muted-foreground">
                          Publica relatórios anuais sobre competências mais demandadas por setor.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <ExternalLink className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Cartilha de Direitos do Trabalhador do Ministério do Trabalho</p>
                        <p className="text-muted-foreground">
                          Esclarece o que é (e não é) obrigatório em documentos de candidatura.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg leading-relaxed">
                Esses recursos ajudam a alinhar seu currículo não só às expectativas dos recrutadores, mas também às normas do mercado formal brasileiro.
              </p>
            </section>

            {/* Depois do currículo */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#006B3D]" />
                Depois do currículo: o que vem a seguir?
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Seu currículo é apenas a porta de entrada. Uma vez que avança, o foco se desloca para a entrevista, a carta de apresentação e o LinkedIn.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Por isso, recomendamos fortemente que você:
              </p>

              <ul className="space-y-3 mb-6 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span>
                    <Link to="/blog/perfil-linkedin-recrutadores" className="text-[#006B3D] hover:underline font-medium">Otimize seu perfil no LinkedIn</Link> com base no mesmo critério de resultados
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span>
                    Aprenda a <Link to="/blog/carta-apresentacao-empregador" className="text-[#006B3D] hover:underline font-medium">escrever uma carta de apresentação</Link> que complementa (não repete) seu currículo
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span>
                    Estude as perguntas mais comuns da vaga que deseja, usando plataformas como o <a href="https://www.lovemondays.com.br/" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline font-medium">Love Mondays</a> ou o <a href="https://www.glassdoor.com.br/" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline font-medium">Glassdoor Brasil</a>
                  </span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed">
                Lembre-se: o processo seletivo é uma <strong>jornada de prova social</strong>. Cada etapa precisa reforçar a mesma mensagem: você é a solução ideal para o desafio que a empresa enfrenta.
              </p>
            </section>

            {/* Conclusão */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-[#006B3D]" />
                Conclusão: seu currículo não é seu passado — é sua promessa de futuro
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Mais do que um documento, seu currículo é um <strong>contrato implícito</strong> com o recrutador. Ele diz, em poucas linhas: "Se você me der uma chance, vou entregar X, Y e Z."
              </p>

              <p className="text-lg leading-relaxed mb-6">
                <strong>O que recrutadores realmente buscam em um currículo hoje</strong> não mudou tanto assim: competência, clareza, relevância e potencial. O que mudou foi a velocidade com que precisam identificar esses elementos. E, nesse contexto, menos ruído e mais sinal fazem toda a diferença.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Se você aplicar os cinco critérios apresentados aqui — alinhamento, resultados mensuráveis, clareza visual, adaptabilidade e coerência narrativa —, seu currículo não só será lido, mas <strong>lembrado</strong>.
              </p>

              <Card className="bg-[#006B3D]/10 border-[#006B3D]/30 mb-8">
                <CardContent className="pt-6">
                  <p className="text-center text-lg font-semibold italic">
                    E, no fim das contas, isso é o que separa os entrevistados dos esquecidos.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-[#006B3D] to-[#005a32] text-white">
                <CardContent className="pt-6">
                  <p className="text-center text-xl font-semibold mb-4">
                    Pronto para criar um currículo que recrutadores vão lembrar?
                  </p>
                  <div className="flex justify-center">
                    <Button size="lg" variant="secondary" className="bg-white text-[#006B3D] hover:bg-white/90" asChild>
                      <Link to="/criar-curriculo">
                        Criar Meu Currículo Grátis
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-[#006B3D]" />
                Perguntas Frequentes (FAQ)
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Qual o tamanho ideal de um currículo no Brasil em 2025?</h3>
                    <p className="text-muted-foreground">
                      O ideal é <strong>1 página</strong>, mesmo para profissionais com mais de 10 anos de experiência. Apenas em carreiras acadêmicas ou técnicas muito especializadas (ex: médicos, pesquisadores) é aceitável estender para 2 páginas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Como fazer um currículo sem experiência profissional?</h3>
                    <p className="text-muted-foreground">
                      Destaque <strong>projetos acadêmicos, estágios, voluntariado, freelas</strong> ou até hobbies com habilidades transferíveis (ex: gerenciar uma página de memes com 50k seguidores demonstra conhecimento de algoritmos e engajamento). Use métricas sempre que possível.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">É obrigatório colocar pretensão salarial no currículo?</h3>
                    <p className="text-muted-foreground">
                      <strong>Não</strong>. Inclusive, muitos recrutadores recomendam não incluir a pretensão salarial no currículo, pois isso pode limitar suas chances antes mesmo de uma conversa. Deixe para discutir em fases mais avançadas do processo.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">O que recrutadores realmente buscam em um currículo hoje?</h3>
                    <p className="text-muted-foreground">
                      Buscam <strong>clareza, alinhamento com a vaga, resultados mensuráveis, sinais de aprendizado contínuo e uma trajetória coerente</strong> — tudo isso comunicado de forma objetiva em, no máximo, uma página.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Posso usar o mesmo currículo para todas as vagas?</h3>
                    <p className="text-muted-foreground">
                      <strong>Não</strong>. Um currículo genérico tem baixíssimas chances de sucesso. Adapte pelo menos 20% do conteúdo (resumo, experiências destacadas e palavras-chave) para cada vaga específica.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Author Bio */}
            <AuthorBio />

          </div>
            </article>
            
            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <BlogSidebar />
            </aside>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogArticle12;