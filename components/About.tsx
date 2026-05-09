'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { stats } from '@/lib/data';

function CountUp({ end, duration = 1.4 }: { end: string; duration?: number }) {
  // Pulls a leading number out of a string like "10+" or "100%". Animates the number, keeps the suffix.
  const match = end.match(/^([\d.]+)(.*)$/);
  const numeric = match ? parseFloat(match[1]) : NaN;
  const suffix = match ? match[2] : '';
  const [val, setVal] = useState(isNaN(numeric) ? 0 : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView || isNaN(numeric)) return;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      setVal(numeric * (1 - Math.pow(1 - t, 3)));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric, duration]);

  if (isNaN(numeric)) return <span ref={ref}>{end}</span>;
  const display = numeric % 1 === 0 ? Math.round(val) : val.toFixed(1);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="surface section-tight border-y border-line">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">Trust &amp; Track Record</span>
            <h2 className="h-section mt-3 text-balance">
              A software partner you can plan around.
            </h2>
          </div>
          <p className="lede lg:col-span-5 lg:max-w-md">
            Codentrixa is structured for predictable enterprise delivery — dedicated teams, clear SLAs,
            modern engineering practices, and long-term partnerships.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="card-flat p-5 md:p-6">
              <div className="text-3xl md:text-[2.25rem] font-semibold text-ink leading-none tracking-tight">
                <CountUp end={s.value} />
              </div>
              <div className="mt-2 text-sm font-medium text-ink/85">{s.label}</div>
              <div className="text-xs muted-text mt-1">{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
