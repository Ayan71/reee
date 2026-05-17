// ─────────────────────────────────────────────────────────────────────────
//  Country / region landing-page data.
//  Each entry powers /global/[slug] with SEO-optimized hero + content
//  blocks tuned to that market's vocabulary and procurement habits.
// ─────────────────────────────────────────────────────────────────────────

export type CountryLanding = {
  slug: string;
  /** Full country / region name used in headings. */
  country: string;
  /** ISO 3166-1 alpha-2. */
  code: string;
  /** Where they search from (used in subtitles and intent strings). */
  cities: string[];
  /** Pricing currency shown on the page. */
  currency: 'USD' | 'EUR' | 'GBP' | 'CHF' | 'CAD' | 'AUD' | 'AED' | 'SGD' | 'INR';
  /** Local-language flavor we acknowledge in copy. */
  language: string;
  /** SEO meta title. */
  title: string;
  /** SEO meta description (~155 chars). */
  description: string;
  /** Page eyebrow shown above H1. */
  eyebrow: string;
  /** H1 headline. */
  h1: string;
  /** Lede paragraph. */
  lede: string;
  /** Top primary keywords this page is optimized for. */
  keywords: string[];
  /** Headline trust claims shown as bullets. */
  trustPoints: string[];
  /** Featured services for this market — slug references SERVICES. */
  featuredServices: string[];
  /** Local industries we explicitly target. */
  industries: string[];
  /** FAQ items rendered on the page and emitted as FAQPage JSON-LD. */
  faqs: { q: string; a: string }[];
};

export const COUNTRIES: CountryLanding[] = [
  {
    slug: 'usa',
    country: 'United States',
    code: 'US',
    cities: ['New York', 'San Francisco', 'Austin', 'Seattle', 'Boston', 'Miami'],
    currency: 'USD',
    language: 'English (US)',
    title:
      'AI Development & Custom Software Company in the USA | MERN, React, Cross-Platform | Codentrixa',
    description:
      'Codentrixa is an AI development and custom software company serving US clients in New York, San Francisco, Austin, Seattle, and Boston — MERN, React, cross-platform mobile, AI-powered backends, and OpenAI integration.',
    eyebrow: 'United States · USD billing',
    h1: 'AI Development & Custom Software Company for US Teams',
    lede:
      'Codentrixa is the AI development and custom software partner for ambitious US startups and enterprises. We build AI-powered backends, MERN-stack web platforms, React applications, and cross-platform mobile apps with senior remote engineers who overlap with Pacific, Mountain, Central, and Eastern time zones.',
    keywords: [
      'AI development company USA',
      'custom software development company USA',
      'MERN stack development company USA',
      'React JS development services USA',
      'cross-platform mobile app development USA',
      'AI automation agency USA',
      'OpenAI integration services USA',
      'SaaS development company USA',
      'full stack development services USA',
      'offshore software development company USA',
    ],
    trustPoints: [
      'USD billing on a single monthly invoice — no surprise fees',
      'Overlapping hours with PT, MT, CT, and ET teams',
      'NDA-ready engagements with US-style MSAs and SOWs',
      'Senior engineers only — MERN, React, AI/ML, DevOps, Flutter',
    ],
    featuredServices: [
      'ai-solutions',
      'saas-product-development',
      'mobile-app-development',
      'web-development',
      'backend-development',
      'cloud-devops',
    ],
    industries: ['SaaS', 'Fintech', 'Health-tech', 'Real estate', 'Logistics', 'E-commerce'],
    faqs: [
      {
        q: 'Do you bill in USD and sign US-style contracts?',
        a: 'Yes — Codentrixa bills US clients in USD on a single monthly invoice and signs standard US-style MSAs, SOWs, NDAs, and DPAs. We are comfortable with W-9 / W-8BEN-E paperwork and can support invoice-portal procurement workflows used by US mid-market and enterprise buyers.',
      },
      {
        q: 'Which US cities and time zones do you cover?',
        a: 'Codentrixa serves US clients in New York, San Francisco, Los Angeles, Austin, Seattle, Boston, Chicago, Miami, and across every state. Our remote engineering team works in overlapping shifts with Pacific, Mountain, Central, and Eastern time zones for real-time stand-ups and pair programming.',
      },
      {
        q: 'Can you build AI products that comply with US data laws?',
        a: 'Yes. Codentrixa builds AI products with US-relevant compliance in mind — HIPAA for health-tech, SOC 2 readiness for SaaS, PCI DSS for payment flows, and state-specific privacy regimes such as CCPA / CPRA in California. We host primary data in US AWS regions and document the data-flow architecture as part of every engagement.',
      },
    ],
  },
  {
    slug: 'uk',
    country: 'United Kingdom',
    code: 'GB',
    cities: ['London', 'Manchester', 'Edinburgh', 'Bristol', 'Cambridge'],
    currency: 'GBP',
    language: 'English (UK)',
    title:
      'AI Development & Software Company in the UK | MERN, React, Mobile | Codentrixa',
    description:
      'Codentrixa is an AI development and custom software company serving UK clients in London, Manchester, and across the United Kingdom — MERN, React, cross-platform mobile apps, AI-powered backends, and OpenAI integration.',
    eyebrow: 'United Kingdom · GBP billing',
    h1: 'AI & Software Development Company for UK Businesses',
    lede:
      'Codentrixa is the AI and custom software partner for UK startups, scale-ups, and enterprises. From London fintechs to Manchester SaaS companies, we build MERN web platforms, React apps, cross-platform mobile products, and AI-powered backends — billed in GBP and aligned to your UK working hours.',
    keywords: [
      'AI development company UK',
      'software development company London',
      'MERN stack developers UK',
      'React development company UK',
      'AI chatbot development UK',
      'mobile app development company UK',
      'SaaS development company UK',
      'enterprise software company UK',
      'cross-platform mobile app development UK',
      'OpenAI integration services UK',
    ],
    trustPoints: [
      'GBP billing on a single monthly invoice',
      'Full overlap with UK working hours',
      'GDPR-aware engineering and UK-style contracts',
      'Senior MERN, React, AI, and mobile engineers only',
    ],
    featuredServices: [
      'ai-solutions',
      'web-development',
      'mobile-app-development',
      'saas-product-development',
      'backend-development',
      'cloud-devops',
    ],
    industries: ['Fintech', 'Insurtech', 'SaaS', 'E-commerce', 'Health-tech', 'PropTech'],
    faqs: [
      {
        q: 'Do you bill in GBP and work with UK companies?',
        a: 'Yes — Codentrixa bills UK clients in GBP on a single monthly invoice, signs UK-style MSAs and SOWs, and is comfortable with standard UK procurement processes. We work with London fintechs, Manchester SaaS companies, and businesses across the UK on full overlap with GMT / BST working hours.',
      },
      {
        q: 'Are you GDPR and UK GDPR compliant?',
        a: 'Yes. Codentrixa engineers AI and software products with UK GDPR and EU GDPR principles built in — data minimization, lawful basis tracking, DSR / SAR workflows, and data-residency choices that respect UK transfers. We sign DPAs as a standard part of every engagement.',
      },
    ],
  },
  {
    slug: 'germany',
    country: 'Germany',
    code: 'DE',
    cities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Stuttgart'],
    currency: 'EUR',
    language: 'English & Deutsch',
    title:
      'KI-Entwicklung & Custom Software Company in Germany | MERN, React | Codentrixa',
    description:
      'Codentrixa is an AI development and custom software company serving German clients in Berlin, Munich, Frankfurt, and Hamburg — MERN, React, cross-platform mobile, AI-powered backends, and OpenAI integration. EUR billing, GDPR-ready.',
    eyebrow: 'Germany · EUR billing',
    h1: 'AI & Software Development Company for German Businesses',
    lede:
      'Codentrixa is the AI development and custom software partner for German Mittelstand and tech companies. From Berlin startups to Munich enterprises, we deliver MERN web platforms, React applications, cross-platform mobile apps, and AI-powered backends — billed in EUR, aligned to GDPR, and delivered with the documentation discipline German engineering teams expect.',
    keywords: [
      'web development company Germany',
      'AI development company Germany',
      'KI-Entwicklungsfirma',
      'Softwareentwicklung Berlin',
      'MERN stack developers Germany',
      'React development company Germany',
      'mobile app development Germany',
      'enterprise software company Germany',
      'SaaS development company Germany',
      'OpenAI integration services Germany',
    ],
    trustPoints: [
      'EUR billing on a single monthly invoice',
      'GDPR-aware engineering and EU-style contracts',
      'EU data residency available on AWS Frankfurt / GCP Frankfurt',
      'Engineering documentation written in English (or Deutsch on request)',
    ],
    featuredServices: [
      'ai-solutions',
      'web-development',
      'backend-development',
      'saas-product-development',
      'cloud-devops',
      'maintenance-support',
    ],
    industries: ['Industrie 4.0', 'Mittelstand SaaS', 'Mobility', 'Fintech', 'E-commerce', 'Logistics'],
    faqs: [
      {
        q: 'Stellen Sie GDPR-konforme Softwarelösungen bereit?',
        a: 'Ja — Codentrixa entwickelt Software- und KI-Lösungen, die von Anfang an GDPR-konform sind. Wir bieten EU-Daten-Residenz auf AWS Frankfurt oder GCP Frankfurt, unterzeichnen DPAs als Standardbestandteil jeder Engagement und dokumentieren Datenflüsse, sodass Ihre DPO und Ihr Datenschutzbeauftragter die Architektur prüfen können.',
      },
      {
        q: 'Do you work directly with German Mittelstand companies?',
        a: 'Yes. Codentrixa works with German Mittelstand manufacturers, SaaS vendors, and Berlin / Munich startups. We bill in EUR, sign EU-style contracts, host data in Frankfurt regions when required, and produce the level of written architecture documentation that German engineering and procurement teams expect.',
      },
    ],
  },
  {
    slug: 'switzerland',
    country: 'Switzerland',
    code: 'CH',
    cities: ['Zürich', 'Geneva', 'Basel', 'Lausanne', 'Bern', 'Zug'],
    currency: 'CHF',
    language: 'English, Deutsch, Français',
    title:
      'Best AI & Software Company in Switzerland | MERN, React, Mobile | Codentrixa',
    description:
      'Codentrixa is among the best AI development and software companies serving Swiss clients in Zürich, Geneva, Basel, and Zug — MERN, React, cross-platform mobile, AI-powered backends, OpenAI integration. CHF billing, Swiss-grade documentation.',
    eyebrow: 'Switzerland · CHF billing',
    h1: 'Best AI & Software Development Partner for Swiss Companies',
    lede:
      'Codentrixa is the AI and custom software partner for Swiss banking, pharma, and tech businesses. From Zürich fintechs to Geneva crypto firms and Basel pharma platforms, we deliver MERN-stack web applications, React platforms, AI-powered backends, and cross-platform mobile apps — billed in CHF with the precision Swiss procurement expects.',
    keywords: [
      'best software company in Switzerland',
      'AI development company Switzerland',
      'MERN stack developers Switzerland',
      'React development company Zürich',
      'mobile app development Switzerland',
      'fintech software development Switzerland',
      'AI automation agency Switzerland',
      'enterprise software company Switzerland',
      'cross-platform mobile app development Switzerland',
      'OpenAI integration services Switzerland',
    ],
    trustPoints: [
      'CHF billing on a single monthly invoice',
      'Swiss data residency available on AWS Zurich and GCP Zürich',
      'FINMA / FADP-aware engineering for banking and crypto',
      'English-first delivery, with Deutsch / Français on request',
    ],
    featuredServices: [
      'ai-solutions',
      'web-development',
      'saas-product-development',
      'mobile-app-development',
      'cloud-devops',
      'it-consulting',
    ],
    industries: ['Banking & fintech', 'Crypto & blockchain', 'Pharma', 'Insurance', 'Trading'],
    faqs: [
      {
        q: 'Why is Codentrixa considered one of the best software companies in Switzerland?',
        a: 'Codentrixa is considered one of the best software development companies serving Switzerland because we combine senior-only engineering, Swiss data residency on AWS Zurich, CHF billing on a single monthly invoice, FINMA / FADP-aware delivery, and a strict two-week sprint cadence — backed by AI-powered backends, MERN, React, and cross-platform mobile expertise that few offshore vendors match.',
      },
      {
        q: 'Can you host Swiss client data in Switzerland?',
        a: 'Yes. Codentrixa can deploy your application on AWS Zurich (eu-central-2) or GCP Zürich for Swiss data residency. We design data flows that keep primary storage, logs, and backups inside Swiss borders, sign FADP / DPA agreements, and document the architecture for your DPO or banking compliance team.',
      },
    ],
  },
  {
    slug: 'luxembourg',
    country: 'Luxembourg',
    code: 'LU',
    cities: ['Luxembourg City'],
    currency: 'EUR',
    language: 'English, Français, Deutsch',
    title:
      'AI Automation Agency & Software Company in Luxembourg | Codentrixa',
    description:
      'Codentrixa is an AI automation agency and custom software company serving Luxembourg fintech, fund admin, and EU institutions — MERN, React, cross-platform mobile, AI-powered backends, and OpenAI integration. EUR billing.',
    eyebrow: 'Luxembourg · EUR billing',
    h1: 'AI Automation & Software Development Partner for Luxembourg',
    lede:
      'Codentrixa is the AI automation agency and custom software partner for Luxembourg fintech, fund administration, and EU-institutional clients. We deliver MERN web platforms, React applications, AI-powered backends, AI agents, and cross-platform mobile apps — billed in EUR, hosted in EU regions, and documented to Luxembourg-grade compliance standards.',
    keywords: [
      'AI automation agency Luxembourg',
      'software development company Luxembourg',
      'AI development company Luxembourg',
      'MERN stack developers Luxembourg',
      'React development company Luxembourg',
      'fund administration software Luxembourg',
      'fintech software Luxembourg',
      'OpenAI integration services Luxembourg',
      'enterprise software company Luxembourg',
      'mobile app development Luxembourg',
    ],
    trustPoints: [
      'EUR billing on a single monthly invoice',
      'EU data residency on AWS Frankfurt, Paris, or GCP Belgium',
      'Comfortable with CSSF / fund admin documentation expectations',
      'English-first, with Français / Deutsch on request',
    ],
    featuredServices: [
      'ai-solutions',
      'saas-product-development',
      'backend-development',
      'web-development',
      'cloud-devops',
      'it-consulting',
    ],
    industries: ['Fintech', 'Fund administration', 'EU institutions', 'InsurTech', 'SaaS'],
    faqs: [
      {
        q: 'Do you work with Luxembourg fintech and fund-administration firms?',
        a: 'Yes — Codentrixa works with Luxembourg fintechs, fund administrators, and EU-institutional clients. We deliver AI-powered backends, MERN-stack platforms, and AI automation in EUR billing with EU data residency, and we are comfortable with the documentation rigor expected by CSSF-supervised entities.',
      },
      {
        q: 'Can you act as an outsourced AI automation team for a Luxembourg company?',
        a: 'Yes. Codentrixa acts as an embedded AI automation partner for Luxembourg companies that want to deploy generative AI, AI agents, OpenAI integrations, or workflow automation. We operate on a single monthly invoice in EUR, sign EU-style DPAs, and integrate into your existing engineering or operations team.',
      },
    ],
  },
  {
    slug: 'netherlands',
    country: 'Netherlands',
    code: 'NL',
    cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven'],
    currency: 'EUR',
    language: 'English & Nederlands',
    title:
      'AI & Software Development Company in the Netherlands | MERN, React | Codentrixa',
    description:
      'Codentrixa is an AI development and custom software company serving Dutch clients in Amsterdam, Rotterdam, The Hague, and Utrecht — MERN, React, cross-platform mobile, AI-powered backends, and OpenAI integration.',
    eyebrow: 'Netherlands · EUR billing',
    h1: 'AI & Software Development Partner for Dutch Companies',
    lede:
      'Codentrixa is the AI development and custom software partner for Dutch startups, scale-ups, and enterprises. From Amsterdam SaaS companies to Eindhoven hardware-software platforms, we deliver MERN web platforms, React apps, AI-powered backends, and cross-platform mobile products — billed in EUR with EU data residency.',
    keywords: [
      'IT services company Netherlands',
      'AI development company Netherlands',
      'software development company Amsterdam',
      'MERN stack developers Netherlands',
      'React development company Netherlands',
      'mobile app development Netherlands',
      'SaaS development Netherlands',
      'AI automation agency Netherlands',
      'enterprise software company Netherlands',
      'OpenAI integration services Netherlands',
    ],
    trustPoints: [
      'EUR billing on a single monthly invoice',
      'EU data residency available',
      'GDPR-ready engineering and Dutch-friendly contracts',
      'Full overlap with CET / CEST working hours',
    ],
    featuredServices: [
      'ai-solutions',
      'web-development',
      'mobile-app-development',
      'saas-product-development',
      'backend-development',
      'cloud-devops',
    ],
    industries: ['SaaS', 'Logistics', 'AgriTech', 'Fintech', 'E-commerce'],
    faqs: [
      {
        q: 'Do you work directly with Dutch companies in Amsterdam and Rotterdam?',
        a: 'Yes — Codentrixa works directly with Dutch companies across Amsterdam, Rotterdam, The Hague, Utrecht, and Eindhoven. We bill in EUR, sign EU-style MSAs, host data in EU AWS regions, and align our two-week sprint cadence with CET / CEST working hours so daily stand-ups happen in your working day.',
      },
      {
        q: 'Are you GDPR compliant for Dutch clients?',
        a: 'Yes. Codentrixa builds AI and software products with GDPR built in — DPA agreements as standard, EU data residency, audit logs, and documented data-flow diagrams that satisfy Dutch DPO reviews. We work with the Autoriteit Persoonsgegevens guidance when scoping data-heavy AI products.',
      },
    ],
  },
  {
  slug: 'india',
  country: 'India',
  code: 'IN',
  cities: ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune'],
  currency: 'INR',
  language: 'English & Hindi',
  title:
    'AI & Software Development Company in India | MERN, React | Codentrixa',
  description:
    'Codentrixa is an AI development and custom software company serving Indian startups and enterprises in Bangalore, Mumbai, Delhi, Hyderabad, and Pune — MERN, React, cross-platform mobile, AI-powered backends, and OpenAI integration.',
  eyebrow: 'India · INR billing',
  h1: 'AI & Software Development Partner for Indian Companies',
  lede:
    'Codentrixa is the AI development and custom software partner for Indian startups, SaaS businesses, and enterprises. From Bangalore tech startups to Mumbai e-commerce platforms, we deliver MERN web applications, React apps, AI-powered backends, and scalable cross-platform mobile products — billed in INR or USD with scalable cloud infrastructure.',
  keywords: [
    'IT services company India',
    'AI development company India',
    'software development company Bangalore',
    'MERN stack developers India',
    'React development company India',
    'mobile app development India',
    'SaaS development India',
    'AI automation agency India',
    'enterprise software company India',
    'OpenAI integration services India',
  ],
  trustPoints: [
    'INR & USD billing support',
    'Scalable offshore development team',
    'Agile sprint-based product delivery',
    'Full overlap with IST working hours',
  ],
  featuredServices: [
    'ai-solutions',
    'web-development',
    'mobile-app-development',
    'saas-product-development',
    'backend-development',
    'cloud-devops',
  ],
  industries: ['SaaS', 'Fintech', 'Healthcare', 'E-commerce', 'EdTech'],
  faqs: [
    {
      q: 'Do you work directly with Indian startups and enterprises?',
      a: 'Yes — Codentrixa works with startups, SMEs, and enterprises across Bangalore, Mumbai, Delhi, Hyderabad, and Pune. We provide scalable development teams, agile sprint delivery, and flexible INR or USD billing models.',
    },
    {
      q: 'Do you provide AI and MERN stack development services in India?',
      a: 'Yes. Codentrixa specializes in MERN stack development, AI-powered applications, OpenAI integrations, SaaS platforms, and cross-platform mobile app development tailored for Indian businesses.',
    },
  ],
},
  {
    slug: 'france',
    country: 'France',
    code: 'FR',
    cities: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Bordeaux'],
    currency: 'EUR',
    language: 'English & Français',
    title:
      "Société de développement IA & logiciel en France | MERN, React | Codentrixa",
    description:
      'Codentrixa est une société de développement IA et de logiciels sur mesure servant les clients français à Paris, Lyon, Marseille et Toulouse — MERN, React, applications mobiles cross-platform, backends AI, intégration OpenAI.',
    eyebrow: 'France · EUR billing',
    h1: 'AI & Software Development Partner for French Businesses',
    lede:
      'Codentrixa is the AI development and custom software partner for French startups and enterprises. From Paris SaaS companies to Lyon fintechs, we deliver MERN-stack web platforms, React applications, AI-powered backends, and cross-platform mobile apps — billed in EUR, RGPD-ready, with documentation available in Français.',
    keywords: [
      'AI development company France',
      'software development company Paris',
      'développement logiciel sur mesure',
      'agence de développement IA',
      'MERN stack developers France',
      'React development company France',
      'mobile app development France',
      'SaaS development France',
      'enterprise software company France',
      'OpenAI integration services France',
    ],
    trustPoints: [
      'EUR billing on a single monthly invoice',
      'RGPD / GDPR-ready engineering',
      'EU data residency on AWS Paris / GCP Paris',
      'Documentation available in Français on request',
    ],
    featuredServices: [
      'ai-solutions',
      'web-development',
      'saas-product-development',
      'mobile-app-development',
      'backend-development',
      'cloud-devops',
    ],
    industries: ['SaaS', 'Luxury & retail', 'Fintech', 'Media', 'AgriTech'],
    faqs: [
      {
        q: 'Travaillez-vous avec des entreprises françaises ?',
        a: "Oui — Codentrixa travaille avec des entreprises françaises à Paris, Lyon, Marseille, Toulouse et Bordeaux. Nous facturons en EUR sur une seule facture mensuelle, signons des MSAs de style européen, hébergeons les données chez AWS Paris ou GCP Paris, et pouvons produire la documentation en Français à la demande.",
      },
      {
        q: 'Are you RGPD compliant for French AI projects?',
        a: 'Yes. Codentrixa delivers AI and software products with RGPD / GDPR principles built in — lawful basis tracking, data minimization, DPA agreements, and EU data residency. We work with CNIL guidance when scoping high-risk AI features and produce the documentation French DPOs expect.',
      },
    ],
  },
  {
    slug: 'canada',
    country: 'Canada',
    code: 'CA',
    cities: ['Toronto', 'Vancouver', 'Montréal', 'Calgary', 'Ottawa'],
    currency: 'CAD',
    language: 'English & Français',
    title:
      'AI Development & Software Company in Canada | MERN, React, Mobile | Codentrixa',
    description:
      'Codentrixa is an AI development and custom software company for Canadian clients in Toronto, Vancouver, Montréal, and Calgary — MERN, React, cross-platform mobile, AI-powered backends, and OpenAI integration. CAD or USD billing.',
    eyebrow: 'Canada · CAD billing',
    h1: 'AI & Software Development Partner for Canadian Businesses',
    lede:
      'Codentrixa is the AI development and custom software partner for Canadian startups and enterprises. From Toronto fintechs to Vancouver SaaS companies and Montréal AI labs, we deliver MERN web platforms, React applications, AI-powered backends, and cross-platform mobile apps — billed in CAD or USD with Canadian-style contracts.',
    keywords: [
      'AI development company Canada',
      'software development company Toronto',
      'MERN stack developers Canada',
      'React development company Canada',
      'mobile app development Canada',
      'SaaS development Canada',
      'AI automation agency Canada',
      'enterprise software company Canada',
      'cross-platform mobile app development Canada',
      'OpenAI integration services Canada',
    ],
    trustPoints: [
      'CAD or USD billing on a single monthly invoice',
      'PIPEDA-aware engineering and Canadian-style contracts',
      'Full overlap with Pacific, Mountain, Central, and Eastern time zones',
      'English & French documentation available on request',
    ],
    featuredServices: [
      'ai-solutions',
      'web-development',
      'mobile-app-development',
      'saas-product-development',
      'backend-development',
      'cloud-devops',
    ],
    industries: ['SaaS', 'Fintech', 'AI / ML', 'Health-tech', 'E-commerce', 'Mining-tech'],
    faqs: [
      {
        q: 'Do you bill in CAD and sign Canadian contracts?',
        a: 'Yes. Codentrixa bills Canadian clients in CAD (or USD) on a single monthly invoice and signs Canadian-style MSAs, SOWs, and NDAs. We are familiar with PIPEDA and provincial privacy regimes such as Québec Law 25, and design AI and software systems with those requirements in mind.',
      },
      {
        q: 'Can you provide bilingual English / French documentation?',
        a: 'Yes — Codentrixa delivers documentation in English by default and can provide French translations of user-facing copy, API references, and key architecture documents for Québec-based clients. Our engagement contracts can be drafted bilingually on request.',
      },
    ],
  },
  {
    slug: 'australia',
    country: 'Australia',
    code: 'AU',
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    currency: 'AUD',
    language: 'English',
    title:
      'AI Development & Software Company in Australia | MERN, React, Mobile | Codentrixa',
    description:
      'Codentrixa is an AI development and custom software company for Australian clients in Sydney, Melbourne, Brisbane, and Perth — MERN, React, cross-platform mobile, AI-powered backends, and OpenAI integration. AUD billing.',
    eyebrow: 'Australia · AUD billing',
    h1: 'AI & Software Development Partner for Australian Businesses',
    lede:
      'Codentrixa is the AI development and custom software partner for Australian startups and enterprises. From Sydney fintechs to Melbourne SaaS companies and Brisbane scale-ups, we deliver MERN web platforms, React applications, AI-powered backends, and cross-platform mobile apps — billed in AUD with full AEST / AEDT overlap.',
    keywords: [
      'AI development company Australia',
      'software development company Sydney',
      'MERN stack developers Australia',
      'React development company Australia',
      'mobile app development Australia',
      'SaaS development Australia',
      'AI automation agency Australia',
      'enterprise software company Australia',
      'cross-platform mobile app development Australia',
      'OpenAI integration services Australia',
    ],
    trustPoints: [
      'AUD billing on a single monthly invoice',
      'Full overlap with AEST / AEDT working hours',
      'Australian Privacy Principles (APPs) aware engineering',
      'Hosting in AWS Sydney for Australian data residency',
    ],
    featuredServices: [
      'ai-solutions',
      'web-development',
      'mobile-app-development',
      'saas-product-development',
      'backend-development',
      'cloud-devops',
    ],
    industries: ['SaaS', 'Fintech', 'AgriTech', 'MiningTech', 'E-commerce', 'Health-tech'],
    faqs: [
      {
        q: 'Do you work with Australian companies in Sydney and Melbourne?',
        a: 'Yes — Codentrixa works with Australian companies across Sydney, Melbourne, Brisbane, Perth, and Adelaide. We bill in AUD on a single monthly invoice, run on AEST / AEDT-overlapping shifts, host data in AWS Sydney when required, and design AI and software systems with the Australian Privacy Principles in mind.',
      },
      {
        q: 'Can you host applications in AWS Sydney for Australian data residency?',
        a: 'Yes. Codentrixa can deploy your application stack on AWS Sydney (ap-southeast-2) or GCP Sydney for Australian data residency. We design data flows that keep primary storage and backups inside Australian borders and document the architecture for your privacy or board review.',
      },
    ],
  },
  {
    slug: 'dubai-uae',
    country: 'United Arab Emirates (Dubai)',
    code: 'AE',
    cities: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    currency: 'AED',
    language: 'English & العربية',
    title:
      'AI Development & Software Company in Dubai, UAE | MERN, React, Mobile | Codentrixa',
    description:
      'Codentrixa is an AI development and custom software company for clients in Dubai, Abu Dhabi, and the UAE — MERN, React, cross-platform mobile, AI-powered backends, and OpenAI integration. AED or USD billing, Gulf-time overlap.',
    eyebrow: 'United Arab Emirates · AED billing',
    h1: 'AI & Software Development Partner for UAE Businesses',
    lede:
      'Codentrixa is the AI development and custom software partner for ambitious businesses across the UAE — Dubai fintechs, Abu Dhabi government partners, free-zone SaaS startups, and family-office groups. We deliver MERN platforms, React apps, AI-powered backends, and cross-platform mobile products on AED or USD billing with full Gulf-time overlap.',
    keywords: [
      'AI development company Dubai',
      'software development company UAE',
      'MERN stack developers Dubai',
      'React development company Dubai',
      'mobile app development Dubai',
      'SaaS development UAE',
      'AI automation agency Dubai',
      'enterprise software company UAE',
      'cross-platform mobile app development Dubai',
      'OpenAI integration services UAE',
    ],
    trustPoints: [
      'AED or USD billing on a single monthly invoice',
      'Full overlap with Gulf Standard Time',
      'Free-zone and mainland UAE entity contracts both supported',
      'Hosting in AWS UAE / Bahrain for regional data residency',
    ],
    featuredServices: [
      'ai-solutions',
      'mobile-app-development',
      'web-development',
      'saas-product-development',
      'backend-development',
      'cloud-devops',
    ],
    industries: ['Fintech', 'Real estate', 'Government / smart-city', 'Logistics', 'E-commerce', 'Hospitality'],
    faqs: [
      {
        q: 'Do you work with companies in Dubai and the wider UAE?',
        a: 'Yes — Codentrixa works with companies across Dubai, Abu Dhabi, and Sharjah, including DIFC / ADGM-licensed fintechs and mainland UAE entities. We bill in AED or USD, support both free-zone and mainland contracting structures, and run on Gulf-time-overlapping shifts for real-time delivery.',
      },
      {
        q: 'Can you host applications inside the UAE region?',
        a: 'Yes. Codentrixa can deploy on AWS UAE (me-central-1), AWS Bahrain (me-south-1), or other regional providers to meet UAE data-residency expectations. We design data flows that keep regulated data inside the region and document the architecture for regulators and internal compliance teams.',
      },
    ],
  },
  {
    slug: 'singapore',
    country: 'Singapore',
    code: 'SG',
    cities: ['Singapore'],
    currency: 'SGD',
    language: 'English',
    title:
      'AI Development & Software Company in Singapore | MERN, React, Mobile | Codentrixa',
    description:
      'Codentrixa is an AI development and custom software company for Singapore clients — MERN, React, cross-platform mobile, AI-powered backends, OpenAI integration. SGD or USD billing, PDPA-aware engineering, APAC-time overlap.',
    eyebrow: 'Singapore · SGD billing',
    h1: 'AI & Software Development Partner for Singapore Businesses',
    lede:
      'Codentrixa is the AI development and custom software partner for Singapore fintechs, SaaS companies, family offices, and regional hubs. We deliver MERN web platforms, React applications, AI-powered backends, and cross-platform mobile apps — billed in SGD or USD with PDPA-aware engineering and full SGT overlap.',
    keywords: [
      'AI development company Singapore',
      'software development company Singapore',
      'MERN stack developers Singapore',
      'React development company Singapore',
      'mobile app development Singapore',
      'SaaS development Singapore',
      'AI automation agency Singapore',
      'enterprise software company Singapore',
      'cross-platform mobile app development Singapore',
      'OpenAI integration services Singapore',
    ],
    trustPoints: [
      'SGD or USD billing on a single monthly invoice',
      'PDPA-aware engineering and Singapore-style contracts',
      'Full overlap with SGT working hours',
      'Hosting in AWS Singapore for regional data residency',
    ],
    featuredServices: [
      'ai-solutions',
      'web-development',
      'mobile-app-development',
      'saas-product-development',
      'backend-development',
      'cloud-devops',
    ],
    industries: ['Fintech', 'SaaS', 'Crypto', 'Logistics', 'Family offices', 'E-commerce'],
    faqs: [
      {
        q: 'Do you support PDPA compliance for Singapore clients?',
        a: 'Yes. Codentrixa builds AI and software products with Singapore PDPA principles built in — purpose limitation, consent tracking, breach-notification readiness, and clear data-flow documentation. We sign Singapore-style MSAs, host data in AWS Singapore (ap-southeast-1), and align with MAS guidance for regulated fintech use cases.',
      },
      {
        q: 'Can you bill in SGD and work on Singapore time?',
        a: 'Yes — Codentrixa bills Singapore clients in SGD (or USD) on a single monthly invoice and runs on Singapore-Standard-Time-overlapping shifts. Daily stand-ups, sprint reviews, and emergency response all happen inside your working day, with no overnight latency.',
      },
    ],
  },
];

export function getCountryBySlug(slug: string): CountryLanding | undefined {
  return COUNTRIES.find((c) => c.slug === slug);
}

export function getAllCountrySlugs(): string[] {
  return COUNTRIES.map((c) => c.slug);
}
