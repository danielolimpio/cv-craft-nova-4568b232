import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Helmet } from "react-helmet";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O serviço é realmente gratuito?",
      answer: "Sim! Nossa plataforma é 100% gratuita. Você pode criar, editar e baixar quantos currículos quiser sem pagar nada, sem trial, sem cobrança escondida e sem marca d'água no PDF final."
    },
    {
      question: "Preciso criar uma conta para usar?",
      answer: "Não é necessário criar uma conta nem fornecer e-mail. Você pode começar a criar seu currículo imediatamente. Seus dados são salvos automaticamente no seu navegador."
    },
    {
      question: "Como fazer currículo grátis online em 5 minutos?",
      answer: "Acesse 'Criar Currículo', escolha um modelo, preencha seus dados pessoais, experiências e habilidades, personalize cores e fontes, e baixe em PDF. Todo o processo leva entre 5 e 10 minutos."
    },
    {
      question: "Como fazer currículo pelo celular?",
      answer: "Nossa plataforma é 100% responsiva. Basta abrir o site no navegador do seu Android ou iPhone, criar o currículo normalmente e baixar o PDF direto no aparelho. Não precisa instalar app."
    },
    {
      question: "Meus dados ficam salvos?",
      answer: "Sim! Seus dados são salvos automaticamente no seu navegador enquanto você preenche o currículo. Você pode voltar a qualquer momento e continuar de onde parou."
    },
    {
      question: "Posso editar meu currículo depois de criado?",
      answer: "Sim! Enquanto seus dados estiverem salvos no navegador, você pode voltar e editar seu currículo quantas vezes quiser antes de baixar a versão final."
    },
    {
      question: "Em que formato posso baixar meu currículo?",
      answer: "Você pode baixar em PDF, o formato mais aceito por empresas e pelos sistemas ATS. O PDF é gerado em alta qualidade, com fontes embutidas e pronto para impressão."
    },
    {
      question: "Posso baixar o currículo em Word para editar?",
      answer: "Hoje o download oficial é em PDF. Como nossos modelos seguem o padrão A4 limpo, você pode imprimir, anexar a vagas ou abrir o PDF em editores que aceitam conversão para Word."
    },
    {
      question: "Quantos templates de currículo estão disponíveis?",
      answer: "Oferecemos diversos templates profissionais, modernos, simples e criativos, todos otimizados para sistemas ATS (Applicant Tracking System) usados por empresas no Brasil."
    },
    {
      question: "O que é otimização ATS e por que importa?",
      answer: "ATS (Applicant Tracking System) são sistemas como Gupy, Kenoby, Vagas.com, Catho e Solides que filtram currículos automaticamente. Cerca de 90% dos currículos enviados online passam por um ATS antes de chegar ao recrutador. Nossos templates usam fontes, layout e estrutura aprovados por esses sistemas."
    },
    {
      question: "Como deixar meu currículo aprovado em ATS?",
      answer: "Use um dos nossos modelos ATS-friendly, escreva títulos padrão (Experiência, Formação, Habilidades), inclua palavras-chave da vaga, evite tabelas complexas, imagens e colunas. Salve sempre em PDF."
    },
    {
      question: "Posso adicionar foto ao currículo?",
      answer: "Sim! Você pode adicionar sua foto profissional e escolher entre formato redondo ou quadrado. Para vagas internacionais (EUA, Reino Unido, Canadá), recomendamos remover a foto."
    },
    {
      question: "Currículo precisa ter foto em 2026?",
      answer: "No Brasil, foto ainda é comum e bem aceita, especialmente em vagas de atendimento e vendas. Para vagas corporativas, internacionais ou que passam por ATS, optar por currículo sem foto pode ser mais estratégico."
    },
    {
      question: "Como funciona o preenchimento automático de endereço?",
      answer: "Ao digitar seu CEP, nosso sistema busca automaticamente cidade, estado e bairro nos dados oficiais dos Correios, agilizando o preenchimento e evitando erros de digitação."
    },
    {
      question: "Posso imprimir meu currículo?",
      answer: "Sim! Além de baixar em PDF, você pode imprimir direto pelo navegador. O layout é otimizado para impressão em folha A4."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim! Seus dados são armazenados apenas no seu navegador (localStorage) e não são enviados para nossos servidores. Cumprimos integralmente a LGPD — Lei Geral de Proteção de Dados."
    },
    {
      question: "Posso criar currículos para diferentes vagas?",
      answer: "Sim! O ideal é personalizar o currículo para cada vaga, ajustando objetivo, palavras-chave e ordem das experiências. Você pode criar quantos quiser."
    },
    {
      question: "Como fazer currículo sem experiência profissional?",
      answer: "Destaque sua formação, cursos livres, trabalhos voluntários, projetos acadêmicos, freelas, habilidades técnicas e comportamentais. Inclua um objetivo profissional claro mostrando interesse em aprender."
    },
    {
      question: "Como fazer currículo para primeiro emprego?",
      answer: "Foque em formação escolar, cursos extracurriculares (idiomas, informática), atividades voluntárias, hobbies relevantes e qualidades pessoais. Inclua dados de contato atualizados e um objetivo profissional simples."
    },
    {
      question: "Como fazer currículo para jovem aprendiz?",
      answer: "Currículo de jovem aprendiz deve ser objetivo: dados pessoais, formação (ensino médio em andamento ou concluído), cursos, habilidades e disponibilidade. Use linguagem simples e profissional."
    },
    {
      question: "Como fazer currículo para estágio?",
      answer: "Inclua curso e semestre atual, projetos acadêmicos, iniciações científicas, monitorias, idiomas, softwares dominados e disponibilidade de horário. Mencione o CIEE, Nube ou IEL se for indicado por eles."
    },
    {
      question: "Como fazer currículo em inglês?",
      answer: "Use 'Resume' (1 página, padrão americano) ou 'CV' (mais longo, padrão acadêmico/europeu). Inclua summary, experience, education, skills. Evite traduções literais — use action verbs como 'developed', 'led', 'managed'."
    },
    {
      question: "Quantas páginas o currículo ideal deve ter?",
      answer: "Para a maioria das vagas, 1 página é o ideal. Profissionais com mais de 10 anos de carreira ou cargos sêniores podem usar até 2 páginas. Currículos acadêmicos (Lattes) podem ser maiores."
    },
    {
      question: "O que NÃO colocar no currículo?",
      answer: "Evite: fotos informais, e-mail amador, dados sensíveis (CPF, RG), pretensão salarial (a menos que a vaga peça), redes sociais pessoais, religião, partido político, mentiras e cargos irrelevantes para a vaga."
    },
    {
      question: "Como descrever experiência profissional no currículo?",
      answer: "Use o formato: cargo, empresa, período, e 3 a 5 bullets descrevendo responsabilidades e resultados quantificáveis (ex: 'Aumentei vendas em 30%'). Comece cada bullet com um verbo de ação."
    },
    {
      question: "Qual o melhor objetivo profissional para colocar?",
      answer: "Um objetivo curto, claro e alinhado à vaga. Exemplo: 'Atuar como Auxiliar Administrativo, contribuindo com organização e atendimento ao cliente em ambiente corporativo'. Veja exemplos por área no nosso blog."
    },
    {
      question: "Quais habilidades colocar no currículo em 2026?",
      answer: "Combine hard skills (Excel avançado, Power BI, inglês fluente, programação) com soft skills (comunicação, liderança, resolução de problemas, inteligência emocional, adaptabilidade). Priorize as exigidas na vaga."
    },
    {
      question: "Devo colocar pretensão salarial no currículo?",
      answer: "Só coloque se a vaga pedir explicitamente. Caso contrário, deixe para conversar na entrevista. Pesquise a faixa de mercado no site da Catho, Glassdoor ou Vagas.com antes de informar um valor."
    },
    {
      question: "Como criar currículo otimizado para Gupy, Vagas.com e Catho?",
      answer: "Use modelo ATS-friendly (uma coluna, fontes padrão, sem imagens decorativas), inclua as palavras-chave do anúncio da vaga, salve em PDF e suba diretamente nas plataformas. Nossos templates já seguem esse padrão."
    },
    {
      question: "Posso usar o currículo no LinkedIn?",
      answer: "Sim! Baixe o PDF e anexe ao seu perfil LinkedIn em 'Destaques'. Você também pode usar o conteúdo do currículo para preencher a seção 'Sobre' e 'Experiência' do LinkedIn."
    }
  ];

  const breadcrumbItems = [
    { label: "Perguntas Frequentes" }
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "FAQ", url: "/faq" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>FAQ Currículo Online Grátis — 10 Respostas Rápidas</title>
        <meta name="description" content="É realmente grátis? Precisa de cadastro? Como baixar em PDF? Veja as 10 perguntas mais comuns sobre criar currículo online — respostas diretas e sem enrolação." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fazercurriculo.com/faq" />
        
        {/* Open Graph */}
        <meta property="og:title" content="FAQ Currículo Online Grátis — 10 Respostas Rápidas" />
        <meta property="og:description" content="É realmente grátis? Precisa de cadastro? Como baixar em PDF? Veja as 10 perguntas mais comuns." />
        <meta property="og:url" content="https://fazercurriculo.com/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fazercurriculo.com/og-fazer-curriculo.png" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Fazer Currículo" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ Currículo Online Grátis — 10 Respostas Rápidas" />
        <meta name="twitter:description" content="As 10 perguntas mais comuns sobre criar currículo online — respostas diretas!" />
        <meta name="twitter:image" content="https://fazercurriculo.com/og-fazer-curriculo.png" />
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h1>
            <p className="text-xl text-muted-foreground">
              Respostas para as dúvidas mais comuns sobre nossa plataforma
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-[#006B3D]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact Section */}
          <div className="mt-16 text-center bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h2>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para ajudar você
            </p>
            <a
              href="/contato"
              className="inline-block bg-[#006B3D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#005530] transition-colors"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
