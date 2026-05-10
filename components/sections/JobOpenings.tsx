'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase, Clock } from 'lucide-react';
import { OPEN_POSITIONS } from '@/lib/constants';

type Props = {
  /** Function called when user clicks Apply on a job; receives the job slug. */
  onApply?: (slug: string) => void;
};

export default function JobOpenings({ onApply }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="open-positions" className="section-padding" style={{ background: 'var(--bg)' }}>
      <div className="container-custom" ref={ref}>
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Open positions</span>
          <h2 className="h-section mt-3 text-balance">Roles we&apos;re actively hiring.</h2>
          <p className="lede mt-4 text-pretty">
            Senior, remote, and friendly. We hire slowly and treat people well — most of our team has been
            with us 2+ years.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
          {OPEN_POSITIONS.map((p, i) => (
            <motion.article
              key={p.slug}
              className="card-surface p-6 md:p-7 flex flex-col"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold leading-tight" style={{ color: 'var(--ink)' }}>
                    {p.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-xs" style={{ color: 'var(--muted)' }}>
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" /> {p.experience}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> {p.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {p.type}
                    </span>
                  </div>
                </div>
                <span
                  className="text-[11px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent-dark)' }}
                >
                  Hiring
                </span>
              </div>

              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
                {p.short}
              </p>

              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-2" style={{ color: 'var(--muted)' }}>
                    Responsibilities
                  </h4>
                  <ul className="space-y-1.5">
                    {p.responsibilities.slice(0, 3).map((r) => (
                      <li
                        key={r}
                        className="text-sm flex items-start gap-2"
                        style={{ color: 'var(--ink)' }}
                      >
                        <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: 'var(--accent)' }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-2" style={{ color: 'var(--muted)' }}>
                    Requirements
                  </h4>
                  <ul className="space-y-1.5">
                    {p.requirements.slice(0, 3).map((r) => (
                      <li
                        key={r}
                        className="text-sm flex items-start gap-2"
                        style={{ color: 'var(--ink)' }}
                      >
                        <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: 'var(--accent)' }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => {
                    onApply?.(p.slug);
                    if (typeof document !== 'undefined') {
                      const el = document.getElementById('apply');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn-primary"
                >
                  Apply now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
