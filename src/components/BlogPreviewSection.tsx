import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPreviewSection = () => {
  const blogPosts = [
    {
      title: "Como Criar um Currículo Profissional que se Destaca em 2026",
      excerpt: "Descubra as técnicas mais eficazes para criar um currículo que chama atenção dos recrutadores e passar pelas entrevistas — com estratégias atualizadas para 2026.",
      date: "28 de Novembro, 2025",
      readTime: "15 min",
      category: "Dicas de Currículo",
      color: "from-[#006B3D] to-[#005a32]",
      link: "/blog/como-criar-curriculo-profissional-2026",
      image: "/blog/curriculo-profissional-2026.jpg"
    },
    {
      title: "10 Erros Comuns em Currículos que Você Deve Evitar",
      excerpt: "Aprenda quais são os erros mais frequentes que podem comprometer suas chances de conseguir uma entrevista.",
      date: "25 de Novembro, 2025",
      readTime: "7 min",
      category: "Erros Comuns",
      color: "from-green-600 to-teal-600",
      link: "/blog/10-erros-comuns-curriculos",
      image: "/blog/10-erros-curriculo-preview.jpg"
    },
    {
      title: "Como Preparar seu Currículo para Sistemas ATS",
      excerpt: "Entenda como os sistemas de rastreamento de candidatos funcionam e como otimizar seu currículo para passar por eles.",
      date: "26 de Novembro, 2025",
      readTime: "12 min",
      category: "Tecnologia",
      color: "from-purple-600 to-pink-600",
      link: "/blog/preparar-curriculo-sistemas-ats",
      image: "/blog/curriculo-ats-sistemas.jpg"
    },
    {
      title: "Currículo para Primeiro Emprego: O Que Incluir e Evitar",
      excerpt: "Dicas objetivas para criar um currículo de primeiro emprego que destaca seu potencial.",
      date: "27 de Novembro, 2025",
      readTime: "10 min",
      category: "Primeiro Emprego",
      color: "from-purple-500 to-pink-500",
      link: "/blog/curriculo-primeiro-emprego-o-que-incluir",
      image: "/blog/curriculo-primeiro-emprego.jpg"
    },
    {
      title: "Currículo Sem Experiência: Estratégias para Jovens e Iniciantes",
      excerpt: "Sem histórico profissional? Transforme projetos, voluntariado e habilidades em um currículo competitivo.",
      date: "24 de Novembro, 2025",
      readTime: "15 min",
      category: "Sem Experiência",
      color: "from-cyan-500 to-blue-500",
      link: "/blog/curriculo-sem-experiencia-estrategias",
      image: "/blog/curriculo-sem-experiencia.jpg"
    },
    {
      title: "Destaque suas habilidades com estratégia e impacto",
      excerpt: "Aprenda a identificar e comunicar suas habilidades de forma estratégica para se destacar no mercado de trabalho.",
      date: "29 de Novembro, 2025",
      readTime: "14 min",
      category: "Dicas de Currículo",
      color: "from-emerald-600 to-green-600",
      link: "/blog/destaque-habilidades-estrategia-impacto",
      image: "/blog/destaque-habilidades-estrategia.jpg"
    },
    {
      title: "Como criar um perfil no LinkedIn que atrai recrutadores",
      excerpt: "Descubra as melhores práticas para construir um perfil no LinkedIn que chame a atenção de recrutadores e gere oportunidades.",
      date: "30 de Novembro, 2025",
      readTime: "12 min",
      category: "Networking",
      color: "from-blue-700 to-cyan-600",
      link: "/blog/perfil-linkedin-recrutadores",
      image: "/blog/perfil-linkedin-recrutadores.jpg"
    },
    {
      title: "Saiba como escrever uma carta de apresentação que conquiste o empregador",
      excerpt: "Domine a arte de escrever uma carta de apresentação persuasiva que conecta seu valor à vaga desejada.",
      date: "30 de Novembro, 2025",
      readTime: "14 min",
      category: "Dicas de Currículo",
      color: "from-amber-600 to-orange-600",
      link: "/blog/carta-apresentacao-empregador",
      image: "/blog/carta-apresentacao-empregador.jpg"
    },
    {
      title: "Currículo para Estágio: O Guia Definitivo para Estudantes",
      excerpt: "Tudo o que estudantes precisam saber para montar um currículo de estágio: disponibilidade, disciplinas relevantes, projetos e postura profissional.",
      date: "5 de Dezembro, 2025",
      readTime: "18 min",
      category: "Estágio",
      color: "from-indigo-600 to-purple-600",
      link: "/blog/curriculo-estagio-estudantes",
      image: "/blog/curriculo-estagio-estudantes.jpg"
    },
    {
      title: "Diferença Entre Currículo e Perfil no LinkedIn em 2026",
      excerpt: "Entenda quando usar currículo, quando priorizar o LinkedIn e como alinhar ambos para construir uma presença profissional coerente e forte.",
      date: "6 de Dezembro, 2025",
      readTime: "22 min",
      category: "LinkedIn",
      color: "from-blue-600 to-cyan-500",
      link: "/blog/curriculo-vs-linkedin-2026",
      image: "/blog/curriculo-vs-linkedin-2026.jpg"
    },
    {
      title: "O Que Recrutadores Realmente Buscam em um Currículo Hoje",
      excerpt: "Baseado em entrevistas com recrutadores, revelamos os 5 critérios decisivos que fazem um currículo avançar — e como atendê-los em 1 página.",
      date: "19 de Dezembro, 2025",
      readTime: "20 min",
      category: "Recrutamento",
      color: "from-rose-600 to-pink-600",
      link: "/blog/o-que-recrutadores-buscam-curriculo",
      image: "/blog/o-que-recrutadores-buscam-curriculo.jpg"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4" style={{ color: '#006B3D' }} />
            <span style={{ color: '#006B3D' }} className="font-semibold">Blog</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Dicas que <span className="text-gradient-primary">Impulsionam sua Carreira</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Confira os últimos artigos com orientações práticas para melhorar seu currículo, 
            se destacar nas entrevistas e conquistar o emprego dos sonhos.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <Link 
              key={index} 
              to={post.link || "/blog"}
              className="block"
            >
              <div 
                className="card-feature group hover:scale-105 transform transition-all duration-500 animate-fade-in-up relative overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Post Preview */}
                <div className={`h-48 rounded-lg mb-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                  {post.image ? (
                    <>
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Title overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                        <h3 className="text-white font-bold text-sm leading-tight line-clamp-2">
                          {post.title}
                        </h3>
                      </div>
                    </>
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                      <div className="w-full h-full bg-white/10 backdrop-blur-sm p-6 flex items-center justify-center">
                        <div className="text-white font-bold text-center text-base leading-tight">
                          {post.title}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white flex items-center space-x-2">
                      <span className="text-sm font-semibold">Ler Artigo</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                
                {/* Post Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <Link to="/blog">
            <Button size="lg" className="btn-hero text-lg px-8 py-4">
              <BookOpen className="w-5 h-5 mr-2" />
              Ver Todos os Artigos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
