import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Upload, Type, FileText, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ComoFunciona = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <main className="pt-24">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Criar Seu Currículo Profissional Nunca Foi Tão Fácil
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Nosso sistema intuitivo permite que você crie um currículo profissional em minutos, 
            totalmente grátis e com personalização completa.
          </p>
          <Link to="/criar-curriculo">
            <Button className="btn-hero" size="lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Começar Agora Grátis
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(0, 107, 61, 0.1)" }}>
                  <FileText className="w-6 h-6" style={{ color: "#006B3D" }} />
                </div>
                <CardTitle>Preencha Seus Dados</CardTitle>
                <CardDescription>
                  Digite suas informações pessoais, experiências profissionais, formação acadêmica 
                  e habilidades de forma simples e organizada.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(0, 107, 61, 0.1)" }}>
                  <Upload className="w-6 h-6" style={{ color: "#006B3D" }} />
                </div>
                <CardTitle>Adicione Sua Foto</CardTitle>
                <CardDescription>
                  Faça upload de uma foto profissional e escolha entre diferentes estilos de 
                  exibição: circular, quadrada ou sem foto.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(0, 107, 61, 0.1)" }}>
                  <Type className="w-6 h-6" style={{ color: "#006B3D" }} />
                </div>
                <CardTitle>Personalize o Texto</CardTitle>
                <CardDescription>
                  Escolha entre diversas fontes profissionais (Arial, Georgia, Roboto, etc.) e 
                  ajuste o tamanho do texto para criar o visual perfeito.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(0, 107, 61, 0.1)" }}>
                  <Palette className="w-6 h-6" style={{ color: "#006B3D" }} />
                </div>
                <CardTitle>Ajuste as Cores</CardTitle>
                <CardDescription>
                  Personalize as cores do texto e do fundo do currículo para criar um documento 
                  que reflita sua personalidade profissional.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(0, 107, 61, 0.1)" }}>
                  <Sparkles className="w-6 h-6" style={{ color: "#006B3D" }} />
                </div>
                <CardTitle>Visualização em Tempo Real</CardTitle>
                <CardDescription>
                  Veja todas as alterações instantaneamente no preview. O que você vê é exatamente 
                  o que será gerado no PDF final.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(0, 107, 61, 0.1)" }}>
                  <Download className="w-6 h-6" style={{ color: "#006B3D" }} />
                </div>
                <CardTitle>Baixe em PDF</CardTitle>
                <CardDescription>
                  Quando estiver satisfeito com o resultado, baixe seu currículo profissional em 
                  formato PDF de alta qualidade, pronto para enviar.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12">Passo a Passo</h3>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: "#006B3D", color: "white" }}>
                1
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Clique em "Criar Currículo Grátis"</h4>
                <p className="text-muted-foreground">
                  Comece clicando no botão azul em qualquer página do site. Você será direcionado 
                  para o editor de currículos.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: "#006B3D", color: "white" }}>
                2
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Preencha Suas Informações</h4>
                <p className="text-muted-foreground">
                  Complete os campos com seus dados pessoais, experiências profissionais, formação 
                  acadêmica e informações de contato. Todos os campos são opcionais, preencha apenas 
                  o que deseja incluir.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: "#006B3D", color: "white" }}>
                3
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Personalize o Visual</h4>
                <p className="text-muted-foreground">
                  Use as opções de personalização para ajustar fontes, cores, espaçamento e 
                  alinhamento. Experimente diferentes combinações até encontrar o estilo perfeito.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: "#006B3D", color: "white" }}>
                4
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Baixe Seu Currículo</h4>
                <p className="text-muted-foreground">
                  Quando estiver satisfeito, clique no botão "Baixar PDF" para salvar seu currículo 
                  profissional. Você também pode imprimir diretamente ou compartilhar online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto Para Criar Seu Currículo?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            É 100% grátis, sem cadastro necessário e você pode criar quantos currículos quiser!
          </p>
          <Link to="/criar-curriculo">
            <Button className="btn-hero" size="lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Criar Meu Currículo Grátis
            </Button>
          </Link>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComoFunciona;
