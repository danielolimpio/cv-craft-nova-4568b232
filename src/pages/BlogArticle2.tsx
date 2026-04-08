import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, CheckCircle2, XCircle, AlertCircle, FileText, TrendingUp, Target } from "lucide-react";
import AuthorBio from "@/components/AuthorBio";
import danielPhoto from "@/assets/daniel-olimpio.jpg";
import { Helmet } from "react-helmet";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";

const BlogArticle2 = () => {
  const articleSchema = generateArticleSchema({
    title: "10 Erros Comuns em Currículos que Você Deve Evitar",
    description: "Seu currículo pode estar sendo descartado por erros simples. Veja os 10 mais comuns e como corrigir cada um com exemplos práticos.",
    image: "/blog/10-erros-comuns-curriculos.jpg",
    datePublished: "2025-11-25",
    dateModified: "2025-11-25",
    author: { name: "Equipe Fazer Currículo" },
    url: "/blog/10-erros-comuns-curriculos"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog", url: "/blog" },
    { name: "10 Erros Comuns em Currículos", url: "/blog/10-erros-comuns-curriculos" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>10 Erros no Currículo que Te Eliminam — Como Corrigir</title>
        <meta name="description" content="Seu currículo pode estar sendo descartado por erros simples. Veja os 10 mais comuns (com exemplos) e como corrigir cada um para ser chamado para entrevistas." />
        <link rel="canonical" href="https://fazercurriculo.com/blog/10-erros-comuns-curriculos" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="10 Erros no Currículo que Te Eliminam — Como Corrigir" />
        <meta property="og:description" content="Seu currículo pode estar sendo descartado por erros simples. Veja os 10 mais comuns e como corrigir." />
        <meta property="og:url" content="https://fazercurriculo.com/blog/10-erros-comuns-curriculos" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://fazercurriculo.com/blog/10-erros-comuns-curriculos.jpg" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Fazer Currículo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="10 Erros no Currículo que Te Eliminam" />
        <meta name="twitter:description" content="Veja os 10 erros mais comuns em currículos e como corrigir cada um." />
        <meta name="twitter:image" content="https://fazercurriculo.com/blog/10-erros-comuns-curriculos.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <main className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Article */}
            <article className="flex-1 max-w-4xl">
              {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-[#006B3D] hover:text-[#005a32] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-[#006B3D] text-white text-sm font-semibold rounded-full">
                Erros Comuns
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              10 Erros Comuns em Currículos que Você Deve Evitar
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Aprenda quais são os erros mais frequentes que podem comprometer suas chances de conseguir uma entrevista e descubra como consertá-los com técnicas práticas e atualizadas.
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-t py-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Equipe Fazer Currículo</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>25 de Novembro, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>7 min de leitura</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src="/blog/10-erros-curriculo.jpg" 
              alt="10 Erros Comuns em Currículos que Você Deve Evitar"
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
            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-[#006B3D]" />
              O Dilema Silencioso Por Trás de Cada Currículo Ignorado
            </h2>

            <p className="mb-6 leading-relaxed">
              Você já enviou dezenas — talvez centenas — de currículos e mal recebeu um "obrigado"? Está longe de estar sozinho. Em 2025, estima-se que um recrutador gasta, em média, apenas <strong>6 segundos</strong> analisando um currículo antes de decidir se o descarta ou não. Isso mesmo: menos que o tempo de desbloquear seu celular.
            </p>

            <p className="mb-6 leading-relaxed">
              Mas por que tantos currículos bem-intencionados acabam na lixeira digital, mesmo com formações sólidas e experiências relevantes? A resposta não está na falta de qualificação, mas na <strong>falta de alinhamento estratégico</strong> com o que o mercado espera hoje.
            </p>

            <p className="mb-8 leading-relaxed">
              Criar um currículo profissional que se destaca não é mais sobre listar funções ou preencher espaços em branco. É sobre comunicar valor com precisão, demonstrar impacto com clareza e se conectar com a dor real das empresas.
            </p>

            <div className="bg-gradient-to-br from-[#006B3D]/5 to-accent/5 p-8 rounded-lg my-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-[#006B3D]" />
                Por Que Seus Esforços Podem Estar Sendo Jogados Fora
              </h3>
              <p className="mb-4 leading-relaxed">
                O currículo não é apenas um resumo da sua trajetória. É sua primeira impressão escrita, o cartão de visitas que decide se você terá a chance de se apresentar pessoalmente. E, como em qualquer primeira impressão, detalhes aparentemente pequenos carregam um peso enorme.
              </p>
              <p className="leading-relaxed">
                Muitos profissionais cometem o equívoco de acreditar que basta listar experiências e qualificações para garantir uma entrevista. Ledo engano. O mercado mudou. Hoje, recrutadores enfrentam centenas — às vezes milhares — de candidaturas por vaga.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              Os 10 Erros Mais Comuns em Currículos
            </h2>

            {/* Error 1 */}
            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#006B3D]">
              1. Currículo Genérico: O Pior Inimigo da Personalização
            </h3>
            <p className="mb-4 leading-relaxed">
              Um dos erros mais comuns em currículos é tentar usar uma única versão para todas as vagas. Parece prático, mas é um tiro no pé.
            </p>
            <p className="mb-4 leading-relaxed">
              Recrutadores percebem facilmente quando o candidato não adaptou seu material à vaga específica. Um currículo genérico transmite falta de interesse, falta de foco e, pior, falta de pesquisa sobre a empresa.
            </p>
            <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-600 p-4 my-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Solução prática:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-6">
                <li>Crie um "currículo-mãe" com todas as suas experiências</li>
                <li>Desenvolva versões específicas para cada tipo de vaga</li>
                <li>Use palavras-chave do anúncio da vaga no seu currículo</li>
              </ul>
            </div>

            {/* Error 2 */}
            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#006B3D]">
              2. Informações Pessoais Desnecessárias ou Inadequadas
            </h3>
            <p className="mb-4 leading-relaxed">
              Em 2025, ainda é comum ver currículos com estado civil, número de filhos, foto (em países onde isso não é exigido), CPF ou endereço completo.
            </p>
            <p className="mb-4 leading-relaxed">
              Essas informações não só são irrelevantes, como podem abrir caminho para viés inconsciente ou até descarte automático por políticas de privacidade das empresas.
            </p>
            <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-600 p-4 my-4">
              <p className="font-semibold mb-2">O que incluir:</p>
              <ul className="list-disc list-inside space-y-2 ml-6">
                <li>Nome completo</li>
                <li>Telefone profissional (de preferência com WhatsApp)</li>
                <li>E-mail profissional</li>
                <li>LinkedIn (se estiver atualizado)</li>
                <li>Localização por cidade/estado</li>
              </ul>
            </div>

            {/* Error 3 */}
            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#006B3D]">
              3. Erros de Português e Formatação Desleixada
            </h3>
            <p className="mb-4 leading-relaxed">
              Parece óbvio, mas é alarmantemente frequente. Um único erro de ortografia ou concordância pode ser o suficiente para que seu currículo seja descartado — especialmente em cargos que exigem atenção aos detalhes.
            </p>
            <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-600 p-4 my-4">
              <p className="font-semibold mb-2">Dicas para evitar:</p>
              <ul className="list-disc list-inside space-y-2 ml-6">
                <li>Use fontes neutras: Arial, Calibri, Helvetica (tamanho 10-12)</li>
                <li>Mantenha margens uniformes (2,5 cm)</li>
                <li>Revise três vezes — ou peça a um amigo</li>
                <li>Utilize ferramentas como Grammarly ou corretor do Word</li>
              </ul>
            </div>

            {/* Error 4 */}
            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#006B3D]">
              4. Lista de Funções, Não de Resultados
            </h3>
            <p className="mb-4 leading-relaxed">
              Muitos currículos ainda seguem o modelo antigo: "Responsável por...", "Encarregado de...". Esse formato descreve tarefas, não impacto.
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>Recrutadores não querem saber o que você fazia — querem saber o que você entregou.</strong>
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-300 p-4 rounded-lg">
                <p className="font-semibold mb-2 text-red-600 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Versão fraca:
                </p>
                <p className="text-sm">"Gerenciava redes sociais da empresa."</p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-300 p-4 rounded-lg">
                <p className="font-semibold mb-2 text-green-600 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Versão forte:
                </p>
                <p className="text-sm">"Aumentou o engajamento nas redes sociais em 140% em 6 meses, gerando +3.200 leads qualificados."</p>
              </div>
            </div>

            {/* Error 5 */}
            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#006B3D]">
              5. Experiência Profissional Desorganizada ou Fora de Ordem
            </h3>
            <p className="mb-4 leading-relaxed">
              A ordem cronológica inversa (do mais recente para o mais antigo) é o padrão ouro no mundo corporativo. Inverter essa lógica cria confusão e desperta desconfiança.
            </p>
            <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-600 p-4 my-4">
              <p className="font-semibold mb-2">Boas práticas:</p>
              <ul className="list-disc list-inside space-y-2 ml-6">
                <li>Liste apenas as últimas 10 a 15 anos de experiência</li>
                <li>Se houver lacunas, contextualize brevemente</li>
                <li>Remova experiências que não contribuem para o cargo almejado</li>
              </ul>
            </div>

            {/* Error 6 */}
            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#006B3D]">
              6. Objetivo Profissional Ultrapassado ou Vago
            </h3>
            <p className="mb-4 leading-relaxed">
              "Busco uma empresa onde possa crescer e contribuir com meus conhecimentos." Soa familiar? Esse tipo de frase genérica não acrescenta valor nenhum.
            </p>
            <p className="mb-4 leading-relaxed">
              Hoje, o campo de "objetivo" está em desuso. Substitua por um <strong>perfil profissional</strong> ou resumo estratégico — um parágrafo de 3 a 4 linhas que resume sua expertise, área de atuação e principais conquistas.
            </p>

            {/* Error 7 */}
            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#006B3D]">
              7. Ignorar as Palavras-Chave do Setor (e dos Sistemas ATS)
            </h3>
            <p className="mb-4 leading-relaxed">
              Muitas empresas usam sistemas de triagem automatizada (ATS) para filtrar currículos antes que um ser humano os veja. Se seu currículo não contém palavras-chave específicas relacionadas à vaga, ele pode ser descartado automaticamente.
            </p>
            <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-600 p-4 my-4">
              <p className="font-semibold mb-2">Como se preparar:</p>
              <ul className="list-disc list-inside space-y-2 ml-6">
                <li>Leia atentamente a descrição da vaga</li>
                <li>Identifique termos técnicos recorrentes</li>
                <li>Integre essas palavras de forma natural</li>
              </ul>
            </div>

            {/* Error 8 */}
            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#006B3D]">
              8. Currículo Extremamente Longo ou Excessivamente Curto
            </h3>
            <p className="mb-4 leading-relaxed">
              O ideal varia conforme sua experiência:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-6">
              <li><strong>Até 5 anos de experiência:</strong> 1 página</li>
              <li><strong>5 a 15 anos:</strong> 1–2 páginas</li>
              <li><strong>Mais de 15 anos:</strong> até 2 páginas</li>
            </ul>
            <p className="mb-4 leading-relaxed italic">
              Dica de ouro: Cada linha do seu currículo deve responder: "Isso ajuda a me posicionar como o melhor candidato?"
            </p>

            {/* Error 9 */}
            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#006B3D]">
              9. Mentiras ou Exageros Perigosos
            </h3>
            <p className="mb-4 leading-relaxed">
              Inflar cargos, inventar certificações, ou dizer que "liderava uma equipe" quando apenas participava de reuniões — tudo isso pode parecer inofensivo no curto prazo. Mas é um risco extremo.
            </p>
            <p className="mb-4 leading-relaxed">
              Empresas verificam antecedentes. Um ex-colega pode ser contatado como referência. Se descoberto, o prejuízo vai além de perder uma vaga: você pode manchar sua reputação no setor.
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-600 p-4 my-4">
              <p className="font-semibold flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                Princípio ético: Seu currículo deve ser autêntico, não perfeito.
              </p>
            </div>

            {/* Error 10 */}
            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#006B3D]">
              10. Não Adaptar o Currículo ao Público-Alvo
            </h3>
            <p className="mb-4 leading-relaxed">
              Um erro sutil, mas devastador: não considerar quem vai ler seu currículo.
            </p>
            <p className="mb-4 leading-relaxed">
              Um currículo para uma startup de tecnologia deve ter tom mais dinâmico, foco em inovação e métricas ágeis. Já um enviado para um banco tradicional exige formalidade, estrutura clara e ênfase em compliance.
            </p>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#006B3D]/10 to-accent/10 p-8 rounded-lg my-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#006B3D]" />
                Pronto para Criar um Currículo Sem Erros?
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Agora que você conhece os 10 erros mais comuns, é hora de colocar esse conhecimento em prática. Crie seu currículo profissional gratuitamente com nossa ferramenta especializada.
              </p>
              <Button size="lg" className="bg-[#006B3D] hover:bg-[#005a32]" asChild>
                <Link to="/criar-curriculo">
                  <FileText className="w-5 h-5 mr-2" />
                  Criar Meu Currículo Grátis Agora
                </Link>
              </Button>
            </div>

            {/* Conclusion */}
            <h2 className="text-3xl font-bold mt-12 mb-6">
              Conclusão: Seu Currículo é Mais que um Documento — É uma Estratégia
            </h2>
            <p className="mb-6 leading-relaxed">
              Evitar os erros comuns em currículos não é sobre perfeição. É sobre clareza, relevância e respeito pelo tempo do recrutador. Cada escolha — desde a palavra que você usa até o espaço em branco que deixa — envia uma mensagem.
            </p>
            <p className="mb-6 leading-relaxed">
              Com as dicas deste artigo, você tem tudo para transformar seu currículo em um aliado poderoso na busca pelo próximo passo da sua carreira. E lembre-se: um bom currículo não garante uma vaga — mas um currículo cheio de erros garante que você não será chamado.
            </p>
            <p className="mb-8 leading-relaxed">
              Se este conteúdo te ajudou, compartilhe com alguém que está em busca de recolocação. Um pequeno gesto pode abrir grandes portas.
            </p>

            {/* FAQ */}
            <div className="bg-secondary/20 p-8 rounded-lg my-12">
              <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes (FAQ)</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">O que não pode faltar em um currículo em 2025?</h3>
                  <p className="leading-relaxed">
                    Um currículo moderno deve conter: nome e contato profissional, resumo estratégico (opcional), experiências com foco em resultados, formação acadêmica, habilidades relevantes e links profissionais (como LinkedIn).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Quantas páginas deve ter um currículo?</h3>
                  <p className="leading-relaxed">
                    Profissionais com até 10 anos de experiência devem manter o currículo em 1 página. Quem tem mais de 10 anos pode usar até 2 páginas, desde que o conteúdo seja relevante e conciso.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Currículo com erro de português é eliminado?</h3>
                  <p className="leading-relaxed">
                    Sim, especialmente em cargos que exigem comunicação clara. Um único erro pode ser interpretado como descuido ou falta de atenção aos detalhes — qualidades essenciais em quase todas as funções.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Devo colocar todas as minhas experiências no currículo?</h3>
                  <p className="leading-relaxed">
                    Não. Inclua apenas as experiências dos últimos 10 a 15 anos que sejam relevantes para a vaga. Experiências antigas ou não relacionadas podem ser omitidas para manter o foco.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Como saber se meu currículo passa no ATS?</h3>
                  <p className="leading-relaxed">
                    Use palavras-chave da descrição da vaga, evite tabelas, gráficos ou colunas complexas, e mantenha um formato simples (PDF ou DOCX limpo).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-[#006B3D] to-[#005a32] text-white p-8 rounded-lg text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Comece Agora Mesmo!</h2>
            <p className="text-lg mb-6 opacity-90">
              Não deixe que erros simples sabotem suas oportunidades. Crie um currículo profissional que realmente se destaca.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/criar-curriculo">
                Criar Meu Currículo Grátis
              </Link>
            </Button>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t">
            <Link to="/blog" className="inline-flex items-center text-[#006B3D] hover:text-[#005a32] transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para todos os artigos
            </Link>
          </div>

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

export default BlogArticle2;
