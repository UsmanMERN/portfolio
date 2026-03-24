export interface Project {
  id: string;
  title: string;
  src: string;
  color: string;
  url: string;
  about: string;
  tech: string[];
  role: string;
  admin?: string | null;
  // Case Study Fields
  problem?: string;
  solution?: string;
  features?: string[];
  goals?: string[];
  focus?: string;
  importance?: string;
}

export interface ProjectModal {
  active: boolean;
  index: number;
}