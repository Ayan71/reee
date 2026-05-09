'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-brand text-white flex items-center justify-center font-semibold animate-pulse">
              C
            </span>
            <span className="text-ink font-semibold tracking-tight text-lg">Codentrixa</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
