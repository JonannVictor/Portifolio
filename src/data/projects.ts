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
      'Patients and healthcare professionals had no single place to connect — booking, communicating, and paying for consultations meant juggling phone calls, spreadsheets, and separate payment tools, creating friction for patients and administrative overhead for providers.',
    solution:
      "As the sole developer, I designed and built a mobile-first platform with dedicated patient and professional journeys: real-time, conflict-free appointment scheduling, persistent authentication, and role-based data access enforced with Row Level Security, plus integrated payments via Mercado Pago. The result is a single app where a patient can find a provider, book a slot, and pay in minutes — replacing a patchwork of disconnected tools with one secure, production-ready system.",
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
      'Most modern e-commerce experiences — search, filtering, cart, multi-step checkout, personalized recommendations — are built on top of heavy frameworks. The challenge was proving that same level of polish could be delivered with nothing but the language the browser already understands.',
    solution:
      'Built entirely from scratch with HTML, CSS, and vanilla JavaScript, using a modular architecture, hash-based routing, and localStorage-backed state to power product discovery, favorites, cart, checkout, and recommendations — with full PT/EN localization and light/dark themes. The result is a fast, dependency-free marketplace that proves strong UX and clean architecture do not require a framework.',
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
      'A premium streetwear brand needed to sell online but had no digital presence beyond social media — no storefront, no checkout, and no way to accept payments or manage products without handing a cut of every sale to a third-party marketplace.',
    solution:
      'Built a full-stack e-commerce platform with Next.js and TypeScript, using Supabase for backend and data services and Mercado Pago for payments, with a focus on conversion-driven UX, cloud deployment, and analytics. The brand now owns its entire sales channel — from product discovery to checkout — with a fast, SEO-ready storefront live in production.',
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
  {
    slug: 'jarvis-trader',
    name: 'Jarvis Trader',
    tagline: 'Autonomous crypto trading bot with adaptive risk management.',
    platform: 'web',
    role: 'Solo Full-Stack Developer',
    goal:
      'Manual crypto trading requires constant attention to market conditions, the discipline to cut risk during losing streaks, and the ability to react in seconds — three things that do not scale when a single person is doing all of it by hand.',
    solution:
      'Built an autonomous trading bot with a modular architecture that separates market detection, AI-based entry and exit scoring, and risk management, driven by a self-adjusting risk engine that raises its entry threshold and tightens position sizing automatically after losing streaks. Paired it with a real-time React dashboard polling a Node/Express API to visualize live P&L, trade history, and profit projections — turning a strategy that once demanded constant manual attention into a system that runs, adapts, and reports on itself.',
    techStack: [
      'Node.js',
      'Express',
      'CCXT',
      'Supabase',
      'React',
      'Vite',
      'Tailwind CSS',
      'Recharts',
      'Framer Motion',
    ],
    keyFeatures: [
      'Modular bot architecture separating market detection, AI scoring, risk, and strategy',
      'Adaptive risk engine that tightens thresholds after losing streaks',
      'Real-time dashboard with live P&L and trade history',
      'Profit projection visualization',
      'Persistent trade state and dataset via Supabase',
      'Exchange connectivity via CCXT',
    ],
    links: {
      github: 'https://github.com/JonannVictor/IA-Jarvs-trader',
    },
  },
]
