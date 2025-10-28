export interface PersonalData {
  name: string;
  position: string;
  summary: string;
}

export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface Address {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Education {
  id: string;
  institution: string;
  course: string;
  level: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
}

export interface VisualSettings {
  font: string;
  fontSize: 'small' | 'medium' | 'large';
  textColor: string;
  backgroundColor: string;
  lineStyle: 'none' | 'thin' | 'dashed';
  spacing: 'compact' | 'normal' | 'spacious';
  alignment: 'left' | 'justify';
}

export interface CurriculumData {
  personalData: PersonalData;
  contact: Contact;
  address: Address;
  education: Education[];
  experience: Experience[];
  photo: string | null;
  photoStyle: 'circular' | 'square' | 'none';
  visualSettings: VisualSettings;
}
