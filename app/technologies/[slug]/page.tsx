import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight, CircleCheckBig, Sparkles } from 'lucide-react';
import { TECH_DETAILS, type TechDetail } from '@/lib/tech-data';
import PageHeader from '@/components/sections/PageHeader';
import ProcessSteps from '@/components/sections/ProcessSteps';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return Object.keys(TECH_DETAILS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const tech = TECH_DETAILS[params.slug];
  if (!tech) return { title: 'Technology not found' };
  return {
    title: tech.meta.title,
    description: tech.meta.description,
    alternates: { canonical: `/technologies/${tech.slug}` },
  };
}

export default function TechDetailPage({ params }: PageProps) {
  const tech = TECH_DETAILS[params.slug];
  if (!tech) notFound();

  return (
    <>
      <PageHeader
        eyebrow={tech.tagline}
        title={tech.name}
        description={tech.hero}
      />

      {/* Overview + Why choose */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
        <div className="container-custom grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="eyebrow">Overview</span>
            <h2 className="h-section mt-3 text-balance">
              When we use {tech.name.replace(' Development', '')} — and why.
            </h2>
            <p className="lede mt-4 text-pretty">{tech.overview}</p>

            <div className="mt-8 card-flat p-5">
              <h3 className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: 'var(--muted)' }}>
                Our expertise
              </h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                {tech.expertise.map((e) => (
                  <li key={e} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                    <CircleCheckBig className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="eyebrow">Why choose this</span>
            <h2 className="h-section mt-3 text-balance">Reasons clients pick {tech.name.replace(' Development', '')}.</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {tech.whyChoose.map((w) => (
                <div key={w.title} className="card-surface p-5">
                  <Sparkles className="w-4 h-4 mb-3" style={{ color: 'var(--accent)' }} />
                  <h3 className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
                    {w.title}
                  </h3>
                  <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--muted)' }}>
                    {w.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features + Use cases */}
      <section className="section-padding" style={{ background: 'var(--bg)' }}>
        <div className="container-custom grid lg:grid-cols-2 gap-10">
          <div>
            <span className="eyebrow">Features</span>
            <h2 className="h-section mt-3 text-balance">What it brings to the table.</h2>
            <ul className="mt-6 space-y-3">
              {tech.features.map((f) => (
                <li key={f.title} className="card-surface p-5 flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent-dark)' }}
                  >
                    ★
                  </div>
                  <div>
                    <h3 className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
                      {f.title}
                    </h3>
                    <p className="text-sm leading-relaxed mt-1.5" style={{ color: 'var(--muted)' }}>
                      {f.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow">Use cases</span>
            <h2 className="h-section mt-3 text-balance">Where this tech really pays off.</h2>
            <div className="mt-6 grid grid-cols-1 gap-3 md:gap-4">
              {tech.useCases.map((u) => (
                <div key={u.title} className="card-surface p-5">
                  <h3 className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
                    {u.title}
                  </h3>
                  <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--muted)' }}>
                    {u.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development process */}
      <ProcessSteps
        eyebrow="Development process"
        title={`How we ship a ${tech.name.replace(' Development', '')} engagement.`}
        steps={tech.process}
        surface="surface"
      />

      {/* FAQs */}
      <FAQ
        eyebrow="FAQs"
        title={`Common questions about ${tech.name.replace(' Development', '')}.`}
        items={tech.faqs}
      />

      {/* Related services */}
      <RelatedServices tech={tech} />

      {/* CTA */}
      <CTA
        eyebrow={`Ready to build with ${tech.name.replace(' Development', '')}?`}
        title="Talk to a senior engineer this week."
        body="Tell us your goals and timeline. We’ll come back with a written delivery plan and a fixed first sprint within one business day."
      />
    </>
  );
}

function RelatedServices({ tech }: { tech: TechDetail }) {
  return (
    <section className="section-tight" style={{ background: 'var(--bg)' }}>
      <div className="container-custom">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
          <div>
            <span className="eyebrow">Related services</span>
            <h2 className="h-section mt-3" style={{ fontSize: '1.875rem' }}>
              Often paired with…
            </h2>
          </div>
          <Link href="/services" className="btn-ghost">
            All services <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {tech.related.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="card-surface p-5 flex items-center justify-between"
            >
              <span className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
                {r.label}
              </span>
              <ArrowRight className="w-4 h-4" style={{ color: 'var(--accent)' }} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
