'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type FAQItem = { q: string; a: string };

type Props = {
  eyebrow?: string;
  title?: string;
  items: FAQItem[];
  surface?: 'bg' | 'surface';
};

export default function FAQ({
  eyebrow = 'FAQ',
  title = 'Frequently asked questions',
  items,
  surface = 'bg',
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="section-padding"
      style={{ background: surface === 'bg' ? 'var(--bg)' : 'var(--surface)' }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="h-section mt-3 text-balance">{title}</h2>
            <p className="lede mt-4 text-pretty">
              Common questions before you reach out. If yours isn&apos;t here, we&apos;re a quick email away.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-2">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.q}
                  className="card-flat overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium" style={{ color: 'var(--ink)' }}>
                      {item.q}
                    </span>
                    <ChevronDown
                      className="w-5 h-5 flex-shrink-0 transition-transform"
                      style={{
                        color: 'var(--accent)',
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                      }}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                      >
                        <div
                          className="px-5 pb-5 text-sm leading-relaxed"
                          style={{ color: 'var(--muted)' }}
                        >
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
