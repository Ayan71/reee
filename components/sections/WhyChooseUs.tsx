'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  UsersRound, Cpu, Workflow, Layers, MessageSquare, Compass,
  ShieldCheck, Globe2, Wallet, Handshake,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '@/lib/constants';

const ICONS: Record<string, React.ElementType> = {
  'users-round': UsersRound,
  cpu: Cpu,
  workflow: Workflow,
  layers: Layers,
  'message-square': MessageSquare,
  compass: Compass,
  'shield-check': ShieldCheck,
  'globe-2': Globe2,
  wallet: Wallet,
  handshake: Handshake,
};

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-choose-us" className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container-custom" ref={ref}>
        <div className="max-w-2xl mb-12 md:mb-14">
          <span className="eyebrow">Why teams choose us</span>
          <h2 className="h-section mt-3 text-balance">Built like an in-house team, run like a senior agency.</h2>
          <p className="lede mt-4 text-pretty">
            Ten reasons clients renew, refer, and bring us back for the next product. Every one of them is a
            promise — and a metric we hold ourselves to.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[item.icon] || Layers;
            return (
              <motion.div
                key={item.title}
                className="card-surface p-5 md:p-6 h-full"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: (i % 5) * 0.05 + Math.floor(i / 5) * 0.04, duration: 0.5 }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'var(--accent-soft)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: 'var(--accent-dark)' }} />
                </div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: 'var(--ink)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
