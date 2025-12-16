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
}

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
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
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface WorkProps {
  onProjectClick: () => void;
}