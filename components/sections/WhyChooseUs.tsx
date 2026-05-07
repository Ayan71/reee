'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  TrendingUp, Zap, Cpu, BrainCircuit, ShieldCheck, Headset
} from 'lucide-react';
import { WHY_CHOOSE_US } from '@/lib/constants';

const ICON_MAP: Record<string, React.ElementType> = {
  'trending-up': TrendingUp,
  zap: Zap,
  cpu: Cpu,
  'brain-circuit': BrainCircuit,
  'shield-check': ShieldCheck,
  headset: Headset,
};

function FeatureCard({ feature, index }: { feature: typeof WHY_CHOOSE_US[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = ICON_MAP[feature.icon] || Zap;

  return (
    <motion.div
      ref={ref}
      className="group glass-card rounded-2xl p-6 hover:border-[#ff6b00]/30 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Number */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/15 flex items-center justify-center group-hover:bg-[#ff6b00]/20 group-hover:border-[#ff6b00]/30 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-5 h-5 text-[#ff6b00]" />
        </div>
        <span className="text-4xl font-black text-white/[0.04] group-hover:text-white/[0.07] transition-colors leading-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="text-white font-bold text-base mb-2.5">{feature.title}</h3>
      <p className="text-white/45 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ff6b00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left sticky panel */}
          <motion.div
            ref={ref}
            className="lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/15 text-[#ff8c40] text-xs font-semibold uppercase tracking-widest mb-5">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Why Top Companies{' '}
              <span className="gradient-text">Trust Us</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              We don't just build software — we partner with you to create technology that becomes a genuine competitive advantage for your business.
            </p>

            {/* Highlight box */}
            <div className="glass-card rounded-2xl p-6 border-[#ff6b00]/15">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-2">
                  {['S', 'M', 'A', 'D'].map((letter, i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff6b00] to-[#ff8c40] border-2 border-[#0a0a0a] flex items-center justify-center text-white text-xs font-bold">
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">50+ Happy Clients</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#ff6b00] text-xs">★</span>
                    ))}
                    <span className="text-white/40 text-xs ml-1">5.0 avg rating</span>
                  </div>
                </div>
              </div>
              <p className="text-white/45 text-sm italic leading-relaxed">
                "Codentrixa consistently delivers exceptional quality, on time and within budget. They've become our go-to technology partner."
              </p>
            </div>
          </motion.div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_CHOOSE_US.map((feature, i) => (
              <FeatureCard key={feature.id} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
