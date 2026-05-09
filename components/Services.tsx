'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Globe,
  Smartphone,
  Layers,
  Tablet,
  Server,
  Sparkles,
  Rocket,
  Palette,
  Plug,
  Cloud,
  Wrench,
  UserPlus,
  Compass,
  Building2,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/lib/data';

const ICON_MAP: Record<string, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  layers: Layers,
  tablet: Tablet,
  server: Server,
  sparkles: Sparkles,
  rocket: Rocket,
  palette: Palette,
  plug: Plug,
  cloud: Cloud,
  wrench: Wrench,
  'user-plus': UserPlus,
  compass: Compass,
  'building-2': Building2,
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="eyebrow">What We Do</span>
            <h2 className="h-section mt-3 text-balance">
              Enterprise services for every layer of the product stack.
            </h2>
          </div>
          <p className="lede lg:col-span-5 lg:max-w-md">
            From product design to scaled cloud operations — engagement models built for real business outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const Icon = ICON_MAP[s.icon] || Globe;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                className="card-surface p-6 group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex w-11 h-11 rounded-xl bg-[#FFE7DA] text-brand items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.18em] uppercase muted-text">
                    Service
                  </span>
                </div>
                <h3 className="text-base font-semibold text-ink mb-2">{s.title}</h3>
                <p className="text-sm muted-text leading-relaxed mb-4 flex-1">{s.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {s.highlights.map((h) => (
                    <span key={h} className="chip">{h}</span>
                  ))}
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-brand transition-colors"
                >
                  Learn more
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
