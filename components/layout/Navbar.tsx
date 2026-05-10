'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(250,250,248,0.85)] backdrop-blur-xl border-b'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={scrolled ? { borderColor: 'var(--line)' } : undefined}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label={`${COMPANY_NAME} home`}>
              <span className="relative w-9 h-9 rounded-xl flex items-center justify-center shadow-[0_8px_20px_-8px_rgba(245,92,26,0.5)]"
                style={{ background: 'var(--accent)' }}>
                <span className="text-white font-bold text-sm tracking-wide">C</span>
              </span>
              <span className="font-semibold text-[1.05rem] tracking-tight" style={{ color: 'var(--ink)' }}>
                {COMPANY_NAME.slice(0, 4)}
                <span style={{ color: 'var(--accent)' }}>{COMPANY_NAME.slice(4)}</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-3.5 py-2 text-[13.5px] font-medium rounded-full transition-colors"
                    style={{
                      color: active ? 'var(--accent)' : 'var(--ink)',
                      opacity: active ? 1 : 0.78,
                    }}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="navActiveDot"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: 'var(--accent)' }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-2.5">
              <Link href="/contact" className="hidden lg:inline-flex btn-primary py-2.5 px-5 text-sm">
                Start Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border transition-colors"
                style={{ borderColor: 'var(--line)', background: 'var(--card)', color: 'var(--ink)' }}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer so content isn't pinned under the fixed header */}
      <div className="h-16 lg:h-20" aria-hidden />

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <button
              aria-label="Close menu"
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              className="absolute top-0 right-0 bottom-0 w-[80vw] max-w-sm flex flex-col p-6"
              style={{ background: 'var(--bg)', borderLeft: '1px solid var(--line)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            >
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent)' }}>
                    <span className="text-white font-bold text-sm">C</span>
                  </span>
                  <span className="font-semibold text-[1.05rem]" style={{ color: 'var(--ink)' }}>
                    {COMPANY_NAME.slice(0, 4)}
                    <span style={{ color: 'var(--accent)' }}>{COMPANY_NAME.slice(4)}</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{ background: 'var(--surface)', color: 'var(--ink)' }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 flex-1">
                {NAV_LINKS.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ x: 24, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                        style={{
                          color: active ? 'var(--accent)' : 'var(--ink)',
                          background: active ? 'var(--accent-soft)' : 'transparent',
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <Link href="/contact" className="btn-primary w-full justify-center mt-4">
                Start Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
