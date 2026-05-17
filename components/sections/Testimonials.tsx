'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  MessageSquareQuote,
  ShieldCheck,
  Users,
  Sparkles,
  ArrowUpRight,
  Clock,
} from 'lucide-react';
import { COMPANY_NAME } from '@/lib/constants';

const TEAM_VALUES = [
  {
    icon: ShieldCheck,
    title: 'Senior engineers only',
    body: 'Every line of code is written or reviewed by a senior engineer. No revolving doors, no hand-offs to juniors mid-project.',
  },
  {
    icon: Clock,
    title: 'Two-week delivery rhythm',
    body: 'Friday demos with live software. You see real progress every sprint — not status reports.',
  },
  {
    icon: Sparkles,
    title: 'AI-first engineering',
    body: 'We build with AI in the loop — from spec to test. Faster delivery without trading away accountability.',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: identity */}
          <div className="lg:col-span-5">
            <span className="eyebrow">Who we are</span>
            <h2 className="h-section mt-3 text-balance">
              Built by <span style={{ color: 'var(--accent)' }}>Team {COMPANY_NAME}</span>.
            </h2>
            <p className="lede mt-4 text-pretty">
              We are a remote-first studio of senior engineers, designers, and operators who care more
              about shipping the right thing than the loud thing. No body shops, no juniors pretending
              to be seniors — just a small, sharp team that owns delivery end-to-end.
            </p>

            <motion.div
              className="mt-7 flex items-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div
                className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold"
                style={{ background: 'var(--card)', border: '1px solid var(--line)', color: 'var(--ink)' }}
              >
                <Users className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                Remote · Global team
              </div>
              <Link href="/careers" className="btn-ghost group">
                Meet the team
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right: values + reviews placeholder */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {TEAM_VALUES.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    className="card-surface p-5 flex flex-col"
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.12 + i * 0.06, duration: 0.5 }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: 'var(--accent-soft)' }}
                    >
                      <Icon className="w-4 h-4" style={{ color: 'var(--accent-dark)' }} />
                    </div>
                    <h3 className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                      {v.title}
                    </h3>
                    <p className="text-xs mt-2 leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
                      {v.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Reviews placeholder — no fake testimonials. */}
            <motion.div
              className="mt-4 card-flat p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-5"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.34, duration: 0.5 }}
              style={{ borderStyle: 'dashed' }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--accent-soft)' }}
              >
                <MessageSquareQuote className="w-5 h-5" style={{ color: 'var(--accent-dark)' }} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
                  Client reviews — opening soon
                </h3>
                <p className="text-sm mt-1.5 leading-relaxed" style={{ color: 'var(--muted)' }}>
                  We would rather show no reviews than fake ones. Work with us on a project, and the
                  honest words you share here will be the first this section ever carries.
                </p>
              </div>
              <Link href="/contact" className="btn-secondary self-start md:self-center whitespace-nowrap">
                Start a project <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
