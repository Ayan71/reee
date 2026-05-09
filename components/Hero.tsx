'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Globe, Smartphone } from 'lucide-react';

const TYPING_WORDS = [
  'Future-Ready Digital Solutions',
  'Scalable Web Applications',
  'Intelligent Mobile Apps',
  'AI-Powered Platforms',
];

const FLOATING_ICONS = [
  { Icon: Code2, x: '10%', y: '20%', delay: 0 },
  { Icon: Cpu, x: '85%', y: '15%', delay: 0.5 },
  { Icon: Globe, x: '80%', y: '75%', delay: 1 },
  { Icon: Smartphone, x: '8%', y: '70%', delay: 1.5 },
];

function TypingEffect() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];
    const speed = isDeleting ? 40 : 70;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < currentWord.length) {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(currentWord.slice(0, displayed.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
        }
      }
    }, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isDeleting, wordIndex]);

  return (
    <span className="orange-text-gradient">
      {displayed}
      <span className="inline-block w-[3px] h-[0.9em] ml-1 bg-[#ff6b00] animate-pulse align-middle" />
    </span>
  );
}

function Particle({ style }: { style: React.CSSProperties }) {
  return <div className="particle" style={style} />;
}

export default function Hero() {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    animationDuration: `${8 + Math.random() * 12}s`,
    animationDelay: `${Math.random() * 8}s`,
    width: `${1 + Math.random() * 2}px`,
    height: `${1 + Math.random() * 2}px`,
    opacity: Math.random() * 0.6 + 0.2,
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.12) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.8, 0.4, 0.8] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={p} />
      ))}

      {/* Floating tech icons */}
      {FLOATING_ICONS.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl glass-card"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
          transition={{
            opacity: { delay: delay + 1, duration: 0.5 },
            scale: { delay: delay + 1, duration: 0.5 },
            y: { delay: delay + 1.5, duration: 4 + i, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <Icon size={24} className="text-[#ff6b00]" />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-12">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-500/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
            <span className="text-sm text-white/70 font-medium tracking-wide">Premium IT Solutions </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-white"
          >
            Building
            <br />
            <TypingEffect />
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed mb-10"
          >
            We craft high-performance digital products — from intelligent web platforms to native mobile apps — that drive growth for ambitious businesses worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary flex items-center gap-2 text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary flex items-center gap-2 text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Services
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-8"
          >
            {[
{ value: '5+', label: 'Projects Delivered' },
{ value: '5+', label: 'Happy Clients' },
{ value: '2026', label: 'Founded In' },
{ value: '99%', label: 'Satisfaction Rate' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + 0.1 * i }}
                className="flex flex-col"
              >
                <span className="text-2xl md:text-3xl font-bold orange-text-gradient">{stat.value}</span>
                <span className="text-white/40 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
