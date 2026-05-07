'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Layers, Smartphone, Tablet, Cpu, Brain, Globe,
  Phone, Plug, Cloud, Palette, ArrowUpRight
} from 'lucide-react';
import { services } from '@/lib/data';

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  layers: Layers,
  smartphone: Smartphone,
  tablet: Tablet,
  cpu: Cpu,
  brain: Brain,
  globe: Globe,
  phone: Phone,
  plug: Plug,
  cloud: Cloud,
  palette: Palette,
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="section-padding bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Decorative gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,107,0,0.4), transparent)' }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-[#ff6b00] border border-orange-500/30 bg-orange-500/5 mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="orange-text-gradient">Services</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            End-to-end technology services designed to take your product from concept to production at scale.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon] || Layers;
            return (
              <motion.div
                key={service.id}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={i + 1}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group glass-card gradient-border rounded-2xl p-6 cursor-default relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,107,0,0.08) 0%, transparent 70%)' }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-all duration-300 group-hover:scale-110">
                    <Icon size={22} className="text-[#ff6b00]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-white mb-2 text-[15px] leading-snug group-hover:text-[#ff6b00] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/40 text-xs leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center gap-1 text-[#ff6b00] text-xs font-medium">
                      Learn more <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
