import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Briefcase, Tag, Clock, ArrowRight, Sparkles } from "lucide-react";

const categories = [
  { name: "Currículo", slug: "Currículo", count: 5 },
  { name: "LinkedIn", slug: "LinkedIn", count: 1 },
  { name: "Carreira", slug: "Carreira", count: 2 },
  { name: "Entrevistas", slug: "Entrevistas", count: 1 },
  { name: "Estágio", slug: "Estágio", count: 1 },
];

const recentPosts = [
  {
    title: "Currículo para Estágio: O Guia Definitivo",
    slug: "/blog/curriculo-estagio-estudantes",
    image: "/blog/curriculo-estagio-estudantes.jpg",
    date: "5 Dez 2025"
  },
  {
    title: "LinkedIn que Atrai Recrutadores",
    slug: "/blog/perfil-linkedin-recrutadores",
    image: "/blog/perfil-linkedin-recrutadores.jpg",
    date: "29 Nov 2025"
  },
  {
    title: "Destaque suas Habilidades com Estratégia",
    slug: "/blog/destaque-habilidades-estrategia",
    image: "/blog/destaque-habilidades-estrategia.jpg",
    date: "29 Nov 2025"
  },
  {
    title: "Carta de Apresentação que Conquista",
    slug: "/blog/carta-apresentacao-empregador",
    image: "/blog/carta-apresentacao-empregador.jpg",
    date: "30 Nov 2025"
  },
];

const BlogSidebar = () => {
  return (
    <aside className="space-y-6 lg:sticky lg:top-32">
      {/* CTA Card - Criar Currículo */}
      <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-secondary to-secondary-hover">
        <CardContent className="p-6 text-center">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Crie seu Currículo Grátis
          </h3>
          <p className="text-white/90 text-sm mb-4">
            Ferramenta profissional com templates modernos e otimizados para ATS
          </p>
          <Button 
            asChild 
            className="w-full bg-white text-secondary hover:bg-white/90 font-semibold shadow-lg"
          >
            <Link to="/criar-curriculo">
              Criar Agora
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* CTA Card - Vagas de Trabalhos */}
      <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-amber-500 to-amber-600">
        <CardContent className="p-6 text-center">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Vagas de Trabalhos
          </h3>
          <p className="text-white/90 text-sm mb-4">
            Encontre oportunidades de emprego em todo Brasil
          </p>
          <Button 
            asChild 
            className="w-full bg-white text-amber-600 hover:bg-white/90 font-semibold shadow-lg"
          >
            <a href="https://vagasdetrabalhos.com/" target="_blank" rel="noopener noreferrer">
              Ver Vagas
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="border border-border/50 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Tag className="w-5 h-5 text-secondary" />
            Categorias
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/blog?categoria=${category.slug}`}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-secondary/10 transition-all duration-200 group"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors">
                  {category.name}
                </span>
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full font-semibold">
                  {category.count}
                </span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card className="border border-border/50 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Sparkles className="w-5 h-5 text-secondary" />
            Últimas Publicações
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                to={post.slug}
                className="flex gap-3 group"
              >
                <div className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default BlogSidebar;
