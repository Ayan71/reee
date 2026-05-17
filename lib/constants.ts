// ─────────────────────────────────────────────────────────────────────────
//  Codentrixa — site-wide content constants
//  Light theme: #FAFAF8 / #F4EFE9 / #FFFFFF / accent #F55C1A
// ─────────────────────────────────────────────────────────────────────────

export const COMPANY_NAME = 'Codentrixa';
export const COMPANY_TAGLINE = 'Engineering enterprise-grade software, on time, on scope.';
export const COMPANY_EMAIL = 'contact@codentrixa.com';
export const COMPANY_PHONE = '+1 (555) 000-0100';
export const COMPANY_WHATSAPP = '+15550000100';
export const COMPANY_ADDRESS = 'Remote · Global · Distributed across 8+ time zones';

// ─────────────────────────────  Navigation  ──────────────────────────────

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Outsourcing', href: '/outsourcing' },
  { label: 'Technologies', href: '/#technologies' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Enterprise-style top nav with mega-menu groups. Each entry can be a flat
 * link or a dropdown with grouped columns — mirroring how Accenture / Cognizant
 * organize their primary navigation.
 */
export type NavMenuColumn = {
  heading: string;
  items: { label: string; href: string; description?: string }[];
};

export type NavMenuItem =
  | { kind: 'link'; label: string; href: string }
  | {
      kind: 'mega';
      label: string;
      /** Featured promo card shown on the left of the mega-menu. */
      feature: {
        eyebrow: string;
        title: string;
        body: string;
        href: string;
        cta: string;
      };
      columns: NavMenuColumn[];
    };

export const NAV_MENU: NavMenuItem[] = [
  {
    kind: 'mega',
    label: 'What we do',
    feature: {
      eyebrow: 'Featured',
      title: 'Engineering enterprise-grade software',
      body: 'Senior squads delivering web, mobile, AI, and cloud — end to end, on a single monthly engagement.',
      href: '/services',
      cta: 'Explore services',
    },
    columns: [
      {
        heading: 'Build',
        items: [
          { label: 'Web Development', href: '/services#web-development', description: 'High-performance web platforms & dashboards.' },
          { label: 'Mobile App Development', href: '/services#mobile-app-development', description: 'iOS, Android, and Flutter apps.' },
          { label: 'AI-Based Solutions', href: '/services#ai-solutions', description: 'LLMs, RAG, vision, forecasting in production.' },
          { label: 'SaaS Product Development', href: '/services#saas-product-development', description: 'Multi-tenant SaaS from auth to billing.' },
        ],
      },
      {
        heading: 'Operate',
        items: [
          { label: 'Cloud & DevOps', href: '/services#cloud-devops', description: 'AWS, GCP, IaC, observability.' },
          { label: 'API Development', href: '/services#api-development', description: 'REST, GraphQL, event-driven services.' },
          { label: 'Maintenance & Support', href: '/services#maintenance-support', description: 'Bug fixes, upgrades, 24/7 monitoring.' },
          { label: 'IT Consulting', href: '/services#it-consulting', description: 'Audits, roadmaps, architecture reviews.' },
        ],
      },
    ],
  },
  {
    kind: 'mega',
    label: 'Hire developers',
    feature: {
      eyebrow: 'Outsourcing',
      title: 'A senior squad on a monthly invoice',
      body: 'Extend your in-house team with vetted engineers — same time zones, same cadence, no recruiters.',
      href: '/outsourcing',
      cta: 'See engagement models',
    },
    columns: [
      {
        heading: 'Engagement',
        items: [
          { label: 'Dedicated Remote Developers', href: '/outsourcing#dedicated', description: 'Embedded engineers on a monthly retainer.' },
          { label: 'Outsourced IT Teams', href: '/outsourcing#teams', description: 'PM + design + engineering + QA as a unit.' },
          { label: 'Offshore Development', href: '/outsourcing#offshore', description: 'Time-zone-aligned squads with daily hand-offs.' },
        ],
      },
      {
        heading: 'Partnerships',
        items: [
          { label: 'Startup Technical Partnership', href: '/outsourcing#startup', description: 'CTO-as-a-service from MVP to scale.' },
          { label: 'Long-Term Support', href: '/outsourcing#longterm', description: 'Multi-year retainers with SLAs.' },
          { label: 'Dedicated Hiring', href: '/services#dedicated-developer-hiring', description: 'We vet, you choose, we manage.' },
        ],
      },
    ],
  },
  {
    kind: 'mega',
    label: 'Technologies',
    feature: {
      eyebrow: 'Tech stack',
      title: 'Battle-tested choices, not framework chasing',
      body: 'Modern stack, written down: Flutter, React, Node, Python, AWS. Senior engineers, every layer.',
      href: '/#technologies',
      cta: 'View full stack',
    },
    columns: [
      {
        heading: 'Frontend & Mobile',
        items: [
          { label: 'Flutter Development', href: '/technologies/flutter' },
          { label: 'React Development', href: '/technologies/react' },
          { label: 'Android Native', href: '/technologies/android-native' },
        ],
      },
      {
        heading: 'Backend & AI',
        items: [
          { label: 'Node.js Backend', href: '/technologies/nodejs' },
          { label: 'AI Solutions', href: '/technologies/ai-solutions' },
          { label: 'Firebase Development', href: '/technologies/firebase' },
        ],
      },
    ],
  },
  {
    kind: 'mega',
    label: 'Insights',
    feature: {
      eyebrow: 'Live work',
      title: 'See the apps we have put on the stores',
      body: 'Real engagements with linked Play Store, App Store, and live web products — not portfolio screenshots.',
      href: '/case-studies',
      cta: 'View case studies',
    },
    columns: [
      {
        heading: 'Our work',
        items: [
          { label: 'Case Studies', href: '/case-studies', description: 'Live products and engagements.' },
          { label: 'Deal Connect', href: '/case-studies#deal-connect', description: 'Real-estate deal-flow app.' },
          { label: 'BreadKrumb', href: '/case-studies#breadkrumb', description: 'iOS travel planner.' },
          { label: 'Smart Stock ERP', href: '/case-studies#smart-stock-erp', description: 'Inventory + business management.' },
        ],
      },
      {
        heading: 'Resources',
        items: [
          { label: 'Blog', href: '/blog', description: 'AI, modern engineering, and delivery.' },
          { label: 'Careers', href: '/careers', description: 'Open roles across engineering & growth.' },
          { label: 'Contact', href: '/contact', description: 'Tell us what you are building.' },
        ],
      },
    ],
  },
  { kind: 'link', label: 'Contact', href: '/contact' },
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

export type CaseStudyLink = {
  /** Display label, e.g. "Google Play" or "App Store" or "Live Site". */
  label: string;
  /** Public URL. */
  href: string;
  /** Icon key consumed by the card renderer. */
  icon: 'play' | 'apple' | 'globe' | 'external';
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  outcomes: string[];
  /** Live, published links (Play Store / App Store / website). */
  links?: CaseStudyLink[];
  /** Visible "verified / live" badge label. */
  status?: 'Live in production' | 'In production' | 'Maintenance';
  /** Optional client / brand name shown above the title. */
  client?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'deal-connect',
    client: 'Deal Connect — DAISI Technology',
    title: 'Deal Connect — Real-Estate Deal Sourcing & Analysis App',
    category: 'Real Estate',
    summary:
      'A Flutter + Node.js platform that helps real-estate investors source, analyze, and close deals — powered by DAISI Technology.',
    problem:
      'Investors spend hours each week trawling listings, juggling spreadsheets, and chasing analysis on each deal — the work is repetitive, fragmented across tools, and hard to do well alongside a day job.',
    solution:
      'We built a cross-platform Flutter app (iOS + Android) and a Node.js + PostgreSQL backend on AWS that surfaces curated deals, runs underwriting math in-app, and lets users save, compare, and shortlist properties. DAISI Technology powers the deal-scoring layer and the in-app analysis assistant.',
    technologies: ['Flutter', 'Node.js', 'Express', 'PostgreSQL', 'AWS', 'Firebase'],
    outcomes: [
      'Live on the Google Play Store',
      'Cross-platform Flutter codebase — single team, two stores',
      'Node.js API on AWS with sub-200ms median deal-search latency',
    ],
    status: 'Live in production',
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.dealbuyer.bit19',
        icon: 'play',
      },
    ],
  },
  {
    slug: 'breadkrumb',
    client: 'BreadKrumb',
    title: 'BreadKrumb — Share Your Trip',
    category: 'Mobile Apps',
    summary:
      'A travel-planning iOS app that lets travelers organize trips, save favorite places, and keep a detailed travel log with notes and pictures.',
    problem:
      'Frequent travelers were stitching their itineraries together across Notes, Maps pins, and photo albums — losing context the moment a trip ended. They wanted one place to plan, log, and share trips end-to-end.',
    solution:
      'A native-feeling iOS app for itinerary building, pin-based location saves, photo + note travel logs, and trip sharing. Backed by a Node.js API deployed on AWS for auth, sync, media storage, and trip-sharing endpoints.',
    technologies: ['iOS', 'Swift', 'Node.js', 'AWS', 'S3', 'Express'],
    outcomes: [
      'Live on the Apple App Store',
      'Node.js backend deployed on AWS with media stored on S3',
      'Offline-first trip log with seamless cloud sync',
    ],
    status: 'Live in production',
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/in/app/breadkrumb-travel-planner/id6444889553',
        icon: 'apple',
      },
    ],
  },
  {
    slug: 'smart-stock-erp',
    client: 'Smart Stock ERP',
    title: 'Smart Stock ERP — Inventory & Business Management',
    category: 'SaaS Systems',
    summary:
      'A complete inventory and business management ERP for small and medium businesses — retail shops, warehouses, and distributors.',
    problem:
      'SMBs running retail and warehouse operations were stuck between paper, Excel, and over-engineered ERPs. They needed one easy-to-use system to track stock, sales, vendors, and customers without a six-month rollout.',
    solution:
      'A Flutter app paired with a web portal at smartstockserp.com, giving owners full inventory control, billing, vendor and customer ledgers, GST-compliant invoicing, and live sales reports — usable from day one without consultants.',
    technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'REST API', 'AWS', 'Web Portal'],
    outcomes: [
      'Live on the Apple App Store + web portal',
      'End-to-end inventory, billing, and reporting in one product',
      'Designed for retail, warehouse, and distribution use cases',
    ],
    status: 'Live in production',
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/in/app/smartstocks-erp/id6763240767',
        icon: 'apple',
      },
      {
        label: 'Web App',
        href: 'https://smartstockserp.com/#/splash',
        icon: 'globe',
      },
    ],
  },
  {
    slug: 'ai-document-intel',
    title: 'AI Document Intelligence for Claims Workflows',
    category: 'AI Applications',
    summary: 'A retrieval-augmented document pipeline that automates first-pass claim review.',
    problem:
      'Operations teams were spending hours per file extracting structured data from PDFs, photos, and scanned forms — slowing SLAs and blocking automation.',
    solution:
      'A RAG pipeline on top of GPT-4 with a custom OCR layer, a review UI for human-in-the-loop QA, and a feedback loop that retrains the extraction prompts weekly.',
    technologies: ['Python', 'Next.js', 'PostgreSQL', 'AWS', 'OpenAI'],
    outcomes: [
      '70% of files cleared without human review',
      'Handling time down from 4h to 35min',
      'ROI achieved in month 4',
    ],
    status: 'In production',
  },
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
    status: 'In production',
  },
];

export const CASE_STUDY_CATEGORIES = [
  'All',
  'Real Estate',
  'Mobile Apps',
  'SaaS Systems',
  'AI Applications',
  'Logistics',
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
  { name: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { name: 'GitHub', href: 'https://github.com/', icon: 'github' },
  { name: 'Twitter', href: 'https://twitter.com/', icon: 'twitter' },
  { name: 'Instagram', href: 'https://instagram.com/', icon: 'instagram' },
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
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Cookie Policy', href: '/privacy-policy#cookies' },
  ],
};
