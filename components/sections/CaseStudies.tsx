'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, CircleCheckBig } from 'lucide-react';
import { CASE_STUDIES, CASE_STUDY_CATEGORIES } from '@/lib/constants';

type Props = {
  /** Compact preview for the home page (no filters, limited count). */
  preview?: boolean;
};

export default function CaseStudies({ preview = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState<string>('All');

  const list = preview
    ? CASE_STUDIES.slice(0, 3)
    : active === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === active);

  return (
    <section id="case-studies" className="section-padding" style={{ background: 'var(--bg)' }}>
      <div className="container-custom" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="eyebrow">Case studies</span>
            <h2 className="h-section mt-3 text-balance">
              Real problems. Real outcomes. Real numbers.
            </h2>
            <p className="lede mt-4 text-pretty">
              We don&apos;t do portfolio screenshots. Each engagement below is a problem we walked
              into, the system we built, and the results that followed.
            </p>
          </div>
          {preview && (
            <Link href="/case-studies" className="btn-secondary self-start md:self-end">
              Explore all case studies <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Filter chips */}
        {!preview && (
          <div className="flex flex-wrap gap-2 mb-8">
            {CASE_STUDY_CATEGORIES.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                  style={{
                    background: isActive ? 'var(--accent)' : 'var(--card)',
                    color: isActive ? '#fff' : 'var(--ink)',
                    border: `1px solid ${isActive ? 'var(--accent)' : 'var(--line)'}`,
                  }}
                >
                  {c}
                </button>
              );
            })}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {list.map((c, i) => (
            <motion.article
              key={c.slug}
              className="card-surface p-6 flex flex-col"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: (i % 3) * 0.06, duration: 0.5 }}
            >
              <span
                className="self-start text-[11px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full mb-4"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent-dark)' }}
              >
                {c.category}
              </span>
              <h3 className="text-lg font-semibold leading-snug" style={{ color: 'var(--ink)' }}>
                {c.title}
              </h3>
              <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}>
                {c.summary}
              </p>

              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="text-[11px] font-semibold tracking-[0.16em] uppercase" style={{ color: 'var(--muted)' }}>
                    Problem
                  </dt>
                  <dd className="mt-1" style={{ color: 'var(--ink)' }}>{c.problem}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold tracking-[0.16em] uppercase" style={{ color: 'var(--muted)' }}>
                    Solution
                  </dt>
                  <dd className="mt-1" style={{ color: 'var(--ink)' }}>{c.solution}</dd>
                </div>
              </dl>

              <ul className="mt-5 space-y-2">
                {c.outcomes.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: 'var(--ink)' }}
                  >
                    <CircleCheckBig className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 flex flex-wrap gap-1.5" style={{ borderTop: '1px solid var(--line)' }}>
                {c.technologies.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
