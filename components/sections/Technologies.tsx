'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TECHNOLOGIES } from '@/lib/constants';

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Mobile', 'AI/ML', 'Cloud', 'DevOps', 'Database', 'Language', 'API', 'Cache'];

function TechCard({ tech, index }: { tech: typeof TECHNOLOGIES[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="group glass-card rounded-xl p-5 flex flex-col items-center gap-3 hover:border-[#ff6b00]/30 transition-all duration-300 cursor-default"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Icon */}
      <div
        className="tech-icon w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-all duration-300 group-hover:scale-110"
        style={{ background: `${tech.color}15`, border: `1px solid ${tech.color}25` }}
      >
        <span style={{ color: tech.color }} className="text-lg leading-none">{tech.icon}</span>
      </div>

      {/* Name */}
      <div className="text-center">
        <p className="text-white text-sm font-semibold group-hover:text-white transition-colors">{tech.name}</p>
        <p className="text-white/35 text-xs mt-0.5">{tech.category}</p>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `0 0 25px ${tech.color}15 inset` }}
      />
    </motion.div>
  );
}

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="technologies" className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ff6b00]/5 rounded-full blur-[100px] pointer-events-none" />

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
            Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            Technologies We <span className="gradient-text">Master</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            We stay at the forefront of technology, using the most powerful and battle-tested tools available.
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 lg:gap-4">
          {TECHNOLOGIES.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 glass-card rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-lg">Always evolving, always learning.</p>
            <p className="text-white/45 text-sm mt-1">We adopt new technologies as they mature, keeping your product on the cutting edge.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {['React', 'Next.js', 'Node.js', 'AI/ML'].map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg bg-[#ff6b00]/10 border border-[#ff6b00]/15 text-[#ff8c40] text-xs font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
