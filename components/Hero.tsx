'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Code2, Layers, Cloud } from 'lucide-react';

const trustItems = [
  '10+ projects in production',
  'Remote-first delivery',
  'Enterprise-grade architecture',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg pt-10 md:pt-16 pb-16 md:pb-24">
      {/* subtle background grid */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      {/* soft accent */}
      <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,92,26,0.12), transparent 70%)' }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <span className="pill">
              <Sparkles className="w-3.5 h-3.5" />
              Premium Software Development Studio
            </span>

            <h1 className="h-display mt-6 text-balance">
              Engineering enterprise-grade
              <span className="block accent-text">digital products.</span>
            </h1>

            <p className="lede mt-6 max-w-2xl text-pretty">
              Codentrixa is a remote-first software company partnering with startups and enterprises to design,
              build, and scale modern web, mobile, AI, and SaaS platforms — with dedicated teams and predictable delivery.
            </p>

            {/* Trust strip */}
            <ul className="mt-7 grid sm:grid-cols-3 gap-2.5 max-w-2xl">
              {trustItems.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-ink/80">
                  <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#contact" className="btn-primary">
                Start Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#contact" className="btn-secondary">
                Book Consultation
              </Link>
              <Link href="#outsourcing" className="btn-ghost ml-1">
                Hire Developers <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <DashboardVisual />
          </motion.div>
        </div>

        {/* Logos / capabilities row */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { Icon: Code2, label: 'Web & SaaS' },
            { Icon: Layers, label: 'Mobile & Flutter' },
            { Icon: Sparkles, label: 'AI Solutions' },
            { Icon: Cloud, label: 'Cloud & DevOps' },
          ].map(({ Icon, label }) => (
            <div key={label} className="card-flat p-4 flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg bg-[#FFE7DA] text-brand flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </span>
              <span className="text-sm font-medium text-ink/85">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardVisual() {
  return (
    <div className="relative">
      <div className="card-flat p-5 md:p-6 shadow-[0_30px_80px_-30px_rgba(28,24,20,0.18)]">
        {/* Tab bar */}
        <div className="flex items-center gap-1.5 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E9E2D9]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E9E2D9]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E9E2D9]" />
          <div className="ml-3 text-[11px] font-mono text-ink/40">codentrixa.app/dashboard</div>
        </div>

        {/* Top KPIs */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { v: '+62%', l: 'Routes / day' },
            { v: '94%', l: 'On-time' },
            { v: '4.9', l: 'App rating' },
          ].map((s) => (
            <div key={s.l} className="rounded-xl p-3 bg-[#FAFAF8] border border-line">
              <div className="text-lg font-semibold text-ink">{s.v}</div>
              <div className="text-[10px] uppercase tracking-wider text-ink/50 mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-xl bg-[#FAFAF8] border border-line p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium text-ink">Active deployments</div>
            <span className="chip">Realtime</span>
          </div>
          <svg viewBox="0 0 320 100" className="w-full h-24">
            <defs>
              <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#F55C1A" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#F55C1A" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,80 C40,70 60,40 90,45 C120,50 140,20 170,30 C200,40 220,18 260,22 C290,25 310,15 320,12 L320,100 L0,100 Z"
              fill="url(#g1)"
            />
            <path
              d="M0,80 C40,70 60,40 90,45 C120,50 140,20 170,30 C200,40 220,18 260,22 C290,25 310,15 320,12"
              fill="none"
              stroke="#F55C1A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Bottom rows */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {[
            { l: 'API uptime', v: '99.98%' },
            { l: 'Avg. latency', v: '124 ms' },
          ].map((s) => (
            <div key={s.l} className="rounded-xl p-3 bg-[#FAFAF8] border border-line flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider text-ink/50">{s.l}</span>
              <span className="text-sm font-semibold text-ink">{s.v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating callout */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="hidden md:block absolute -left-8 -bottom-6 card-flat p-3 pr-4 shadow-lg"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-lg bg-[#FFE7DA] text-brand flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </span>
          <div className="leading-tight">
            <div className="text-[11px] uppercase tracking-wider text-ink/50">Delivery</div>
            <div className="text-sm font-semibold text-ink">2 weeks ahead</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
