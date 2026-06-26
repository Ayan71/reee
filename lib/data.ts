// =====================================================
// CODENTRIXA — ENTERPRISE SITE DATA
// =====================================================

// ---------- Navigation ----------
export const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Outsourcing', href: '/#outsourcing' },
  { label: 'Technologies', href: '/#technologies' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/#contact' },
];

export const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
  { name: 'GitHub', href: '#', icon: 'github' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
];

// ---------- Trust / Stats ----------
export const stats = [
  { value: '10+', label: 'Projects Live', sub: 'In production worldwide' },
  { value: '2', label: 'Permanent Clients', sub: 'Long-term partnerships' },
  { value: '12+', label: 'Technologies', sub: 'Modern, battle-tested stack' },
  { value: '100%', label: 'Remote Capable', sub: 'Distributed delivery teams' },
  { value: '< 48h', label: 'Avg. First Response', sub: 'Fast onboarding & support' },
];

// ---------- Why Choose Us ----------
export const whyChooseUs = [
  {
    title: 'Dedicated Development Team',
    description: 'Senior engineers assigned to your project full-time, embedded with your roadmap.',
    icon: 'users',
  },
  {
    title: 'Modern Tech Stack',
    description: 'React, Next.js, Flutter, Node, Python, AWS — production-grade stack for every layer.',
    icon: 'code-2',
  },
  {
    title: 'Agile Workflow',
    description: 'Two-week sprints, weekly demos, transparent backlog. Predictable delivery, no surprises.',
    icon: 'refresh-cw',
  },
  {
    title: 'Scalable Architecture',
    description: 'Systems designed to grow with you — from MVP to millions of users without rewrites.',
    icon: 'trending-up',
  },
  {
    title: 'Fast Communication',
    description: 'Slack, Teams, or Discord — daily syncs, real-time updates, 4-hour response SLA.',
    icon: 'message-square',
  },
  {
    title: 'Client-Centric Development',
    description: 'Your goals drive every decision. We ship business outcomes, not just code.',
    icon: 'target',
  },
  {
    title: 'Long-Term Support',
    description: 'Maintenance, monitoring, and evolution post-launch. We stay with you for the long run.',
    icon: 'shield-check',
  },
  {
    title: 'Remote Collaboration',
    description: 'Distributed-first workflows with overlapping hours across US, EU, and APAC time zones.',
    icon: 'globe',
  },
  {
    title: 'Cost-Effective Solutions',
    description: 'Engagement models that scale with budget — fixed scope, T&M, or dedicated teams.',
    icon: 'wallet',
  },
  {
    title: 'Outsourcing Expertise',
    description: 'Battle-tested processes for offshore delivery — IP-safe, compliant, and predictable.',
    icon: 'briefcase',
  },
];

// ---------- Services ----------
export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'High-performance web platforms built on Next.js and React with bullet-proof TypeScript.',
    icon: 'globe',
    highlights: ['SSR / SSG', 'SEO optimized', 'Core Web Vitals'],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'iOS and Android apps engineered for performance, usability, and store-ready quality.',
    icon: 'smartphone',
    highlights: ['Native UX', 'Push notifications', 'In-app payments'],
  },
  {
    slug: 'flutter-app-development',
    title: 'Flutter App Development',
    description: 'Beautiful cross-platform Flutter apps from a single codebase — iOS, Android, web.',
    icon: 'layers',
    highlights: ['One codebase', 'Smooth 60fps UX', 'Rapid iteration'],
  },
  {
    slug: 'android-native',
    title: 'Android Native Development',
    description: 'Kotlin-first native Android apps with deep platform integration and Material 3 UI.',
    icon: 'tablet',
    highlights: ['Jetpack Compose', 'Kotlin Multiplatform', 'Play Store ready'],
  },
  {
    slug: 'backend-development',
    title: 'Backend Development',
    description: 'Reliable APIs and services on Node, Express, Python, and Firebase — secure by design.',
    icon: 'server',
    highlights: ['REST & GraphQL', 'Auth & RBAC', 'Observability'],
  },
  {
    slug: 'ai-solutions',
    title: 'AI-Based Solutions',
    description: 'LLM-powered products, ML pipelines, and intelligent automation for real business value.',
    icon: 'sparkles',
    highlights: ['LLM agents', 'RAG pipelines', 'Vector search'],
  },
  {
    slug: 'saas-product-development',
    title: 'SaaS Product Development',
    description: 'End-to-end SaaS — auth, billing, multi-tenant, analytics — ready for paying customers.',
    icon: 'rocket',
    highlights: ['Stripe billing', 'Multi-tenancy', 'Admin & metrics'],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Research-driven design systems and conversion-focused interfaces that delight users.',
    icon: 'palette',
    highlights: ['Design systems', 'Prototypes', 'User testing'],
  },
  {
    slug: 'api-development',
    title: 'API Development',
    description: 'Versioned, documented, performant APIs — REST, GraphQL, gRPC — built to integrate.',
    icon: 'plug',
    highlights: ['OpenAPI specs', 'Rate limiting', 'SDK generation'],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'AWS-first cloud architecture with Docker, CI/CD, IaC, and 24/7 monitoring.',
    icon: 'cloud',
    highlights: ['AWS / GCP', 'Terraform', 'CI/CD pipelines'],
  },
  {
    slug: 'maintenance-support',
    title: 'Maintenance & Support',
    description: 'Proactive monitoring, security patches, and feature evolution after launch.',
    icon: 'wrench',
    highlights: ['SLA-backed', '24/7 monitoring', 'Quarterly audits'],
  },
  {
    slug: 'dedicated-developer-hiring',
    title: 'Dedicated Developer Hiring',
    description: 'Hire pre-vetted developers monthly — they work as a true extension of your team.',
    icon: 'user-plus',
    highlights: ['Vetted talent', 'Monthly model', 'Direct comms'],
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    description: 'Architecture reviews, technology audits, and roadmap planning by senior engineers.',
    icon: 'compass',
    highlights: ['Tech audits', 'Roadmaps', 'Cost optimization'],
  },
  {
    slug: 'outsourcing-services',
    title: 'Outsourcing Services',
    description: 'Offshore engineering teams operating like in-house — flexible, scalable, accountable.',
    icon: 'building-2',
    highlights: ['Time-zone overlap', 'IP-safe', 'Flexible scale'],
  },
];

// ---------- Outsourcing ----------
export const outsourcingOfferings = [
  {
    title: 'Dedicated Remote Developers',
    description: 'Hire vetted developers full-time, integrated into your daily standups and tools.',
    icon: 'user-check',
  },
  {
    title: 'Offshore Development',
    description: 'Cost-efficient engineering capacity from our delivery centers, managed end-to-end.',
    icon: 'globe-2',
  },
  {
    title: 'Outsourced IT Teams',
    description: 'Full pods — engineers, QA, designers, PM — running an entire workstream for you.',
    icon: 'users-round',
  },
  {
    title: 'Startup Technical Partnerships',
    description: 'CTO-as-a-service for early-stage startups — architecture, hiring, and shipping MVP.',
    icon: 'rocket',
  },
  {
    title: 'Long-Term Development Support',
    description: 'Multi-year engagements with stable teams that learn your domain deeply.',
    icon: 'infinity',
  },
];

export const engagementModels = [
  {
    name: 'Dedicated Team',
    blurb: 'Full-time, exclusive engineers managed by us, working only on your product.',
    bullet: 'Best for: ongoing roadmaps',
  },
  {
    name: 'Time & Materials',
    blurb: 'Pay for actual hours worked. Maximum flexibility for evolving requirements.',
    bullet: 'Best for: discovery & R&D',
  },
  {
    name: 'Fixed Scope',
    blurb: 'Locked-in scope, timeline, and price for clearly defined deliverables.',
    bullet: 'Best for: well-defined MVPs',
  },
  {
    name: 'Monthly Hiring',
    blurb: 'Roll-on / roll-off engineers with 30-day notice and zero recruitment hassle.',
    bullet: 'Best for: scaling teams',
  },
];

// ---------- Technologies ----------
export const techCategories = [
  {
    name: 'Frontend',
    items: [
      { name: 'React', slug: 'react', short: 'UI library' },
      { name: 'Next.js', slug: 'nextjs', short: 'React framework' },
      { name: 'TypeScript', slug: 'typescript', short: 'Typed JS' },
      { name: 'JavaScript', slug: 'javascript', short: 'Web standard' },
      { name: 'HTML / CSS', slug: 'html-css', short: 'Web fundamentals' },
    ],
  },
  {
    name: 'Mobile',
    items: [
      { name: 'Flutter', slug: 'flutter', short: 'Cross-platform' },
      { name: 'Android Native', slug: 'android-native', short: 'Kotlin / Java' },
      { name: 'Kotlin', slug: 'kotlin', short: 'Modern Android' },
      { name: 'Java', slug: 'java', short: 'Enterprise mobile' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { name: 'Node.js', slug: 'nodejs', short: 'JS runtime' },
      { name: 'Express.js', slug: 'expressjs', short: 'Node framework' },
      { name: 'Python', slug: 'python', short: 'AI & APIs' },
      { name: 'Firebase', slug: 'firebase', short: 'BaaS' },
    ],
  },
  {
    name: 'Database',
    items: [
      { name: 'MongoDB', slug: 'mongodb', short: 'Document DB' },
      { name: 'MySQL', slug: 'mysql', short: 'Relational' },
      { name: 'PostgreSQL', slug: 'postgresql', short: 'Advanced SQL' },
    ],
  },
  {
    name: 'Cloud & Tools',
    items: [
      { name: 'AWS', slug: 'aws', short: 'Cloud platform' },
      { name: 'Docker', slug: 'docker', short: 'Containers' },
      { name: 'GitHub', slug: 'github', short: 'Source control' },
      { name: 'Figma', slug: 'figma', short: 'Design' },
      { name: 'Firebase', slug: 'firebase-tool', short: 'Realtime' },
    ],
  },
];

// ---------- Tech Detail Pages ----------
export type TechDetail = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  overview: string;
  whyChoose: { title: string; description: string }[];
  features: string[];
  useCases: string[];
  process: { step: string; description: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const techDetails: Record<string, TechDetail> = {
  flutter: {
    slug: 'flutter',
    name: 'Flutter Development',
    category: 'Mobile',
    tagline: 'Beautiful cross-platform apps from one codebase.',
    overview:
      'Flutter is Google\'s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. We deliver Flutter apps with pixel-perfect interfaces, smooth 60fps animations, and store-ready quality on iOS and Android simultaneously.',
    whyChoose: [
      { title: 'One codebase, two platforms', description: 'Ship to iOS and Android together, halving time-to-market without sacrificing UX.' },
      { title: 'Native performance', description: 'Compiled to native ARM — silky 60fps animations and full hardware access.' },
      { title: 'Rich ecosystem', description: 'Thousands of plugins, official Material 3 and Cupertino widgets, deep tooling.' },
      { title: 'Faster iteration', description: 'Hot reload accelerates UI work, shrinking design-to-code feedback loops.' },
    ],
    features: [
      'Custom widgets & design systems',
      'Bloc / Riverpod state management',
      'Firebase & REST integration',
      'Push notifications & deep linking',
      'In-app purchases & Stripe',
      'Offline-first sync',
      'Bluetooth, camera, biometrics',
      'Play Store & App Store submission',
    ],
    useCases: [
      'Consumer marketplaces',
      'On-demand & logistics apps',
      'Healthcare patient apps',
      'Fintech & wallets',
      'Social & community apps',
      'Internal enterprise tools',
    ],
    process: [
      { step: 'Discovery', description: 'Workshop your goals, audience, platform requirements, and KPIs.' },
      { step: 'UX & UI Design', description: 'Wireframes, prototypes, and a design system tested with real users.' },
      { step: 'Development', description: 'Two-week sprints, weekly demos, code reviews, and CI/CD from day one.' },
      { step: 'QA & Release', description: 'Automated and manual testing on real devices, staged rollouts, store launch.' },
      { step: 'Support', description: 'Crash monitoring, performance tuning, feature iteration post-launch.' },
    ],
    faqs: [
      { q: 'Is Flutter ready for production?', a: 'Yes — Google Pay, Alibaba, BMW, eBay, and many others ship Flutter at scale.' },
      { q: 'How does Flutter compare to React Native?', a: 'Flutter typically delivers smoother animations and more consistent UI across platforms because it draws every pixel itself.' },
      { q: 'Can you publish to both stores?', a: 'Yes, we handle Apple App Store and Google Play submission, including review and release strategy.' },
      { q: 'Do you support existing Flutter apps?', a: 'Absolutely — we audit, refactor, and extend existing Flutter codebases as a maintenance partner.' },
    ],
    related: ['react', 'firebase', 'nodejs'],
  },
  react: {
    slug: 'react',
    name: 'React Development',
    category: 'Frontend',
    tagline: 'Component-driven UIs that scale.',
    overview:
      'React powers the world\'s most popular product UIs. We build React applications with TypeScript, modern hooks, server components, and design-system-grade architecture — fast on first paint, fast to evolve.',
    whyChoose: [
      { title: 'Massive ecosystem', description: 'The largest UI ecosystem in the world — components, tooling, talent.' },
      { title: 'Composable architecture', description: 'Reusable components map naturally to your design system and product.' },
      { title: 'Performance', description: 'Concurrent rendering, code splitting, and streaming SSR via Next.js.' },
      { title: 'Future-proof', description: 'Backed by Meta, evolving steadily — your investment compounds.' },
    ],
    features: [
      'TypeScript-first codebases',
      'Server & client components',
      'Storybook design systems',
      'Tailwind & shadcn/ui',
      'Form handling & validation',
      'Auth (NextAuth / Clerk)',
      'Realtime via WebSockets',
      'Accessibility (WCAG 2.1)',
    ],
    useCases: [
      'SaaS dashboards',
      'Marketing sites',
      'Admin panels',
      'E-commerce storefronts',
      'Internal tools',
      'Customer portals',
    ],
    process: [
      { step: 'Architecture', description: 'Component model, routing, state, data — designed for scale up front.' },
      { step: 'Design system', description: 'Tokens, primitives, and patterns that keep the UI consistent forever.' },
      { step: 'Build', description: 'Iterative sprints, TypeScript, code reviews, CI checks on every PR.' },
      { step: 'Optimize', description: 'Bundle analysis, image optimization, Core Web Vitals tuning.' },
      { step: 'Ship & iterate', description: 'Vercel / Netlify / AWS deployment with preview environments.' },
    ],
    faqs: [
      { q: 'React or Next.js?', a: 'For most production sites we recommend Next.js — it includes routing, SSR, and image optimization out of the box.' },
      { q: 'Will React still be relevant in 5 years?', a: 'React has the largest mindshare and corporate backing in frontend; it is a safe long-term bet.' },
      { q: 'Can you migrate from Angular / jQuery?', a: 'Yes — we handle incremental migrations so you can ship continuously during the move.' },
    ],
    related: ['nextjs', 'typescript', 'nodejs'],
  },
  nodejs: {
    slug: 'nodejs',
    name: 'Node.js Backend',
    category: 'Backend',
    tagline: 'Fast, event-driven APIs and services.',
    overview:
      'Node.js is the backbone of modern API platforms. We build production Node services with Express, NestJS, or Fastify — typed end-to-end with TypeScript, observable, and ready for cloud deployment.',
    whyChoose: [
      { title: 'Single language', description: 'JavaScript/TypeScript across frontend and backend simplifies hiring and ownership.' },
      { title: 'High throughput', description: 'Non-blocking I/O excels at API gateways, realtime, and streaming workloads.' },
      { title: 'Huge ecosystem', description: 'NPM has a package for everything — battle-tested at every scale.' },
      { title: 'Cloud native', description: 'First-class support on AWS Lambda, Cloud Run, and Vercel functions.' },
    ],
    features: [
      'REST & GraphQL APIs',
      'Auth (JWT, OAuth, SSO)',
      'Stripe & payment processing',
      'Background jobs & queues',
      'Realtime via Socket.io',
      'Database integrations',
      'OpenAPI documentation',
      'Logging, metrics, tracing',
    ],
    useCases: [
      'API platforms',
      'Realtime apps (chat, collab)',
      'BFF / API gateways',
      'Microservices',
      'Webhooks & integrations',
      'Streaming pipelines',
    ],
    process: [
      { step: 'API design', description: 'OpenAPI-first design with versioning, error contracts, and pagination patterns.' },
      { step: 'Implementation', description: 'TypeScript, dependency injection, and a clean layered architecture.' },
      { step: 'Testing', description: 'Unit, integration, and contract tests run on every PR.' },
      { step: 'Deploy', description: 'Containerized, infrastructure-as-code, blue/green or canary releases.' },
      { step: 'Operate', description: 'Dashboards, alerts, on-call rotations — production-grade ops.' },
    ],
    faqs: [
      { q: 'Node or Python for backend?', a: 'For high-concurrency APIs we lean Node; for ML or heavy data work we lean Python. Often we use both.' },
      { q: 'Do you deploy on AWS?', a: 'Yes — we are AWS-first (ECS, Lambda, RDS) and also support GCP and Azure.' },
      { q: 'How do you handle scaling?', a: 'Horizontal scaling, queue offload, caching at every layer, and load testing before launch.' },
    ],
    related: ['react', 'mongodb', 'aws'],
  },
  'ai-solutions': {
    slug: 'ai-solutions',
    name: 'AI Solutions',
    category: 'Intelligence',
    tagline: 'LLMs and ML that ship business value.',
    overview:
      'We design, build, and deploy AI products — from RAG-powered assistants and intelligent agents to custom ML pipelines. Our work focuses on measurable outcomes: deflection rates, conversion lift, time saved.',
    whyChoose: [
      { title: 'Production-grade LLMs', description: 'Beyond demos — eval harnesses, guardrails, and observability for real users.' },
      { title: 'RAG done right', description: 'High-quality retrieval, chunking, and re-ranking that answers actually trust.' },
      { title: 'Cost-aware', description: 'We architect for token economics — caching, routing, and right-sized models.' },
      { title: 'Domain-tuned', description: 'Custom fine-tunes and embeddings calibrated to your data and tone.' },
    ],
    features: [
      'LLM agents (OpenAI, Anthropic, open source)',
      'RAG over your knowledge base',
      'Vector databases (pgvector, Pinecone)',
      'Chatbots & copilots',
      'Document intelligence',
      'ML pipelines (training & serving)',
      'Eval harnesses & A/B testing',
      'Cost & latency optimization',
    ],
    useCases: [
      'Customer support copilots',
      'Internal knowledge assistants',
      'Document classification & extraction',
      'Recommendation engines',
      'Sales intelligence',
      'Process automation',
    ],
    process: [
      { step: 'Use-case design', description: 'Identify high-ROI workflows and define eval criteria up front.' },
      { step: 'Prototype', description: 'Ship a working demo on real data within two weeks.' },
      { step: 'Hardening', description: 'Guardrails, evals, monitoring, and cost controls.' },
      { step: 'Integration', description: 'Drop into your product UX and existing data systems.' },
      { step: 'Iterate', description: 'Continuous prompt and model improvements driven by user feedback.' },
    ],
    faqs: [
      { q: 'Will my data train someone\'s model?', a: 'No — we use enterprise APIs that are zero-retention by default and support self-hosted models when required.' },
      { q: 'Open source or proprietary models?', a: 'Both. We pick the model that wins on quality, latency, and cost for your use case.' },
      { q: 'How do you measure quality?', a: 'Custom eval suites built on your real data with regression checks on every prompt change.' },
    ],
    related: ['nodejs', 'python', 'aws'],
  },
  'android-native': {
    slug: 'android-native',
    name: 'Android Native Development',
    category: 'Mobile',
    tagline: 'Kotlin-first apps with deep platform power.',
    overview:
      'Android Native lets you tap every capability of the platform — from background services and widgets to wear, auto, and TV. We build modern Android apps with Kotlin, Jetpack Compose, and Material 3.',
    whyChoose: [
      { title: 'Full platform access', description: 'No abstraction layer — every Android API at your fingertips.' },
      { title: 'Best-in-class performance', description: 'Tightest memory and battery profile of any Android approach.' },
      { title: 'Modern toolchain', description: 'Compose, Coroutines, Hilt, and Room — productive and reliable.' },
      { title: 'Future surfaces', description: 'Wear OS, Auto, Foldables, TV — all native-first.' },
    ],
    features: [
      'Jetpack Compose UI',
      'Coroutines & Flow',
      'Hilt dependency injection',
      'Room offline storage',
      'WorkManager background jobs',
      'CameraX, ML Kit, BLE',
      'Material 3 theming',
      'Play Store release management',
    ],
    useCases: [
      'High-performance games',
      'Hardware-integrated apps',
      'Enterprise & MDM apps',
      'Banking & secure apps',
      'Wear OS companions',
      'Background-heavy utilities',
    ],
    process: [
      { step: 'Spec', description: 'Platform requirements, target SDKs, device matrix, and store strategy.' },
      { step: 'Design', description: 'Material 3 design system tailored to brand, tested across screens.' },
      { step: 'Build', description: 'Compose UI, Kotlin Coroutines, modular architecture for scale.' },
      { step: 'QA', description: 'Real-device testing, automated UI tests, performance profiling.' },
      { step: 'Release', description: 'Staged Play Store rollouts, crash analytics, ANR monitoring.' },
    ],
    faqs: [
      { q: 'Native Android or Flutter?', a: 'For deeply hardware-integrated or performance-critical apps, native wins. For most consumer apps, Flutter is faster to deliver.' },
      { q: 'Do you support legacy Java codebases?', a: 'Yes — we modernize Java codebases incrementally to Kotlin without halting feature work.' },
      { q: 'Compose or XML views?', a: 'New work goes Compose. We migrate XML codebases gradually screen-by-screen.' },
    ],
    related: ['flutter', 'firebase', 'nodejs'],
  },
  firebase: {
    slug: 'firebase',
    name: 'Firebase Development',
    category: 'Backend',
    tagline: 'Realtime backends without server overhead.',
    overview:
      'Firebase is Google\'s end-to-end app platform — auth, database, storage, functions, analytics, and hosting. We use it to ship MVPs in weeks and to scale realtime features for production apps.',
    whyChoose: [
      { title: 'Realtime by default', description: 'Firestore and RTDB push updates to clients instantly — no polling.' },
      { title: 'No server to manage', description: 'Auth, storage, and functions are fully managed — focus on product.' },
      { title: 'Generous free tier', description: 'Validate ideas without infra costs and scale only when traction proves it.' },
      { title: 'Tight Google integration', description: 'Auth, Analytics, Crashlytics, and Cloud Run all play together.' },
    ],
    features: [
      'Firebase Auth (email, OAuth, phone)',
      'Firestore document database',
      'Cloud Storage',
      'Cloud Functions (Node, Python)',
      'Hosting & dynamic routing',
      'Crashlytics & Analytics',
      'Push notifications (FCM)',
      'Remote Config & A/B testing',
    ],
    useCases: [
      'MVPs & startup launches',
      'Realtime chat & collab apps',
      'Mobile-first products',
      'Internal admin tools',
      'Event apps & community',
      'Notification systems',
    ],
    process: [
      { step: 'Modeling', description: 'Firestore schema design with security rules planned up front.' },
      { step: 'Auth & rules', description: 'Auth flows, RBAC, and field-level security written and tested.' },
      { step: 'Functions', description: 'Cloud Functions for triggers, integrations, and server logic.' },
      { step: 'Client SDK', description: 'Optimistic UI, offline persistence, and listener efficiency.' },
      { step: 'Monitor & scale', description: 'Cost monitoring, Crashlytics, performance tracing, alerts.' },
    ],
    faqs: [
      { q: 'Will I get locked in?', a: 'Possible — but we architect data models to migrate cleanly to Postgres or another managed DB if you need to.' },
      { q: 'How do you secure Firestore?', a: 'Strict security rules, server-only writes for sensitive data, and automated rule tests on CI.' },
      { q: 'Firebase or AWS Amplify?', a: 'Firebase is faster to start; Amplify integrates better with broader AWS. We pick based on your stack.' },
    ],
    related: ['flutter', 'react', 'nodejs'],
  },
};

// Helper used by tech grid cards to know which have detail pages.
export const techWithDetail = Object.keys(techDetails);

// ---------- Legacy tech list (kept for the existing grid component) ----------
export const technologies = [
  { name: 'React', icon: 'R', category: 'Frontend' },
  { name: 'Next.js', icon: 'N', category: 'Frontend' },
  { name: 'TypeScript', icon: 'TS', category: 'Language' },
  { name: 'Flutter', icon: 'F', category: 'Mobile' },
  { name: 'Android Native', icon: 'A', category: 'Mobile' },
  { name: 'Kotlin', icon: 'K', category: 'Mobile' },
  { name: 'Node.js', icon: 'No', category: 'Backend' },
  { name: 'Express.js', icon: 'Ex', category: 'Backend' },
  { name: 'Python', icon: 'Py', category: 'Language' },
  { name: 'Firebase', icon: 'Fb', category: 'Backend' },
  { name: 'MongoDB', icon: 'Mo', category: 'Database' },
  { name: 'PostgreSQL', icon: 'Pg', category: 'Database' },
  { name: 'AWS', icon: 'AWS', category: 'Cloud' },
  { name: 'Docker', icon: 'D', category: 'DevOps' },
];

// ---------- Case Studies ----------
export type CaseStudy = {
  id: number;
  title: string;
  category: string;
  problem: string;
  solution: string;
  technologies: string[];
  outcomes: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Logistics Platform for Last-Mile Delivery',
    category: 'Logistics',
    problem:
      'A regional logistics provider managed 200+ daily routes via spreadsheets — driver assignments slipped, customer ETAs were guesses, and ops staff spent hours on the phone.',
    solution:
      'We built a unified dispatch platform with a driver mobile app (Flutter), live-map dispatcher console (Next.js), and Node.js backend with route-optimization workers running on AWS.',
    technologies: ['Flutter', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    outcomes: [
      { label: 'Routes per day', value: '+62%' },
      { label: 'On-time delivery', value: '94%' },
      { label: 'Dispatcher headcount', value: '−40%' },
    ],
  },
  {
    id: 2,
    title: 'AI Document Intelligence for Legal Teams',
    category: 'AI Applications',
    problem:
      'A mid-size law firm reviewed thousands of contracts manually. Junior associates spent 60% of their time on boilerplate clause review.',
    solution:
      'A RAG-powered review assistant trained on the firm\'s own playbook. Surfaces deviations, drafts redlines, and links every claim to the source clause — all running on a private endpoint.',
    technologies: ['Python', 'pgvector', 'Next.js', 'OpenAI', 'AWS'],
    outcomes: [
      { label: 'Review time', value: '−71%' },
      { label: 'Clause coverage', value: '100%' },
      { label: 'Associate satisfaction', value: '4.8 / 5' },
    ],
  },
  {
    id: 3,
    title: 'Fitness & Wellness Mobile App',
    category: 'Mobile Apps',
    problem:
      'A wellness studio wanted to keep members engaged between visits. Existing white-label apps offered no personalization and felt generic.',
    solution:
      'A custom Flutter app with personalized programs, in-app booking, content library, push reminders, and Apple HealthKit / Google Fit integration.',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'Stripe'],
    outcomes: [
      { label: 'Monthly active users', value: '+3.2x' },
      { label: 'App store rating', value: '4.9' },
      { label: 'Member retention', value: '+28%' },
    ],
  },
  {
    id: 4,
    title: 'B2B Procurement Platform',
    category: 'Business Platforms',
    problem:
      'A procurement startup needed to launch a multi-tenant platform fast — vendor onboarding, RFQ workflows, approvals, and audit trails — without compromising on enterprise security.',
    solution:
      'Multi-tenant Next.js SaaS with workflow engine, role-based access, full audit log, SSO, and a Node.js API designed for integrations with ERP systems.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'TypeScript'],
    outcomes: [
      { label: 'Time to MVP', value: '11 weeks' },
      { label: 'Tenants onboarded', value: '24' },
      { label: 'SSO adoption', value: '100%' },
    ],
  },
  {
    id: 5,
    title: 'Subscription SaaS for Creators',
    category: 'SaaS Systems',
    problem:
      'An indie founder wanted a creator monetization SaaS — Stripe billing, content gating, analytics — without burning a year building plumbing.',
    solution:
      'A production SaaS skeleton with auth, multi-tenant teams, Stripe subscriptions, role-based gating, and an admin console — shipped in 6 weeks.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Vercel'],
    outcomes: [
      { label: 'MVP timeline', value: '6 weeks' },
      { label: 'First paying customer', value: 'Week 8' },
      { label: 'MRR at month 6', value: '$14k' },
    ],
  },
];

export const caseCategories = [
  'All',
  'Logistics',
  'AI Applications',
  'Mobile Apps',
  'Business Platforms',
  'SaaS Systems',
];

// ---------- Testimonials ----------
export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechVentures Inc.',
    content:
      'Codentrixa shipped our AI analytics platform two weeks ahead of schedule. The architecture is rock-solid and the team feels like part of our company.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'FinStart Solutions',
    content:
      'Their Flutter app holds a 4.9 rating on both stores. UI craftsmanship and performance work were leagues above the agencies we tried before.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'CEO',
    company: 'HealthBridge',
    content:
      'Our patient platform serves 50,000+ users daily on Codentrixa\'s backend. Reliable, scalable, and the on-call response is legitimately impressive.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Williams',
    role: 'Product Manager',
    company: 'RetailMax',
    content:
      'Concept to deployment in six weeks. Our conversion rate jumped 40% on the new commerce stack. We have already extended the engagement.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Emma Rodriguez',
    role: 'Director of Engineering',
    company: 'CloudFirst',
    content:
      'Their cloud + DevOps work cut our AWS bill by 38% the first quarter. CI/CD, observability, IaC — properly enterprise-grade.',
    rating: 5,
  },
];

// ---------- Careers ----------
export const workCulture = [
  { title: 'Remote-first', description: 'Work from anywhere. We hire on quality, not zip code.', icon: 'globe' },
  { title: 'Flexible hours', description: 'Outcomes over clock-watching. Own your day, deliver your goals.', icon: 'clock' },
  { title: 'Learning budget', description: 'Annual stipend for courses, conferences, books, and tools.', icon: 'book-open' },
  { title: 'Friendly team', description: 'No politics, no ego. Real engineers helping real engineers.', icon: 'heart' },
  { title: 'Growth-focused', description: 'Quarterly career conversations, mentorship, and clear paths.', icon: 'trending-up' },
  { title: 'Innovation-driven', description: 'Hack days, R&D sprints, and time to explore new tools.', icon: 'sparkles' },
];

export const perks = [
  { title: 'Remote Job Opportunities', icon: 'home' },
  { title: 'Flexible Timing', icon: 'clock' },
  { title: 'Performance Bonuses', icon: 'gift' },
  { title: 'Learning Support', icon: 'graduation-cap' },
  { title: 'Career Growth', icon: 'trending-up' },
  { title: 'Friendly Team Culture', icon: 'users' },
];

export const openPositions = [
  {
    id: 'flutter-dev',
    title: 'Flutter Developer',
    experience: '2+ years',
    type: 'Full-time',
    location: 'Remote (Global)',
    description:
      'Build production Flutter apps end-to-end — from architecture and state management to App Store release. Ship for real users on iOS and Android.',
    skills: ['Flutter', 'Dart', 'Bloc / Riverpod', 'Firebase', 'REST APIs'],
  },
  {
    id: 'business-dev',
    title: 'Business Developer',
    experience: '1+ years',
    type: 'Full-time',
    location: 'Remote (Global)',
    description:
      'Drive new client conversations, qualify outsourcing opportunities, and own the top of the sales funnel. Tech-curious B2B sales pros welcome.',
    skills: ['B2B sales', 'Outbound', 'Proposal writing', 'CRM', 'Tech literacy'],
  },
];

export const hiringSteps = [
  { step: '01', title: 'Apply', description: 'Send your CV and a few links — portfolio, GitHub, or LinkedIn.' },
  { step: '02', title: 'Initial Discussion', description: '30 minutes with our hiring lead — values fit and goals.' },
  { step: '03', title: 'Technical Round', description: 'Practical, paid take-home or a live pairing session.' },
  { step: '04', title: 'Final Interview', description: 'Meet the team you would join, talk craft and roadmap.' },
  { step: '05', title: 'Offer Letter', description: 'Clear comp, start date, and onboarding plan within 5 days.' },
];

// ---------- FAQ for the home / generic page ----------
export const generalFAQ = [
  {
    q: 'How do you typically engage with new clients?',
    a: 'A 30-minute discovery call, a written proposal within 3 days, and a 2-week paid pilot to validate fit before any long-term commitment.',
  },
  {
    q: 'What time zones do you cover?',
    a: 'We deliver across US, EU, and APAC business hours with overlap windows for daily standups.',
  },
  {
    q: 'Do you sign NDAs and IP assignment?',
    a: 'Yes — both, by default. All work product is assigned to the client on payment.',
  },
  {
    q: 'How fast can we start?',
    a: 'For most engagements, kickoff is within 1 week of contract sign-off; dedicated developers can start within 2 weeks.',
  },
];
