// ─────────────────────────────────────────────────────────────────────────
//  SEO helpers — consistent metadata + JSON-LD across the site.
// ─────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next';

export const SITE_URL = 'https://codentrixa.com';
export const SITE_NAME = 'Codentrixa';
/**
 * Site description optimized for international SEO + AI search engines
 * (ChatGPT, Perplexity, Gemini, Google AI Overviews). High-intent NLP
 * keywords are folded in naturally: AI development, MERN, React, Node.js,
 * cross-platform mobile, enterprise software, USA / Europe / UAE / Asia.
 */
export const SITE_DESCRIPTION =
  'Codentrixa is a global AI development and custom software company building AI-powered backends, MERN stack web platforms, React applications, and cross-platform mobile apps for startups and enterprises across the USA, UK, Europe, Switzerland, Germany, Dubai, Singapore, and Australia. Custom software, SaaS, generative AI, OpenAI integration, and AI agent development — engineered by senior remote engineers.';
export const DEFAULT_OG_IMAGE = '/og-default.png';

/**
 * Canonical region keys used for hreflang, country landing pages, and
 * targeted JSON-LD. Add new keys here so every consumer stays in sync.
 */
export const TARGET_REGIONS = [
  'us', 'uk', 'eu', 'de', 'ch', 'lu', 'nl', 'fr', 'ca', 'au', 'ae', 'sg',
] as const;
export type TargetRegion = (typeof TARGET_REGIONS)[number];

type BuildMetaOptions = {
  /** Page-specific title — combined with the site title via the template. */
  title: string;
  /** ~155 character meta description. */
  description: string;
  /** Path relative to site root, e.g. "/services" or "/technologies/flutter". */
  path: string;
  /** Optional OG image override (relative or absolute URL). */
  image?: string;
  /** SEO keywords list — keep short and topical. */
  keywords?: string[];
  /** Set noindex true for legal stubs / drafts. */
  noindex?: boolean;
};

/**
 * Build a Next.js Metadata object with consistent OG, Twitter, canonical
 * URL, and robots directives. Designed to be called from every route's
 * `metadata` export.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  keywords,
  noindex = false,
}: BuildMetaOptions): Metadata {
  const canonical = path.startsWith('http') ? path : `${SITE_URL}${path}`;
  const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: absoluteImage, width: 1200, height: 630, alt: title }],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteImage],
      creator: '@codentrixa',
    },
  };
}

// ─────────────────────────────  JSON-LD helpers  ─────────────────────────

/** Organization schema — emitted once at the root layout. */
export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/codentrixa_logo_black_bg.png`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'contact@codentrixa.com',
        availableLanguage: ['English'],
      },
    ],
    // Social profile URLs — fill in once the real profiles are live.
    sameAs: [],
  } as const;
}

/** WebSite schema with a SiteLinks search box. */
export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
  } as const;
}

/** Service schema — used on /services and per-service detail pages. */
export function serviceLd(opts: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: 'Worldwide',
  } as const;
}

/** TechArticle schema — used on /technologies/[slug] for richer SERP. */
export function techArticleLd(opts: {
  name: string;
  description: string;
  path: string;
  about: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    about: opts.about,
    publisher: { '@id': `${SITE_URL}/#organization` },
    author: { '@id': `${SITE_URL}/#organization` },
  } as const;
}

/** JobPosting schema — used on /careers and per-role pages. */
export function jobPostingLd(opts: {
  title: string;
  description: string;
  experience: string;
  type: string; // Full-time, Part-time, Contract
  path: string;
}) {
  const today = new Date().toISOString().split('T')[0];
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: opts.title,
    description: opts.description,
    employmentType: opts.type.toUpperCase().replace(/[^A-Z]/g, '_'),
    datePosted: today,
    hiringOrganization: { '@id': `${SITE_URL}/#organization` },
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: { '@type': 'Country', name: 'Worldwide' },
    url: `${SITE_URL}${opts.path}`,
    experienceRequirements: opts.experience,
  } as const;
}

/** FAQPage schema — used on detail pages with a FAQ section. */
export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  } as const;
}

/** BreadcrumbList schema — used on every non-root page. */
export function breadcrumbLd(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  } as const;
}

/** Render JSON-LD as a script tag-friendly string. */
export function jsonLd(data: object | object[]) {
  return JSON.stringify(data);
}
