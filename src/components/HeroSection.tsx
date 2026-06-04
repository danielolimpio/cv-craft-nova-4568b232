import { Button } from "@/components/ui/button";
import { Sparkles, Play, CheckCircle, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import profile1 from "@/assets/profile-1.jpg";
import profile2 from "@/assets/profile-2.jpg";
import profile3 from "@/assets/profile-3.jpg";
const HeroSection = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in-up pt-20 sm:pt-0">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 glass-effect">
              <Award className="w-4 h-4" style={{
              color: '#01F0FF'
            }} />
              <span className="text-sm font-medium">Nível Harvard de Qualidade</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-none mb-6">
              Crie Seu <span className="text-cyan-400">Currículo</span> Profissional{" "}
              <span className="text-cyan-400">Grátis</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8 max-w-2xl">
              A plataforma mais completa do Brasil para criação de currículos profissionais. 
              Ferramentas avançadas de edição e personalização que garantem que seu currículo 
              se destaque e passe pelos sistemas ATS das melhores empresas.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
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
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{
                backgroundColor: 'rgba(1, 240, 255, 0.2)'
              }}>
                    <feature.icon className="w-3 h-3" style={{
                  color: '#01F0FF'
                }} />
                  </div>
                  <span className="text-white/90 font-medium">{feature.text}</span>
                </div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/criar-curriculo">
                <Button size="lg" className="btn-hero text-lg px-8 py-4">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Criar Meu Currículo Grátis
                </Button>
              </Link>
              <Link to="/como-funciona">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary bg-transparent backdrop-blur-sm text-lg px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  Ver Como Funciona
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center space-x-6 text-white/90">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <img src={profile1} alt="Usuário satisfeito" className="w-8 h-8 rounded-full border-2 border-white/30 object-cover" />
                  <img src={profile2} alt="Usuário satisfeito" className="w-8 h-8 rounded-full border-2 border-white/30 object-cover" />
                  <img src={profile3} alt="Usuário satisfeito" className="w-8 h-8 rounded-full border-2 border-white/30 object-cover" />
                </div>
                <span className="text-sm font-medium">+50.000 currículos criados</span>
              </div>
              <div className="text-sm">
                ⭐⭐⭐⭐⭐ <span className="font-medium">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in lg:animate-float lg:!ml-0" style={{
          transform: 'scale(2.2)',
          transformOrigin: 'center',
          width: '130%',
          marginLeft: '-15%'
        }}>
            <div className="relative">
              <img src="/hero-curriculos.png" alt="Templates de currículos profissionais" className="w-full h-auto rounded-2xl shadow-2xl" loading="eager" width="1680" height="1344" fetchPriority="high" />
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