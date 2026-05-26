import { Button } from "@/components/ui/button";
import { Sparkles, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import templatesImage from "@/assets/templates-showcase.jpg";

const TemplatesSection = () => {
  return <section id="templates" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Building2 className="w-4 h-4" style={{
            color: '#006B3D'
          }} />
            <span style={{
            color: '#006B3D'
          }} className="font-semibold">Templates Profissionais</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Designs Aprovados pelas <span className="text-gradient-primary">Melhores Empresas</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Templates criados com base em milhares de currículos aprovados por 
            recrutadores de empresas Fortune 500 e startups unicórnio.
          </p>
        </div>

        {/* Featured Template Section */}
        <div className="rounded-2xl shadow-xl p-8 mb-16 animate-scale-in" style={{
        backgroundColor: '#434343'
      }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center bg-cyan-400">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Templates Exclusivos</h3>
                  <p className="text-white/90">Aprovados por recrutadores</p>
                </div>
              </div>
              
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Cada template foi cuidadosamente desenvolvido para maximizar suas chances de 
                conseguir entrevistas. Baseados em análises de milhares de processos seletivos 
                bem-sucedidos.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
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
              }].map((stat, index) => <div key={index} className="text-center p-4 gradient-card rounded-lg">
                    <div className="text-2xl font-bold mb-1" style={{
                  color: '#323B4C'
                }}>{stat.value}</div>
                    <div className="text-sm" style={{
                  color: '#323B4C'
                }}>{stat.label}</div>
                  </div>)}
              </div>
              
              <Link to="/criar-curriculo">
                <Button className="btn-hero">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Começar Agora
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img src={templatesImage} alt="Templates de currículo profissional" className="w-full h-auto rounded-xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-xl" />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                ATS-Friendly
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                100% Grátis
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <Link to="/criar-curriculo">
            <Button size="lg" className="btn-hero text-lg px-8 py-4 bg-emerald-700 hover:bg-emerald-600">
              <Sparkles className="w-5 h-5 mr-2" />
              Começar com Template Premium
            </Button>
          </Link>
          <p className="text-muted-foreground mt-4">
            Todos os templates são 100% gratuitos e otimizados para ATS
          </p>
        </div>
      </div>
    </section>;
};
export default TemplatesSection;