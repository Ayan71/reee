'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container-custom" ref={ref}>
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Client reviews</span>
          <h2 className="h-section mt-3 text-balance">
            What partners say after working with us.
          </h2>
          <p className="lede mt-4 text-pretty">
            We measure ourselves on renewals, referrals, and reviews. Here&apos;s what they sound like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              className="card-surface p-6 md:p-7 relative"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: (i % 2) * 0.06 + Math.floor(i / 2) * 0.05, duration: 0.5 }}
            >
              <Quote className="absolute top-5 right-5 w-7 h-7" style={{ color: 'var(--accent-soft)' }} />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="w-4 h-4" fill="var(--accent)" stroke="var(--accent)" />
                ))}
              </div>

              <blockquote className="text-base leading-relaxed text-pretty" style={{ color: 'var(--ink)' }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent-dark)' }}
                >
                  {t.avatar}
                </span>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--muted)' }}>
                    {t.role} · {t.company}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
