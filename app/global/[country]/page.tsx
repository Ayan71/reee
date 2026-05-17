import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Sparkles,
  Layers,
  Globe,
  Smartphone,
  Server,
  BrainCircuit,
  Box,
  Cloud,
  Briefcase,
  LifeBuoy,
  Plug,
  Palette,
  MonitorSmartphone,
  UserPlus,
  Handshake,
  Building2,
} from 'lucide-react';
import PageHeader from '@/components/sections/PageHeader';
import FAQAI from '@/components/sections/FAQAI';
import CTA from '@/components/sections/CTA';
import JsonLd from '@/components/seo/JsonLd';
import { buildMetadata, breadcrumbLd, faqLd, serviceLd, SITE_URL } from '@/lib/seo';
import { COUNTRIES, getCountryBySlug } from '@/lib/countries';
import { SERVICES } from '@/lib/constants';

type Params = { params: { country: string } };

const ICONS: Record<string, React.ElementType> = {
  globe: Globe,
  smartphone: Smartphone,
  layers: Layers,
  'monitor-smartphone': MonitorSmartphone,
  server: Server,
  'brain-circuit': BrainCircuit,
  box: Box,
  palette: Palette,
  plug: Plug,
  cloud: Cloud,
  'life-buoy': LifeBuoy,
  'user-plus': UserPlus,
  briefcase: Briefcase,
  handshake: Handshake,
};

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ country: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const c = getCountryBySlug(params.country);
  if (!c) {
    return buildMetadata({
      title: 'Country not found',
      description: 'The country landing page you are looking for does not exist.',
      path: `/global/${params.country}`,
      noindex: true,
    });
  }
  return buildMetadata({
    title: c.title,
    description: c.description,
    path: `/global/${c.slug}`,
    keywords: c.keywords,
  });
}

export default function CountryPage({ params }: Params) {
  const c = getCountryBySlug(params.country);
  if (!c) notFound();

  const featured = SERVICES.filter((s) => c.featuredServices.includes(s.slug));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Global', path: '/global' },
            { name: c.country, path: `/global/${c.slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: `Codentrixa — ${c.country}`,
            url: `${SITE_URL}/global/${c.slug}`,
            description: c.description,
            areaServed: { '@type': 'Country', name: c.country },
            serviceType:
              'AI development, custom software development, MERN stack, React, cross-platform mobile, SaaS, OpenAI integration',
            currenciesAccepted: c.currency,
            provider: { '@id': `${SITE_URL}/#organization` },
          },
          ...featured.map((s) =>
            serviceLd({
              name: `${s.title} in ${c.country}`,
              description: s.detail,
              path: `/global/${c.slug}#${s.slug}`,
            }),
          ),
          faqLd(c.faqs),
        ]}
      />

      <PageHeader
        eyebrow={c.eyebrow}
        title={c.h1}
        description={c.lede}
        chips={[`Currency: ${c.currency}`, `Language: ${c.language}`, ...c.cities.slice(0, 4)]}
      />

      {/* Trust strip */}
      <section className="section-tight pt-2" style={{ background: 'var(--bg)' }}>
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {c.trustPoints.map((t) => (
              <div
                key={t}
                className="card-flat p-5 flex gap-3 items-start"
              >
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                <span className="text-sm" style={{ color: 'var(--ink)' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
        <div className="container-custom">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">Featured services</span>
            <h2 className="h-section mt-3 text-balance">
              What we build for {c.country}-based clients.
            </h2>
            <p className="lede mt-4 text-pretty">
              The services in highest demand in {c.country} — engineered by senior remote engineers
              and delivered on a single monthly invoice in {c.currency}.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {featured.map((s) => {
              const Icon = ICONS[s.icon] || Sparkles;
              return (
                <article key={s.slug} id={s.slug} className="card-surface p-6 flex flex-col scroll-mt-32">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'var(--accent-soft)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: 'var(--accent-dark)' }} />
                  </div>
                  <h3 className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
                    {s.title} in {c.country}
                  </h3>
                  <p className="text-sm mt-2 flex-1 leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {s.detail}
                  </p>
                  <Link
                    href={`/services#detail-${s.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold"
                    style={{ color: 'var(--accent)' }}
                  >
                    Service details <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-tight" style={{ background: 'var(--bg)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow">Industries</span>
              <h2 className="h-section mt-3 text-balance">
                Sectors we work with in {c.country}.
              </h2>
              <p className="lede mt-4 text-pretty">
                Our delivery playbook is industry-agnostic — but here are the verticals we have
                the deepest pattern library for in this market.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {c.industries.map((ind) => (
                <div key={ind} className="card-flat p-5 flex items-start gap-3">
                  <Building2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                  <div>
                    <h3 className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                      {ind}
                    </h3>
                    <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
                      End-to-end engineering for {ind.toLowerCase()} use cases.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where we work from / why remote */}
      <section className="section-tight" style={{ background: 'var(--surface)' }}>
        <div className="container-custom">
          <div className="card-flat p-7 md:p-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: 'var(--muted)' }}>
                <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                Remote · Global delivery
              </div>
              <h2 className="text-xl md:text-2xl font-semibold mt-3" style={{ color: 'var(--ink)' }}>
                A senior squad on {c.country} time, billed in {c.currency}.
              </h2>
              <p className="text-sm md:text-[15px] leading-relaxed mt-3" style={{ color: 'var(--ink)', opacity: 0.85 }}>
                Codentrixa is a remote-first studio with engineers distributed across overlapping
                time zones. For {c.country}-based clients that means real-time stand-ups in your
                working day, weekly Friday demos, and the discipline of a two-week sprint cadence —
                with no offshore quality drop.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              <Link href="/contact" className="btn-primary">
                Talk to an engineer <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                See live products <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQAI
        eyebrow={`FAQ · ${c.country}`}
        title={`Common questions from ${c.country}-based clients.`}
        description="Answers grounded in how we actually contract, bill, host, and deliver in this market."
        items={c.faqs}
      />

      <CTA
        eyebrow={`${c.country} engagement`}
        title={`Start an AI or software project in ${c.country} today.`}
        body={`Tell us what you are building. A delivery lead replies within one business day with a written plan, pricing in ${c.currency}, and a recommended start date.`}
      />
    </>
  );
}
