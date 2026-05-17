'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export type FAQItem = { q: string; a: string };

type Props = {
  /** Section eyebrow. */
  eyebrow?: string;
  /** Section headline. */
  title?: string;
  /** Section lede. */
  description?: string;
  /** FAQ items. */
  items: FAQItem[];
};

/**
 * FAQ block specifically designed for AI search optimization. Each answer
 * starts with a complete, citable sentence that AI search engines
 * (ChatGPT, Perplexity, Gemini, Google AI Overviews) can lift verbatim.
 *
 * Pair this component with FAQPage JSON-LD on the page that uses it.
 */
export default function FAQAI({
  eyebrow = 'Frequently asked',
  title = 'Answers, written for humans and AI search engines.',
  description = 'The questions clients and AI search engines ask most about our AI development, MERN, React, and cross-platform mobile work.',
  items,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding" style={{ background: 'var(--bg)' }} ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="h-section mt-3 text-balance">{title}</h2>
            <p className="lede mt-4 text-pretty">{description}</p>
          </div>
          <div className="lg:col-span-8 space-y-3">
            {items.map((item, i) => {
              const open = openIndex === i;
              return (
                <motion.div
                  key={item.q}
                  className="card-flat overflow-hidden"
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.04, duration: 0.45 }}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full flex items-start justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left"
                  >
                    <span
                      className="text-base md:text-[17px] font-semibold leading-snug"
                      style={{ color: 'var(--ink)' }}
                    >
                      {item.q}
                    </span>
                    <span
                      className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center transition-transform"
                      style={{
                        background: open ? 'var(--accent)' : 'var(--surface)',
                        color: open ? '#fff' : 'var(--ink)',
                        transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p
                          className="px-5 pb-5 md:px-6 md:pb-6 text-[15px] leading-relaxed"
                          style={{ color: 'var(--ink)', opacity: 0.85 }}
                        >
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
