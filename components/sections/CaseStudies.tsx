'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ArrowUpRight,
  CircleCheckBig,
  PlayCircle,
  Apple,
  Globe,
  ExternalLink,
  ImageIcon,
  Layers,
} from 'lucide-react';
import { CASE_STUDIES, CASE_STUDY_CATEGORIES } from '@/lib/constants';
import type { CaseStudyLink } from '@/lib/constants';

type Props = {
  /** Compact preview for the home page (no filters, limited count). */
  preview?: boolean;
};

const LINK_ICONS: Record<CaseStudyLink['icon'], React.ElementType> = {
  play: PlayCircle,
  apple: Apple,
  globe: Globe,
  external: ExternalLink,
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
    <section id="portfolio" className="section-padding" style={{ background: 'var(--bg)' }}>
      <div className="container-custom" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="eyebrow">Our work</span>
            <h2 className="h-section mt-3 text-balance">Portfolio</h2>
            <p className="lede mt-4 text-pretty">
              Apps and platforms we have designed, engineered, and deployed — with links to the live
              products you can install today.
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
          {list.map((c, i) => (
            <motion.article
              key={c.slug}
              id={c.slug}
              className="card-surface p-0 flex flex-col overflow-hidden scroll-mt-32"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: (i % 3) * 0.06, duration: 0.5 }}
            >
              {/* Logo banner */}
              <div
                className="relative h-44 md:h-48 flex items-center justify-center overflow-hidden"
              >
                {/* Decorative pattern */}
                <div
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(rgba(28,24,20,0.05) 1px, transparent 1px)',
                    backgroundSize: '14px 14px',
                  }}
                />
                {c.logo ? (
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-[0_18px_40px_-12px_rgba(28,24,20,0.30)]">
                    <Image
                      src={c.logo}
                      alt={`${c.title} logo`}
                      fill
                      sizes="(min-width: 768px) 112px, 96px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center"
                    style={{ background: 'var(--card)', border: '1px solid var(--line)' }}
                  >
                    <Layers className="w-8 h-8" style={{ color: 'var(--accent)' }} />
                  </div>
                )}
                {c.status && (
                  <span
                    className="absolute top-3 right-3 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full shadow-sm"
                    style={{ background: '#fff', color: '#16804A' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#22C55E' }} />
                    {c.status}
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-[11px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent-dark)' }}
                  >
                    {c.category}
                  </span>
                </div>

                {c.client && (
                  <div
                    className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-1"
                    style={{ color: 'var(--muted)' }}
                  >
                    {c.client}
                  </div>
                )}
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

                {c.links && c.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2 pt-1">
                    {c.links.map((l) => {
                      const Icon = LINK_ICONS[l.icon] || ExternalLink;
                      return (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-transform hover:-translate-y-0.5"
                          style={{
                            background: 'var(--ink)',
                            color: '#fff',
                          }}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {l.label}
                          <ArrowUpRight className="w-3 h-3 opacity-80" />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.article>
          ))}

          {/* "More projects coming soon" tile — keeps the grid balanced when small */}
          {!preview && list.length < 6 && (
            <motion.div
              className="card-flat p-6 flex flex-col items-center justify-center text-center min-h-[420px] border-dashed"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                borderStyle: 'dashed',
                background:
                  'repeating-linear-gradient(135deg, var(--card) 0 12px, var(--surface) 12px 24px)',
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: 'var(--accent-soft)' }}
              >
                <ImageIcon className="w-6 h-6" style={{ color: 'var(--accent-dark)' }} />
              </div>
              <h3 className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
                More projects on the way
              </h3>
              <p className="text-sm mt-2 max-w-xs" style={{ color: 'var(--muted)' }}>
                We are shipping new client products every quarter. Want yours featured here next?
              </p>
              <Link href="/contact" className="btn-secondary mt-5 py-2 px-4 text-sm">
                Start a project <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
