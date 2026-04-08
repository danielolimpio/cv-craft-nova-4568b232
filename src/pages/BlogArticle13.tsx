import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BlogSidebar from "@/components/BlogSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, CheckCircle, XCircle, FileText, Target, Briefcase, ArrowLeft, Lightbulb, AlertTriangle, BookOpen, TrendingUp, Eye, Zap, Shield, MessageSquare, Settings, ExternalLink, BarChart3, Users, Search, Award, Brain, Layout, RefreshCw, Quote, Globe, Languages, GraduationCap, FileCheck, PenTool, CheckSquare } from "lucide-react";
import AuthorBio from "@/components/AuthorBio";
import danielPhoto from "@/assets/daniel-olimpio.jpg";
import { Helmet } from "react-helmet";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

const BlogArticle13 = () => {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Currículo em Inglês: Estrutura, Erros Comuns e Exemplos" }
  ];

  const articleSchema = generateArticleSchema({
    title: "Currículo em Inglês: Estrutura, Erros Comuns e Exemplos",
    description: "Como montar um currículo em inglês para multinacionais: estrutura padrão internacional, termos técnicos e erros gramaticais que prejudicam sua imagem.",
    image: "/blog/curriculo-ingles-estrutura-erros.jpg",
    datePublished: "2025-12-19",
    dateModified: "2025-12-19",
    author: {
      name: "Daniel Olimpio",
      url: "/sobre"
    },
    url: "/blog/curriculo-ingles-estrutura-erros"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog", url: "/blog" },
    { name: "Currículo em Inglês: Estrutura, Erros Comuns e Exemplos", url: "/blog/curriculo-ingles-estrutura-erros" }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "Qual a diferença entre CV e resume em inglês?",
      answer: "Nos EUA e Canadá, resume é um documento curto (1–2 páginas) focado em experiência profissional relevante. CV (Curriculum Vitae) é mais detalhado, usado em contextos acadêmicos ou na Europa, e pode ter várias páginas."
    },
    {
      question: "Posso colocar foto no currículo em inglês?",
      answer: "Não. Em países como EUA, Canadá, Reino Unido e Austrália, incluir foto é desencorajado e pode até gerar viés inconsciente. Remova-a para vagas internacionais."
    },
    {
      question: "Quantas páginas deve ter um currículo em inglês?",
      answer: "Idealmente 1 página para até 10 anos de experiência; 2 páginas para profissionais seniores ou com carreira extensa. Nunca ultrapasse 2 páginas para vagas corporativas."
    },
    {
      question: "Preciso traduzir meu diploma no currículo em inglês?",
      answer: "Não é obrigatório, mas é recomendável usar a nomenclatura equivalente (ex: 'Bachelor's Degree in Business Administration'). Evite traduções literais como 'Superior Completo'."
    },
    {
      question: "O que é ATS e como meu currículo em inglês pode passar por ele?",
      answer: "ATS (Applicant Tracking System) é um software que filtra currículos com base em palavras-chave. Para passar: use termos da descrição da vaga, evite colunas ou gráficos complexos e salve em PDF (a menos que a vaga peça Word)."
    },
    {
      question: "Como escrever 'estou disponível para mudanças' em inglês no currículo?",
      answer: "Inclua no cabeçalho: 'Open to relocation' ou 'Available for international positions'. Evite frases longas — seja direto."
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Currículo em Inglês: Estrutura + Exemplos Prontos [2026]</title>
        <meta name="description" content="Vai se candidatar a vagas internacionais? Veja a estrutura correta do currículo em inglês, erros comuns de brasileiros e exemplos prontos para copiar." />
        <link rel="canonical" href="https://fazercurriculo.com/blog/curriculo-ingles-estrutura-erros" />
        <meta property="og:title" content="Currículo em Inglês: Estrutura, Erros Comuns e Exemplos" />
        <meta property="og:description" content="Como montar um currículo em inglês para multinacionais: estrutura padrão internacional, termos técnicos e erros gramaticais que prejudicam sua imagem." />
        <meta property="og:url" content="https://fazercurriculo.com/blog/curriculo-ingles-estrutura-erros" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://fazercurriculo.com/blog/curriculo-ingles-estrutura-erros.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Currículo em Inglês: Estrutura, Erros Comuns e Exemplos" />
        <meta name="twitter:description" content="Como montar um currículo em inglês para multinacionais: estrutura padrão internacional, termos técnicos e erros gramaticais que prejudicam sua imagem." />
        <meta name="twitter:image" content="https://fazercurriculo.com/blog/curriculo-ingles-estrutura-erros.jpg" />
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
                Inglês
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Currículo em Inglês: Estrutura, Erros Comuns e Exemplos
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Como montar um currículo em inglês para multinacionais: estrutura padrão internacional, termos técnicos e erros gramaticais que prejudicam sua imagem.
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
              src="/blog/curriculo-ingles-estrutura-erros.jpg" 
              alt="Currículo em Inglês: Estrutura, Erros Comuns e Exemplos"
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
              Você já passou horas revisando seu currículo, ajustando cada detalhe, só para descobrir, dias depois, que cometeu um erro básico de gramática em inglês? Ou pior: que a estrutura que você usou parece desalinhada com o que empresas internacionais esperam? Se sim, saiba que você não está sozinho. Milhões de profissionais brasileiros enfrentam esse desafio — especialmente quando o objetivo é conquistar uma vaga em multinacionais, startups globais ou até mesmo programas de trainee no exterior.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Montar um currículo em inglês não é simplesmente traduzir seu CV do português. Trata-se de adaptar não só o idioma, mas também o formato, o tom e até a lógica de apresentação às expectativas culturais e profissionais de mercados anglo-saxões. Um documento mal estruturado pode fazer com que seu perfil seja descartado antes mesmo de um recrutador ler suas qualificações.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Neste artigo, vamos desmistificar o processo de criação de um currículo em inglês com foco em multinacionais. Você aprenderá a estrutura internacional padrão, os termos técnicos mais usados, os erros gramaticais mais comuns (e como evitá-los) e verá exemplos práticos que ilustram exatamente o que funciona — e o que não funciona. A ideia é que, ao final da leitura, você tenha todas as ferramentas para construir um documento profissional, claro e competitivo, capaz de abrir portas fora do Brasil.
            </p>

            {/* Section 1 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Globe className="w-8 h-8 text-[#006B3D]" />
              Por que um currículo em inglês exige abordagem diferente?
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Imagine entregar um currículo perfeitamente redigido em inglês, com experiência relevante e formação adequada, mas com uma estrutura que lembra mais um relatório acadêmico do que um documento profissional. É como ir a uma entrevista de negócios de terno em um país onde o business casual é a norma: você até se esforçou, mas passou uma impressão errada.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Nos Estados Unidos, Canadá, Reino Unido e outros países anglófonos, o currículo em inglês — ou resume, como é mais comumente chamado — segue convenções bem específicas. Ele é mais enxuto, direto e orientado a resultados do que o modelo brasileiro, que ainda carrega traços de formalidade excessiva e informações pessoais desnecessárias.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Um erro comum é incluir dados como estado civil, foto ou data de nascimento. Em muitos países de língua inglesa, isso pode até ser considerado discriminatório ou antiético. Por isso, compreender essas nuances culturais é tão importante quanto dominar a língua.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Se você está buscando oportunidades internacionais, vale a pena investir tempo em entender o que os recrutadores esperam. E, sim: isso inclui escolher entre CV e resume — sim, há diferença.
            </p>

            <Card className="border-l-4 border-l-[#006B3D] bg-[#006B3D]/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-[#006B3D] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#006B3D] mb-2">Dica rápida:</p>
                    <p className="text-muted-foreground">
                      Nos EUA e Canadá, usa-se <strong>resume</strong> (até 2 páginas). Na Europa, Oriente Médio e setores acadêmicos, o termo <strong>CV (Curriculum Vitae)</strong> é mais comum e pode ser mais extenso. Para vagas em multinacionais com sede nos EUA, prefira sempre resume.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Layout className="w-8 h-8 text-[#006B3D]" />
              Estrutura internacional de um currículo em inglês: O que não pode faltar
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Não existe uma única "fórmula mágica" válida para todos os setores, mas há uma estrutura base amplamente aceita em mercados globais. Abaixo, detalho os elementos essenciais — e como organizá-los de forma estratégica.
            </p>

            {/* Contact Information */}
            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              1. Contact Information (Informações de contato)
            </h3>

            <p className="text-lg leading-relaxed mb-6">
              Comece com seu nome completo, seguido por e-mail profissional, número de telefone com código do país e localização geral (ex: "São Paulo, Brazil" ou "Remote – Available for relocation"). Não inclua CPF, RG ou endereço residencial completo.
            </p>

            <Card className="bg-muted/30 mb-6">
              <CardContent className="p-6">
                <p className="font-semibold mb-3">Exemplo:</p>
                <div className="bg-background p-4 rounded-lg font-mono text-sm">
                  <p className="font-bold">Ana Silva</p>
                  <p>anasilva.professional@email.com | +55 11 99999-8888 | São Paulo, Brazil</p>
                  <p>LinkedIn: linkedin.com/in/anasilva-professional</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-500 bg-amber-500/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Evite e-mails como "amorzinho123@email.com" — isso ainda é mais comum do que se imagina e prejudica seriamente sua credibilidade.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Professional Summary */}
            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              2. Professional Summary (ou Career Summary)
            </h3>

            <p className="text-lg leading-relaxed mb-6">
              Um parágrafo curto (3 a 4 linhas) que resume quem você é, sua expertise principal e o valor que traz. Use verbos de ação e evite adjetivos genéricos como "hardworking" ou "team player".
            </p>

            <Card className="bg-muted/30 mb-6">
              <CardContent className="p-6">
                <p className="font-semibold mb-3">Exemplo:</p>
                <p className="text-muted-foreground italic">
                  "Results-driven marketing specialist with 6+ years of experience in digital strategy and brand development for tech startups. Proven track record in increasing user acquisition by 150% in 12 months and leading cross-functional teams across LATAM and EMEA regions."
                </p>
              </CardContent>
            </Card>

            <p className="text-lg leading-relaxed mb-8">
              Se você está em início de carreira, pode substituir isso por um <strong>Career Objective</strong>, mas mantenha-o focado na empresa, não em você: "Seeking to leverage data analysis skills to support growth initiatives at a global SaaS company."
            </p>

            {/* Work Experience */}
            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              3. Work Experience
            </h3>

            <p className="text-lg leading-relaxed mb-6">
              Liste suas experiências em ordem cronológica reversa (a mais recente primeiro). Para cada posição, inclua:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Cargo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Nome da empresa e localização</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>Período (mês/ano – mês/ano ou "Present")</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span>3 a 5 bullet points com conquistas mensuráveis</span>
              </li>
            </ul>

            <p className="text-lg leading-relaxed mb-6">
              Aqui está o pulo do gato: use o método <strong>STAR</strong> (Situation, Task, Action, Result) adaptado para bullet points. Foque em ações e resultados, não em responsabilidades.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-l-4 border-l-red-500 bg-red-500/5">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="font-semibold text-red-600">Evite</span>
                  </div>
                  <p className="text-sm text-muted-foreground">"Responsible for managing social media accounts."</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-green-500 bg-green-500/5">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-green-600">Prefira</span>
                  </div>
                  <p className="text-sm text-muted-foreground">"Increased Instagram engagement by 85% in 6 months through targeted content strategy and influencer partnerships."</p>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              Verbos no passado para experiências concluídas ("managed", "led", "developed") e no presente para cargos atuais ("manage", "spearhead", "optimize").
            </p>

            {/* Education */}
            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              4. Education
            </h3>

            <p className="text-lg leading-relaxed mb-6">
              Formação acadêmica: instituição, grau (ex: "Bachelor of Science in Computer Engineering"), localização e ano de conclusão (ou "Expected 2026").
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Se sua média for alta (acima de 3.5/4.0 ou equivalente), inclua. Caso contrário, omita.
            </p>

            {/* Skills */}
            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              5. Skills
            </h3>

            <p className="text-lg leading-relaxed mb-6">
              Separe em categorias se necessário: Technical Skills, Languages, Soft Skills. Liste apenas aquilo que você domina — recrutadores testam.
            </p>

            <Card className="bg-muted/30 mb-8">
              <CardContent className="p-6">
                <p className="font-semibold mb-3">Exemplo:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Technical:</strong> Python, SQL, Tableau, Google Analytics, Salesforce</li>
                  <li><strong>Languages:</strong> English (Fluent), Portuguese (Native), Spanish (Intermediate)</li>
                  <li><strong>Certifications:</strong> Google Data Analytics Professional Certificate (2024), PMP (2023)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Optional Sections */}
            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              6. Seções opcionais (mas estratégicas)
            </h3>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <Briefcase className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span><strong>Projects:</strong> especialmente útil para áreas como TI, design ou engenharia.</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span><strong>Volunteering:</strong> mostra valores e liderança — importante em culturas corporativas ESG-driven.</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span><strong>Publications / Awards:</strong> relevante para áreas acadêmicas ou criativas.</span>
              </li>
            </ul>

            <p className="text-lg leading-relaxed mb-8">
              Evite "Hobbies" a menos que sejam extremamente relevantes (ex: "Competitive coding – 3rd place, Brazilian Programming Olympiad 2023").
            </p>

            {/* Section 3 - Grammatical Errors */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-[#006B3D]" />
              Erros gramaticais que arruínam seu currículo em inglês
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Mesmo falantes avançados cometem erros sutis que soam "estranhos" para nativos. Abaixo, os mais frequentes — e como corrigi-los.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              1. Uso incorreto de verbos no passado
            </h3>

            <p className="text-lg leading-relaxed mb-8">
              Muitos candidatos escrevem: "Was responsible for…" Isso é passivo e enfraquece o impacto. Prefira verbos de ação: "Led…", "Built…", "Reduced…".
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              2. Confusão entre "affect" e "effect"
            </h3>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span><strong>Affect</strong> = verbo (to influence)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span><strong>Effect</strong> = substantivo (result)</span>
              </li>
            </ul>

            <Card className="bg-muted/30 mb-8">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-2">✅ "My strategy affected customer retention positively."</p>
                <p className="text-muted-foreground">✅ "The campaign had a measurable effect on sales."</p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              3. Frases no presente quando deveriam estar no passado
            </h3>

            <p className="text-lg leading-relaxed mb-8">
              Se saiu do emprego em 2023, tudo deve estar no passado. Erro comum: "Manage a team of 10 people" (quando já não gerencia mais).
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              4. Abreviações informais
            </h3>

            <p className="text-lg leading-relaxed mb-8">
              Evite "&" em vez de "and", "w/" em vez de "with", ou "don't" em contextos formais. O currículo é um documento profissional — mantenha o tom consistente.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#006B3D]">
              5. Erros de preposição
            </h3>

            <p className="text-lg leading-relaxed mb-6">
              Ex: "Expert in digital marketing" (certo) vs. "Expert on digital marketing" (errado).
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Outro exemplo: "Graduated from University of São Paulo" — nunca "graduated in".
            </p>

            <Card className="border-l-4 border-l-[#006B3D] bg-[#006B3D]/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-[#006B3D] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#006B3D] mb-2">Dica prática:</p>
                    <p className="text-muted-foreground">
                      Use o <strong>Grammarly</strong> ou o <strong>LanguageTool</strong> (ferramenta open-source) para revisão, mas não confie cegamente. Leia em voz alta — seu ouvido treinado detecta o que os algoritmos não pegam.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4 - Cultural Differences */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Languages className="w-8 h-8 text-[#006B3D]" />
              Diferenças culturais que impactam seu currículo em inglês
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Um currículo em inglês não é só sobre linguagem — é sobre mentalidade. Enquanto no Brasil ainda valorizamos "humildade" e evitamos soar arrogantes, em mercados como o dos EUA, é esperado que você se promova com clareza e confiança.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Isso não significa exagerar, mas quantificar conquistas com precisão. Em vez de "ajudei a aumentar as vendas", diga "<strong>drove $1.2M in new revenue in Q3 2024</strong>".
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Além disso, evite:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span><strong>Longas descrições de funções:</strong> recrutadores passam em média 6 segundos por currículo (fonte: The Ladders Eye-Tracking Study).</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span><strong>Termos vagos:</strong> "experienced", "skilled", "good communicator" — sem contexto, são ruído.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span><strong>Informações pessoais:</strong> idade, religião, filiação política. Isso pode ser ilegal em alguns países.</span>
              </li>
            </ul>

            <p className="text-lg leading-relaxed mb-8">
              Vale lembrar que, segundo o <a href="https://www.gov.br/mre" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline">Ministério das Relações Exteriores do Brasil</a>, profissionais que buscam emprego no exterior devem estar atentos às normas locais de proteção de dados — o que reforça a necessidade de um currículo enxuto e focado.
            </p>

            {/* Section 5 - Before and After Examples */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Eye className="w-8 h-8 text-[#006B3D]" />
              Exemplos reais: antes e depois de um currículo em inglês
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Vamos analisar dois trechos do mesmo candidato — um com erros comuns, outro com ajustes profissionais.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <h4 className="font-bold text-red-600 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Antes (com erros típicos):
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p className="font-semibold">Marketing Assistant</p>
                    <p>ABC Company – São Paulo</p>
                    <p className="text-xs">Jan 2021 – Dec 2022</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Worked with social media</li>
                      <li>Helped in campaigns</li>
                      <li>Made reports</li>
                      <li>Good with team</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <h4 className="font-bold text-green-600 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Depois (versão otimizada):
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p className="font-semibold">Digital Marketing Specialist</p>
                    <p>ABC Company – São Paulo, Brazil</p>
                    <p className="text-xs">Jan 2021 – Dec 2022</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Developed and executed 12+ monthly social media campaigns across Instagram and LinkedIn, increasing follower growth by 40% YoY</li>
                      <li>Collaborated with sales and product teams to align messaging, contributing to a 25% rise in lead conversion</li>
                      <li>Produced weekly performance dashboards using Google Data Studio, enabling real-time strategy adjustments</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              Note a diferença: clareza, métricas, verbos fortes e valor demonstrado.
            </p>

            <Card className="border-l-4 border-l-[#006B3D] bg-[#006B3D]/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-[#006B3D] flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Se quiser ver modelos completos por área (TI, finanças, engenharia, etc.), leia nosso <Link to="/blog/como-criar-curriculo-profissional-2026" className="text-[#006B3D] hover:underline font-semibold">guia completo com modelos de currículo prontos para editar</Link>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 6 - Practical Tips */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-[#006B3D]" />
              Dicas práticas para adaptar seu currículo ao setor e ao país-alvo
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Não basta um currículo em inglês genérico. Ele deve ser ajustado para:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <Briefcase className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span><strong>Indústria:</strong> Startups valorizam agilidade e impacto; corporações, estrutura e compliance.</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span><strong>País:</strong> No Reino Unido, é comum incluir "References available upon request"; nos EUA, isso é obsoleto.</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span><strong>Nível:</strong> Executivos usam executive resumes com foco em liderança estratégica; juniores destacam projetos e aprendizado rápido.</span>
              </li>
            </ul>

            <p className="text-lg leading-relaxed mb-6">
              Além disso, sempre personalize o Professional Summary para refletir a linguagem da vaga. Se a descrição do emprego menciona "agile environment", use "thrived in fast-paced, agile teams".
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Outra dica: salve seu arquivo como "<strong>FirstName_LastName_Resume.pdf</strong>" — nunca "curriculo_atualizado_final_v3.pdf". Parece óbvio, mas é um erro surpreendentemente comum.
            </p>

            <Card className="border-l-4 border-l-[#006B3D] bg-[#006B3D]/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <ExternalLink className="w-6 h-6 text-[#006B3D] flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Para mais estratégias de personalização, veja nosso artigo sobre <Link to="/blog/preparar-curriculo-sistemas-ats" className="text-[#006B3D] hover:underline font-semibold">como adaptar seu currículo para vagas internacionais e sistemas ATS</Link>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 7 - Tools and Resources */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Settings className="w-8 h-8 text-[#006B3D]" />
              Ferramentas e recursos recomendados
            </h2>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span><strong>Canva e Novoresume:</strong> modelos profissionais e ATS-friendly (compatíveis com sistemas de triagem automatizada).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span><strong>Harvard Resume Template:</strong> referência clássica e segura (disponível no site oficial da <a href="https://careerservices.fas.harvard.edu/" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline">Harvard Career Services</a>).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span><strong>Power Thesaurus:</strong> para encontrar sinônimos mais impactantes de verbos comuns.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" />
                <span><strong>Jobscan:</strong> analisa compatibilidade com palavras-chave da vaga (pago, mas eficaz).</span>
              </li>
            </ul>

            <Card className="border-l-4 border-l-amber-500 bg-amber-500/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <strong>Importante:</strong> evite designs excessivamente criativos em áreas tradicionais (direito, finanças, indústria). Em design ou marketing, um toque visual pode ajudar — mas nunca comprometa a legibilidade.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 8 - Final Checklist */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <CheckSquare className="w-8 h-8 text-[#006B3D]" />
              Checklist final: seu currículo em inglês está pronto?
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Antes de enviar, pergunte-se:
            </p>

            <Card className="bg-[#006B3D]/5 border-[#006B3D]/20 mb-8">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B3D]" />
                    <span>Está limitado a 1–2 páginas?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B3D]" />
                    <span>Todas as conquistas têm números ou métricas?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B3D]" />
                    <span>Usei verbos de ação no tempo verbal correto?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B3D]" />
                    <span>Removi foto, idade, estado civil e outras informações pessoais?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B3D]" />
                    <span>Revisei com um falante nativo ou ferramenta confiável?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B3D]" />
                    <span>O nome do arquivo está profissional?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B3D]" />
                    <span>O PDF abre corretamente em qualquer dispositivo?</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <p className="text-lg leading-relaxed mb-8">
              Se respondeu "sim" a tudo, parabéns — seu currículo em inglês está pronto para competir em alto nível.
            </p>

            {/* Conclusion */}
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-[#006B3D]" />
              Conclusão: seu currículo em inglês é seu passaporte profissional
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Mais do que um documento, seu currículo em inglês é a primeira impressão que você deixa em um mercado global. Ele precisa comunicar competência, clareza e alinhamento cultural — tudo em poucas linhas.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Errar na estrutura ou na gramática não é apenas um "deslize"; é um sinal de que você ainda não domina as regras do jogo internacional. Mas agora, com as orientações deste artigo, você tem tudo para transformar esse documento em uma poderosa ferramenta de carreira.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Se este conteúdo foi útil, compartilhe com alguém que está buscando oportunidades no exterior. E não deixe de explorar outros recursos do nosso blog, como <Link to="/blog/carta-apresentacao-empregador" className="text-[#006B3D] hover:underline font-semibold">como escrever uma carta de apresentação que impressiona recrutadores</Link>.
            </p>

            {/* CTA Card */}
            <Card className="bg-gradient-to-r from-[#006B3D] to-[#005a32] text-white mb-12">
              <CardContent className="p-8 text-center">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Pronto para criar seu currículo em inglês?</h3>
                <p className="text-lg opacity-90 mb-6">
                  Utilize nossa ferramenta gratuita e crie um currículo profissional que vai abrir portas no mercado internacional.
                </p>
                <Link to="/criar-curriculo">
                  <Button size="lg" variant="secondary" className="text-[#006B3D] font-semibold">
                    Criar Meu Currículo Agora
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold mt-12 mb-8 flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-[#006B3D]" />
              Perguntas Frequentes (FAQ)
            </h2>

            <div className="space-y-6 mb-12">
              <Card className="border-l-4 border-l-[#006B3D]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">1. Qual a diferença entre CV e resume em inglês?</h3>
                  <p className="text-muted-foreground">
                    Nos EUA e Canadá, <strong>resume</strong> é um documento curto (1–2 páginas) focado em experiência profissional relevante. <strong>CV (Curriculum Vitae)</strong> é mais detalhado, usado em contextos acadêmicos ou na Europa, e pode ter várias páginas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#006B3D]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">2. Posso colocar foto no currículo em inglês?</h3>
                  <p className="text-muted-foreground">
                    Não. Em países como EUA, Canadá, Reino Unido e Austrália, incluir foto é desencorajado e pode até gerar viés inconsciente. Remova-a para vagas internacionais.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#006B3D]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">3. Quantas páginas deve ter um currículo em inglês?</h3>
                  <p className="text-muted-foreground">
                    Idealmente 1 página para até 10 anos de experiência; 2 páginas para profissionais seniores ou com carreira extensa. Nunca ultrapasse 2 páginas para vagas corporativas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#006B3D]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">4. Preciso traduzir meu diploma no currículo em inglês?</h3>
                  <p className="text-muted-foreground">
                    Não é obrigatório, mas é recomendável usar a nomenclatura equivalente (ex: "Bachelor's Degree in Business Administration"). Evite traduções literais como "Superior Completo".
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#006B3D]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">5. O que é ATS e como meu currículo em inglês pode passar por ele?</h3>
                  <p className="text-muted-foreground">
                    ATS (Applicant Tracking System) é um software que filtra currículos com base em palavras-chave. Para passar: use termos da descrição da vaga, evite colunas ou gráficos complexos e salve em PDF (a menos que a vaga peça Word).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#006B3D]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">6. Como escrever "estou disponível para mudanças" em inglês no currículo?</h3>
                  <p className="text-muted-foreground">
                    Inclua no cabeçalho: "<strong>Open to relocation</strong>" ou "<strong>Available for international positions</strong>". Evite frases longas — seja direto.
                  </p>
                </CardContent>
              </Card>
            </div>

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

export default BlogArticle13;
