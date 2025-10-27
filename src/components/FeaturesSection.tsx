import { Brain, Target, FileCheck, Zap, Shield, Award, BarChart3, Sparkles } from "lucide-react";
import aiAnalysisIcon from "@/assets/ai-analysis-icon.jpg";
const FeaturesSection = () => {
  const features = [{
    icon: Brain,
    title: "Editor Avançado",
    description: "Plataforma completa com recursos profissionais para criar currículos impecáveis e personalizados.",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  }, {
    icon: Target,
    title: "Otimização ATS",
    description: "Garantimos 100% de compatibilidade com sistemas ATS das maiores empresas. Seu currículo sempre chegará no RH.",
    color: "text-green-500",
    bgColor: "bg-green-50"
  }, {
    icon: BarChart3,
    title: "Personalização Completa",
    description: "Controle total sobre cores, fontes, espaçamento e layout para criar um currículo único e profissional.",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  }, {
    icon: Sparkles,
    title: "Templates Premium",
    description: "Designs aprovados por consultores de RH das melhores universidades e empresas do mundo.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  }, {
    icon: FileCheck,
    title: "Exportação em PDF",
    description: "Baixe seu currículo em PDF de alta qualidade, pronto para enviar para empresas ou imprimir.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  }, {
    icon: Shield,
    title: "Privacidade Total",
    description: "Seus dados nunca são armazenados em nossos servidores. Tudo fica apenas no seu navegador.",
    color: "text-red-500",
    bgColor: "bg-red-50"
  }];
  return <section id="ferramentas" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4" style={{
            color: '#006B3D'
          }} />
            <span className="font-semibold" style={{
            color: '#006B3D'
          }}>Ferramentas Revolucionárias</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ferramentas <span className="text-gradient-primary">Profissionais</span> e Avançadas
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos as ferramentas mais completas do mercado para garantir que seu currículo 
            se destaque e seja aprovado pelas melhores empresas do Brasil e do mundo.
          </p>
        </div>

        {/* Main Feature Highlight */}
        <div className="rounded-2xl shadow-xl p-8 mb-16 animate-scale-in" style={{
          backgroundColor: '#2C2C2C'
        }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div style={{
                background: 'rgba(0, 100, 61, 0.3)'
              }} className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6" style={{ color: '#006B3D' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Editor Profissional Completo</h3>
                  <p className="text-white/70">Recursos avançados e intuitivos</p>
                </div>
              </div>
              
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Nossa plataforma oferece ferramentas completas de edição e personalização, 
                desenvolvidas com base nas melhores práticas de RH de empresas como Google, 
                Microsoft, McKinsey e outras líderes de mercado.
              </p>
              
              <div className="space-y-4">
                {["Editor visual intuitivo e completo", "Personalização total de cores e fontes", "Compatibilidade garantida com ATS", "Exportação em PDF profissional"].map((item, index) => <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{
                  backgroundColor: '#006B3D'
                }} />
                    <span className="text-white font-medium">{item}</span>
                  </div>)}
              </div>
            </div>
            
            <div className="relative">
              <img src={aiAnalysisIcon} alt="Editor de currículo profissional" className="w-full h-auto rounded-xl shadow-lg" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-xl" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="card-feature group hover:scale-105 transform transition-all duration-500 animate-fade-in-up" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" style={{
              color: '#006B3D'
            }} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>)}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
          {[{
          label: "Currículos Criados",
          value: "50.000+",
          icon: FileCheck
        }, {
          label: "Taxa de Aprovação",
          value: "94%",
          icon: Target
        }, {
          label: "Empresas Parceiras",
          value: "1.500+",
          icon: Award
        }, {
          label: "Satisfação",
          value: "4.9/5",
          icon: Sparkles
        }].map((stat, index) => <div key={index} className="text-center group">
              <div className="w-16 h-16 gradient-card rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8" style={{
              color: '#006B3D'
            }} />
              </div>
              <div className="text-3xl font-bold mb-2" style={{
            color: '#006B3D'
          }}>{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;