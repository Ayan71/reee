'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Globe, Smartphone, Layers, MonitorSmartphone, Server, BrainCircuit, Box,
  Palette, Plug, Cloud, LifeBuoy, UserPlus, Briefcase, Handshake, ArrowUpRight,
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

type Props = {
  /** Limit the number of services rendered (used on the home preview). */
  limit?: number;
  /** Show eyebrow + headline. */
  showHeader?: boolean;
  /** Optional override for the headline. */
  title?: string;
  /** Show the bottom CTA link to the services page. */
  showSeeAll?: boolean;
};

export default function Services({ limit, showHeader = true, title, showSeeAll = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section id="services" className="section-padding" style={{ background: 'var(--bg)' }}>
      <div className="container-custom" ref={ref}>
        {showHeader && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="eyebrow">What we do</span>
              <h2 className="h-section mt-3 text-balance">
                {title ?? 'Enterprise services, end to end.'}
              </h2>
              <p className="lede mt-4 text-pretty">
                One studio, one squad — across product, design, mobile, web, AI, cloud, and long-term support.
              </p>
            </div>
            {showSeeAll && (
              <Link href="/services" className="btn-secondary self-start md:self-end">
                View all services
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {list.map((s, i) => {
            const Icon = ICONS[s.icon] || Layers;
            return (
              <motion.div
                key={s.slug}
                id={s.slug}
                className="group card-surface p-5 md:p-6 flex flex-col scroll-mt-32"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: (i % 4) * 0.06 + Math.floor(i / 4) * 0.03, duration: 0.5 }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                  style={{ background: 'var(--accent-soft)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: 'var(--accent-dark)' }} />
                </div>
                <h3 className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mt-2 flex-1" style={{ color: 'var(--muted)' }}>
                  {s.short}
                </p>
                <Link
                  href={`/services#detail-${s.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-xs font-semibold transition-colors group-hover:gap-2"
                  style={{ color: 'var(--accent)' }}
                  aria-label={`Learn more about ${s.title}`}
                >
                  Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
