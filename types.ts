
export type Language = 'en' | 'ko';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  iconName: string;
}

export interface TeamMember {
  name: string;
  role: string;
  education: string[];
  experience: string[];
  image?: string;
}

export interface Publication {
  title: string;
  journal: string;
  year: string;
  authors: string;
  link?: string;
}

export interface Client {
  name: string;
  logo?: string;
  link?: string;
}

export interface TherapeuticArea {
  category: string;
  diseases: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
