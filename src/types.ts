export interface CatalogItem {
  id: string;
  name: string;
  category: 'Grocery' | 'Food' | 'Pharmacy' | 'Electronics' | 'Fashion' | 'Lifestyle' | string;
  price: string;
  originalPrice?: string;
  image: string;
  tag?: string;
}

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
  catalog?: CatalogItem[];
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
