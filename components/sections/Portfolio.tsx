'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from '@/lib/constants';

function ProjectCard({ project, index }: { project: typeof PORTFOLIO_PROJECTS[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      layout
      className="group relative glass-card rounded-2xl overflow-hidden hover:border-[#ff6b00]/30 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute inset-0 bg-[#ff6b00]/0 group-hover:bg-[#ff6b00]/5 transition-colors duration-300" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 text-white/70 text-xs font-medium">
            {project.category}
          </span>
        </div>

        {/* External link icon */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90">
          <ExternalLink className="w-3.5 h-3.5 text-[#ff6b00]" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-bold text-base mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-white/45 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-[#ff6b00]/8 border border-[#ff6b00]/12 text-[#ff8c40] text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* View link */}
        <div className="mt-4 flex items-center gap-1.5 text-[#ff6b00] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
          View Case Study
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-[#080808] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff6b00]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="flex flex-col items-center text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/15 text-[#ff8c40] text-xs font-semibold uppercase tracking-widest mb-5">
            Our Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            A glimpse into the products we've crafted — each one a testament to technical excellence and thoughtful design.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#ff6b00] text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white/[0.04] border border-white/[0.07] text-white/55 hover:text-white hover:border-[#ff6b00]/25'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#ff6b00]/25 text-[#ff8c40] text-sm font-medium hover:bg-[#ff6b00]/8 transition-all duration-200 hover:border-[#ff6b00]/40">
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
