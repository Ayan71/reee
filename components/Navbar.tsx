'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(href);
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/85 backdrop-blur-md border-b border-line/70'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="w-9 h-9 rounded-lg bg-brand text-white flex items-center justify-center font-semibold tracking-tight shadow-sm">
                C
              </span>
              <div className="leading-tight">
                <div className="font-semibold text-ink text-[15px]">Codentrixa</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground" style={{ color: '#9E9890' }}>
                  IT &amp; Software
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-ink/80 hover:text-brand transition-colors rounded-full"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/#contact"
                onClick={handleNavClick('/#contact')}
                className="btn-secondary !py-2 !px-4 text-sm"
              >
                Book Consultation
              </Link>
              <Link
                href="/#contact"
                onClick={handleNavClick('/#contact')}
                className="btn-primary !py-2 !px-4 text-sm"
              >
                Start Project <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-ink"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-bg border-t border-line"
            >
              <div className="container-custom py-5 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick(link.href)}
                    className="px-3 py-2.5 text-base font-medium text-ink hover:text-brand"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Link
                    href="/#contact"
                    onClick={handleNavClick('/#contact')}
                    className="btn-secondary w-full justify-center"
                  >
                    Book Consultation
                  </Link>
                  <Link
                    href="/#contact"
                    onClick={handleNavClick('/#contact')}
                    className="btn-primary w-full justify-center"
                  >
                    Start Project
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  );
}
