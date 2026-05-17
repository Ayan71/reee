'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown, ArrowUpRight } from 'lucide-react';
import { NAV_MENU, NAV_LINKS, COMPANY_NAME } from '@/lib/constants';
import type { NavMenuItem, NavMenuColumn } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenMega(null);
  }, [pathname]);

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname.startsWith(href);
  };

  const isMenuActive = (item: NavMenuItem): boolean => {
    if (item.kind === 'link') return isLinkActive(item.href);
    // mega: consider active if any column item path matches the current route
    return item.columns.some((col) =>
      col.items.some((entry) =>
        !entry.href.startsWith('/#') &&
        !entry.href.startsWith('http') &&
        pathname.startsWith(entry.href.split('#')[0]),
      ),
    );
  };

  const openMenu = (label: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMega(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMega(null), 140);
  };

  return (
    <>
      {/* Top utility bar — enterprise sites use this for context (location / phone) */}
      <div
        className="hidden md:block text-[12px]"
        style={{ background: 'var(--ink)', color: 'rgba(255,255,255,0.78)' }}
      >
        <div className="container-custom h-9 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              Remote · Global · 24/7 coverage
            </span>
            <span className="opacity-50">|</span>
            <a href="mailto:contact@codentrixa.com" className="hover:text-white transition-colors">
              contact@codentrixa.com
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              Talk to an engineer <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(250,250,248,0.92)] backdrop-blur-xl border-b'
            : 'bg-[rgba(250,250,248,0.78)] backdrop-blur-md border-b border-transparent'
        }`}
        style={{ borderColor: scrolled ? 'var(--line)' : 'transparent' }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
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
            <nav
              className="hidden lg:flex items-center gap-1"
              onMouseLeave={scheduleClose}
            >
              {NAV_MENU.map((item) => {
                const active = isMenuActive(item);
                if (item.kind === 'link') {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="relative px-3.5 py-2 text-[13.5px] font-medium rounded-full transition-colors"
                      style={{
                        color: active ? 'var(--accent)' : 'var(--ink)',
                        opacity: active ? 1 : 0.82,
                      }}
                      onMouseEnter={() => setOpenMega(null)}
                    >
                      {item.label}
                    </Link>
                  );
                }
                const isOpen = openMega === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openMenu(item.label)}
                  >
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      onClick={() => setOpenMega(isOpen ? null : item.label)}
                      className="inline-flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium rounded-full transition-colors"
                      style={{
                        color: active || isOpen ? 'var(--accent)' : 'var(--ink)',
                        opacity: active || isOpen ? 1 : 0.82,
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        className="w-3.5 h-3.5 transition-transform"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </button>
                  </div>
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

        {/* Mega-menu panel */}
        <AnimatePresence>
          {openMega && (
            <motion.div
              key={openMega}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.16 }}
              className="hidden lg:block absolute left-0 right-0 top-full"
              onMouseEnter={() => openMenu(openMega)}
              onMouseLeave={scheduleClose}
            >
              <div
                className="container-custom"
                style={{ pointerEvents: 'auto' }}
              >
                <MegaPanel item={NAV_MENU.find((m) => m.kind === 'mega' && m.label === openMega) as Extract<NavMenuItem, { kind: 'mega' }>} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

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
              className="absolute top-0 right-0 bottom-0 w-[88vw] max-w-sm flex flex-col p-6 overflow-y-auto"
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
                  const active = isLinkActive(link.href);
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

function MegaPanel({ item }: { item: Extract<NavMenuItem, { kind: 'mega' }> }) {
  if (!item) return null;
  return (
    <div
      className="mt-1 mb-3 rounded-2xl overflow-hidden shadow-[0_24px_60px_-30px_rgba(28,24,20,0.30)]"
      style={{ background: 'var(--card)', border: '1px solid var(--line)' }}
    >
      <div className="grid grid-cols-12 gap-0">
        {/* Feature */}
        <div
          className="col-span-4 p-7 relative overflow-hidden"
          style={{
            background:
              'linear-gradient(160deg, rgba(245,92,26,0.10) 0%, rgba(245,92,26,0.02) 60%)',
            borderRight: '1px solid var(--line)',
          }}
        >
          <div className="eyebrow">{item.feature.eyebrow}</div>
          <h4 className="mt-3 text-xl font-semibold leading-snug" style={{ color: 'var(--ink)' }}>
            {item.feature.title}
          </h4>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            {item.feature.body}
          </p>
          <Link
            href={item.feature.href}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: 'var(--accent)' }}
          >
            {item.feature.cta} <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Columns */}
        <div className="col-span-8 grid grid-cols-2 gap-x-6 p-7">
          {item.columns.map((col) => (
            <MegaColumn key={col.heading} column={col} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MegaColumn({ column }: { column: NavMenuColumn }) {
  return (
    <div>
      <h5
        className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-3"
        style={{ color: 'var(--muted)' }}
      >
        {column.heading}
      </h5>
      <ul className="space-y-1">
        {column.items.map((entry) => (
          <li key={entry.href}>
            <Link
              href={entry.href}
              className="block rounded-xl px-3 py-2 transition-colors hover:bg-[var(--surface)] group"
            >
              <div className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                {entry.label}
              </div>
              {entry.description && (
                <div className="text-xs mt-0.5 leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {entry.description}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
