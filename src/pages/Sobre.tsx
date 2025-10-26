import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Target, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:opacity-80">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Voltar</span>
            </Link>
            <h1 className="text-2xl font-bold">Sobre Nós</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossa Missão: Democratizar o Acesso a Currículos Profissionais
          </h2>
          <p className="text-xl text-muted-foreground">
            Acreditamos que todos merecem ter acesso a ferramentas profissionais de qualidade, 
            independentemente de sua situação financeira.
          </p>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-16 px-4 bg-accent/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#01F0FF20" }}>
                  <Target className="w-6 h-6" style={{ color: "#01F0FF" }} />
                </div>
                <CardTitle>Nossa Visão</CardTitle>
                <CardDescription>
                  Tornar-se a principal plataforma brasileira para criação de currículos 
                  profissionais, ajudando milhões de pessoas a conquistarem suas oportunidades 
                  de carreira.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#01F0FF20" }}>
                  <Heart className="w-6 h-6" style={{ color: "#01F0FF" }} />
                </div>
                <CardTitle>Nossos Valores</CardTitle>
                <CardDescription>
                  Gratuidade, qualidade, simplicidade e inovação. Nos comprometemos a oferecer 
                  sempre o melhor serviço sem cobrar nada dos nossos usuários.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#01F0FF20" }}>
                  <Users className="w-6 h-6" style={{ color: "#01F0FF" }} />
                </div>
                <CardTitle>Nossa Comunidade</CardTitle>
                <CardDescription>
                  Mais de 50.000 profissionais já confiaram em nós para criar seus currículos. 
                  Fazemos parte da jornada de sucesso de cada um deles.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-8">Nossa História</h3>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6">
              O <strong>CriarCurriculoGratis.com</strong> nasceu da frustração de ver tantas pessoas 
              talentosas sendo impedidas de progredir em suas carreiras simplesmente por não terem 
              acesso a ferramentas profissionais de criação de currículos.
            </p>
            <p className="mb-6">
              Percebemos que a maioria das plataformas cobrava valores elevados por recursos básicos, 
              ou oferecia versões gratuitas tão limitadas que não eram realmente úteis. Decidimos 
              mudar isso.
            </p>
            <p className="mb-6">
              Criamos uma plataforma 100% gratuita, sem pegadinhas, sem limites artificiais e sem 
              marcas d'água. Nossa ferramenta oferece recursos de nível profissional que você 
              encontraria apenas em serviços premium.
            </p>
            <p>
              Hoje, milhares de profissionais usam nossa plataforma todos os meses para criar 
              currículos que realmente se destacam. E continuamos evoluindo, adicionando novos 
              recursos e melhorias baseadas no feedback da nossa comunidade.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-accent/20">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12">Por Que Nos Escolher?</h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#01F0FF" }}></div>
              <div>
                <h4 className="font-semibold text-lg mb-2">100% Gratuito Para Sempre</h4>
                <p className="text-muted-foreground">
                  Sem taxas escondidas, sem planos premium obrigatórios, sem limites de uso. 
                  Tudo é realmente grátis.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#01F0FF" }}></div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Sem Cadastro Necessário</h4>
                <p className="text-muted-foreground">
                  Você não precisa criar conta, fornecer email ou passar por processos burocráticos. 
                  É só acessar e criar.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#01F0FF" }}></div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Qualidade Profissional</h4>
                <p className="text-muted-foreground">
                  Nossos templates são desenvolvidos seguindo as melhores práticas de RH e são 
                  compatíveis com sistemas ATS (Applicant Tracking Systems).
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#01F0FF" }}></div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Privacidade Garantida</h4>
                <p className="text-muted-foreground">
                  Seus dados não são armazenados em nossos servidores. Tudo fica apenas no seu 
                  navegador, garantindo total privacidade.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#01F0FF" }}></div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Suporte Contínuo</h4>
                <p className="text-muted-foreground">
                  Atualizamos constantemente nossa plataforma com novos recursos, templates e 
                  melhorias baseadas no feedback dos usuários.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto Para Começar?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Junte-se a milhares de profissionais que já criaram seus currículos conosco!
          </p>
          <Link to="/criar-curriculo">
            <Button className="btn-hero" size="lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Criar Meu Currículo Grátis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
