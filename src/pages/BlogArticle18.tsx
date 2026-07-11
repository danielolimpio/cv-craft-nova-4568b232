import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BlogSidebar from "@/components/BlogSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, CheckCircle, FileText, Target, ArrowLeft, Lightbulb, AlertTriangle, BookOpen, Globe, Plane, Briefcase, MapPin, Search } from "lucide-react";
import AuthorBio from "@/components/AuthorBio";
import danielPhoto from "@/assets/daniel-olimpio.jpg";
import { Helmet } from "react-helmet";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, articleEntities } from "@/lib/schema";
import RelatedArticles from "@/components/RelatedArticles";

const BlogArticle18 = () => {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Trabalhar nos Estados Unidos: guia de vistos e vagas" }
  ];

  const articleUrl = "/blog/trabalhar-nos-estados-unidos-guia-vistos-vagas";
  const articleSchema = generateArticleSchema({
    title: "Trabalhar nos Estados Unidos: guia completo de vistos, vagas e como se candidatar",
    description: "Como conseguir trabalho legal nos EUA: vistos H-2A, H-2B, H-1B, EB-3, J-1, sites oficiais como SeasonalJobs.dol.gov, salários médios e passo a passo real de candidatura para brasileiros.",
    image: "/blog/trabalhar-nos-estados-unidos-guia.jpg",
    datePublished: "2026-02-04",
    dateModified: "2026-02-04",
    author: { name: "Daniel Olimpio", url: "/sobre" },
    url: articleUrl,
    about: articleEntities[articleUrl],
    relatedLinks: ["/blog/curriculo-ingles-estrutura-erros", "/blog/como-se-preparar-entrevista-emprego-2026", "/blog/profissoes-mais-vagas-brasil-2030"]
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog", url: "/blog" },
    { name: "Trabalhar nos Estados Unidos: guia completo", url: articleUrl }
  ]);

  const faqs = [
    { question: "É possível conseguir emprego legal nos Estados Unidos sendo brasileiro?", answer: "Sim. O caminho legal exige visto de trabalho apropriado (H-2A para agricultura, H-2B para trabalho sazonal não agrícola, H-1B para especialistas, EB-3 para vagas permanentes, J-1 para intercâmbio profissional). O empregador americano precisa fazer a petição junto ao Department of Labor e depois ao USCIS, e o candidato faz a entrevista consular no Brasil." },
    { question: "O que é o SeasonalJobs.dol.gov e como ele funciona?", answer: "É o portal oficial do Departamento do Trabalho dos EUA (DOL) que lista vagas sazonais elegíveis para vistos H-2A e H-2B. Os empregos publicados ali passaram por processo de certificação laboral e podem contratar estrangeiros legalmente. O acesso é gratuito no endereço seasonaljobs.dol.gov." },
    { question: "Quanto ganha em média um trabalhador com visto H-2B nos EUA?", answer: "O salário varia por estado e ocupação, mas o DOL define um piso chamado AEWR (Adverse Effect Wage Rate) para H-2A e uma prevailing wage para H-2B. Em 2025, valores típicos ficaram entre US$ 15 e US$ 25 por hora, dependendo da função e do estado." },
    { question: "Preciso falar inglês fluente para trabalhar nos EUA?", answer: "Para vagas H-2A e H-2B (agricultura, jardinagem, hotelaria, construção), inglês básico funcional já resolve. Para H-1B (TI, engenharia, saúde) e EB-3 skilled, inglês intermediário a avançado é obrigatório, além de comprovação de escolaridade e experiência." },
    { question: "Qual a diferença entre visto H-1B e Green Card EB-3?", answer: "O H-1B é temporário (até 6 anos) para profissionais especializados com diploma superior. O EB-3 é a categoria imigrante que leva ao Green Card e cobre trabalhadores qualificados, profissionais e não qualificados, com processo mais longo (2 a 4 anos) mas residência permanente." },
    { question: "Existem golpes envolvendo vagas nos EUA?", answer: "Sim, muitos. Nenhum empregador legítimo cobra taxa do candidato pelo visto de trabalho H-2A ou H-2B — a lei americana proíbe. Desconfie de anúncios que exigem pagamento antecipado, garantem visto ou pedem depósito. Confira sempre a empresa no SeasonalJobs.dol.gov e no site oficial do USCIS." },
    { question: "Posso levar minha família com visto de trabalho americano?", answer: "Depende da categoria. H-1B, EB-3, J-1 e L-1 permitem visto para cônjuge e filhos menores de 21 anos (categorias H-4, EB-3 dependent, J-2). H-2A e H-2B também permitem dependentes com visto H-4, mas o dependente não pode trabalhar." },
    { question: "Quanto tempo demora todo o processo para chegar aos EUA legalmente?", answer: "Para H-2A e H-2B, entre 60 e 120 dias após a oferta de emprego. Para H-1B, o processo depende do sorteio anual e leva entre 4 e 8 meses. Para EB-3, o prazo pode ir de 18 meses a mais de 3 anos, dependendo do país de origem e da categoria." }
  ];
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Trabalhar nos EUA: Guia de Vistos e Vagas ✓ 2026</title>
        <meta name="description" content="Como trabalhar legal nos EUA: vistos H-2A, H-2B, H-1B, EB-3 e J-1, sites oficiais como SeasonalJobs.dol.gov, salários e passo a passo para brasileiros." />
        <meta name="keywords" content="como trabalhar nos EUA, trabalhar nos Estados Unidos legal, visto de trabalho americano, visto H2A, visto H2B, visto H1B, EB-3 green card trabalho, visto J1 intercâmbio profissional, SeasonalJobs.dol.gov, vagas sazonais EUA, agência de recrutamento H2B Brasil, salário mínimo EUA por estado, trabalhar em fazenda nos EUA, trabalhar em hotel nos EUA, currículo em inglês para EUA, como conseguir sponsor nos EUA, empregador H2B lista, vagas para brasileiros nos EUA 2026, morar e trabalhar nos EUA, imigração legal EUA, entrevista consulado americano trabalho, cost of living Estados Unidos, salário programador EUA, enfermeira EB3 EUA, motorista de caminhão EUA, construção civil EUA vagas, vagas jardinagem EUA H2B, trabalho de verão EUA, work and travel EUA, DS-160 visto trabalho, USCIS petição H2B, prevailing wage EUA, AEWR H2A, agência licenciada H2B, trabalhar no Canadá vs EUA, emprego internacional para brasileiros" />
        <link rel="canonical" href="https://fazercurriculo.com/blog/trabalhar-nos-estados-unidos-guia-vistos-vagas" />
        <meta property="og:title" content="Trabalhar nos Estados Unidos: guia completo de vistos, vagas e como se candidatar" />
        <meta property="og:description" content="Vistos H-2A, H-2B, H-1B, EB-3 e J-1, portais oficiais e passo a passo real para brasileiros conseguirem trabalho legal nos EUA em 2026." />
        <meta property="og:url" content="https://fazercurriculo.com/blog/trabalhar-nos-estados-unidos-guia-vistos-vagas" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://fazercurriculo.com/blog/trabalhar-nos-estados-unidos-guia.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trabalhar nos Estados Unidos: guia completo de vistos e vagas" />
        <meta name="twitter:description" content="Vistos, portais oficiais e passo a passo real para brasileiros trabalharem legal nos EUA." />
        <meta name="twitter:image" content="https://fazercurriculo.com/blog/trabalhar-nos-estados-unidos-guia.jpg" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <main className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <article className="flex-1 max-w-4xl">
              <Breadcrumb items={breadcrumbItems} />

              <Link to="/blog" className="inline-flex items-center text-[#006B3D] hover:text-[#005a32] mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para o Blog
              </Link>

              <header className="mb-12">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-[#006B3D] text-white text-sm font-semibold rounded-full">
                    Trabalho no Exterior
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Trabalhar nos Estados Unidos: guia completo de vistos, vagas e como se candidatar
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Do primeiro clique no SeasonalJobs.dol.gov à entrevista no consulado americano: um passo a passo real, sem promessas mágicas, para brasileiros que querem trabalhar legalmente nos EUA em 2026.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-t py-4">
                  <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Daniel Olímpio</span></div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>04 de Fevereiro, 2026</span></div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>19 min de leitura</span></div>
                </div>
              </header>

              <div className="mb-12 rounded-lg overflow-hidden">
                <img
                  src="/blog/trabalhar-nos-estados-unidos-guia.jpg"
                  alt="Profissional brasileira segurando passaporte diante da vista do skyline de Nova York ao entardecer"
                  className="w-full h-auto"
                  width={1600}
                  height={900}
                />
                <p className="text-sm text-muted-foreground text-center mt-2 italic">
                  Foto de capa ilustrativa: profissional brasileira preparando documentos para entrevista consular.
                </p>
              </div>

              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
                <img src={danielPhoto} alt="Daniel Olímpio" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-foreground">Daniel Olímpio</p>
                  <p className="text-sm text-muted-foreground">Especialista em Currículos e Carreira</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">

                {/* Índice */}
                <Card className="bg-muted/40 mb-10">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-[#006B3D]" />Neste guia você vai encontrar</h2>
                    <ul className="space-y-2 text-base">
                      <li>• Por que trabalhar nos EUA continua atrativo em 2026</li>
                      <li>• Todos os tipos de visto de trabalho americano explicados</li>
                      <li>• Como usar o SeasonalJobs.dol.gov, portal oficial do DOL</li>
                      <li>• Salários médios, custos reais e comparações por estado</li>
                      <li>• Passo a passo: da vaga à entrevista consular</li>
                      <li>• Como preparar currículo em inglês para o mercado americano</li>
                      <li>• Golpes comuns e como identificá-los antes de perder dinheiro</li>
                      <li>• Perguntas frequentes respondidas com base em fontes oficiais</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Intro */}
                <p className="text-lg leading-relaxed mb-6">
                  Todo ano, milhares de brasileiros pesquisam no Google como <strong>trabalhar nos Estados Unidos</strong>. A curiosidade é legítima. Os EUA continuam sendo o maior mercado de trabalho formal do mundo, com mais de 8 milhões de vagas em aberto segundo o <a href="https://www.bls.gov/jlt/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#006B3D] hover:underline font-medium">Bureau of Labor Statistics</a>, salários médios em dólar e um sistema legal de contratação de estrangeiros que, ao contrário do que muitos pensam, funciona.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  O problema é o excesso de desinformação. Vídeos de TikTok prometendo "visto de trabalho em 30 dias", agências pedindo taxas altas para "garantir vaga", perfis no Instagram vendendo cursos como se fossem passaporte para o sucesso. Este guia não vende nada disso. É um mapa dos caminhos <em>legais</em>, com os nomes exatos dos vistos, os endereços oficiais do governo americano e a lógica real por trás de cada etapa.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Vamos por partes, como se você estivesse começando do zero hoje.
                </p>

                {/* 1 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Globe className="w-8 h-8 text-[#006B3D]" />
                  Por que trabalhar nos EUA ainda faz sentido em 2026
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  O primeiro filtro é sincero: <strong>trabalhar nos EUA não é para todo mundo</strong>. Envolve deixar família, adaptar-se a um idioma, aceitar rotinas físicas duras em algumas categorias e enfrentar a burocracia consular. Ainda assim, a matemática segue interessante para quem tem foco.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Um trabalhador H-2B em jardinagem paisagística no estado da Flórida pode receber entre US$ 16 e US$ 22 por hora, segundo o piso da <em>prevailing wage</em> divulgada pelo <a href="https://flag.dol.gov/wage-data" target="_blank" rel="noopener noreferrer nofollow" className="text-[#006B3D] hover:underline font-medium">DOL Flag</a>. Convertido em real e considerando a rotina de 40 a 50 horas semanais legais, o rendimento líquido supera com folga qualquer piso equivalente no Brasil, mesmo descontando moradia e alimentação.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Para profissionais qualificados, o cenário é ainda mais competitivo. Engenheiros de software com visto H-1B começam frequentemente acima de US$ 100 mil por ano em áreas metropolitanas, enquanto enfermeiras com EB-3 chegam ao mercado com Green Card na mão. Não é fácil, mas o caminho existe, é legal e tem regras claras.
                </p>

                <Card className="border-l-4 border-[#006B3D] bg-muted/30 mb-8">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground italic">
                      Curiosidade útil: os EUA recebem oficialmente, todos os anos, cerca de 66 mil trabalhadores H-2B e cerca de 300 mil H-2A, segundo dados do próprio Department of Homeland Security. Não é um caminho excepcional — é uma estrutura permanente.
                    </p>
                  </CardContent>
                </Card>

                {/* 2 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Plane className="w-8 h-8 text-[#006B3D]" />
                  Os principais vistos de trabalho americanos, sem enrolação
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Existem dezenas de categorias de visto nos EUA, mas para trabalho o brasileiro comum precisa entender bem cinco delas. Cada uma serve para um perfil diferente. Confundir isso é a raiz de 80% dos erros de candidatura.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Visto H-2A: agricultura temporária</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Para atividades agrícolas sazonais como colheita de frutas, poda, plantio e apoio em fazendas. O empregador precisa comprovar que não achou mão de obra local, publicar a vaga em portais oficiais e pagar transporte, moradia e piso salarial regional (AEWR). Não exige formação específica, e o inglês pode ser básico.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Visto H-2B: trabalho sazonal não agrícola</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Cobre hotelaria, jardinagem paisagística, parques de diversão, resorts, restaurantes, construção civil, feiras e pesca. É o visto mais buscado por brasileiros hoje. Tem cota anual de 66 mil vagas e roda em dois lotes (outubro e abril). O contrato dura até 10 meses, com possibilidade de renovação por até 3 anos consecutivos.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Visto H-1B: profissionais especializados</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Voltado a quem tem diploma superior e atua em áreas como TI, engenharia, medicina, arquitetura e ciências. Passa por um sorteio anual (o famoso <em>H-1B lottery</em>), tem cota de 85 mil visto por ano e permanência de até 6 anos. É a porta mais usada por desenvolvedores brasileiros contratados por empresas americanas.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Visto EB-3: caminho para o Green Card</h3>
                <p className="text-lg leading-relaxed mb-6">
                  É uma categoria imigrante, ou seja, dá residência permanente. Divide-se em três: <em>skilled workers</em>, <em>professionals</em> e <em>other workers</em>. Enfermeiras, técnicos e trabalhadores da hotelaria são exemplos comuns. O processo é longo (18 meses a 4 anos), mas você chega para ficar.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Visto J-1: intercâmbio profissional</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Popular entre estudantes e recém-formados. Cobre estágio, treinamento profissional, au pair, professor visitante, pesquisador e o famoso <em>Work and Travel</em>. Não gera Green Card diretamente, mas serve para adquirir experiência internacional e construir rede.
                </p>

                {/* Imagem meio */}
                <div className="my-12 rounded-lg overflow-hidden">
                  <img
                    src="/blog/trabalho-sazonal-eua-h2a-meio.jpg"
                    alt="Trabalhadores sazonais colhendo maçãs em fazenda americana ao amanhecer, com foco em trabalhador latino sorridente"
                    className="w-full h-auto"
                    width={1600}
                    height={900}
                    loading="lazy"
                  />
                  <p className="text-sm text-muted-foreground text-center mt-3 italic">
                    Vistos H-2A cobrem atividades agrícolas sazonais como colheita, plantio, poda e apoio em fazendas nos EUA.
                  </p>
                </div>

                {/* 3 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Search className="w-8 h-8 text-[#006B3D]" />
                  Como usar o SeasonalJobs.dol.gov, o portal oficial mais importante
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Se existe um único endereço para gravar antes de qualquer outro, é <a href="https://seasonaljobs.dol.gov/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#006B3D] hover:underline font-medium">https://seasonaljobs.dol.gov/</a>. É o portal oficial do Department of Labor dos EUA que publica todas as vagas certificadas para os vistos H-2A e H-2B. Todo empregador americano que quer contratar estrangeiro por essas categorias é obrigado por lei a publicar a vaga ali. Nenhum outro site tem essa base.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  O uso é simples e gratuito. Você entra na home, escolhe o estado, o tipo de trabalho (agricultura, hotelaria, construção, jardinagem, pesca etc.) e navega pelas ofertas. Cada anúncio traz: nome legal do empregador, endereço, salário oferecido, número de vagas, horas semanais, alojamento e prazo para inscrição.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A grande vantagem é a segurança: se a vaga está no SeasonalJobs, ela já passou por certificação laboral. Se o empregador cobrar taxa do candidato, você pode denunciar direto no próprio site. Complementarmente, o portal <a href="https://www.uscis.gov/working-in-the-united-states" target="_blank" rel="noopener noreferrer nofollow" className="text-[#006B3D] hover:underline font-medium">USCIS – Working in the United States</a> lista todas as categorias de visto de trabalho, com FAQ oficial.
                </p>

                <Card className="border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/20 mb-8">
                  <CardContent className="p-6 flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-2">Atenção com intermediários</p>
                      <p className="text-muted-foreground">Existem <strong>agentes autorizados</strong> que ajudam a intermediar a candidatura entre o brasileiro e o empregador americano. É legal — desde que o pagamento não seja cobrado do trabalhador. Se um recrutador pede R$ 5 mil ou R$ 10 mil "para garantir vaga", é golpe. Ponto final.</p>
                    </div>
                  </CardContent>
                </Card>

                {/* 4 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-[#006B3D]" />
                  Salários médios por área e realidade do custo de vida
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Antes de sonhar com o valor bruto, é fundamental encaixar isso no custo real de vida. Um mesmo salário rende de forma diferente em Wyoming e em Nova York. A tabela a seguir combina dados de <a href="https://www.bls.gov/oes/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#006B3D] hover:underline font-medium">BLS Occupational Employment Statistics</a> e da prevailing wage divulgada pelo DOL.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm border border-border">
                    <thead className="bg-muted">
                      <tr>
                        <th className="p-3 text-left border-b">Área</th>
                        <th className="p-3 text-left border-b">Visto típico</th>
                        <th className="p-3 text-left border-b">Faixa/hora (2025)</th>
                        <th className="p-3 text-left border-b">Estado com mais oferta</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-3 border-b">Colheita agrícola</td><td className="p-3 border-b">H-2A</td><td className="p-3 border-b">US$ 14 – US$ 18</td><td className="p-3 border-b">Flórida, Geórgia, Washington</td></tr>
                      <tr><td className="p-3 border-b">Hotelaria (arrumadeira, cozinha)</td><td className="p-3 border-b">H-2B</td><td className="p-3 border-b">US$ 15 – US$ 22</td><td className="p-3 border-b">Colorado, Massachusetts</td></tr>
                      <tr><td className="p-3 border-b">Jardinagem paisagística</td><td className="p-3 border-b">H-2B</td><td className="p-3 border-b">US$ 16 – US$ 22</td><td className="p-3 border-b">Texas, Virginia, Flórida</td></tr>
                      <tr><td className="p-3 border-b">Construção civil</td><td className="p-3 border-b">H-2B</td><td className="p-3 border-b">US$ 18 – US$ 28</td><td className="p-3 border-b">Texas, Nova York</td></tr>
                      <tr><td className="p-3 border-b">Desenvolvimento de software</td><td className="p-3 border-b">H-1B</td><td className="p-3 border-b">US$ 45 – US$ 90</td><td className="p-3 border-b">Califórnia, Washington, Texas</td></tr>
                      <tr><td className="p-3">Enfermagem</td><td className="p-3">EB-3</td><td className="p-3">US$ 35 – US$ 55</td><td className="p-3">Califórnia, Texas, Flórida</td></tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  Sobre custo de vida, o próprio governo americano fornece calculadora oficial. Vale conferir a página <a href="https://www.usa.gov/cost-of-living" target="_blank" rel="noopener noreferrer nofollow" className="text-[#006B3D] hover:underline font-medium">USA.gov – Cost of Living</a> antes de aceitar qualquer oferta. Um salário de US$ 20 por hora em Miami é diferente do mesmo valor em uma pequena cidade do Arkansas.
                </p>

                {/* 5 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-[#006B3D]" />
                  Passo a passo: da vaga à entrevista consular
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Vou descrever o caminho como se você estivesse fazendo tudo pela primeira vez. Vale para H-2A e H-2B, que são os mais comuns entre brasileiros.
                </p>

                <ol className="space-y-4 text-lg leading-relaxed mb-8 list-decimal pl-6">
                  <li><strong>Pesquisa da vaga.</strong> Você entra no SeasonalJobs.dol.gov, filtra por área e estado, salva os anúncios de interesse e verifica os prazos.</li>
                  <li><strong>Contato com o empregador ou agente autorizado.</strong> A candidatura pode ser direta ou por intermediário licenciado. O primeiro contato geralmente é feito por e-mail em inglês.</li>
                  <li><strong>Assinatura da oferta de emprego.</strong> Se selecionado, você recebe uma proposta formal (job offer) com salário, jornada, local e período.</li>
                  <li><strong>Petição do empregador ao USCIS.</strong> A empresa envia o formulário I-129 solicitando a aprovação da sua vaga. Esse passo é feito nos EUA e não depende de você.</li>
                  <li><strong>Aprovação I-797.</strong> Uma vez deferida a petição, o candidato recebe uma cópia do documento e pode iniciar o processo consular.</li>
                  <li><strong>DS-160 e agendamento consular.</strong> Você preenche o formulário DS-160 no site <a href="https://ceac.state.gov/genniv/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#006B3D] hover:underline font-medium">CEAC do Departamento de Estado</a>, paga a taxa e agenda a entrevista em consulado americano no Brasil.</li>
                  <li><strong>Entrevista e biometria.</strong> Cerca de 15 minutos, em inglês ou português, focando em intenção real, vínculos com o Brasil e clareza sobre o trabalho.</li>
                  <li><strong>Retirada do visto.</strong> Se aprovado, o passaporte é devolvido com o visto colado, e você já pode organizar a viagem para o início do contrato.</li>
                </ol>

                <p className="text-lg leading-relaxed mb-6">
                  Cada etapa tem seus detalhes, mas essa é a espinha dorsal do processo. Não existe atalho legal. Quem promete pular etapas está te vendendo problema.
                </p>

                {/* 6 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <FileText className="w-8 h-8 text-[#006B3D]" />
                  Currículo em inglês para o mercado americano
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  A candidatura começa por um documento. Um <strong>currículo em inglês (resume)</strong> mal estruturado derruba antes da conversa. Nos EUA, o padrão é o <em>chronological resume</em> de uma página, sem foto, sem CPF, sem data de nascimento e sem "objetivo" genérico. O foco é impacto: cargos, empresas, período e resultados quantificáveis.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Verbos de ação em passado (<em>managed, delivered, coordinated, reduced</em>) e números concretos são obrigatórios. Se você é brasileiro e nunca escreveu um resume em inglês, comece pelo guia detalhado que já publicamos aqui sobre <Link to="/blog/curriculo-ingles-estrutura-erros" className="text-[#006B3D] hover:underline font-semibold">currículo em inglês: estrutura e erros comuns</Link>. Ele cobre estrutura padrão, expressões erradas mais frequentes e o que evitar de forma prática.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Complementarmente, alinhar seu perfil no LinkedIn com o resume aumenta a chance de recrutadores americanos encontrarem você. Vale a leitura do nosso material sobre <Link to="/blog/perfil-linkedin-recrutadores" className="text-[#006B3D] hover:underline font-semibold">perfil LinkedIn para recrutadores</Link>, que se aplica igualmente ao mercado internacional.
                </p>

                {/* 7 */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-[#006B3D]" />
                  Golpes comuns e como identificar em 30 segundos
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Esse é um capítulo obrigatório. A demanda por trabalho nos EUA gera um mercado paralelo de golpes bem organizados. Alguns sinais que devem acender alerta imediato:
                </p>

                <ul className="space-y-3 text-lg leading-relaxed mb-8">
                  <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" /><span>Cobrança de taxa alta "para garantir vaga" ou "reservar visto".</span></li>
                  <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" /><span>Empresa que não aparece no SeasonalJobs.dol.gov nem no site oficial da USCIS.</span></li>
                  <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" /><span>Contrato apenas em português, sem versão em inglês assinada pelo empregador.</span></li>
                  <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" /><span>Promessas de Green Card em poucos meses ou "visto acelerado por conexão".</span></li>
                  <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" /><span>Pagamento por Pix, transferência internacional pessoal ou criptomoeda para "reserva".</span></li>
                </ul>

                <p className="text-lg leading-relaxed mb-6">
                  Se algo bater qualquer um desses pontos, é preciso reconsiderar antes de assinar qualquer coisa. Você pode consultar diretamente o consulado americano no Brasil pelo site <a href="https://br.usembassy.gov/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#006B3D] hover:underline font-medium">Embaixada e Consulados dos EUA no Brasil</a>, que mantém informações oficiais em português sobre vistos e canais de denúncia.
                </p>

                {/* CTA */}
                <Card className="bg-gradient-to-r from-[#006B3D] to-[#005a32] text-white mb-12">
                  <CardContent className="p-8 text-center">
                    <FileText className="w-12 h-12 mx-auto mb-4 opacity-90" />
                    <h3 className="text-2xl font-bold mb-3">Prepare seu currículo em inglês antes de se candidatar</h3>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                      Use nossa ferramenta gratuita e monte um currículo profissional em minutos, com estrutura compatível com o padrão internacional e otimizado para sistemas ATS.
                    </p>
                    <Button asChild size="lg" className="bg-white text-[#006B3D] hover:bg-white/90">
                      <Link to="/criar-curriculo">
                        Criar Meu Currículo Agora
                        <FileText className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Conclusão */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-[#006B3D]" />
                  Conclusão: prepare-se com fatos, não com promessas
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Trabalhar nos Estados Unidos legalmente é possível, é comum e está documentado em portais oficiais gratuitos. O que separa quem consegue de quem só sonha não é sorte, é método. Método envolve estudar vistos com paciência, olhar apenas fontes oficiais, montar um currículo profissional, treinar entrevista em inglês e aceitar que o processo leva meses, não dias.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Se seu objetivo é chegar aos EUA para trabalhar em 2026, comece hoje. Marque nos favoritos o SeasonalJobs.dol.gov, atualize seu currículo, alinhe o inglês, e não pague um centavo sequer por promessas mágicas. O caminho existe, é público e está ao alcance de quem faz a lição de casa.
                </p>

                {/* FAQ */}
                <h2 className="text-3xl font-bold mt-12 mb-8 flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-[#006B3D]" />
                  Perguntas Frequentes (FAQ)
                </h2>

                <div className="space-y-6 mb-12">
                  {faqs.map((item, i) => (
                    <Card key={i} className="border border-border">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3">{i + 1}. {item.question}</h3>
                        <p className="text-muted-foreground">{item.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

              </div>

              <RelatedArticles currentUrl={articleUrl} />

              <AuthorBio />

            </article>

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

export default BlogArticle18;
