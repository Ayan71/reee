import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Globe2 } from 'lucide-react';
import PageHeader from '@/components/sections/PageHeader';
import CTA from '@/components/sections/CTA';
import JsonLd from '@/components/seo/JsonLd';
import { buildMetadata, breadcrumbLd } from '@/lib/seo';
import { COUNTRIES } from '@/lib/countries';

const CANONICAL_PATH = '/global';

export const metadata: Metadata = buildMetadata({
  title:
    'Where We Work — AI & Software Development in USA, UK, Europe, Switzerland, Dubai, Singapore | Codentrixa',
  description:
    'Codentrixa delivers AI development, MERN, React, and cross-platform mobile work to clients across the USA, UK, Germany, Switzerland, Luxembourg, Netherlands, France, Canada, Australia, Dubai, and Singapore — billed in your currency.',
  path: CANONICAL_PATH,
  keywords: [
    'AI development company USA',
    'software development company UK',
    'AI development Switzerland',
    'AI automation agency Luxembourg',
    'mobile app development Dubai',
    'AI development company Singapore',
    'enterprise software company Europe',
    'offshore software development company',
  ],
});

export default function GlobalIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Where We Work', path: CANONICAL_PATH },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Codentrixa — Country landing pages',
            description:
              'AI development, MERN, React, and mobile services localized for each major market.',
            hasPart: COUNTRIES.map((c) => ({
              '@type': 'WebPage',
              name: c.title,
              url: `/global/${c.slug}`,
              about: c.country,
            })),
          },
        ]}
      />

      <PageHeader
        eyebrow="Where we work"
        title="AI & software delivery, localized to your market."
        description="Pick your country to see how we contract, bill, host, and deliver where you are — from USD billing in the US to CHF billing in Switzerland and AED billing in the UAE."
      />

      <section className="section-padding" style={{ background: 'var(--bg)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {COUNTRIES.map((c) => (
              <Link
                key={c.slug}
                href={`/global/${c.slug}`}
                className="card-surface p-6 flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent-dark)' }}
                  >
                    {c.code}
                  </span>
                  <div>
                    <div
                      className="text-[10px] font-semibold tracking-[0.18em] uppercase"
                      style={{ color: 'var(--muted)' }}
                    >
                      {c.currency} billing
                    </div>
                    <h3 className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
                      {c.country}
                    </h3>
                  </div>
                </div>

                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
                  {c.cities.slice(0, 4).join(' · ')}
                </p>

                <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--line)' }}>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: 'var(--ink)', opacity: 0.7 }}>
                    <Globe2 className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                    {c.language}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-xs font-semibold transition-transform group-hover:translate-x-0.5"
                    style={{ color: 'var(--accent)' }}
                  >
                    View market <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Don't see your market?"
        title="We work everywhere there is a stable internet connection."
        body="Tell us where you are and what you are building. We will come back within one business day with a written plan and pricing in your currency."
      />
    </>
  );
}
