import { ServiceItem, FAQItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ju-cart',
    title: 'Ju Cart',
    tagline: 'Hyperlocal Groceries & Food',
    badge: 'Express 15-Min',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    iconName: 'ShoppingCart',
    features: [
      'Grocery shopping',
      'Express food delivery',
      'Fresh produce',
      'Order tracking',
      'Secure payments'
    ],
    demoDetails: {
      overview: 'Ju Cart combines instant grocery fulfillment and gourmet food delivery into one seamless interface. Track live temperature-controlled deliveries from farm to kitchen.',
      highlights: ['Sub-20 minute average doorstep delivery', '100% organic verified local farms', 'Zero surge pricing on daily staples'],
      availability: 'Launching in Phase 1'
    }
  },
  {
    id: 'ju-ride',
    title: 'Ju Ride',
    tagline: 'Smart Urban Mobility & Logistics',
    badge: 'Verified Drivers',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
    iconName: 'Car',
    features: [
      'On-demand rides',
      'Parcel courier delivery',
      'Scheduled bookings',
      'Integrated movers',
      'Verified drivers'
    ],
    demoDetails: {
      overview: 'Ju Ride delivers multi-modal city commuting: bikes, cabs, luxury autos, and instant parcel dispatch through a single Tap-and-Ride dashboard.',
      highlights: ['Background-checked & top-rated drivers', 'Fixed transparent fare guarantee', 'Instant intra-city courier dispatch'],
      availability: 'Launching in Phase 1'
    }
  },
  {
    id: 'ju-stay',
    title: 'Ju Stay',
    tagline: 'Handpicked Resorts & Stays',
    badge: 'Best Rate Guarantee',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    iconName: 'Hotel',
    features: [
      'Hotel bookings',
      'Curated farm stays',
      'Flexible check-ins',
      'Resort reservations',
      'Best rate guarantee'
    ],
    demoDetails: {
      overview: 'Ju Stay curates luxury hotel suites, boutique farmhouses, and nature retreats with zero hidden fees and exclusive member upgrades.',
      highlights: ['Zero cancellation penalties up to 24h', 'Exclusive VIP breakfast & spa perks', 'Curated off-grid eco farmhouses'],
      availability: 'Launching in Phase 1'
    }
  },
  {
    id: 'ju-home',
    title: 'Ju Home Services',
    tagline: 'Certified Experts at Your Doorstep',
    badge: '100% Quality Assured',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    iconName: 'Wrench',
    features: [
      'Plumbing solutions',
      'Deep cleaning',
      'General repairs',
      'Quick technicians',
      'Quality assurance'
    ],
    demoDetails: {
      overview: 'Ju Home Services connects you with background-verified plumbers, electricians, appliance technicians, and deep cleaners with a 30-day service warranty.',
      highlights: ['Transparent upfront rate cards', 'Fully insured technicians & tools', 'Real-time GPS technician tracking'],
      availability: 'Launching in Phase 1'
    }
  },
  {
    id: 'ju-shopping',
    title: 'JU Shopping',
    tagline: 'Premium Brands & Global Trends',
    badge: 'Assured Quality',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    iconName: 'ShoppingBag',
    features: [
      'Top fashion brands',
      'Latest electronics',
      'Exclusive deals',
      'Fast global shipping',
      'Easy returns'
    ],
    demoDetails: {
      overview: 'JU Shopping offers a curated selection of premium global brands, exclusive designer collections, and the latest electronics, all with guaranteed authenticity and lightning-fast delivery.',
      highlights: ['100% Authentic Products', 'Try & Buy options for Fashion', 'No-Questions-Asked 30-Day Returns'],
      availability: 'Launching in Phase 1'
    }
  },
  {
    id: 'ju-online',
    title: 'JU DIGITAL',
    tagline: 'Cloud Infrastructure & Digital Utilities',
    badge: '256-Bit Encrypted',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    iconName: 'Globe'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is JUONE?',
    answer: 'Juone is an all-in-one app designed to make your daily life easier. It brings together essential services like food delivery, rides, hotel bookings, home repairs, online shopping, and digital tools all into one single platform.'
  },
  {
    id: 'faq-2',
    question: 'Where is the official launch?',
    answer: 'JUONE is officially launching across major metropolitan centers in India including Bangalore, Mumbai, Delhi-NCR, Hyderabad, Chennai, and Pune. We will rapidly expand to 20+ tier-1 and tier-2 cities shortly after launch.'
  },
  {
    id: 'faq-3',
    question: 'Is my data secure with JUONE?',
    answer: 'Yes, 100% secure. We employ enterprise-grade 256-bit SSL encryption, tokenized payment processing, and strictly follow international privacy standards. Your personal data is encrypted both in transit and at rest, and is never shared with unauthorized third parties.'
  },
  {
    id: 'faq-4',
    question: 'Which cities will you cover?',
    answer: 'Phase 1 covers Bangalore, Mumbai, Delhi-NCR, Hyderabad, Chennai, and Pune. Phase 2 rollout expands to Kolkata, Ahmedabad, Jaipur, Chandigarh, Kochi, and 15 additional cities within the first quarter.'
  }
];
