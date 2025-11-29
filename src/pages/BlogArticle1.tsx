import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, CheckCircle, XCircle, FileText, Target, TrendingUp, Award, ArrowLeft } from "lucide-react";
import AuthorBio from "@/components/AuthorBio";
import danielPhoto from "@/assets/daniel-olimpio.jpg";
import { Helmet } from "react-helmet";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";

const BlogArticle1 = () => {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Como Criar um Currículo Profissional que se Destaca em 2026" }
  ];

  const articleSchema = generateArticleSchema({
    title: "Como Criar um Currículo Profissional que se Destaca em 2026",
    description: "Descubra as técnicas mais eficazes para criar um currículo que chama atenção dos recrutadores e passar pelas entrevistas — com estratégias atualizadas para 2026, exemplos práticos e dicas que funcionam de verdade no mercado competitivo de hoje.",
    image: "/blog/curriculo-profissional-2026.jpg",
    datePublished: "2025-01-28",
    dateModified: "2025-01-28",
    author: {
      name: "Daniel Olimpio",
      url: "/sobre"
    },
    url: "/blog/como-criar-curriculo-profissional-2026"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog", url: "/blog" },
    { name: "Como Criar um Currículo Profissional que se Destaca em 2026", url: "/blog/como-criar-curriculo-profissional-2026" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Como Criar um Currículo Profissional que se Destaca em 2026</title>
        <meta name="description" content="Descubra as técnicas mais eficazes para criar um currículo que chama atenção dos recrutadores e passar pelas entrevistas — com estratégias atualizadas para 2026." />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="pt-32 pb-12">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
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
                Dicas de Currículo
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Como Criar um Currículo Profissional que se Destaca em 2026
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Descubra as técnicas mais eficazes para criar um currículo que chama atenção dos recrutadores e passar pelas entrevistas — com estratégias atualizadas para 2026, exemplos práticos e dicas que funcionam de verdade no mercado competitivo de hoje.
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-t py-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Daniel Olímpio</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>28 de Novembro, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min de leitura</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src="/blog/curriculo-profissional-2026.jpg" 
              alt="Como Criar um Currículo Profissional que se Destaca em 2026"
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
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <FileText className="w-8 h-8 text-[#006B3D]" />
                  O dilema silencioso por trás de cada currículo ignorado
                </h2>
                
                <p className="text-lg leading-relaxed mb-4">
                  Você já enviou dezenas — talvez centenas — de currículos e mal recebeu um "obrigado"? Está longe de estar sozinho. Em 2025, estima-se que um recrutador gasta, em média, apenas 6 segundos analisando um currículo antes de decidir se o descarta ou não. Isso mesmo: menos que o tempo de desbloquear seu celular.
                </p>
                
                <p className="text-lg leading-relaxed mb-4">
                  Mas por que tantos currículos bem-intencionados acabam na lixeira digital, mesmo com formações sólidas e experiências relevantes? A resposta não está na falta de qualificação, mas na falta de alinhamento estratégico com o que o mercado espera hoje.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Criar um currículo profissional que se destaca em 2026 não é mais sobre listar funções ou preencher espaços em branco. É sobre comunicar valor com precisão, demonstrar impacto com clareza e se conectar com a dor real das empresas.
                </p>

                <Card className="bg-[#006B3D]/5 border-[#006B3D]/20">
                  <CardContent className="pt-6">
                    <p className="text-center text-lg font-semibold mb-4">
                      Pronto para criar seu currículo profissional?
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

              {/* Por que o modelo tradicional está obsoleto */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <XCircle className="w-8 h-8 text-[#006B3D]" />
                  Por que o modelo tradicional de currículo está obsoleto?
                </h2>
                
                <p className="text-lg leading-relaxed mb-4">
                  Há uma década, bastava listar suas experiências cronologicamente, acrescentar um "objetivo profissional" vago e esperar por uma ligação. Hoje, esse formato não só é ineficaz — é contraproducente.
                </p>
                
                <p className="text-lg leading-relaxed mb-4">
                  Recrutadores não querem saber o que você fez; querem entender o que você resolveu. Empresas não contratam tarefas; contratam resultados.
                </p>
                
                <Card className="bg-accent/50 border-accent">
                  <CardContent className="pt-6">
                    <p className="font-semibold mb-2">💡 Insight Importante:</p>
                    <p>
                      Segundo um estudo da Harvard Business Review (2024), 78% dos profissionais que atualizaram seus currículos com foco em impacto mensurável tiveram aumento significativo em entrevistas — mesmo sem mudar de setor ou cargo.
                    </p>
                  </CardContent>
                </Card>
                
                <p className="text-lg leading-relaxed mt-6 mb-4">
                  Além disso, a tecnologia avançou. Mais de 90% das grandes corporações utilizam sistemas ATS (Applicant Tracking Systems) para filtrar candidatos antes que um ser humano sequer veja seu nome. Um currículo mal formatado ou sem palavras-chave estratégicas é eliminado antes da primeira rodada.
                </p>
              </section>

              {/* Elementos essenciais */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-[#006B3D]" />
                  Elementos essenciais de um currículo profissional que se destaca em 2026
                </h2>
                
                <p className="text-lg leading-relaxed mb-6">
                  Construir um currículo competitivo em 2026 exige equilíbrio entre humanidade e tecnologia. Abaixo, os pilares que fazem a diferença:
                </p>

                {/* 1. Formatação */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">1. Formatação limpa e ATS-friendly</h3>
                  
                  <p className="text-lg leading-relaxed mb-4">
                    Esqueça colunas, ícones, gráficos ou fontes criativas. O ideal é um layout monocoluna, com fontes como Arial, Calibri ou Helvetica (tamanho 10–12), e uso moderado de negrito para títulos e métricas.
                  </p>
                  
                  <Card className="mb-4">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-3 text-destructive">❌ Evite:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <span className="text-destructive mt-1">•</span>
                          <span>Tabelas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive mt-1">•</span>
                          <span>Cabeçalhos e rodapés</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive mt-1">•</span>
                          <span>Imagens ou logotipos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive mt-1">•</span>
                          <span>Termos fora do padrão (ex: "facilitador de soluções" em vez de "analista")</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <p className="text-lg leading-relaxed">
                    Use títulos claros como "Experiência Profissional", "Formação Acadêmica" e "Competências Técnicas".
                  </p>
                </div>

                {/* 2. Perfil profissional */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">2. Perfil profissional (não "objetivo")</h3>
                  
                  <p className="text-lg leading-relaxed mb-4">
                    Substitua o antiquado "Objetivo Profissional" por um Perfil Profissional — um parágrafo de 3 a 4 linhas que resume seu valor único.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <Card className="border-destructive/50">
                      <CardContent className="pt-6">
                        <p className="font-semibold mb-2 text-destructive">❌ Exemplo fraco:</p>
                        <p className="italic">"Procurando uma vaga onde possa crescer profissionalmente."</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-[#006B3D]/50">
                      <CardContent className="pt-6">
                        <p className="font-semibold mb-2 text-[#006B3D]">✅ Exemplo forte:</p>
                        <p className="italic">
                          "Especialista em marketing digital com 6 anos de experiência em geração de leads B2B e otimização de funis de conversão. Aumentou em 140% a taxa de retenção de clientes em campanhas de e-mail marketing para empresas SaaS. Certificado em Google Analytics e HubSpot."
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <p className="text-lg leading-relaxed">
                    Veja a diferença? Um fala sobre desejo; o outro, sobre prova.
                  </p>
                </div>

                {/* 3. Experiência com foco em resultados */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">3. Experiência com foco em resultados</h3>
                  
                  <p className="text-lg leading-relaxed mb-4">
                    Não liste suas responsabilidades — mostre seu impacto. Use a fórmula: <strong>Ação + Métrica + Resultado</strong>.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <Card className="border-destructive/50">
                      <CardContent className="pt-6">
                        <p className="font-semibold mb-2 text-destructive">❌ Ao invés de:</p>
                        <p className="italic">"Responsável por gerenciar redes sociais."</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-[#006B3D]/50">
                      <CardContent className="pt-6">
                        <p className="font-semibold mb-2 text-[#006B3D]">✅ Escreva:</p>
                        <p className="italic">
                          "Planejou e executou estratégia de conteúdo para Instagram e LinkedIn, aumentando o engajamento em 87% e gerando 210 leads qualificados em 3 meses."
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <p className="text-lg leading-relaxed">
                    Sempre que possível, use números reais. Se não tiver dados exatos, estime com base em observações — mas seja honesto.
                  </p>
                </div>

                {/* 4. Competências alinhadas */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">4. Competências alinhadas à vaga</h3>
                  
                  <p className="text-lg leading-relaxed mb-4">
                    Personalize suas habilidades conforme o cargo. Um currículo genérico raramente vence.
                  </p>
                  
                  <Card className="mb-4">
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                          <span><strong>Para uma vaga em tecnologia:</strong> Python, AWS, CI/CD, Scrum</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                          <span><strong>Para uma vaga em RH:</strong> Onboarding, Gestão de Desempenho, Compliance Trabalhista, Ferramentas de ATS</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <p className="text-lg leading-relaxed">
                    Use palavras-chave do anúncio da vaga. Isso não é "enganar o sistema" — é falar a mesma língua do recrutador.
                  </p>
                </div>
              </section>

              {/* CTA Intermediário */}
              <Card className="bg-gradient-to-br from-[#006B3D]/10 to-accent/10 border-[#006B3D]/20 mb-12">
                <CardContent className="pt-8 pb-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Comece Agora Mesmo!</h3>
                  <p className="text-lg mb-6 max-w-2xl mx-auto">
                    Não espere mais para criar um currículo que abre portas. Use nossa ferramenta gratuita e profissionalize sua apresentação.
                  </p>
                  <Button size="lg" className="bg-[#006B3D] hover:bg-[#005a32]" asChild>
                    <Link to="/criar-curriculo">
                      Criar Meu Currículo Grátis
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Estratégias avançadas */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-[#006B3D]" />
                  Estratégias avançadas: Como fazer seu currículo "conversar" com o recrutador
                </h2>
                
                <p className="text-lg leading-relaxed mb-6">
                  Um currículo eficaz em 2026 age como um pré-venda da sua entrevista. Ele deve contar uma história coerente, com começo (quem você é), meio (o que conquistou) e fim (o valor que levará para a empresa).
                </p>

                {/* Use storytelling */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Use storytelling discreto</h3>
                  
                  <p className="text-lg leading-relaxed mb-4">
                    Recrutadores são humanos. Eles se conectam com narrativas. Por exemplo:
                  </p>
                  
                  <Card className="bg-accent/30 border-accent">
                    <CardContent className="pt-6">
                      <p className="italic">
                        "Ao assumir a liderança da equipe de suporte após uma crise de rotatividade, reestruturei processos internos e implementei um programa de mentoria. Em 6 meses, a NPS interna subiu de 32 para 81, e a taxa de turnover caiu 60%."
                      </p>
                    </CardContent>
                  </Card>
                  
                  <p className="text-lg leading-relaxed mt-4">
                    Esse trecho mostra <strong>problema → ação → resultado</strong> — uma estrutura que gruda na mente.
                  </p>
                </div>

                {/* Projetos relevantes */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Inclua projetos relevantes (mesmo que não sejam formais)</h3>
                  
                  <p className="text-lg leading-relaxed mb-4">
                    Trabalhos voluntários, side projects, cursos com protótipos ou até uma newsletter bem-sucedida contam muito, especialmente para quem está começando ou fazendo transição de carreira.
                  </p>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">Exemplo:</p>
                      <p className="italic">
                        "Criador do 'Boletim Tech para Não-Técnicos', com 5.000 inscritos e taxa de abertura de 42%. Traduz conceitos complexos de IA e automação em linguagem acessível."
                      </p>
                    </CardContent>
                  </Card>
                  
                  <p className="text-lg leading-relaxed mt-4">
                    Isso demonstra iniciativa, comunicação e visão de negócio — habilidades raras e valorizadas.
                  </p>
                </div>

                {/* Adapte para cada aplicação */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Adapte para cada aplicação</h3>
                  
                  <p className="text-lg leading-relaxed mb-4">
                    Enviar o mesmo currículo para 50 vagas é como usar a mesma chave para 50 portas diferentes. Não funciona.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Leia atentamente a descrição da vaga. Destaque as competências que ela pede. Use termos idênticos aos do anúncio (ex: se eles dizem "gestão de stakeholders", não escreva "relacionamento com clientes").
                  </p>
                </div>
              </section>

              {/* O que NUNCA incluir */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <XCircle className="w-8 h-8 text-destructive" />
                  O que NUNCA incluir em um currículo moderno
                </h2>
                
                <p className="text-lg leading-relaxed mb-4">
                  Alguns elementos, ainda comuns, sabotam sua credibilidade:
                </p>
                
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                        <span>Foto (exceto em países onde é exigido por lei, como Alemanha ou França)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                        <span>Estado civil, idade, filiação religiosa ou política</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                        <span>"Referências disponíveis sob demanda" (isso é óbvio)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                        <span>Currículos com mais de duas páginas (a menos que você seja pesquisador ou tenha 20+ anos de experiência)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                        <span>Erros gramaticais ou ortográficos</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <p className="text-lg leading-relaxed mt-6">
                  Lembre-se: seu currículo não precisa dizer tudo sobre você. Só precisa dizer o suficiente para conquistar uma entrevista.
                </p>
              </section>

              {/* Como passar pelo ATS */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Como passar pelo ATS e ainda impressionar um humano</h2>
                
                <p className="text-lg leading-relaxed mb-4">
                  Os sistemas de triagem automatizados são os primeiros "porteiros" do seu currículo. Eis como garantir que ele seja aprovado:
                </p>
                
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span>Use palavras-chave do anúncio da vaga — especialmente em títulos de cargo, competências e descrições</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span>Evite PDFs com texto escaneado ou imagens — o ATS não lê</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span>Inclua sinônimos naturais — ex: "gestão de equipe" e "liderança de times"</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span>Formate com HTML simples ou Word — PDF é aceito, mas só se for texto selecionável</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <p className="text-lg leading-relaxed">
                  Depois de passar pelo ATS, seu currículo precisa emocionar o recrutador. Como? Com clareza, concisão e um toque de personalidade.
                </p>
              </section>

              {/* Checklist final */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#006B3D]" />
                  Checklist final: Seu currículo está pronto para 2026?
                </h2>
                
                <p className="text-lg leading-relaxed mb-6">
                  Antes de enviar, pergunte-se:
                </p>
                
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span>O recrutador entende meu valor em 10 segundos?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span>Meu currículo passaria em um leitor de ATS?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span>Cada linha responde à pergunta: "Por que isso importa para a empresa?"</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span>Usei números reais ou estimativas plausíveis?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                        <span>Removi tudo que não acrescenta valor?</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <p className="text-lg leading-relaxed mt-6">
                  Se respondeu "sim" a todas, você está à frente de 90% dos candidatos.
                </p>
              </section>

              {/* Conclusão */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Conclusão: Seu currículo não é um documento — é sua primeira impressão</h2>
                
                <p className="text-lg leading-relaxed mb-4">
                  Criar um currículo profissional que se destaca em 2026 é menos sobre design e mais sobre inteligência estratégica. É a arte de traduzir sua jornada em uma proposta de valor irresistível — clara para máquinas, cativante para humanos.
                </p>
                
                <p className="text-lg leading-relaxed mb-4">
                  Não se trata de parecer perfeito, mas de provar relevância. E isso começa com um currículo que não apenas lista o que você fez, mas antecipa o que você fará pela empresa.
                </p>
                
                <Card className="bg-gradient-to-br from-[#006B3D] to-[#005a32] text-white">
                  <CardContent className="pt-8 pb-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Pronto para Dar o Próximo Passo?</h3>
                    <p className="text-lg mb-6 opacity-90">
                      Não espere mais. Atualize seu CV hoje — não amanhã. Use nossa ferramenta gratuita e comece a receber mais respostas.
                    </p>
                    <Button size="lg" variant="secondary" asChild>
                      <Link to="/criar-curriculo">
                        Criar Meu Currículo Profissional Grátis
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </section>

              {/* FAQ */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes (FAQ)</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-3">O que é um currículo profissional que se destaca em 2026?</h3>
                      <p>É um documento estratégico, personalizado e centrado em resultados, que comunica valor de forma clara para recrutadores humanos e sistemas automatizados (ATS).</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-3">Quantas páginas deve ter um currículo em 2026?</h3>
                      <p>Até duas páginas. Profissionais com menos de 10 anos de experiência devem caber em uma.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-3">Devo incluir minhas redes sociais no currículo?</h3>
                      <p>Sim, se forem relevantes (LinkedIn, GitHub, portfólio online). Evite Instagram ou TikTok, a menos que sejam parte do seu trabalho.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-3">Como adaptar meu currículo para mudar de carreira?</h3>
                      <p>Destaque transferências de habilidades (ex: liderança, resolução de problemas), projetos paralelos e cursos recentes na nova área.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-3">Currículo em PDF ou Word?</h3>
                      <p>PDF é preferível, desde que o texto seja selecionável (não uma imagem). Verifique isso antes de enviar.</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* CTA Final */}
              <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-primary/20">
                <CardContent className="pt-8 pb-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Transforme Sua Carreira Hoje</h3>
                  <p className="text-lg mb-6 max-w-2xl mx-auto">
                    Milhares de profissionais já conquistaram suas oportunidades de sonho com currículos criados em nossa plataforma. Chegou a sua vez!
                  </p>
                  <Button size="lg" className="bg-[#006B3D] hover:bg-[#005a32]" asChild>
                    <Link to="/criar-curriculo">
                      Criar Meu Currículo Grátis Agora
                    </Link>
                  </Button>
                </CardContent>
              </Card>

          </div>

          {/* Author Bio */}
          <AuthorBio />
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogArticle1;
