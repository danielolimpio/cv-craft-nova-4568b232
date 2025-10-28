import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Printer, Trash2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import CurriculumForm from "@/components/curriculum/CurriculumForm";
import CurriculumPreview from "@/components/curriculum/CurriculumPreview";
import { CurriculumData } from "@/types/curriculum";
import { useToast } from "@/hooks/use-toast";
import { useCurriculumStorage } from "@/hooks/useCurriculumStorage";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CriarCurriculo = () => {
  const { toast } = useToast();
  
  const [curriculumData, setCurriculumData] = useState<CurriculumData>({
    personalData: {
      name: "",
      position: "",
      summary: "",
    },
    contact: {
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      website: "",
    },
    address: {
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
      zipCode: "",
    },
    education: [],
    experience: [],
    photo: null,
    photoStyle: "circular",
    visualSettings: {
      font: "Arial",
      fontSize: "medium",
      textColor: "#000000",
      backgroundColor: "#ffffff",
      lineStyle: "thin",
      spacing: "normal",
      alignment: "left",
    },
  });

  const { clearStorage } = useCurriculumStorage(curriculumData, setCurriculumData);

  const calculateProgress = () => {
    let filled = 0;
    const total = 6;

    if (curriculumData.personalData.name && curriculumData.personalData.position && curriculumData.personalData.summary) filled++;
    if (curriculumData.contact.email || curriculumData.contact.phone) filled++;
    if (curriculumData.address.city && curriculumData.address.state) filled++;
    if (curriculumData.education.length > 0) filled++;
    if (curriculumData.experience.length > 0) filled++;
    if (curriculumData.photo) filled++;

    return Math.round((filled / total) * 100);
  };

  const progress = calculateProgress();

  const handleDownloadPDF = async () => {
    const element = document.getElementById("curriculum-preview");
    if (!element) return;

    try {
      toast({
        title: "Gerando PDF...",
        description: "Aguarde enquanto preparamos seu currículo.",
      });

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("curriculo.pdf");

      toast({
        title: "PDF gerado com sucesso!",
        description: "Seu currículo foi baixado.",
      });
    } catch (error) {
      toast({
        title: "Erro ao gerar PDF",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleClearAll = () => {
    if (window.confirm("Tem certeza que deseja limpar todos os dados?")) {
      const emptyData: CurriculumData = {
        personalData: { name: "", position: "", summary: "" },
        contact: { email: "", phone: "", linkedin: "", github: "", website: "" },
        address: { street: "", number: "", neighborhood: "", city: "", state: "", zipCode: "" },
        education: [],
        experience: [],
        photo: null,
        photoStyle: "circular",
        visualSettings: {
          font: "Arial",
          fontSize: "medium",
          textColor: "#000000",
          backgroundColor: "#ffffff",
          lineStyle: "thin",
          spacing: "normal",
          alignment: "left",
        },
      };
      setCurriculumData(emptyData);
      clearStorage();
      toast({
        title: "Dados limpos!",
        description: "Todos os campos foram resetados.",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Toolbar */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">Criar Meu Currículo</h1>
              <TooltipProvider>
                <div className="flex gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button onClick={handlePrint} variant="outline" size="sm">
                        <Printer className="w-4 h-4 mr-2" />
                        Imprimir
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Imprimir seu currículo diretamente</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button onClick={handleDownloadPDF} size="sm" className="bg-[#006B3D] hover:bg-[#005530] text-white font-semibold px-6">
                        <Download className="w-4 h-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Seu currículo será gerado em PDF em segundos!</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button onClick={handleClearAll} variant="destructive" size="sm">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Limpar
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Apagar todos os dados do formulário</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </div>
            
            {/* Progress Bar */}
            <div className="flex items-center gap-3">
              <Progress value={progress} className="flex-1 h-2" />
              <span className="text-sm font-medium whitespace-nowrap">
                {progress}% pronto
              </span>
            </div>
            {progress < 100 && (
              <p className="text-xs text-muted-foreground">
                Continue preenchendo para completar seu currículo!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-40 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="order-2 lg:order-1">
              <CurriculumForm data={curriculumData} onChange={setCurriculumData} />
            </div>

            {/* Preview Section */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-32 h-fit">
              <CurriculumPreview data={curriculumData} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CriarCurriculo;
