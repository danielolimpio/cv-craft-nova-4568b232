import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tem alguma dúvida ou sugestão? Estamos aqui para ajudar!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e responderemos o mais breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" style={{ backgroundColor: '#006B3D' }}>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 mt-1" style={{ color: '#006B3D' }} />
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-muted-foreground">contato@fazercurriculo.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 mt-1" style={{ color: '#006B3D' }} />
                    <div>
                      <p className="font-medium">Telefone</p>
                      <p className="text-muted-foreground">(12) 98251-9116</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-1" style={{ color: '#006B3D' }} />
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-muted-foreground">
                        Av. Julia Freire, 1200 - Expedicionários<br />
                        João Pessoa - PB - Brasil
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card>
                <CardHeader>
                  <CardTitle>Nossa Localização</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.567217145442!2d-34.86481708523658!3d-7.112235694856548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace839a4e7e0ff%3A0x5e3a9f5e5e3a9f5e!2sAv.%20J%C3%BAlia%20Freire%2C%201200%20-%20Expedicion%C3%A1rios%2C%20Jo%C3%A3o%20Pessoa%20-%20PB!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização FazerCurriculo.com - Av. Julia Freire, 1200"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
