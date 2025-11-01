import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale } from "lucide-react";

const LGPD = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex justify-center mb-6">
            <Scale className="w-16 h-16" style={{ color: '#006B3D' }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Lei Geral de Proteção de Dados (LGPD)</h1>
          <p className="text-muted-foreground mb-8">Última atualização: 28 de outubro de 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Compromisso com a LGPD</h2>
              <p className="text-muted-foreground leading-relaxed">
                O FazerCurriculo.com está em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). 
                Estamos comprometidos em proteger a privacidade e os dados pessoais de nossos usuários, respeitando 
                todos os direitos garantidos pela legislação brasileira.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Dados Pessoais Tratados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No contexto da LGPD, tratamos os seguintes tipos de dados pessoais:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Dados de Identificação:</strong> Nome completo, data de nascimento, CPF</li>
                <li><strong>Dados de Contato:</strong> Email, telefone, endereço</li>
                <li><strong>Dados Profissionais:</strong> Experiência profissional, formação acadêmica, 
                habilidades, certificações</li>
                <li><strong>Dados de Navegação:</strong> Endereço IP, cookies, logs de acesso</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Base Legal para o Tratamento</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O tratamento de seus dados pessoais está fundamentado nas seguintes bases legais da LGPD:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Consentimento:</strong> Você consente com o tratamento de seus dados ao usar 
                nosso serviço</li>
                <li><strong>Execução de Contrato:</strong> Para fornecer o serviço de criação de currículos</li>
                <li><strong>Legítimo Interesse:</strong> Para melhorar nossos serviços e experiência do usuário</li>
                <li><strong>Cumprimento de Obrigação Legal:</strong> Quando exigido por lei</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Direitos dos Titulares de Dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                De acordo com a LGPD, você tem os seguintes direitos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Confirmação e Acesso:</strong> Confirmar se tratamos seus dados e acessá-los</li>
                <li><strong>Correção:</strong> Solicitar correção de dados incompletos, inexatos ou desatualizados</li>
                <li><strong>Anonimização, Bloqueio ou Eliminação:</strong> Solicitar anonimização, bloqueio 
                ou eliminação de dados desnecessários ou excessivos</li>
                <li><strong>Portabilidade:</strong> Solicitar a portabilidade de seus dados a outro fornecedor</li>
                <li><strong>Eliminação:</strong> Solicitar a eliminação de dados tratados com base no consentimento</li>
                <li><strong>Informação sobre Compartilhamento:</strong> Obter informações sobre entidades 
                com as quais compartilhamos seus dados</li>
                <li><strong>Revogação do Consentimento:</strong> Revogar seu consentimento a qualquer momento</li>
                <li><strong>Oposição:</strong> Opor-se ao tratamento de dados realizado sem seu consentimento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Segurança dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Adotamos medidas técnicas e administrativas adequadas para proteger seus dados pessoais contra 
                acessos não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração, 
                comunicação ou qualquer forma de tratamento inadequado ou ilícito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Armazenamento e Retenção</h2>
              <p className="text-muted-foreground leading-relaxed">
                Seus dados são armazenados localmente no seu navegador e não são enviados para nossos servidores. 
                Mantemos dados de análise anônimos pelo período necessário para melhorar nossos serviços, em 
                conformidade com a LGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para a prestação 
                do serviço ou quando exigido por lei. Todos os terceiros que eventualmente acessem seus dados 
                estão sujeitos a obrigações de confidencialidade e conformidade com a LGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Transferência Internacional de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Não realizamos transferência internacional de dados pessoais. Todos os dados são processados 
                localmente no Brasil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Encarregado de Dados (DPO)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nosso Encarregado de Proteção de Dados (DPO) pode ser contatado através do email 
                dpo@fazercurriculo.com para questões relacionadas à proteção de dados e exercício de seus direitos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Como Exercer seus Direitos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para exercer qualquer um dos seus direitos previstos na LGPD, entre em contato conosco através:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                <li>Email: contato@fazercurriculo.com</li>
                <li>Email do DPO: dpo@fazercurriculo.com</li>
                <li>Telefone: (12) 98251-9116</li>
                <li>Endereço: Av. Julia Freire, 1200 - Expedicionários, João Pessoa - PB</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Alterações nesta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta política pode ser atualizada periodicamente. Notificaremos sobre alterações significativas 
                através do site e por email, quando aplicável. Recomendamos que você revise esta página 
                regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Autoridade Nacional de Proteção de Dados (ANPD)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Você tem o direito de apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD) 
                caso considere que o tratamento de seus dados pessoais não está em conformidade com a LGPD.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LGPD;
