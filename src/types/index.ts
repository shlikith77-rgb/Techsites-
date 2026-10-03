export interface Project {
  id: string;
  name: string;
  category: string;
  location: string;
  image: string;
  heroImage: string;
  description: string;
  highlight: string;
  deliverables: string[];
  clientQuote?: string;
  results?: string[];
  tags: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  metrics: { label: string; value: string }[];
  tagline: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period?: string;
  popular?: boolean;
  highlight?: string;
  suitableFor: string;
  features: string[];
  ctaText: string;
}

export interface AutomationPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  suitableFor: string;
  popular?: boolean;
  highlight?: string;
  features: string[];
  ctaText: string;
}

export interface IndustryCategory {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  rating: number;
  projectRef: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
