import { Button } from "@/components/ui/button";
import { Sparkles, Play, CheckCircle, TrendingUp, Award } from "lucide-react";
import heroImage from "@/assets/hero-curriculos.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--secondary)) 0%, transparent 50%)`,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 glass-effect">
              <Award className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Nível Harvard de Qualidade</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-none mb-6">
              Crie Seu <span className="text-secondary">Currículo</span> Profissional com{" "}
              <span className="text-secondary">Inteligência Artificial</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8 max-w-2xl">
              A plataforma mais avançada do Brasil para criação de currículos. 
              Ferramentas de IA que analisam, otimizam e garantem que seu currículo 
              passe pelos sistemas ATS das melhores empresas.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: CheckCircle, text: "IA que otimiza seu conteúdo" },
                { icon: TrendingUp, text: "Score de qualidade em tempo real" },
                { icon: Award, text: "Templates aprovados por RH" },
                { icon: Sparkles, text: "Compatibilidade ATS garantida" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <feature.icon className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-white/90 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-hero text-lg px-8 py-4">
                <Sparkles className="w-5 h-5 mr-2" />
                Criar Meu Currículo Grátis
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent backdrop-blur-sm text-lg px-8 py-4"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Como Funciona
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center space-x-6 text-white/70">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-white/30" />
                  <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-white/30" />
                  <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-white/30" />
                </div>
                <span className="text-sm font-medium">+50.000 currículos criados</span>
              </div>
              <div className="text-sm">
                ⭐⭐⭐⭐⭐ <span className="font-medium">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in lg:animate-float" style={{ transform: 'scale(3)', transformOrigin: 'center' }}>
            <div className="relative">
              <img
                src={heroImage}
                alt="Templates de currículos profissionais"
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm border border-white/5 rounded-lg p-2 glass-effect animate-float">
                <div className="flex items-center space-x-2 text-white">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <div>
                    <div className="text-xs font-semibold">Score de Qualidade</div>
                    <div className="text-xl font-bold text-success">98%</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm border border-white/5 rounded-lg p-2 glass-effect animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-2 text-white">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <div>
                    <div className="text-xs font-semibold">ATS Compatível</div>
                    <div className="text-lg font-bold text-secondary">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;