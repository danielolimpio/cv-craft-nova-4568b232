import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BlogSidebar from "@/components/BlogSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, CheckCircle, XCircle, FileText, Target, ArrowLeft, Lightbulb, AlertTriangle, BookOpen, Scale, Shield, DollarSign, Briefcase } from "lucide-react";
import AuthorBio from "@/components/AuthorBio";
import danielPhoto from "@/assets/daniel-olimpio.jpg";
import { Helmet } from "react-helmet";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import RelatedArticles from "@/components/RelatedArticles";

const BlogArticle22 = () => {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Direitos Trabalhistas CLT 2026: guia completo" }
  ];

  const articleUrl = "/blog/direitos-trabalhistas-clt-brasil-guia-completo";
  const articleSchema = generateArticleSchema({
    title: "Direitos Trabalhistas CLT 2026: guia completo do trabalhador brasileiro",
    description: "FGTS, férias, 13º salário, horas extras, aviso prévio, seguro-desemprego e todas as novas regras da CLT em 2026 explicadas de forma clara e com base nas leis oficiais.",
    image: "/blog/direitos-trabalhistas-clt-brasil-guia.webp",
    datePublished: "2026-03-05",
    dateModified: "2026-03-05",
    author: { name: "Daniel Olimpio", url: "/sobre" },
    url: articleUrl,
    about: [
      { name: "Direito do trabalho", sameAs: "https://pt.wikipedia.org/wiki/Direito_do_trabalho", type: "Thing" },
      { name: "Consolidação das Leis do Trabalho", sameAs: "https://pt.wikipedia.org/wiki/Consolida%C3%A7%C3%A3o_das_Leis_do_Trabalho", type: "Thing" },
      { name: "FGTS", sameAs: "https://pt.wikipedia.org/wiki/Fundo_de_Garantia_do_Tempo_de_Servi%C3%A7o", type: "Thing" },
      { name: "Brasil", sameAs: "https://pt.wikipedia.org/wiki/Brasil", type: "Thing" }
    ],
    relatedLinks: ["/blog/home-office-brasil-direitos-clt-vagas-remotas", "/blog/como-negociar-salario-entrevista", "/blog/o-que-recrutadores-buscam-curriculo"]
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog", url: "/blog" },
    { name: "Direitos Trabalhistas CLT 2026: guia completo", url: articleUrl }
  ]);

  const faqSchema = generateFAQSchema([
    { question: "Quais são os principais direitos trabalhistas garantidos pela CLT em 2026?", answer: "Os principais direitos são: carteira assinada, salário mínimo, jornada de até 44 horas semanais, hora extra com adicional mínimo de 50%, férias remuneradas de 30 dias mais 1/3, 13º salário, FGTS (8% do salário), aviso prévio, seguro-desemprego, licença-maternidade de 120 dias, licença-paternidade e repouso semanal remunerado, todos previstos na CLT (Decreto-Lei 5.452/1943) e na Constituição Federal de 1988." },
    { question: "Quanto tempo o empregador tem para assinar a carteira de trabalho?", answer: "O empregador tem até 5 dias úteis a partir do início do trabalho para registrar o vínculo empregatício na Carteira de Trabalho Digital (CTPS Digital), conforme a Lei 13.874/2019. O registro é feito exclusivamente pelo eSocial." },
    { question: "Como funciona o cálculo das horas extras em 2026?", answer: "A hora extra tem adicional mínimo de 50% sobre o valor da hora normal em dias úteis e 100% aos domingos e feriados. O trabalhador pode fazer até 2 horas extras por dia. Muitos acordos coletivos preveem adicionais maiores, e o banco de horas exige acordo individual ou coletivo escrito, com compensação em até 6 meses." },
    { question: "Quando o trabalhador tem direito ao seguro-desemprego?", answer: "Tem direito ao ser demitido sem justa causa, com carência mínima de 12 meses trabalhados nos últimos 18 meses na primeira solicitação, 9 meses nos últimos 12 meses na segunda, e 6 meses a partir da terceira. As parcelas variam de 3 a 5, conforme tempo trabalhado, com valores entre 1 salário mínimo e o teto vigente. O pedido é feito pelo Portal Gov.br." },
    { question: "Qual o valor do FGTS e como sacar?", answer: "O empregador deposita mensalmente 8% do salário bruto em conta vinculada na Caixa Econômica Federal. O saque é permitido em casos como demissão sem justa causa (com multa de 40%), aposentadoria, compra de imóvel, doença grave, aniversário (modalidade opcional) e algumas outras hipóteses. A consulta e movimentação são feitas pelo aplicativo FGTS." },
    { question: "O que muda com a nova regra do trabalho intermitente?", answer: "O trabalho intermitente, criado pela Reforma Trabalhista (Lei 13.467/2017), permite contrato com prestação de serviços não contínua, alternando períodos de trabalho e inatividade. O trabalhador recebe por hora ou dia trabalhado, tem direito proporcional a férias, 13º, FGTS e INSS. Em 2026, o STF manteve a constitucionalidade desse regime." },
    { question: "Home office dá direito a auxílio pela CLT?", answer: "A Lei 14.442/2022 regulamenta o teletrabalho e prevê que despesas com internet, energia e equipamentos podem ser reembolsadas conforme acordo escrito entre empregador e empregado. Não há valor mínimo obrigatório fixado por lei, mas o contrato precisa ser expresso e por escrito." },
    { question: "Empregada gestante pode ser demitida?", answer: "Não. A empregada gestante tem estabilidade provisória desde a confirmação da gravidez até 5 meses após o parto, conforme o artigo 10, II, b, do Ato das Disposições Constitucionais Transitórias. Qualquer demissão sem justa causa nesse período é considerada nula e a empregada tem direito à reintegração ou indenização integral do período." },
    { question: "Como funciona o pagamento de 13º salário?", answer: "O 13º salário é pago em duas parcelas: a primeira entre 1º de fevereiro e 30 de novembro (metade do salário sem descontos) e a segunda até 20 de dezembro (com desconto de INSS e IR). Trabalhadores com menos de 1 ano recebem proporcional aos meses trabalhados (1/12 por mês com 15 dias ou mais de trabalho)." }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Direitos Trabalhistas CLT 2026 ✓ Guia Completo do Trabalhador</title>
        <meta name="description" content="Direitos trabalhistas CLT 2026: FGTS, férias, 13º, horas extras, aviso prévio, seguro-desemprego e novas regras explicadas com base nas leis oficiais." />
        <meta name="keywords" content="direitos trabalhistas, direitos trabalhistas 2026, CLT, CLT 2026, Consolidação das Leis do Trabalho, direitos do trabalhador, direitos do trabalhador CLT, carteira assinada, carteira de trabalho digital, CTPS Digital, FGTS, saque FGTS, FGTS aniversário, FGTS demissão, multa 40% FGTS, férias CLT, férias 30 dias, terço constitucional férias, abono pecuniário férias, vender férias, 13º salário, décimo terceiro, cálculo 13º salário, primeira parcela 13º, segunda parcela 13º, aviso prévio, aviso prévio indenizado, aviso prévio proporcional, seguro desemprego, seguro desemprego 2026, quantas parcelas seguro desemprego, valor seguro desemprego, licença maternidade, licença maternidade 120 dias, licença paternidade, licença paternidade 5 dias, estabilidade gestante, hora extra CLT, adicional hora extra 50%, adicional hora extra 100% domingo, banco de horas, jornada de trabalho 44 horas, jornada 12x36, jornada 6x1, escala de trabalho, adicional noturno, adicional noturno 20%, adicional insalubridade, adicional periculosidade, salário família, vale transporte, vale alimentação, vale refeição, PLR participação nos lucros, INSS contribuição, INSS 2026, tabela INSS 2026, imposto de renda salário, IRRF 2026, tabela IRRF 2026, isenção imposto de renda 2026, reforma trabalhista, Lei 13.467/2017, trabalho intermitente, home office CLT, teletrabalho CLT, Lei 14.442/2022, contrato de trabalho, contrato por prazo determinado, contrato por prazo indeterminado, contrato de experiência, demissão sem justa causa, demissão por justa causa, rescisão de contrato, verbas rescisórias, cálculo rescisão, homologação demissão, acordo trabalhista, demissão consensual, Lei 13.467, mediação trabalhista, Justiça do Trabalho, TRT, TST, Ministério do Trabalho, Ministério do Trabalho e Emprego, MTE 2026, ação trabalhista, prescrição trabalhista, prazo prescrição CLT, direitos empregada doméstica, PEC das domésticas, Lei Complementar 150, aposentadoria CLT, aposentadoria INSS, aposentadoria por idade, aposentadoria por tempo de contribuição, aposentadoria especial, reforma da previdência, direitos autônomo, direitos MEI, PJ vs CLT, pejotização, terceirização, Lei 13.429/2017 terceirização, cooperativa de trabalho, salário mínimo 2026, piso salarial, dissídio coletivo, convenção coletiva de trabalho, acordo coletivo de trabalho, sindicato, contribuição sindical, negociação coletiva, greve direito, direito de greve, insalubridade, periculosidade, laudo NR-15, laudo NR-16, EPI equipamento proteção individual, PCMSO, PPRA, saúde do trabalhador, doença ocupacional, acidente de trabalho, CAT comunicação acidente trabalho, auxílio-doença, auxílio acidente, INSS acidente, benefício por incapacidade, perícia INSS, benefício previdenciário, salário maternidade INSS, pensão por morte, auxílio reclusão, BPC LOAS, direitos trabalhador doméstico, jovem aprendiz, contrato jovem aprendiz, Lei da Aprendizagem, PcD no trabalho, cota de deficientes, Lei 8.213/1991, reabilitação profissional, assédio moral, assédio sexual, Lei 14.457/2022, CIPA assédio, direitos LGBT trabalho, discriminação no trabalho, igualdade salarial, Lei 14.611/2023, transparência salarial" />
        <link rel="canonical" href="https://fazercurriculo.com/blog/direitos-trabalhistas-clt-brasil-guia-completo" />
        <meta property="og:title" content="Direitos Trabalhistas CLT 2026: guia completo do trabalhador brasileiro" />
        <meta property="og:description" content="FGTS, férias, 13º, horas extras, aviso prévio, seguro-desemprego e as novas regras da CLT em 2026 explicadas com clareza." />
        <meta property="og:url" content="https://fazercurriculo.com/blog/direitos-trabalhistas-clt-brasil-guia-completo" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://fazercurriculo.com/blog/direitos-trabalhistas-clt-brasil-guia.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Direitos Trabalhistas CLT 2026: guia completo" />
        <meta name="twitter:description" content="Todos os direitos do trabalhador brasileiro em 2026 explicados com base nas leis oficiais." />
        <meta name="twitter:image" content="https://fazercurriculo.com/blog/direitos-trabalhistas-clt-brasil-guia.webp" />
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
                    Direitos Trabalhistas
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Direitos Trabalhistas CLT 2026: guia completo do trabalhador brasileiro
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  FGTS, férias, 13º, horas extras, aviso prévio, seguro-desemprego, licenças, home office e as novas regras que entraram em vigor nos últimos anos. Um guia claro, atualizado e escrito para você entender exatamente o que a lei garante — e o que fazer quando ela é descumprida.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-t py-4">
                  <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Daniel Olímpio</span></div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>05 de Março, 2026</span></div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>24 min de leitura</span></div>
                </div>
              </header>

              <div className="mb-12 rounded-lg overflow-hidden">
                <img
                  src="/blog/direitos-trabalhistas-clt-brasil-guia.webp"
                  alt="Trabalhador brasileiro segurando Carteira de Trabalho Digital no smartphone e contrato CLT impresso em ambiente de escritório"
                  className="w-full h-auto"
                  width={1280}
                  height={853}
                />
              </div>

              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
                <img src={danielPhoto} alt="Daniel Olímpio" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-foreground">Daniel Olímpio</p>
                  <p className="text-sm text-muted-foreground">Especialista em Currículos e Carreira</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">

                <Card className="bg-[#006B3D]/5 border-[#006B3D]/20 mb-10">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#006B3D]" />
                      Índice do artigo
                    </h2>
                    <ul className="space-y-2 text-base">
                      <li><a href="#panorama" className="text-[#006B3D] hover:underline">1. Panorama da CLT em 2026: o que mudou</a></li>
                      <li><a href="#carteira" className="text-[#006B3D] hover:underline">2. Carteira assinada e contrato de trabalho</a></li>
                      <li><a href="#jornada" className="text-[#006B3D] hover:underline">3. Jornada, horas extras e banco de horas</a></li>
                      <li><a href="#salario" className="text-[#006B3D] hover:underline">4. Salário, adicionais e descontos legais</a></li>
                      <li><a href="#ferias" className="text-[#006B3D] hover:underline">5. Férias, 13º salário e DSR</a></li>
                      <li><a href="#fgts" className="text-[#006B3D] hover:underline">6. FGTS: depósitos, saques e multa de 40%</a></li>
                      <li><a href="#licencas" className="text-[#006B3D] hover:underline">7. Licenças, estabilidade e afastamentos</a></li>
                      <li><a href="#rescisao" className="text-[#006B3D] hover:underline">8. Rescisão, aviso prévio e seguro-desemprego</a></li>
                      <li><a href="#home-office" className="text-[#006B3D] hover:underline">9. Home office, intermitente e novas modalidades</a></li>
                      <li><a href="#defender" className="text-[#006B3D] hover:underline">10. Como se defender quando a lei é descumprida</a></li>
                      <li><a href="#faq" className="text-[#006B3D] hover:underline">11. Perguntas frequentes</a></li>
                    </ul>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed mb-6">
                  Todo mês, milhões de brasileiros abrem o holerite e batem o olho em siglas que sempre estiveram ali — INSS, IRRF, FGTS, DSR — sem parar para conferir se os valores realmente batem. E é justamente nesse hábito de confiar cegamente no envelope de pagamento que se escondem os pequenos prejuízos que, somados ao longo dos anos, viram fortunas perdidas.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A Consolidação das Leis do Trabalho (CLT), publicada em 1943 pelo Decreto-Lei 5.452, continua sendo a espinha dorsal das relações de emprego no Brasil. Mas ela mudou muito nos últimos anos: a Reforma Trabalhista de 2017, a lei do teletrabalho em 2022, a lei da igualdade salarial em 2023 e novas regras de INSS e imposto de renda em 2025 e 2026 reorganizaram vários direitos que a maioria dos trabalhadores ainda desconhece.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Este guia foi escrito para ser o mapa completo do trabalhador CLT em 2026 — um material sério, com base nas leis oficiais publicadas no <a href="https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline">Planalto</a> e nas orientações do <a href="https://www.gov.br/trabalho-e-emprego/pt-br" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline">Ministério do Trabalho e Emprego</a>, mas escrito em linguagem que qualquer pessoa entende.
                </p>

                <h2 id="panorama" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Scale className="w-8 h-8 text-[#006B3D]" />
                  1. Panorama da CLT em 2026: o que mudou
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Antes de mergulhar nos direitos individuais, é importante entender o cenário. Em 2026, três blocos de normas convivem e se sobrepõem: a CLT original de 1943, a Constituição Federal de 1988 (que incorporou boa parte dos direitos sociais no artigo 7º) e as leis mais recentes que atualizaram pontos específicos.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A <strong>Reforma Trabalhista (Lei 13.467/2017)</strong> criou o trabalho intermitente, ampliou a possibilidade de negociação coletiva, permitiu o parcelamento das férias em até três períodos e reduziu a obrigatoriedade da contribuição sindical. A <strong>Lei 14.442/2022</strong> reescreveu o capítulo do teletrabalho. A <strong>Lei 14.611/2023</strong> instituiu a igualdade salarial entre homens e mulheres com fiscalização direta. E, em 2026, a nova <strong>tabela do imposto de renda</strong> ampliou a faixa de isenção para quem ganha até dois salários mínimos, aumentando o líquido do trabalhador de renda baixa e média.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A boa notícia: nenhuma dessas mudanças eliminou direitos históricos como férias, 13º, FGTS ou aviso prévio. A má notícia: muitos empregadores, principalmente pequenos e médios, seguem interpretando essas leis de forma parcial ou equivocada. O trabalhador que conhece a norma reduz drasticamente a chance de sair perdendo.
                </p>

                <h2 id="carteira" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <FileText className="w-8 h-8 text-[#006B3D]" />
                  2. Carteira assinada e contrato de trabalho
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  A carteira assinada — hoje totalmente digital, chamada oficialmente de <strong>CTPS Digital</strong> — é a porta de entrada de praticamente todos os direitos que veremos adiante. Sem registro formal, o trabalhador continua tendo direitos, mas precisa provar o vínculo depois, na Justiça do Trabalho, e o processo é sempre desgastante.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Desde 2019, com a Lei da Liberdade Econômica (Lei 13.874), o registro é feito exclusivamente pelo <strong>eSocial</strong>, sistema unificado do Governo Federal. O empregador tem até 5 dias úteis do início do trabalho para efetuar o registro. O trabalhador consulta tudo no aplicativo Carteira de Trabalho Digital, disponível gratuitamente no Portal Gov.br.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Tipos de contrato mais comuns</h3>

                <ul className="space-y-3 mb-6 text-lg">
                  <li><strong>Prazo indeterminado:</strong> o padrão. Sem data para acabar, garante todos os direitos e maior estabilidade.</li>
                  <li><strong>Experiência:</strong> até 90 dias (pode ser fracionado em duas etapas), serve para testar a adequação. Se ultrapassar, converte-se automaticamente em prazo indeterminado.</li>
                  <li><strong>Prazo determinado:</strong> usado em serviços transitórios (safra, obra, eventos). Máximo de 2 anos.</li>
                  <li><strong>Intermitente:</strong> criado pela Reforma. O trabalhador é chamado conforme demanda, recebe por hora ou dia, mas mantém direito proporcional a férias, 13º, FGTS e INSS.</li>
                  <li><strong>Aprendiz:</strong> para jovens de 14 a 24 anos, regulado pela Lei da Aprendizagem (Lei 10.097/2000), com carga reduzida e obrigação de curso técnico paralelo.</li>
                </ul>

                <Card className="bg-amber-50 border-amber-200 mb-8">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-amber-900 mb-1">Cuidado com a “pejotização”</p>
                        <p className="text-amber-900 text-base">Contratar como MEI ou PJ um trabalhador que preenche os requisitos da relação de emprego (subordinação, habitualidade, pessoalidade e onerosidade) é fraude à CLT. Se preciso, o Ministério Público do Trabalho e a Justiça do Trabalho reconhecem o vínculo retroativo, com pagamento de férias, 13º, FGTS e verbas rescisórias.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="my-12 rounded-lg overflow-hidden">
                  <img
                    src="/blog/direitos-trabalhistas-clt-meio.webp"
                    alt="Trabalhador assinando contrato CLT com Carteira de Trabalho Digital ao lado, holerite no laptop e caneta sobre a mesa"
                    className="w-full h-auto"
                    width={1280}
                    height={853}
                    loading="lazy"
                  />
                  <p className="text-sm text-muted-foreground text-center mt-3 italic">
                    Guardar cópias do contrato, holerites e comprovantes de depósito do FGTS é a melhor defesa contra qualquer irregularidade.
                  </p>
                </div>

                <h2 id="jornada" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Clock className="w-8 h-8 text-[#006B3D]" />
                  3. Jornada, horas extras e banco de horas
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  A regra geral prevista no artigo 7º, XIII, da Constituição, é a de <strong>44 horas semanais</strong>, distribuídas em até 8 horas diárias. Escalas 6x1 (seis dias trabalhados, um de descanso) são comuns no varejo; a 5x2 (cinco dias por dois) é padrão em escritórios. A escala 12x36 (12 horas de trabalho por 36 de descanso), muito usada em segurança e saúde, foi consolidada pela Reforma Trabalhista e é plenamente válida quando prevista em acordo escrito.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  <strong>Hora extra:</strong> o adicional mínimo é de 50% sobre a hora normal em dias úteis e 100% em domingos e feriados, salvo se compensado com folga. O limite é de 2 horas extras por dia. O trabalhador pode recusar horas extras habituais se elas não estiverem previstas em contrato — a exigência forçada configura ilegalidade.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  <strong>Banco de horas:</strong> depois da Reforma, pode ser pactuado por acordo individual escrito (compensação em até 6 meses) ou por acordo/convenção coletiva (até 1 ano). Sem esse documento formal, todo excesso vira hora extra a ser paga em dinheiro.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Adicional noturno</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Quem trabalha entre 22h e 5h em atividade urbana tem direito a <strong>adicional noturno de 20%</strong> sobre o valor da hora diurna. Além disso, a hora noturna é computada como 52 minutos e 30 segundos, o que aumenta ainda mais a remuneração real do turno.
                </p>

                <h2 id="salario" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-[#006B3D]" />
                  4. Salário, adicionais e descontos legais
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  O salário nunca pode ser inferior ao <strong>salário mínimo nacional</strong> ou ao <strong>piso salarial</strong> da categoria fixado por convenção coletiva — o que for maior. Muitas profissões têm piso próprio (jornalistas, engenheiros, técnicos de enfermagem, professores) e conferir isso no site do sindicato antes de aceitar uma proposta evita anos de pagamento a menor.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Existem ainda os <strong>adicionais legais</strong>, que se somam ao salário:
                </p>

                <ul className="space-y-3 mb-6 text-lg">
                  <li><strong>Insalubridade:</strong> 10%, 20% ou 40% do salário mínimo, conforme grau, atestado por laudo NR-15.</li>
                  <li><strong>Periculosidade:</strong> 30% do salário-base, para atividades com risco de morte (eletricidade, inflamáveis, segurança).</li>
                  <li><strong>Adicional de transferência:</strong> 25% enquanto durar a mudança provisória de localidade.</li>
                  <li><strong>Adicional por tempo de serviço:</strong> anuênios, quinquênios ou triênios previstos em convenção coletiva.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Descontos permitidos por lei</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Nem tudo pode ser descontado do salário. A CLT autoriza apenas <strong>INSS, imposto de renda retido na fonte, contribuição sindical (quando autorizada por escrito), vale-transporte (limitado a 6% do salário), pensão alimentícia judicial e adiantamentos consentidos</strong>. Descontos por “quebra de caixa”, uniforme, refeitório ou danos causados sem dolo do empregado não são permitidos, salvo previsão contratual muito específica.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A tabela do <strong>INSS em 2026</strong> segue com alíquotas progressivas de 7,5% até 14%, aplicadas por faixa. A do <strong>imposto de renda</strong> foi atualizada em 2025 e 2026, ampliando a faixa de isenção. Ambas podem ser consultadas oficialmente no site da <a href="https://www.gov.br/receitafederal/pt-br" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline">Receita Federal</a>.
                </p>

                <h2 id="ferias" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-[#006B3D]" />
                  5. Férias, 13º salário e DSR
                </h2>

                <h3 className="text-2xl font-bold mt-6 mb-4">Férias remuneradas</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Depois de cada 12 meses de trabalho (chamado de <em>período aquisitivo</em>), o empregado tem direito a <strong>30 dias corridos de férias remuneradas</strong> mais o adicional constitucional de <strong>1/3 sobre o valor das férias</strong>. O empregador tem até 12 meses após o encerramento do período aquisitivo (<em>período concessivo</em>) para conceder o descanso. Se ultrapassar esse prazo, paga em dobro.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A Reforma Trabalhista permite que as férias sejam fracionadas em <strong>até três períodos</strong>, sendo um deles de no mínimo 14 dias corridos e os demais de pelo menos 5 dias cada. É facultado ao empregado, ainda, o <strong>abono pecuniário</strong>: vender 1/3 das férias (10 dias) por dinheiro, mediante pedido feito até 15 dias antes do encerramento do período aquisitivo.
                </p>

                <h3 className="text-2xl font-bold mt-6 mb-4">13º salário</h3>
                <p className="text-lg leading-relaxed mb-6">
                  O <strong>13º salário</strong>, criado pela Lei 4.090/1962 e garantido pela Constituição, é pago em duas parcelas: a primeira entre 1º de fevereiro e 30 de novembro (metade do salário, sem descontos) e a segunda até 20 de dezembro (com desconto de INSS e IR). Trabalhadores com menos de um ano recebem proporcional (1/12 por mês trabalhado com pelo menos 15 dias).
                </p>

                <h3 className="text-2xl font-bold mt-6 mb-4">DSR — descanso semanal remunerado</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Todo trabalhador tem direito a <strong>24 horas consecutivas de descanso semanal</strong>, preferencialmente aos domingos. Faltas injustificadas descontam o DSR proporcional — motivo pelo qual atrasos e ausências pesam mais do que o simples desconto do dia.
                </p>

                <h2 id="fgts" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-[#006B3D]" />
                  6. FGTS: depósitos, saques e multa de 40%
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  O <strong>Fundo de Garantia do Tempo de Serviço</strong>, criado pela Lei 5.107/1966 e regulado hoje pela Lei 8.036/1990, é uma poupança compulsória que o empregador deposita mensalmente na Caixa Econômica Federal em nome do trabalhador. O valor é de <strong>8% do salário bruto</strong> (2% no contrato de aprendiz). Esse depósito não é descontado do salário — sai do bolso do empregador.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  <strong>Quando dá para sacar:</strong>
                </p>

                <ul className="space-y-2 mb-6 text-lg">
                  <li>Demissão sem justa causa (com multa rescisória de 40% paga pelo empregador);</li>
                  <li>Aposentadoria;</li>
                  <li>Compra de imóvel residencial pelo SFH;</li>
                  <li>Doenças graves listadas em lei (câncer, HIV, entre outras);</li>
                  <li>Desastres naturais;</li>
                  <li>Aniversário (modalidade opcional criada pela Lei 13.932/2019).</li>
                </ul>

                <p className="text-lg leading-relaxed mb-6">
                  O acompanhamento é feito pelo aplicativo FGTS da Caixa. Descumprimento de depósito é infração grave: o trabalhador pode denunciar diretamente ao Ministério do Trabalho ou ao Ministério Público do Trabalho, com direito à cobrança retroativa.
                </p>

                <h2 id="licencas" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-[#006B3D]" />
                  7. Licenças, estabilidade e afastamentos
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  A CLT e a Constituição garantem várias licenças remuneradas ou com pagamento pelo INSS:
                </p>

                <ul className="space-y-3 mb-6 text-lg">
                  <li><strong>Licença-maternidade:</strong> 120 dias (podendo chegar a 180 nas empresas do Programa Empresa Cidadã), com salário integral pago pelo INSS na maioria dos casos.</li>
                  <li><strong>Licença-paternidade:</strong> 5 dias corridos (20 dias nas empresas do Programa Empresa Cidadã).</li>
                  <li><strong>Licença-adotante:</strong> equivalente à licença-maternidade, garantida pela Lei 12.010/2009.</li>
                  <li><strong>Licença-luto:</strong> 2 dias consecutivos por falecimento de cônjuge, ascendente, descendente, irmão ou dependente econômico.</li>
                  <li><strong>Licença-casamento (gala):</strong> 3 dias consecutivos.</li>
                  <li><strong>Auxílio-doença:</strong> a partir do 16º dia consecutivo de afastamento, pago pelo INSS.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-6 mb-4">Estabilidades legais</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Alguns trabalhadores não podem ser demitidos sem justa causa em determinados períodos: <strong>gestantes</strong> (da confirmação da gravidez até 5 meses após o parto), <strong>acidentados</strong> (12 meses após retorno do INSS por auxílio acidente), <strong>membros da CIPA</strong> (durante o mandato e 1 ano após), <strong>dirigentes sindicais</strong> e <strong>trabalhadores em vias de aposentadoria</strong> conforme convenção coletiva.
                </p>

                <h2 id="rescisao" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-[#006B3D]" />
                  8. Rescisão, aviso prévio e seguro-desemprego
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  O fim do contrato é onde mais aparecem erros nas contas. O primeiro passo é entender o tipo de rescisão, porque cada uma paga verbas diferentes:
                </p>

                <Card className="bg-muted/30 mb-8">
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-lg">
                      <li><strong>Demissão sem justa causa (pelo empregador):</strong> saldo de salário, aviso prévio, férias vencidas e proporcionais + 1/3, 13º proporcional, FGTS + multa de 40% e seguro-desemprego.</li>
                      <li><strong>Pedido de demissão:</strong> saldo, férias vencidas e proporcionais + 1/3, 13º proporcional. Sem multa do FGTS e sem seguro-desemprego. Aviso prévio pode ser cumprido ou descontado.</li>
                      <li><strong>Demissão por justa causa:</strong> só saldo e férias vencidas. Perde 13º proporcional, férias proporcionais, aviso prévio e FGTS.</li>
                      <li><strong>Rescisão por acordo (art. 484-A):</strong> criada pela Reforma. Metade do aviso prévio e da multa do FGTS, saque de até 80% do FGTS, sem direito ao seguro-desemprego.</li>
                      <li><strong>Rescisão indireta:</strong> quando o empregado pede desligamento porque o empregador cometeu falta grave. Recebe como se fosse demitido sem justa causa.</li>
                    </ul>
                  </CardContent>
                </Card>

                <h3 className="text-2xl font-bold mt-6 mb-4">Aviso prévio proporcional</h3>
                <p className="text-lg leading-relaxed mb-6">
                  O aviso prévio mínimo é de <strong>30 dias</strong>. A cada ano completo de serviço na mesma empresa, o trabalhador ganha <strong>3 dias adicionais</strong>, até o teto de 90 dias (Lei 12.506/2011). O aviso pode ser trabalhado (com redução de 2 horas diárias ou 7 dias corridos no final) ou indenizado (dispensa imediata com pagamento).
                </p>

                <h3 className="text-2xl font-bold mt-6 mb-4">Seguro-desemprego em 2026</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Tem direito o trabalhador demitido sem justa causa que cumpriu carência mínima: 12 meses trabalhados nos últimos 18 na primeira solicitação, 9 nos últimos 12 na segunda e 6 nos últimos 12 a partir da terceira. O pedido é feito diretamente pelo <a href="https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline">Portal Gov.br</a>, pelo app Carteira de Trabalho Digital ou nas unidades do SINE.
                </p>

                <h2 id="home-office" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Lightbulb className="w-8 h-8 text-[#006B3D]" />
                  9. Home office, intermitente e novas modalidades
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  A <strong>Lei 14.442/2022</strong> reorganizou o teletrabalho e trouxe pontos importantes: o contrato precisa ser expresso e por escrito, o empregador pode ou não fornecer equipamentos (com previsão contratual clara), a jornada pode ser controlada ou não, e o empregado em teletrabalho por produção ou tarefa não está sujeito ao controle da jornada padrão da CLT. Se você trabalha remoto e ainda não regularizou isso em contrato, é urgente pedir um aditivo — a informalidade favorece o empregador em conflitos futuros. Se quiser aprofundar, veja nosso guia sobre <Link to="/blog/home-office-brasil-direitos-clt-vagas-remotas" className="text-[#006B3D] hover:underline">direitos do trabalho remoto no Brasil</Link>.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  O <strong>trabalho intermitente</strong> continua válido e é usado especialmente no varejo, alimentação, eventos e turismo. O trabalhador é convocado com pelo menos 3 dias de antecedência, tem direito a recusar sem prejuízo, recebe por hora ou dia trabalhado e mantém proporcionalidade em todos os direitos.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Já a chamada <strong>pejotização</strong> — obrigar um empregado a abrir MEI ou pequena empresa para “prestar serviço” — continua sendo fraude quando presentes os elementos da relação de emprego. Se você foi convidado a atuar assim, avalie caso a caso; conhecer a diferença entre CLT e PJ, e como ela impacta um <Link to="/blog/curriculo-ti-priorizar-2026" className="text-[#006B3D] hover:underline">currículo de TI em 2026</Link>, evita decisões precipitadas.
                </p>

                <h2 id="defender" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-[#006B3D]" />
                  10. Como se defender quando a lei é descumprida
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Antes de qualquer ação, três hábitos protegem qualquer trabalhador:
                </p>

                <ol className="space-y-3 mb-6 text-lg list-decimal pl-6">
                  <li><strong>Guardar tudo:</strong> holerites, comprovantes de FGTS (pelo app), contrato assinado, aditivos, e-mails, mensagens de WhatsApp que revelam ordens, escalas ou combinações de horário.</li>
                  <li><strong>Conferir mês a mês:</strong> a maior parte dos erros trabalhistas é descoberta anos depois. Uma conferência simples do holerite e do FGTS a cada 30 dias resolve 80% dos problemas.</li>
                  <li><strong>Falar primeiro com o RH:</strong> muitos “erros” são falhas de cálculo. Um pedido formal por e-mail costuma corrigir sem litígio.</li>
                </ol>

                <p className="text-lg leading-relaxed mb-6">
                  Se o problema persistir, os canais oficiais são:
                </p>

                <ul className="space-y-2 mb-6 text-lg">
                  <li><strong>Ministério do Trabalho e Emprego:</strong> denúncia online no <a href="https://www.gov.br/trabalho-e-emprego/pt-br" target="_blank" rel="noopener noreferrer" className="text-[#006B3D] hover:underline">portal Gov.br</a>.</li>
                  <li><strong>Ministério Público do Trabalho (MPT):</strong> especialmente para casos coletivos, assédio moral ou sexual, discriminação e trabalho análogo à escravidão.</li>
                  <li><strong>Sindicato da categoria:</strong> assistência jurídica gratuita em muitos casos.</li>
                  <li><strong>Justiça do Trabalho:</strong> ação individual com advogado ou pela Defensoria Pública em cidades onde há atendimento trabalhista.</li>
                </ul>

                <Card className="bg-[#006B3D]/5 border-[#006B3D]/20 mb-8">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#006B3D] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Prazo para reclamar na Justiça</p>
                        <p className="text-base">O trabalhador pode ajuizar ação em até <strong>2 anos após o fim do contrato</strong>, cobrando verbas dos <strong>últimos 5 anos</strong>. Passado o prazo, o direito não se extingue moralmente, mas juridicamente prescreve.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 id="faq" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-[#006B3D]" />
                  11. Perguntas frequentes sobre direitos CLT
                </h2>

                <div className="space-y-6 mb-12">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quais são os principais direitos trabalhistas garantidos pela CLT em 2026?</h3>
                    <p className="text-lg leading-relaxed">Carteira assinada, salário mínimo, jornada de até 44 horas, hora extra com adicional mínimo de 50%, férias de 30 dias mais 1/3, 13º salário, FGTS de 8%, aviso prévio, seguro-desemprego, licença-maternidade de 120 dias, licença-paternidade e DSR — todos previstos na CLT e na Constituição.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quanto tempo o empregador tem para assinar a carteira de trabalho?</h3>
                    <p className="text-lg leading-relaxed">Até 5 dias úteis a partir do início do trabalho, com registro obrigatório pelo eSocial (Lei 13.874/2019).</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Como funciona o cálculo das horas extras em 2026?</h3>
                    <p className="text-lg leading-relaxed">Adicional mínimo de 50% em dias úteis e 100% em domingos e feriados, com limite de 2 horas extras diárias. Banco de horas precisa de acordo escrito.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quando o trabalhador tem direito ao seguro-desemprego?</h3>
                    <p className="text-lg leading-relaxed">Ao ser demitido sem justa causa, cumprida a carência (12, 9 ou 6 meses trabalhados, conforme número da solicitação). Pedido pelo Portal Gov.br.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Qual o valor do FGTS e como sacar?</h3>
                    <p className="text-lg leading-relaxed">8% do salário bruto depositado mensalmente pelo empregador. Saques permitidos em demissão sem justa causa, aposentadoria, compra de imóvel, doenças graves e modalidade aniversário.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">O que muda com a nova regra do trabalho intermitente?</h3>
                    <p className="text-lg leading-relaxed">O trabalhador é chamado conforme demanda, recebe por hora ou dia trabalhado e mantém direitos proporcionais de férias, 13º, FGTS e INSS.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Home office dá direito a auxílio pela CLT?</h3>
                    <p className="text-lg leading-relaxed">A Lei 14.442/2022 prevê que despesas com internet, energia e equipamentos podem ser reembolsadas mediante acordo escrito, sem valor mínimo obrigatório.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Empregada gestante pode ser demitida?</h3>
                    <p className="text-lg leading-relaxed">Não. Ela tem estabilidade da confirmação da gravidez até 5 meses após o parto (ADCT, art. 10, II, b).</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Como funciona o pagamento do 13º salário?</h3>
                    <p className="text-lg leading-relaxed">Duas parcelas: a primeira até 30/11 (metade, sem descontos), a segunda até 20/12 (com desconto de INSS e IR).</p>
                  </div>
                </div>

                <Card className="bg-gradient-to-br from-[#006B3D] to-[#005a32] text-white mb-12">
                  <CardContent className="p-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Conhece seus direitos? Agora conquiste a vaga.</h2>
                    <p className="text-lg mb-6 text-white/90">
                      Um currículo bem estruturado é o primeiro passo para conseguir um emprego CLT com todos os direitos garantidos. Crie o seu de graça em menos de 10 minutos.
                    </p>
                    <Button asChild size="lg" className="bg-white text-[#006B3D] hover:bg-white/90 font-semibold">
                      <Link to="/criar-curriculo">Criar meu currículo grátis</Link>
                    </Button>
                  </CardContent>
                </Card>

                <RelatedArticles currentUrl={articleUrl} />

                <AuthorBio />

              </div>
            </article>

            <div className="w-full lg:w-80 flex-shrink-0">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticle22;
