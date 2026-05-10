'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Globe2, Clock, GraduationCap, HeartHandshake, TrendingUp, Lightbulb,
  House, BadgeDollarSign, UsersRound, Layers,
} from 'lucide-react';
import { WORK_CULTURE, PERKS_BENEFITS, HIRING_PROCESS } from '@/lib/constants';

const ICONS: Record<string, React.ElementType> = {
  'globe-2': Globe2,
  clock: Clock,
  'graduation-cap': GraduationCap,
  'heart-handshake': HeartHandshake,
  'trending-up': TrendingUp,
  lightbulb: Lightbulb,
  house: House,
  'badge-dollar-sign': BadgeDollarSign,
  'users-round': UsersRound,
};

export function WorkCulture() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container-custom" ref={ref}>
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Work culture</span>
          <h2 className="h-section mt-3 text-balance">A team that ships — and stays.</h2>
          <p className="lede mt-4 text-pretty">
            Most of our engineers have been with us 2+ years. We build the kind of place we&apos;d want to work at.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {WORK_CULTURE.map((item, i) => {
            const Icon = ICONS[item.icon] || Layers;
            return (
              <motion.div
                key={item.title}
                className="card-surface p-5 text-center"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <div
                  className="w-11 h-11 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ background: 'var(--accent-soft)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: 'var(--accent-dark)' }} />
                </div>
                <h3 className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PerksBenefits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding" style={{ background: 'var(--bg)' }}>
      <div className="container-custom" ref={ref}>
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Perks &amp; benefits</span>
          <h2 className="h-section mt-3 text-balance">What you get when you join.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {PERKS_BENEFITS.map((item, i) => {
            const Icon = ICONS[item.icon] || Layers;
            return (
              <motion.div
                key={item.title}
                className="card-surface p-5"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <Icon className="w-5 h-5 mb-3" style={{ color: 'var(--accent)' }} />
                <h3 className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HiringProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container-custom" ref={ref}>
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Hiring process</span>
          <h2 className="h-section mt-3 text-balance">From application to offer in about two weeks.</h2>
          <p className="lede mt-4 text-pretty">
            No surprise rounds, no algorithm trivia. Just a clear path with people you&apos;ll actually work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {HIRING_PROCESS.map((s, i) => (
            <motion.div
              key={s.step}
              className="card-flat p-5"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-[11px] font-semibold tracking-[0.18em] uppercase"
                  style={{ color: 'var(--muted)' }}
                >
                  Step 0{s.step}
                </span>
                <span className="text-2xl font-semibold" style={{ color: 'var(--accent)' }}>
                  0{s.step}
                </span>
              </div>
              <h3 className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--muted)' }}>
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
