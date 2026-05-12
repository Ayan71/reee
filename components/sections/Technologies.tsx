'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { TECH_STACK, TECH_DETAIL_SLUGS } from '@/lib/constants';

// slugify display name → match TECH_DETAIL_SLUGS where one exists
const NAME_TO_SLUG: Record<string, string> = {
  React: 'react',
  Flutter: 'flutter',
  'Node.js': 'nodejs',
  'Android Native': 'android-native',
  Firebase: 'firebase',
};

export default function Technologies() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const categories = Object.keys(TECH_STACK) as (keyof typeof TECH_STACK)[];

  return (
    <section id="technologies" className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container-custom" ref={ref}>
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Technology stack</span>
          <h2 className="h-section mt-3 text-balance">
            Mature, battle-tested tooling — chosen for outcomes, not novelty.
          </h2>
          <p className="lede mt-4 text-pretty">
            We&apos;re intentionally narrow on the stack. Every technology below is one we ship
            in production today, with senior engineers who know it cold.
          </p>
        </div>

        <div className="space-y-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat}
              className="card-flat p-5 md:p-6"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--muted)' }}>
                  {cat}
                </h3>
                <span className="text-xs" style={{ color: 'var(--muted)' }}>
                  {TECH_STACK[cat].length} tools
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK[cat].map((t) => {
                  const slug = NAME_TO_SLUG[t];
                  const hasDetail = slug && (TECH_DETAIL_SLUGS as readonly string[]).includes(slug);
                  const className = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors';
                  const style = {
                    background: 'var(--bg)',
                    border: '1px solid var(--line)',
                    color: 'var(--ink)',
                  };
                  return hasDetail ? (
                    <Link key={t} href={`/technologies/${slug}`} className={`${className} hover:border-[var(--accent)]`} style={style}>
                      {t}
                      <ArrowUpRight className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                    </Link>
                  ) : (
                    <span key={t} className={className} style={style}>
                      {t}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm" style={{ color: 'var(--muted)' }}>
          <span>
            Looking for a deep dive?
          </span>
        <div className="flex flex-wrap gap-2">
  {TECH_DETAIL_SLUGS.map((s, index) => (
    <span key={s} className="text-sm font-medium">
      <Link
        href={`/technologies/${s}`}
        className="hover:underline"
        style={{ color: 'var(--accent)' }}
      >
        {s
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase())}
      </Link>

      {index !== TECH_DETAIL_SLUGS.length - 1 && ', '}
    </span>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}
