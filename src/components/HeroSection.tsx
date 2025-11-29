import { Button } from "@/components/ui/button";
import { Sparkles, Play, CheckCircle, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-curriculos.png";
import profile1 from "@/assets/profile-1.jpg";
import profile2 from "@/assets/profile-2.jpg";
import profile3 from "@/assets/profile-3.jpg";
const HeroSection = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in-up pt-20 sm:pt-24 lg:pt-0 max-w-full">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4 lg:mb-6 glass-effect">
              <Award className="w-4 h-4" style={{
              color: '#01F0FF'
            }} />
              <span className="text-xs sm:text-sm font-medium">Nível Harvard de Qualidade</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 lg:mb-6">
              Crie Seu <span className="text-cyan-400">Currículo</span> Profissional{" "}
              <span className="text-cyan-400">Grátis</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed mb-6 lg:mb-8 max-w-2xl">
              A plataforma mais completa do Brasil para criação de currículos profissionais. 
              Ferramentas avançadas de edição e personalização que garantem que seu currículo 
              se destaque e passe pelos sistemas ATS das melhores empresas.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-6 lg:mb-8">
              {[{
              icon: CheckCircle,
              text: "Editor completo e intuitivo"
            }, {
              icon: TrendingUp,
              text: "Personalização profissional"
            }, {
              icon: Award,
              text: "Templates aprovados por RH"
            }, {
              icon: Sparkles,
              text: "Compatibilidade ATS garantida"
            }].map((feature, index) => <div key={index} className="flex items-center space-x-3 animate-slide-in-right" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{
                backgroundColor: 'rgba(1, 240, 255, 0.2)'
              }}>
                    <feature.icon className="w-3 h-3" style={{
                  color: '#01F0FF'
                }} />
                  </div>
                  <span className="text-white/90 font-medium text-sm lg:text-base">{feature.text}</span>
                </div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8">
              <Link to="/criar-curriculo" className="w-full sm:w-auto">
                <Button size="lg" className="btn-hero text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 w-full sm:w-auto">
                  <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                  Criar Meu Currículo Grátis
                </Button>
              </Link>
              <Link to="/como-funciona" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary bg-transparent backdrop-blur-sm text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 w-full sm:w-auto">
                  <Play className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                  Ver Como Funciona
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-white/70">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <img src={profile1} alt="Usuário satisfeito" className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border-2 border-white/30 object-cover" />
                  <img src={profile2} alt="Usuário satisfeito" className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border-2 border-white/30 object-cover" />
                  <img src={profile3} alt="Usuário satisfeito" className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border-2 border-white/30 object-cover" />
                </div>
                <span className="text-xs lg:text-sm font-medium">+50.000 currículos criados</span>
              </div>
              <div className="text-xs lg:text-sm">
                ⭐⭐⭐⭐⭐ <span className="font-medium">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in lg:animate-float hero-image-container">
            <div className="relative w-full">
              <img src={heroImage} alt="Templates de currículos profissionais" className="w-full h-auto rounded-2xl shadow-2xl" loading="eager" />
              {/* Floating Elements */}
              <div className="absolute top-12 left-4 bg-white/10 backdrop-blur-sm border border-white/5 rounded-lg p-2 glass-effect animate-float">
                <div className="flex items-center space-x-2 text-white">
                  <TrendingUp className="w-4 h-4" style={{
                  color: '#01F0FF'
                }} />
                  <div>
                    <div className="text-xs font-semibold">Score de Qualidade</div>
                    <div className="text-xl font-bold" style={{
                    color: '#01F0FF'
                  }}>98%</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 sm:bottom-12 right-4 bg-white/10 backdrop-blur-sm border border-white/5 rounded-lg p-2 glass-effect animate-float" style={{
              animationDelay: '2s'
            }}>
                <div className="flex items-center space-x-2 text-white">
                  <CheckCircle className="w-4 h-4" style={{
                  color: '#01F0FF'
                }} />
                  <div>
                    <div className="text-xs font-semibold">ATS Compatível</div>
                    <div className="text-lg font-bold" style={{
                    color: '#01F0FF'
                  }}>100%</div>
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
    </section>;
};
export default HeroSection;