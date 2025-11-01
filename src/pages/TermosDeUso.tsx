import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const TermosDeUso = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex justify-center mb-6">
            <FileText className="w-16 h-16" style={{ color: '#006B3D' }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Termos de Uso</h1>
          <p className="text-muted-foreground mb-8">Última atualização: 28 de outubro de 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e usar o FazerCurriculo.com, você concorda em cumprir e estar vinculado aos seguintes 
                termos e condições de uso. Se você não concordar com alguma parte destes termos, não deverá usar 
                nosso serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Uso do Serviço</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nossa plataforma permite que você crie currículos profissionais gratuitamente. Você concorda em:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Fornecer informações verdadeiras e precisas</li>
                <li>Não usar o serviço para fins ilegais ou não autorizados</li>
                <li>Não tentar prejudicar o funcionamento do serviço</li>
                <li>Não reproduzir, duplicar ou copiar qualquer parte do serviço sem autorização</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                O conteúdo, organização, gráficos, design, compilação, tradução magnética, conversão digital e 
                outros assuntos relacionados ao site são protegidos por direitos autorais. Os currículos criados 
                por você são de sua propriedade exclusiva.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                O FazerCurriculo.com não será responsável por quaisquer danos diretos, indiretos, incidentais, 
                consequenciais ou punitivos decorrentes do uso ou incapacidade de usar nosso serviço. Não garantimos 
                que o serviço será ininterrupto ou livre de erros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Modificações do Serviço</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamos o direito de modificar ou descontinuar, temporária ou permanentemente, o serviço (ou 
                qualquer parte dele) com ou sem aviso prévio. Não seremos responsáveis perante você ou terceiros 
                por qualquer modificação, suspensão ou descontinuação do serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Links de Terceiros</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nosso serviço pode conter links para sites de terceiros que não são de nossa propriedade ou 
                controle. Não temos controle sobre o conteúdo, políticas de privacidade ou práticas de sites 
                de terceiros e não assumimos responsabilidade por eles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Alterações nos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamos o direito de modificar estes termos a qualquer momento. Notificaremos sobre quaisquer 
                alterações publicando os novos termos nesta página. É sua responsabilidade revisar estes termos 
                periodicamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Lei Aplicável</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar 
                conflitos de disposições legais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do email 
                contato@fazercurriculo.com ou pelo telefone (12) 98251-9116.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermosDeUso;
