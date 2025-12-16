export interface NavItem {
  id: string;
  label: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  image?: string;
}

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  award?: string;
  color?: string; // For custom card background/accent
}

export interface AwardItem {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  link: string;
}

export interface EducationItem {
  id: number;
  degree: string;
  school: string;
  period: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface WorkProps {
  onProjectClick: (id: number) => void;
}