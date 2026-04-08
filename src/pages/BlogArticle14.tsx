import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BlogSidebar from "@/components/BlogSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, CheckCircle, XCircle, FileText, Target, Briefcase, ArrowLeft, Lightbulb, AlertTriangle, BookOpen, TrendingUp, Eye, Zap, Shield, MessageSquare, Settings, ExternalLink, BarChart3, Users, Search, Award, Brain, Layout, RefreshCw, Quote, Globe, Languages, GraduationCap, FileCheck, PenTool, CheckSquare, Code, Github, Database, Cloud, Terminal, Cpu, Server, Rocket, Wrench, FolderGit2 } from "lucide-react";
import AuthorBio from "@/components/AuthorBio";
import danielPhoto from "@/assets/daniel-olimpio.jpg";
import { Helmet } from "react-helmet";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, articleEntities } from "@/lib/schema";
import RelatedArticles from "@/components/RelatedArticles";

const BlogArticle14 = () => {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Currículo para Área de TI: O Que Priorizar em 2026" }
  ];

  const articleUrl = "/blog/curriculo-ti-priorizar-2026";
  const articleSchema = generateArticleSchema({
    title: "Currículo para Área de TI: O Que Priorizar em 2026",
    description: "Em TI, tecnologias mudam rápido. Descubra o que valorizar hoje: GitHub, certificações, soft skills e projetos — não só linguagens de programação.",
    image: "/blog/curriculo-ti-priorizar-2026.jpg",
    datePublished: "2025-12-19",
    dateModified: "2025-12-19",
    author: { name: "Daniel Olimpio", url: "/sobre" },
    url: articleUrl,
    about: articleEntities[articleUrl],
    relatedLinks: ["/blog/curriculo-vs-linkedin-2026", "/blog/perfil-linkedin-recrutadores", "/blog/profissoes-mais-vagas-brasil-2030"]
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog", url: "/blog" },
    { name: "Currículo para Área de TI: O Que Priorizar em 2026", url: "/blog/curriculo-ti-priorizar-2026" }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "O que colocar no currículo de TI sem experiência profissional?",
      answer: "Priorize projetos pessoais bem estruturados, contribuições open source, hackathons e certificações relevantes. Mostre iniciativa e capacidade de aprendizado rápido."
    },
    {
      question: "GitHub é obrigatório para devs em 2026?",
      answer: "Sim. Para desenvolvedores, o GitHub é tão essencial quanto o LinkedIn. Recrutadores técnicos o usam para avaliar qualidade de código, organização e boas práticas."
    },
    {
      question: "Quais soft skills mais importam em TI hoje?",
      answer: "Comunicação clara (especialmente com não técnicos), colaboração em times remotos, adaptabilidade a mudanças tecnológicas e pensamento crítico na resolução de problemas."
    },
    {
      question: "Devo colocar todas as linguagens de programação que conheço?",
      answer: "Não. Liste apenas as que domina e que são relevantes para a vaga. Melhor ter 3 tecnologias bem demonstradas do que 10 listadas sem contexto."
    },
    {
      question: "Certificação vale mais que experiência prática?",
      answer: "Depende do nível. Para iniciantes, certificações abrem portas. Para perfis sênior, projetos reais e impacto mensurável pesam mais. O ideal é combinar ambas."
    },
    {
      question: "Como deixar meu currículo de TI compatível com ATS?",
      answer: "Use palavras-chave da descrição da vaga, evite gráficos, colunas ou ícones, salve em PDF com texto selecionável e mantenha estrutura simples (sem cabeçalhos flutuantes)."
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Currículo TI 2026: O Que Priorizar ✓ Guia Dev</title>
        <meta name="description" content="Dev, analista ou DevOps? Veja o que colocar no currículo de TI em 2026: GitHub, certificações, projetos reais e as skills que recrutadores realmente buscam." />
        <link rel="canonical" href="https://fazercurriculo.com/blog/curriculo-ti-priorizar-2026" />
        <meta property="og:title" content="Currículo para Área de TI: O Que Priorizar em 2026" />
        <meta property="og:description" content="Em TI, tecnologias mudam rápido. Descubra o que valorizar hoje: GitHub, certificações, soft skills e projetos — não só linguagens de programação." />
        <meta property="og:url" content="https://fazercurriculo.com/blog/curriculo-ti-priorizar-2026" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://fazercurriculo.com/blog/curriculo-ti-priorizar-2026.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Currículo para Área de TI: O Que Priorizar em 2026" />
        <meta name="twitter:description" content="Em TI, tecnologias mudam rápido. Descubra o que valorizar hoje: GitHub, certificações, soft skills e projetos — não só linguagens de programação." />
        <meta name="twitter:image" content="https://fazercurriculo.com/blog/curriculo-ti-priorizar-2026.jpg" />
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
                TI
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Currículo para Área de TI: O Que Priorizar em 2026
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Em TI, tecnologias mudam rápido. Descubra o que valorizar hoje: GitHub, certificações, soft skills e projetos — não só linguagens de programação.
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
                <span>22 min de leitura</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src="/blog/curriculo-ti-priorizar-2026.jpg" 
              alt="Currículo para Área de TI: O Que Priorizar em 2026"
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
              <p className="font-semibold text-foreground">Daniel Olímpio</p>
              <p className="text-sm text-muted-foreground">Especialista em Carreiras e Desenvolvimento Profissional</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <p className="text-lg leading-relaxed mb-6">
              Você já sentiu aquela sensação de que, por mais que estude, faça cursos e atualize seu currículo com as últimas linguagens de programação, ainda assim parece estar "desatualizado" diante do que o mercado de TI exige? Se sim, saiba que não está sozinho. Em um setor onde tecnologias surgem, evoluem e desaparecem em questão de meses, manter um currículo para área de TI alinhado com as reais prioridades das empresas em 2026 é um desafio constante — mas longe de ser impossível.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              A verdade é que as empresas já não buscam apenas quem sabe Python, JavaScript ou Java. Hoje, elas querem profissionais que combinem <strong>projetos reais</strong>, <strong>certificações reconhecidas</strong>, <strong>soft skills sólidas</strong> e, acima de tudo, capacidade de entregar valor mensurável. O código é importante, sim — mas é só uma parte do quebra-cabeça.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Neste artigo, vamos destrinchar exatamente o que priorizar no seu currículo para área de TI em 2026. Vamos além da lista de linguagens e mergulhar no que recrutadores de startups, scale-ups e grandes corporações realmente procuram: desde a relevância do seu perfil no GitHub até como demonstrar pensamento crítico, colaboração e adaptabilidade. Tudo isso com exemplos práticos, dicas acionáveis e insights baseados em tendências reais do mercado brasileiro e global.
            </p>

            <Card className="border-l-4 border-l-[#006B3D] bg-[#006B3D]/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#006B3D] flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Se você quer que seu currículo não só seja lido, mas gere entrevistas — mesmo em um cenário competitivo —, continue lendo. Este pode ser o guia definitivo que faltava.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 1 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <RefreshCw className="w-8 h-8 text-[#006B3D]" />
              Por que o currículo de TI mudou (e continua mudando)
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Lembro-me de 2018, quando bastava listar "Node.js, React e MongoDB" no LinkedIn para receber dezenas de mensagens de recrutadores. Hoje, esse mesmo perfil, sem contexto, pode passar despercebido. Por quê?
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Porque a demanda por devs cresceu exponencialmente, e com ela, a maturidade das empresas na hora de avaliar talentos. Segundo o <a href="https://cetic.br/" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline">Relatório de Tendências em TI do Cetic.br</a>, o Brasil encerrou 2024 com mais de 600 mil vagas abertas na área — mas o número de candidatos qualificados também explodiu. A diferença agora está na <strong>qualidade da apresentação</strong> e na <strong>capacidade de demonstrar impacto</strong>, não apenas conhecimento.
            </p>

            <Card className="border-l-4 border-l-amber-500 bg-amber-500/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Recrutadores não querem saber apenas <strong>o que você sabe</strong>, mas <strong>como você usou esse conhecimento</strong> para resolver problemas reais. E isso muda completamente a lógica de um bom currículo para área de TI.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Layout className="w-8 h-8 text-[#006B3D]" />
              Estrutura essencial: o que não pode faltar em 2026
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Antes de mergulhar nos detalhes, é crucial entender que um currículo moderno de TI deve ser <strong>orientado a resultados</strong>, <strong>personalizável por vaga</strong> e <strong>otimizado para sistemas ATS</strong> (Applicant Tracking Systems). Isso significa: evite designs extravagantes, use palavras-chave da descrição da vaga e mantenha a clareza acima de tudo.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Abaixo, os elementos-chave que todo currículo para área de TI deve conter em 2026:
            </p>

            {/* Element 1 */}
            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              1. Informações de contato profissionais
            </h3>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Nome completo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>E-mail profissional (nada de "xandinho123@email.com")</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>LinkedIn atualizado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span><strong>GitHub (obrigatório para devs)</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Localização (ex: "São Paulo – Remoto" ou "Disponível para mudanças")</span>
              </li>
            </ul>

            {/* Element 2 */}
            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              2. Resumo profissional focado em valor
            </h3>

            <p className="text-lg leading-relaxed mb-6">
              Um parágrafo curto (3–4 linhas) que conecte suas habilidades técnicas com resultados. Evite adjetivos genéricos como "apaixonado por tecnologia". Em vez disso:
            </p>

            <Card className="bg-muted/30 mb-8">
              <CardContent className="p-6">
                <p className="text-muted-foreground italic">
                  "Desenvolvedor full-stack com mais de 4 anos construindo aplicações web escaláveis usando React e Node.js. Reduzi o tempo de resposta da API em 60% e liderei uma equipe que entregou 3 MVPs em 2024, todos agora em produção com mais de 50 mil usuários ativos."
                </p>
              </CardContent>
            </Card>

            {/* Element 3 */}
            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              3. Projetos reais (com link e métricas)
            </h3>

            <p className="text-lg leading-relaxed mb-6">
              Muito mais do que listas de cursos, projetos no GitHub mostram sua capacidade prática. Priorize aqueles que:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Estão em produção ou simulem um cenário real</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Incluem README bem documentado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Demonstram boas práticas (testes, CI/CD, arquitetura limpa)</span>
              </li>
            </ul>

            <Card className="border-l-4 border-l-[#006B3D] bg-[#006B3D]/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-[#006B3D] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#006B3D] mb-2">Dica:</p>
                    <p className="text-muted-foreground">
                      Se você não tem experiência profissional, transforme seus projetos acadêmicos ou pessoais em "mini-produtos" com propósito claro.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Element 4 */}
            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              4. Experiência profissional com foco em impacto
            </h3>

            <p className="text-lg leading-relaxed mb-6">
              Use a fórmula: <strong>AÇÃO + TECNOLOGIA + RESULTADO</strong>.
            </p>

            <Card className="bg-muted/30 mb-6">
              <CardContent className="p-6">
                <p className="font-semibold mb-3">Exemplos:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• "Implementei testes automatizados com Jest e Cypress, reduzindo relatórios de bugs em 45% após o deploy."</li>
                  <li>• "Migrei monolito legado para microsserviços usando Docker e Kubernetes, cortando custos de servidor em 30%."</li>
                </ul>
              </CardContent>
            </Card>

            {/* Element 5 */}
            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              5. Certificações relevantes (não todas!)
            </h3>

            <p className="text-lg leading-relaxed mb-6">
              Em 2026, certificações ainda importam — mas só as que têm reconhecimento real no mercado. Veja as mais valorizadas por área:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-4 text-left font-semibold">Área</th>
                    <th className="border border-border p-4 text-left font-semibold">Certificações Recomendadas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-4 font-medium">
                      <div className="flex items-center gap-2">
                        <Cloud className="w-5 h-5 text-[#006B3D]" />
                        Cloud
                      </div>
                    </td>
                    <td className="border border-border p-4 text-muted-foreground">AWS Certified Solutions Architect, Google Professional Cloud Developer, Azure Fundamentals</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4 font-medium">
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-[#006B3D]" />
                        Segurança
                      </div>
                    </td>
                    <td className="border border-border p-4 text-muted-foreground">CEH, CompTIA Security+</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 font-medium">
                      <div className="flex items-center gap-2">
                        <Server className="w-5 h-5 text-[#006B3D]" />
                        DevOps
                      </div>
                    </td>
                    <td className="border border-border p-4 text-muted-foreground">Certified Kubernetes Administrator (CKA), DevOps Institute certifications</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4 font-medium">
                      <div className="flex items-center gap-2">
                        <Database className="w-5 h-5 text-[#006B3D]" />
                        Dados
                      </div>
                    </td>
                    <td className="border border-border p-4 text-muted-foreground">Google Data Analytics, Microsoft Certified: Azure Data Scientist</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="border-l-4 border-l-amber-500 bg-amber-500/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Evite listar certificados de cursos de 2 horas do YouTube com selo "conclusão". Isso pode gerar o efeito contrário. O <a href="https://www.gov.br/trabalho-e-emprego/" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline">Catálogo Nacional de Qualificações Profissionais do Ministério do Trabalho</a> inclui várias certificações internacionais reconhecidas no Brasil — vale consultar antes de investir.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 - GitHub */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Github className="w-8 h-8 text-[#006B3D]" />
              GitHub: seu portfólio técnico (e como não sabotá-lo)
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Seu GitHub não é um depósito de códigos. É seu <strong>portfólio profissional</strong>. Recrutadores técnicos abrem seu perfil antes mesmo de ler seu currículo — e muitos decidem ali se avançam ou não no processo.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              Erros comuns que vejo com frequência:
            </h3>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Repositórios vazios com apenas "Hello World"</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Nenhum README ou um README genérico ("Projeto de curso")</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Código sem formatação, sem testes e sem commits significativos</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              Como deixar seu GitHub impecável:
            </h3>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Tenha <strong>3–5 projetos relevantes</strong> — qualidade {">"} quantidade</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Escreva um README como se fosse um produto: problema resolvido, tecnologias usadas, como rodar, screenshots</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Use commits descritivos: "feat: add user login flow" em vez de "ajustes"</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Inclua testes e pipelines — mesmo que simples, mostra maturidade</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Mantenha o perfil ativo — commits esporádicos são piores que perfil parado com bons projetos</span>
              </li>
            </ul>

            <Card className="bg-gradient-to-r from-[#006B3D]/10 to-[#006B3D]/5 border-[#006B3D]/20 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-[#006B3D] flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground italic">
                    Recentemente, ajudei um aluno a reestruturar seu GitHub. Ele tinha mais de 20 repositórios, mas só 2 eram realmente bons. Sugeri que arquivasse os demais e focasse em documentar bem os principais. Resultado? <strong>Entrevistas em 3 empresas em 2 semanas.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 4 - Soft Skills */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-[#006B3D]" />
              Soft skills em TI: não é "balela corporativa"
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              "Soft skills" virou uma dessas expressões que muitos devs torcem o nariz. Mas a realidade é que, em 2026, comunicar-se bem, colaborar e resolver conflitos são tão técnicas quanto escrever um algoritmo eficiente.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Segundo pesquisa da <a href="https://softex.br/" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline">Softex Brasil</a>, <strong>78% das empresas de TI</strong> consideram a capacidade de trabalhar em equipe um fator decisivo na contratação — especialmente em times remotos ou híbridos.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              Como demonstrar soft skills no currículo (sem soar forçado):
            </h3>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#006B3D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageSquare className="w-4 h-4 text-[#006B3D]" />
                </div>
                <div>
                  <span className="font-semibold">Comunicação:</span>
                  <span className="text-muted-foreground"> "Apresentei soluções técnicas para stakeholders não técnicos, garantindo aprovação para upgrade de infraestrutura de R$ 1 milhão"</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#006B3D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <RefreshCw className="w-4 h-4 text-[#006B3D]" />
                </div>
                <div>
                  <span className="font-semibold">Adaptabilidade:</span>
                  <span className="text-muted-foreground"> "Pivotei a stack do projeto de Angular para React no meio do ciclo para alinhar com a padronização da empresa"</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#006B3D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-[#006B3D]" />
                </div>
                <div>
                  <span className="font-semibold">Liderança:</span>
                  <span className="text-muted-foreground"> "Mentorei 2 desenvolvedores juniores através de code reviews e pair programming, reduzindo o tempo de onboarding em 40%"</span>
                </div>
              </li>
            </ul>

            <Card className="border-l-4 border-l-[#006B3D] bg-[#006B3D]/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-[#006B3D] flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Você não precisa escrever "tenho boas soft skills". <strong>Mostre por meio de ações.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 5 - O que NÃO priorizar */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-[#006B3D]" />
              O que NÃO priorizar em 2026 (apesar do que dizem por aí)
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Muitos sites ainda insistem em dicas ultrapassadas. Abaixo, o que você deve <strong>evitar</strong> no seu currículo para área de TI este ano:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="border-l-4 border-l-red-500 bg-red-500/5">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="font-semibold text-red-600">Listar todas as linguagens</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Se você fez um curso básico de Rust há dois anos e nunca usou, não coloque. Melhor focar em 3–5 tecnologias que domina.</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500 bg-red-500/5">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="font-semibold text-red-600">Objetivos genéricos</span>
                  </div>
                  <p className="text-sm text-muted-foreground">"Buscar crescimento profissional" ocupa espaço útil. Substitua por um resumo de valor.</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500 bg-red-500/5">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="font-semibold text-red-600">Foto, data de nascimento, estado civil</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Além de desnecessário, pode gerar viés inconsciente — especialmente em empresas globais.</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500 bg-red-500/5">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="font-semibold text-red-600">PDF com formatação quebrada</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Use fontes simples (Arial, Calibri), evite colunas e tabelas, e teste em ferramentas como Jobscan.</p>
                </CardContent>
              </Card>
            </div>

            {/* Section 6 - Projetos pessoais */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Rocket className="w-8 h-8 text-[#006B3D]" />
              Projetos pessoais: seu trunfo contra a falta de experiência
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Se você está começando na área, não tem experiência formal, ou está migrando de outra carreira, projetos pessoais são sua maior arma.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Mas não qualquer projeto. O que impressiona é aquele que <strong>resolve um problema real</strong> — mesmo que pequeno.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              Exemplos reais que já vi gerarem entrevistas:
            </h3>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Terminal className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Um bot do Discord que ajuda comunidades de jogos a gerenciar eventos</span>
              </li>
              <li className="flex items-start gap-3">
                <Code className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Uma extensão do Chrome que bloqueia distrações com base em horário e produtividade</span>
              </li>
              <li className="flex items-start gap-3">
                <Database className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Uma API REST que consolida dados de criptomoedas com cache e rate limiting</span>
              </li>
            </ul>

            <p className="text-lg leading-relaxed mb-6">
              O segredo? <strong>Conte uma história no currículo:</strong>
            </p>

            <Card className="bg-muted/30 mb-8">
              <CardContent className="p-6">
                <p className="text-muted-foreground italic">
                  "Desenvolvi o 'FocusBlock' – uma extensão de navegador que usa machine learning para detectar padrões de procrastinação e sugere sessões de trabalho focado. Publicado para mais de 1.200 usuários com avaliação de 4.7/5 na Chrome Web Store."
                </p>
              </CardContent>
            </Card>

            <p className="text-lg leading-relaxed mb-8">
              Isso mostra iniciativa, pensamento de produto e habilidade técnica — tudo em uma linha.
            </p>

            {/* Section 7 - Certificações */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-[#006B3D]" />
              Certificações que realmente abrem portas em 2026
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Nem todas as certificações valem o mesmo. Algumas são quase "moeda corrente" em processos seletivos. Outras, pura enfeite.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Abaixo, um mapa rápido do que priorizar por trilha:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="bg-[#006B3D]/5 border-[#006B3D]/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-5 h-5 text-[#006B3D]" />
                    <span className="font-semibold text-[#006B3D]">🔹 Desenvolvimento</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• AWS Certified Developer – Associate</li>
                    <li>• Microsoft Certified: Azure Developer Associate</li>
                    <li>• Google Associate Cloud Engineer</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#006B3D]/5 border-[#006B3D]/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-[#006B3D]" />
                    <span className="font-semibold text-[#006B3D]">🔹 Segurança da Informação</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• CompTIA Security+ (ótimo para iniciantes)</li>
                    <li>• Certified Ethical Hacker (CEH)</li>
                    <li>• CISSP (para perfis sênior)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#006B3D]/5 border-[#006B3D]/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-5 h-5 text-[#006B3D]" />
                    <span className="font-semibold text-[#006B3D]">🔹 Dados e IA</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Google Professional Data Engineer</li>
                    <li>• Microsoft Certified: Azure AI Engineer</li>
                    <li>• TensorFlow Developer Certificate</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#006B3D]/5 border-[#006B3D]/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Server className="w-5 h-5 text-[#006B3D]" />
                    <span className="font-semibold text-[#006B3D]">🔹 Infraestrutura / DevOps</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Certified Kubernetes Administrator (CKA)</li>
                    <li>• HashiCorp Certified: Terraform Associate</li>
                    <li>• AWS Certified DevOps Engineer</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              Invista primeiro naquelas alinhadas à sua carreira — e inclua <strong>data de validade</strong> (ex: "Valid until Dec 2027").
            </p>

            {/* Section 8 - Adaptar por vaga */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-[#006B3D]" />
              Adapte seu currículo para cada vaga (sim, é necessário)
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Copiar e colar o mesmo currículo em 50 vagas raramente funciona. Em 2026, a personalização é <strong>não negociável</strong>.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Antes de aplicar, faça:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Leia a descrição da vaga com atenção — identifique as <strong>5 palavras-chave técnicas mais repetidas</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Adapte seu resumo para refletir essas palavras (ex: se pedem "CI/CD", mencione "built CI/CD pipelines with GitHub Actions")</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Reordene suas habilidades — coloque as tecnologias da vaga no topo da lista</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Inclua termos do setor — fintech, healthtech, govtech exigem vocabulários diferentes</span>
              </li>
            </ul>

            <Card className="border-l-4 border-l-[#006B3D] bg-[#006B3D]/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-[#006B3D] flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Essa prática aumenta em até <strong>40%</strong> a chance de passar por filtros automatizados, segundo estudo do <a href="https://business.linkedin.com/talent-solutions" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline">LinkedIn Talent Solutions</a>.
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg leading-relaxed mb-8">
              Quer um modelo prático? Veja nosso artigo com <Link to="/blog/preparar-curriculo-sistemas-ats" className="text-[#006B3D] hover:underline font-semibold">modelo de currículo para área de TI em 2026 — editável e ATS-friendly</Link>.
            </p>

            {/* Checklist */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <CheckSquare className="w-8 h-8 text-[#006B3D]" />
              Checklist definitivo: seu currículo está pronto para 2026?
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Antes de enviar, responda com honestidade:
            </p>

            <Card className="bg-[#006B3D]/5 border-[#006B3D]/20 mb-8">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0" />
                    <span>Meus projetos no GitHub estão bem documentados e funcionais?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0" />
                    <span>Minhas conquistas têm números ou métricas claras?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0" />
                    <span>Removi tecnologias que não domino só para "encher" o currículo?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0" />
                    <span>Incluí apenas certificações reconhecidas e válidas?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0" />
                    <span>Testei meu PDF em um leitor de tela ou ATS simulator?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0" />
                    <span>Meu resumo responde: "Por que essa empresa deveria me contratar?"</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <p className="text-lg leading-relaxed mb-8">
              Se a maioria for "sim", você está à frente de <strong>80% dos candidatos</strong>.
            </p>

            {/* Conclusion */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-[#006B3D]" />
              Conclusão: seu currículo de TI é seu produto mais importante
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Em 2026, seu currículo para área de TI não é um registro do que você fez — é uma <strong>proposta de valor</strong>. Ele deve responder, em poucas linhas, por que você é a melhor pessoa para resolver os problemas daquela empresa.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Tecnologias mudam. Frameworks vêm e vão. Mas a capacidade de <strong>entregar, comunicar e evoluir</strong> é eterna. Foque nisso, e seu currículo não só passará pelos filtros — ele será lembrado.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Se este artigo ajudou, compartilhe com colegas que estão na jornada. E não deixe de explorar outros conteúdos do blog, como <Link to="/blog/perfil-linkedin-recrutadores" className="text-[#006B3D] hover:underline font-semibold">como se preparar para entrevistas técnicas em empresas de tecnologia</Link>.
            </p>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-[#006B3D] to-[#005a32] text-white mb-12">
              <CardContent className="p-8 text-center">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-3">
                  Pronto para criar seu currículo de TI?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Utilize nossa ferramenta gratuita para criar um currículo profissional, otimizado para ATS e que destaca suas habilidades técnicas.
                </p>
                <Button asChild size="lg" className="bg-white text-[#006B3D] hover:bg-white/90">
                  <Link to="/criar-curriculo">
                    Criar Meu Currículo Agora
                    <FileText className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold mt-12 mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-[#006B3D]" />
              Perguntas Frequentes (FAQ)
            </h2>

            <div className="space-y-6 mb-12">
              <Card className="border border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">1. O que colocar no currículo de TI sem experiência profissional?</h3>
                  <p className="text-muted-foreground">
                    Priorize projetos pessoais bem estruturados, contribuições open source, hackathons e certificações relevantes. Mostre iniciativa e capacidade de aprendizado rápido.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">2. GitHub é obrigatório para devs em 2026?</h3>
                  <p className="text-muted-foreground">
                    Sim. Para desenvolvedores, o GitHub é tão essencial quanto o LinkedIn. Recrutadores técnicos o usam para avaliar qualidade de código, organização e boas práticas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">3. Quais soft skills mais importam em TI hoje?</h3>
                  <p className="text-muted-foreground">
                    Comunicação clara (especialmente com não técnicos), colaboração em times remotos, adaptabilidade a mudanças tecnológicas e pensamento crítico na resolução de problemas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">4. Devo colocar todas as linguagens de programação que conheço?</h3>
                  <p className="text-muted-foreground">
                    Não. Liste apenas as que domina e que são relevantes para a vaga. Melhor ter 3 tecnologias bem demonstradas do que 10 listadas sem contexto.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">5. Certificação vale mais que experiência prática?</h3>
                  <p className="text-muted-foreground">
                    Depende do nível. Para iniciantes, certificações abrem portas. Para perfis sênior, projetos reais e impacto mensurável pesam mais. O ideal é combinar ambas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">6. Como deixar meu currículo de TI compatível com ATS?</h3>
                  <p className="text-muted-foreground">
                    Use palavras-chave da descrição da vaga, evite gráficos, colunas ou ícones, salve em PDF com texto selecionável e mantenha estrutura simples (sem cabeçalhos flutuantes).
                  </p>
                </CardContent>
              </Card>
            </div>

          </div>

          <RelatedArticles currentUrl={articleUrl} />

          {/* Author Bio */}
          <AuthorBio />

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

export default BlogArticle14;
