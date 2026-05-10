'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CalendarClock,
  UsersRound,
  ShieldCheck,
  Layers,
  Code as Code2,
  Cloud,
  Smartphone,
  Cpu,
} from 'lucide-react';

const FLOATING_BADGES = [
  { Icon: Code2, label: 'TypeScript', x: '4%', y: '14%' },
  { Icon: Smartphone, label: 'Flutter', x: '92%', y: '20%' },
  { Icon: Cpu, label: 'AI / RAG', x: '6%', y: '78%' },
  { Icon: Cloud, label: 'AWS', x: '90%', y: '74%' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      {/* Soft accent wash */}
      <div
        className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,92,26,0.10) 0%, transparent 65%)' }}
      />

      {/* Floating tech chips */}
      {FLOATING_BADGES.map(({ Icon, label, x, y }, i) => (
        <motion.div
          key={label}
          className="absolute hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
          style={{
            left: x,
            top: y,
            background: 'var(--card)',
            border: '1px solid var(--line)',
            color: 'var(--ink)',
            boxShadow: '0 12px 30px -18px rgba(28,24,20,0.18)',
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.12, duration: 0.6 }}
        >
          <Icon className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
          {label}
        </motion.div>
      ))}

      <div className="container-custom relative z-10 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Enterprise software studio
            </motion.span>

            <motion.h1
              className="h-display mt-5 text-balance"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{ color: 'var(--ink)' }}
            >
              Building reliable software for{' '}
              <span style={{ color: 'var(--accent)' }}>ambitious businesses.</span>
            </motion.h1>

            <motion.p
              className="lede mt-6 max-w-xl text-pretty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              We design, engineer, and operate web, mobile, and AI products for startups and enterprises —
              shipped on time, on scope, and built to scale for years.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-9 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.6 }}
            >
              <Link href="/contact" className="btn-primary">
                Start Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                <CalendarClock className="w-4 h-4" />
                Book Consultation
              </Link>
              <Link href="/outsourcing" className="btn-ghost group">
                <UsersRound className="w-4 h-4" />
                Hire Developers
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs"
              style={{ color: 'var(--muted)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                NDA-ready engagement
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                Senior engineers only
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarClock className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                Two-week delivery cadence
              </span>
            </motion.div>
          </div>

          {/* Dashboard mockup */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="relative">
      {/* Halo */}
      <div
        className="absolute -inset-6 rounded-[28px] -z-10"
        style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(245,92,26,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="card-flat p-5 md:p-6 shadow-[0_30px_80px_-40px_rgba(28,24,20,0.25)]"
        style={{ background: 'var(--card)' }}
      >
        {/* Header chrome */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FFB4A0' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FFD8A8' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#C9E4D2' }} />
          </div>
          <span className="text-[10px] tracking-widest font-semibold" style={{ color: 'var(--muted)' }}>
            DELIVERY · LIVE
          </span>
        </div>

        {/* KPI tiles */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Sprint velocity', value: '42 pts', delta: '+12%' },
            { label: 'Bugs in QA', value: '3', delta: '-60%' },
            { label: 'Uptime', value: '99.97%', delta: '+0.02' },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="p-3.5 rounded-xl"
              style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}
            >
              <div className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                {kpi.label}
              </div>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="text-xl font-semibold" style={{ color: 'var(--ink)' }}>
                  {kpi.value}
                </span>
                <span className="text-[10px] font-semibold" style={{ color: 'var(--accent)' }}>
                  {kpi.delta}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart-ish */}
        <div
          className="mt-4 h-32 rounded-xl p-3 flex items-end gap-1.5"
          style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}
        >
          {[44, 60, 38, 72, 58, 88, 70, 92, 80, 96, 74, 100].map((h, i) => (
            <motion.span
              key={i}
              className="flex-1 rounded-md"
              style={{ background: i === 11 ? 'var(--accent)' : 'rgba(245,92,26,0.18)' }}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.4 + i * 0.04, duration: 0.55, ease: 'easeOut' }}
            />
          ))}
        </div>

        {/* Squad list */}
        <div className="mt-4 space-y-2">
          {[
            { name: 'Flutter Squad · Logistics', status: 'In Sprint' },
            { name: 'Next.js Squad · Wholepath', status: 'QA' },
            { name: 'AI Squad · Northwind', status: 'Eval pass' },
          ].map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl"
              style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}
            >
              <span className="text-xs font-medium" style={{ color: 'var(--ink)' }}>
                {row.name}
              </span>
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent-dark)' }}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
