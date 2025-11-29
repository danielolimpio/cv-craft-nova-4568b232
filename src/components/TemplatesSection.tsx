import { Button } from "@/components/ui/button";
import { Sparkles, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import templatesImage from "@/assets/templates-showcase.jpg";

const TemplatesSection = () => {
  return <section id="templates" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-4 lg:mb-6">
            <Building2 className="w-4 h-4" style={{
            color: '#006B3D'
          }} />
            <span style={{
            color: '#006B3D'
          }} className="font-semibold text-sm lg:text-base">Templates Profissionais</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Designs Aprovados pelas <span className="text-gradient-primary">Melhores Empresas</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Templates criados com base em milhares de currículos aprovados por 
            recrutadores de empresas Fortune 500 e startups unicórnio.
          </p>
        </div>

        {/* Featured Template Section */}
        <div className="rounded-2xl shadow-xl p-6 lg:p-8 mb-12 lg:mb-16 animate-scale-in" style={{
        backgroundColor: '#434343'
      }}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 gradient-accent rounded-xl flex items-center justify-center bg-cyan-400 flex-shrink-0">
                  <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white">Templates Exclusivos</h3>
                  <p className="text-sm lg:text-base text-white/70">Aprovados por recrutadores</p>
                </div>
              </div>
              
              <p className="text-base lg:text-lg text-white/80 mb-4 lg:mb-6 leading-relaxed">
                Cada template foi cuidadosamente desenvolvido para maximizar suas chances de 
                conseguir entrevistas. Baseados em análises de milhares de processos seletivos 
                bem-sucedidos.
              </p>
              
              <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-6 lg:mb-8">
                {[{
                label: "Templates Disponíveis",
                value: "50+"
              }, {
                label: "Taxa de Aprovação",
                value: "94%"
              }, {
                label: "Setores Cobertos",
                value: "15+"
              }, {
                label: "Atualizações",
                value: "Mensais"
              }].map((stat, index) => <div key={index} className="text-center p-3 lg:p-4 gradient-card rounded-lg">
                    <div className="text-xl lg:text-2xl font-bold mb-1" style={{
                  color: '#323B4C'
                }}>{stat.value}</div>
                    <div className="text-xs lg:text-sm" style={{
                  color: '#323B4C'
                }}>{stat.label}</div>
                  </div>)}
              </div>
              
              <Link to="/criar-curriculo" className="block">
                <Button className="btn-hero w-full sm:w-auto">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Começar Agora
                </Button>
              </Link>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <img src={templatesImage} alt="Templates de currículo profissional" className="w-full h-auto rounded-xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-xl" />
              
              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-success text-success-foreground px-2 py-1 lg:px-3 lg:py-1 rounded-full text-xs lg:text-sm font-semibold animate-pulse">
                ATS-Friendly
              </div>
              <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 bg-secondary text-secondary-foreground px-2 py-1 lg:px-3 lg:py-1 rounded-full text-xs lg:text-sm font-semibold animate-pulse">
                100% Grátis
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <Link to="/criar-curriculo" className="inline-block">
            <Button size="lg" className="btn-hero text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 bg-emerald-700 hover:bg-emerald-600 w-full sm:w-auto">
              <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
              Começar com Template Premium
            </Button>
          </Link>
          <p className="text-muted-foreground mt-4 text-sm lg:text-base px-4">
            Todos os templates são 100% gratuitos e otimizados para ATS
          </p>
        </div>
      </div>
    </section>;
};
export default TemplatesSection;