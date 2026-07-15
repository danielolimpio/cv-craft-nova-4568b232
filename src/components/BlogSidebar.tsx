import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Briefcase, Tag, Clock, ArrowRight, Sparkles } from "lucide-react";

const categories = [
  { name: "Currículo", slug: "Currículo", count: 5 },
  { name: "LinkedIn", slug: "LinkedIn", count: 2 },
  { name: "Carreira", slug: "Carreira", count: 3 },
  { name: "Entrevistas", slug: "Entrevistas", count: 2 },
  { name: "Salário", slug: "Salário", count: 1 },
  { name: "Trabalho no Exterior", slug: "Trabalho no Exterior", count: 1 },
  { name: "Futuro do Trabalho", slug: "Futuro do Trabalho", count: 1 },
  { name: "Estágio", slug: "Estágio", count: 1 },
  { name: "Recrutamento", slug: "Recrutamento", count: 1 },
  { name: "Inglês", slug: "Inglês", count: 1 },
  { name: "TI", slug: "TI", count: 1 },
];

const recentPosts = [
  {
    title: "IA no mercado de trabalho: profissões até 2030",
    slug: "/blog/inteligencia-artificial-mercado-trabalho-profissoes-2030",
    image: "/blog/ia-mercado-trabalho-profissoes-2030.webp",
    date: "05 Fev 2026"
  },
  {
    title: "Trabalhar nos Estados Unidos: guia de vistos e vagas",
    slug: "/blog/trabalhar-nos-estados-unidos-guia-vistos-vagas",
    image: "/blog/trabalhar-nos-estados-unidos-guia.webp",
    date: "04 Fev 2026"
  },
  {
    title: "Como negociar salário em uma entrevista de emprego",
    slug: "/blog/como-negociar-salario-entrevista",
    image: "/blog/como-negociar-salario-entrevista.webp",
    date: "22 Jan 2026"
  },
  {
    title: "Como se preparar para entrevista de emprego em 2026",
    slug: "/blog/como-se-preparar-entrevista-emprego-2026",
    image: "/blog/como-se-preparar-entrevista-emprego-2026.webp",
    date: "10 Jan 2026"
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
