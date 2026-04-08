import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BlogSidebar from "@/components/BlogSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, CheckCircle, XCircle, FileText, Target, Briefcase, ArrowLeft, Lightbulb, AlertTriangle, BookOpen, Linkedin, Users, Eye, Zap, Shield, MessageSquare, TrendingUp, Settings, ExternalLink } from "lucide-react";
import AuthorBio from "@/components/AuthorBio";
import danielPhoto from "@/assets/daniel-olimpio.jpg";
import { Helmet } from "react-helmet";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

const BlogArticle11 = () => {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Diferença Entre Currículo e Perfil no LinkedIn em 2026" }
  ];

  const articleSchema = generateArticleSchema({
    title: "Diferença Entre Currículo e Perfil no LinkedIn em 2026",
    description: "Entenda quando usar currículo, quando priorizar o LinkedIn e como alinhar ambos para construir uma presença profissional coerente e forte.",
    image: "/blog/curriculo-vs-linkedin-2026.jpg",
    datePublished: "2025-12-06",
    dateModified: "2025-12-06",
    author: {
      name: "Daniel Olimpio",
      url: "/sobre"
    },
    url: "/blog/curriculo-vs-linkedin-2026"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog", url: "/blog" },
    { name: "Diferença Entre Currículo e Perfil no LinkedIn em 2026", url: "/blog/curriculo-vs-linkedin-2026" }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "Qual a principal diferença entre currículo e perfil no LinkedIn em 2026?",
      answer: "O currículo é um documento estratégico, adaptado a cada vaga, com foco em resultados e palavras-chave. O perfil no LinkedIn é uma plataforma de relacionamento, visibilidade e construção de marca pessoal, com linguagem mais narrativa e humana."
    },
    {
      question: "Posso usar o mesmo texto do currículo no LinkedIn?",
      answer: "Não. Embora os dados básicos (empresas, cargos, datas) devam ser consistentes, a linguagem, estrutura e propósito são diferentes. Copiar o currículo para o LinkedIn reduz o engajamento e a eficácia do perfil."
    },
    {
      question: "O LinkedIn substitui o currículo em 2026?",
      answer: "Não. O currículo continua essencial para processos seletivos formais, especialmente em empresas grandes, setores regulados e vagas competitivas. O LinkedIn complementa, mas não substitui."
    },
    {
      question: "Como atualizar currículo e LinkedIn sem perder tempo?",
      answer: "Mantenha uma 'base mestra' com todas as suas experiências, formações e conquistas. Ao se candidatar a uma vaga, adapte o currículo a partir dessa base. No LinkedIn, atualize mensalmente com novas conquistas, publicações ou validações de habilidades."
    },
    {
      question: "Recrutadores olham mais o currículo ou o LinkedIn?",
      answer: "Depende do contexto. Em processos formais, o currículo é a primeira triagem. Mas 89% dos recrutadores (segundo pesquisa da Fundação Getulio Vargas) consultam o LinkedIn antes de marcar uma entrevista — para validar informações e avaliar presença digital."
    },
    {
      question: "Preciso colocar foto no currículo em 2026?",
      answer: "No Brasil, não é obrigatório, e em muitos setores é até desaconselhado para evitar viés inconsciente. Já no LinkedIn, uma foto profissional é essencial para credibilidade e reconhecimento."
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Currículo vs LinkedIn: Qual Usar e Quando? [2026]</title>
        <meta name="description" content="Currículo ou LinkedIn — qual o recrutador olha primeiro? Entenda as diferenças, quando priorizar cada um e como alinhar os dois para máximo impacto." />
        <link rel="canonical" href="https://fazercurriculo.com/blog/curriculo-vs-linkedin-2026" />
        <meta property="og:title" content="Diferença Entre Currículo e Perfil no LinkedIn em 2026" />
        <meta property="og:description" content="Entenda quando usar currículo, quando priorizar o LinkedIn e como alinhar ambos para construir uma presença profissional coerente e forte." />
        <meta property="og:url" content="https://fazercurriculo.com/blog/curriculo-vs-linkedin-2026" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://fazercurriculo.com/blog/curriculo-vs-linkedin-2026.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diferença Entre Currículo e Perfil no LinkedIn em 2026" />
        <meta name="twitter:description" content="Entenda quando usar currículo, quando priorizar o LinkedIn e como alinhar ambos para construir uma presença profissional coerente e forte." />
        <meta name="twitter:image" content="https://fazercurriculo.com/blog/curriculo-vs-linkedin-2026.jpg" />
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
                LinkedIn
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Diferença Entre Currículo e Perfil no LinkedIn em 2026
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Entenda quando usar currículo, quando priorizar o LinkedIn e como alinhar ambos para construir uma presença profissional coerente e forte.
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-t py-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Daniel Olímpio</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>6 de Dezembro, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>22 min de leitura</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src="/blog/curriculo-vs-linkedin-2026.jpg" 
              alt="Diferença Entre Currículo e Perfil no LinkedIn em 2026"
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
                Em um mercado de trabalho cada vez mais competitivo e digitalizado, muitos profissionais ainda se perguntam: por que meu currículo não gera entrevistas, mesmo com um perfil sólido no LinkedIn? Ou, ao contrário: por que meu perfil no LinkedIn atrai visualizações, mas não conversões reais?
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                A resposta, na maioria das vezes, está na confusão entre esses dois formatos aparentemente semelhantes, mas com propósitos, linguagens e estratégias radicalmente distintos.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Se você está em busca de emprego, planejando uma transição de carreira ou simplesmente quer fortalecer sua marca pessoal, entender a <strong>diferença entre currículo e perfil no LinkedIn em 2026</strong> é essencial. Mais do que documentos isolados, eles devem funcionar como peças complementares de uma mesma estratégia — uma presença profissional coerente, atualizada e impactante.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Neste artigo, vamos desvendar com clareza, profundidade e exemplos práticos como alinhar esses dois pilares da sua carreira, evitando erros comuns e aproveitando ao máximo cada plataforma. Ao final, você saberá exatamente quando usar currículo, quando priorizar o LinkedIn e como integrar ambos para construir uma identidade profissional impecável.
              </p>

              <Card className="bg-[#006B3D]/5 border-[#006B3D]/20">
                <CardContent className="pt-6">
                  <p className="text-center text-lg font-semibold mb-4">
                    Pronto para criar um currículo alinhado ao seu perfil profissional?
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

            {/* Currículo e LinkedIn: propósitos distintos */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-[#006B3D]" />
                Currículo e LinkedIn: propósitos distintos, linguagens diferentes
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Embora ambos sirvam para comunicar sua trajetória profissional, <strong>currículo e perfil no LinkedIn em 2026</strong> não são intercambiáveis. Trata-se de duas ferramentas com objetivos distintos, públicos diferentes e regras próprias de formatação e linguagem.
              </p>

              {/* O currículo */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-[#006B3D]" />
                  O currículo: um documento estratégico e seletivo
                </h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  O currículo tradicional continua sendo a porta de entrada para processos seletivos formais — especialmente em grandes empresas, concursos públicos, setores regulados ou posições de maior senioridade. Seu principal objetivo é convencer um recrutador em menos de 30 segundos de que você merece uma entrevista. Por isso, ele exige:
                </p>
                
                <ul className="space-y-3 mb-6 ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span><strong>Foco objetivo:</strong> alinhado à vaga específica;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span><strong>Linguagem direta e técnica:</strong> com métricas, resultados e palavras-chave do setor;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span><strong>Estrutura hierárquica e concisa:</strong> geralmente limitado a uma ou duas páginas;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span><strong>Ausência de elementos subjetivos:</strong> como opiniões pessoais, hobbies (a menos que relevantes) ou links desnecessários.</span>
                  </li>
                </ul>

                <p className="text-lg leading-relaxed">
                  Ou seja, o currículo é um <strong>documento de persuasão funcional</strong>, voltado exclusivamente para demonstrar capacidade e adequação.
                </p>
              </div>

              {/* O LinkedIn */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Linkedin className="w-6 h-6 text-[#0077B5]" />
                  O LinkedIn: uma plataforma de relacionamento e visibilidade
                </h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  Já o LinkedIn é uma rede social profissional, cujo propósito vai muito além de conseguir um emprego. Ele é uma ferramenta de:
                </p>
                
                <ul className="space-y-3 mb-6 ml-6">
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-[#0077B5] mt-1 flex-shrink-0" />
                    <span>Networking contínuo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="w-5 h-5 text-[#0077B5] mt-1 flex-shrink-0" />
                    <span>Compartilhamento de conhecimento;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-[#0077B5] mt-1 flex-shrink-0" />
                    <span>Construção de autoridade em seu campo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="w-5 h-5 text-[#0077B5] mt-1 flex-shrink-0" />
                    <span>Visibilidade orgânica para recrutadores, parceiros e até clientes.</span>
                  </li>
                </ul>

                <p className="text-lg leading-relaxed mb-6">
                  Por isso, seu perfil precisa equilibrar <strong>clareza profissional com personalidade</strong>. Não basta listar experiências — é necessário contar uma história, demonstrar valor contínuo e criar conexões humanas. É onde sua <strong>marca pessoal profissional</strong> ganha vida.
                </p>

                <Card className="bg-accent/50 border-accent">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-2">Dica prática:</p>
                        <p>
                          Se o currículo é um ataque direto, o LinkedIn é uma presença constante. Um é usado em momentos pontuais; o outro, todos os dias.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Por que a confusão atrapalha */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-amber-500" />
                Por que a confusão entre currículo e perfil no LinkedIn atrapalha sua carreira?
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Muitos profissionais cometem o erro de copiar e colar seu currículo diretamente no LinkedIn, ou pior: usam o perfil da rede como se fosse um currículo genérico. Isso gera dois problemas graves:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-destructive/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-2">Perda de engajamento:</p>
                        <p className="text-muted-foreground">
                          O LinkedIn recompensa conteúdo humano, narrativo e interativo. Um perfil "curriculado" soa frio, impessoal e desatualizado.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-destructive/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-2">Falta de alinhamento estratégico:</p>
                        <p className="text-muted-foreground">
                          Como cada vaga exige um currículo diferente, usar o mesmo perfil para todas as oportunidades dilui sua mensagem e reduz sua eficácia.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Um estudo recente do <strong>IBOPE Inteligência</strong> mostrou que profissionais com perfis bem estruturados no LinkedIn — mas desconectados de seus currículos — têm <strong>40% menos chances</strong> de serem chamados para entrevistas do que aqueles que mantêm coerência estratégica entre ambos.
              </p>

              <p className="text-lg leading-relaxed">
                Ou seja: não se trata de escolher um ou outro. Trata-se de dominar a <strong>diferença entre currículo e perfil no LinkedIn em 2026</strong> para usá-los em sinergia.
              </p>
            </section>

            {/* Como adaptar seu currículo para 2026 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-[#006B3D]" />
                Como adaptar seu currículo para o mercado de 2026
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                O currículo não morreu — ele evoluiu. Em 2026, as expectativas dos recrutadores mudaram drasticamente. Ainda mais com a ascensão da IA nos processos seletivos (<strong>ATS – Applicant Tracking Systems</strong>), que filtram milhares de candidaturas por palavras-chave e estrutura.
              </p>

              <h3 className="text-2xl font-bold mb-4">Elementos obrigatórios em um currículo moderno</h3>
              
              <ul className="space-y-4 mb-8 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span><strong>Resumo profissional (3 a 4 linhas):</strong> não mais "objetivo", mas uma síntese de valor com foco em resultados;</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span><strong>Experiências com métricas claras:</strong> "Aumentou as vendas em 35% em 6 meses" é mais eficaz que "Responsável por vendas";</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span><strong>Palavras-chave da vaga:</strong> adapte seu currículo a cada aplicação usando termos do próprio anúncio;</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span><strong>Formatação limpa e ATS-friendly:</strong> evite colunas, gráficos, ícones ou fontes não convencionais;</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span><strong>Dados de contato atualizados:</strong> e um e-mail profissional (nada de "amor1990@email.com").</span>
                </li>
              </ul>

              <Card className="bg-[#006B3D]/5 border-[#006B3D]/20 mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Leia também:</p>
                      <p>
                        Confira nosso <Link to="/blog/curriculo-ats-sistemas" className="text-[#006B3D] underline hover:text-[#005a32]">guia completo sobre como criar um currículo que passa por sistemas de IA</Link>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p className="text-lg leading-relaxed">
                Além disso, em 2026, o currículo já não precisa incluir dados como estado civil, foto (exceto em raros setores) ou endereço completo — informações que, além de desnecessárias, podem gerar viés inconsciente.
              </p>
            </section>

            {/* Como transformar seu perfil no LinkedIn */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Linkedin className="w-8 h-8 text-[#0077B5]" />
                Como transformar seu perfil no LinkedIn em uma máquina de oportunidades
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Enquanto o currículo é reativo (você o envia quando há uma vaga), o LinkedIn é proativo. Ele trabalha para você 24 horas por dia, mesmo quando você não está buscando emprego.
              </p>

              <h3 className="text-2xl font-bold mb-4">Os 5 pilares de um perfil de alto impacto</h3>

              <div className="space-y-4 mb-8">
                <Card className="border-[#0077B5]/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0077B5] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <p className="font-semibold mb-1">Foto profissional e de qualidade:</p>
                        <p className="text-muted-foreground">com fundo neutro, sorriso natural e roupa alinhada ao seu setor;</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-[#0077B5]/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0077B5] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <p className="font-semibold mb-1">Título (headline) estratégico:</p>
                        <p className="text-muted-foreground">não repita seu cargo atual. Use frases como "Especialista em Transformação Digital | Ajudo empresas a escalar com automação";</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-[#0077B5]/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0077B5] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <p className="font-semibold mb-1">Resumo narrativo:</p>
                        <p className="text-muted-foreground">conte sua jornada, seus valores, o que te move — não apenas o que você fez;</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-[#0077B5]/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0077B5] text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div>
                        <p className="font-semibold mb-1">Experiências enriquecidas:</p>
                        <p className="text-muted-foreground">inclua mídias, links de projetos, vídeos curtos ou posts relacionados;</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-[#0077B5]/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0077B5] text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                      <div>
                        <p className="font-semibold mb-1">Atividade constante:</p>
                        <p className="text-muted-foreground">publicar, comentar e engajar com conteúdo relevante é tão importante quanto ter um perfil completo.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                O LinkedIn, mais do que um repositório de informações, é um espaço de <strong>demonstração contínua de valor</strong>. Um recrutador que visita seu perfil hoje quer saber não só o que você fez, mas como você pensa.
              </p>

              <Card className="bg-[#0077B5]/5 border-[#0077B5]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-[#0077B5] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Dica de ouro:</p>
                      <p>
                        Use a seção "Sobre" para incluir palavras-chave naturais como "gestão de projetos", "inteligência artificial aplicada ao marketing" ou "liderança ágil" — termos com alto volume de busca no Google Brasil, segundo o SEMrush.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Guia prático de alinhamento */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-[#006B3D]" />
                Diferença entre currículo e perfil no LinkedIn em 2026: um guia prático de alinhamento
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Agora que entendemos os propósitos distintos, como alinhar os dois de forma estratégica? Veja este passo a passo acionável:
              </p>

              {/* Passo 1 */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">Passo 1: Defina seu "núcleo profissional"</h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  Antes de escrever qualquer coisa, identifique:
                </p>
                
                <ul className="space-y-3 mb-6 ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Seu propósito profissional (não confunda com sonho — pense em impacto mensurável);</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Suas áreas de especialização (máximo de 3);</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Seus diferenciais reais (não genéricos como "trabalho em equipe").</span>
                  </li>
                </ul>

                <p className="text-lg leading-relaxed">
                  Esse núcleo será a base comum entre currículo e LinkedIn — mas será expresso de formas diferentes.
                </p>
              </div>

              {/* Passo 2 */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">Passo 2: Adapte o currículo à vaga; mantenha o LinkedIn autêntico</h3>
                
                <ul className="space-y-3 mb-6 ml-6">
                  <li className="flex items-start gap-2">
                    <FileText className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span><strong>Currículo:</strong> varia conforme a empresa, cargo e indústria. Use linguagem técnica e resultados específicos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Linkedin className="w-5 h-5 text-[#0077B5] mt-1 flex-shrink-0" />
                    <span><strong>LinkedIn:</strong> mantém-se estável, mas com atualizações frequentes de conquistas. Aqui, você pode (e deve) mostrar personalidade.</span>
                  </li>
                </ul>

                <Card className="bg-muted/50 mb-6">
                  <CardContent className="pt-6">
                    <p className="font-semibold mb-3">Exemplo prático:</p>
                    <div className="space-y-4">
                      <div className="p-4 bg-background rounded-lg border">
                        <p className="font-semibold text-[#006B3D] mb-2">📄 Currículo para vaga em fintech:</p>
                        <p className="italic text-muted-foreground">
                          "Liderou time de 12 devs na migração de legado para microsserviços, reduzindo custos operacionais em R$1,2 mi/ano."
                        </p>
                      </div>
                      <div className="p-4 bg-background rounded-lg border">
                        <p className="font-semibold text-[#0077B5] mb-2">💼 LinkedIn:</p>
                        <p className="italic text-muted-foreground">
                          "Apaixonado por tecnologia que resolve problemas reais. Recentemente, ajudei uma startup a migrar sua arquitetura e economizar mais de um milhão por ano. Acredito que código limpo + propósito = impacto duradouro. #techparabem #engenhariadesoftware"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#006B3D]/5 border-[#006B3D]/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <ExternalLink className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-2">Saiba mais:</p>
                        <p>
                          Confira nosso artigo sobre <Link to="/blog/perfil-linkedin-recrutadores" className="text-[#006B3D] underline hover:text-[#005a32]">como criar uma marca pessoal profissional autêntica no LinkedIn</Link>.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Passo 3 */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">Passo 3: Use o LinkedIn para testar sua narrativa</h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  O que funciona no LinkedIn (comentários, views, conexões) pode informar ajustes no seu currículo. Por exemplo:
                </p>
                
                <ul className="space-y-3 mb-6 ml-6">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Se posts sobre "gestão de equipes remotas" geram engajamento, isso indica que essa é uma competência valorizada — inclua-a com métricas no currículo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MessageSquare className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Se recrutadores sempre perguntam sobre sua experiência em ESG, talvez valha criar uma seção dedicada no resumo do currículo.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Erros comuns */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-amber-500" />
                Erros comuns que sabotam sua presença profissional
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Mesmo profissionais experientes cometem deslizes que minam sua credibilidade. Veja os mais frequentes:
              </p>

              <div className="space-y-4 mb-8">
                <Card className="border-destructive/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Perfil no LinkedIn desatualizado:</p>
                        <p className="text-muted-foreground">nada pior que um recrutador ver que sua última experiência foi há 3 anos, mas você está empregado.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-destructive/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Currículo genérico:</p>
                        <p className="text-muted-foreground">um único currículo para todas as vagas mostra falta de interesse e preparo.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-destructive/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Incoerência entre os dois:</p>
                        <p className="text-muted-foreground">se no LinkedIn você se apresenta como "inovador digital", mas no currículo só lista tarefas operacionais, a confusão é imediata.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-destructive/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Esquecer o público:</p>
                        <p className="text-muted-foreground">o currículo é lido por humanos (e IA); o LinkedIn, por humanos que querem se conectar com humanos.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg leading-relaxed mb-4">
                Além disso, evite:
              </p>

              <ul className="space-y-2 mb-6 ml-6">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <span>Mentir sobre certificações ou cargos;</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <span>Usar gírias ou informalidade excessiva no currículo;</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <span>Deixar o campo "habilidades" do LinkedIn vazio ou preenchido com termos vagos.</span>
                </li>
              </ul>

              <Card className="bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Atenção:</p>
                      <p>
                        Segundo dados do <strong>Ministério do Trabalho e Emprego (MTE)</strong>, perfis com informações inconsistentes entre plataformas têm <strong>60% menos chances</strong> de serem validados em processos seletivos formais.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quando usar currículo e quando priorizar o LinkedIn */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-[#006B3D]" />
                Quando usar currículo e quando priorizar o LinkedIn?
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                A escolha não é "um ou outro", mas qual ferramenta usar em cada momento.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-[#006B3D]/30">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#006B3D]" />
                      Use o currículo quando:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span className="text-sm">Estiver se candidatando a vagas formais (corporações, órgãos públicos, ONGs);</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span className="text-sm">O processo envolve ATS ou triagem automatizada;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span className="text-sm">A vaga exige documentação específica (como histórico profissional detalhado);</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span className="text-sm">Você busca posições de alta responsabilidade, onde a precisão técnica é crucial.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-[#0077B5]/30">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Linkedin className="w-5 h-5 text-[#0077B5]" />
                      Priorize o LinkedIn quando:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0077B5] mt-1 flex-shrink-0" />
                        <span className="text-sm">Quiser atrair oportunidades passivamente (recrutadores te encontram);</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0077B5] mt-1 flex-shrink-0" />
                        <span className="text-sm">Estiver em transição de carreira e precisar recontar sua história;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0077B5] mt-1 flex-shrink-0" />
                        <span className="text-sm">Desejar criar autoridade em seu setor;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0077B5] mt-1 flex-shrink-0" />
                        <span className="text-sm">Buscar networking estratégico (parcerias, mentoria, clientes).</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg leading-relaxed">
                Na prática, o ideal é manter ambos sempre atualizados, mas com funções complementares. <strong>Seu LinkedIn abre portas; seu currículo as fecha com propostas concretas.</strong>
              </p>
            </section>

            {/* O futuro em 2026: IA */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#006B3D]" />
                O futuro em 2026: como a inteligência artificial muda as regras
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                A chegada de modelos avançados de IA (como os usados pelo <strong>LinkedIn Hiring Insights</strong> e sistemas corporativos como o <strong>Greenhouse</strong> e <strong>Workable</strong>) exigiu uma nova abordagem.
              </p>

              <ul className="space-y-4 mb-6 ml-6">
                <li className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span><strong>Currículos</strong> agora precisam ser otimizados não só para humanos, mas para algoritmos que cruzam dados de desempenho, linguagem e compatibilidade cultural.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span><strong>Perfis no LinkedIn</strong> são analisados por IA para sugerir candidatos "semelhantes" ou prever aderência a equipes.</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed mb-6">
                Isso reforça a importância de <strong>consistência de dados</strong>: datas, cargos, empresas e habilidades devem estar alinhadas. Uma discrepância mínima pode desclassificar você automaticamente.
              </p>

              <Card className="bg-accent/50 border-accent">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <ExternalLink className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Veja também:</p>
                      <p>
                        O guia do <a href="https://www.sp.senai.br/" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] underline hover:text-[#005a32]">Serviço Nacional de Aprendizagem Industrial (SENAI)</a> sobre competências digitais para o mercado de trabalho em 2026.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Checklist final */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-[#006B3D]" />
                Checklist final: alinhando currículo e LinkedIn em 2026
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Antes de sair aplicando, confira esta lista prática:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-[#006B3D]/30">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#006B3D]" />
                      ✅ Currículo
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span className="text-sm">Adaptado à vaga específica</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span className="text-sm">Com métricas claras e resultados</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span className="text-sm">Formato compatível com ATS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span className="text-sm">Palavras-chave da descrição da vaga incluídas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span className="text-sm">Sem erros gramaticais ou de digitação</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-[#0077B5]/30">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Linkedin className="w-5 h-5 text-[#0077B5]" />
                      ✅ LinkedIn
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0077B5] mt-1 flex-shrink-0" />
                        <span className="text-sm">Foto e banner atualizados e profissionais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0077B5] mt-1 flex-shrink-0" />
                        <span className="text-sm">Headline que comunica valor (não só cargo)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0077B5] mt-1 flex-shrink-0" />
                        <span className="text-sm">Resumo com história, propósito e especializações</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0077B5] mt-1 flex-shrink-0" />
                        <span className="text-sm">Habilidades validadas por conexões</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0077B5] mt-1 flex-shrink-0" />
                        <span className="text-sm">Atividade recente (últimos 30 dias)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0077B5] mt-1 flex-shrink-0" />
                        <span className="text-sm">Links úteis (portfólio, artigos, projetos)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg leading-relaxed">
                Se tudo estiver alinhado, você não está apenas se candidatando — está construindo uma <strong>reputação profissional duradoura</strong>.
              </p>
            </section>

            {/* Conclusão */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Conclusão: coerência é a nova vantagem competitiva</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Em 2026, não basta ser qualificado. É preciso ser <strong>reconhecível, confiável e consistente</strong>. A diferença entre currículo e perfil no LinkedIn em 2026 não está nos dados, mas na <strong>intenção</strong> por trás de cada um.
              </p>

              <Card className="bg-muted/50 mb-6">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                      <span>Enquanto o <strong>currículo</strong> responde à pergunta: <em>"Você pode fazer este trabalho?"</em>,</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Linkedin className="w-5 h-5 text-[#0077B5] mt-1 flex-shrink-0" />
                      <span>O <strong>LinkedIn</strong> responde: <em>"Quem é você como profissional — e por que alguém deveria confiar em você?"</em></span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <p className="text-lg leading-relaxed mb-6">
                Quando ambos estão em harmonia, você cria uma presença profissional que não depende apenas de vagas abertas, mas atrai oportunidades de forma orgânica e sustentável.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Se este artigo esclareceu suas dúvidas e lhe deu ferramentas práticas, compartilhe com um colega que está em busca de recolocação ou salve para revisar antes da próxima atualização. E não deixe de explorar outros conteúdos do nosso blog sobre carreira, marca pessoal e futuro do trabalho.
              </p>

              <p className="text-lg leading-relaxed font-semibold">
                Seu futuro profissional está sendo construído agora. Faça valer cada detalhe.
              </p>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <Card className="bg-[#006B3D] text-white">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">
                      Pronto para criar um currículo profissional alinhado ao seu LinkedIn?
                    </h3>
                    <p className="text-lg mb-6 opacity-90">
                      Use nossa ferramenta gratuita e crie um currículo otimizado para ATS em minutos.
                    </p>
                    <Button size="lg" variant="secondary" className="bg-white text-[#006B3D] hover:bg-gray-100" asChild>
                      <Link to="/criar-curriculo">
                        Criar Meu Currículo Grátis
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-[#006B3D]" />
                Perguntas Frequentes (FAQ)
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Qual a principal diferença entre currículo e perfil no LinkedIn em 2026?</h3>
                    <p className="text-muted-foreground">
                      O currículo é um documento estratégico, adaptado a cada vaga, com foco em resultados e palavras-chave. O perfil no LinkedIn é uma plataforma de relacionamento, visibilidade e construção de marca pessoal, com linguagem mais narrativa e humana.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Posso usar o mesmo texto do currículo no LinkedIn?</h3>
                    <p className="text-muted-foreground">
                      Não. Embora os dados básicos (empresas, cargos, datas) devam ser consistentes, a linguagem, estrutura e propósito são diferentes. Copiar o currículo para o LinkedIn reduz o engajamento e a eficácia do perfil.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">O LinkedIn substitui o currículo em 2026?</h3>
                    <p className="text-muted-foreground">
                      Não. O currículo continua essencial para processos seletivos formais, especialmente em empresas grandes, setores regulados e vagas competitivas. O LinkedIn complementa, mas não substitui.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Como atualizar currículo e LinkedIn sem perder tempo?</h3>
                    <p className="text-muted-foreground">
                      Mantenha uma "base mestra" com todas as suas experiências, formações e conquistas. Ao se candidatar a uma vaga, adapte o currículo a partir dessa base. No LinkedIn, atualize mensalmente com novas conquistas, publicações ou validações de habilidades.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Recrutadores olham mais o currículo ou o LinkedIn?</h3>
                    <p className="text-muted-foreground">
                      Depende do contexto. Em processos formais, o currículo é a primeira triagem. Mas 89% dos recrutadores (segundo pesquisa da Fundação Getulio Vargas) consultam o LinkedIn antes de marcar uma entrevista — para validar informações e avaliar presença digital.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Preciso colocar foto no currículo em 2026?</h3>
                    <p className="text-muted-foreground">
                      No Brasil, não é obrigatório, e em muitos setores é até desaconselhado para evitar viés inconsciente. Já no LinkedIn, uma foto profissional é essencial para credibilidade e reconhecimento.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

          </div>

          {/* Author Bio */}
          <AuthorBio />

            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 xl:w-96 flex-shrink-0">
              <BlogSidebar />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticle11;