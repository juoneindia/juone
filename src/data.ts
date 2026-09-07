// import { ServiceItem, FAQItem } from './types';

// export const SERVICES_DATA: ServiceItem[] = [
//   {
//     id: 'ju-cart',
//     title: 'Ju Cart',
//     tagline: 'Hyperlocal Groceries & Food',
//     badge: 'Express 15-Min',
//     image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
//     iconName: 'ShoppingCart',
//     features: [
//       'Grocery shopping',
//       'Express food delivery',
//       'Fresh produce',
//       'Order tracking',
//       'Secure payments'
//     ],
//     demoDetails: {
//       overview: 'Ju Cart combines instant grocery fulfillment and gourmet food delivery into one seamless interface. Track live temperature-controlled deliveries from farm to kitchen.',
//       highlights: ['Sub-20 minute average doorstep delivery', '100% organic verified local farms', 'Zero surge pricing on daily staples'],
//       availability: 'Launching in Phase 1'
//     }
//   },
//   {
//     id: 'ju-ride',
//     title: 'Ju Ride',
//     tagline: 'Smart Urban Mobility & Logistics',
//     badge: 'Verified Drivers',
//     image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
//     iconName: 'Car',
//     features: [
//       'On-demand rides',
//       'Parcel courier delivery',
//       'Scheduled bookings',
//       'Integrated movers',
//       'Verified drivers'
//     ],
//     demoDetails: {
//       overview: 'Ju Ride delivers multi-modal city commuting: bikes, cabs, luxury autos, and instant parcel dispatch through a single Tap-and-Ride dashboard.',
//       highlights: ['Background-checked & top-rated drivers', 'Fixed transparent fare guarantee', 'Instant intra-city courier dispatch'],
//       availability: 'Launching in Phase 1'
//     }
//   },
//   {
//     id: 'ju-stay',
//     title: 'Ju Stay',
//     tagline: 'Handpicked Resorts & Stays',
//     badge: 'Best Rate Guarantee',
//     image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
//     iconName: 'Hotel',
//     features: [
//       'Hotel bookings',
//       'Curated farm stays',
//       'Flexible check-ins',
//       'Resort reservations',
//       'Best rate guarantee'
//     ],
//     demoDetails: {
//       overview: 'Ju Stay curates luxury hotel suites, boutique farmhouses, and nature retreats with zero hidden fees and exclusive member upgrades.',
//       highlights: ['Zero cancellation penalties up to 24h', 'Exclusive VIP breakfast & spa perks', 'Curated off-grid eco farmhouses'],
//       availability: 'Launching in Phase 1'
//     }
//   },
//   {
//     id: 'ju-home',
//     title: 'Ju Home Services',
//     tagline: 'Certified Experts at Your Doorstep',
//     badge: '100% Quality Assured',
//     image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
//     iconName: 'Wrench',
//     features: [
//       'Plumbing solutions',
//       'Deep cleaning',
//       'General repairs',
//       'Quick technicians',
//       'Quality assurance'
//     ],
//     demoDetails: {
//       overview: 'Ju Home Services connects you with background-verified plumbers, electricians, appliance technicians, and deep cleaners with a 30-day service warranty.',
//       highlights: ['Transparent upfront rate cards', 'Fully insured technicians & tools', 'Real-time GPS technician tracking'],
//       availability: 'Launching in Phase 1'
//     }
//   },
//   {
//     id: 'ju-shopping',
//     title: 'JU Shopping',
//     tagline: 'Premium Brands & Global Trends',
//     badge: 'Assured Quality',
//     image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
//     iconName: 'ShoppingBag',
//     features: [
//       'Top fashion brands',
//       'Latest electronics',
//       'Exclusive deals',
//       'Fast global shipping',
//       'Easy returns'
//     ],
//     demoDetails: {
//       overview: 'JU Shopping offers a curated selection of premium global brands, exclusive designer collections, and the latest electronics, all with guaranteed authenticity and lightning-fast delivery.',
//       highlights: ['100% Authentic Products', 'Try & Buy options for Fashion', 'No-Questions-Asked 30-Day Returns'],
//       availability: 'Launching in Phase 1'
//     }
//   },
//   {
//     id: 'ju-online',
//     title: 'JU DIGITAL',
//     tagline: 'Cloud Infrastructure & Digital Utilities',
//     badge: '256-Bit Encrypted',
//     image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
//     iconName: 'Globe'
//   }
// ];

// export const FAQ_DATA: FAQItem[] = [
//   {
//     id: 'faq-1',
//     question: 'What is JUONE?',
//     answer: 'Juone is an all-in-one app designed to make your daily life easier. It brings together essential services like food delivery, rides, hotel bookings, home repairs, online shopping, and digital tools all into one single platform.'
//   },
//   {
//     id: 'faq-2',
//     question: 'Where is the official launch?',
//     answer: 'JUONE is officially launching across major metropolitan centers in India including Bangalore, Mumbai, Delhi-NCR, Hyderabad, Chennai, and Pune. We will rapidly expand to 20+ tier-1 and tier-2 cities shortly after launch.'
//   },
//   {
//     id: 'faq-3',
//     question: 'Is my data secure with JUONE?',
//     answer: 'Yes, 100% secure. We employ enterprise-grade 256-bit SSL encryption, tokenized payment processing, and strictly follow international privacy standards. Your personal data is encrypted both in transit and at rest, and is never shared with unauthorized third parties.'
//   },
//   {
//     id: 'faq-4',
//     question: 'Which cities will you cover?',
//     answer: 'Phase 1 covers Bangalore, Mumbai, Delhi-NCR, Hyderabad, Chennai, and Pune. Phase 2 rollout expands to Kolkata, Ahmedabad, Jaipur, Chandigarh, Kochi, and 15 additional cities within the first quarter.'
//   }
// ];
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
      overview: 'Ju Cart combines instant grocery fulfillment, freshly prepared meals, and doorstep pharmacy delivery into one unified hyperlocal interface.',
      highlights: ['Sub-15 minute average doorstep delivery', '100% organic verified local farms & stores', 'Zero surge pricing on essential staples'],
      availability: 'Launching September 25, 2026'
    },
    catalog: [
      {
        id: 'cart-1',
        name: 'Organic Hass Avocados & Fresh Salad Greens',
        category: 'Grocery',
        price: '₹249',
        originalPrice: '₹320',
        tag: 'Organic',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cart-2',
        name: 'Farm-Fresh Pasteurized A2 Milk & Artisanal Butter',
        category: 'Grocery',
        price: '₹140',
        originalPrice: '₹170',
        tag: 'Fresh Farm',
        image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cart-3',
        name: 'Stone-Milled Multigrain Sourdough Bread',
        category: 'Grocery',
        price: '₹115',
        originalPrice: '₹150',
        tag: 'Bakery',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cart-4',
        name: 'Pure Raw Wild Forest Honey (500g)',
        category: 'Grocery',
        price: '₹389',
        originalPrice: '₹480',
        tag: '100% Pure',
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cart-5',
        name: 'Royal Hyderabadi Dum Mutton Biryani Pot',
        category: 'Food',
        price: '₹449',
        originalPrice: '₹550',
        tag: 'Bestseller',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cart-6',
        name: 'Wood-Fired Truffle & Burrata Neapolitan Pizza',
        category: 'Food',
        price: '₹489',
        originalPrice: '₹599',
        tag: "Chef's Special",
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cart-7',
        name: 'Fresh Dragon Fruit & Berry Superfood Bowl',
        category: 'Food',
        price: '₹299',
        originalPrice: '₹360',
        tag: 'Healthy',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cart-8',
        name: 'Compact Travel & Home First Aid Medical Kit',
        category: 'Pharmacy',
        price: '₹399',
        originalPrice: '₹499',
        tag: 'Essential',
        image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cart-9',
        name: 'Daily Multivitamin, Zinc & Omega-3 Softgels',
        category: 'Pharmacy',
        price: '₹549',
        originalPrice: '₹699',
        tag: 'Wellness',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cart-10',
        name: 'Infrared Contactless Digital Body Thermometer',
        category: 'Pharmacy',
        price: '₹799',
        originalPrice: '₹1,200',
        tag: 'Medical Grade',
        image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80'
      }
    ]
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
      overview: 'JU Shopping offers a handpicked selection of premium global brands, exclusive apparel drops, and flagship electronics, backed by authenticity guarantees.',
      highlights: ['100% Authenticity Verified', 'Try & Buy options for Fashion', 'No-Questions-Asked 30-Day Returns'],
      availability: 'Launching September 25, 2026'
    },
    catalog: [
      {
        id: 'shop-1',
        name: 'Apple iPhone 16 Pro Max (256GB Desert Titanium)',
        category: 'Electronics',
        price: '₹1,34,900',
        originalPrice: '₹1,39,900',
        tag: 'Flagship',
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'shop-2',
        name: 'Sony WH-1000XM5 Wireless Noise-Cancelling Headphones',
        category: 'Electronics',
        price: '₹28,990',
        originalPrice: '₹34,990',
        tag: 'Premium Audio',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'shop-3',
        name: 'Apple Watch Ultra 2 GPS + Cellular 49mm',
        category: 'Electronics',
        price: '₹84,900',
        originalPrice: '₹89,900',
        tag: 'Wearable',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'shop-4',
        name: 'Fujifilm X-T5 Mirrorless Camera + 18-55mm Lens Kit',
        category: 'Electronics',
        price: '₹1,44,990',
        originalPrice: '₹1,69,900',
        tag: '4K Cinema',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'shop-5',
        name: 'Zara Men Structured Tailored Double-Breasted Blazer',
        category: 'Fashion',
        price: '₹7,990',
        originalPrice: '₹9,990',
        tag: 'Zara',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'shop-6',
        name: 'H&M Silk Blend Slip Evening Cocktail Dress',
        category: 'Fashion',
        price: '₹3,999',
        originalPrice: '₹4,999',
        tag: 'Trending',
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'shop-7',
        name: 'Nike Air Jordan 1 Retro High OG Chicago Edition',
        category: 'Fashion',
        price: '₹16,995',
        originalPrice: '₹19,995',
        tag: 'Nike',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'shop-8',
        name: 'Ray-Ban Wayfarer Classic Polarized Sunglasses',
        category: 'Fashion',
        price: '₹9,490',
        originalPrice: '₹11,890',
        tag: 'Ray-Ban',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'shop-9',
        name: 'Fossil Neutra Minimalist Chronograph Leather Watch',
        category: 'Fashion',
        price: '₹10,995',
        originalPrice: '₹13,995',
        tag: 'Fossil',
        image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'shop-10',
        name: 'Dyson Supersonic Hair Styler & Professional Dryer',
        category: 'Lifestyle',
        price: '₹38,900',
        originalPrice: '₹42,900',
        tag: 'Dyson Tech',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80'
      }
    ]
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
