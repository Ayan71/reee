'use client';

import { motion } from 'framer-motion';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Optional small chips below the description (categories, etc). */
  chips?: string[];
  align?: 'left' | 'center';
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  chips,
  align = 'left',
}: Props) {
  return (
    <section
      className="relative overflow-hidden pt-12 md:pt-16 pb-12 md:pb-16"
      style={{ background: 'var(--bg)' }}
    >
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div
        className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,92,26,0.10) 0%, transparent 65%)' }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          className={align === 'center' ? 'max-w-3xl mx-auto text-center' : 'max-w-3xl'}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h-display mt-4 text-balance">{title}</h1>
          {description && (
            <p className="lede mt-5 text-pretty">{description}</p>
          )}
          {chips && chips.length > 0 && (
            <div className={`mt-6 flex flex-wrap gap-2 ${align === 'center' ? 'justify-center' : ''}`}>
              {chips.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
