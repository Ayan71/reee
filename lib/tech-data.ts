// ─────────────────────────────────────────────────────────────────────────
//  Technology detail page content
//  Each entry powers /technologies/[slug]
// ─────────────────────────────────────────────────────────────────────────

export type TechDetail = {
  slug: string;
  name: string;
  tagline: string;
  hero: string; // longer paragraph for hero
  overview: string;
  whyChoose: { title: string; description: string }[];
  expertise: string[];
  features: { title: string; description: string }[];
  useCases: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
  meta: { title: string; description: string };
};

export const TECH_DETAILS: Record<string, TechDetail> = {
  flutter: {
    slug: 'flutter',
    name: 'Flutter Development',
    tagline: 'One codebase. Native performance. iOS, Android, and web.',
    hero:
      'We build production Flutter apps that ship to both stores from a single Dart codebase — without the dual-codebase tax. From fintech to fitness to logistics, our Flutter team owns delivery from spec to App Store review.',
    overview:
      'Flutter lets us reuse 90%+ of code across iOS, Android, and web while still rendering native-grade UI at 60–120 fps. We use it when our clients need to move fast on two platforms with one team — and when pixel-perfect, branded UI matters more than platform-default chrome.',
    whyChoose: [
      {
        title: 'Faster time-to-market',
        description:
          'A single codebase means one design pass, one QA pass, one release pipeline. We typically save clients 40–55% versus parallel native builds.',
      },
      {
        title: 'Pixel-perfect on every device',
        description:
          'Flutter draws every pixel itself, so your design stays identical across Android 8 and the latest iPhone Pro. No more "looks fine on iOS, broken on Android."',
      },
      {
        title: 'Native performance',
        description:
          'Compiled to native ARM/x86 code. We profile every release with DevTools and target a steady 60 fps on mid-tier Android, 120 fps on iPhone Pro.',
      },
      {
        title: 'Mature ecosystem',
        description:
          'Backed by Google, used by BMW, Alibaba, Toyota, and ByteDance. Plugins exist for almost every native API you\'ll need.',
      },
    ],
    expertise: [
      'Riverpod and BLoC state management',
      'Offline-first architecture with Hive / Drift',
      'Firebase Auth, Firestore, FCM, Crashlytics',
      'Stripe, RevenueCat, in-app purchases',
      'Custom platform channels (Kotlin / Swift)',
      'Animation-heavy onboarding flows',
      'CI/CD with Codemagic and GitHub Actions',
      'Play Store and App Store submission',
    ],
    features: [
      { title: 'Hot reload', description: 'See code changes in under a second — design and engineering iterate together.' },
      { title: 'Adaptive UI', description: 'Material on Android, Cupertino on iOS — automatically.' },
      { title: 'Strong typing', description: 'Dart\'s sound null-safety catches whole classes of bugs at compile time.' },
      { title: 'Web + desktop', description: 'The same codebase ships to web and desktop when you need it.' },
    ],
    useCases: [
      { title: 'Consumer apps', description: 'Fitness, e-commerce, lifestyle apps with high design fidelity.' },
      { title: 'Fintech', description: 'Wallets, neobanks, and trading apps with biometric auth.' },
      { title: 'Logistics & field ops', description: 'Driver apps, delivery apps, technician apps with offline support.' },
      { title: 'SaaS companion apps', description: 'Mobile companions to web SaaS — notifications, dashboards, approvals.' },
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'Spec workshop, design audit, and a pilot screen to derisk the architecture.' },
      { step: 2, title: 'Design', description: 'Figma component library aligned with Material 3 and Cupertino.' },
      { step: 3, title: 'Build', description: 'Two-week sprints, weekly TestFlight / internal-track builds.' },
      { step: 4, title: 'QA', description: 'Manual + integration tests on real devices via Firebase Test Lab.' },
      { step: 5, title: 'Launch', description: 'Phased Play Store + App Store rollout with crash monitoring.' },
      { step: 6, title: 'Support', description: 'Maintenance retainer for SDK upgrades, OS releases, and feature work.' },
    ],
    faqs: [
      {
        q: 'How long does a Flutter MVP typically take?',
        a: 'Most MVPs land in 8–12 weeks for a 5–8 screen app with auth, payments, and a backend integration.',
      },
      {
        q: 'Can Flutter match native performance?',
        a: 'For 95% of consumer and B2B apps, yes. For heavy 3D, AR, or computer-vision pipelines we may recommend native.',
      },
      {
        q: 'Do you handle App Store / Play Store submission?',
        a: 'Yes — we own the submission, including review responses and phased rollout.',
      },
      {
        q: 'Will the same code run on iOS and Android?',
        a: 'Typically 90%+. Platform-specific code (e.g., share sheets, payments, biometrics) is wired through clean abstractions.',
      },
    ],
    related: [
      { label: 'Mobile App Development', href: '/services#mobile-app-development' },
      { label: 'UI/UX Design', href: '/services#ui-ux-design' },
      { label: 'Firebase Development', href: '/technologies/firebase' },
    ],
    meta: {
      title: 'Flutter Development Services | Codentrixa',
      description:
        'Senior Flutter team building production iOS, Android, and web apps from one codebase. Pixel-perfect UI, native performance, and full App Store / Play Store delivery.',
    },
  },

  react: {
    slug: 'react',
    name: 'React Development',
    tagline: 'Modern web apps that feel instant and ship reliably.',
    hero:
      'We build production React applications — marketing sites, internal tools, B2B dashboards, multi-tenant SaaS — using Next.js, TypeScript, and a tested architecture playbook refined across 30+ projects.',
    overview:
      'React is our default for the web. We pair it with Next.js for performance and SEO, TypeScript for safety, and a small set of trusted libraries (TanStack Query, Tailwind, Radix) to keep teams fast and codebases maintainable for years, not months.',
    whyChoose: [
      {
        title: 'Massive talent pool',
        description: 'The deepest hiring market of any frontend framework — easy to scale teams and onboard new engineers.',
      },
      {
        title: 'Component reusability',
        description: 'Design once, reuse everywhere. We deliver design systems, not just screens.',
      },
      {
        title: 'SEO-friendly with Next.js',
        description: 'SSR, ISR, and static generation give marketing pages perfect Lighthouse scores.',
      },
      {
        title: 'Mature tooling',
        description: 'Vite, Next.js, Storybook, Playwright, Vitest — the ecosystem has solved every common problem.',
      },
    ],
    expertise: [
      'Next.js App Router (server + client components)',
      'TypeScript at strict mode',
      'TanStack Query for server state',
      'Tailwind + Radix / shadcn for design systems',
      'Auth (NextAuth, Clerk, Auth0)',
      'Stripe, Lemon Squeezy, billing flows',
      'Playwright + Vitest for E2E and unit tests',
      'Vercel and AWS deployment pipelines',
    ],
    features: [
      { title: 'SSR + streaming', description: 'First paint under 1s on 4G, then progressively enhanced.' },
      { title: 'Type-safe end to end', description: 'API contracts shared between server and client via Zod or tRPC.' },
      { title: 'Design-system-first', description: 'Tokens, components, and Storybook from week one.' },
      { title: 'Accessible by default', description: 'WCAG 2.2 AA on every shipped component.' },
    ],
    useCases: [
      { title: 'B2B dashboards', description: 'Multi-tenant admin consoles with charts, filters, and exports.' },
      { title: 'Marketing sites', description: 'CMS-driven, blazing-fast pages that rank.' },
      { title: 'SaaS frontends', description: 'Auth, billing, settings, and admin tools as a coherent system.' },
      { title: 'Internal tools', description: 'Replacements for spreadsheets and Retool when scale demands it.' },
    ],
    process: [
      { step: 1, title: 'Architecture', description: 'Routing, data fetching, auth, and deploy strategy nailed in week one.' },
      { step: 2, title: 'Design system', description: 'Tokens, primitive components, and Storybook before features.' },
      { step: 3, title: 'Feature delivery', description: 'Two-week sprints with Friday demos to your team.' },
      { step: 4, title: 'Performance pass', description: 'Lighthouse, bundle analysis, and edge-cache tuning before launch.' },
      { step: 5, title: 'Launch + monitor', description: 'Sentry, Vercel Analytics, and on-call rotation in week one.' },
    ],
    faqs: [
      {
        q: 'Why Next.js over plain React?',
        a: 'Routing, SSR, image optimization, and deployment are first-class. Saves us 4–6 weeks per project.',
      },
      {
        q: 'Do you work with existing React codebases?',
        a: 'Yes — we frequently rescue and modernize legacy CRA / older Next.js apps.',
      },
      {
        q: 'How do you keep the bundle small?',
        a: 'Code splitting per route, tree-shaking, and a strict bundle-size budget enforced in CI.',
      },
      {
        q: 'Can you migrate from a different framework?',
        a: 'We\'ve done Angular → Next.js, Vue → Next.js, and CRA → Next.js migrations. Happy to scope yours.',
      },
    ],
    related: [
      { label: 'Web Development', href: '/services#web-development' },
      { label: 'SaaS Product Development', href: '/services#saas-product-development' },
      { label: 'Node.js Backend', href: '/technologies/nodejs' },
    ],
    meta: {
      title: 'React Development Services | Codentrixa',
      description:
        'Senior React + Next.js team building dashboards, SaaS frontends, and marketing sites with TypeScript, Tailwind, and a tested architecture playbook.',
    },
  },

  nodejs: {
    slug: 'nodejs',
    name: 'Node.js Backend Development',
    tagline: 'APIs and services engineered for scale and 99.9% uptime.',
    hero:
      'We build Node.js backends — REST APIs, GraphQL gateways, real-time systems, and event-driven services — that handle production traffic from day one. TypeScript, clean architecture, and observability baked in.',
    overview:
      'Node.js is our backend default for most web and mobile products. It pairs cleanly with our React, Next.js, and Flutter frontends, gives us a single language across the stack, and has a battle-tested ecosystem for queues, databases, and integrations.',
    whyChoose: [
      {
        title: 'JavaScript everywhere',
        description: 'One language across web, mobile (where applicable), and backend means a smaller, faster team.',
      },
      {
        title: 'Massive package ecosystem',
        description: 'npm has a tested, maintained library for almost every integration you\'ll ever need.',
      },
      {
        title: 'Built for I/O-heavy workloads',
        description: 'Async-first runtime is ideal for APIs, real-time systems, and microservices.',
      },
      {
        title: 'Cloud-native by default',
        description: 'First-class support on AWS Lambda, Cloud Run, Vercel, Fly, and every major PaaS.',
      },
    ],
    expertise: [
      'Express.js, Fastify, NestJS',
      'GraphQL (Apollo, Yoga, tRPC)',
      'PostgreSQL, MongoDB, Redis',
      'Queue systems (BullMQ, SQS, RabbitMQ)',
      'WebSockets and SSE for real-time',
      'OpenAPI specs and contract testing',
      'OAuth 2.0 / JWT / session auth',
      'Observability (OpenTelemetry, Datadog, Sentry)',
    ],
    features: [
      { title: 'Type-safe APIs', description: 'TypeScript end to end with Zod validation at the boundary.' },
      { title: 'Real-time-ready', description: 'WebSockets, SSE, and queue workers without leaving the Node ecosystem.' },
      { title: 'Horizontal scaling', description: 'Stateless services that scale on Kubernetes, ECS, or serverless.' },
      { title: 'Tested and observable', description: 'Vitest / Jest, OpenTelemetry traces, and Sentry from day one.' },
    ],
    useCases: [
      { title: 'REST and GraphQL APIs', description: 'Backends for web and mobile frontends with full OpenAPI contracts.' },
      { title: 'SaaS backends', description: 'Multi-tenant data isolation, billing, RBAC, and admin tools.' },
      { title: 'Real-time systems', description: 'Live chat, dashboards, dispatch consoles, collaboration apps.' },
      { title: 'Microservices', description: 'Domain-aligned services with shared tooling and observability.' },
    ],
    process: [
      { step: 1, title: 'Domain modeling', description: 'Bounded contexts, data flows, and API contracts before code.' },
      { step: 2, title: 'Foundations', description: 'Auth, observability, error handling, CI/CD wired up first.' },
      { step: 3, title: 'Feature delivery', description: 'Two-week sprints. Every endpoint ships with tests + docs.' },
      { step: 4, title: 'Load testing', description: 'k6 / Artillery scenarios run in staging before launch.' },
      { step: 5, title: 'Launch + on-call', description: 'Runbooks, alerting, and 30 days of post-launch on-call included.' },
    ],
    faqs: [
      {
        q: 'When would you not choose Node.js?',
        a: 'CPU-bound workloads (heavy ML, data processing) often go to Python or Go. We\'ll be honest about the fit.',
      },
      {
        q: 'Do you do microservices or monoliths?',
        a: 'Both. We default to a modular monolith and split into services only when team and traffic demand it.',
      },
      {
        q: 'Which database do you recommend?',
        a: 'PostgreSQL by default, MongoDB when document-shape is genuinely the right model. We\'ll match the data, not the trend.',
      },
      {
        q: 'How do you handle authentication?',
        a: 'OAuth 2.0 / OIDC for SSO, custom JWT or session for in-app auth. We harden against OWASP top 10 by default.',
      },
    ],
    related: [
      { label: 'Backend Development', href: '/services#backend-development' },
      { label: 'API Development', href: '/services#api-development' },
      { label: 'Cloud & DevOps', href: '/services#cloud-devops' },
    ],
    meta: {
      title: 'Node.js Backend Development | Codentrixa',
      description:
        'Senior Node.js team building TypeScript APIs, real-time systems, and microservices for production. PostgreSQL, MongoDB, AWS, full observability.',
    },
  },

  'ai-solutions': {
    slug: 'ai-solutions',
    name: 'AI Solutions',
    tagline: 'Production AI — not demos. LLMs, RAG, vision, forecasting.',
    hero:
      'We ship AI features that hold up in production: RAG over your documents, LLM-driven workflows, computer vision pipelines, and forecasting models with monitoring and human-in-the-loop review.',
    overview:
      'Most AI projects fail in the gap between a demo and a system that real users can rely on. We close that gap. We design around evaluation, fall-back paths, observability, and cost — so the AI features you ship stay reliable as your data and traffic grow.',
    whyChoose: [
      {
        title: 'Evaluation-first',
        description: 'We define what "correct" means before we ship — and we track it on every release with offline evals.',
      },
      {
        title: 'Cost-aware',
        description: 'Model selection, caching, and routing tuned to keep per-request cost predictable at scale.',
      },
      {
        title: 'Vendor-flexible',
        description: 'OpenAI, Anthropic, Google, AWS Bedrock, or self-hosted open-source. We pick what fits.',
      },
      {
        title: 'Human-in-the-loop',
        description: 'Review queues, feedback capture, and retraining loops — not just a model behind an API.',
      },
    ],
    expertise: [
      'RAG pipelines with vector DBs (Pinecone, pgvector, Weaviate)',
      'LLM workflows (LangChain, LlamaIndex, custom orchestration)',
      'OpenAI, Anthropic Claude, AWS Bedrock, Vertex AI',
      'Computer vision (OCR, classification, detection)',
      'Forecasting (Prophet, ARIMA, gradient boosting)',
      'Prompt engineering and prompt versioning',
      'Evaluation harnesses and offline test sets',
      'Production monitoring (LangSmith, custom telemetry)',
    ],
    features: [
      { title: 'RAG that actually works', description: 'Chunking strategy tuned to your data, not a copy-paste tutorial.' },
      { title: 'Eval harness', description: 'Every release runs against a versioned test set before it ships.' },
      { title: 'Fallback paths', description: 'Degraded modes when the model is down, slow, or wrong.' },
      { title: 'Feedback loops', description: 'Thumbs-up / thumbs-down captured and folded back into training data.' },
    ],
    useCases: [
      { title: 'Document intelligence', description: 'Extract structured data from PDFs, contracts, and forms.' },
      { title: 'Internal AI assistants', description: 'Chat over your docs, tickets, or codebase with citations.' },
      { title: 'Customer-facing copilots', description: 'In-product help, smart search, and guided workflows.' },
      { title: 'Forecasting & anomaly detection', description: 'Demand forecasting, fraud signals, and operational alerts.' },
    ],
    process: [
      { step: 1, title: 'Use-case framing', description: 'Define the metric, the user, and the cost ceiling. No metric, no project.' },
      { step: 2, title: 'Eval set', description: 'Build a versioned test set before any model code is written.' },
      { step: 3, title: 'Prototype', description: 'Get to a working pipeline that hits the metric — even if expensively.' },
      { step: 4, title: 'Productionize', description: 'Caching, routing, observability, and fallback paths.' },
      { step: 5, title: 'Monitor + iterate', description: 'Live evals, feedback capture, and weekly model reviews.' },
    ],
    faqs: [
      {
        q: 'Do you train custom models?',
        a: 'When it pays off. For most cases, RAG + a strong base model wins on cost and time-to-market.',
      },
      {
        q: 'How do you handle hallucinations?',
        a: 'Citation-required prompts, retrieval grounding, output schemas, and review queues for high-stakes outputs.',
      },
      {
        q: 'Which LLM provider do you recommend?',
        a: 'It depends — accuracy, cost, latency, and data residency all matter. We\'ll benchmark on your data.',
      },
      {
        q: 'Is my data safe?',
        a: 'We default to providers and configurations that don\'t train on your data. Self-hosted is available when needed.',
      },
    ],
    related: [
      { label: 'AI-Based Solutions', href: '/services#ai-solutions' },
      { label: 'Backend Development', href: '/services#backend-development' },
      { label: 'IT Consulting', href: '/services#it-consulting' },
    ],
    meta: {
      title: 'AI Solutions Development | Codentrixa',
      description:
        'Production AI development — RAG, LLM workflows, computer vision, forecasting. Eval-first, cost-aware, human-in-the-loop. Anthropic, OpenAI, Bedrock, self-hosted.',
    },
  },

  'android-native': {
    slug: 'android-native',
    name: 'Android Native Development',
    tagline: 'Kotlin-first Android apps tuned for Material 3 and Play Store standards.',
    hero:
      'Some apps need every ounce of Android. When you\'re shipping deep platform integration — background services, custom audio, hardware sensors, or Wear OS — we build native with Kotlin, Jetpack, and Compose.',
    overview:
      'We choose Android Native when the product depends on platform features that don\'t cross-compile cleanly: background workers, foreground services, custom camera or audio pipelines, NFC / BLE, Auto, Wear, or apps that must hit exact Material 3 specs.',
    whyChoose: [
      {
        title: 'Full platform access',
        description: 'Every Android API, every sensor, every system integration — no plugin shims.',
      },
      {
        title: 'Best-in-class performance',
        description: 'Compiled to native Android bytecode with first-class JVM tooling.',
      },
      {
        title: 'Material 3 native',
        description: 'Pixel-correct Material 3 with dynamic color, expressive motion, and large-screen support.',
      },
      {
        title: 'Play Store-grade quality',
        description: 'Crashlytics, baseline profiles, ANR budgets — we hit Play\'s technical quality bars by default.',
      },
    ],
    expertise: [
      'Kotlin + Coroutines + Flow',
      'Jetpack Compose UI',
      'Hilt / Koin dependency injection',
      'Room, DataStore, WorkManager',
      'Retrofit + OkHttp + Ktor',
      'Custom camera / audio / BLE pipelines',
      'Wear OS, Auto, Android TV',
      'Play Store release management',
    ],
    features: [
      { title: 'Compose-first UI', description: 'Declarative UI with state hoisting, previews, and a tested component library.' },
      { title: 'Background work done right', description: 'WorkManager + Foreground Services + power-aware scheduling.' },
      { title: 'Modular Gradle setup', description: 'Multi-module builds that scale to large teams without 40-minute compiles.' },
      { title: 'Baseline profiles', description: 'Cold-start time tuned with profile-guided optimization.' },
    ],
    useCases: [
      { title: 'Hardware-integrated apps', description: 'Camera, sensors, BLE, NFC, USB, audio.' },
      { title: 'Field operations apps', description: 'Background sync, foreground services, offline-first data.' },
      { title: 'Wear / Auto / TV', description: 'Companion experiences across the Android device family.' },
      { title: 'Apps with strict Material 3 needs', description: 'When the design must be 100% native Android.' },
    ],
    process: [
      { step: 1, title: 'Architecture', description: 'Compose, Hilt, modularization, and CI on day one.' },
      { step: 2, title: 'Design system', description: 'Compose component library aligned with your brand and Material 3.' },
      { step: 3, title: 'Feature delivery', description: 'Two-week sprints, internal-track builds every Friday.' },
      { step: 4, title: 'Quality pass', description: 'StrictMode, baseline profiles, accessibility scanner, ANR budget.' },
      { step: 5, title: 'Play Store launch', description: 'Phased rollout, Vitals monitoring, crash triage on call.' },
    ],
    faqs: [
      {
        q: 'When should I pick native over Flutter?',
        a: 'When the product is deeply integrated with the OS (background, hardware, Auto/Wear) or when you only need Android.',
      },
      {
        q: 'Compose or XML views?',
        a: 'Compose for new work. We\'re happy to maintain mixed codebases and migrate incrementally.',
      },
      {
        q: 'Do you support older Android versions?',
        a: 'We typically target the last 4–5 API levels — covers 95%+ of real users without taxing the codebase.',
      },
      {
        q: 'Do you also do iOS?',
        a: 'When iOS is needed, we usually pair Android Native with a parallel Swift / SwiftUI track or a Flutter codebase.',
      },
    ],
    related: [
      { label: 'Mobile App Development', href: '/services#mobile-app-development' },
      { label: 'Flutter Development', href: '/technologies/flutter' },
      { label: 'UI/UX Design', href: '/services#ui-ux-design' },
    ],
    meta: {
      title: 'Android Native Development | Codentrixa',
      description:
        'Kotlin + Jetpack Compose Android apps with full platform access — background work, hardware integration, Wear OS, Auto, TV. Material 3, Play Store-grade quality.',
    },
  },

  firebase: {
    slug: 'firebase',
    name: 'Firebase Development',
    tagline: 'Ship faster on Google\'s app platform — auth, data, and serverless in one.',
    hero:
      'Firebase lets us ship MVPs and mid-scale products without standing up infrastructure. We pair it with Flutter, React Native, and the web to deliver auth, data, push, analytics, and serverless functions on day one.',
    overview:
      'Firebase is our default for client engagements where speed matters more than infra ownership. Auth, Firestore, Cloud Functions, FCM, and Analytics are wired together cleanly and managed by Google. When products outgrow Firebase, we plan and execute the migration.',
    whyChoose: [
      {
        title: 'Faster to first user',
        description: 'Auth, database, file storage, and push in a single SDK — no infra setup before week one.',
      },
      {
        title: 'Serverless by default',
        description: 'Cloud Functions handle business logic; you don\'t pay for idle servers.',
      },
      {
        title: 'Realtime built in',
        description: 'Firestore listeners drive live UIs without writing your own WebSocket layer.',
      },
      {
        title: 'Tight Google integrations',
        description: 'Analytics, Crashlytics, Remote Config, and A/B testing share the same project.',
      },
    ],
    expertise: [
      'Authentication (email, OAuth, phone, custom claims)',
      'Firestore data modeling and security rules',
      'Realtime Database for high-fanout data',
      'Cloud Functions (HTTP, callable, triggers)',
      'Cloud Storage with signed URLs',
      'FCM push notifications',
      'Remote Config and A/B testing',
      'Crashlytics and Performance Monitoring',
    ],
    features: [
      { title: 'Type-safe data access', description: 'TypeScript / Dart converters and strict security rules.' },
      { title: 'Offline-first', description: 'Firestore caches reads and replays writes when the device comes back online.' },
      { title: 'Pay-per-use', description: 'No idle server bill — costs scale with traffic, not provisioning.' },
      { title: 'Easy auth flows', description: 'Email, Google, Apple, phone, magic-link, custom — all wired in.' },
    ],
    useCases: [
      { title: 'MVPs and prototypes', description: 'When time-to-market dominates everything else.' },
      { title: 'Consumer apps', description: 'Social, fitness, lifestyle — anything with auth + cloud sync.' },
      { title: 'Internal tools', description: 'Quick admin consoles for non-technical teams.' },
      { title: 'Realtime collaboration', description: 'Live cursors, chats, dashboards — Firestore listeners do the work.' },
    ],
    process: [
      { step: 1, title: 'Project setup', description: 'Project, environments, billing, and security rules baseline in week one.' },
      { step: 2, title: 'Data model', description: 'Documents and collections designed around your read patterns.' },
      { step: 3, title: 'Auth + rules', description: 'Auth providers, custom claims, and security rules with unit tests.' },
      { step: 4, title: 'Feature delivery', description: 'Cloud Functions and client SDKs delivered together.' },
      { step: 5, title: 'Launch + monitor', description: 'Crashlytics, Performance Monitoring, and cost dashboards from day one.' },
    ],
    faqs: [
      {
        q: 'When does Firebase stop being the right answer?',
        a: 'Heavy relational queries, complex reporting, or strict cost ceilings at scale. We\'ll plan a migration when needed.',
      },
      {
        q: 'Can I migrate off Firebase later?',
        a: 'Yes. We design data layers behind clean abstractions so a future move to Postgres / custom backend stays surgical.',
      },
      {
        q: 'How do you handle security?',
        a: 'Security rules are unit-tested and reviewed in PRs. Custom claims back our RBAC. We harden against OWASP top 10.',
      },
      {
        q: 'Do you set up CI/CD with Firebase Hosting?',
        a: 'Yes — preview channels per PR, production deploys gated on green CI.',
      },
    ],
    related: [
      { label: 'Backend Development', href: '/services#backend-development' },
      { label: 'Flutter Development', href: '/technologies/flutter' },
      { label: 'Cloud & DevOps', href: '/services#cloud-devops' },
    ],
    meta: {
      title: 'Firebase Development Services | Codentrixa',
      description:
        'Senior Firebase team — Auth, Firestore, Cloud Functions, FCM, Analytics. Production-ready setups with security rules, CI/CD, and migration paths when you outgrow.',
    },
  },
};
