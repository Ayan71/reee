'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'codentrixa.cookie-consent';
const STORAGE_VERSION = '1';

type Consent = 'accepted' | 'rejected' | null;

function readConsent(): Consent {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { v?: string; choice?: Consent };
    if (parsed.v !== STORAGE_VERSION) return null;
    return parsed.choice ?? null;
  } catch {
    return null;
  }
}

function writeConsent(choice: Exclude<Consent, null>) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ v: STORAGE_VERSION, choice, ts: Date.now() }),
    );
  } catch {
    /* ignore quota / privacy mode */
  }
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Defer slightly so the banner does not flash before hydration / first paint.
    const t = window.setTimeout(() => {
      if (readConsent() === null) setOpen(true);
    }, 400);
    return () => window.clearTimeout(t);
  }, []);

  const decide = (choice: 'accepted' | 'rejected') => {
    writeConsent(choice);
    setOpen(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="cookie-banner"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', damping: 26, stiffness: 240 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6 md:max-w-md z-[60]"
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
        >
          <div
            className="rounded-2xl p-5 shadow-[0_24px_60px_-20px_rgba(28,24,20,0.30)]"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center"
                style={{ background: 'var(--accent-soft)' }}
              >
                <Cookie className="w-4 h-4" style={{ color: 'var(--accent-dark)' }} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[15px] font-semibold leading-snug" style={{ color: 'var(--ink)' }}>
                  We use cookies to improve your experience
                </h4>
                <p className="mt-1.5 text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                  Essential cookies keep the site working. With your permission we also use a small set of
                  analytics cookies to understand how visitors use the site — never advertising or tracking
                  across other websites.{' '}
                  <Link
                    href="/privacy-policy#cookies"
                    className="font-medium hover:underline"
                    style={{ color: 'var(--accent)' }}
                  >
                    Read our cookie policy
                  </Link>
                  .
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => decide('accepted')}
                    className="btn-primary py-2 px-4 text-[13px]"
                  >
                    Accept all
                  </button>
                  <button
                    type="button"
                    onClick={() => decide('rejected')}
                    className="btn-secondary py-2 px-4 text-[13px]"
                  >
                    Reject non-essential
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() => decide('rejected')}
                aria-label="Dismiss cookie banner"
                className="w-7 h-7 -mt-1 -mr-1 rounded-lg flex-shrink-0 flex items-center justify-center transition-colors"
                style={{ color: 'var(--muted)' }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
