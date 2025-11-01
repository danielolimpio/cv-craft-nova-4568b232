import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, BookOpen, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import templatesImage from "@/assets/templates-showcase.jpg";

const TemplatesSection = () => {
  const blogPosts = [
    {
      title: "Como Criar um Currículo Profissional que se Destaca em 2025",
      excerpt: "Descubra as técnicas mais eficazes para criar um currículo que chama atenção dos recrutadores e passa pelos sistemas ATS.",
      date: "28 de Janeiro, 2025",
      readTime: "5 min",
      category: "Dicas de Currículo",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "10 Erros Comuns em Currículos que Você Deve Evitar",
      excerpt: "Aprenda quais são os erros mais frequentes que podem comprometer suas chances de conseguir uma entrevista.",
      date: "25 de Janeiro, 2025",
      readTime: "7 min",
      category: "Erros Comuns",
      color: "from-green-600 to-teal-600"
    },
    {
      title: "Como Preparar seu Currículo para Sistemas ATS",
      excerpt: "Entenda como os sistemas de rastreamento de candidatos funcionam e como otimizar seu currículo para passar por eles.",
      date: "22 de Janeiro, 2025",
      readTime: "6 min",
      category: "Tecnologia",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Dicas para Entrevistas de Emprego: Como se Destacar",
      excerpt: "Prepare-se para suas entrevistas com estratégias comprovadas que impressionam recrutadores.",
      date: "20 de Janeiro, 2025",
      readTime: "8 min",
      category: "Entrevistas",
      color: "from-indigo-600 to-blue-600"
    }
  ];
  return <section id="templates" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4" style={{
            color: '#006B3D'
          }} />
            <span style={{
            color: '#006B3D'
          }} className="font-semibold">Blog</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Dicas que <span className="text-gradient-primary">Impulsionam sua Carreira</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Confira os últimos artigos com orientações práticas para melhorar seu currículo, 
            se destacar nas entrevistas e conquistar o emprego dos sonhos.
          </p>
        </div>

        {/* Featured Blog Section */}
        <div className="rounded-2xl shadow-xl p-8 mb-16 animate-scale-in" style={{
        backgroundColor: '#434343'
      }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center bg-cyan-400">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Conteúdo Valioso</h3>
                  <p className="text-white/70">Dicas práticas e atualizadas</p>
                </div>
              </div>
              
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Nosso blog reúne os melhores conselhos de especialistas em recrutamento, 
                recursos humanos e desenvolvimento de carreira para ajudar você a alcançar 
                seus objetivos profissionais.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{
                label: "Artigos Publicados",
                value: "100+"
              }, {
                label: "Leitores Mensais",
                value: "50k+"
              }, {
                label: "Categorias",
                value: "10+"
              }, {
                label: "Novos Posts",
                value: "Semanais"
              }].map((stat, index) => <div key={index} className="text-center p-4 gradient-card rounded-lg">
                    <div className="text-2xl font-bold mb-1" style={{
                  color: '#323B4C'
                }}>{stat.value}</div>
                    <div className="text-sm" style={{
                  color: '#323B4C'
                }}>{stat.label}</div>
                  </div>)}
              </div>
              
              <Link to="/blog">
                <Button className="btn-hero">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Ver Todos os Artigos
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img src={templatesImage} alt="Blog com dicas de carreira e currículo" className="w-full h-auto rounded-xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-xl" />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                Dicas Práticas
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                Conteúdo Gratuito
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <Link 
              key={index} 
              to="/blog"
              className="card-feature group hover:scale-105 transform transition-all duration-500 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Post Preview */}
              <div className={`h-48 rounded-lg mb-4 bg-gradient-to-br ${post.color} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                <div className="w-full h-full bg-white/10 backdrop-blur-sm p-6 flex items-center justify-center">
                  <div className="text-white font-bold text-center text-base leading-tight">
                    {post.title}
                  </div>
                </div>
                
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
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <Link to="/criar-curriculo">
            <Button size="lg" className="btn-hero text-lg px-8 py-4 bg-emerald-700 hover:bg-emerald-600">
              <Sparkles className="w-5 h-5 mr-2" />
              Começar com Template Premium
            </Button>
          </Link>
          <p className="text-muted-foreground mt-4">
            Todos os templates são 100% gratuitos e otimizados para ATS
          </p>
        </div>
      </div>
    </section>;
};
export default TemplatesSection;