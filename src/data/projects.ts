export type CaseStudy = {
  slug: string
  name: string
  tagline: string
  featured?: boolean
  image?: string
  platform?: 'web' | 'mobile'
  role: string
  goal: string
  solution: string
  techStack: string[]
  keyFeatures: string[]
  links: {
    github?: string
    demo?: string
  }
}

export const projects: CaseStudy[] = [
  {
    slug: 'medflow',
    name: 'MedFlow',
    tagline: 'Digital healthcare platform connecting patients and professionals.',
    featured: true,
    platform: 'mobile',
    role: 'Solo Full-Stack Developer',
    goal:
      'Patients and healthcare professionals lacked a single platform to discover each other, schedule consultations, and handle payments — usually requiring separate tools for booking, communication, and billing.',
    solution:
      'Built a mobile-first healthcare platform with dedicated patient and professional journeys, real-time availability with conflict-free scheduling, persistent authentication, and secure role-based data access enforced with Row Level Security, plus integrated payments via Mercado Pago.',
    techStack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Supabase Auth',
      'PostgreSQL',
      'Node.js',
      'Express',
      'tRPC',
      'Mercado Pago',
      'Vitest',
    ],
    keyFeatures: [
      'Separate patient and professional user journeys',
      'Real-time availability with conflict-free appointment scheduling',
      'Persistent authentication and secure sessions',
      'Role-based access control with Row Level Security',
      'Integrated payments via Mercado Pago',
      'Automated testing with Vitest',
    ],
    links: {},
  },
  {
    slug: 'vivamart',
    name: 'VivaMart',
    tagline: 'A modern marketplace experience built with vanilla JavaScript.',
    platform: 'web',
    role: 'Solo Frontend Developer',
    goal:
      'Wanted to demonstrate that a fully-featured, modern e-commerce experience — search, filtering, cart, multi-step checkout, and recommendations — could be delivered without relying on a front-end framework.',
    solution:
      'Built VivaMart from scratch with HTML, CSS, and vanilla JavaScript, using a modular architecture, hash-based routing, and localStorage-backed state to power product discovery, favorites, cart, checkout, and personalized recommendations, with full PT/EN localization and light/dark themes.',
    techStack: [
      'JavaScript',
      'HTML',
      'CSS',
      'LocalStorage',
      'Hash Routing',
    ],
    keyFeatures: [
      'Product discovery with search suggestions and category filtering',
      'Favorites and shopping cart management',
      'Multi-step checkout flow',
      'Recommendation logic based on browsing and search history',
      'Portuguese and English interfaces',
      'Light/dark themes with responsive mobile navigation',
      'Persistent client-side state with localStorage',
    ],
    links: {
      github: 'https://github.com/JonannVictor/Loja-Ficticia',
      demo: 'https://jonannvictor.github.io/Loja-Ficticia/',
    },
  },
  {
    slug: 'drophouse',
    name: 'DropHouse',
    tagline: 'Full-stack e-commerce platform for a premium streetwear brand.',
    platform: 'web',
    role: 'Full-Stack Developer at Agência Hineni',
    goal:
      'A premium streetwear business needed a modern, conversion-focused e-commerce platform combining product discovery, checkout, and payments into a single full-stack product rather than off-the-shelf storefront tools.',
    solution:
      'Built a full-stack e-commerce platform with Next.js and TypeScript, using Supabase for backend and data services and Mercado Pago for payments, with a focus on conversion-driven UX, cloud deployment, and analytics. Built as an associate at Agência Hineni.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Mercado Pago'],
    keyFeatures: [
      'Conversion-focused product discovery and browsing experience',
      'Full checkout and payment flow with Mercado Pago',
      'External API integrations',
      'Server-side services via Supabase',
      'Cloud deployment with application analytics',
    ],
    links: {
      demo: 'https://www.drophouse.shop/',
    },
  },
]
