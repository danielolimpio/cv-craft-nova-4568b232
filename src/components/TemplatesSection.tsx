import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, Sparkles, Star, Zap } from "lucide-react";
import templatesImage from "@/assets/templates-showcase.jpg";

const TemplatesSection = () => {
  const templates = [
    {
      name: "Harvard Executive",
      category: "Premium",
      rating: 4.9,
      downloads: "15.2k",
      features: ["ATS Otimizado", "Design Executivo", "2 Páginas"],
      color: "from-blue-600 to-purple-600",
      popular: true
    },
    {
      name: "Stanford Tech",
      category: "Tecnologia",
      rating: 4.8,
      downloads: "12.8k",
      features: ["Clean Design", "Tech Focus", "1 Página"],
      color: "from-green-600 to-teal-600",
      popular: false
    },
    {
      name: "McKinsey Consulting",
      category: "Consultoria",
      rating: 4.9,
      downloads: "18.5k",
      features: ["Ultra Clean", "Consultoria", "1-2 Páginas"],
      color: "from-purple-600 to-pink-600",
      popular: true
    },
    {
      name: "Goldman Finance",
      category: "Financeiro",
      rating: 4.7,
      downloads: "9.3k",
      features: ["Conservador", "Elegante", "1 Página"],
      color: "from-indigo-600 to-blue-600",
      popular: false
    }
  ];

  return (
    <section id="templates" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4" style={{ color: '#01F0FF' }} />
            <span className="font-semibold" style={{ color: '#01F0FF' }}>Templates Premiados</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Designs Aprovados pelas <span className="text-gradient-primary">Melhores Empresas</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada template foi desenvolvido com base em currículos aprovados por empresas Fortune 500, 
            consultoria Big 4 e universidades de prestígio mundial.
          </p>
        </div>

        {/* Featured Templates Showcase */}
        <div className="rounded-2xl shadow-xl p-8 mb-16 animate-scale-in" style={{ backgroundColor: '#434343' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Templates Inteligentes</h3>
                  <p className="text-white/70">Adaptação automática por área</p>
                </div>
              </div>
              
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Nossos templates não são apenas bonitos - eles são inteligentes. Nossa IA adapta 
                automaticamente o layout, cores e estrutura baseado na sua área profissional e 
                nível de experiência.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Templates Disponíveis", value: "50+" },
                  { label: "Aprovação ATS", value: "100%" },
                  { label: "Áreas Cobertas", value: "25+" },
                  { label: "Atualizações", value: "Mensais" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 gradient-card rounded-lg">
                    <div className="text-2xl font-bold mb-1" style={{ color: '#323B4C' }}>{stat.value}</div>
                    <div className="text-sm" style={{ color: '#323B4C' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <Button className="btn-hero">
                <Eye className="w-4 h-4 mr-2" />
                Ver Todos os Templates
              </Button>
            </div>
            
            <div className="relative">
              <img
                src={templatesImage}
                alt="Showcase de templates profissionais"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-xl" />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                100% ATS
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                Premium Quality
              </div>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {templates.map((template, index) => (
            <div
              key={index}
              className="card-feature group hover:scale-105 transform transition-all duration-500 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {template.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-secondary text-secondary-foreground font-semibold">
                    <Zap className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              
              {/* Template Preview */}
              <div className={`h-48 rounded-lg mb-4 bg-gradient-to-br ${template.color} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                <div className="w-full h-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-white font-bold text-lg">{template.name}</div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Template Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                    {template.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" style={{ color: '#01F0FF' }} />
                    <span className="text-sm font-semibold">{template.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <Badge variant="outline" className="text-xs">
                    {template.category}
                  </Badge>
                  <span>{template.downloads} downloads</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {template.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <Button size="lg" className="btn-hero text-lg px-8 py-4">
            <Sparkles className="w-5 h-5 mr-2" />
            Começar com Template Premium
          </Button>
          <p className="text-muted-foreground mt-4">
            Todos os templates são 100% gratuitos e otimizados para ATS
          </p>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;