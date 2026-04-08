import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";
import { getRelatedArticles } from "@/lib/schema";

interface RelatedArticlesProps {
  currentUrl: string;
  title?: string;
}

const RelatedArticles = ({ currentUrl, title = "Artigos Relacionados" }: RelatedArticlesProps) => {
  const related = getRelatedArticles(currentUrl, 4);

  if (related.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-[#006B3D]" />
        {title}
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {related.map((article) => (
          <Link key={article.url} to={article.url} className="group">
            <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-[#006B3D]/30">
              <CardContent className="pt-5 pb-5">
                <h3 className="font-semibold text-base mb-2 group-hover:text-[#006B3D] transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {article.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-[#006B3D]">
                  Ler artigo
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
