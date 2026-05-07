'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-[#ff6b00] text-sm">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goNext = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir * -60, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-[#080808] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#ff6b00]/5 rounded-full blur-[120px] pointer-events-none" />

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
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            What Clients <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            Don't take our word for it — here's what our clients have to say about working with Codentrixa.
          </p>
        </motion.div>

        {/* Main testimonial */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden border-[#ff6b00]/15">
            {/* Quote icon */}
            <div className="absolute top-6 right-8 text-[#ff6b00]/10">
              <Quote className="w-16 h-16" fill="currentColor" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <StarRating rating={TESTIMONIALS[current].rating} />
                <blockquote className="text-white/80 text-lg lg:text-xl leading-relaxed mt-5 mb-8 font-medium">
                  "{TESTIMONIALS[current].content}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff6b00] to-[#ff8c40] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {TESTIMONIALS[current].avatar}
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">{TESTIMONIALS[current].name}</p>
                    <p className="text-white/45 text-sm mt-0.5">{TESTIMONIALS[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-[#ff6b00]'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-[#ff6b00] hover:border-[#ff6b00]/30 hover:bg-[#ff6b00]/8 transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goNext}
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-[#ff6b00] hover:border-[#ff6b00]/30 hover:bg-[#ff6b00]/8 transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mini testimonial tiles */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-5 gap-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`glass-card rounded-xl p-3 text-left transition-all duration-200 ${
                i === current ? 'border-[#ff6b00]/30 bg-[#ff6b00]/5' : 'hover:border-white/15'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#ff6b00] to-[#ff8c40] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <p className="text-white text-xs font-semibold truncate">{t.name.split(' ')[0]}</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <span key={j} className="text-[#ff6b00] text-[8px]">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/35 text-[10px] leading-relaxed line-clamp-2">{t.content.slice(0, 60)}...</p>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
