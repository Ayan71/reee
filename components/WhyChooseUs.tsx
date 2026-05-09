'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Code2,
  RefreshCw,
  TrendingUp,
  MessageSquare,
  Target,
  ShieldCheck,
  Globe,
  Wallet,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';
import { whyChooseUs } from '@/lib/data';

const ICON_MAP: Record<string, LucideIcon> = {
  users: Users,
  'code-2': Code2,
  'refresh-cw': RefreshCw,
  'trending-up': TrendingUp,
  'message-square': MessageSquare,
  target: Target,
  'shield-check': ShieldCheck,
  globe: Globe,
  wallet: Wallet,
  briefcase: Briefcase,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="eyebrow">Why Codentrixa</span>
            <h2 className="h-section mt-3 text-balance">
              Built like an in-house team. Operated like a partner.
            </h2>
          </div>
          <p className="lede lg:col-span-5 lg:max-w-md">
            Senior engineering, strong process, real ownership — the things enterprise clients ask for first.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {whyChooseUs.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || Users;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="card-surface p-5"
              >
                <span className="inline-flex w-10 h-10 rounded-lg bg-[#FFE7DA] text-brand items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="text-[15px] font-semibold text-ink mb-1.5">{item.title}</h3>
                <p className="text-sm leading-relaxed muted-text">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
