'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Award, Users, Code as Code2, Zap } from 'lucide-react';
import { STATS } from '@/lib/constants';

const STAT_ICONS = [Award, Users, Code2, Zap];

const MISSION_VISION = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower startups and enterprises with cutting-edge digital solutions that accelerate growth, reduce complexity, and create lasting competitive advantages in the modern technology landscape.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the most trusted technology partner for innovative companies worldwide — building the digital foundations that power the next generation of market-leading products.',
  },
];

function StatCard({ stat, index, Icon }: { stat: typeof STATS[0]; index: number; Icon: React.ElementType }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-2xl p-6 text-center group hover:border-[#ff6b00]/25 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -4 }}
    >
      <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ff6b00]/15 transition-colors">
        <Icon className="w-5 h-5 text-[#ff6b00]" />
      </div>
      <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
      <div className="text-white/50 text-sm font-medium">{stat.label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#ff6b00]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          ref={ref}
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/15 text-[#ff8c40] text-xs font-semibold uppercase tracking-widest mb-5">
            About Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            We Are <span className="gradient-text">Codentrixa</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            A premium software engineering studio crafting exceptional digital products for ambitious companies that refuse to settle for ordinary.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff6b00] via-[#ff6b00]/40 to-transparent rounded-full" />
              <div className="pl-8">
                <h3 className="text-xl font-bold text-white mb-4">Our Story</h3>
                <p className="text-white/55 leading-relaxed mb-4">
                  Founded by a team of passionate engineers and designers, Codentrixa has grown into a full-service digital  trusted by startups from Silicon Valley to Singapore.
                </p>
                <p className="text-white/55 leading-relaxed mb-6">
                  We combine deep technical expertise with a product-thinking mindset to deliver solutions that don't just work — they excel. Every line of code we write is crafted with purpose, performance, and longevity in mind.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Agile Development', 'Clean Code', 'Performance First', 'Security Focused', 'Modern Stack'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#ff6b00]/8 border border-[#ff6b00]/15 text-[#ff8c40] text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Mission & Vision cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {MISSION_VISION.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                className="glass-card rounded-2xl p-6 group hover:border-[#ff6b00]/25 transition-all duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#ff6b00]/20 to-[#ff6b00]/5 border border-[#ff6b00]/15 flex items-center justify-center flex-shrink-0 group-hover:from-[#ff6b00]/30 transition-all">
                    <Icon className="w-5 h-5 text-[#ff6b00]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-2">{title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => {
            const Icon = STAT_ICONS[i];
            return <StatCard key={stat.label} stat={stat} index={i} Icon={Icon} />;
          })}
        </div>
      </div>
    </section>
  );
}
