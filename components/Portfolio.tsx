'use client';

import { useState, useRef } from 'react';

import {
  motion,
  useInView,
  AnimatePresence,
  type Variants,
} from 'framer-motion';

import Image from 'next/image';

import { ArrowUpRight } from 'lucide-react';

import { projects } from '@/lib/data';

const CATEGORIES = [
  'All',
  'Web',
  'Mobile',
  'AI/ML',
  'Enterprise',
];

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

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState('All');

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
        );

  return (
    <section
      id="portfolio"
      className="section-padding bg-[#0d0d0d] relative overflow-hidden"
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
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-[#ff6b00] border border-orange-500/30 bg-orange-500/5 mb-4">
            Our Work
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured{' '}
            <span className="orange-text-gradient">
              Projects
            </span>
          </h2>

          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            A selection of our best work across
            industries and technology platforms.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial="hidden"
          animate={
            inView ? 'visible' : 'hidden'
          }
          custom={1}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category)
              }
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#ff6b00] text-white shadow-lg'
                  : 'glass-card text-white/50 hover:text-white hover:border-orange-500/30'
              }`}
              style={
                activeCategory === category
                  ? {
                      boxShadow:
                        '0 0 20px rgba(255,107,0,0.4)',
                    }
                  : {}
              }
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group glass-card rounded-2xl overflow-hidden relative"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-[#ff6b00]/80 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-[#ff6b00]">
                    <ArrowUpRight
                      size={14}
                      className="text-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#ff6b00] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-white/40 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(
                      (tag: string) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-white/50 border border-white/5"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}