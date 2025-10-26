import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Printer, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import CurriculumForm from "@/components/curriculum/CurriculumForm";
import CurriculumPreview from "@/components/curriculum/CurriculumPreview";
import { CurriculumData } from "@/types/curriculum";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ComoFunciona = () => {
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
      setCurriculumData({
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
      });
      toast({
        title: "Dados limpos!",
        description: "Todos os campos foram resetados.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:opacity-80">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Voltar</span>
            </Link>
            <h1 className="text-2xl font-bold">Ver Como Funciona</h1>
            <div className="flex gap-2">
              <Button onClick={handlePrint} variant="outline" size="sm">
                <Printer className="w-4 h-4 mr-2" />
                Imprimir
              </Button>
              <Button onClick={handleDownloadPDF} size="sm" style={{ color: "#01F0FF", borderColor: "#01F0FF" }} variant="outline">
                <Download className="w-4 h-4 mr-2" style={{ color: "#01F0FF" }} />
                Baixar PDF
              </Button>
              <Button onClick={handleClearAll} variant="destructive" size="sm">
                <Trash2 className="w-4 h-4 mr-2" />
                Limpar
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="order-2 lg:order-1">
            <CurriculumForm data={curriculumData} onChange={setCurriculumData} />
          </div>

          {/* Preview Section */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-8 h-fit">
            <CurriculumPreview data={curriculumData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoFunciona;
