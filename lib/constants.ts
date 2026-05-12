// ─────────────────────────────────────────────────────────────────────────
//  Codentrixa — site-wide content constants
//  Light theme: #FAFAF8 / #F4EFE9 / #FFFFFF / accent #F55C1A
// ─────────────────────────────────────────────────────────────────────────

export const COMPANY_NAME = 'Codentrixa';
export const COMPANY_TAGLINE = 'Engineering enterprise-grade software, on time, on scope.';
export const COMPANY_EMAIL = 'contact@codentrixa.com';
export const COMPANY_PHONE = '+1 (555) 000-0100';
export const COMPANY_WHATSAPP = '+15550000100';
export const COMPANY_ADDRESS = 'Remote-first · Headquartered in San Francisco, CA';

// ─────────────────────────────  Navigation  ──────────────────────────────

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Outsourcing', href: '/outsourcing' },
  { label: 'Technologies', href: '/#technologies' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

// ─────────────────────────────  Stats  ───────────────────────────────────

export const STATS = [
  { value: '10+', label: 'Projects Live', sub: 'in production' },
  { value: '2', label: 'Permanent Clients', sub: 'on retainer' },
  { value: '14', label: 'Technologies', sub: 'across our stack' },
  { value: '24/7', label: 'Remote Team', sub: 'global coverage' },
  { value: '< 2 wks', label: 'Avg. Delivery', sub: 'time-to-first-build' },
];

// ─────────────────────────────  Why Choose Us  ───────────────────────────

export const WHY_CHOOSE_US = [
  {
    title: 'Dedicated Development Team',
    description:
      'A senior squad assigned end-to-end — same engineers from kickoff to maintenance. No revolving doors.',
    icon: 'users-round',
  },
  {
    title: 'Modern Tech Stack',
    description:
      'React, Next.js, Flutter, Node, Python, AWS — battle-tested choices, not framework chasing.',
    icon: 'cpu',
  },
  {
    title: 'Agile Workflow',
    description:
      'Two-week sprints, transparent boards, weekly demos. You see progress every Friday.',
    icon: 'workflow',
  },
  {
    title: 'Scalable Architecture',
    description:
      'Systems designed for 100× growth from day one — clean domains, infra as code, observability baked in.',
    icon: 'layers',
  },
  {
    title: 'Fast Communication',
    description:
      'Slack channel + dedicated PM. Responses within working hours, never radio silence.',
    icon: 'message-square',
  },
  {
    title: 'Client-Centric Development',
    description:
      'Your roadmap, your priorities. We co-build the spec — not parachute it in.',
    icon: 'compass',
  },
  {
    title: 'Long-Term Support',
    description:
      'Maintenance contracts, version upgrades, security patches — we stay long after launch.',
    icon: 'shield-check',
  },
  {
    title: 'Remote Collaboration',
    description:
      'Async-first culture, overlapping hours with US, EU, and APAC clients. Work follows the sun.',
    icon: 'globe-2',
  },
  {
    title: 'Cost-Effective Solutions',
    description:
      'Senior offshore rates without the offshore quality drop. Transparent monthly invoicing.',
    icon: 'wallet',
  },
  {
    title: 'Outsourcing Expertise',
    description:
      '5+ years extending in-house teams for SaaS, fintech, and logistics clients across three continents.',
    icon: 'handshake',
  },
];

// ─────────────────────────────  Services  ────────────────────────────────

export const SERVICES = [
  {
    slug: 'web-development',
    title: 'Web Development',
    short: 'High-performance web platforms — marketing sites, dashboards, internal tools.',
    icon: 'globe',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    short: 'iOS and Android apps engineered for app-store-grade reliability.',
    icon: 'smartphone',
  },
  {
    slug: 'flutter-app-development',
    title: 'Flutter App Development',
    short: 'One codebase, native performance — ship to iOS, Android, and web in parallel.',
    icon: 'layers',
  },
  {
    slug: 'android-native-development',
    title: 'Android Native Development',
    short: 'Kotlin/Java apps tuned for Android Jetpack, Material 3, and Play Store standards.',
    icon: 'monitor-smartphone',
  },
  {
    slug: 'backend-development',
    title: 'Backend Development',
    short: 'APIs, services, and data pipelines built for scale and 99.9% uptime.',
    icon: 'server',
  },
  {
    slug: 'ai-solutions',
    title: 'AI-Based Solutions',
    short: 'LLM workflows, RAG, vision, forecasting — production AI, not demos.',
    icon: 'brain-circuit',
  },
  {
    slug: 'saas-product-development',
    title: 'SaaS Product Development',
    short: 'Multi-tenant SaaS from auth and billing to admin tooling and analytics.',
    icon: 'box',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    short: 'Design systems, prototypes, and user research that move conversion.',
    icon: 'palette',
  },
  {
    slug: 'api-development',
    title: 'API Development',
    short: 'REST, GraphQL, and event-driven APIs with full OpenAPI contracts.',
    icon: 'plug',
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    short: 'AWS, GCP, Docker, Kubernetes, CI/CD — infrastructure as code, end to end.',
    icon: 'cloud',
  },
  {
    slug: 'maintenance-support',
    title: 'Maintenance & Support',
    short: 'Bug fixes, version upgrades, security patches, and round-the-clock monitoring.',
    icon: 'life-buoy',
  },
  {
    slug: 'dedicated-developer-hiring',
    title: 'Dedicated Developer Hiring',
    short: 'Hire vetted senior engineers monthly — embedded with your team, managed by us.',
    icon: 'user-plus',
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    short: 'Architecture reviews, tech-stack audits, and roadmaps from senior practitioners.',
    icon: 'briefcase',
  },
  {
    slug: 'outsourcing-services',
    title: 'Outsourcing Services',
    short: 'Offshore development teams that scale up or down on a monthly basis.',
    icon: 'handshake',
  },
];

// ─────────────────────────────  Outsourcing  ─────────────────────────────

export const OUTSOURCING_OFFERS = [
  {
    title: 'Dedicated Remote Developers',
    description:
      'Senior engineers embedded with your team, full-time, on a single monthly invoice.',
    icon: 'user-round-cog',
  },
  {
    title: 'Offshore Development',
    description:
      'Time-zone-aligned squads that work alongside your in-house team, end of day handoffs.',
    icon: 'globe-2',
  },
  {
    title: 'Outsourced IT Teams',
    description:
      'Full-stack squads (PM + design + engineering + QA) delivered as a managed unit.',
    icon: 'users-round',
  },
  {
    title: 'Startup Technical Partnerships',
    description:
      'CTO-as-a-service for early-stage founders — architecture, hiring, and shipping the MVP.',
    icon: 'rocket',
  },
  {
    title: 'Long-Term Development Support',
    description:
      'Multi-year retainer engagements with version upgrades, support SLAs, and roadmap delivery.',
    icon: 'calendar-clock',
  },
];

export const ENGAGEMENT_MODELS = [
  {
    title: 'Fixed-Scope Project',
    description:
      'Defined deliverables, milestones, and price. Best when the spec is locked.',
    bullets: ['Clear SOW', 'Milestone billing', 'Predictable budget'],
  },
  {
    title: 'Dedicated Team',
    description:
      'A full squad on a monthly retainer. Scale up or down with two weeks notice.',
    bullets: ['Monthly invoice', 'Senior engineers', 'You set the roadmap'],
  },
  {
    title: 'Time & Materials',
    description:
      'Hourly billing for evolving scope. Best for R&D, MVPs, and ambiguous problem spaces.',
    bullets: ['Pay only for hours used', 'Maximum flexibility', 'Weekly reports'],
  },
];

// ─────────────────────────────  Technology Stack  ────────────────────────

export type TechCategory = 'Frontend' | 'Mobile' | 'Backend' | 'Database' | 'Cloud & Tools';

export const TECH_STACK: Record<TechCategory, string[]> = {
  Frontend: ['React', 'Next.js', 'HTML/CSS', 'JavaScript', 'TypeScript'],
  Mobile: ['Flutter', 'Android Native', 'Kotlin', 'Java'],
  Backend: ['Node.js', 'Express.js', 'Python', 'Firebase'],
  Database: ['MongoDB', 'MySQL', 'PostgreSQL'],
  'Cloud & Tools': ['AWS', 'Docker', 'GitHub', 'Figma', 'Firebase'],
};

// Slugs for the 6 detail pages we ship now.
export const TECH_DETAIL_SLUGS = [
  'flutter',
  'react',
  'nodejs',
  'ai-solutions',
  'android-native',
  'firebase',
] as const;

// ─────────────────────────────  Case Studies  ────────────────────────────
export const SITE_URL = 'https://www.codentrixa.com';
export const CASE_STUDIES = [
  {
    slug: 'logistics-platform',
    title: 'Real-Time Logistics Tracking Platform',
    category: 'Logistics',
    summary: 'Cut delivery exception rate by 38% for a regional freight operator.',
    problem:
      'A 200-truck freight operator was losing visibility on in-transit cargo, leading to manual phone-tree dispatch and a 12% missed-SLA rate.',
    solution:
      'We shipped a Flutter driver app, a Next.js dispatch console, and a Node.js + PostgreSQL backend with real-time location streaming via WebSockets and an event log on Redis.',
    technologies: ['Flutter', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    outcomes: [
      '38% drop in delivery exceptions over 90 days',
      '4-second median dispatch latency, down from 6 minutes',
      'Onboarded 240 drivers with < 5 support tickets per week',
    ],
  },
  {
    slug: 'ai-document-intel',
    title: 'AI Document Intelligence for Insurance Claims',
    category: 'AI Applications',
    summary: 'Automated 70% of first-pass claim review for a mid-market insurer.',
    problem:
      'Claims adjusters were spending 4 hours per file extracting structured data from PDFs, photos, and scanned forms.',
    solution:
      'We built a RAG pipeline on top of GPT-4 with a custom OCR layer, a review UI, and a feedback loop that retrains the extraction prompts weekly.',
    technologies: ['Python', 'Next.js', 'PostgreSQL', 'AWS', 'OpenAI'],
    outcomes: [
      '70% of files cleared without human review',
      'Adjuster handling time down from 4h to 35min',
      'ROI achieved in month 4',
    ],
  },
  {
    slug: 'fitness-mobile-app',
    title: 'Cross-Platform Fitness App',
    category: 'Mobile Apps',
    summary: '4.8★ on both stores, 110k installs in the first six months.',
    problem:
      'A boutique studio chain needed a single app for class booking, workout tracking, and live-stream sessions across iOS and Android.',
    solution:
      'Flutter app with offline-first state, Firebase auth, Stripe checkout, and an Agora-powered live-class layer. Admin console in Next.js.',
    technologies: ['Flutter', 'Firebase', 'Stripe', 'Agora', 'Next.js'],
    outcomes: [
      '4.8★ average across iOS + Android',
      '110k installs in 6 months',
      '32% week-1 retention',
    ],
  },
  {
    slug: 'b2b-marketplace',
    title: 'B2B Wholesale Marketplace',
    category: 'Business Platforms',
    summary: '$2.1M GMV processed in the first quarter post-launch.',
    problem:
      'A wholesale distributor needed to move from EDI + spreadsheets to a self-serve buyer portal with negotiated pricing tiers.',
    solution:
      'Next.js storefront, Node.js backend, MongoDB for catalog, Stripe Connect for split payouts, and an admin pricing engine for sales reps.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe Connect', 'AWS'],
    outcomes: [
      '$2.1M GMV in first quarter',
      '420 active buyers onboarded',
      '60% reduction in order-entry errors',
    ],
  },
  {
    slug: 'analytics-saas',
    title: 'Multi-Tenant Analytics SaaS',
    category: 'SaaS Systems',
    summary: 'From zero to 80 paying tenants in 9 months.',
    problem:
      'An ad-tech founder had a working notebook prototype but no production-ready multi-tenant SaaS to sell.',
    solution:
      'We built the full SaaS shell — auth, RBAC, billing, admin console, usage metering — and migrated the analytics engine into a queue-backed worker fleet.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    outcomes: [
      '80 paying tenants in 9 months',
      '99.95% measured uptime',
      '< 200ms median dashboard load',
    ],
  },
];

export const CASE_STUDY_CATEGORIES = [
  'All',
  'Logistics',
  'AI Applications',
  'Mobile Apps',
  'Business Platforms',
  'SaaS Systems',
];

// ─────────────────────────────  Testimonials  ────────────────────────────

export const TESTIMONIALS = [
  {
    name: 'Priya Natarajan',
    role: 'VP Engineering',
    company: 'Cargolane Logistics',
    rating: 5,
    quote:
      'Codentrixa shipped our driver app and dispatch console in nine weeks. They flagged risks we hadn\'t even identified yet. Worth every dollar.',
    avatar: 'PN',
  },
  {
    name: 'Daniel Okafor',
    role: 'Founder & CEO',
    company: 'Northwind Insurance',
    rating: 5,
    quote:
      'We hired them as a one-quarter outsourcing engagement. Eighteen months later they own three production systems and our claims team can\'t imagine working without them.',
    avatar: 'DO',
  },
  {
    name: 'Lena Hofstetter',
    role: 'CTO',
    company: 'Pulsefit Studios',
    rating: 5,
    quote:
      'A 4.8 rating on both app stores tells you everything. The Flutter team delivered native-grade quality without the dual-codebase tax.',
    avatar: 'LH',
  },
  {
    name: 'Marcus Chen',
    role: 'Head of Product',
    company: 'Wholepath Marketplace',
    rating: 5,
    quote:
      'They sat in our standups, owned the roadmap, pushed back on bad ideas. Felt like an extension of our team, not a vendor.',
    avatar: 'MC',
  },
];

// ─────────────────────────────  Hiring Process  ──────────────────────────

export const HIRING_PROCESS = [
  { step: 1, title: 'Apply', description: 'Submit your application, CV, and a few links to your work.' },
  { step: 2, title: 'Initial Discussion', description: '30-min call with a hiring manager to align on role, comp, and goals.' },
  { step: 3, title: 'Technical Round', description: 'Pair on a realistic problem from one of our codebases — no algorithm trivia.' },
  { step: 4, title: 'Final Interview', description: 'Meet the team you\'d join. Two-way fit check.' },
  { step: 5, title: 'Offer Letter', description: 'Written offer within 48 hours of the final round.' },
];

// ─────────────────────────────  Careers  ─────────────────────────────────

export const WORK_CULTURE = [
  { title: 'Remote-First Culture', icon: 'globe-2' },
  { title: 'Flexible Working Hours', icon: 'clock' },
  { title: 'Learning Opportunities', icon: 'graduation-cap' },
  { title: 'Friendly Environment', icon: 'heart-handshake' },
  { title: 'Growth-Focused Team', icon: 'trending-up' },
  { title: 'Innovation-Driven Culture', icon: 'lightbulb' },
];

export const PERKS_BENEFITS = [
  { title: 'Remote Job Opportunities', icon: 'house' },
  { title: 'Flexible Timing', icon: 'clock' },
  { title: 'Performance Bonuses', icon: 'badge-dollar-sign' },
  { title: 'Learning Support', icon: 'graduation-cap' },
  { title: 'Career Growth', icon: 'trending-up' },
  { title: 'Friendly Team Culture', icon: 'users-round' },
];

export const OPEN_POSITIONS = [
  {
    slug: 'flutter-developer',
    title: 'Flutter Developer',
    type: 'Full-time',
    location: 'Remote · Global',
    experience: '2+ years',
    short:
      'Build production Flutter apps for fintech, logistics, and SaaS clients. Comfortable with Riverpod or BLoC, REST/GraphQL, and shipping to both stores.',
    responsibilities: [
      'Own feature delivery from spec to release',
      'Write clean, tested Dart — we keep > 70% coverage',
      'Pair with backend on API contracts',
      'Mentor junior engineers',
    ],
    requirements: [
      '2+ years shipping Flutter apps in production',
      'Solid understanding of state management (Riverpod / BLoC)',
      'Experience with Firebase / REST / GraphQL',
      'Comfortable in async-first, written-communication-heavy teams',
    ],
  },
  {
    slug: 'business-developer',
    title: 'Business Developer',
    type: 'Full-time',
    location: 'Remote · Global',
    experience: '3+ years',
    short:
      'Own outbound to mid-market SaaS, logistics, and fintech prospects. Run discovery, scope deals with our delivery team, and close.',
    responsibilities: [
      'Build and run outbound sequences end to end',
      'Lead discovery + scoping calls with founders and CTOs',
      'Partner with delivery on SOWs and engagement models',
      'Own the pipeline in our CRM and report weekly',
    ],
    requirements: [
      '3+ years selling B2B services or software',
      'Comfortable talking specs with technical buyers',
      'Disciplined CRM hygiene',
      'Strong written English',
    ],
  },
];

// ─────────────────────────────  Social  ──────────────────────────────────

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/codentrixa', icon: 'linkedin' },
  // { name: 'GitHub', href: 'https://github.com/', icon: 'github' },
  { name: 'Twitter', href: 'https://x.com/codentrixa47574', icon: 'twitter' },
  // { name: 'Instagram', href: 'https://instagram.com/', icon: 'instagram' },
];

// ─────────────────────────────  Footer Sections  ─────────────────────────

export const FOOTER_SECTIONS = {
  services: [
    { label: 'Web Development', href: '/services#web-development' },
    { label: 'Mobile App Development', href: '/services#mobile-app-development' },
    { label: 'AI-Based Solutions', href: '/services#ai-solutions' },
    { label: 'SaaS Product Development', href: '/services#saas-product-development' },
    { label: 'Cloud & DevOps', href: '/services#cloud-devops' },
    { label: 'Outsourcing Services', href: '/outsourcing' },
  ],
  technologies: [
    { label: 'Flutter Development', href: '/technologies/flutter' },
    { label: 'React Development', href: '/technologies/react' },
    { label: 'Node.js Backend', href: '/technologies/nodejs' },
    { label: 'AI Solutions', href: '/technologies/ai-solutions' },
    { label: 'Android Native', href: '/technologies/android-native' },
    { label: 'Firebase Development', href: '/technologies/firebase' },
  ],
  company: [
    { label: 'About', href: '/#why-choose-us' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    // { label: 'Privacy Policy', href: '/privacy' },
    // { label: 'Terms & Conditions', href: '/terms' },
  ],
};
