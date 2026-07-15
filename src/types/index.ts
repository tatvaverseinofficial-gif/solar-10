export type ServiceCategory =
  | "residential"
  | "commercial"
  | "industrial"
  | "epc"
  | "maintenance"
  | "battery";

export type ProjectCategory = "residential" | "commercial" | "industrial";

export type BlogCategory =
  | "solar-tips"
  | "maintenance"
  | "technology"
  | "government-schemes"
  | "news";

export type PropertyType = "residential" | "commercial" | "industrial" | "institutional";
export type RoofType = "rcc" | "metal" | "tiled" | "ground";

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  gallery: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  startingPrice?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  capacity: string;
  location: string;
  city: string;
  state: string;
  completionDate: string;
  roi: string;
  annualSavings: string;
  description: string;
  images: string[];
  clientName: string;
  testimonial: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  content: string;
  image: string;
  projectType: string;
  savings?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: ProjectCategory | "installation" | "team";
  image: string;
  location: string;
  capacity?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "general" | "cost" | "installation" | "subsidy" | "maintenance" | "technical";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface CalculatorInput {
  monthlyBill: number;
  propertyType: PropertyType;
  roofType: RoofType;
}

export interface CalculatorResult {
  systemSizeKw: number;
  estimatedSavingsAnnual: number;
  estimatedSavingsMonthly: number;
  paybackYears: number;
  co2ReductionTons: number;
  panelsRequired: number;
  roofAreaRequired: number;
  estimatedCost: number;
  subsidyEstimate: number;
}
