'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const visible = [
    testimonials[(current - 1 + testimonials.length) % testimonials.length],
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="section-padding bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="orange-text-gradient">Clients Say</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Real feedback from real clients who&apos;ve built the future with us.
          </p>
        </motion.div>

        {/* Desktop: 3-card carousel */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
          variants={fadeUp}
          className="hidden md:block"
        >
          <div className="grid grid-cols-3 gap-6">
            {visible.map((testimonial, i) => {
              const isCenter = i === 1;
              return (
                <motion.div
                  key={testimonial.id}
                  animate={{ scale: isCenter ? 1 : 0.92, opacity: isCenter ? 1 : 0.6 }}
                  transition={{ duration: 0.4 }}
                  className={`glass-card rounded-2xl p-8 relative overflow-hidden ${isCenter ? 'gradient-border' : ''}`}
                  style={isCenter ? { boxShadow: '0 0 40px rgba(255,107,0,0.1)' } : {}}
                >
                  {/* Quote icon */}
                  <Quote size={32} className="text-[#ff6b00]/20 mb-4" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-[#ff6b00] fill-[#ff6b00]" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-white/60 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-white/40 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-10">
            <motion.button
              onClick={() => navigate(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-[#ff6b00] hover:border-orange-500/30 transition-colors"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 h-2 bg-[#ff6b00]' : 'w-2 h-2 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={() => navigate(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-[#ff6b00] hover:border-orange-500/30 transition-colors"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile: single card */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.4 }}
              className="glass-card gradient-border rounded-2xl p-8"
            >
              <Quote size={32} className="text-[#ff6b00]/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#ff6b00] fill-[#ff6b00]" />
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-bold text-sm">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonials[current].name}</div>
                  <div className="text-white/40 text-xs">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/60">
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-[#ff6b00]' : 'w-2 h-2 bg-white/20'}`}
                />
              ))}
            </div>
            <button onClick={() => navigate(1)} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/60">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
