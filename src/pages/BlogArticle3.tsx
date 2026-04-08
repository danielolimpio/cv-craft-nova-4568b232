import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import { ArrowLeft, Calendar, Clock, User, CheckCircle2, XCircle, AlertTriangle, FileText, Search, Target, TrendingUp, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AuthorBio from "@/components/AuthorBio";
import danielPhoto from "@/assets/daniel-olimpio.jpg";

const BlogArticle3 = () => {
  return (
    <>
      <Helmet>
        <title>Currículo para ATS: Como Passar nos Filtros Automáticos</title>
        <meta name="description" content="Seu currículo é rejeitado antes de chegar ao recrutador? Aprenda a otimizar para sistemas ATS com dicas práticas, palavras-chave e formatação correta." />
        <meta property="og:title" content="Como Preparar seu Currículo para Sistemas ATS" />
        <meta property="og:description" content="Descubra como otimizar seu currículo para sistemas ATS e garantir que ele seja visto por recrutadores. Dicas práticas, atualizadas e testáveis." />
        <meta property="og:image" content="/blog/curriculo-ats-sistemas.jpg" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://fazercurriculo.com/blog/preparar-curriculo-sistemas-ats" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
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
                  Tecnologia
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Como Preparar seu Currículo para Sistemas ATS
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Descubra como otimizar seu currículo para sistemas ATS e garantir que ele seja visto por recrutadores. Dicas práticas, atualizadas e testáveis.
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-t py-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Daniel Olímpio</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>27 de Novembro, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>12 min de leitura</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12 rounded-lg overflow-hidden">
              <img 
                src="/blog/curriculo-ats-sistemas.jpg" 
                alt="Como Preparar seu Currículo para Sistemas ATS"
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
                  <Target className="w-8 h-8" style={{ color: '#006B3D' }} />
                  O Invisível que Decide Seu Futuro Profissional
                </h2>
                
                <p className="text-lg leading-relaxed mb-4">
                  Imagine enviar dezenas de currículos. Seu telefone continua em silêncio. Você revisa cada candidatura, corrige erros, ajusta a formatação, até que, por acaso, descobre: <strong>seu currículo nem chegou aos olhos humanos</strong>. Ele foi descartado por um sistema automatizado antes mesmo que um recrutador visse seu nome.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  Esse é o dia a dia de milhares de profissionais brasileiros. E o culpado invisível? Um sistema <strong>ATS — Applicant Tracking System</strong>, ou Sistema de Rastreamento de Candidatos. Estima-se que mais de <strong>95% das grandes empresas no Brasil e no mundo</strong> usam algum tipo de ATS para filtrar candidaturas, segundo dados da SHRM (Society for Human Resource Management). E se você não sabe como ele funciona ou como preparar seu currículo para passar por ele, está praticamente se tornando invisível no mercado de trabalho.
                </p>

                <div className="bg-[#006B3D]/5 border-l-4 border-[#006B3D] p-6 rounded-r-lg my-8">
                  <p className="text-lg font-semibold mb-2" style={{ color: '#006B3D' }}>
                    💡 Estatística Importante
                  </p>
                  <p className="text-base">
                    Até <strong>75% dos currículos</strong> são descartados automaticamente por sistemas ATS antes de chegarem a um recrutador humano.
                  </p>
                </div>

                <p className="text-lg leading-relaxed mb-4">
                  Este guia foi feito para mudar isso. Aqui, você vai entender não apenas como os sistemas ATS funcionam, mas como otimizar seu currículo com precisão cirúrgica para garantir que ele seja lido — e levado a sério.
                </p>
              </section>

              {/* O Que É um Sistema ATS */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Search className="w-8 h-8" style={{ color: '#006B3D' }} />
                  O Que É um Sistema ATS — e Por Que Ele Está Decidindo Seu Futuro?
                </h2>

                <p className="text-lg leading-relaxed mb-4">
                  Um sistema ATS é um software usado por empresas para gerenciar processos seletivos. Ele recebe centenas — às vezes milhares — de currículos, varre o conteúdo em busca de palavras-chave específicas, compara perfis com as exigências da vaga e classifica os candidatos automaticamente, muitas vezes descartando até 75% antes que um ser humano os veja.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  Pense nele como um filtro de café: só passa o que está alinhado com o "gosto" da empresa. Grãos inadequados? Vão direto para o lixo.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  Esse processo não é feito por malícia, mas por necessidade. Grandes corporações recebem um volume absurdo de aplicações — a Amazon, por exemplo, recebe mais de <strong>2 milhões de currículos por ano</strong>. Sem um ATS, seria impossível selecionar talentos com eficiência.
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-500 p-6 rounded-r-lg my-8">
                  <p className="text-lg font-semibold mb-2 text-yellow-800 dark:text-yellow-300">
                    ⚠️ O Problema Real
                  </p>
                  <p className="text-base text-yellow-900 dark:text-yellow-200">
                    Seu currículo pode ser perfeito para a vaga — e ainda assim ser rejeitado. Por quê? Porque foi escrito pensando em humanos, não em algoritmos.
                  </p>
                </div>

                <p className="text-lg leading-relaxed">
                  A boa notícia? Você pode vencer o sistema. Não enganando, mas adaptando-se a ele com inteligência.
                </p>
              </section>

              {/* Como os ATS Leem */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <FileText className="w-8 h-8" style={{ color: '#006B3D' }} />
                  Como os Sistemas ATS Leem seu Currículo
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Os ATS não "leem" como nós. Eles não entendem contexto, ironia ou criatividade visual. Eles procuram por dados estruturados: títulos, datas, competências, nomes de empresas, certificações. Qualquer elemento que atrapalhe essa leitura pode corromper a extração de dados.
                </p>

                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-500" />
                  Erros Comuns Que Fazem seu Currículo Ser Rejeitado
                </h3>

                <div className="bg-red-50 dark:bg-red-900/10 rounded-lg p-6 mb-6">
                  <ul className="space-y-3 text-base">
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <span><strong>Formatos inadequados:</strong> PDF com camadas de imagem, arquivos .pages ou .keynote</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <span><strong>Design excessivamente criativo:</strong> tabelas, textos em caixas laterais, cabeçalhos não padronizados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <span><strong>Palavras-chave ausentes:</strong> usar "coordenei um time" em vez de "gestão de equipes"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <span><strong>Abreviações não universais:</strong> "adm." em vez de "administração"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <span><strong>Falta de dados estruturais:</strong> não incluir localização, datas completas ou nomenclatura oficial de cargos</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#006B3D]/5 border-l-4 border-[#006B3D] p-6 rounded-r-lg">
                  <p className="text-lg font-semibold mb-2" style={{ color: '#006B3D' }}>
                    💡 Dica Prática
                  </p>
                  <p className="text-base">
                    Se seu currículo parece uma obra de arte, ele provavelmente falhará no ATS. O ideal é equilibrar clareza visual com simplicidade técnica — como um formulário bem preenchido.
                  </p>
                </div>
              </section>

              {/* Passo a Passo */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8" style={{ color: '#006B3D' }} />
                  Como Adaptar seu Currículo para Sistemas ATS (Passo a Passo)
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Agora que você entende o "inimigo", é hora de agir. A seguir, um guia prático para otimizar seu currículo para ATS sem perder sua identidade profissional.
                </p>

                {/* Passo 1 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">1. Use o Formato Correto</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Prefira sempre o formato <strong>.docx (Word)</strong>. Apesar do PDF ser popular, muitos ATS ainda têm dificuldade para ler textos embutidos em PDFs com layouts complexos. Se o site da empresa permitir apenas PDF, use um PDF baseado em texto puro, sem elementos gráficos.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <p className="text-base">
                      <CheckCircle2 className="w-4 h-4 inline mr-2 text-green-600" />
                      <strong>Faça assim:</strong> Salve seu currículo em Word, depois exporte como PDF "texto selecionável", não como imagem.
                    </p>
                  </div>
                </div>

                {/* Passo 2 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">2. Estruture com Títulos Padrão</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Evite títulos criativos como "Minha Jornada" ou "Onde Já Estive". Use rótulos reconhecíveis:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-base">
                    <li><strong>Experiência Profissional</strong> (não "Histórico de Trabalho")</li>
                    <li><strong>Formação Acadêmica</strong></li>
                    <li><strong>Competências</strong> (ou Habilidades Técnicas)</li>
                    <li><strong>Certificações</strong></li>
                    <li><strong>Idiomas</strong></li>
                  </ul>
                  <p className="text-base text-muted-foreground">
                    Isso permite que o sistema mapeie corretamente cada seção.
                  </p>
                </div>

                {/* Passo 3 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">3. Incorpore Palavras-Chave Relevantes</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Leia atentamente a descrição da vaga. Identifique os termos técnicos recorrentes: "gestão de projetos", "análise de dados", "CRM", "Scrum", "compliance", etc. Inclua essas expressões exatamente como aparecem — os ATS não reconhecem sinônimos com precisão.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <p className="text-base mb-2">
                      <CheckCircle2 className="w-4 h-4 inline mr-2 text-green-600" />
                      <strong>Exemplo:</strong>
                    </p>
                    <p className="text-base">
                      Se a vaga pede "experiência com Google Ads", não escreva "anúncios no Google". Escreva <strong>Google Ads</strong>.
                    </p>
                  </div>
                </div>

                {/* Passo 4 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">4. Evite Elementos Gráficos e Layouts Complexos</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Nada de:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-base text-red-600 dark:text-red-400">
                    <li>Linhas horizontais decorativas</li>
                    <li>Ícones de redes sociais</li>
                    <li>Colunas lado a lado</li>
                    <li>Gráficos de "nível de habilidade"</li>
                  </ul>
                  <p className="text-base text-muted-foreground">
                    Esses elementos geram ruído na leitura do sistema. Um currículo limpo, em bloco único, com fonte clara (Arial, Calibri ou Times New Roman), é a melhor aposta.
                  </p>
                </div>

                {/* Passo 5 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">5. Inclua Informações Completas e Padronizadas</h3>
                  <ul className="space-y-3 text-base">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Datas no formato MM/AAAA – MM/AAAA</strong> ou "janeiro/2020 – março/2023"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Nome completo da empresa e localização</strong> (ex: "São Paulo, SP")</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Cargo com nomenclatura oficial</strong> (não "guru de vendas", mas "Analista de Vendas Sênior")</span>
                    </li>
                  </ul>
                  <div className="bg-[#006B3D]/5 border-l-4 border-[#006B3D] p-4 rounded-r-lg mt-4">
                    <p className="text-base">
                      <strong>Lembre-se:</strong> O ATS compara seu currículo com o perfil ideal. Quanto mais dados estruturados, maior a chance de correspondência.
                    </p>
                  </div>
                </div>
              </section>

              {/* Palavras-Chave */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8" style={{ color: '#006B3D' }} />
                  Palavras-Chave: O Segredo para Vencer o Algoritmo
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Palavras-chave não são apenas termos técnicos — são sua ponte com o recrutador humano. Um currículo otimizado para ATS não é "robótico"; é preciso.
                </p>

                <h3 className="text-2xl font-bold mb-4">Como Identificar as Palavras-Chave Certas</h3>
                
                <ol className="space-y-3 mb-6 text-base list-decimal list-inside">
                  <li>Leia 3 a 5 descrições de vagas na sua área (LinkedIn, Catho, InfoJobs)</li>
                  <li>Liste os termos que se repetem: ferramentas, metodologias, certificações, soft skills</li>
                  <li>Verifique se você realmente possui essas competências — não invente</li>
                  <li>Distribua naturalmente em experiência, resumo profissional e seção de habilidades</li>
                </ol>

                <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <p className="text-lg font-semibold mb-3 text-green-800 dark:text-green-300">
                    ✅ Exemplo Prático
                  </p>
                  <p className="text-base mb-2"><strong>Vaga de Analista de Marketing Digital</strong></p>
                  <p className="text-base mb-3">
                    <strong>Palavras-chave comuns:</strong> SEO, Google Analytics, métricas de conversão, funis de vendas, e-mail marketing, ROI
                  </p>
                  <p className="text-base italic">
                    "Gestão de campanhas em Google Ads e Meta Ads, com foco em ROI e otimização de funis de conversão."
                  </p>
                </div>
              </section>

              {/* Tabela: O Que Incluir vs Evitar */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8" style={{ color: '#006B3D' }} />
                  Modelos de Currículo Otimizados para ATS
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Não existe um "modelo perfeito", mas há princípios universais que funcionam.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                    <thead>
                      <tr className="bg-green-100 dark:bg-green-900/30">
                        <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">
                          <CheckCircle2 className="w-5 h-5 inline mr-2 text-green-600" />
                          O Que Incluir (e Como)
                        </th>
                        <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">
                          <XCircle className="w-5 h-5 inline mr-2 text-red-500" />
                          O Que Evitar a Todo Custo
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                          Resumo profissional (3–4 linhas) com palavras-chave da área
                        </td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                          Fotos (não obrigatórias no Brasil)
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800/30">
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                          Experiência em ordem cronológica reversa
                        </td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                          Objetivos genéricos ("Buscar crescimento profissional")
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                          Resultados mensuráveis: "Aumentei as vendas em 30%"
                        </td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                          Hobbies irrelevantes ("gosto de viajar e cozinhar")
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800/30">
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                          Seção de habilidades técnicas com termos exatos da vaga
                        </td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                          Endereço completo (basta cidade e estado)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                          Certificações com nome completo e instituição
                        </td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                          Links quebrados ou redes sociais não profissionais
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Mitos */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8" style={{ color: '#006B3D' }} />
                  Mitos Sobre Sistemas ATS
                </h2>

                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">Mito 1: "ATS rejeitam currículos criativos"</h3>
                    <p className="text-base">
                      <strong>Verdade:</strong> ATS não rejeitam criatividade — rejeitam falta de estrutura. Você pode ser criativo após ser selecionado.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">Mito 2: "Basta colocar todas as palavras-chave no final"</h3>
                    <p className="text-base">
                      <strong>Verdade:</strong> Isso é considerado keyword stuffing e pode te desclassificar. As palavras devem estar integradas naturalmente ao conteúdo.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">Mito 3: "Pequenas empresas não usam ATS"</h3>
                    <p className="text-base">
                      <strong>Verdade:</strong> Cada vez mais PMEs adotam soluções leves, especialmente em processos com alto volume de candidaturas.
                    </p>
                  </div>
                </div>

                <div className="bg-[#006B3D]/5 border-l-4 border-[#006B3D] p-6 rounded-r-lg mt-8">
                  <p className="text-base">
                    Segundo um estudo da <strong>Harvard Business Review</strong>, candidatos que otimizam currículos para ATS têm <strong>3x mais chances</strong> de serem chamados para entrevista.
                  </p>
                </div>
              </section>

              {/* CTA Section */}
              <section className="mb-12 bg-gradient-to-br from-[#006B3D]/10 to-[#006B3D]/5 rounded-2xl p-8 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4" style={{ color: '#006B3D' }} />
                <h2 className="text-3xl font-bold mb-4">
                  Pronto para Criar seu Currículo Otimizado para ATS?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Use nossa ferramenta gratuita para criar um currículo profissional e 100% compatível com sistemas ATS. Comece agora e aumente suas chances de ser chamado para entrevistas!
                </p>
                <Link to="/criar-curriculo">
                  <Button size="lg" className="text-lg px-8 py-6" style={{ backgroundColor: '#006B3D' }}>
                    Criar Currículo Grátis
                  </Button>
                </Link>
              </section>

              {/* Conclusão */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">
                  Conclusão: Seu Currículo Não Precisa Ser Perfeito — Só Inteligente
                </h2>

                <p className="text-lg leading-relaxed mb-4">
                  Preparar seu currículo para sistemas ATS não é sobre "enganar algoritmos". É sobre falar a mesma língua do processo seletivo moderno. Em um mercado cada vez mais digital, ser encontrado é tão importante quanto ser qualificado.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  Você investiu anos em educação, experiências e crescimento. Não permita que um erro de formatação ou ausência de palavras-chave apague todo esse esforço. Com as estratégias certas, seu currículo pode passar pelo filtro com a mesma facilidade com que um raio de sol atravessa uma janela limpa.
                </p>

                <p className="text-lg leading-relaxed font-semibold">
                  Agora, a bola está com você. Revise seu currículo. Teste sua compatibilidade. E dê o próximo passo com confiança.
                </p>
              </section>

              {/* FAQ */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes (FAQ)</h2>

                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3">O que é um sistema ATS?</h3>
                    <p className="text-base">
                      Um sistema ATS (Applicant Tracking System) é um software usado por empresas para coletar, filtrar e gerenciar currículos de candidatos, priorizando aqueles que mais se alinham às exigências da vaga.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3">Como saber se uma empresa usa ATS?</h3>
                    <p className="text-base">
                      Praticamente todas as grandes empresas e muitas médias usam ATS. Sinais incluem: formulários de inscrição no site da empresa (em vez de upload direto de currículo) e processos seletivos com alto volume de candidatos.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3">Currículo em PDF passa no ATS?</h3>
                    <p className="text-base">
                      Depende. PDFs baseados em texto funcionam, mas arquivos escaneados ou com design complexo podem falhar. O formato .docx é mais seguro.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3">Quantas palavras-chave devo incluir?</h3>
                    <p className="text-base">
                      Não existe número fixo. O ideal é integrar naturalmente 6 a 10 termos relevantes da descrição da vaga, distribuídos em experiência, resumo e habilidades.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3">Posso usar o mesmo currículo para todas as vagas?</h3>
                    <p className="text-base">
                      Não. Um currículo genérico tem baixa taxa de sucesso. Personalize pelo menos as palavras-chave e o resumo para cada aplicação.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3">O ATS analisa a carta de apresentação?</h3>
                    <p className="text-base">
                      Alguns sistemas sim, mas a maioria foca no currículo. Mesmo assim, mantenha a carta alinhada às mesmas palavras-chave.
                    </p>
                  </div>
                </div>
              </section>

              {/* Final CTA */}
              <section className="bg-gradient-to-br from-[#006B3D] to-[#005a32] text-white rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  ✨ Comece Agora!
                </h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Não sabe por onde começar? Crie seu currículo otimizado para ATS em minutos. Todos os templates são 100% gratuitos e otimizados para sistemas de rastreamento.
                </p>
                <Link to="/criar-curriculo">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                    Criar Currículo Grátis
                  </Button>
                </Link>
              </section>

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
    </>
  );
};

export default BlogArticle3;