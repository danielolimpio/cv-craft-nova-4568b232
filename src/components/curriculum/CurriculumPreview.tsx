import { CurriculumData } from "@/types/curriculum";
import { Mail, Phone, Linkedin, Github, Globe, MapPin } from "lucide-react";

interface CurriculumPreviewProps {
  data: CurriculumData;
}

const CurriculumPreview = ({ data }: CurriculumPreviewProps) => {
  const { personalData, contact, address, education, experience, photo, photoStyle, visualSettings } = data;

  const fontSizeMap = {
    small: { base: "12px", title: "20px", subtitle: "14px" },
    medium: { base: "14px", title: "24px", subtitle: "16px" },
    large: { base: "16px", title: "28px", subtitle: "18px" },
  };

  const spacingMap = {
    compact: "8px",
    normal: "16px",
    spacious: "24px",
  };

  const lineStyleMap = {
    none: "none",
    thin: `1px solid ${visualSettings.textColor}20`,
    dashed: `1px dashed ${visualSettings.textColor}40`,
  };

  const styles = {
    container: {
      fontFamily: visualSettings.font,
      fontSize: fontSizeMap[visualSettings.fontSize].base,
      color: visualSettings.textColor,
      backgroundColor: visualSettings.backgroundColor,
      textAlign: visualSettings.alignment as "left" | "justify",
    },
    section: {
      marginBottom: spacingMap[visualSettings.spacing],
    },
    separator: {
      borderBottom: lineStyleMap[visualSettings.lineStyle],
      marginTop: spacingMap[visualSettings.spacing],
      marginBottom: spacingMap[visualSettings.spacing],
    },
  };

  const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month] = date.split("-");
    return `${month}/${year}`;
  };

  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden print:shadow-none">
      <div
        id="curriculum-preview"
        className="p-12 min-h-[297mm] max-w-[210mm] mx-auto"
        style={styles.container}
      >
        {/* Header with Photo and Personal Data */}
        <div className="flex gap-6 items-start" style={styles.section}>
          {photo && (
            <div className="flex-shrink-0">
              <img
                src={photo}
                alt="Foto de perfil"
                className={`w-32 h-32 object-cover ${
                  photoStyle === "circular" ? "rounded-full" : "rounded-md"
                }`}
              />
            </div>
          )}
          
          <div className="flex-1">
            <h1
              className="font-bold uppercase tracking-wide"
              style={{ fontSize: fontSizeMap[visualSettings.fontSize].title }}
            >
              {personalData.name || "Seu Nome"}
            </h1>
            <h2
              className="font-semibold mt-1"
              style={{
                fontSize: fontSizeMap[visualSettings.fontSize].subtitle,
                color: `${visualSettings.textColor}CC`,
              }}
            >
              {personalData.position || "Cargo Desejado"}
            </h2>
          </div>
        </div>

        {personalData.summary && (
          <>
            <div style={styles.separator} />
            <div style={styles.section}>
              <h3
                className="font-bold uppercase mb-2"
                style={{ fontSize: fontSizeMap[visualSettings.fontSize].subtitle }}
              >
                Resumo Profissional
              </h3>
              <p style={{ lineHeight: "1.6" }}>{personalData.summary}</p>
            </div>
          </>
        )}

        {/* Contact Information */}
        {(contact.email || contact.phone || contact.linkedin || contact.github || contact.website) && (
          <>
            <div style={styles.separator} />
            <div style={styles.section}>
              <h3
                className="font-bold uppercase mb-3"
                style={{ fontSize: fontSizeMap[visualSettings.fontSize].subtitle }}
              >
                Contato
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {contact.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#01F0FF" }} />
                    <span className="text-sm">{contact.email}</span>
                  </div>
                )}
                {contact.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#01F0FF" }} />
                    <span className="text-sm">{contact.phone}</span>
                  </div>
                )}
                {contact.linkedin && (
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 flex-shrink-0" style={{ color: "#01F0FF" }} />
                    <span className="text-sm">{contact.linkedin}</span>
                  </div>
                )}
                {contact.github && (
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 flex-shrink-0" style={{ color: "#01F0FF" }} />
                    <span className="text-sm">{contact.github}</span>
                  </div>
                )}
                {contact.website && (
                  <div className="flex items-center gap-2 col-span-2">
                    <Globe className="w-4 h-4 flex-shrink-0" style={{ color: "#01F0FF" }} />
                    <span className="text-sm">{contact.website}</span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Address */}
        {(address.street || address.city) && (
          <>
            <div style={styles.separator} />
            <div style={styles.section}>
              <h3
                className="font-bold uppercase mb-3"
                style={{ fontSize: fontSizeMap[visualSettings.fontSize].subtitle }}
              >
                Endereço
              </h3>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: "#01F0FF" }} />
                <span className="text-sm">
                  {[
                    address.street && address.number ? `${address.street}, ${address.number}` : address.street,
                    address.neighborhood,
                    address.city && address.state ? `${address.city} - ${address.state}` : address.city || address.state,
                    address.zipCode,
                  ]
                    .filter(Boolean)
                    .join(", ")}
                </span>
              </div>
            </div>
          </>
        )}

        {/* Education */}
        {education.length > 0 && (
          <>
            <div style={styles.separator} />
            <div style={styles.section}>
              <h3
                className="font-bold uppercase mb-3"
                style={{ fontSize: fontSizeMap[visualSettings.fontSize].subtitle }}
              >
                Formação Acadêmica
              </h3>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="font-semibold">{edu.course || "Curso"}</div>
                    <div className="text-sm" style={{ color: `${visualSettings.textColor}DD` }}>
                      {edu.institution || "Instituição"} • {edu.level}
                    </div>
                    <div className="text-sm" style={{ color: `${visualSettings.textColor}99` }}>
                      {formatDate(edu.startDate)} - {edu.isCurrent ? "Presente" : formatDate(edu.endDate)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <>
            <div style={styles.separator} />
            <div style={styles.section}>
              <h3
                className="font-bold uppercase mb-3"
                style={{ fontSize: fontSizeMap[visualSettings.fontSize].subtitle }}
              >
                Experiência Profissional
              </h3>
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="font-semibold">{exp.position || "Cargo"}</div>
                    <div className="text-sm" style={{ color: `${visualSettings.textColor}DD` }}>
                      {exp.company || "Empresa"}
                    </div>
                    <div className="text-sm mb-2" style={{ color: `${visualSettings.textColor}99` }}>
                      {formatDate(exp.startDate)} - {exp.isCurrent ? "Presente" : formatDate(exp.endDate)}
                    </div>
                    {exp.description && (
                      <p className="text-sm" style={{ lineHeight: "1.5" }}>
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CurriculumPreview;
