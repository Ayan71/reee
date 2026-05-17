'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Globe, Smartphone, Layers, MonitorSmartphone, Server, BrainCircuit, Box,
  Palette, Plug, Cloud, LifeBuoy, UserPlus, Briefcase, Handshake,
  ArrowUpRight, CheckCircle2,
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';

const ICONS: Record<string, React.ElementType> = {
  globe: Globe,
  smartphone: Smartphone,
  layers: Layers,
  'monitor-smartphone': MonitorSmartphone,
  server: Server,
  'brain-circuit': BrainCircuit,
  box: Box,
  palette: Palette,
  plug: Plug,
  cloud: Cloud,
  'life-buoy': LifeBuoy,
  'user-plus': UserPlus,
  briefcase: Briefcase,
  handshake: Handshake,
};

export default function ServiceDetails() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding" style={{ background: 'var(--surface)' }} ref={ref}>
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">In detail</span>
          <h2 className="h-section mt-3 text-balance">
            What each engagement actually covers.
          </h2>
          <p className="lede mt-4 text-pretty">
            The exact deliverables, stack, and outcomes you can expect — service by service. Click any
            card above to jump to its breakdown.
          </p>
        </div>

        <div className="space-y-4">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] || Layers;
            return (
              <motion.article
                key={s.slug}
                id={`detail-${s.slug}`}
                className="card-flat p-6 md:p-8 scroll-mt-32"
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: Math.min(i * 0.03, 0.3), duration: 0.5 }}
              >
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  {/* Left: heading + description */}
                  <div className="lg:col-span-5">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center"
                        style={{ background: 'var(--accent-soft)' }}
                      >
                        <Icon className="w-5 h-5" style={{ color: 'var(--accent-dark)' }} />
                      </div>
                      <div>
                        <div
                          className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-1"
                          style={{ color: 'var(--muted)' }}
                        >
                          Service · 0{(i + 1).toString().slice(-2)}
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
                          {s.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-[15px] leading-relaxed mt-5" style={{ color: 'var(--ink)', opacity: 0.85 }}>
                      {s.detail}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                        style={{ color: 'var(--accent)' }}
                      >
                        Start a project <ArrowUpRight className="w-4 h-4" />
                      </Link>
                      {s.related && (
                        <Link
                          href={s.related.href}
                          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                          style={{ color: 'var(--ink)', opacity: 0.7 }}
                        >
                          {s.related.label} <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Right: what's included + stack */}
                  <div className="lg:col-span-7 grid sm:grid-cols-5 gap-6">
                    <div className="sm:col-span-3">
                      <h4
                        className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-3"
                        style={{ color: 'var(--muted)' }}
                      >
                        What you get
                      </h4>
                      <ul className="space-y-2">
                        {s.includes.map((it) => (
                          <li
                            key={it}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: 'var(--ink)' }}
                          >
                            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {s.stack && s.stack.length > 0 && (
                      <div className="sm:col-span-2">
                        <h4
                          className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-3"
                          style={{ color: 'var(--muted)' }}
                        >
                          Typical stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {s.stack.map((t) => (
                            <span key={t} className="chip">{t}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
