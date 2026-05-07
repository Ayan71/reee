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

          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            We work with the most powerful,
            battle-tested technologies to build
            solutions that last.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
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
              className="group flex flex-col items-center gap-3 glass-card rounded-2xl p-5 relative overflow-hidden"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${
                    TECH_COLORS[tech.name] ||
                    '#ff6b00'
                  }15 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="relative z-10 text-2xl md:text-3xl font-bold transition-transform duration-300 group-hover:scale-110"
                style={{
                  color:
                    TECH_COLORS[tech.name] ||
                    '#ff6b00',

                  textShadow: `0 0 20px ${
                    TECH_COLORS[tech.name] ||
                    '#ff6b00'
                  }60`,
                }}
              >
                {tech.icon}
              </div>

              {/* Name */}
              <span className="relative z-10 text-white/60 text-xs font-medium text-center group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>

              {/* Category */}
              <span className="relative z-10 text-[10px] font-semibold tracking-wider uppercase text-[#ff6b00]/60 group-hover:text-[#ff6b00] transition-colors duration-300">
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
          className="mt-16 overflow-hidden"
        >
          <div className="flex gap-8 items-center opacity-20">
            <div
              className="flex gap-8 items-center whitespace-nowrap"
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
                  className="text-white text-sm font-medium whitespace-nowrap flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#ff6b00]" />

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