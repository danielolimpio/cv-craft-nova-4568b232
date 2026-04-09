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
      answer: "Sim! Nossa plataforma é 100% gratuita. Você pode criar, editar e baixar quantos currículos quiser sem pagar nada."
    },
    {
      question: "Preciso criar uma conta para usar?",
      answer: "Não é necessário criar uma conta. Você pode começar a criar seu currículo imediatamente. Seus dados são salvos automaticamente no seu navegador."
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
      answer: "Você pode baixar seu currículo em formato PDF, que é o formato mais aceito por empresas e sistemas de recrutamento."
    },
    {
      question: "Quantos templates de currículo estão disponíveis?",
      answer: "Atualmente oferecemos diversos templates profissionais, todos otimizados para sistemas ATS (Applicant Tracking System) usados por empresas."
    },
    {
      question: "O que é otimização ATS?",
      answer: "ATS (Applicant Tracking System) são sistemas usados por empresas para filtrar currículos. Nossos templates são otimizados para serem facilmente lidos por esses sistemas, aumentando suas chances de aprovação."
    },
    {
      question: "Posso adicionar foto ao currículo?",
      answer: "Sim! Você pode adicionar sua foto profissional e escolher entre formato redondo ou quadrado."
    },
    {
      question: "Como funciona o preenchimento automático de endereço?",
      answer: "Ao digitar seu CEP, nosso sistema busca automaticamente os dados de cidade, estado e bairro, facilitando o preenchimento."
    },
    {
      question: "Posso imprimir meu currículo?",
      answer: "Sim! Além de baixar em PDF, você também pode imprimir seu currículo diretamente pela plataforma."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim! Seus dados são armazenados apenas no seu navegador e não são enviados para nossos servidores, garantindo total privacidade."
    },
    {
      question: "Posso criar currículos para diferentes vagas?",
      answer: "Sim! Você pode criar quantos currículos diferentes quiser, personalizando cada um para uma vaga específica."
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
