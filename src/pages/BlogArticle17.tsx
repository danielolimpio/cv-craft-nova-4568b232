import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BlogSidebar from "@/components/BlogSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, CheckCircle, XCircle, FileText, Target, ArrowLeft, Lightbulb, AlertTriangle, BookOpen, TrendingUp, MessageSquare, Search, Award, DollarSign, Scale, HandCoins } from "lucide-react";
import AuthorBio from "@/components/AuthorBio";
import danielPhoto from "@/assets/daniel-olimpio.jpg";
import { Helmet } from "react-helmet";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, articleEntities } from "@/lib/schema";
import RelatedArticles from "@/components/RelatedArticles";

const BlogArticle17 = () => {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Como negociar salário em uma entrevista de emprego" }
  ];

  const articleUrl = "/blog/como-negociar-salario-entrevista";
  const articleSchema = generateArticleSchema({
    title: "Como negociar salário em uma entrevista de emprego: o guia completo",
    description: "Aprenda como negociar salário na entrevista de emprego: pesquisa de mercado, pretensão salarial, contraproposta, benefícios e os erros que derrubam até bons candidatos.",
    image: "/blog/como-negociar-salario-entrevista.jpg",
    datePublished: "2026-01-22",
    dateModified: "2026-01-22",
    author: { name: "Daniel Olimpio", url: "/sobre" },
    url: articleUrl,
    about: articleEntities[articleUrl],
    relatedLinks: ["/blog/como-se-preparar-entrevista-emprego-2026", "/blog/o-que-recrutadores-buscam-curriculo", "/blog/carta-apresentacao-empregador"]
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog", url: "/blog" },
    { name: "Como negociar salário em uma entrevista de emprego", url: articleUrl }
  ]);

  const faqSchema = generateFAQSchema([
    { question: "Como responder a pergunta sobre pretensão salarial?", answer: "Apresente uma faixa baseada em pesquisa de mercado (Glassdoor, Catho, Vagas), mostre flexibilidade dentro do pacote total e justifique o valor com base na sua experiência, entregas anteriores e responsabilidades da vaga." },
    { question: "Quando é o momento certo de falar de salário na entrevista?", answer: "O ideal é deixar o recrutador trazer o tema, normalmente entre a segunda e a terceira etapa do processo. Falar antes pode prejudicar a percepção de interesse pela vaga em si." },
    { question: "Posso pedir um salário acima do anúncio da vaga?", answer: "Sim, desde que justificado. Se você tem experiência, certificações ou entregas acima do esperado para o cargo, é válido pedir entre 10% e 30% acima, com argumentos concretos." },
    { question: "Como negociar salário se for meu primeiro emprego?", answer: "Pesquise a média do cargo júnior na sua região e apresente uma faixa próxima ao topo dela. Reforce cursos, projetos acadêmicos, idiomas e disponibilidade total para se valorizar mesmo sem experiência formal." },
    { question: "É correto negociar benefícios além do salário?", answer: "Sim, e em muitos casos os benefícios representam ganho real maior que o salário. Vale-refeição, plano de saúde, home office, PLR, bônus e auxílio educação devem entrar na conta." },
    { question: "O que fazer se a empresa oferece menos do que o esperado?", answer: "Não recuse de imediato. Faça uma contraproposta educada, mostre o valor da sua entrega com dados e abra espaço para negociar benefícios, bônus ou revisão salarial em 6 meses." },
    { question: "Negociar salário pode fazer eu perder a vaga?", answer: "Não, se feito com respeito e baseado em dados. Recrutadores experientes esperam negociação; quem não negocia muitas vezes passa imagem de pouca confiança no próprio valor profissional." }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Como Negociar Salário em Entrevista de Emprego ✓ Guia</title>
        <meta name="description" content="Como negociar salário em uma entrevista de emprego: pesquisa de mercado, pretensão salarial, contraproposta, benefícios e erros para evitar. Guia completo." />
        <meta name="keywords" content="como negociar salário, negociar salário na entrevista, pretensão salarial como responder, como pedir aumento de salário na entrevista, como falar de salário em entrevista, contraproposta salarial, faixa salarial pesquisa, salário inicial primeiro emprego, como calcular pretensão salarial, negociar benefícios trabalho, salário CLT vs PJ negociação, como negociar PLR, como negociar bônus, valor de mercado profissional, salário mediano por cargo, salário Glassdoor Brasil, salário Catho, salário Vagas, salário Robert Half guia, como responder salário pretendido, técnicas de negociação salarial, ancoragem salarial, BATNA negociação trabalho, como negociar home office, como negociar vale-alimentação, salário líquido vs bruto, negociar salário primeiro emprego, negociar salário recém formado, negociar salário programador, negociar salário vendedor, negociar salário enfermeiro, negociar salário administrativo, salário negociar promoção interna, salário expectativa entrevista" />
        <link rel="canonical" href="https://fazercurriculo.com/blog/como-negociar-salario-entrevista" />
        <meta property="og:title" content="Como negociar salário em uma entrevista de emprego: o guia completo" />
        <meta property="og:description" content="Pesquisa de mercado, pretensão salarial, contraproposta e negociação de benefícios: o passo a passo real para chegar à oferta certa." />
        <meta property="og:url" content="https://fazercurriculo.com/blog/como-negociar-salario-entrevista" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://fazercurriculo.com/blog/como-negociar-salario-entrevista.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Como negociar salário em uma entrevista de emprego" />
        <meta name="twitter:description" content="Pesquisa de mercado, pretensão salarial, contraproposta e negociação de benefícios: o passo a passo real." />
        <meta name="twitter:image" content="https://fazercurriculo.com/blog/como-negociar-salario-entrevista.jpg" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <main className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Article */}
            <article className="flex-1 max-w-4xl">
              <Breadcrumb items={breadcrumbItems} />

              <Link to="/blog" className="inline-flex items-center text-[#006B3D] hover:text-[#005a32] mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para o Blog
              </Link>

              {/* Header */}
              <header className="mb-12">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-[#006B3D] text-white text-sm font-semibold rounded-full">
                    Salário
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Como negociar salário em uma entrevista de emprego: o guia completo
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Pesquisa de mercado, pretensão salarial, contraproposta e negociação de benefícios. Um passo a passo direto, com falas testadas em entrevistas reais, para você sair da conversa com a melhor oferta possível, sem queimar a vaga.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-t py-4">
                  <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Daniel Olímpio</span></div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>22 de Janeiro, 2026</span></div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>17 min de leitura</span></div>
                </div>
              </header>

              {/* Featured Image */}
              <div className="mb-12 rounded-lg overflow-hidden">
                <img
                  src="/blog/como-negociar-salario-entrevista.jpg"
                  alt="Candidata negociando salário e cumprimentando o recrutador em uma entrevista de emprego"
                  className="w-full h-auto"
                  width={1280}
                  height={720}
                />
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
                <img src={danielPhoto} alt="Daniel Olímpio" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-foreground">Daniel Olímpio</p>
                  <p className="text-sm text-muted-foreground">Especialista em Currículos e Carreira</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">

                {/* Introdução */}
                <p className="text-lg leading-relaxed mb-6">
                  A primeira vez que alguém me perguntou minha pretensão salarial, eu travei. Era 2014, eu tinha pouca leitura de mercado, e fiz o pior dos cálculos possíveis: peguei o salário que eu ganhava e somei "uns 10% para não parecer ganancioso". Aceitaram na hora. Saí da sala feliz. Dois meses depois, descobri que outra pessoa do mesmo time, com perfil parecido, ganhava 40% a mais. Esse foi o dia em que aprendi, na pele, que <strong>negociar salário não é grosseria, é parte do trabalho</strong>.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Se você está procurando entender de verdade <strong>como negociar salário em uma entrevista de emprego</strong>, este guia foi escrito para te poupar dos erros que eu (e centenas de profissionais que oriento) cometemos. Vou te mostrar como pesquisar o valor certo, como responder a pergunta da pretensão, como fazer contraproposta sem soar arrogante e como decidir quando aceitar, contrapor ou recusar.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Não tem fórmula mágica. Tem método. E método, qualquer pessoa minimamente preparada consegue executar. Vamos por partes.
                </p>

                {/* Etapa 1 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Search className="w-8 h-8 text-[#006B3D]" />
                  Etapa 1: pesquise o valor de mercado antes de abrir a boca
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Negociação sem dado é palpite. E palpite, em conversa com recrutador experiente, derruba. A primeira coisa a fazer, idealmente dias antes da entrevista, é levantar a faixa salarial real para o cargo, o nível de senioridade, a cidade e o porte da empresa. Esses quatro fatores mudam tudo: um analista pleno em São Paulo numa multinacional pode ganhar o dobro de um analista pleno em uma capital do interior numa empresa familiar.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Comece pelas plataformas de avaliação de salário. O <a href="https://www.glassdoor.com.br/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#006B3D] hover:underline font-medium">Glassdoor Brasil</a> permite cruzar cargo + empresa e ver relatos reais de funcionários atuais e ex-funcionários, incluindo faixa de bônus e impressões do processo seletivo. Catho, Vagas e LinkedIn Salary complementam bem o panorama. Anote a mediana, o quartil inferior e o quartil superior. Esses três números viram sua bússola.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Para cargos mais técnicos ou de gestão, vale consultar guias salariais publicados anualmente por consultorias como Robert Half, Michael Page e Page Personnel. Eles trazem faixas por setor, por região e por porte da empresa, com base em milhares de processos reais. São documentos públicos e gratuitos. A <a href="https://hbr.org/topic/negotiating" target="_blank" rel="noopener noreferrer nofollow" className="text-[#006B3D] hover:underline font-medium">Harvard Business Review</a>, em uma série clássica de artigos sobre negociação, mostra que candidatos que chegam com referências externas concretas têm probabilidade significativamente maior de fechar acima da oferta inicial.
                </p>

                <Card className="border-l-4 border-[#006B3D] bg-muted/30 mb-8">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground italic">
                      Dica de quem já passou por isso: converse com pelo menos duas pessoas que trabalham na empresa ou no setor. Mensagens privadas curtas no LinkedIn funcionam. Pergunta direta: "Posso te perguntar uma faixa aproximada para o cargo X aí na empresa?" Maioria responde — e o número real bate diferente do número público.
                    </p>
                  </CardContent>
                </Card>

                {/* Etapa 2 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Scale className="w-8 h-8 text-[#006B3D]" />
                  Etapa 2: defina três números antes de entrar na conversa
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Esse é o pulo do gato que poucos candidatos fazem. Antes de qualquer entrevista, defina por escrito três valores próprios:
                </p>

                <Card className="bg-muted/30 mb-8">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li><strong>O alvo:</strong> o valor que você gostaria de receber, alinhado ao topo da faixa de mercado para o seu nível.</li>
                      <li><strong>O aceitável:</strong> o valor abaixo do qual a vaga ainda faz sentido, considerando benefícios e crescimento.</li>
                      <li><strong>O piso:</strong> o valor abaixo do qual você diz não, mesmo que adore a empresa. É inegociável.</li>
                    </ul>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed mb-6">
                  Definir esses três números antes da conversa muda completamente sua postura. Você para de "sentir" o valor na hora e passa a negociar com clareza. Recrutadores percebem essa firmeza em segundos, mesmo quando você é educado e flexível no tom.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Inclua no cálculo o custo real da vaga: tempo de deslocamento, possibilidade de home office, vale-refeição, plano de saúde, bônus e PLR. Uma vaga 100% remota com salário 15% menor pode valer mais que uma presencial cheia de deslocamento. Faça a conta inteira, não só o número do contracheque.
                </p>

                {/* Imagem do meio */}
                <div className="my-12 rounded-lg overflow-hidden">
                  <img
                    src="/blog/negociacao-salario-pesquisa-meio.jpg"
                    alt="Mesa de trabalho com currículo impresso, calculadora e bloco de notas com cálculos de pretensão salarial"
                    className="w-full h-auto"
                    width={1280}
                    height={720}
                    loading="lazy"
                  />
                  <p className="text-sm text-muted-foreground text-center mt-3 italic">
                    Pesquisar a faixa e definir alvo, aceitável e piso por escrito muda completamente a postura na hora da conversa.
                  </p>
                </div>

                {/* Etapa 3 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <MessageSquare className="w-8 h-8 text-[#006B3D]" />
                  Etapa 3: como responder à pergunta da pretensão salarial
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Essa pergunta cai em quase todo processo seletivo. Tem três formas comuns: "qual sua pretensão?", "quanto você espera ganhar?" ou o famoso campo obrigatório no formulário online. Cada uma pede uma resposta um pouco diferente, mas o princípio é o mesmo: <strong>responder com faixa, não com número fechado</strong>.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Resposta padrão que funciona em entrevistas presenciais e por vídeo: "Pela minha pesquisa de mercado para essa posição, considerando o escopo descrito, faixa entre R$ X e R$ Y faz sentido. Tenho flexibilidade dentro disso dependendo do pacote completo de benefícios." Frase curta, mostra preparo, abre espaço para negociar e não trava a conversa.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Para o campo obrigatório no formulário, evite "a combinar" ou "0". Sistemas de triagem muitas vezes filtram esses campos. Coloque um número da metade para o topo da sua faixa. Lembre-se: o valor escrito ali não te obriga a nada, e você ainda pode renegociar na entrevista.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">E se a empresa pedir um valor fechado?</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Quando o recrutador insiste em "um número exato", redirecione com calma: "Posso entender melhor a faixa que vocês têm orçamento para essa vaga? Assim consigo trazer um valor mais alinhado." Em mais da metade dos casos, ele cede e te dá a faixa primeiro. Quem fala primeiro perde poder de ancoragem — esse é um dos princípios mais antigos da negociação e foi popularizado em livros como <em>Negocie como se sua vida dependesse disso</em>, de Chris Voss.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Se não der pra escapar, devolva um valor da parte de cima da sua faixa. É mais fácil descer do topo do que subir do piso. Para revisar como recrutadores avaliam o pacote completo do candidato, vale a leitura de <Link to="/blog/o-que-recrutadores-buscam-curriculo" className="text-[#006B3D] hover:underline font-semibold">o que recrutadores realmente buscam em um currículo hoje</Link> — muitos critérios usados no CV reaparecem na decisão final da oferta.
                </p>

                {/* Etapa 4 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <HandCoins className="w-8 h-8 text-[#006B3D]" />
                  Etapa 4: a contraproposta — quando, como e em que tom
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Chegou a oferta formal, geralmente por e-mail ou ligação após as etapas finais. O instinto comum é responder rápido, agradecer e aceitar. Não faça isso. Mesmo que o valor pareça bom, peça 24 a 48 horas para "analisar com calma". Essa pausa, sozinha, te coloca em uma posição de maior controle e abre espaço para uma contraproposta educada.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A contraproposta precisa de três elementos para soar profissional, não atrevida: agradecimento sincero, justificativa clara e número objetivo. Um modelo simples que funciona em entrevistas reais:
                </p>

                <Card className="bg-muted/30 mb-8">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground italic">
                      "Obrigado pela oferta, fiquei muito animado com a possibilidade de me juntar ao time. Considerando minha experiência com [X], as entregas recentes em [Y] e a faixa de mercado para essa senioridade, gostaria de propor um valor mais próximo de R$ Z. Posso entender se há flexibilidade nesse ponto ou se faria mais sentido equilibrar via benefícios e bônus?"
                    </p>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed mb-6">
                  Note três detalhes: agradece de verdade, justifica com fatos (não com "preciso de mais"), e abre porta para negociar via benefícios caso o salário-base esteja travado. Recrutadores adoram esse tipo de candidato — fácil de fechar, flexível e profissional.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Quanto pedir a mais? A regra prática usada por consultorias é entre 10% e 20% acima da oferta inicial, raramente mais que 30% sem mudança de escopo. Acima disso, você corre risco de soar fora de mercado e a negociação esfria.
                </p>

                {/* Etapa 5 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-[#006B3D]" />
                  Etapa 5: negocie o pacote, não só o salário
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Salário-base é só uma parte. Em muitas empresas, especialmente médias e grandes, há orçamento limitado para o valor fixo, mas espaço relativamente folgado em benefícios e bônus. Quem só negocia o número do contracheque deixa dinheiro real na mesa.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Veja o que vale entrar na conversa:
                </p>

                <ul className="space-y-3 text-lg leading-relaxed mb-8 list-disc pl-6">
                  <li><strong>Vale-refeição e vale-alimentação:</strong> alguns valores fazem diferença real no mês.</li>
                  <li><strong>Plano de saúde:</strong> nível do plano, coparticipação, dependentes incluídos.</li>
                  <li><strong>Vale-transporte ou auxílio combustível:</strong> especialmente em vagas presenciais.</li>
                  <li><strong>Home office ou modelo híbrido:</strong> dia a mais em casa equivale a ganho indireto de tempo e custo.</li>
                  <li><strong>Bônus e PLR:</strong> percentual, frequência e critérios de pagamento.</li>
                  <li><strong>Auxílio educação:</strong> bolsas, MBA, cursos de idioma pagos.</li>
                  <li><strong>Stock options ou participação acionária:</strong> em startups e empresas listadas em bolsa.</li>
                  <li><strong>Férias acima do legal:</strong> alguns contratos permitem dias extras.</li>
                  <li><strong>Cláusula de revisão salarial:</strong> negociar revisão em 6 ou 12 meses por desempenho.</li>
                </ul>

                <p className="text-lg leading-relaxed mb-6">
                  Em uma negociação real, frequentemente o melhor desfecho vem de mexer em duas ou três alavancas ao mesmo tempo. Aceitar o salário-base original mas conquistar revisão garantida em 6 meses + bônus contratual atrelado a meta é, em muitos casos, melhor que um aumento direto pequeno.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Se a vaga envolve carta de apresentação, vale rever <Link to="/blog/carta-apresentacao-empregador" className="text-[#006B3D] hover:underline font-semibold">como escrever uma carta de apresentação que conquiste o empregador</Link> — quem entrega o pacote completo (carta + currículo + postura na entrevista) costuma fechar acima da média.
                </p>

                {/* Etapa 6 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-[#006B3D]" />
                  Etapa 6: situações especiais (primeiro emprego, freelancer, PJ vs CLT)
                </h2>

                <h3 className="text-2xl font-bold mt-8 mb-4">Primeiro emprego ou recém-formado</h3>
                <p className="text-lg leading-relaxed mb-6">
                  A regra muda um pouco, mas o princípio é o mesmo. Pesquise a média de cargos júnior na sua região e apresente uma faixa próxima ao topo. Compense a falta de experiência formal com cursos, projetos acadêmicos, idiomas, voluntariado e disponibilidade total. Nunca peça "qualquer valor" ou "o que vocês acharem justo" — passa imagem de insegurança. Já abordamos isso em mais detalhe em <Link to="/blog/como-se-preparar-entrevista-emprego-2026" className="text-[#006B3D] hover:underline font-semibold">como se preparar para uma entrevista de emprego em 2026</Link>, vale a leitura combinada.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Vaga em PJ (Pessoa Jurídica)</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Em vagas PJ, o valor proposto precisa cobrir o que a CLT garantiria: férias, 13º, FGTS, INSS, plano de saúde, vale-refeição, eventual licença e custos do CNPJ. Uma regra prática usada por muitos profissionais experientes é pedir entre 50% e 100% a mais que o salário-base CLT equivalente. Faça a conta fechada antes de propor.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Trabalho remoto internacional</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Para vagas remotas pagas em dólar ou euro, considere câmbio, tributação como exterior (geralmente exterior recebe via PJ), e ausência de benefícios brasileiros. O <a href="https://www.indeed.com/career-advice/pay-salary" target="_blank" rel="noopener noreferrer nofollow" className="text-[#006B3D] hover:underline font-medium">Indeed Career Guide</a> publica regularmente análises de faixa salarial por mercado e nível, úteis como referência cruzada para negociações internacionais.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Freelancer ou consultor por projeto</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Calcule por hora ou por entrega, nunca por "achismo". Defina hora-base, multiplique pelo tempo estimado, adicione margem de 20% a 30% para imprevistos e apresente o valor com escopo claro. Negociar é normal; aceitar o primeiro valor proposto pelo cliente raramente é o melhor cenário para você.
                </p>

                {/* Etapa 7 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-[#006B3D]" />
                  Etapa 7: o que NÃO fazer ao negociar salário
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Em centenas de mentorias, vi os mesmos erros se repetirem. Vale conferir antes de qualquer conversa importante:
                </p>

                <Card className="border-l-4 border-red-500 bg-red-50/50 dark:bg-red-950/20 mb-8">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" /><span>Falar de salário na primeira entrevista, antes do recrutador trazer o tema.</span></li>
                      <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" /><span>Justificar valor com motivos pessoais ("preciso pagar a faculdade", "tenho filhos").</span></li>
                      <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" /><span>Mentir sobre o salário atual ou sobre outras propostas inexistentes.</span></li>
                      <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" /><span>Aceitar a primeira oferta na hora, sem pedir prazo para analisar.</span></li>
                      <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" /><span>Comparar com salário de colegas ou de outras empresas no meio da conversa.</span></li>
                      <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" /><span>Fechar valor verbalmente sem pedir proposta formal por escrito.</span></li>
                      <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" /><span>Aceitar valor abaixo do seu piso "só para não perder a vaga".</span></li>
                    </ul>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed mb-6">
                  O último ponto merece atenção especial. Aceitar abaixo do seu piso por medo costuma gerar arrependimento em poucas semanas — e renegociar logo após assinar é muito mais difícil que negociar antes. Confie no piso que você definiu com calma, fora da pressão da conversa.
                </p>

                {/* Etapa 8 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Lightbulb className="w-8 h-8 text-[#006B3D]" />
                  Etapa 8: linguagem, postura e gatilhos que funcionam
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Negociar bem não é falar mais. É falar melhor. Algumas frases curtas, testadas em entrevistas reais, viram pequenas alavancas durante a conversa:
                </p>

                <Card className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 mb-8">
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-muted-foreground">
                      <li>"Ajuda a entender melhor a faixa que vocês têm para essa posição?"</li>
                      <li>"Considerando o pacote completo, qual a flexibilidade na proposta?"</li>
                      <li>"Posso ter até [data] para analisar com calma e voltar?"</li>
                      <li>"Faz sentido pensar em revisão garantida nos primeiros 6 meses?"</li>
                      <li>"Existe espaço para reforçar o pacote via bônus ou benefícios?"</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30 mb-8">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" /><span><strong>Pausa curta antes de responder.</strong> Três segundos de silêncio transmitem firmeza.</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" /><span><strong>Tom firme, sem soar agressivo.</strong> Voz mais grave e velocidade menor passam segurança.</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" /><span><strong>Justifique com fatos, não emoção.</strong> Números, entregas, certificações.</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#006B3D] flex-shrink-0 mt-1" /><span><strong>Mostre interesse na vaga.</strong> Negociar sem demonstrar empolgação esfria o recrutador.</span></li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Etapa 9 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#006B3D]" />
                  Etapa 9: quando dizer sim, quando dizer não e quando voltar para a mesa
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  No fim da negociação, três caminhos são possíveis: aceitar, recusar ou pedir uma rodada extra. Saber identificar qual deles faz sentido para a sua realidade é o que separa quem fecha bons contratos de quem só fecha qualquer contrato.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  <strong>Aceite</strong> quando a oferta final atinge ou supera seu alvo, o pacote total faz sentido e a empresa demonstra clareza sobre crescimento. Confirme tudo por escrito, peça a proposta formal, releia com calma e só depois assine.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  <strong>Recuse com elegância</strong> quando o valor fica abaixo do seu piso e não há espaço real para mover. Use uma frase curta: "Agradeço muito a oportunidade e a confiança. Pelo momento de carreira em que estou, não consigo fechar abaixo de R$ X. Fica meu contato em aberto para próximas oportunidades." Recusar bem mantém a porta aberta. Muitos profissionais que dizem não hoje recebem nova chamada da mesma empresa em 12 meses, com proposta maior.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  <strong>Volte para a mesa</strong> quando a oferta está perto, mas não exatamente onde você quer. Faça uma contraproposta clara, com prazo curto de retorno (2 a 3 dias úteis), mostrando interesse genuíno. Esse é o cenário mais comum em negociações bem feitas.
                </p>

                {/* Conclusão */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-[#006B3D]" />
                  Conclusão: negociar salário é parte do trabalho, não um favor
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Saber <strong>como negociar salário em uma entrevista de emprego</strong> não tem a ver com manipular o recrutador. Tem a ver com entender o seu valor de mercado, comunicar com clareza e tomar decisões frias sob pressão. É uma habilidade que se aprende, se treina e se aperfeiçoa com cada conversa.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Quem não negocia, em média, ganha menos do que poderia ao longo da carreira inteira. E não é uma diferença pequena: estudos sobre evolução salarial mostram que cada negociação bem feita no início da vida profissional gera efeito composto por décadas, porque aumentos futuros costumam ser percentuais sobre o valor atual.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Antes da próxima entrevista, lembre-se de revisar e atualizar seu currículo. Um documento bem estruturado, que mostra entregas e impacto, sustenta uma negociação melhor — porque você tem evidências concretas para defender o valor que pede. Se precisar, refaça o seu de forma gratuita pelo nosso <Link to="/criar-curriculo" className="text-[#006B3D] hover:underline font-semibold">criador de currículo online</Link> e leve uma versão profissional para sua próxima conversa.
                </p>

                {/* CTA */}
                <Card className="bg-gradient-to-r from-[#006B3D] to-[#005a32] text-white mb-12">
                  <CardContent className="p-8 text-center">
                    <FileText className="w-12 h-12 mx-auto mb-4 opacity-90" />
                    <h3 className="text-2xl font-bold mb-3">Negocie melhor com um currículo à altura</h3>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                      Use nossa ferramenta gratuita e crie um currículo profissional otimizado para ATS em poucos minutos. Mostre suas entregas com clareza e sustente sua próxima negociação salarial.
                    </p>
                    <Button asChild size="lg" className="bg-white text-[#006B3D] hover:bg-white/90">
                      <Link to="/criar-curriculo">
                        Criar Meu Currículo Agora
                        <FileText className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <h2 className="text-3xl font-bold mt-12 mb-8 flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-[#006B3D]" />
                  Perguntas Frequentes (FAQ)
                </h2>

                <div className="space-y-6 mb-12">
                  {[
                    { q: "1. Como responder a pergunta sobre pretensão salarial?", a: "Apresente uma faixa baseada em pesquisa de mercado (Glassdoor, Catho, Vagas), mostre flexibilidade dentro do pacote total e justifique o valor com base na sua experiência, entregas anteriores e responsabilidades da vaga." },
                    { q: "2. Quando é o momento certo de falar de salário na entrevista?", a: "O ideal é deixar o recrutador trazer o tema, normalmente entre a segunda e a terceira etapa do processo. Falar antes pode prejudicar a percepção de interesse pela vaga em si." },
                    { q: "3. Posso pedir um salário acima do anúncio da vaga?", a: "Sim, desde que justificado. Se você tem experiência, certificações ou entregas acima do esperado para o cargo, é válido pedir entre 10% e 30% acima, com argumentos concretos." },
                    { q: "4. Como negociar salário se for meu primeiro emprego?", a: "Pesquise a média do cargo júnior na sua região e apresente uma faixa próxima ao topo dela. Reforce cursos, projetos acadêmicos, idiomas e disponibilidade total para se valorizar mesmo sem experiência formal." },
                    { q: "5. É correto negociar benefícios além do salário?", a: "Sim, e em muitos casos os benefícios representam ganho real maior que o salário. Vale-refeição, plano de saúde, home office, PLR, bônus e auxílio educação devem entrar na conta." },
                    { q: "6. O que fazer se a empresa oferece menos do que o esperado?", a: "Não recuse de imediato. Faça uma contraproposta educada, mostre o valor da sua entrega com dados e abra espaço para negociar benefícios, bônus ou revisão salarial em 6 meses." },
                    { q: "7. Negociar salário pode fazer eu perder a vaga?", a: "Não, se feito com respeito e baseado em dados. Recrutadores experientes esperam negociação; quem não negocia muitas vezes passa imagem de pouca confiança no próprio valor profissional." }
                  ].map((item, i) => (
                    <Card key={i} className="border border-border">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3">{item.q}</h3>
                        <p className="text-muted-foreground">{item.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

              </div>

              <RelatedArticles currentUrl={articleUrl} />

              <AuthorBio />

            </article>

            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticle17;
