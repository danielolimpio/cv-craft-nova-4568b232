import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BlogSidebar from "@/components/BlogSidebar";
import AuthorBio from "@/components/AuthorBio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin, Target, TrendingUp, Users, CheckCircle2, XCircle, Clock } from "lucide-react";
import { generateArticleSchema, generateBreadcrumbSchema, articleEntities } from "@/lib/schema";
import RelatedArticles from "@/components/RelatedArticles";

const BlogArticle8 = () => {
  const articleUrl = "/blog/perfil-linkedin-recrutadores";
  const articleData = {
    title: "Como criar um perfil no LinkedIn que atrai recrutadores",
    description: "Descubra as melhores práticas para construir um perfil no LinkedIn que chame a atenção de recrutadores e gere oportunidades.",
    datePublished: "2025-01-29",
    dateModified: "2025-01-29",
    author: { name: "Daniel Olimpio" },
    image: "https://fazercurriculo.com/blog/perfil-linkedin-recrutadores.jpg",
    url: "https://fazercurriculo.com/blog/perfil-linkedin-recrutadores",
    about: articleEntities[articleUrl],
    relatedLinks: ["/blog/curriculo-vs-linkedin-2026", "/blog/curriculo-ti-priorizar-2026", "/blog/o-que-recrutadores-buscam-curriculo"]
  };

  const breadcrumbSchemaItems = [
    { name: "Blog", url: "/blog" },
    { name: "Como criar um perfil no LinkedIn que atrai recrutadores", url: "/blog/perfil-linkedin-recrutadores" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Como criar um perfil no LinkedIn que atrai recrutadores" }
  ];

  return (
    <>
      <Helmet>
        <title>Perfil LinkedIn: Atraia 3x Mais Recrutadores ✓ 2026</title>
        <meta name="description" content="87% dos recrutadores buscam no LinkedIn antes do currículo. Otimize título, resumo, foto e experiências para ser encontrado e chamado para entrevistas." />
        <meta name="keywords" content="linkedin, perfil profissional, recrutadores, networking, oportunidades de emprego, perfil linkedin, otimização linkedin" />
        <link rel="canonical" href="https://fazercurriculo.com/blog/perfil-linkedin-recrutadores" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Como criar um perfil no LinkedIn que atrai recrutadores" />
        <meta property="og:description" content="Descubra as melhores práticas para construir um perfil no LinkedIn que chame a atenção de recrutadores e gere oportunidades." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://fazercurriculo.com/blog/perfil-linkedin-recrutadores" />
        <meta property="og:image" content="https://fazercurriculo.com/blog/perfil-linkedin-recrutadores.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Como criar um perfil no LinkedIn que atrai recrutadores" />
        <meta name="twitter:description" content="Descubra as melhores práticas para construir um perfil no LinkedIn que chame a atenção de recrutadores e gere oportunidades." />
        <meta name="twitter:image" content="https://fazercurriculo.com/blog/perfil-linkedin-recrutadores.jpg" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(generateArticleSchema(articleData))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema(breadcrumbSchemaItems))}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="flex-1 max-w-4xl">
                <Breadcrumb items={breadcrumbItems} />
          
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 hover:bg-secondary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o Blog
            </Button>
          </Link>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Como criar um perfil no LinkedIn que atrai recrutadores
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
                    <time dateTime="2025-11-29">29 de Novembro, 2025</time>
                    <span>•</span>
                    <span>12 min de leitura</span>
                  </div>
                </div>
              </div>

              <img 
                src="/blog/perfil-linkedin-recrutadores.jpg" 
                alt="Como criar um perfil no LinkedIn que atrai recrutadores"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg mb-8"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Você já atualizou seu currículo, ajustou suas expectativas e até mandou dezenas de candidaturas — mas as respostas continuam escassas? Enquanto isso, colegas com trajetórias parecidas recebem mensagens de headhunters e convites para entrevistas que você nem sonhou. A diferença, muitas vezes, não está na experiência… mas no perfil do LinkedIn.
              </p>

              <p>
                Na era digital, seu perfil no LinkedIn deixou de ser um simples "currículo online". Ele é sua carta de apresentação 24 horas por dia, seu cartão de visitas global e, principalmente, uma vitrine ativa para recrutadores que buscam talentos — mesmo quando você não está procurando emprego.
              </p>

              <p>
                A boa notícia? Criar um perfil no LinkedIn que atrai recrutadores não depende de segredos esotéricos, nem de milhares de conexões. Depende de clareza, intencionalidade e uma estrutura estratégica. Neste guia, você vai descobrir as melhores práticas para construir um perfil no LinkedIn que chame a atenção de recrutadores e gere oportunidades reais — com exemplos práticos, dicas acionáveis e insights baseados em dados do mercado brasileiro.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center">
                <Target className="w-8 h-8 mr-3" style={{ color: '#006B3D' }} />
                Por que recrutadores realmente olham seu perfil (e o que eles procuram)
              </h2>

              <p>
                Antes de ajustar seu perfil, entenda o olhar de quem está do outro lado da tela. Recrutadores não navegam pelo LinkedIn por curiosidade — eles têm um problema específico para resolver: preencher uma vaga com alguém que entregue resultados, se adapte à cultura da empresa e tenha credibilidade comprovada.
              </p>

              <p>
                Segundo uma pesquisa da FGV (Fundação Getulio Vargas), mais de 85% dos recrutadores brasileiros usam o LinkedIn como primeira fonte de triagem de candidatos. E em menos de 15 segundos, eles decidem se seu perfil merece atenção.
              </p>

              <div className="bg-secondary/20 border-l-4 border-[#006B3D] p-6 rounded-r-lg my-8">
                <p className="font-semibold mb-4">Nesse curto espaço, três elementos são decisivos:</p>
                <ul className="space-y-2">
                  <li><strong>Clareza na proposta de valor</strong> (qual problema você resolve?);</li>
                  <li><strong>Credibilidade demonstrada</strong> (resultados, recomendações, consistência);</li>
                  <li><strong>Alinhamento com a vaga</strong> (a linguagem e os termos usados batem com a descrição do cargo?).</li>
                </ul>
              </div>

              <p>
                Se seu perfil parecer genérico, confuso ou desatualizado, ele será arquivado — mesmo que você seja perfeitamente qualificado.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3" style={{ color: '#006B3D' }} />
                Como criar um perfil no LinkedIn que atrai recrutadores: os 5 pilares estratégicos
              </h2>

              <p>
                Construir um perfil eficaz não é preencher campos. É contar uma história convincente com dados. Veja os cinco pilares essenciais:
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                1. Foto e banner: primeira impressão com intenção
              </h3>

              <p>
                Sua foto não precisa ser de estúdio, mas deve transmitir profissionalismo e acessibilidade. Evite selfies, fundos bagunçados ou óculos escuros. Um sorriso natural e um fundo neutro fazem milagres.
              </p>

              <p>
                O banner (imagem do cabeçalho), por sua vez, é subutilizado por 90% dos usuários. Use-o para reforçar sua especialidade: um designer pode mostrar um projeto; um gestor de pessoas, uma frase sobre liderança humana; um analista de dados, uma visualização impactante.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                2. Título (headline): seu cartão de visitas em 220 caracteres
              </h3>

              <p>
                Muitos escrevem apenas o cargo atual: "Analista de Marketing". Isso é insuficiente. Recrutadores buscam por palavras-chave e valor.
              </p>

              <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg my-6">
                <p className="font-semibold mb-3">Prefira:</p>
                <p className="italic text-lg">"Especialista em Growth Marketing | Ajudei 3 startups a dobrar sua receita com automação e testes A/B"</p>
              </div>

              <p className="font-semibold">Inclua:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Sua especialidade;</li>
                <li>Seu público ou setor;</li>
                <li>Um resultado concreto ou promessa clara.</li>
              </ul>

              <p>
                Essa linha aparece em todas as buscas, mesmo quando seu nome não é digitado. Não a subestime.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                3. Resumo (seção "Sobre"): seu pitch de 3 parágrafos
              </h3>

              <p>
                Aqui, você tem espaço para humanizar sua trajetória. Estruture assim:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Parágrafo 1:</strong> Quem você é e que tipo de impacto gera.</li>
                <li><strong>Parágrafo 2:</strong> Principais conquistas (com números, se possível).</li>
                <li><strong>Parágrafo 3:</strong> O que busca agora e como gostaria de ser contatado.</li>
              </ul>

              <p>
                Evite jargões vagos como "apaixonado por inovação". Substitua por:
              </p>

              <p className="italic bg-secondary/20 p-4 rounded-lg my-4">
                "Nos últimos 4 anos, desenvolvi estratégias de conteúdo que geraram mais de 1,2 milhão de leads qualificados para empresas B2B no Brasil."
              </p>

              <div className="bg-secondary/20 border-l-4 border-[#006B3D] p-6 rounded-r-lg my-8">
                <p className="font-semibold">Dica:</p>
                <p>Inclua palavras-chave como "gestão de equipe", "transformação digital" ou "recrutamento estratégico" se forem relevantes — isso melhora seu ranqueamento nas buscas internas do LinkedIn.</p>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                4. Experiência profissional: menos tarefas, mais impacto
              </h3>

              <p>
                Esqueça listas do tipo "responsável por…". Recrutadores querem saber o que mudou depois que você entrou.
              </p>

              <p className="font-semibold">Use o formato:</p>
              <p className="text-center text-lg font-semibold my-4 text-[#006B3D]">
                Ação + Métrica + Contexto
              </p>

              <p className="italic bg-accent/10 p-4 rounded-lg my-4">
                Ex: "Liderei a migração de sistemas legados para a nuvem, reduzindo custos operacionais em 35% e melhorando a estabilidade da plataforma."
              </p>

              <p>
                Se não tiver números exatos, use aproximações razoáveis ("cerca de", "mais de") ou indicadores qualitativos ("eliminou gargalos críticos no fluxo de aprovação").
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                5. Recomendações e habilidades: a prova social que pesa
              </h3>

              <p>
                Habilidades endossadas por colegas ganham mais peso. Peça recomendações específicas — não genéricas. Um bom modelo de pedido:
              </p>

              <p className="italic bg-secondary/20 p-4 rounded-lg my-4">
                "Você poderia destacar como trabalhamos juntos no projeto X e o resultado que alcançamos?"
              </p>

              <p>
                Priorize habilidades alinhadas às vagas que deseja, e não todas que você tem. O algoritmo do LinkedIn favorece perfis com foco temático.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center">
                <Linkedin className="w-8 h-8 mr-3" style={{ color: '#006B3D' }} />
                Palavras-chave: o segredo invisível que conecta você às vagas
              </h2>

              <p>
                O LinkedIn funciona, em parte, como um motor de busca profissional. Se você não usa as palavras que recrutadores digitam, simplesmente não aparece.
              </p>

              <p>
                Use ferramentas como o Google Trends Brasil ou analise descrições de vagas no Trabalha Brasil (plataforma do governo federal) para identificar termos em alta na sua área.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="border border-border p-4 text-left font-semibold">Setor</th>
                      <th className="border border-border p-4 text-left font-semibold">Palavras-chave relevantes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4 font-medium">Tecnologia</td>
                      <td className="border border-border p-4">"desenvolvimento ágil", "cloud AWS", "segurança da informação"</td>
                    </tr>
                    <tr className="bg-secondary/20">
                      <td className="border border-border p-4 font-medium">RH</td>
                      <td className="border border-border p-4">"employer branding", "gestão de desempenho", "DEI (Diversidade, Equidade e Inclusão)"</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-medium">Finanças</td>
                      <td className="border border-border p-4">"análise de risco", "reporting financeiro", "FP&A"</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Incorpore essas expressões de forma natural no título, resumo e experiências.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center">
                <XCircle className="w-8 h-8 mr-3 text-destructive" />
                Erros fatais que sabotam perfis promissores
              </h2>

              <p>
                Mesmo com boa experiência, pequenos deslizes afastam recrutadores:
              </p>

              <div className="space-y-4 my-6">
                <div className="flex items-start space-x-3 bg-destructive/10 p-4 rounded-lg">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>Perfil incompleto (menos de 80%):</strong> o algoritmo penaliza;</p>
                </div>
                <div className="flex items-start space-x-3 bg-destructive/10 p-4 rounded-lg">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>Foto de avatar, desenho ou ausência:</strong> sinal de desleixo;</p>
                </div>
                <div className="flex items-start space-x-3 bg-destructive/10 p-4 rounded-lg">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>Ausência de contato ou modo "aberto a oportunidades":</strong> dificulta o alcance;</p>
                </div>
                <div className="flex items-start space-x-3 bg-destructive/10 p-4 rounded-lg">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>Postagens negativas ou polêmicas:</strong> recrutadores checam seu feed.</p>
                </div>
              </div>

              <p>
                Ative a opção "Aberto a oportunidades" (nas configurações do perfil), mas configure para que só recrutadores vejam — assim você evita alarmar seu empregador atual.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center">
                <Clock className="w-8 h-8 mr-3" style={{ color: '#006B3D' }} />
                Mantenha seu perfil vivo: a estratégia dos 5 minutos semanais
              </h2>

              <p>
                Um perfil estático perde relevância. Você não precisa postar diariamente, mas sinalizar atividade é crucial.
              </p>

              <p className="font-semibold">Ações rápidas e eficazes:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Curtir ou comentar com insights em publicações de líderes do seu setor;</li>
                <li>Compartilhar um aprendizado breve ("Hoje descobri que…");</li>
                <li>Atualizar uma conquista recente na seção de experiências.</li>
              </ul>

              <p>
                Essas microações sinalizam ao algoritmo que você está ativo, engajado e relevante — aumentando sua visibilidade orgânica.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center">
                <CheckCircle2 className="w-8 h-8 mr-3" style={{ color: '#006B3D' }} />
                Conclusão: Seu próximo emprego pode começar com um clique… no seu próprio perfil
              </h2>

              <p>
                Como criar um perfil no LinkedIn que atrai recrutadores é, acima de tudo, uma questão de empatia: colocar-se no lugar de quem busca soluções. Quando você deixa claro o que resolve, para quem e com que resultados, transforma seu perfil em um ímã de oportunidades — mesmo sem estar "procurando emprego".
              </p>

              <p>
                Lembre-se: no mercado atual, visibilidade bem direcionada vale mais que experiência silenciosa. Um recrutador não contrata quem "sabe muito", mas quem consegue demonstrar valor de forma clara e confiável.
              </p>

              <div className="bg-gradient-to-r from-[#006B3D]/10 to-secondary/10 p-8 rounded-2xl my-12 text-center border border-[#006B3D]/20">
                <p className="text-xl font-semibold mb-4">
                  Pronto para destacar suas habilidades no LinkedIn?
                </p>
                <p className="text-muted-foreground mb-6">
                  Comece criando um currículo profissional que complementa perfeitamente seu perfil
                </p>
                <Link to="/criar-curriculo">
                  <Button size="lg" className="btn-hero text-lg px-8">
                    Criar Currículo Grátis
                  </Button>
                </Link>
              </div>

              <p className="font-semibold">Se este guia ajudou, explore também nossos conteúdos complementares:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <Link to="/blog/destaque-habilidades-estrategia-impacto" className="text-[#006B3D] hover:underline font-medium">
                    Leia nosso guia completo sobre como destacar suas habilidades com estratégia e impacto
                  </Link>
                </li>
                <li>Descubra como escrever uma carta de apresentação persuasiva que conquista</li>
                <li>E se você está em transição de carreira, não perca: estratégias eficazes para reposicionar sua experiência ao mudar de área.</li>
              </ul>

              <p>
                Compartilhe este artigo com alguém que merece ser descoberto — e valorizado — pelo que realmente entrega.
              </p>

              {/* FAQ Section */}
              <div className="mt-16 bg-secondary/20 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Perguntas Frequentes (FAQ)
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#006B3D]">
                      Como saber se meu perfil está aparecendo para recrutadores?
                    </h3>
                    <p>
                      Use a ferramenta "Visualizações do perfil" no LinkedIn. Se recrutadores aparecem entre os visitantes, seu perfil está no radar. Caso contrário, revise palavras-chave e completude.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#006B3D]">
                      Devo aceitar todas as conexões no LinkedIn?
                    </h3>
                    <p>
                      Não. Priorize conexões relevantes ao seu setor ou objetivo. Perfis com redes focadas têm mais autoridade algorítmica e geram indicações de melhor qualidade.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#006B3D]">
                      Posso usar o LinkedIn mesmo sem experiência formal?
                    </h3>
                    <p>
                      Sim. Destaque projetos acadêmicos, voluntariado, freelas ou até iniciativas pessoais. O essencial é mostrar aplicação prática de habilidades — como ensina o SEBRAE em seus materiais sobre empregabilidade jovem.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#006B3D]">
                      Com que frequência devo atualizar meu perfil?
                    </h3>
                    <p>
                      Idealmente, a cada conquista relevante (novo projeto, curso, resultado). Mesmo sem mudanças, revise a cada 6 meses para ajustar palavras-chave conforme o mercado.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#006B3D]">
                      O LinkedIn Premium vale a pena para quem busca emprego?
                    </h3>
                    <p>
                      Depende. A versão gratuita já oferece 90% do que você precisa. O Premium é útil se você está em busca ativa e quer ver quem visualizou seu perfil ou enviar InMails diretos — mas não é essencial para atrair recrutadores.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-16">
              <RelatedArticles currentUrl={articleUrl} />
              <AuthorBio />
            </div>
          </article>
              </div>

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

export default BlogArticle8;