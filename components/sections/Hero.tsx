'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Code as Code2, Database, Cpu, Globe, Smartphone, Cloud } from 'lucide-react';

const TYPED_STRINGS = [
  'Digital Solutions',
  'Web Applications',
  'Mobile Experiences',
  'AI-Powered Products',
  'Cloud Platforms',
];

const FLOATING_ICONS = [
  { Icon: Code2, delay: 0, x: '10%', y: '20%', size: 18 },
  { Icon: Database, delay: 0.5, x: '85%', y: '15%', size: 16 },
  { Icon: Cpu, delay: 1, x: '90%', y: '60%', size: 20 },
  { Icon: Globe, delay: 1.5, x: '8%', y: '65%', size: 18 },
  { Icon: Smartphone, delay: 2, x: '78%', y: '80%', size: 16 },
  { Icon: Cloud, delay: 2.5, x: '20%', y: '85%', size: 18 },
];

function TypedText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const current = TYPED_STRINGS[index];
    const speed = isDeleting ? 40 : 80;
    const pause = isDeleting ? 0 : 1800;

    if (!isDeleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % TYPED_STRINGS.length);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
      }, speed);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, index]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="cursor-blink text-[#ff6b00]">|</span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] grid-pattern"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff6b00]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff8c40]/6 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ff6b00]/4 rounded-full blur-[80px]" />
      </div>

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #0a0a0a 100%)' }} />

      {/* Floating icons */}
      {FLOATING_ICONS.map(({ Icon, delay, x, y: iconY, size }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.07] backdrop-blur-sm"
          style={{ left: x, top: iconY }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: delay }}
          >
            <Icon className="text-[#ff6b00]/70" style={{ width: size, height: size }} />
          </motion.div>
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y, opacity }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-[#ff8c40] text-sm font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
          Trusted by 50+ Startups & Enterprises
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Building Future-Ready
        </motion.h1>
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8 min-h-[1.15em]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          <TypedText />
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-white/55 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          We design and engineer exceptional digital products — from AI-powered web platforms to
          cross-platform mobile apps — that drive real business growth.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
        >
          <button
            onClick={() => handleScroll('#contact')}
            className="group flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-[#ff6b00] to-[#ff8c40] text-white font-bold text-base shadow-xl shadow-orange-500/25 hover:shadow-orange-500/45 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={() => handleScroll('#services')}
            className="group flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-white/[0.05] border border-white/[0.1] text-white font-semibold text-base hover:bg-white/[0.08] hover:border-[#ff6b00]/30 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <div className="w-7 h-7 rounded-full bg-[#ff6b00]/15 border border-[#ff6b00]/25 flex items-center justify-center">
              <Play className="w-3 h-3 text-[#ff6b00] fill-[#ff6b00] translate-x-[1px]" />
            </div>
            View Services
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {[
{ value: '5+', label: 'Projects Delivered' },
{ value: '5+', label: 'Happy Clients' },
{ value: '2026', label: 'Founded In' },
{ value: '99%', label: 'Satisfaction Rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-white/40 text-xs font-medium mt-0.5 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      

    </section>
  );
}
