'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '@/lib/constants';

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-tight" style={{ background: 'var(--bg)' }}>
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-10 md:mb-12">
          <span className="eyebrow">Trusted delivery</span>
          <h2 className="h-section mt-3">A studio built on track record, not hype.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="card-surface p-5 md:p-6"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <div
                className="text-3xl md:text-4xl font-semibold tracking-tight"
                style={{ color: 'var(--ink)' }}
              >
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium" style={{ color: 'var(--ink)' }}>
                {s.label}
              </div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
