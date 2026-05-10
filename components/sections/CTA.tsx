'use client';

import Link from 'next/link';
import { ArrowRight, CalendarClock } from 'lucide-react';

type Props = {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CTA({
  eyebrow = 'Ready when you are',
  title = "Let's build something serious together.",
  body = 'Tell us what you’re building. We’ll come back within one business day with a clear next step — no boilerplate sales process, ever.',
  primaryHref = '/contact',
  primaryLabel = 'Start Project',
  secondaryHref = '/contact',
  secondaryLabel = 'Book Consultation',
}: Props) {
  return (
    <section className="section-tight" style={{ background: 'var(--bg)' }}>
      <div className="container-custom">
        <div
          className="relative overflow-hidden p-8 md:p-12 lg:p-16 rounded-[24px]"
          style={{
            background: 'linear-gradient(180deg, var(--card) 0%, var(--surface) 100%)',
            border: '1px solid var(--line)',
          }}
        >
          <div
            className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(245,92,26,0.16) 0%, transparent 65%)' }}
          />
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="eyebrow">{eyebrow}</span>
              <h2 className="h-section mt-3 text-balance">{title}</h2>
              <p className="lede mt-4 max-w-2xl text-pretty">{body}</p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              <Link href={primaryHref} className="btn-primary">
                {primaryLabel} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={secondaryHref} className="btn-secondary">
                <CalendarClock className="w-4 h-4" />
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
