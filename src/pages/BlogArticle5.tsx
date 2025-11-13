import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Lightbulb, CheckCircle, XCircle, Target, Users, Award, BookOpen, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorBio from "@/components/AuthorBio";
import danielPhoto from "@/assets/daniel-olimpio.jpg";

const BlogArticle5 = () => {
  return (
    <>
      <Helmet>
        <title>Currículo Sem Experiência: Estratégias para Jovens e Iniciantes - Fazer Currículo</title>
        <meta name="description" content="Sem histórico profissional? Descubra como construir um currículo competitivo com projetos, voluntariado, habilidades e potencial — sem inventar." />
        <meta property="og:title" content="Currículo Sem Experiência: Estratégias para Jovens e Iniciantes" />
        <meta property="og:description" content="Sem histórico profissional? Descubra como construir um currículo competitivo com projetos, voluntariado, habilidades e potencial — sem inventar." />
        <meta property="og:image" content="/blog/curriculo-sem-experiencia.jpg" />
        <link rel="canonical" href="https://fazercurriculo.online/blog/5" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow pt-24 pb-12">
          <article className="container mx-auto px-4 max-w-4xl">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Voltar para o Blog
            </Link>

            <div className="mb-8 border-t border-b border-border py-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Sem Experiência
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Currículo Sem Experiência: Estratégias para Jovens e Iniciantes
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                Sem histórico profissional? Descubra como construir um currículo competitivo com projetos, voluntariado, habilidades e potencial — sem inventar.
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Por Daniel Olímpio</span>
                <span>•</span>
                <span>13 de novembro de 2025</span>
                <span>•</span>
                <span>15 min de leitura</span>
              </div>
            </div>

            <img 
              src="/blog/curriculo-sem-experiencia.jpg" 
              alt="Currículo Sem Experiência: Estratégias para Jovens e Iniciantes" 
              className="w-full h-auto rounded-lg mb-12 shadow-lg"
            />

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

            <div className="prose prose-lg max-w-none">
              <p>
                Na segunda-feira passada, Camila — 19 anos, formada no ensino médio há oito meses — apagou o WhatsApp de três grupos de vagas. Não por desistência. Por exaustão.
              </p>

              <p>
                "Toda vez que alguém posta uma oportunidade, vem junto: 'Precisa de experiência mínima de 1 ano'", ela me contou, com a voz meio cansada. "Até para emprego de caixa em supermercado. Eu penso: como alguém consegue o primeiro ano… sem ter o primeiro dia?"
              </p>

              <p>
                Essa é a armadilha do primeiro ciclo: o mercado pede experiência para dar experiência.
              </p>

              <p>
                Mas há uma saída — e ela não é fingir que trabalhou como assistente de gerente por dois anos em uma loja que nunca existiu.
              </p>

              <p>
                A saída é redefinir o que é "experiência".
              </p>

              <p>
                Porque experiência não é só CLT assinada. É resolver problemas. É entregar resultados. É aprender rápido e assumir responsabilidade — mesmo que seja no grêmio estudantil, na ONG do bairro ou na cozinha da sua casa, organizando a lista de compras da família com planilha no celular.
              </p>

              <p>
                Este artigo é um guia prático, baseado em entrevistas com recrutadores de empresas que realmente contratam iniciantes (Magazine Luiza, Grupo Boticário, Renner, Natura Jovem), além de orientadores vocacionais e jovens que conseguiram sua primeira oportunidade nos últimos 18 meses — sem currículo recheado de cargos anteriores.
              </p>

              <p>
                Vamos mostrar, passo a passo, como montar um currículo sem experiência que não apenas passa pelo filtro, mas chama atenção pela coerência, potencial e intencionalidade.
              </p>

              <p className="font-semibold">
                Sem artifícios. Sem enfeites. Só estratégia e verdade.
              </p>

              <h2 className="flex items-center gap-3 text-3xl font-bold mt-12 mb-6 text-foreground">
                <Target className="h-8 w-8 text-primary" />
                Por Que "Sem Experiência" Não É um Defeito — É um Contexto
              </h2>

              <p>
                A primeira coisa que precisa ficar clara: não ter experiência formal não é um erro seu. É uma condição comum — e previsível.
              </p>

              <p>
                Segundo dados do IBGE (2025), 43% dos jovens de 18 a 24 anos no Brasil estão à procura do primeiro emprego. Ou seja: em qualquer processo seletivo para vagas júnior, quase metade dos candidatos está na mesma situação que você.
              </p>

              <p>
                A diferença está em como cada um lida com essa realidade no currículo.
              </p>

              <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="italic text-foreground m-0">
                  "Quando leio 'Experiência: nenhuma', já sinto o peso da vergonha no papel. Mas quando vejo 'Projetos: 3 iniciativas coletivas com impacto local', penso: essa pessoa já age como profissional — só não teve o crachá ainda."
                </p>
                <p className="text-sm text-muted-foreground mt-2 m-0">
                  — Recrutador do Magazine Luiza
                </p>
              </div>

              <p>
                Ou seja: o problema não é a ausência de emprego anterior. É a ausência de narrativa.
              </p>

              <p>
                Seu currículo não precisa provar que você já fez tudo. Precisa provar que você sabe o que fazer com o que já fez — por menor que pareça.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Dica de autoconhecimento antes de começar:</p>
                    <p className="text-foreground/90 mb-2">Pegue um caderno. Anote, sem julgamento:</p>
                    <ul className="space-y-1 text-foreground/90">
                      <li>• Três situações em que você resolveu um problema (mesmo que pequeno)</li>
                      <li>• Duas vezes em que alguém te pediu ajuda especificamente por algo que você sabe fazer bem</li>
                      <li>• Uma atividade que você faz com consistência há mais de 3 meses</li>
                    </ul>
                    <p className="text-foreground/90 mt-2 mb-0">Isso é seu capital. Vamos transformá-lo em currículo.</p>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3 text-3xl font-bold mt-12 mb-6 text-foreground">
                <BookOpen className="h-8 w-8 text-primary" />
                Estrutura Ideal: O Que Incluir (e Por Que Cada Parte Importa)
              </h2>

              <p>
                Esqueça modelos genéricos com 8 seções. Para currículo sem experiência, o ideal são 5 blocos estratégicos, organizados para gerar confiança em menos de 30 segundos — o tempo médio que um recrutador dedica a um CV no primeiro filtro (fonte: LHH, 2024).
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                1. Dados de contato: profissionalismo começa aqui
              </h3>

              <p>
                Parece básico — mas é onde muitos perdem pontos antes mesmo do conteúdo.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-900 dark:text-red-100 mb-2">Evite:</p>
                      <ul className="text-sm space-y-1 text-red-800 dark:text-red-200">
                        <li>• E-mails como gatinhafoguete2006@gmail.com</li>
                        <li>• Telefone sem WhatsApp</li>
                        <li>• Endereço completo</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-900 dark:text-green-100 mb-2">Faça assim:</p>
                      <ul className="text-sm space-y-1 text-green-800 dark:text-green-200">
                        <li>• Nome completo</li>
                        <li>• E-mail profissional</li>
                        <li>• Celular com WhatsApp ativo</li>
                        <li>• Cidade/Estado</li>
                        <li>• LinkedIn (opcional, mas útil)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                2. Objetivo profissional: sua bússola — não seu sonho
              </h3>

              <p>
                Aqui mora o maior desperdício de espaço em currículos iniciantes: frases prontas copiadas da internet.
              </p>

              <div className="bg-muted/30 border-l-4 border-red-500 p-6 rounded-r-lg my-6">
                <p className="text-foreground m-0">
                  <XCircle className="inline h-5 w-5 text-red-500 mr-2" />
                  "Busco crescimento pessoal e profissional em uma empresa inovadora."
                </p>
                <p className="text-sm text-muted-foreground mt-2 m-0">
                  (Isso não diz nada. Todas as pessoas querem isso.)
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
                <p className="font-semibold text-foreground mb-3">
                  <CheckCircle className="inline h-5 w-5 text-primary mr-2" />
                  A fórmula que funciona:
                </p>
                <p className="text-foreground/90 italic mb-0">
                  "Busco [tipo de vaga] para aplicar minha habilidade em [X] e contribuir com [Y], alinhado ao propósito de [empresa/setor] de [valor específico]."
                </p>
              </div>

              <div className="bg-muted/20 rounded-lg p-6 my-6">
                <p className="font-semibold text-foreground mb-3">Exemplos reais (usados por jovens contratados em 2024):</p>
                <div className="space-y-4">
                  <div className="pl-4 border-l-2 border-primary">
                    <p className="text-foreground/90 mb-0">
                      "Busco vaga de jovem aprendiz em logística para aplicar minha habilidade em organização (desenvolvida como responsável pela biblioteca da escola) e contribuir com a eficiência operacional — como faz a Amazon ao priorizar precisão na entrega."
                    </p>
                  </div>
                  <div className="pl-4 border-l-2 border-primary">
                    <p className="text-foreground/90 mb-0">
                      "Busco estágio em atendimento ao cliente para usar minha escuta ativa (treinada no voluntariado com idosos) e melhorar a experiência do usuário, seguindo o exemplo do Nubank na humanização do serviço."
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-1"><strong>Note:</strong></p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Citei habilidade concreta</li>
                    <li>• Mostrei origem real dela</li>
                    <li>• Conectei a um propósito visível da empresa</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2 mb-0">
                    Isso não é bajulação. É pesquisa + intenção.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                3. Formação acadêmica: não é só "onde estudou" — é "o que fez lá"
              </h3>

              <p>
                Sim, você deve incluir o ensino médio — mesmo que concluído há anos ou ainda em andamento. Mas não basta listar o nome da escola.
              </p>

              <p className="font-semibold">
                O segredo está em ativar o contexto.
              </p>

              <div className="bg-muted/20 rounded-lg p-6 my-6 font-mono text-sm">
                <p className="font-semibold text-foreground mb-3">
                  <CheckCircle className="inline h-5 w-5 text-green-600 mr-2" />
                  Modelo eficaz:
                </p>
                <div className="space-y-2 text-foreground/90">
                  <p className="font-semibold mb-1">Ensino Médio Técnico em Informática</p>
                  <p className="text-muted-foreground">ETEC de São José dos Campos | Concluído em dez/2023</p>
                  <p className="mt-3">▪️ Projeto integrador: "Aplicativo para Agendamento de Consultas na UBS Local" (em equipe de 4)</p>
                  <p className="ml-4">• Desenvolvi protótipo no Figma com base em entrevistas com 12 usuários</p>
                  <p className="ml-4">• Apresentação para secretária municipal de saúde — menção honrosa na feira tecnológica</p>
                  <p className="mt-2">▪️ Curso complementar: Introdução à Lógica de Programação (Alura Start, 40h)</p>
                </div>
              </div>

              <p>
                Veja: transformei "fiz o técnico" em evidência de iniciativa, colaboração e aplicação prática.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                4. Projetos, Voluntariado e Iniciativas: sua seção estrela
              </h3>

              <p>
                Aqui está o coração do seu currículo sem experiência.
              </p>

              <p>
                Muitos escrevem:
              </p>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4 my-4">
                <p className="text-red-900 dark:text-red-100 mb-1">
                  <XCircle className="inline h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                  "Voluntariado em asilo — 2022"
                </p>
                <p className="text-red-900 dark:text-red-100 mb-0">
                  <XCircle className="inline h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                  "Ajudei a organizar evento da escola"
                </p>
              </div>

              <p>
                Isso não é errado — é incompleto. Falta o <strong>o quê, como e com que resultado</strong>.
              </p>

              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
                <p className="font-semibold text-green-900 dark:text-green-100 mb-4">
                  <CheckCircle className="inline h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  Estrutura que gera impacto:
                </p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-green-600 dark:border-green-400 pl-4">
                    <p className="font-semibold text-green-900 dark:text-green-100 mb-2">Apoio a Idosos — Casa de Repouso Santa Clara</p>
                    <ul className="text-sm space-y-1 text-green-800 dark:text-green-200">
                      <li>• Visita semanal a 5 residentes, com leitura de notícias e jogos de memória</li>
                      <li>• Criação de ficha simples (no Excel) para registrar preferências e observações</li>
                      <li className="font-semibold mt-2">Habilidades: empatia, observação, uso básico de planilhas</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 dark:border-green-400 pl-4">
                    <p className="font-semibold text-green-900 dark:text-green-100 mb-2">Semana da Consciência Negra — Escola Municipal</p>
                    <ul className="text-sm space-y-1 text-green-800 dark:text-green-200">
                      <li>• Coordenação de grupo de 8 alunos na curadoria de vídeos e convidados</li>
                      <li>• Captação de R$320 com venda de adesivos — 100% revertido para biblioteca com livros de autores negros</li>
                      <li className="font-semibold mt-2">Habilidades: liderança informal, negociação, gestão de pequenos recursos</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="font-semibold text-foreground mb-2">Importante:</p>
                <p className="text-foreground/90 mb-0">
                  Você não precisa de grandes números. R$320 é relevante quando vem de estudantes. 12 entrevistas são significativas quando feitas por iniciativa própria.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                5. Habilidades: técnicas + comportamentais — com prova mínima
              </h3>

              <p>
                Listar "organização", "comunicação" ou "trabalho em equipe" sem contexto é como dizer "sou bom em cozinhar" sem mostrar um prato.
              </p>

              <p className="font-semibold">
                A regra: toda habilidade genérica precisa de uma âncora real — mesmo que pequena.
              </p>

              <div className="bg-muted/20 rounded-lg p-6 my-6">
                <p className="font-semibold text-foreground mb-4">
                  <CheckCircle className="inline h-5 w-5 text-green-600 mr-2" />
                  Exemplos que funcionam:
                </p>
                <div className="space-y-3 text-foreground/90">
                  <p className="mb-2">
                    <strong>Atendimento ao público:</strong> experiência no balcão da padaria do tio (3x/semana), lidando com pedidos, troco e reclamações com calma
                  </p>
                  <p className="mb-2">
                    <strong>Pacote Office:</strong> uso do Excel para controle de gastos pessoais (criação de gráficos e fórmulas de média)
                  </p>
                  <p className="mb-2">
                    <strong>Gestão de tempo:</strong> cumprimento de cronograma de estudos com app Notion — 85% de adesão em 2 meses
                  </p>
                  <p className="mb-0">
                    <strong>Criatividade:</strong> criação de posts para Instagram da turma de formatura (crescimento de 600 para 1.400 seguidores em 3 meses)
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-1"><strong>Note: todas têm</strong></p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>✔️ contexto real</li>
                    <li>✔️ ferramenta ou situação específica</li>
                    <li>✔️ (quando possível) métrica simples e honesta</li>
                  </ul>
                </div>
              </div>

              <h2 className="flex items-center gap-3 text-3xl font-bold mt-12 mb-6 text-foreground">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                O Que Evitar: 5 Erros Que Eliminam Antes da Entrevista
              </h2>

              <p>
                Conversamos com três recrutadores de RH que lidam diariamente com processos de jovem aprendiz e estágio. Pedimos: "O que faz você descartar um currículo sem experiência em menos de 10 segundos?"
              </p>

              <p>
                As respostas foram surpreendentemente consistentes.
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6" />
                    Erro #1: "Experiência Profissional: Nenhuma" (escrito em negrito)
                  </h3>
                  <p className="text-red-800 dark:text-red-200 mb-3">
                    Soa como um lamento — não como um dado neutro.
                  </p>
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-4">
                    <p className="text-green-900 dark:text-green-100 font-semibold mb-2">
                      <CheckCircle className="inline h-5 w-5 mr-2" />
                      Solução:
                    </p>
                    <p className="text-green-800 dark:text-green-200 mb-0">
                      Simplesmente não inclua a seção. Substitua por "Projetos e Iniciativas" ou "Atividades Relevantes". A ausência de experiência é óbvia — o que importa é o que você fez além disso.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6" />
                    Erro #2: Objetivo genérico ou copiado
                  </h3>
                  <p className="text-red-800 dark:text-red-200 mb-3">
                    Frases como "Buscar oportunidade em empresa de renome" ou "Contribuir para o crescimento mútuo" não geram conexão. Geram desconfiança.
                  </p>
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-4">
                    <p className="text-green-900 dark:text-green-100 font-semibold mb-2">
                      <CheckCircle className="inline h-5 w-5 mr-2" />
                      Solução:
                    </p>
                    <p className="text-green-800 dark:text-green-200 mb-0">
                      Personalize. Pesquise a empresa. Um site de carreiras costuma ter a missão, valores e notícias recentes. Use isso.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6" />
                    Erro #3: Habilidades sem relação com a vaga
                  </h3>
                  <p className="text-red-800 dark:text-red-200 mb-3">
                    Listar "Photoshop avançado" para uma vaga de repositor de supermercado, ou "conhecimento em Python" para atendimento telefônico, parece tentativa de impressionar — não de se posicionar.
                  </p>
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-4">
                    <p className="text-green-900 dark:text-green-100 font-semibold mb-2">
                      <CheckCircle className="inline h-5 w-5 mr-2" />
                      Solução:
                    </p>
                    <p className="text-green-800 dark:text-green-200 mb-2">
                      Filtre suas habilidades pelo nível de relevância para a vaga.
                    </p>
                    <ul className="text-sm space-y-1 text-green-800 dark:text-green-200 ml-4">
                      <li>• Para atendimento: escuta, paciência, clareza verbal, resolução de conflitos</li>
                      <li>• Para logística: organização, atenção a detalhes, noções de controle, pontualidade</li>
                      <li>• Para administração: planilhas, digitação, leitura de instruções, proatividade</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6" />
                    Erro #4: Erros de português (sim, ainda em 2025)
                  </h3>
                  <p className="text-red-800 dark:text-red-200 mb-3">
                    Não são só erros graves. São: "Pratica esportiva" (falta de acento), "Tenho facilidade de aprendisado", "Objetivo: consiguir um trablho"
                  </p>
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-4">
                    <p className="text-green-900 dark:text-green-100 font-semibold mb-2">
                      <CheckCircle className="inline h-5 w-5 mr-2" />
                      Truque de redator:
                    </p>
                    <p className="text-green-800 dark:text-green-200 mb-0">
                      Leia seu currículo de trás para frente, linha por linha. O cérebro não completa frases automaticamente, então erros saltam aos olhos.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6" />
                    Erro #5: Inventar cargos ou responsabilidades
                  </h3>
                  <p className="text-red-800 dark:text-red-200 mb-3">
                    "Assistente de Vendas — Loja de Roupas — jan/2023 a jun/2023" … quando na verdade ajudou no caixa por duas semanas nas férias da tia.
                  </p>
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-4">
                    <p className="text-green-900 dark:text-green-100 font-semibold mb-2">
                      <CheckCircle className="inline h-5 w-5 mr-2" />
                      Verdade com potencial &gt; mentira com brilho
                    </p>
                    <p className="text-green-800 dark:text-green-200 mb-0">
                      Diga: "Apoio pontual em rotinas de vendas e caixa na loja familiar — primeiro contato com atendimento, controle de estoque visual e rotinas comerciais."
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3 text-3xl font-bold mt-12 mb-6 text-foreground">
                <Users className="h-8 w-8 text-primary" />
                Modelos Comparados: Do "Invisível" ao "Inesquecível"
              </h2>

              <p>
                Vamos ver dois currículos fictícios — mas baseados em casos reais que passaram por nosso time de mentoria.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-4 flex items-center gap-2">
                    <XCircle className="h-6 w-6" />
                    Modelo Invisível
                  </h3>
                  <div className="bg-white dark:bg-gray-900 rounded p-4 font-mono text-xs space-y-2">
                    <p className="font-bold">João Costa</p>
                    <p>joaocosta123@gmail.com</p>
                    <p>(21) 99999-8888 | Rio de Janeiro/RJ</p>
                    <p className="mt-4 font-semibold">Objetivo:</p>
                    <p>Conseguir meu primeiro emprego.</p>
                    <p className="mt-4 font-semibold">Formação:</p>
                    <p>Ensino Médio — Colégio Municipal Rio Branco — Concluído em 2023</p>
                    <p className="mt-4 font-semibold">Experiência Profissional:</p>
                    <p>Nenhuma</p>
                    <p className="mt-4 font-semibold">Habilidades:</p>
                    <p>Comunicação, organização, trabalho em equipe</p>
                    <p className="mt-4 font-semibold">Referências:</p>
                    <p>Disponíveis sob demanda</p>
                  </div>
                  <p className="text-red-800 dark:text-red-200 text-sm mt-4 mb-0">
                    → Resultado: descartado em 6 segundos. Não revela quem é João.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6" />
                    Modelo Inesquecível
                  </h3>
                  <div className="bg-white dark:bg-gray-900 rounded p-4 font-mono text-xs space-y-2">
                    <p className="font-bold">João Costa Santos</p>
                    <p>joao.costa.rj@gmail.com | (21) 98765-4321</p>
                    <p>Rio de Janeiro/RJ | linkedin.com/in/joaocosta-jr</p>
                    <p className="mt-4 font-semibold">Objetivo</p>
                    <p className="text-[10px]">Busco vaga de jovem aprendiz em logística para aplicar minha habilidade em organização...</p>
                    <p className="mt-4 font-semibold">Formação Acadêmica</p>
                    <p>Ensino Médio Regular</p>
                    <p className="text-[10px]">Colégio Municipal Rio Branco | dez/2023</p>
                    <p className="text-[10px]">▪️ Projeto "Minha Rotina em Quadros"</p>
                    <p className="mt-4 font-semibold">Projetos e Iniciativas</p>
                    <p className="text-[10px]">Central de Doações — Igreja</p>
                    <p className="text-[10px]">• Organização de 25 famílias/mês</p>
                    <p className="text-[10px]">• Sistema de etiquetas (-40% tempo)</p>
                    <p className="mt-4 font-semibold">Habilidades</p>
                    <p className="text-[10px]">• Organização física (classificação...)</p>
                    <p className="text-[10px]">• Atenção a detalhes (100% em 6m)</p>
                  </div>
                  <p className="text-green-800 dark:text-green-200 text-sm mt-4 mb-0">
                    → Resultado: entrevista em 48h. "Ele pensa em processos!"
                  </p>
                </div>
              </div>

              <h2 className="flex items-center gap-3 text-3xl font-bold mt-12 mb-6 text-foreground">
                <Award className="h-8 w-8 text-primary" />
                Checklist Final: Antes de Enviar, Confira Isso
              </h2>

              <div className="bg-muted/20 rounded-lg p-6 my-8">
                <p className="font-semibold text-foreground mb-4">Imprima e marque com ✅:</p>
                <div className="space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-foreground/90">Nome do arquivo: SeuNome_Curriculo_SemExperiencia.pdf</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-foreground/90">Extensão: PDF (evite Word)</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-foreground/90">Duração máxima: 1 página</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-foreground/90">Fonte: Arial, Calibri ou Helvetica, tamanho 11</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-foreground/90">Margens: 2,5 cm em todos os lados</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-foreground/90">Zero erros de digitação (leu em voz alta?)</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-foreground/90">Objetivo menciona empresa ou setor específico</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-foreground/90">Pelo menos um projeto com métrica simples</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-foreground/90">Habilidades têm exemplo mínimo de aplicação</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-foreground/90">Foto (se incluir) é neutra, atual e profissional</span>
                  </label>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center my-12">
                <h3 className="text-2xl font-bold mb-4">Pronto para criar seu currículo?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Use nosso gerador gratuito e crie um currículo profissional em minutos
                </p>
                <Link 
                  to="/criar-curriculo" 
                  className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Criar Currículo Grátis
                </Link>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Perguntas Frequentes (FAQ)
              </h2>

              <div className="space-y-6 my-8">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Posso colocar cursos online gratuitos no currículo?
                  </h3>
                  <p className="text-foreground/90 mb-0">
                    Sim — e deve. Inclua plataforma, carga horária e status (concluído/em andamento). Ex: "Comunicação Não Violenta — Coursera (Universidade Federal de Minas Gerais) | 12h | Concluído em jan/2025". Isso demonstra iniciativa contínua.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    E se eu só fiz estágios não registrados?
                  </h3>
                  <p className="text-foreground/90 mb-0">
                    Inclua como "Experiência Prática" ou "Imersão Profissional", com data, local e atividades reais — sem inventar cargo. Ex: "Apoio em rotinas administrativas — Escritório Contábil (estágio não remunerado) | fev a mai/2024". Muitas empresas valorizam isso, desde que seja verdadeiro.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Currículo sem experiência pode ter mais de uma página?
                  </h3>
                  <p className="text-foreground/90 mb-0">
                    Não recomendado. Um estudo da Universidade de Michigan (2024) mostrou que currículos de 2 páginas de candidatos júnior têm 63% menos chances de serem lidos integralmente. Mantenha tudo em 1 página clara e objetiva.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Devo colocar pretensão salarial?
                  </h3>
                  <p className="text-foreground/90 mb-0">
                    Evite — principalmente se for sua primeira aplicação. Isso pode ser discutido na entrevista, quando você já mostrou valor. Se o formulário exigir, escreva "A combinar, conforme padrão da empresa para a função".
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    O que fazer se nunca participei de nenhum projeto ou voluntariado?
                  </h3>
                  <p className="text-foreground/90 mb-3">
                    Comece pelo que você faz com consistência:
                  </p>
                  <ul className="space-y-2 text-foreground/90">
                    <li>• <strong>Cuidar de irmãos mais novos</strong> → "Gestão de rotina escolar e alimentação — desenvolvendo paciência e planejamento"</li>
                    <li>• <strong>Ajudar nos afazeres domésticos</strong> → "Organização de compras e estoque familiar com lista digital — reduzindo desperdício em 15%"</li>
                    <li>• <strong>Estudar sozinho para o Enem</strong> → "Autogestão de estudos: 3h/dia por 6 meses, com cronograma autoelaborado"</li>
                  </ul>
                  <p className="text-foreground/90 mt-3 mb-0">
                    Tudo isso conta. Só precisa ser nomeado com propósito.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Conclusão: Sua Experiência Já Existe — Só Precisa Ser Contada
              </h2>

              <p>
                Voltando à Camila: ela não conseguiu a vaga por ter virado uma "super-candidata". Conseguiu porque, pela primeira vez, seu currículo não escondia sua realidade — traduzia seu potencial.
              </p>

              <p>
                Ela incluiu o projeto da feira cultural da escola onde criou um jogo sobre sustentabilidade. Mencionou que, por dois anos, ajudou a mãe a organizar as contas da casa com um caderno e uma calculadora. Escreveu no objetivo: "… contribuir com a educação financeira prática, como faz a C6 Bank em suas ações com jovens."
              </p>

              <p>
                Resultado: entrevista na quinta. Contratação como jovem aprendiz na área de educação financeira da fintech.
              </p>

              <p className="text-xl font-semibold">
                O mercado não espera que você saiba tudo. Espera que você saiba o que fazer com o que já tem.
              </p>

              <p className="text-xl font-semibold">
                E isso — isso sim — cabe em uma página.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-r-lg p-8 my-12">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Award className="h-8 w-8 text-primary" />
                  Próximo passo:
                </h3>
                <p className="text-lg text-foreground/90 mb-6">
                  Use nosso <strong>Gerador de Currículo Sem Experiência</strong> — totalmente gratuito, modelo limpo, otimizado para ATS e com dicas em tempo real enquanto você preenche. Em 10 minutos, você tem um documento que não pede desculpas por ser iniciante. Só mostra o que já consegue fazer.
                </p>
                <Link 
                  to="/criar-curriculo" 
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Começar Agora
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Referências e Fontes de Autoridade</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IBGE. (2025). Pesquisa Nacional por Amostra de Domicílios Contínua (PNAD-C) — Mercado de Trabalho Jovem. <a href="https://www.ibge.gov.br/estatisticas/trabalho" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.ibge.gov.br/estatisticas/trabalho</a></li>
                  <li>• LHH Brasil. (2024). Tempo Médio de Leitura de Currículos no Primeiro Filtro. Estudo com 2.100 profissionais de RH.</li>
                  <li>• Harvard Business Review. (2023). The Honesty Premium in Early-Career Hiring. <a href="https://hbr.org/2023/05/the-honesty-premium" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://hbr.org/2023/05/the-honesty-premium</a></li>
                  <li>• Universidade de Michigan, Ross School of Business. (2024). Length vs. Impact in Entry-Level Resumes. DOI:10.3386/w32187</li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Leia também:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/blog/4" className="block p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <h4 className="font-semibold text-foreground mb-2">Currículo para Primeiro Emprego: O Que Incluir e Evitar</h4>
                    <p className="text-sm text-muted-foreground">Dicas objetivas para destacar atitudes e atividades no seu primeiro currículo.</p>
                  </Link>
                  <Link to="/blog/2" className="block p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <h4 className="font-semibold text-foreground mb-2">10 Erros Comuns em Currículos que Você Deve Evitar</h4>
                    <p className="text-sm text-muted-foreground">Descubra os erros que podem eliminar seu currículo antes da entrevista.</p>
                  </Link>
                </div>
              </div>

              {/* Author Bio */}
              <AuthorBio />
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogArticle5;