import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Target, CheckCircle, AlertCircle, Lightbulb, MessageSquare, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BlogSidebar from "@/components/BlogSidebar";
import AuthorBio from "@/components/AuthorBio";

const BlogArticle9 = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Saiba como escrever uma carta de apresentação que conquiste o empregador" }
  ];

  const articleData = {
    title: "Saiba como escrever uma carta de apresentação que conquiste o empregador",
    description: "Domine a arte de escrever uma carta de apresentação persuasiva que conecta seu valor à vaga desejada.",
    author: "Daniel Olimpio",
    publishDate: "2025-11-30",
    image: "/blog/carta-apresentacao-empregador.jpg",
    url: "https://fazercurriculo.com/blog/carta-apresentacao-empregador"
  };

  const generateBreadcrumbSchema = () => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://fazercurriculo.com${item.href}` : undefined
    }))
  });

  const generateArticleSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.description,
    "image": `https://fazercurriculo.com${articleData.image}`,
    "author": {
      "@type": "Person",
      "name": articleData.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fazer Currículo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fazercurriculo.com/logo.png"
      }
    },
    "datePublished": articleData.publishDate,
    "dateModified": articleData.publishDate
  });

  const generateFAQSchema = () => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Preciso escrever uma carta de apresentação para toda vaga?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, especialmente se a vaga for estratégica ou em empresas que valorizam cultura organizacional — como startups, consultorias e multinacionais no Brasil."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o tamanho ideal de uma carta de apresentação?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Entre 200 e 300 palavras — o equivalente a um bloco curto de texto. Recrutadores valorizam objetividade."
        }
      },
      {
        "@type": "Question",
        "name": "Posso usar a mesma carta para vagas parecidas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adapte pelo menos 30% do conteúdo: o gancho inicial, a conquista citada e a menção aos objetivos da empresa. Copiar integralmente anula o efeito persuasivo."
        }
      },
      {
        "@type": "Question",
        "name": "A carta deve ser enviada no corpo do e-mail ou como anexo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sempre que possível, coloque no corpo do e-mail. Muitos recrutadores não abrem anexos por segurança. Use o PDF apenas se o sistema exigir upload."
        }
      },
      {
        "@type": "Question",
        "name": "Onde posso encontrar boas práticas de escrita profissional no Brasil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O SEBRAE oferece guias gratuitos sobre comunicação em processos seletivos, e a Fundação Getulio Vargas (FGV) publica materiais sobre empregabilidade e branding pessoal com linguagem clara e atualizada."
        }
      }
    ]
  });

  return (
    <>
      <Helmet>
        <title>{articleData.title} | Fazer Currículo</title>
        <meta name="description" content={articleData.description} />
        <link rel="canonical" href={articleData.url} />
        
        <meta property="og:title" content={articleData.title} />
        <meta property="og:description" content={articleData.description} />
        <meta property="og:url" content={articleData.url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://fazercurriculo.com${articleData.image}`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={articleData.title} />
        <meta name="twitter:description" content={articleData.description} />
        <meta name="twitter:image" content={`https://fazercurriculo.com${articleData.image}`} />
        
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateArticleSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateFAQSchema())}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Main Article */}
              <article className="flex-1 max-w-4xl">
                <Breadcrumb items={breadcrumbItems} />
            
            <Link to="/blog" className="inline-flex items-center text-[#006B3D] hover:text-[#005a32] mb-8 transition-colors mt-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o Blog
            </Link>

            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {articleData.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {articleData.description}
              </p>

              <div className="flex items-center space-x-4 text-muted-foreground mb-8 border-t border-b py-4">
                <img 
                  src="/assets/daniel-olimpio.jpg" 
                  alt="Daniel Olimpio" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">Daniel Olimpio</p>
                  <div className="flex items-center space-x-2 text-sm">
                    <time dateTime="2025-11-30">30 de Novembro, 2025</time>
                    <span>•</span>
                    <span>14 min de leitura</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="mb-12 rounded-lg overflow-hidden">
              <img 
                src={articleData.image}
                alt={articleData.title}
                className="w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Imagine esta cena: seu currículo está impecável. Sua experiência, sólida. Mas, mesmo assim, a resposta nunca vem. Enquanto isso, um colega com trajetória semelhante é chamado para entrevistas — e acaba sendo contratado. O que faltou? Muitas vezes, a resposta está em um documento subestimado, mas poderoso: a carta de apresentação.
              </p>

              <p className="leading-relaxed mb-6">
                Longe de ser um formulário burocrático ou uma repetição do currículo, uma carta bem escrita é a ponte entre você como profissional e o problema específico que a empresa precisa resolver. Ela humaniza sua candidatura, contextualiza suas conquistas e demonstra que você não apenas quer o cargo — você entende o que ele exige.
              </p>

              <p className="leading-relaxed mb-8">
                Neste artigo, você vai aprender, passo a passo, como escrever uma carta de apresentação que conquiste o empregador — com linguagem clara, estrutura persuasiva e exemplos reais adaptados ao mercado brasileiro. Ao final, você terá tudo o que precisa para transformar sua carta em um verdadeiro diferencial estratégico.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                Por que a carta de apresentação ainda importa (mais do que você imagina)
              </h2>

              <p className="leading-relaxed mb-6">
                Apesar da digitalização dos processos seletivos, 68% dos recrutadores no Brasil ainda consideram a carta de apresentação um fator decisivo, segundo levantamento do <a href="https://www.catho.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Catho Insights 2025</a>. Em vagas de média e alta complexidade — como gestão, marketing, tecnologia e RH — esse número sobe para mais de 80%.
              </p>

              <p className="leading-relaxed mb-6">
                A razão é simples: o currículo mostra o que você fez; a carta explica por que isso importa para ELES.
              </p>

              <p className="leading-relaxed mb-8">
                Sem uma carta, sua candidatura parece genérica — como se você estivesse disparando o mesmo documento para dezenas de empresas. Com uma carta personalizada, você demonstra atenção, intenção e inteligência emocional — qualidades que nenhum algoritmo substitui.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Saiba como escrever uma carta de apresentação que conquiste o empregador: os 4 pilares essenciais
              </h2>

              <p className="leading-relaxed mb-8">
                Esqueça modelos prontos e frases feitas como "venho por meio desta manifestar meu interesse". O que funciona hoje é clareza, relevância e conexão humana. Veja os quatro pilares que toda carta persuasiva deve ter:
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                1. Abertura com gancho: mostre que você entende o desafio da empresa
              </h3>

              <p className="leading-relaxed mb-6">
                Comece com algo que demonstre pesquisa e empatia. Evite "me chamo X e tenho Y anos de experiência". Prefira algo como:
              </p>

              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <p className="italic">
                  "Ao ler sobre a expansão da área de CX da [Empresa], lembrei imediatamente do projeto que lideramos na [Empresa Anterior], onde reduzimos o churn em 22% em 6 meses com uma nova abordagem centrada no cliente."
                </p>
              </div>

              <p className="leading-relaxed mb-8">
                Isso cria relevância imediata — e faz o recrutador pensar: "Essa pessoa entende o que estamos buscando".
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                2. Corpo com foco em valor, não em tarefas
              </h3>

              <p className="leading-relaxed mb-6">
                Aqui, conecte 2 ou 3 conquistas suas diretamente aos requisitos da vaga. Use a lógica:
              </p>

              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <p className="mb-2">"Vocês precisam de alguém que [problema descrito na vaga].</p>
                <p>Eu resolvi algo parecido em [contexto], gerando [resultado mensurável]."</p>
              </div>

              <p className="leading-relaxed mb-6">
                Exemplo prático para uma vaga de analista de marketing:
              </p>

              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <p className="italic">
                  "A descrição menciona a necessidade de aumentar a conversão em campanhas digitais. Na minha última posição, reestruturei o funil de aquisição do e-commerce, aplicando testes A/B em CTAs e landing pages, o que elevou a taxa de conversão de 2,1% para 3,8% em 90 dias."
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <p className="flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span><strong>Dica:</strong> use palavras-chave da vaga ("gestão de tráfego pago", "análise de funil", "automatização de e-mail marketing") para passar por sistemas ATS (Applicant Tracking Systems).</span>
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                3. Conclusão com chamada clara e tom humano
              </h3>

              <p className="leading-relaxed mb-6">
                Termine com confiança, mas sem arrogância. Reafirme seu interesse e facilite o próximo passo:
              </p>

              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <p className="italic">
                  "Estou animado com a possibilidade de contribuir para os objetivos da [Empresa] e gostaria muito de conversar sobre como minha experiência pode apoiar sua estratégia de crescimento. Fico à disposição para uma entrevista no horário que for mais conveniente."
                </p>
              </div>

              <p className="leading-relaxed mb-8">
                Evite frases passivas como "agradeço a atenção" ou "fico no aguardo". Assuma protagonismo com educação.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                4. Formatação limpa e profissional
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-8 ml-4">
                <li>Limite a um bloco de até 250–300 palavras (cerca de 15–20 linhas);</li>
                <li>Use fonte legível (Arial, Calibri ou Helvetica, tamanho 11 ou 12);</li>
                <li>Inclua seus dados de contato no cabeçalho (nome, e-mail, telefone, LinkedIn);</li>
                <li>Salve como PDF com nome claro: SeuNome_Carta_Empresa.pdf.</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-destructive" />
                O que NUNCA colocar em uma carta de apresentação
              </h2>

              <p className="leading-relaxed mb-6">
                Mesmo com boas intenções, alguns erros comuns afastam recrutadores:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold mb-2">❌ Justificativas negativas:</p>
                  <p className="text-sm mb-2">"Estou saindo do meu emprego porque meu chefe é tóxico."</p>
                  <p className="text-sm">→ Foco no futuro, não no passado.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold mb-2">❌ Generalizações vazias:</p>
                  <p className="text-sm mb-2">"Sou proativo, comprometido e trabalhador."</p>
                  <p className="text-sm">→ Mostre, não diga. Use fatos.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold mb-2">❌ Erros de português ou formatação bagunçada</p>
                  <p className="text-sm">→ Peça a alguém de confiança para revisar — ou use o <a href="https://www.normaculta.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Norma Culta</a>, ferramenta gratuita do MEC, para checar padrões linguísticos.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-semibold mb-2">❌ Copiar e colar a mesma carta para várias vagas</p>
                  <p className="text-sm">→ Uma carta genérica é pior que nenhuma carta. Personalização é o coração da persuasão.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-primary" />
                Modelo prático (sem ser engessado)
              </h2>

              <p className="leading-relaxed mb-6">
                Não se trata de seguir um molde rígido, mas de entender a lógica por trás. Veja um esqueleto flexível:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-8 font-mono text-sm">
                <p className="mb-2">[Seu Nome]</p>
                <p className="mb-4">[Seu e-mail] | [Telefone] | [LinkedIn]</p>
                
                <p className="mb-2">[Nome do recrutador ou "Prezada equipe de RH"]</p>
                <p className="mb-4">[Nome da empresa]</p>
                
                <p className="mb-4">
                  Ao acompanhar o crescimento da [Empresa] no setor de [área], fiquei especialmente impressionado com [projeto, valor ou notícia recente]. Isso ressoou com minha experiência em [área relevante], onde [conquista com métrica].
                </p>
                
                <p className="mb-4">
                  Na [Empresa Anterior], [descreva brevemente um desafio semelhante ao da vaga] e consegui [resultado tangível]. Acredito que essa abordagem pode ajudar vocês a [objetivo mencionado na vaga].
                </p>
                
                <p className="mb-4">
                  Tenho grande interesse em contribuir para [meta específica da empresa] e adoraria conversar sobre como posso agregar à equipe. Estou à disposição para agendarmos uma conversa.
                </p>
                
                <p className="mb-2">Atenciosamente,</p>
                <p>[Seu nome]</p>
              </div>

              <p className="leading-relaxed mb-8">
                Esse modelo é suficientemente estruturado para guiar, mas flexível o bastante para soar autêntico.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">
                Quando a carta de apresentação é opcional… e por que você ainda deve enviá-la
              </h2>

              <p className="leading-relaxed mb-6">
                Muitas plataformas de vagas marcam a carta como "opcional". Isso é uma armadilha sutil.
              </p>

              <p className="leading-relaxed mb-6">
                Enviar uma carta mesmo quando não obrigatória sinaliza iniciativa, cuidado com detalhes e maturidade profissional — qualidades que recrutadores associam a candidatos de alto potencial.
              </p>

              <p className="leading-relaxed mb-8">
                Além disso, em processos com centenas de candidatos, a carta é o que separa os realmente interessados dos que estão "jogando no escuro".
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">
                Conclusão: Sua carta é a voz do seu currículo
              </h2>

              <p className="leading-relaxed mb-6">
                Saiba como escrever uma carta de apresentação que conquiste o empregador não é sobre escrever bem — é sobre pensar estrategicamente. É entender que cada vaga é um convite para resolver um problema, e sua carta é a prova de que você já resolveu algo parecido antes.
              </p>

              <p className="leading-relaxed mb-8">
                Mais do que um documento, ela é um ato de empatia profissional: você se coloca no lugar do empregador, antecipa suas dúvidas e responde com clareza e confiança.
              </p>

              <p className="leading-relaxed mb-6">
                Se este guia foi útil, aprofunde seu aprendizado com nossos conteúdos complementares:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-8 ml-4">
                <li>Leia nosso guia completo sobre <Link to="/blog/perfil-linkedin-recrutadores" className="text-primary hover:underline">como criar um perfil no LinkedIn que atrai recrutadores</Link></li>
                <li>Descubra <Link to="/blog/destaque-habilidades-estrategia-impacto" className="text-primary hover:underline">como destacar suas habilidades com estratégia e impacto</Link></li>
                <li>E se você está em transição de carreira, não perca: estratégias eficazes para reposicionar sua experiência ao mudar de área.</li>
              </ul>

              <p className="leading-relaxed mb-12">
                Compartilhe este artigo com alguém que merece ser ouvido — e contratado — pela força do seu valor, não apenas pela lista de cargos anteriores.
              </p>

              <div className="bg-primary/10 border-2 border-primary rounded-lg p-8 text-center mb-12">
                <h3 className="text-2xl font-bold mb-4">
                  Pronto para criar seu currículo profissional?
                </h3>
                <p className="text-lg mb-6">
                  Use nossa ferramenta gratuita para criar um currículo que complementa sua carta de apresentação perfeitamente.
                </p>
                <Link to="/criar-curriculo">
                  <Button size="lg" className="btn-hero text-lg px-8 py-4">
                    Criar Currículo Grátis
                  </Button>
                </Link>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">
                Perguntas Frequentes (FAQ)
              </h2>

              <div className="space-y-6 mb-12">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-3">
                    Preciso escrever uma carta de apresentação para toda vaga?
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Sim, especialmente se a vaga for estratégica ou em empresas que valorizam cultura organizacional — como startups, consultorias e multinacionais no Brasil.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-3">
                    Qual o tamanho ideal de uma carta de apresentação?
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Entre 200 e 300 palavras — o equivalente a um bloco curto de texto. Recrutadores valorizam objetividade.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-3">
                    Posso usar a mesma carta para vagas parecidas?
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Adapte pelo menos 30% do conteúdo: o gancho inicial, a conquista citada e a menção aos objetivos da empresa. Copiar integralmente anula o efeito persuasivo.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-3">
                    A carta deve ser enviada no corpo do e-mail ou como anexo?
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Sempre que possível, coloque no corpo do e-mail. Muitos recrutadores não abrem anexos por segurança. Use o PDF apenas se o sistema exigir upload.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-3">
                    Onde posso encontrar boas práticas de escrita profissional no Brasil?
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    O <a href="https://www.sebrae.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SEBRAE</a> oferece guias gratuitos sobre comunicação em processos seletivos, e a <a href="https://portal.fgv.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Fundação Getulio Vargas (FGV)</a> publica materiais sobre empregabilidade e branding pessoal com linguagem clara e atualizada.
                  </p>
                </div>
              </div>
            </div>

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

export default BlogArticle9;
