'use client';

import { useRef } from 'react';

import {
  motion,
  useInView,
  type Variants,
} from 'framer-motion';

import { technologies } from '@/lib/data';

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const TECH_COLORS: Record<string, string> = {
  React: '#61DAFB',
  'Next.js': '#ffffff',
  'Node.js': '#68A063',
  MongoDB: '#47A248',
  Flutter: '#54C5F8',
  'React Native': '#61DAFB',
  Java: '#f89820',
  'AI/ML': '#ff6b00',
  TypeScript: '#3178C6',
  Python: '#FFD43B',
  AWS: '#FF9900',
  Docker: '#2496ED',
};

export default function Technologies() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <section
      id="technologies"
      className="section-padding bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,107,0,0.05) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div
        className="container-custom relative z-10"
        ref={ref}
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={
            inView ? 'visible' : 'hidden'
          }
          custom={0}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-[#ff6b00] border border-orange-500/30 bg-orange-500/5 mb-4">
            Tech Stack
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Technologies We{' '}
            <span className="orange-text-gradient">
              Master
            </span>
          </h2>

          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            We work with powerful, modern, and
            battle-tested technologies to build
            scalable digital products that last.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial="hidden"
              animate={
                inView
                  ? 'visible'
                  : 'hidden'
              }
              custom={i + 1}
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="group glass-card rounded-2xl p-5 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[160px]"
            >
              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${
                    TECH_COLORS[tech.name] ||
                    '#ff6b00'
                  }15 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="relative z-10 text-3xl md:text-4xl font-bold mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  color:
                    TECH_COLORS[tech.name] ||
                    '#ff6b00',

                  textShadow: `0 0 20px ${
                    TECH_COLORS[tech.name] ||
                    '#ff6b00'
                  }70`,
                }}
              >
                {tech.icon}
              </div>

              {/* Name */}
              <h3 className="relative z-10 text-white text-sm font-semibold mb-1 group-hover:text-[#ff6b00] transition-colors duration-300">
                {tech.name}
              </h3>

              {/* Category */}
              <span className="relative z-10 text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors duration-300">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            delay: 0.8,
          }}
          className="mt-16 overflow-hidden border-t border-white/5 pt-8"
        >
          <div className="flex items-center opacity-20 whitespace-nowrap">
            <div
              className="flex items-center gap-8"
              style={{
                animation:
                  'marquee 20s linear infinite',
              }}
            >
              {[
                ...technologies,
                ...technologies,
              ].map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 text-sm font-medium text-white whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />

                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}