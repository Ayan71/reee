'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Lightbulb, Users } from 'lucide-react';

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  }),
};

const cards = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage in the digital era.',
    gradient: 'from-orange-500/10 to-transparent',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the most trusted technology partner for businesses worldwide — building digital ecosystems that shape the future of industries.',
    gradient: 'from-orange-400/10 to-transparent',
  },
  {
    icon: Lightbulb,
    title: 'Our Approach',
    description:
      'Agile-first, innovation-driven development with a focus on clean architecture, scalable systems, and exceptional user experiences.',
    gradient: 'from-orange-600/10 to-transparent',
  },
  {
    icon: Users,
    title: 'Our Team',
    description:
      'A global team of elite engineers, designers, and strategists committed to delivering world-class digital products.',
    gradient: 'from-orange-500/10 to-transparent',
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      id="about"
      className="section-padding bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,107,0,0.04) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-[#ff6b00] border border-orange-500/30 bg-orange-500/5 mb-4">
            About Us
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Who We <span className="orange-text-gradient">Are</span>
          </h2>

          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Founded in 2019, Codentrixa is a premium software development agency
            that transforms ambitious ideas into powerful digital realities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Section */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
            variants={fadeUp}
            className="glass-card gradient-border rounded-2xl p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                Building tomorrow&apos;s digital infrastructure{' '}
                <span className="orange-text-gradient">today</span>
              </h3>

              <p className="text-white/50 leading-relaxed mb-6">
                We are more than a software agency — we are your technology
                partner. From startups disrupting industries to enterprises
                scaling globally, Codentrixa delivers engineering excellence at
                every level.
              </p>

              <p className="text-white/50 leading-relaxed">
                Our full-stack capabilities span web, mobile, AI, cloud, and
                enterprise systems. Every solution we craft is built with
                scalability, security, and performance as first-class
                requirements.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/5">
              {[
                { value: '150+', label: 'Projects' },
                { value: '30+', label: 'Engineers' },
                { value: '12+', label: 'Countries' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold orange-text-gradient">
                    {s.value}
                  </div>

                  <div className="text-white/40 text-xs mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={i + 2}
                variants={fadeUp}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                }}
                className="relative glass-card rounded-2xl p-6 overflow-hidden group cursor-default"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                    <card.icon size={20} className="text-[#ff6b00]" />
                  </div>

                  <h4 className="font-semibold text-white mb-2 text-sm">
                    {card.title}
                  </h4>

                  <p className="text-white/40 text-xs leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}