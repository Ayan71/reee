'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  UserRoundCog, Globe2, UsersRound, Rocket, CalendarClock,
  ArrowRight, ArrowUpRight,
} from 'lucide-react';
import { OUTSOURCING_OFFERS, ENGAGEMENT_MODELS } from '@/lib/constants';

const ICONS: Record<string, React.ElementType> = {
  'user-round-cog': UserRoundCog,
  'globe-2': Globe2,
  'users-round': UsersRound,
  rocket: Rocket,
  'calendar-clock': CalendarClock,
};

const HIGHLIGHTS = [
  'Flexible engagement models',
  'Remote collaboration',
  'Monthly hiring model',
  'Scalable teams',
  'Cost-efficient development',
];

type Props = {
  /** Render in compact form (home page teaser). */
  compact?: boolean;
};

export default function Outsourcing({ compact = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="outsourcing"
      className={compact ? 'section-tight' : 'section-padding'}
      style={{ background: 'var(--bg)' }}
    >
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Intro column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="eyebrow">Outsourcing services</span>
            <h2 className="h-section mt-3 text-balance">
              Extend your team with senior engineers, on a monthly invoice.
            </h2>
            <p className="lede mt-4 text-pretty">
              Whether you need a single dedicated developer or a full offshore squad, we plug in fast,
              align with your stack, and ship alongside your in-house team.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--ink)' }}>
                  <span
                    className="inline-flex w-5 h-5 rounded-full items-center justify-center"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent-dark)' }}
                  >
                    ✓
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Hire Remote Team <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Outsource Your Project
              </Link>
            </div>
          </div>

          {/* Cards column */}
          <div className="lg:col-span-7 space-y-3">
            {OUTSOURCING_OFFERS.map((o, i) => {
              const Icon = ICONS[o.icon] || UsersRound;
              return (
                <motion.div
                  key={o.title}
                  className="card-surface p-5 md:p-6 flex items-start gap-4"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'var(--accent-soft)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: 'var(--accent-dark)' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
                      {o.title}
                    </h3>
                    <p className="text-sm leading-relaxed mt-1.5" style={{ color: 'var(--muted)' }}>
                      {o.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {!compact && (
          <div className="mt-16">
            <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
              <div>
                <span className="eyebrow">Engagement models</span>
                <h3 className="h-section mt-3" style={{ fontSize: '1.875rem' }}>
                  Pick the model that fits the work.
                </h3>
              </div>
              <Link href="/contact" className="btn-ghost">
                Talk to a delivery lead <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {ENGAGEMENT_MODELS.map((m, i) => (
                <motion.div
                  key={m.title}
                  className="card-surface p-6"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                >
                  <h4 className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
                    {m.title}
                  </h4>
                  <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--muted)' }}>
                    {m.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {m.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm flex items-center gap-2"
                        style={{ color: 'var(--ink)' }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: 'var(--accent)' }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
