import { Brain, Target, FileCheck, Zap, Shield, Award, BarChart3, Sparkles } from "lucide-react";
import aiAnalysisIcon from "@/assets/ai-analysis-icon.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Avançada para Conteúdo",
      description: "Nossa inteligência artificial analisa milhares de currículos aprovados e sugere o conteúdo ideal para cada posição.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Target,
      title: "Otimização ATS Automática",
      description: "Garantimos 100% de compatibilidade com sistemas ATS das maiores empresas. Seu currículo sempre chegará no RH.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: BarChart3,
      title: "Score de Qualidade",
      description: "Receba uma pontuação em tempo real do seu currículo e sugestões específicas para melhorar cada seção.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Sparkles,
      title: "Templates Harvard Premium",
      description: "Designs aprovados por consultores de RH das melhores universidades e empresas do mundo.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: FileCheck,
      title: "Análise de Palavras-Chave",
      description: "Identificamos as palavras-chave mais importantes da sua área e sugerimos onde incluí-las estrategicamente.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Shield,
      title: "Privacidade Total",
      description: "Seus dados são protegidos com criptografia militar. Nunca compartilhamos suas informações com terceiros.",
      color: "text-red-500",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <section id="ferramentas" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold">Ferramentas Revolucionárias</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tecnologia de <span className="text-gradient-primary">Inteligência Artificial</span> Mais Avançada
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos as ferramentas mais inovadoras do mercado para garantir que seu currículo 
            se destaque e seja aprovado pelas melhores empresas do Brasil e do mundo.
          </p>
        </div>

        {/* Main Feature Highlight */}
        <div className="rounded-2xl shadow-xl p-8 mb-16 animate-scale-in" style={{ backgroundColor: '#434343' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-premium rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">IA Especializada em RH</h3>
                  <p className="text-white/70">Powered by GPT-4 e dados exclusivos</p>
                </div>
              </div>
              
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Nossa IA foi treinada com mais de 100.000 currículos aprovados por empresas como Google, 
                Microsoft, McKinsey e outras líderes de mercado. Ela entende exatamente o que os 
                recrutadores procuram.
              </p>
              
              <div className="space-y-4">
                {[
                  "Análise semântica avançada do conteúdo",
                  "Sugestões de melhoria personalizadas",
                  "Otimização automática para ATS",
                  "Score de compatibilidade em tempo real"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#035D54' }} />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src={aiAnalysisIcon}
                alt="Modelo de currículo profissional Prime"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-xl" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-feature group hover:scale-105 transform transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" style={{ color: '#01F0FF' }} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
          {[
            { label: "Currículos Criados", value: "50.000+", icon: FileCheck },
            { label: "Taxa de Aprovação", value: "94%", icon: Target },
            { label: "Empresas Parceiras", value: "1.500+", icon: Award },
            { label: "Satisfação", value: "4.9/5", icon: Sparkles }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 gradient-card rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;