import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, User, Briefcase, GraduationCap, Mail, MapPin, Palette } from "lucide-react";
import { CurriculumData, Education, Experience } from "@/types/curriculum";

interface CurriculumFormProps {
  data: CurriculumData;
  onChange: (data: CurriculumData) => void;
}

const CurriculumForm = ({ data, onChange }: CurriculumFormProps) => {
  const [photoPreview, setPhotoPreview] = useState<string | null>(data.photo);

  const updateData = (updates: Partial<CurriculumData>) => {
    onChange({ ...data, ...updates });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPhotoPreview(result);
        updateData({ photo: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: "",
      course: "",
      level: "Graduação",
      startDate: "",
      endDate: "",
      isCurrent: false,
    };
    updateData({ education: [...data.education, newEducation] });
  };

  const updateEducation = (id: string, updates: Partial<Education>) => {
    updateData({
      education: data.education.map((edu) =>
        edu.id === id ? { ...edu, ...updates } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    updateData({ education: data.education.filter((edu) => edu.id !== id) });
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      isCurrent: false,
      description: "",
    };
    updateData({ experience: [...data.experience, newExperience] });
  };

  const updateExperience = (id: string, updates: Partial<Experience>) => {
    updateData({
      experience: data.experience.map((exp) =>
        exp.id === id ? { ...exp, ...updates } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    updateData({ experience: data.experience.filter((exp) => exp.id !== id) });
  };

  return (
    <div className="space-y-6">
      {/* Dados Pessoais */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <User className="w-5 h-5" style={{ color: "#01F0FF" }} />
          <h2 className="text-xl font-bold">Dados Pessoais</h2>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Nome Completo *</Label>
            <Input
              id="name"
              value={data.personalData.name}
              onChange={(e) =>
                updateData({
                  personalData: { ...data.personalData, name: e.target.value },
                })
              }
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <Label htmlFor="position">Cargo Desejado *</Label>
            <Input
              id="position"
              value={data.personalData.position}
              onChange={(e) =>
                updateData({
                  personalData: { ...data.personalData, position: e.target.value },
                })
              }
              placeholder="Ex: Desenvolvedor Full Stack"
            />
          </div>

          <div>
            <Label htmlFor="summary">Resumo Profissional *</Label>
            <Textarea
              id="summary"
              value={data.personalData.summary}
              onChange={(e) =>
                updateData({
                  personalData: { ...data.personalData, summary: e.target.value },
                })
              }
              placeholder="Descreva brevemente sua experiência e objetivos profissionais"
              rows={4}
            />
          </div>
        </div>
      </Card>

      {/* Foto de Perfil */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <User className="w-5 h-5" style={{ color: "#01F0FF" }} />
          <h2 className="text-xl font-bold">Foto de Perfil</h2>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="photo">Upload de Foto (opcional)</Label>
            <Input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </div>

          {photoPreview && (
            <div className="flex items-center gap-4">
              <img
                src={photoPreview}
                alt="Preview"
                className={`w-24 h-24 object-cover ${
                  data.photoStyle === "circular" ? "rounded-full" : "rounded-md"
                }`}
              />
              <div className="flex-1">
                <Label>Estilo da Foto</Label>
                <RadioGroup
                  value={data.photoStyle}
                  onValueChange={(value: "circular" | "none") =>
                    updateData({ photoStyle: value })
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="circular" id="circular" />
                    <Label htmlFor="circular">Com borda circular</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="none" />
                    <Label htmlFor="none">Sem borda</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Contato */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="w-5 h-5" style={{ color: "#01F0FF" }} />
          <h2 className="text-xl font-bold">Contato</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={data.contact.email}
              onChange={(e) =>
                updateData({ contact: { ...data.contact, email: e.target.value } })
              }
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              value={data.contact.phone}
              onChange={(e) =>
                updateData({ contact: { ...data.contact, phone: e.target.value } })
              }
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input
              id="linkedin"
              value={data.contact.linkedin}
              onChange={(e) =>
                updateData({ contact: { ...data.contact, linkedin: e.target.value } })
              }
              placeholder="linkedin.com/in/seu-perfil"
            />
          </div>

          <div>
            <Label htmlFor="github">GitHub</Label>
            <Input
              id="github"
              value={data.contact.github}
              onChange={(e) =>
                updateData({ contact: { ...data.contact, github: e.target.value } })
              }
              placeholder="github.com/seu-usuario"
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="website">Site Pessoal</Label>
            <Input
              id="website"
              value={data.contact.website}
              onChange={(e) =>
                updateData({ contact: { ...data.contact, website: e.target.value } })
              }
              placeholder="seusite.com"
            />
          </div>
        </div>
      </Card>

      {/* Endereço */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5" style={{ color: "#01F0FF" }} />
          <h2 className="text-xl font-bold">Endereço</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <Label htmlFor="street">Rua</Label>
            <Input
              id="street"
              value={data.address.street}
              onChange={(e) =>
                updateData({ address: { ...data.address, street: e.target.value } })
              }
              placeholder="Nome da rua"
            />
          </div>

          <div>
            <Label htmlFor="number">Número</Label>
            <Input
              id="number"
              value={data.address.number}
              onChange={(e) =>
                updateData({ address: { ...data.address, number: e.target.value } })
              }
              placeholder="123"
            />
          </div>

          <div>
            <Label htmlFor="neighborhood">Bairro</Label>
            <Input
              id="neighborhood"
              value={data.address.neighborhood}
              onChange={(e) =>
                updateData({
                  address: { ...data.address, neighborhood: e.target.value },
                })
              }
              placeholder="Nome do bairro"
            />
          </div>

          <div>
            <Label htmlFor="city">Cidade</Label>
            <Input
              id="city"
              value={data.address.city}
              onChange={(e) =>
                updateData({ address: { ...data.address, city: e.target.value } })
              }
              placeholder="Nome da cidade"
            />
          </div>

          <div>
            <Label htmlFor="state">Estado</Label>
            <Input
              id="state"
              value={data.address.state}
              onChange={(e) =>
                updateData({ address: { ...data.address, state: e.target.value } })
              }
              placeholder="UF"
              maxLength={2}
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="zipCode">CEP</Label>
            <Input
              id="zipCode"
              value={data.address.zipCode}
              onChange={(e) =>
                updateData({ address: { ...data.address, zipCode: e.target.value } })
              }
              placeholder="00000-000"
            />
          </div>
        </div>
      </Card>

      {/* Escolaridade */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5" style={{ color: "#01F0FF" }} />
            <h2 className="text-xl font-bold">Escolaridade</h2>
          </div>
          <Button onClick={addEducation} size="sm" variant="outline" style={{ color: "#01F0FF", borderColor: "#01F0FF" }}>
            <Plus className="w-4 h-4 mr-2" style={{ color: "#01F0FF" }} />
            Adicionar Formação
          </Button>
        </div>

        <div className="space-y-4">
          {data.education.map((edu, index) => (
            <div key={edu.id} className="border rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Formação {index + 1}</h3>
                <Button
                  onClick={() => removeEducation(edu.id)}
                  size="sm"
                  variant="ghost"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label>Instituição</Label>
                  <Input
                    value={edu.institution}
                    onChange={(e) =>
                      updateEducation(edu.id, { institution: e.target.value })
                    }
                    placeholder="Nome da instituição"
                  />
                </div>

                <div>
                  <Label>Curso</Label>
                  <Input
                    value={edu.course}
                    onChange={(e) =>
                      updateEducation(edu.id, { course: e.target.value })
                    }
                    placeholder="Nome do curso"
                  />
                </div>

                <div>
                  <Label>Nível</Label>
                  <Select
                    value={edu.level}
                    onValueChange={(value) =>
                      updateEducation(edu.id, { level: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Técnico">Técnico</SelectItem>
                      <SelectItem value="Graduação">Graduação</SelectItem>
                      <SelectItem value="Pós-graduação">Pós-graduação</SelectItem>
                      <SelectItem value="Mestrado">Mestrado</SelectItem>
                      <SelectItem value="Doutorado">Doutorado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Data de Início</Label>
                  <Input
                    type="date"
                    value={edu.startDate}
                    onChange={(e) =>
                      updateEducation(edu.id, { startDate: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label>Data de Término</Label>
                  <Input
                    type="date"
                    value={edu.endDate}
                    onChange={(e) =>
                      updateEducation(edu.id, { endDate: e.target.value })
                    }
                    disabled={edu.isCurrent}
                  />
                </div>

                <div className="md:col-span-2 flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`current-${edu.id}`}
                    checked={edu.isCurrent}
                    onChange={(e) =>
                      updateEducation(edu.id, { isCurrent: e.target.checked })
                    }
                    className="w-4 h-4"
                  />
                  <Label htmlFor={`current-${edu.id}`}>Até o momento</Label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Experiência Profissional */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5" style={{ color: "#01F0FF" }} />
            <h2 className="text-xl font-bold">Experiência Profissional</h2>
          </div>
          <Button onClick={addExperience} size="sm" variant="outline" style={{ color: "#01F0FF", borderColor: "#01F0FF" }}>
            <Plus className="w-4 h-4 mr-2" style={{ color: "#01F0FF" }} />
            Adicionar Experiência
          </Button>
        </div>

        <div className="space-y-4">
          {data.experience.map((exp, index) => (
            <div key={exp.id} className="border rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Experiência {index + 1}</h3>
                <Button
                  onClick={() => removeExperience(exp.id)}
                  size="sm"
                  variant="ghost"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Empresa</Label>
                  <Input
                    value={exp.company}
                    onChange={(e) =>
                      updateExperience(exp.id, { company: e.target.value })
                    }
                    placeholder="Nome da empresa"
                  />
                </div>

                <div>
                  <Label>Cargo</Label>
                  <Input
                    value={exp.position}
                    onChange={(e) =>
                      updateExperience(exp.id, { position: e.target.value })
                    }
                    placeholder="Seu cargo"
                  />
                </div>

                <div>
                  <Label>Data de Início</Label>
                  <Input
                    type="date"
                    value={exp.startDate}
                    onChange={(e) =>
                      updateExperience(exp.id, { startDate: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label>Data de Término</Label>
                  <Input
                    type="date"
                    value={exp.endDate}
                    onChange={(e) =>
                      updateExperience(exp.id, { endDate: e.target.value })
                    }
                    disabled={exp.isCurrent}
                  />
                </div>

                <div className="md:col-span-2 flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`current-exp-${exp.id}`}
                    checked={exp.isCurrent}
                    onChange={(e) =>
                      updateExperience(exp.id, { isCurrent: e.target.checked })
                    }
                    className="w-4 h-4"
                  />
                  <Label htmlFor={`current-exp-${exp.id}`}>Até o momento</Label>
                </div>

                <div className="md:col-span-2">
                  <Label>Descrição das Atividades</Label>
                  <Textarea
                    value={exp.description}
                    onChange={(e) =>
                      updateExperience(exp.id, { description: e.target.value })
                    }
                    placeholder="Descreva suas principais responsabilidades e realizações"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Personalização Visual */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Palette className="w-5 h-5" style={{ color: "#01F0FF" }} />
          <h2 className="text-xl font-bold">Personalização Visual</h2>
        </div>

        <div className="space-y-6">
          <div>
            <Label>Fonte</Label>
            <Select
              value={data.visualSettings.font}
              onValueChange={(value) =>
                updateData({
                  visualSettings: { ...data.visualSettings, font: value },
                })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Arial">Arial</SelectItem>
                <SelectItem value="Georgia">Georgia</SelectItem>
                <SelectItem value="Lato">Lato</SelectItem>
                <SelectItem value="Roboto">Roboto</SelectItem>
                <SelectItem value="Open Sans">Open Sans</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Tamanho da Fonte</Label>
            <RadioGroup
              value={data.visualSettings.fontSize}
              onValueChange={(value: "small" | "medium" | "large") =>
                updateData({
                  visualSettings: { ...data.visualSettings, fontSize: value },
                })
              }
            >
              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="small" id="small" />
                  <Label htmlFor="small">Pequeno</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium">Médio</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="large" id="large" />
                  <Label htmlFor="large">Grande</Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Cor do Texto</Label>
            <div className="flex gap-2 mt-2">
              {["#000000", "#333333", "#1e3a8a", "#065f46"].map((color) => (
                <button
                  key={color}
                  onClick={() =>
                    updateData({
                      visualSettings: { ...data.visualSettings, textColor: color },
                    })
                  }
                  className={`w-10 h-10 rounded-full border-2 ${
                    data.visualSettings.textColor === color
                      ? "border-primary"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div>
            <Label>Cor de Fundo</Label>
            <div className="flex gap-2 mt-2">
              {["#ffffff", "#f5f5f5", "#fffbeb"].map((color) => (
                <button
                  key={color}
                  onClick={() =>
                    updateData({
                      visualSettings: {
                        ...data.visualSettings,
                        backgroundColor: color,
                      },
                    })
                  }
                  className={`w-10 h-10 rounded-full border-2 ${
                    data.visualSettings.backgroundColor === color
                      ? "border-primary"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div>
            <Label>Estilo de Linhas</Label>
            <Select
              value={data.visualSettings.lineStyle}
              onValueChange={(value: "none" | "thin" | "dashed") =>
                updateData({
                  visualSettings: { ...data.visualSettings, lineStyle: value },
                })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Nenhuma linha</SelectItem>
                <SelectItem value="thin">Linha fina</SelectItem>
                <SelectItem value="dashed">Linha tracejada</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Espaçamento</Label>
            <RadioGroup
              value={data.visualSettings.spacing}
              onValueChange={(value: "compact" | "normal" | "spacious") =>
                updateData({
                  visualSettings: { ...data.visualSettings, spacing: value },
                })
              }
            >
              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="compact" />
                  <Label htmlFor="compact">Compacto</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="normal" id="normal" />
                  <Label htmlFor="normal">Normal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="spacious" id="spacious" />
                  <Label htmlFor="spacious">Espaçoso</Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Alinhamento</Label>
            <RadioGroup
              value={data.visualSettings.alignment}
              onValueChange={(value: "left" | "justify") =>
                updateData({
                  visualSettings: { ...data.visualSettings, alignment: value },
                })
              }
            >
              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="left" id="left" />
                  <Label htmlFor="left">Alinhado à esquerda</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="justify" id="justify" />
                  <Label htmlFor="justify">Justificado</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CurriculumForm;
