'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Layers, Smartphone, MonitorSmartphone, Coffee,
  Brain, Globe, AppWindow, Plug, Cloud, Palette, ArrowUpRight
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';

const ICON_MAP: Record<string, React.ElementType> = {
  layers: Layers,
  smartphone: Smartphone,
  'monitor-smartphone': MonitorSmartphone,
  coffee: Coffee,
  brain: Brain,
  globe: Globe,
  'app-window': AppWindow,
  plug: Plug,
  cloud: Cloud,
  palette: Palette,
};

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = ICON_MAP[service.icon] || Layers;

  return (
    <motion.div
      ref={ref}
      className="group relative glass-card rounded-2xl p-6 cursor-default overflow-hidden transition-all duration-300 hover:border-[#ff6b00]/30"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 5) * 0.08, duration: 0.6 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: '0 0 30px rgba(255,107,0,0.08) inset' }} />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/15 flex items-center justify-center mb-5 group-hover:bg-[#ff6b00]/20 group-hover:border-[#ff6b00]/30 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-5 h-5 text-[#ff6b00]" />
        </div>

        {/* Content */}
        <h3 className="text-white font-bold text-base mb-2.5 group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-white/45 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
          {service.description}
        </p>

        {/* Arrow */}
        {/* <div className="mt-5 flex items-center gap-1.5 text-[#ff6b00] text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Learn more
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div> */}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#080808] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff6b00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="flex flex-col items-center text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/15 text-[#ff8c40] text-xs font-semibold uppercase tracking-widest mb-5">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            From ideation to deployment, we provide end-to-end digital solutions tailored to your business goals.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-white/40 text-sm text-center">
            Not sure what you need?{' '}
            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#ff6b00] hover:text-[#ff8c40] font-medium transition-colors underline-offset-2 hover:underline"
            >
              Talk to our team →
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
