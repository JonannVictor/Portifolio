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
    slug: 'devclub',
    name: 'DevClub',
    tagline: 'Marketing site for an online web development bootcamp.',
    image: 'projects/devclub.jpg',
    platform: 'web',
    role: 'Solo Frontend Developer',
    goal:
      'A bootcamp landing page has to earn trust fast while covering a lot of ground — curriculum, real projects, community, mentorship, career support, guarantees — without turning into an overwhelming wall of text that makes visitors bounce before they enroll.',
    solution:
      'Built a scroll-driven marketing site with an animated hero reveal, a curriculum explorer across Front-end, Back-end, and Full Stack tracks, a frame-by-frame scroll narrative walking through real student projects from code to deploy, instructor profiles, testimonials, FAQ, and a risk-free guarantee section — using React and Framer Motion to keep dozens of sections feeling like one cohesive, premium product instead of a cluttered sales page.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    keyFeatures: [
      'Animated hero reveal and scroll-linked storytelling',
      'Curriculum explorer across multiple learning tracks',
      '"Code to deploy" scroll narrative for real student projects',
      'Instructor and testimonial sections',
      'Risk-free guarantee and FAQ sections',
      'Fully responsive, dark-themed design',
    ],
    links: {
      demo: 'https://devclub-vert.vercel.app/',
    },
  },
  {
    slug: 'vivamart',
    name: 'VivaMart',
    tagline: 'A modern marketplace experience built with vanilla JavaScript.',
    image: 'projects/vivamart.jpg',
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
    image: 'projects/drophouse.jpg',
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
  {
    slug: 'hineni',
    name: 'Hineni',
    tagline: 'Agency website and client acquisition funnel for my own studio.',
    image: 'projects/hineni.jpg',
    platform: 'web',
    role: 'Founder & Full-Stack Developer',
    goal:
      'Growing businesses need a website, social media, and paid campaigns to work together, but usually end up piecing them together from different freelancers and tools that were never designed to talk to each other.',
    solution:
      "Designed and built Hineni's own site as both the agency's storefront and its lead-generation funnel: service pages, a free strategic diagnosis flow, and a clear four-stage process, shipped on Next.js and deployed on Vercel for speed and reliability. The site doubles as a live demonstration of the same technical quality the agency sells to clients — it is the primary channel bringing in new business nationally.",
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    keyFeatures: [
      'Free strategic diagnosis funnel for lead generation',
      'Service pages for web development, social media, and paid ads',
      'Four-stage engagement process: diagnosis, structuring, execution, growth',
      'Remote service delivery across Brazil',
      'Deployed on Vercel with Next.js for fast, reliable delivery',
    ],
    links: {
      demo: 'https://hineni.agency/',
    },
  },
  {
    slug: 'studio97',
    name: 'Studio 97',
    tagline: 'Premium landing page template for barbershops, built at Hineni.',
    image: 'projects/studio97.jpg',
    platform: 'web',
    role: 'Full-Stack Developer at Hineni',
    goal:
      'Local barbershops typically rely on Instagram DMs and phone calls to book clients, losing customers who just want to see prices and services and book a time slot without waiting for a reply.',
    solution:
      'Built a premium, conversion-focused landing page template: a service menu with pricing, a gallery of the space and work, customer testimonials, and a one-tap WhatsApp booking button with embedded Google Maps directions — packaged as a reusable template for Hineni\'s barbershop and grooming clients. The result turns a site visit into a booked appointment in a single tap, with no site management required from the owner.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API', 'Google Maps'],
    keyFeatures: [
      'Service menu with transparent pricing',
      'Photo gallery of the space and finished work',
      'Customer testimonials',
      'One-tap WhatsApp booking call-to-action',
      'Embedded Google Maps directions',
      'Fully responsive, mobile-first design',
    ],
    links: {
      demo: 'https://modelo.hineni.agency/',
    },
  },
]
