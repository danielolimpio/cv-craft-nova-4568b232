import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { generateBreadcrumbSchema } from "@/lib/schema";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

  const blogPosts: BlogPost[] = [
    {
      id: "destaque-habilidades-estrategia-impacto",
      title: "Destaque suas habilidades com estratégia e impacto",
      excerpt: "Aprenda a identificar e comunicar suas habilidades de forma estratégica para se destacar no mercado de trabalho.",
      content: "Conteúdo completo do artigo...",
      author: "Daniel Olímpio",
      date: "29 de Novembro, 2025",
    readTime: "12 min",
    category: "Dicas de Currículo",
    image: "/blog/destaque-habilidades-estrategia.jpg"
  },
    {
      id: "perfil-linkedin-recrutadores",
      title: "Como criar um perfil no LinkedIn que atrai recrutadores",
      excerpt: "Descubra as melhores práticas para construir um perfil no LinkedIn que chame a atenção de recrutadores e gere oportunidades.",
      content: "Conteúdo completo do artigo...",
      author: "Daniel Olímpio",
      date: "30 de Novembro, 2025",
    readTime: "12 min",
    category: "Networking",
    image: "/blog/perfil-linkedin-recrutadores.jpg"
  },
    {
      id: "como-criar-curriculo-profissional-2026",
      title: "Como Criar um Currículo Profissional que se Destaca em 2026",
      excerpt: "Descubra as técnicas mais eficazes para criar um currículo que chama atenção dos recrutadores e passar pelas entrevistas — com estratégias atualizadas para 2026.",
      content: "Conteúdo completo do artigo...",
      author: "Daniel Olímpio",
      date: "28 de Novembro, 2025",
    readTime: "15 min",
    category: "Dicas de Currículo",
    image: "/blog/curriculo-profissional-2026.jpg"
  },
    {
      id: "10-erros-comuns-curriculos",
      title: "10 Erros Comuns em Currículos que Você Deve Evitar",
      excerpt: "Aprenda quais são os erros mais frequentes que podem comprometer suas chances de conseguir uma entrevista.",
      content: "Conteúdo completo do artigo...",
      author: "Equipe Fazer Currículo",
      date: "25 de Novembro, 2025",
    readTime: "7 min",
    category: "Erros Comuns",
    image: "/blog/10-erros-curriculo-preview.jpg"
  },
    {
      id: "preparar-curriculo-sistemas-ats",
      title: "Como Preparar seu Currículo para Sistemas ATS",
      excerpt: "Entenda como os sistemas de rastreamento de candidatos funcionam e como otimizar seu currículo para passar por eles.",
      content: "Conteúdo completo do artigo...",
      author: "Daniel Olímpio",
      date: "26 de Novembro, 2025",
    readTime: "6 min",
    category: "Tecnologia",
    image: "/blog/curriculo-ats-sistemas.jpg"
  },
    {
      id: "curriculo-primeiro-emprego-o-que-incluir",
      title: "Currículo para Primeiro Emprego: O Que Incluir e Evitar",
      excerpt: "Dicas objetivas para criar um currículo de primeiro emprego: como destacar atitudes, escolaridade e atividades.",
      content: "Conteúdo completo do artigo...",
      author: "Equipe Fazer Currículo",
      date: "27 de Novembro, 2025",
    readTime: "18 min",
    category: "Primeiro Emprego",
    image: "/blog/curriculo-primeiro-emprego.jpg"
  },
    {
      id: "curriculo-sem-experiencia-estrategias",
      title: "Currículo Sem Experiência: Estratégias para Jovens e Iniciantes",
      excerpt: "Sem histórico profissional? Descubra como construir um currículo competitivo com projetos, voluntariado e habilidades.",
      content: "Conteúdo completo do artigo...",
      author: "Daniel Olímpio",
      date: "24 de Novembro, 2025",
      readTime: "15 min",
      category: "Sem Experiência",
      image: "/blog/curriculo-sem-experiencia.jpg"
    },
    {
      id: "carta-apresentacao-empregador",
      title: "Saiba como escrever uma carta de apresentação que conquiste o empregador",
      excerpt: "Domine a arte de escrever uma carta de apresentação persuasiva que conecta seu valor à vaga desejada.",
      content: "Conteúdo completo do artigo...",
      author: "Daniel Olímpio",
      date: "30 de Novembro, 2025",
      readTime: "14 min",
      category: "Dicas de Currículo",
      image: "/blog/carta-apresentacao-empregador.jpg"
    }
  ];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  
  const categories = ["Todos", "Dicas de Currículo", "Erros Comuns", "Tecnologia", "Primeiro Emprego", "Sem Experiência"];
  
  const filteredPosts = selectedCategory === "Todos" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const breadcrumbItems = [
    { label: "Blog" }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog", url: "/blog" }
  ]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Blog - Fazer Currículo | Dicas e Estratégias para Sua Carreira</title>
        <meta name="description" content="Artigos sobre criação de currículos profissionais, dicas de carreira, estratégias para entrevistas e muito mais." />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 pt-32 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="max-w-4xl mx-auto text-center mt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#006B3D] rounded-full mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-[#006B3D] to-primary bg-clip-text text-transparent">
                Blog Fazer Currículo
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Dicas, estratégias e insights para impulsionar sua carreira profissional
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="block">
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <span className="inline-block px-3 py-1 bg-[#006B3D] text-white text-xs font-semibold rounded-full mb-2">
                          {post.category}
                        </span>
                        <h3 className="text-white font-bold text-sm leading-tight line-clamp-2">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="group-hover:text-[#006B3D] transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      
                      <div className="flex items-center text-[#006B3D] font-semibold group-hover:translate-x-2 transition-transform">
                        Ler Artigo
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Criar seu Currículo Profissional?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Coloque em prática tudo que aprendeu e crie um currículo que se destaca
            </p>
            <Button size="lg" className="bg-[#006B3D] hover:bg-[#005a32]" asChild>
              <Link to="/criar-curriculo">
                Criar Meu Currículo Grátis
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
