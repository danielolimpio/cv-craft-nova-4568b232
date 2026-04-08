import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BlogSidebar from "@/components/BlogSidebar";
import AuthorBio from "@/components/AuthorBio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Lightbulb, TrendingUp, CheckCircle2, AlertCircle, Users, Award } from "lucide-react";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, articleEntities } from "@/lib/schema";
import RelatedArticles from "@/components/RelatedArticles";

const BlogArticle7 = () => {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Destaque suas habilidades com estratégia e impacto" }
  ];

  const articleUrl = "/blog/destaque-habilidades-estrategia-impacto";
  const articleData = {
    title: "Como Destacar Habilidades no Currículo com Impacto",
    description: "Aprenda a identificar, organizar e comunicar suas habilidades de forma estratégica — com exemplos práticos que chamam atenção de recrutadores.",
    image: "/blog/destaque-habilidades-estrategia.jpg",
    url: "https://fazercurriculo.com/blog/destaque-habilidades-estrategia-impacto",
    datePublished: "2025-01-29",
    dateModified: "2025-01-29",
    author: { name: "Daniel Olímpio" },
    about: articleEntities[articleUrl],
    relatedLinks: ["/blog/objetivo-profissional-curriculo", "/blog/10-erros-comuns-curriculos", "/blog/curriculo-ingles-estrutura-erros"]
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog", url: "/blog" },
    { name: articleData.title, url: "/blog/destaque-habilidades-estrategia-impacto" }
  ]);

  const articleSchema = generateArticleSchema(articleData);

  const faqData = [
    {
      question: "Como destacar habilidades sem experiência profissional formal?",
      answer: "Foque em projetos acadêmicos, voluntariado, empreendimentos pessoais ou até hobbies que exigiram organização, criatividade ou liderança. O importante é mostrar aplicação prática."
    },
    {
      question: "Quais são as habilidades mais valorizadas no Brasil em 2025?",
      answer: "Segundo o LinkedIn Workforce Report Brasil 2025, liderança adaptativa, resiliência emocional, análise de dados e comunicação clara estão entre as competências mais demandadas — tanto em áreas técnicas quanto humanas."
    },
    {
      question: "Posso usar as mesmas habilidades para vagas diferentes?",
      answer: "Sim, mas recontextualize. A mesma habilidade de 'gestão de tempo' pode ser apresentada como 'entrega de projetos no prazo' para uma vaga de PMO ou como 'capacidade de atender múltiplos clientes simultaneamente' para uma vaga comercial."
    },
    {
      question: "Onde posso validar minhas habilidades de forma oficial?",
      answer: "Plataformas como SENAI, SEBRAE e Fundação Getulio Vargas (FGV) oferecem certificações reconhecidas no mercado brasileiro. Além disso, cursos da Coursera e Alura com certificados verificáveis ajudam a reforçar seu perfil."
    }
  ];

  const faqSchema = generateFAQSchema(faqData);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Habilidades no Currículo: Estratégia de Impacto ✓ 2026</title>
        <meta name="description" content="Aprenda a destacar suas habilidades com impacto real no currículo. Exemplos práticos de hard e soft skills que recrutadores buscam em 2026. Destaque-se agora!" />
        <meta property="og:title" content={articleData.title} />
        <meta property="og:description" content={articleData.description} />
        <meta property="og:image" content={articleData.image} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Article */}
            <article className="flex-1 max-w-4xl">
              <Breadcrumb items={breadcrumbItems} />

          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-6 mt-6">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {articleData.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {articleData.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 border-b border-t py-4">
              <span>Por {articleData.author.name}</span>
              <span>•</span>
              <time dateTime={articleData.datePublished}>29 de Novembro, 2025</time>
              <span>•</span>
              <span>12 min de leitura</span>
            </div>
          </header>

          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src={articleData.image}
              alt={articleData.title}
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              No mundo do trabalho atual, dominado por algoritmos de recrutamento, perfis saturados e concorrência acirrada, não basta ter habilidades — é preciso saber apresentá-las com clareza, propósito e inteligência estratégica. Muitos profissionais talentosos passam despercebidos não por falta de competência, mas por não conseguirem traduzir seu valor em linguagem compreensível — e irresistível — para gestores, recrutadores ou sistemas de triagem.
            </p>

            <p className="mb-8">
              Se você já se perguntou por que colegas com trajetórias semelhantes conseguem entrevistas que você não obtém, ou por que seus currículos parecem "desaparecer" após o envio, talvez a resposta esteja menos naquilo que você sabe… e mais em como você comunica o que sabe.
            </p>

            <p className="mb-12">
              Este artigo vai te mostrar, passo a passo, como destacar suas habilidades com estratégia e impacto — transformando qualificações em argumentos persuasivos, experiências em narrativas de valor e competências em diferencias reais.
            </p>

            {/* Section 1 */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-12">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Por que saber comunicar suas habilidades é tão crucial hoje?</h2>
                  
                  <p className="mb-4">
                    O mercado de trabalho não compra "conhecimentos abstratos". Ele compra soluções. Resultados. Respostas a problemas.
                  </p>

                  <p className="mb-4">
                    Recrutadores gastam, em média, menos de 7 segundos lendo um currículo, segundo estudos do MIT e da Universidade de Toronto. Nesse curto espaço de tempo, o que conta não é a lista de tarefas que você realizou, mas a evidência clara de que você gerou valor.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-4">
              Aqui entra o poder da comunicação estratégica de habilidades:
            </p>

            <ul className="space-y-3 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>Transformar "sabia Excel" em "otimizei relatórios financeiros com Excel, reduzindo o tempo de análise em 40%";</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>Converter "trabalhei com atendimento ao cliente" em "aumentei a satisfação do cliente em 25% ao implementar um novo protocolo de escuta ativa".</span>
              </li>
            </ul>

            <p className="mb-12">
              É essa ponte entre o que você fez e o impacto que gerou que faz toda a diferença.
            </p>

            {/* Section 2 */}
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-12">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Como identificar suas habilidades com precisão (sem cair na armadilha do óbvio)</h2>
                  
                  <p className="mb-6">
                    Muitos profissionais cometem um erro comum: listam apenas habilidades técnicas ("Photoshop", "gestão de projetos", "inglês avançado") e ignoram as competências comportamentais e contextuais que realmente movem negócios.
                  </p>

                  <p className="mb-6">
                    Para evitar isso, siga esta abordagem prática:
                  </p>

                  <h3 className="text-xl font-semibold mb-4">1. Use a técnica STAR para revisitar suas experiências</h3>
                  
                  <ul className="space-y-2 mb-6">
                    <li><strong>Situação:</strong> Em que contexto você estava?</li>
                    <li><strong>Tarefa:</strong> Qual era seu desafio ou objetivo?</li>
                    <li><strong>Ação:</strong> Que habilidades você usou para enfrentá-lo?</li>
                    <li><strong>Resultado:</strong> Qual foi o impacto mensurável?</li>
                  </ul>

                  <p className="mb-6">
                    Essa estrutura ajuda a revelar não só o que você fez, mas como e por que funcionou.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">2. Peça feedback a colegas e gestores</h3>
                  
                  <p className="mb-4">
                    Às vezes, nossas maiores forças são invisíveis para nós. Pergunte a três pessoas com quem já trabalhou:
                  </p>

                  <p className="italic mb-6 pl-4 border-l-2 border-accent">
                    "Qual foi a maior contribuição que você acha que eu trouxe para o time?"
                  </p>

                  <p className="mb-6">
                    As respostas frequentemente revelam padrões que você nem percebia — como capacidade de mediação, pensamento sistêmico ou adaptação sob pressão.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">3. Agrupe habilidades em categorias estratégicas</h3>
                  
                  <p className="mb-4">
                    Divida suas competências em:
                  </p>

                  <ul className="space-y-2 mb-4">
                    <li><strong>Técnicas</strong> (ferramentas, métodos, conhecimentos específicos);</li>
                    <li><strong>Comportamentais</strong> (comunicação, empatia, resiliência);</li>
                    <li><strong>Contextuais</strong> (capacidade de entender o negócio, setor ou cultura organizacional).</li>
                  </ul>

                  <p>
                    Essa organização facilita adaptar seu discurso conforme o público-alvo — seja um recrutador de RH generalista ou um CTO técnico.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-12">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Destaque suas habilidades com estratégia e impacto: o passo decisivo</h2>
                  
                  <p className="mb-4">
                    Identificar habilidades é só o começo. O verdadeiro diferencial está em saber posicioná-las com intencionalidade.
                  </p>

                  <p className="mb-6">
                    Imagine que suas habilidades são ingredientes. Sozinhos, não impressionam. Mas quando usados em uma receita que resolve a fome exata do empregador, viram prato principal.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Dica prática: Adapte suas habilidades ao "job description"</h3>
                  
                  <p className="mb-4">
                    Antes de se candidatar, analise a vaga com atenção. Quais verbos são usados? ("liderar", "otimizar", "inovar"?) Quais problemas a empresa busca resolver?
                  </p>

                  <p className="mb-6">
                    Então, reescreva suas conquistas usando a mesma linguagem da vaga. Isso não é "enganar" — é demonstrar que você fala a língua do negócio.
                  </p>

                  <div className="bg-background p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2">Exemplo:</p>
                    <p className="mb-2">Vaga menciona "gestão de stakeholders complexos".</p>
                    <p className="mb-2">Em vez de dizer "coordenei reuniões", diga:</p>
                    <p className="italic">"Articulei alinhamento entre 5 áreas com interesses conflitantes, garantindo aprovação do projeto em 3 semanas."</p>
                  </div>

                  <p>
                    Isso mostra compreensão profunda do desafio — e não apenas execução de tarefas.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold mb-6">Aplicando sua estratégia em diferentes formatos</h2>
            
            <p className="mb-6">
              Seu currículo, perfil do LinkedIn e entrevistas exigem adaptações sutis, mas poderosas.
            </p>

            <h3 className="text-xl font-semibold mb-4">No currículo:</h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>Use números, porcentagens e prazos sempre que possível;</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>Inicie cada conquista com um verbo de ação forte ("liderou", "implementou", "reduziu");</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>Evite adjetivos subjetivos ("excelente", "altamente qualificado") — prefira fatos.</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">No LinkedIn:</h3>
            
            <p className="mb-4">
              Seu resumo (a seção "Sobre") deve funcionar como um elevator pitch. Responda em 3 linhas:
            </p>

            <ul className="space-y-2 mb-4">
              <li>O que você resolve;</li>
              <li>Para quem;</li>
              <li>Com que resultados.</li>
            </ul>

            <div className="bg-accent/10 p-4 rounded-lg mb-6 italic">
              "Ajudo empresas de tecnologia a reter talentos por meio de programas de desenvolvimento personalizados. Nos últimos 3 anos, contribuí para reduzir a rotatividade em 30% em 4 startups do ecossistema brasileiro."
            </div>

            <h3 className="text-xl font-semibold mb-4">Na entrevista:</h3>
            
            <p className="mb-4">
              Use a regra dos 3 Cs:
            </p>

            <ul className="space-y-2 mb-6">
              <li><strong>Clareza:</strong> seja direto;</li>
              <li><strong>Contexto:</strong> explique brevemente a situação;</li>
              <li><strong>Consequência:</strong> mostre o impacto gerado.</li>
            </ul>

            <p className="mb-4">
              Evite monólogos. Convide o recrutador a perguntar mais:
            </p>

            <p className="italic mb-12 pl-4 border-l-2 border-primary">
              "Fico feliz em detalhar como isso funcionou na prática — você gostaria de saber mais sobre a metodologia ou sobre os resultados?"
            </p>

            {/* Section 5 */}
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-lg mb-12">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Erros comuns (e como evitá-los)</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Listar habilidades sem comprovação</p>
                      <p>→ Solução: sempre vincule cada habilidade a um exemplo concreto.</p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">Usar jargões sem significado real</p>
                      <p>→ "Pensamento fora da caixa" não significa nada. "Propus uma nova abordagem de vendas que gerou R$ 200 mil em receita extra" sim.</p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">Ignorar a cultura da empresa</p>
                      <p>→ Pesquise no site da empresa, em redes sociais e no Glassdoor. Uma startup valoriza agilidade; uma empresa tradicional, talvez rigor processual. Adapte seu discurso.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-12 text-muted-foreground italic">
              Segundo o Catho, uma das maiores plataformas de emprego do Brasil, candidatos que personalizam suas candidaturas têm até 3x mais chances de serem chamados para entrevistas.
            </p>

            {/* Conclusion */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-12">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Conclusão: Seu valor não é o que você sabe — é o que você faz com isso</h2>
                  
                  <p className="mb-4">
                    Destacar suas habilidades com estratégia e impacto não é sobre autopromoção vazia. É sobre responsabilidade: a responsabilidade de traduzir seu potencial em linguagem que o mercado entenda, valorize e recompense.
                  </p>

                  <p className="mb-4">
                    Você já deu o primeiro passo ao buscar essa clareza. Agora, aplique essas dicas com consistência — em cada atualização de currículo, em cada mensagem de networking, em cada entrevista.
                  </p>

                  <p>
                    E lembre-se: o mercado não precisa de mais gente "qualificada". Precisa de gente que resolva problemas reais. Mostre que você é essa pessoa.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Pronto para Destacar Suas Habilidades?</h3>
              <p className="text-muted-foreground mb-6">
                Crie um currículo profissional que comunica seu valor de forma clara e impactante
              </p>
              <Button size="lg" className="bg-[#006B3D] hover:bg-[#005a32]" asChild>
                <Link to="/criar-curriculo">
                  Criar Meu Currículo Grátis
                </Link>
              </Button>
            </div>

            {/* FAQ Section */}
            <div className="bg-muted/30 p-8 rounded-lg mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Perguntas Frequentes (FAQ)</h2>
              </div>

              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-6 last:border-0">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Articles */}
            <div className="border-t border-border pt-8">
              <h3 className="text-xl font-semibold mb-4">Continue Lendo:</h3>
              <div className="space-y-2">
                <p>
                  <Link to="/blog/como-criar-curriculo-profissional-2026" className="text-primary hover:underline">
                    → Como Criar um Currículo Profissional que se Destaca em 2026
                  </Link>
                </p>
                <p>
                  <Link to="/blog/10-erros-comuns-curriculos" className="text-primary hover:underline">
                    → 10 Erros Comuns em Currículos que Você Deve Evitar
                  </Link>
                </p>
              </div>
            </div>
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
  );
};

export default BlogArticle7;
