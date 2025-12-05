import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, CheckCircle, XCircle, FileText, Target, GraduationCap, Briefcase, Award, ArrowLeft, Lightbulb, AlertTriangle, BookOpen, Clock3, ListChecks } from "lucide-react";
import AuthorBio from "@/components/AuthorBio";
import danielPhoto from "@/assets/daniel-olimpio.jpg";
import { Helmet } from "react-helmet";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

const BlogArticle10 = () => {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Currículo para Estágio: O Guia Definitivo para Estudantes" }
  ];

  const articleSchema = generateArticleSchema({
    title: "Currículo para Estágio: O Guia Definitivo para Estudantes",
    description: "Tudo o que estudantes precisam saber para montar um currículo de estágio: disponibilidade, disciplinas relevantes, projetos e postura profissional.",
    image: "/blog/curriculo-estagio-estudantes.jpg",
    datePublished: "2025-12-05",
    dateModified: "2025-12-05",
    author: {
      name: "Daniel Olimpio",
      url: "/sobre"
    },
    url: "/blog/curriculo-estagio-estudantes"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog", url: "/blog" },
    { name: "Currículo para Estágio: O Guia Definitivo para Estudantes", url: "/blog/curriculo-estagio-estudantes" }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "Quantas páginas deve ter um currículo para estágio?",
      answer: "Idealmente, apenas uma página. Recrutadores gastam em média 6 segundos lendo um currículo inicial — seja direto e objetivo."
    },
    {
      question: "Preciso ter experiência anterior para fazer um bom currículo de estágio?",
      answer: "Não. Estágios são oportunidades de primeiro contato com o mercado. Destaque projetos, disciplinas, cursos e competências adquiridas na faculdade ou em atividades paralelas."
    },
    {
      question: "Posso usar o mesmo currículo para todas as vagas?",
      answer: "Não é recomendado. Adapte seu currículo para cada vaga, especialmente o objetivo profissional e as competências destacadas, conforme as exigências do anúncio."
    },
    {
      question: "Devo incluir meu LinkedIn no currículo?",
      answer: "Sim, se o perfil estiver atualizado e profissional. Um LinkedIn desatualizado ou com fotos informais pode prejudicar sua imagem."
    },
    {
      question: "É obrigatório colocar a previsão de conclusão do curso?",
      answer: "Sim. A duração esperada do estágio muitas vezes depende de quanto tempo você ainda tem de curso. A previsão de conclusão é uma informação-chave para o recrutador."
    },
    {
      question: "Posso colocar disponibilidade para estágio remoto?",
      answer: "Sim, especialmente se a vaga for híbrida ou remota. Deixe claro se tem internet estável, equipamento próprio e horário definido para atividades remotas."
    },
    {
      question: "Qual a melhor forma de enviar o currículo?",
      answer: "Sempre em PDF, com nome de arquivo profissional (ex.: Nome_Sobrenome_Curriculo_Estagio_Area.pdf). Evite arquivos editáveis ou compactados."
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Currículo para Estágio: O Guia Definitivo para Estudantes | Fazer Currículo</title>
        <meta name="description" content="Tudo o que estudantes precisam saber para montar um currículo de estágio: disponibilidade, disciplinas relevantes, projetos e postura profissional." />
        <link rel="canonical" href="https://fazercurriculo.com/blog/curriculo-estagio-estudantes" />
        <meta property="og:title" content="Currículo para Estágio: O Guia Definitivo para Estudantes" />
        <meta property="og:description" content="Tudo o que estudantes precisam saber para montar um currículo de estágio: disponibilidade, disciplinas relevantes, projetos e postura profissional." />
        <meta property="og:url" content="https://fazercurriculo.com/blog/curriculo-estagio-estudantes" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://fazercurriculo.com/blog/curriculo-estagio-estudantes.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Currículo para Estágio: O Guia Definitivo para Estudantes" />
        <meta name="twitter:description" content="Tudo o que estudantes precisam saber para montar um currículo de estágio: disponibilidade, disciplinas relevantes, projetos e postura profissional." />
        <meta name="twitter:image" content="https://fazercurriculo.com/blog/curriculo-estagio-estudantes.jpg" />
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
                Estágio
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Currículo para Estágio: O Guia Definitivo para Estudantes
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Tudo o que estudantes precisam saber para montar um currículo de estágio: disponibilidade, disciplinas relevantes, projetos e postura profissional.
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-t py-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Daniel Olímpio</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>5 de Dezembro, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>18 min de leitura</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src="/blog/curriculo-estagio-estudantes.jpg" 
              alt="Currículo para Estágio: O Guia Definitivo para Estudantes"
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
                Imagine-se diante de uma vaga de estágio cobiçada — talvez naquela empresa que sempre admirou, ou em uma startup inovadora cujo propósito ressoa profundamente com você. Você tem o entusiasmo, a curiosidade e a disposição para aprender. Mas, ao enviar seu currículo, sente aquele frio na espinha: será que ele realmente comunica quem eu sou? Será que passa a impressão certa?
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Se essa inquietação soa familiar, saiba que você não está sozinho. Milhares de estudantes passam por esse dilema todos os anos. E a verdade é que, em um mercado competitivo, um <strong>currículo para estágio</strong> bem feito pode ser a diferença entre uma resposta automatizada de recusa e um convite para entrevista.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Este artigo é o guia definitivo para estudantes que querem transformar seu currículo de estágio em uma ponte sólida entre a sala de aula e o mundo profissional. Aqui, você encontrará orientações práticas, exemplos reais, estratégias comprovadas e insights baseados em tendências atuais do recrutamento jovem. Vamos juntos construir um documento que não apenas informe, mas conquiste.
              </p>

              <Card className="bg-[#006B3D]/5 border-[#006B3D]/20">
                <CardContent className="pt-6">
                  <p className="text-center text-lg font-semibold mb-4">
                    Pronto para criar seu currículo de estágio?
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

            {/* Por Que o Currículo para Estágio Exige uma Abordagem Diferente? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-[#006B3D]" />
                Por Que o Currículo para Estágio Exige uma Abordagem Diferente?
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Um erro comum entre estudantes é tratar o currículo de estágio como uma versão "pobre" do currículo de um profissional experiente. Nada mais equivocado.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                O recrutador que analisa um currículo para estágio não espera anos de experiência. Ele busca sinais de <strong>potencial</strong>: curiosidade, capacidade de aprendizado, postura profissional e alinhamento com a cultura da empresa. Por isso, o foco muda: menos sobre o que você fez, mais sobre quem você é e o que está disposto a construir.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Enquanto um profissional sênior destaca resultados mensuráveis em cargos anteriores, o estudante deve valorizar <strong>disponibilidade</strong>, <strong>disciplinas relevantes</strong>, <strong>projetos acadêmicos</strong>, <strong>atividades extracurriculares</strong> e <strong>competências comportamentais</strong>.
              </p>

              <Card className="bg-accent/50 border-accent mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Dica prática:</p>
                      <p>
                        Seu currículo de estágio não precisa ser longo — uma página é ideal. Mas cada linha deve contar uma história de engajamento, não apenas de existência.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Estrutura Ideal do Currículo para Estágio */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-[#006B3D]" />
                Estrutura Ideal do Currículo para Estágio
              </h2>
              
              <p className="text-lg leading-relaxed mb-8">
                Um currículo eficaz segue uma lógica clara, mesmo quando o candidato tem pouca experiência formal. Abaixo, apresentamos a estrutura recomendada, com explicações detalhadas de cada seção:
              </p>

              {/* 1. Dados Pessoais */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">1. Dados Pessoais: Simplicidade com Profissionalismo</h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  Inclua apenas o essencial:
                </p>
                
                <ul className="space-y-2 mb-6 ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Nome completo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Telefone com DDD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>E-mail profissional (evite apelidos infantis ou sugestivos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Cidade e estado (não é necessário endereço completo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>LinkedIn (se tiver um perfil atualizado — senão, omita)</span>
                  </li>
                </ul>

                <Card className="border-destructive/50 mb-4">
                  <CardContent className="pt-6">
                    <p className="font-semibold mb-2 text-destructive flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      Evite:
                    </p>
                    <p>
                      Fotos (a menos que exigidas pelo setor, como moda ou atuação), data de nascimento, estado civil ou RG. Essas informações são irrelevantes no processo inicial e podem gerar viés inconsciente.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 2. Objetivo Profissional */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">2. Objetivo Profissional: Clareza com Propósito</h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  O campo de "objetivo" ainda é útil no currículo para estágio, mas deve ser específico e alinhado à vaga. Evite frases genéricas como "buscar crescimento profissional". Em vez disso, diga:
                </p>

                <Card className="border-[#006B3D]/50 mb-6">
                  <CardContent className="pt-6">
                    <p className="font-semibold mb-2 text-[#006B3D]">✅ Exemplo forte:</p>
                    <p className="italic">
                      "Estudante de Engenharia de Produção no 4º semestre, com interesse em processos logísticos e otimização de cadeias de suprimento, busca estágio na área de operações para aplicar conhecimentos teóricos e contribuir com soluções eficientes."
                    </p>
                  </CardContent>
                </Card>
                
                <p className="text-lg leading-relaxed">
                  Se estiver se candidatando a várias vagas, crie versões diferentes do seu currículo, adaptando o objetivo para cada realidade. Isso demonstra atenção aos detalhes — uma qualidade altamente valorizada.
                </p>
              </div>

              {/* 3. Formação Acadêmica */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">3. Formação Acadêmica: Seu "Ainda em Construção"</h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  Liste seu curso, instituição, previsão de conclusão e <strong>disciplinas relevantes</strong>. Muitos estudantes ignoram esse último item, mas ele é crucial.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Por exemplo, se você está se candidatando a um estágio em marketing digital e fez disciplinas como Comportamento do Consumidor, Estratégias de Mídia ou Análise de Dados, inclua-as. Isso mostra ao recrutador que você já tem uma base sólida, mesmo sem experiência prática.
                </p>

                <Card className="bg-muted/50 mb-6">
                  <CardContent className="pt-6">
                    <p className="font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-[#006B3D]" />
                      Exemplo prático:
                    </p>
                    <div className="space-y-1 text-sm">
                      <p><strong>Bacharelado em Comunicação Social – Relações Públicas</strong></p>
                      <p>Universidade Federal do Rio de Janeiro (UFRJ)</p>
                      <p>Previsão de conclusão: dez/2026</p>
                      <p className="mt-2"><strong>Disciplinas relevantes:</strong> Planejamento de Comunicação, Gestão de Crise, Ética Profissional, Mídias Sociais</p>
                    </div>
                  </CardContent>
                </Card>
                
                <p className="text-lg leading-relaxed">
                  Se tiver um bom desempenho acadêmico (ex.: CR acima de 8,0), mencione-o. Caso contrário, omita — não há obrigação.
                </p>
              </div>

              {/* 4. Disponibilidade */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">4. Disponibilidade: Um Fator Decisivo</h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  Muitas empresas descartam bons candidatos simplesmente porque a disponibilidade não bate com as necessidades operacionais. Seja claro e realista sobre seus horários.
                </p>
                
                <p className="text-lg leading-relaxed mb-4">
                  Estruture essa informação assim:
                </p>

                <ul className="space-y-2 mb-6 ml-6">
                  <li className="flex items-start gap-2">
                    <Clock3 className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Carga horária desejada (ex.: 6h diárias)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock3 className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Dias disponíveis (ex.: seg/qua/sex ou todos os dias)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock3 className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Período (manhã, tarde ou integral)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock3 className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Início imediato ou data específica</span>
                  </li>
                </ul>

                <Card className="bg-accent/50 border-accent">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-2">Importante:</p>
                        <p>
                          Se estiver cursando à noite, por exemplo, e puder estagiar de manhã, destaque isso com ênfase. A flexibilidade é um trunfo.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 5. Experiências e Projetos */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">5. Experiências e Projetos: Onde Mostrar Iniciativa</h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  Mesmo sem estágios anteriores, você tem muito a oferecer. Pense além do "trabalho remunerado":
                </p>

                <ul className="space-y-2 mb-6 ml-6">
                  <li className="flex items-start gap-2">
                    <Briefcase className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span><strong>Projetos acadêmicos:</strong> Trabalhos de conclusão de curso (TCCs), estudos de caso, simulações empresariais.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Briefcase className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span><strong>Iniciação científica ou tecnológica:</strong> Mesmo que em andamento.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Briefcase className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span><strong>Voluntariado:</strong> Especialmente se envolveu planejamento, comunicação ou liderança.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Briefcase className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span><strong>Empreendimentos próprios:</strong> Desde uma loja virtual no Instagram até um podcast sobre cinema.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Briefcase className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span><strong>Clubes universitários ou atléticas:</strong> Se teve cargo de coordenação ou organização de eventos.</span>
                  </li>
                </ul>
                
                <p className="text-lg leading-relaxed mb-4">
                  Para cada item, use a fórmula <strong>AÇÃO + RESULTADO/IMPACTO</strong>:
                </p>

                <Card className="bg-muted/50 mb-6">
                  <CardContent className="pt-6">
                    <p className="font-semibold mb-3">Exemplo:</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Projeto Interdisciplinar – "Plano de Sustentabilidade para Empresa Local"</strong></p>
                      <p className="text-muted-foreground">Universidade XYZ – 2024</p>
                      <ul className="mt-2 space-y-1 ml-4">
                        <li>• Liderou equipe de 5 alunos na análise de fluxos de resíduos e proposta de logística reversa.</li>
                        <li>• Apresentou plano final ao conselho gestor da empresa, com 80% das sugestões incorporadas à nova política ambiental.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <p className="text-lg leading-relaxed">
                  Saiba mais sobre como transformar projetos acadêmicos em destaques no currículo em nosso <Link to="/blog/curriculo-sem-experiencia-estrategias" className="text-[#006B3D] hover:underline font-semibold">guia completo para currículos sem experiência</Link>.
                </p>
              </div>

              {/* 6. Competências */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">6. Competências: Escolha com Estratégia</h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  Liste competências técnicas (ex.: Excel intermediário, Python básico, Canva, Adobe Premiere) e comportamentais (ex.: trabalho em equipe, comunicação clara, resolução de problemas).
                </p>

                <Card className="border-destructive/50 mb-6">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-2">Cuidado:</p>
                        <p>
                          Não minta. Se escrever "inglês fluente" e não souber responder perguntas simples durante a entrevista, seu crédito profissional desaba.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <p className="text-lg leading-relaxed mb-4">
                  Prefira qualificadores realistas: básico, intermediário, avançado — ou, melhor ainda, especifique o contexto: "Conversação básica para viagens" ou "Leitura técnica de artigos científicos".
                </p>
                
                <p className="text-lg leading-relaxed">
                  <strong>Link externo útil:</strong> O <a href="https://www.coe.int/en/web/common-european-framework-reference-languages" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline">Quadro Europeu Comum de Referência para Línguas (CEFR)</a> é uma boa referência para autoavaliar seu nível de idiomas — e muitas empresas brasileiras usam essa escala.
                </p>
              </div>

              {/* 7. Certificações e Cursos Complementares */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">7. Certificações e Cursos Complementares</h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  Cursos online (Coursera, Udemy, LinkedIn Learning), oficinas, workshops — tudo conta. Mas selecione os mais relevantes para a vaga.
                </p>
                
                <p className="text-lg leading-relaxed mb-4">
                  Prefira:
                </p>

                <ul className="space-y-2 mb-6 ml-6">
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Cursos com certificação reconhecida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Conteúdos recentes (últimos 2 anos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                    <span>Temas alinhados à área do estágio</span>
                  </li>
                </ul>
                
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Exemplo:</strong> Se busca um estágio em finanças, um curso de "Noções Básicas de Contabilidade" da Fundação Getulio Vargas (FGV) será mais impactante do que um curso genérico de "Empreendedorismo".
                </p>

                <Card className="bg-accent/50 border-accent">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-2">Dica avançada:</p>
                        <p>
                          Muitos cursos gratuitos de qualidade são oferecidos por instituições como o <a href="https://www.sebrae.com.br/sites/PortalSebrae/cursosonline" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline font-semibold">SEBRAE</a> — explore essa fonte valiosa.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Erros Comuns que Afastam Recrutadores */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <XCircle className="w-8 h-8 text-[#006B3D]" />
                Erros Comuns que Afastam Recrutadores
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Mesmo com boas intenções, pequenos descuidos podem arruinar suas chances. Veja os mais frequentes:
              </p>

              <div className="space-y-6">
                <Card className="border-destructive/30">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 text-destructive">✘ Usar modelos genéricos e poluídos visualmente</h4>
                    <p>
                      Currículos com colunas, ícones coloridos, fontes criativas ou fundos chamativos distraem mais do que impressionam. Prefira formatação limpa, com fonte serifada ou sans-serif (Arial, Calibri, Helvetica), tamanho 11 ou 12, e espaçamento respirável.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-destructive/30">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 text-destructive">✘ Incluir informações irrelevantes</h4>
                    <p>
                      Já mencionamos dados pessoais desnecessários, mas também evite hobbies genéricos ("gosto de música") — a menos que sejam relevantes para o cargo (ex.: toca violão em eventos culturais, se a vaga é em produção cultural).
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-destructive/30">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 text-destructive">✘ Copiar descrições de vagas sem personalização</h4>
                    <p>
                      Um currículo genérico é um currículo morto. Estude a empresa, o setor e a descrição da vaga. Use palavras-chave do anúncio (sem forçar) para mostrar alinhamento conceitual.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-destructive/30">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 text-destructive">✘ Esquecer de revisar ortografia e gramática</h4>
                    <p>
                      Um único erro de digitação pode gerar a percepção de descuido. Use o corretor do Word, mas não confie cegamente nele. Leia em voz alta, peça a um amigo para revisar ou use ferramentas como o Grammarly (em modo neutro).
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-accent/50 border-accent mt-6">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Estudo recente:</p>
                      <p>
                        Uma pesquisa da Catho (2023) revelou que <strong>78% dos recrutadores rejeitam currículos com erros gramaticais</strong>, mesmo em candidatos altamente qualificados.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Disponibilidade: Mais Importante do Que Você Imagina */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Clock3 className="w-8 h-8 text-[#006B3D]" />
                Disponibilidade: Mais Importante do Que Você Imagina
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Em muitas empresas, a disponibilidade é o primeiro filtro técnico. Uma vaga para estágio em tecnologia pode exigir 30h semanais, presenciais, de segunda a sexta. Se você só puder aos fins de semana, é melhor economizar o seu tempo — e o do recrutador.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Por isso, não subestime essa seção. Coloque-a logo após a formação acadêmica, em destaque. Algumas empresas até solicitam um campo específico no formulário de inscrição, mas ter no currículo reforça seu compromisso.
              </p>

              <Card className="bg-[#006B3D]/5 border-[#006B3D]/20 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold mb-2">Modelo recomendado:</p>
                  <p className="bg-muted p-3 rounded font-mono text-sm">
                    Disponibilidade: 30h semanais | Segunda a sexta-feira | Manhã (8h às 14h) | Início imediato
                  </p>
                </CardContent>
              </Card>
              
              <p className="text-lg leading-relaxed">
                Se sua disponibilidade é limitada (ex.: apenas 20h semanais), não se intimide — há vagas para todos os perfis. Mas seja transparente desde o início.
              </p>
            </section>

            {/* Disciplinas Relevantes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-[#006B3D]" />
                Disciplinas Relevantes: Seu Curso Tem Mais Valor do Que Você Pensa
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Muitos estudantes acham que só quem já fez estágio tem algo a mostrar. Ledo engano.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                O currículo para estágio é, em grande parte, uma tradução do que você está aprendendo na faculdade para a linguagem do mercado. E as disciplinas são sua prova de que você está construindo uma base sólida.
              </p>
              
              <p className="text-lg leading-relaxed mb-4">
                Mas como escolher quais listar?
              </p>

              <ul className="space-y-2 mb-6 ml-6">
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span><strong>Analise a descrição da vaga:</strong> Quais conhecimentos são desejados?</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span><strong>Relacione com seu histórico:</strong> Que matérias abordaram esses temas?</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span><strong>Priorize as mais recentes</strong> e com maior carga teórica/prática.</span>
                </li>
              </ul>

              <Card className="bg-muted/50 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold mb-3">Exemplo para um estágio em RH:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Psicologia Organizacional</li>
                    <li>• Legislação Trabalhista</li>
                    <li>• Gestão de Pessoas</li>
                    <li>• Comportamento Humano nas Organizações</li>
                  </ul>
                </CardContent>
              </Card>
              
              <p className="text-lg leading-relaxed">
                Essas disciplinas mostram que você já foi exposto a conceitos centrais da área — e está pronto para aplicá-los. Leia também: <Link to="/blog/curriculo-primeiro-emprego-o-que-incluir" className="text-[#006B3D] hover:underline font-semibold">Como alinhar sua formação acadêmica às exigências do mercado</Link> — um artigo complementar essencial para estudantes em transição.
              </p>
            </section>

            {/* Projetos Acadêmicos e Extracurriculares */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-[#006B3D]" />
                Projetos Acadêmicos e Extracurriculares: Seu Laboratório de Habilidades
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Empresas não esperam que você resolva problemas complexos no primeiro dia. Mas querem saber se você pensa como um profissional.
              </p>
              
              <p className="text-lg leading-relaxed mb-4">
                Projetos são a prova disso. Eles demonstram:
              </p>

              <ul className="space-y-2 mb-6 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span>Capacidade de aplicar teoria à prática</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span>Trabalho em equipe</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span>Gestão de prazos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span>Comunicação de ideias</span>
                </li>
              </ul>
              
              <p className="text-lg leading-relaxed mb-6">
                Mesmo um projeto simples de sala de aula pode ser transformado em um destaque poderoso se descrito com clareza e foco em resultados.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border-destructive/50">
                  <CardContent className="pt-6">
                    <p className="font-semibold mb-2 text-destructive">❌ Antes:</p>
                    <p className="italic">"Fiz um trabalho sobre marketing digital."</p>
                  </CardContent>
                </Card>
                
                <Card className="border-[#006B3D]/50">
                  <CardContent className="pt-6">
                    <p className="font-semibold mb-2 text-[#006B3D]">✅ Depois:</p>
                    <p className="italic">
                      "Desenvolveu campanha simulada no Instagram para produto fictício, com definição de persona, calendário editorial e métricas de engajamento — atingindo 1.200 visualizações orgânicas em 2 semanas."
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <p className="text-lg leading-relaxed">
                Veja a diferença? Um é vago; o outro mostra processo, método e resultado.
              </p>
            </section>

            {/* Postura Profissional */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-[#006B3D]" />
                Postura Profissional: Como Ela Aparece no Currículo?
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Você deve estar pensando: "Postura profissional é algo que se mostra na entrevista, não no papel." Até certo ponto, sim. Mas o currículo já é um ato de postura profissional.
              </p>
              
              <p className="text-lg leading-relaxed mb-4">
                Ele revela:
              </p>

              <ul className="space-y-2 mb-6 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span>Se você respeita o tempo do recrutador (com clareza e objetividade)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span>Se sabe se comunicar com precisão</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#006B3D] mt-1 flex-shrink-0" />
                  <span>Se entende as regras não escritas do ambiente corporativo</span>
                </li>
              </ul>
              
              <p className="text-lg leading-relaxed mb-6">
                Um currículo bem estruturado, sem exageros, sem mentiras e com foco no que importa transmite maturidade e respeito — duas das qualidades mais buscadas em estagiários.
              </p>

              <Card className="bg-accent/50 border-accent">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-[#006B3D] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Lembre-se:</p>
                      <p>
                        Você está pedindo uma oportunidade. Mostre que merece.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Checklist Final */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <ListChecks className="w-8 h-8 text-[#006B3D]" />
                Checklist Final: Antes de Enviar Seu Currículo para Estágio
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Para garantir que nada escape, use esta lista de verificação:
              </p>

              <Card className="bg-[#006B3D]/5 border-[#006B3D]/20">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#006B3D] mt-0.5 flex-shrink-0" />
                      <span>Nome do arquivo profissional (ex.: Maria_Silva_Curriculo_Estagio_Marketing.pdf)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#006B3D] mt-0.5 flex-shrink-0" />
                      <span>Formato PDF (nunca Word, a menos que solicitado)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#006B3D] mt-0.5 flex-shrink-0" />
                      <span>1 página (máximo absoluto)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#006B3D] mt-0.5 flex-shrink-0" />
                      <span>Sem erros de ortografia ou pontuação</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#006B3D] mt-0.5 flex-shrink-0" />
                      <span>Objetivo alinhado à vaga</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#006B3D] mt-0.5 flex-shrink-0" />
                      <span>Disponibilidade clara e realista</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#006B3D] mt-0.5 flex-shrink-0" />
                      <span>Disciplinas e projetos relevantes destacados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#006B3D] mt-0.5 flex-shrink-0" />
                      <span>Competências verificáveis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#006B3D] mt-0.5 flex-shrink-0" />
                      <span>Links funcionais (LinkedIn, portfólio, GitHub, se aplicável)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#006B3D] mt-0.5 flex-shrink-0" />
                      <span>Modelo visual limpo e legível</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <p className="text-lg leading-relaxed mt-6">
                Se tudo estiver em ordem, respire fundo — você está pronto.
              </p>
            </section>

            {/* CTA Intermediário */}
            <Card className="bg-gradient-to-br from-[#006B3D]/10 to-accent/10 border-[#006B3D]/20 mb-12">
              <CardContent className="pt-8 pb-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Quer um modelo editável e pronto para personalizar?</h3>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Baixe gratuitamente nosso template de currículo para estágio e comece agora mesmo!
                </p>
                <Button size="lg" className="bg-[#006B3D] hover:bg-[#005a32]" asChild>
                  <Link to="/criar-curriculo">
                    Criar Meu Currículo Grátis
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Conclusão */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-[#006B3D]" />
                Conclusão: Seu Currículo é Sua Primeira Impressão — Faça-a Contar
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Montar um currículo para estágio não é sobre preencher lacunas de experiência. É sobre contar uma história coerente de potencial, disposição e alinhamento.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Cada seção, cada palavra, cada espaço em branco deve servir a esse propósito. E quando você consegue transmitir isso com clareza, respeito e autenticidade, as portas começam a se abrir — não por acaso, mas por merecimento.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Lembre-se: o estágio não é apenas uma etapa acadêmica. É o seu primeiro passo como protagonista da sua carreira. E tudo começa com um documento aparentemente simples, mas carregado de significado.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Se este guia foi útil, compartilhe com colegas que também estão nessa jornada. E continue sua preparação com nossos outros conteúdos — como <Link to="/blog/10-erros-comuns-curriculos" className="text-[#006B3D] hover:underline font-semibold">os 10 erros comuns em currículos que você deve evitar</Link> ou <Link to="/blog/preparar-curriculo-sistemas-ats" className="text-[#006B3D] hover:underline font-semibold">como preparar seu currículo para sistemas ATS</Link>.
              </p>
              
              <p className="text-lg leading-relaxed font-semibold">
                Seu futuro profissional está sendo construído agora. Faça valer cada detalhe.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-[#006B3D]" />
                Perguntas Frequentes (FAQ)
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">1. Quantas páginas deve ter um currículo para estágio?</h3>
                    <p className="text-muted-foreground">
                      Idealmente, apenas uma página. Recrutadores gastam em média 6 segundos lendo um currículo inicial — seja direto e objetivo.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">2. Preciso ter experiência anterior para fazer um bom currículo de estágio?</h3>
                    <p className="text-muted-foreground">
                      Não. Estágios são oportunidades de primeiro contato com o mercado. Destaque projetos, disciplinas, cursos e competências adquiridas na faculdade ou em atividades paralelas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">3. Posso usar o mesmo currículo para todas as vagas?</h3>
                    <p className="text-muted-foreground">
                      Não é recomendado. Adapte seu currículo para cada vaga, especialmente o objetivo profissional e as competências destacadas, conforme as exigências do anúncio.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">4. Devo incluir meu LinkedIn no currículo?</h3>
                    <p className="text-muted-foreground">
                      Sim, se o perfil estiver atualizado e profissional. Um LinkedIn desatualizado ou com fotos informais pode prejudicar sua imagem.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">5. É obrigatório colocar a previsão de conclusão do curso?</h3>
                    <p className="text-muted-foreground">
                      Sim. A duração esperada do estágio muitas vezes depende de quanto tempo você ainda tem de curso. A previsão de conclusão é uma informação-chave para o recrutador.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">6. Posso colocar disponibilidade para estágio remoto?</h3>
                    <p className="text-muted-foreground">
                      Sim, especialmente se a vaga for híbrida ou remota. Deixe claro se tem internet estável, equipamento próprio e horário definido para atividades remotas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">7. Qual a melhor forma de enviar o currículo?</h3>
                    <p className="text-muted-foreground">
                      Sempre em PDF, com nome de arquivo profissional (ex.: Nome_Sobrenome_Curriculo_Estagio_Area.pdf). Evite arquivos editáveis ou compactados.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Fontes */}
            <section className="mb-12 p-6 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                Este artigo foi cuidadosamente elaborado com base em tendências atuais do mercado de estágio no Brasil, diretrizes do MEC e práticas de recrutamento de empresas como Ambev, Natura, Itaú e startups do Cubo Itaú. Fontes complementares incluem pesquisas da Catho, CIEE e Fundação Getulio Vargas.
              </p>
            </section>

            {/* CTA Final */}
            <Card className="bg-gradient-to-br from-[#006B3D] to-[#005a32] text-white mb-12">
              <CardContent className="pt-8 pb-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Pronto para Criar Seu Currículo de Estágio?</h3>
                <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                  Use nossa ferramenta gratuita e crie um currículo profissional que vai destacar você entre os candidatos.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/criar-curriculo">
                    Criar Meu Currículo Grátis
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

export default BlogArticle10;