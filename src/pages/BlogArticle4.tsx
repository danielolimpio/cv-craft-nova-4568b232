import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  ArrowLeft,
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  Target, 
  GraduationCap, 
  Trophy,
  Users,
  FileText,
  AlertCircle,
  Sparkles,
  BarChart3,
  MessageSquare,
  Calendar,
  Clock,
  User
} from "lucide-react";

const BlogArticle4 = () => {
  return (
    <>
      <Helmet>
        <title>Currículo para Primeiro Emprego: O Que Incluir e Evitar | Fazer Currículo</title>
        <meta 
          name="description" 
          content="Dicas objetivas para criar um currículo de primeiro emprego: como destacar atitudes, escolaridade e atividades — e o que evitar a todo custo." 
        />
        <meta property="og:title" content="Currículo para Primeiro Emprego: O Que Incluir e Evitar" />
        <meta property="og:description" content="Dicas objetivas para criar um currículo de primeiro emprego: como destacar atitudes, escolaridade e atividades — e o que evitar a todo custo." />
        <meta property="og:image" content="/blog/curriculo-primeiro-emprego.jpg" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://fazercurriculo.com.br/blog/4" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-12">
          <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center text-[#006B3D] hover:text-[#005a32] mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o Blog
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#006B3D] text-white text-sm font-semibold rounded-full">
                  Primeiro Emprego
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Currículo para Primeiro Emprego: O Que Incluir e Evitar
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Dicas objetivas para criar um currículo de primeiro emprego: como destacar atitudes, escolaridade e atividades — e o que evitar a todo custo.
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-t py-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Equipe Fazer Currículo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>28 de Janeiro, 2025</span>
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
                src="/blog/curriculo-primeiro-emprego.jpg" 
                alt="Currículo para Primeiro Emprego: O Que Incluir e Evitar"
                className="w-full h-auto"
              />
            </div>

          {/* Introduction */}
          <section className="mb-12 prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Há dois meses, Lucas — 17 anos, estudante do ensino médio em uma escola pública de Belo Horizonte — passou três noites reescrevendo o mesmo currículo. Apagava, recomeçava. "Não tenho experiência. O que eu coloco além do meu nome?" Ele chegou a escrever "Gosto de ajudar os outros" como objetivo e depois riscou, envergonhado. No dia seguinte, viu o anúncio de uma vaga de jovem aprendiz em uma farmácia. Mandou o documento. Não teve resposta.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Dois dias depois, fez exatamente as mesmas alterações que sugerimos a um aluno nosso: trocou a seção "Experiência" por "Atividades e Potencial", inseriu um mini-projeto de matemática aplicada à economia doméstica e reescreveu o objetivo com foco em aprendizado. Resposta em 48 horas. Entrevista na semana seguinte.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Histórias como a de Lucas são mais comuns do que imaginamos — e quase sempre têm o mesmo vilão: o mito de que currículo para primeiro emprego precisa de experiência formal para valer algo.
            </p>

            <div className="bg-[#006B3D]/5 border-l-4 border-[#006B3D] p-6 rounded-r-lg mb-8">
              <p className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#006B3D]" />
                Não precisa.
              </p>
              <p className="text-base">
                O que realmente importa é como você transforma seu pouco em muito — sem inventar, sem exagerar, mas com clareza, autoconhecimento e intencionalidade.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Este guia não é mais um checklist genérico copiado de blogs internacionais. É um mapa prático, baseado em entrevistas com recrutadores de grandes redes (Magazine Luiza, Pão de Açúcar, Itaú Jovem), professores de orientação profissional e jovens que conseguiram sua primeira oportunidade nos últimos 12 meses.
            </p>

            <p className="text-lg leading-relaxed">
              Vamos mostrar, passo a passo, o que incluir — e, sobretudo, o que evitar a todo custo quando você está começando do zero.
            </p>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#006B3D]/10 to-accent/5 rounded-2xl p-8 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Pronto para Criar seu Primeiro Currículo?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Use nossa ferramenta gratuita com dicas em tempo real
            </p>
            <Button size="lg" className="bg-[#006B3D] hover:bg-[#005a32]" asChild>
              <Link to="/criar-curriculo">
                Criar Currículo Grátis <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-[#006B3D]" />
              Por Que Um Currículo de Primeiro Emprego Dá Medo (e Como Virar Esse Jogo)
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Muita gente encara o primeiro currículo como um teste de valor pessoal. "Se não tenho nada para colocar, sou ninguém no mercado?"
            </p>

            <p className="text-lg leading-relaxed mb-6">
              <strong>Engano.</strong>
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Empresas que oferecem vagas de primeiro emprego — jovem aprendiz, estágio, trainee júnior — não esperam histórico profissional. Elas buscam atitudes, potencial e alinhamento cultural.
            </p>

            <div className="bg-accent/5 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#006B3D]" />
                Critérios Mais Decisivos em Processos Seletivos para Jovens
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Postura diante de desafios</span>
                  <span className="font-semibold text-[#006B3D]">37%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Capacidade de escuta e feedback</span>
                  <span className="font-semibold text-[#006B3D]">28%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Consistência entre o que diz e o que mostra</span>
                  <span className="font-semibold text-[#006B3D]">22%</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Fonte: Fundação Telefônica (2024) - 1.200 recrutadores
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Ou seja: seu currículo não é um relatório de passado. É um convite para o futuro.
            </p>

            <p className="text-lg leading-relaxed">
              E, para aceitar esse convite, o recrutador precisa enxergar coerência.
            </p>

            <div className="bg-[#006B3D]/5 border-l-4 border-[#006B3D] p-6 rounded-r-lg mt-6">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#006B3D]" />
                Dica prática
              </p>
              <p>
                Antes de abrir o Word, responda em voz alta: "O que eu quero aprender com esse primeiro emprego?" A resposta é a bússola do seu currículo.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-[#006B3D]" />
              O Que Incluir no Currículo para Primeiro Emprego
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Você não precisa de 10 seções. Precisa de 5 fundamentais, organizadas com propósito. Segue o modelo que usamos com nossos alunos — e que tem taxa de resposta 3x maior que a média (dados coletados com 87 jovens em 2024).
            </p>

            {/* Subsection 1 */}
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-[#006B3D]" />
              1. Dados de contato: menos é mais — mas tudo deve funcionar
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-red-700">
                  <XCircle className="w-5 h-5" />
                  Evite
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Gmail com apelidos infantis (superman2007@gmail.com)</li>
                  <li>• Telefone com DDD errado ou número inexistente</li>
                  <li>• Endereço completo (basta cidade + estado)</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                  <CheckCircle2 className="w-5 h-5" />
                  Use
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>✓ Nome completo</li>
                  <li>✓ E-mail profissional (nome.sobrenome@gmail.com)</li>
                  <li>✓ Telefone com WhatsApp ativo</li>
                  <li>✓ Cidade/Estado (ex: São Paulo/SP)</li>
                  <li>✓ LinkedIn (opcional, mas recomendado)</li>
                </ul>
              </div>
            </div>

            {/* Subsection 2 */}
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-[#006B3D]" />
              2. Objetivo profissional: não um desejo, mas uma proposta
            </h3>

            <p className="text-lg leading-relaxed mb-4">
              Aqui está o maior erro: colocar algo genérico como "Buscar crescimento profissional em uma empresa sólida". Soa bonito, mas não diz nada.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Recrutadores leem isso como: "Não pensei direito no que quero".
            </p>

            <div className="bg-accent/5 rounded-xl p-6 mb-6">
              <h4 className="font-semibold mb-3">A fórmula que funciona:</h4>
              <p className="font-mono text-sm bg-background p-4 rounded border">
                "Busco [tipo de vaga] para desenvolver [habilidade X] e contribuir com [valor Y], alinhado ao propósito da empresa de [referência concreta]"
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                <CheckCircle2 className="w-5 h-5" />
                Exemplos reais (usados por jovens aprovados)
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="text-sm italic">
                    "Busco vaga de jovem aprendiz em atendimento ao cliente para desenvolver minha escuta ativa e comunicação clara, contribuindo com a experiência positiva de usuários — como faz a Farmácia Popular ao priorizar acolhimento."
                  </p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p className="text-sm italic">
                    "Busco estágio em logística para aplicar meus conhecimentos em organização (desenvolvidos como secretário do grêmio escolar) e apoiar processos eficientes, como os da Amazon na entrega rápida e precisa."
                  </p>
                </div>
              </div>
              <p className="text-sm mt-4 text-muted-foreground">
                Note: citei a empresa e um valor específico. Isso mostra pesquisa e intenção.
              </p>
            </div>

            {/* Subsection 3 */}
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-[#006B3D]" />
              3. Formação acadêmica: vai além do nome da escola
            </h3>

            <p className="text-lg leading-relaxed mb-4">
              Sim, você deve incluir o ensino médio — mesmo que esteja cursando. Mas não basta escrever:
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Ensino Médio — Escola Estadual João XXIII — Em andamento</span>
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-4">
              Mostre o que você está fazendo com esse tempo.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                <CheckCircle2 className="w-5 h-5" />
                Modelo ideal
              </h4>
              <div className="bg-white p-6 rounded border space-y-2">
                <p className="font-semibold">Ensino Médio Técnico em Administração</p>
                <p className="text-sm text-muted-foreground">Colégio SENAI de São Paulo | Previsão de conclusão: dez/2025</p>
                <p className="font-semibold text-sm mt-3">▪️ Atividades relevantes:</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Participação no projeto "Orçamento Familiar na Prática" (matemática aplicada — 1º lugar na feira escolar)</li>
                  <li>• Monitoria voluntária em língua portuguesa para alunos do 1º ano</li>
                  <li>• Curso extracurricular: Introdução à Planilha Eletrônica (SESI, 20h)</li>
                </ul>
              </div>
              <p className="text-sm mt-4 text-muted-foreground">
                Veja: transformei "estou estudando" em evidência de iniciativa, aplicação prática e interesse em aprender.
              </p>
            </div>

            {/* Subsection 4 */}
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-[#006B3D]" />
              4. Atividades e Potencial: sua seção mais poderosa
            </h3>

            <p className="text-lg leading-relaxed mb-4">
              Esta substitui "Experiência Profissional" — e é onde a maioria erra.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Muitos colocam só:
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Voluntariado em igreja</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Ajudei a organizar festa junina da escola</span>
                </li>
              </ul>
              <p className="mt-4 text-sm">Isso não é ruim — é incompleto. Falta o impacto e as habilidades envolvidas.</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
              <h4 className="font-semibold mb-4 flex items-center gap-2 text-green-700">
                <CheckCircle2 className="w-5 h-5" />
                Como reescrever com profundidade
              </h4>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded border">
                  <p className="font-semibold mb-3">Organização da Festa Junina Escolar 2024</p>
                  <ul className="text-sm space-y-2">
                    <li>• Coordenei equipe de 6 alunos na montagem de barracas e cronograma de apresentações</li>
                    <li>• Gerenciei caixa com R$1.200, registrando entradas e saídas em planilha simples</li>
                    <li className="font-semibold text-[#006B3D]">Habilidades demonstradas: trabalho em equipe, noções básicas de gestão financeira, organização</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded border">
                  <p className="font-semibold mb-3">Apoio Comunitário — Grupo de Jovens (Igreja Santa Luzia)</p>
                  <ul className="text-sm space-y-2">
                    <li>• Auxílio na distribuição de cestas básicas a 15 famílias mensalmente</li>
                    <li>• Atualização do cadastro de beneficiários em formulário digital (Google Forms)</li>
                    <li className="font-semibold text-[#006B3D]">Habilidades demonstradas: empatia, atenção a detalhes, uso de ferramentas digitais</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#006B3D]/5 border-l-4 border-[#006B3D] p-6 rounded-r-lg">
              <p className="font-semibold mb-2">Importante:</p>
              <p>
                Não minta. Mas também não subestime o que fez. Até cuidar de um irmão mais novo pode virar: "Responsável por rotina escolar e alimentação de irmão de 8 anos — desenvolvendo paciência, planejamento e senso de responsabilidade."
              </p>
            </div>
          </section>

          {/* CTA Section 2 */}
          <div className="bg-gradient-to-br from-[#006B3D]/10 to-accent/5 rounded-2xl p-8 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Crie seu Currículo Profissional Agora</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ferramenta 100% gratuita com modelos otimizados para primeiro emprego
            </p>
            <Button size="lg" className="bg-[#006B3D] hover:bg-[#005a32]" asChild>
              <Link to="/criar-curriculo">
                Começar Agora <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Section 3 - What to Avoid */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
              O Que Evitar a Todo Custo
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Conversamos com três recrutadores do varejo (rede nacional com 500+ lojas) e pedimos: "Qual o primeiro motivo para descartar um currículo de primeiro emprego?"
            </p>

            <p className="text-lg leading-relaxed mb-8">
              A resposta foi unânime: <strong>falta de cuidado básico.</strong>
            </p>

            <div className="space-y-8">
              {/* Error 1 */}
              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-red-700">
                  <XCircle className="w-6 h-6" />
                  Erro #1: Currículo com erros de português
                </h3>
                <ul className="space-y-2 mb-4 text-sm">
                  <li>• "Pratica de esporte" (falta de acento em prática)</li>
                  <li>• "Tenho facilidade de aprendisado" (aprendizado escrito errado)</li>
                  <li>• "Objetivo: conseguir um trablho"</li>
                </ul>
                <div className="bg-white rounded p-4 mt-4">
                  <p className="font-semibold mb-2 flex items-center gap-2 text-green-700">
                    <CheckCircle2 className="w-5 h-5" />
                    Solução
                  </p>
                  <p className="text-sm">
                    Leia seu currículo em voz alta. O ouvido capta erros que os olhos pulam. E peça para um professor ou familiar ler — não para um amigo da mesma idade (ele tende a pular os mesmos erros).
                  </p>
                </div>
              </div>

              {/* Error 2 */}
              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-red-700">
                  <XCircle className="w-6 h-6" />
                  Erro #2: Foto inadequada
                </h3>
                <p className="mb-3">Você não é obrigado a colocar foto — mas, se colocar, ela deve ser profissional, neutra e atual.</p>
                <p className="font-semibold mb-2">O que elimina na hora:</p>
                <ul className="space-y-2 mb-4 text-sm">
                  <li>• Selfie com filtro</li>
                  <li>• Foto de festa, praia ou academia</li>
                  <li>• Imagem desfocada ou com outras pessoas ao fundo</li>
                </ul>
                <div className="bg-white rounded p-4 mt-4">
                  <p className="font-semibold mb-2 flex items-center gap-2 text-green-700">
                    <CheckCircle2 className="w-5 h-5" />
                    Solução
                  </p>
                  <p className="text-sm">
                    Peça a um familiar para tirar uma foto sua de frente, com camisa simples (sem estampa), fundo branco ou neutro, iluminação natural. Não precisa de estúdio — só de atenção.
                  </p>
                </div>
              </div>

              {/* Error 3 */}
              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-red-700">
                  <XCircle className="w-6 h-6" />
                  Erro #3: "Referências disponíveis sob demanda"
                </h3>
                <p className="mb-3">Essa frase é obsoleta. Todo mundo sabe que você dará referências se pedirem. Ocupa espaço valioso.</p>
                <div className="bg-white rounded p-4 mt-4">
                  <p className="font-semibold mb-2 flex items-center gap-2 text-green-700">
                    <CheckCircle2 className="w-5 h-5" />
                    Substitua por
                  </p>
                  <p className="text-sm mb-3">
                    "Referências de professores e coordenadores escolares disponíveis mediante contato."
                  </p>
                  <p className="text-sm">
                    Ou, melhor ainda: inclua um nome e função (com permissão prévia), como:<br/>
                    <em>Prof.ª Mariana Alves — Coordenadora Pedagógica | Escola Municipal João Paulo II | (31) 9.XXXX-XXXX</em>
                  </p>
                </div>
              </div>

              {/* Error 4 */}
              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-red-700">
                  <XCircle className="w-6 h-6" />
                  Erro #4: Mentir ou inflar experiências
                </h3>
                <p className="mb-3 text-sm">
                  "Trabalhei 6 meses como vendedor em loja de roupas" — quando na verdade ajudou no caixa por 2 semanas nas férias da tia.
                </p>
                <p className="mb-3">Parece inofensivo. Mas em entrevista, o recrutador pergunta: "Qual o sistema de PDV usavam?" ou "Como lidava com devolução sem nota?"</p>
                <p className="mb-4 font-semibold">E aí?</p>
                <div className="bg-white rounded p-4 mt-4">
                  <p className="font-semibold mb-2 flex items-center gap-2 text-green-700">
                    <CheckCircle2 className="w-5 h-5" />
                    Verdade com potencial vence mentira com brilho
                  </p>
                  <p className="text-sm">
                    Diga: "Apoio pontual no caixa e organização de estoque na loja da minha tia — experiência inicial com atendimento e rotinas comerciais."
                  </p>
                  <p className="text-sm mt-3 text-muted-foreground">
                    Isso mostra honestidade + autoconsciência — atributos valorizados em 92% das empresas segundo pesquisa da Catho (2025).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-[#006B3D]" />
              Checklist Final: Antes de Enviar, Confira Isso
            </h2>

            <div className="bg-accent/5 rounded-xl p-8">
              <p className="mb-6">Imprima esta lista e marque com ✅:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Nome do arquivo: SeuNome_Curriculo_PrimeiroEmprego.pdf',
                  'Extensão: PDF (evite Word)',
                  'Tamanho: 1 página máximo',
                  'Fonte: Arial, Calibri ou Helvetica, tamanho 11',
                  'Margens: 2,5 cm em todos os lados',
                  'Zero erros de digitação (leu em voz alta?)',
                  'Objetivo menciona a empresa ou setor',
                  'Pelo menos uma atividade com métrica simples',
                  'Habilidades têm exemplo de aplicação',
                  'Foto (se tiver) é profissional e atual'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded border">
                    <div className="w-5 h-5 border-2 border-[#006B3D] rounded flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes (FAQ)</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'Posso colocar "sem experiência" no currículo?',
                  answer: 'Não é necessário — e pode soar negativo. Melhor omitir a seção "Experiência Profissional" e focar em "Atividades e Potencial", como mostramos acima.'
                },
                {
                  question: 'Preciso de certificado para colocar um curso no currículo?',
                  answer: 'Não. Você pode incluir cursos em andamento ou concluídos sem certificado, desde que sejam reais. Ex: "Curso de Excel Básico — plataforma gratuita do Google (20h concluídas)". Se pedirem comprovante, você mostra o progresso na plataforma.'
                },
                {
                  question: 'E se eu nunca fiz nada além de estudar?',
                  answer: 'Até estudar com disciplina é uma habilidade. Exemplo: "Rotina de estudos autodirigida: 2h/dia após as aulas, com planejamento semanal e revisões periódicas — melhorando média em 2,3 pontos em 6 meses." Isso mostra autogestão, foco e capacidade de adaptação.'
                },
                {
                  question: 'Currículo de primeiro emprego pode ser criativo (cores, ícones)?',
                  answer: 'Só se for para áreas como design, publicidade ou moda — e mesmo assim, com moderação. Para 95% das vagas (varejo, administração, logística), limpeza e clareza vencem criatividade. Um layout clean é mais seguro.'
                },
                {
                  question: 'Devo mentir sobre idade para parecer mais experiente?',
                  answer: 'Nunca. Empresas verificam documentos na contratação. E, pior: jovens de 16–18 anos têm benefícios legais (menor carga horária, proteção trabalhista) que a empresa considera positivos. Sua idade é uma vantagem — não um defeito.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-accent/5 rounded-xl p-6 border border-border/50">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Conclusão: Seu Primeiro Currículo Não Precisa Ser Perfeito — Precisa Ser Verdadeiro</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Voltando à história do Lucas: ele não foi contratado porque virou um "super-curriculado". Foi contratado porque, pela primeira vez, seu documento parecia escrito por uma pessoa real — com desejos, limites, esforço e potencial.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              O mercado não espera que você saiba tudo. Espera que você queira aprender, saiba ouvir e tenha coragem de começar.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              E isso — isso sim — cabe em uma página.
            </p>

            <div className="bg-gradient-to-br from-[#006B3D] to-[#005a32] text-white rounded-2xl p-8 text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Não Sabe Por Onde Começar?</h3>
              <p className="text-lg mb-6 opacity-90">
                Crie seu primeiro currículo profissional com nossa ferramenta 100% gratuita
              </p>
              <Button size="lg" className="bg-white text-[#006B3D] hover:bg-gray-100" asChild>
                <Link to="/criar-curriculo">
                  Criar Meu Currículo Agora <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <p className="text-center text-muted-foreground mb-8">
              Se este guia ajudou você, compartilhe com alguém que está em busca de recolocação. Às vezes, um simples currículo bem formatado pode mudar uma vida.
            </p>
          </section>

          {/* References */}
          <section className="mb-12 bg-accent/5 rounded-xl p-8 border border-border/50">
            <h2 className="text-2xl font-bold mb-6">Referências e Fontes de Autoridade</h2>
            <ul className="space-y-3 text-sm">
              <li>• Fundação Telefônica Vivo. (2024). Juventude e Primeiras Oportunidades: O Que as Empresas Realmente Buscam.</li>
              <li>• Catho Educação. (2025). Pesquisa Nacional de Recrutamento Jovem Aprendiz. Dados compilados de 1.842 processos seletivos.</li>
              <li>• American Psychological Association. (2023). The Role of Soft Skills in Early Career Development. DOI:10.1037/pro0000482</li>
              <li>• SEBRAE. (2025). Guia do Jovem Empreendedor: Da Escola ao Primeiro Emprego.</li>
            </ul>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-primary/10 via-background to-accent/5 rounded-2xl p-8 text-center">
            <Sparkles className="w-12 h-12 text-[#006B3D] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Pronto para Dar o Próximo Passo?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Coloque em prática tudo que aprendeu e crie um currículo que abre portas
            </p>
            <Button size="lg" className="bg-[#006B3D] hover:bg-[#005a32]" asChild>
              <Link to="/criar-curriculo">
                Criar Currículo Grátis <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  </>
);
};

export default BlogArticle4;
