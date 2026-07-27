export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  image: string;
  iconName: string;
  features?: string[];
  description?: string;
  accentColor?: string;
  demoDetails?: {
    overview: string;
    highlights: string[];
    availability: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

