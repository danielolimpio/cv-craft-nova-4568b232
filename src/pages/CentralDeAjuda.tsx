import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HelpCircle, BookOpen, Video, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CentralDeAjuda = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Central de Ajuda</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encontre respostas rápidas e aprenda a usar todas as funcionalidades da nossa plataforma
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-[#006B3D] mb-4" />
                <CardTitle>Guias</CardTitle>
                <CardDescription>Tutoriais passo a passo</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Video className="w-10 h-10 text-[#006B3D] mb-4" />
                <CardTitle>Vídeos</CardTitle>
                <CardDescription>Aprenda assistindo</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <HelpCircle className="w-10 h-10 text-[#006B3D] mb-4" />
                <CardTitle>FAQ</CardTitle>
                <CardDescription>Perguntas frequentes</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="w-10 h-10 text-[#006B3D] mb-4" />
                <CardTitle>Suporte</CardTitle>
                <CardDescription>Fale conosco</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Popular Topics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Tópicos Populares</h2>
            <div className="space-y-4">
              {[
                "Como criar meu primeiro currículo?",
                "Como baixar meu currículo em PDF?",
                "Como editar um currículo salvo?",
                "Quais templates estão disponíveis?",
                "Como otimizar meu currículo para ATS?",
                "Como adicionar foto ao currículo?",
                "Como salvar meu progresso?",
                "Como imprimir meu currículo?"
              ].map((topic, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <p className="text-lg font-medium">{topic}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Não encontrou o que procurava?</h2>
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

export default CentralDeAjuda;
