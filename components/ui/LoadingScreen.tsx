'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { COMPANY_NAME } from '@/lib/constants';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0a0a0a]"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              className="relative"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'backOut' }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ff6b00] to-[#ff8c40] flex items-center justify-center pulse-glow">
                <span className="text-white font-black text-3xl">C</span>
              </div>
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-[#ff6b00]"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
              />
            </motion.div>

            {/* Company name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-2xl font-bold tracking-widest text-white uppercase">
                {COMPANY_NAME}
              </h1>
              <p className="text-xs text-white/40 tracking-[0.3em] mt-1 uppercase">
                Loading...
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#ff6b00] to-[#ff8c40] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
