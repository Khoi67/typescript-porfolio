import { ReactNode } from "react";

export type IconType =
  | "react"
  | "trello"
  | "movie"
  | "form"
  | "list"
  | "facebook"
  | "linkedin"
  | "github"
  | "email"
  | "phone"
  | "location"
  | string;

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  fullName: string;
  avatarUrl: string;
  backgroundUrl?: string;
  cvFileUrl: string;
  quote: string;
  typingSequence: (string | number)[];
  bio: string[];
  attributes: {
    label: string;
    value: string;
    isLink?: boolean;
    href?: string;
  }[];
}

export interface NavigationItem {
  id: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: IconType;
  title?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface SkillItem {

  name: string;
  percentage: number;
  color?: string;
}

export interface SkillCategory {
  title: string;
  descriptionPoints: string[];
  skills: SkillItem[];
}

export interface ProjectDetail {
  description: string;
  frontend: string;
  backend: string;
  member: number;
  role: string;
  demo: string;
  github: string;
  tags?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  icon?: IconType | ReactNode;
  iconColor?: string;
  detail: ProjectDetail;
}

export interface ContactInfo {
  address: string;
  email: string;
  github: string;
  githubUrl: string;
  phone?: string;
}

export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface AntiSpamConfig {
  cooldownSeconds: number;
  maxPerHour: number;
  minMessageLength: number;
  maxMessageLength: number;
  minSubmitTimeSeconds: number;
}

export interface PortfolioConfig {
  personalInfo: PersonalInfo;
  navigation: NavigationItem[];
  socialLinks: SocialLink[];
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  contact: ContactInfo;
  emailjs?: EmailJSConfig;
  antiSpam?: AntiSpamConfig;
  footer: {
    copyright: string;
  };
}

