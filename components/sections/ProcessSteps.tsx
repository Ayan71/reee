'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Step = {
  step: number;
  title: string;
  description: string;
};

type Props = {
  eyebrow?: string;
  title?: string;
  steps: Step[];
  surface?: 'bg' | 'surface';
};

export default function ProcessSteps({
  eyebrow = 'How we work',
  title = 'A delivery process you can predict.',
  steps,
  surface = 'bg',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="section-padding"
      style={{ background: surface === 'bg' ? 'var(--bg)' : 'var(--surface)' }}
    >
      <div className="container-custom" ref={ref}>
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h-section mt-3 text-balance">{title}</h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className="card-flat p-5 md:p-6 relative"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-[11px] font-semibold tracking-[0.18em] uppercase"
                  style={{ color: 'var(--muted)' }}
                >
                  Step 0{s.step}
                </span>
                <span
                  className="text-2xl font-semibold"
                  style={{ color: 'var(--accent)' }}
                >
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
