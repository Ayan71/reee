'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter, Github, Instagram, ArrowUpRight, Mail } from 'lucide-react';
import { navLinks, services } from '@/lib/data';

const SOCIAL_ICONS = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  instagram: Instagram,
};

const SOCIAL_LINKS = [
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/codentrixa/' },
  { name: 'Twitter', icon: 'twitter', href: 'https://x.com/codentrixa47574' },
  { name: 'GitHub', icon: 'github', href: 'https://github.com/codentrixaservices' },
  { name: 'Instagram', icon: 'instagram', href: '#' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,107,0,0.4), transparent)' }}
      />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,107,0,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Image
              src="/codentrixa_logo.png"
              alt="Codentrixa"
              width={200}
              height={80}
              className="object-contain h-20 w-auto mb-6"
            />
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Building smarter digital solutions for businesses worldwide. From concept to production — we engineer the future.
            </p>

            {/* Newsletter signup */}
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-white text-xs placeholder-white/20 focus:outline-none focus:border-orange-500/40"
                />
              </div>
              <button className="btn-primary text-xs py-2.5 px-4 rounded-xl">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Company</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/40 hover:text-[#ff6b00] text-sm transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-white/40 hover:text-[#ff6b00] text-xs transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Contact</h4>
            <ul className="flex flex-col gap-3 text-white/40 text-xs">
              <li>
                <a href="mailto:sales@codentrixa.com" className="hover:text-[#ff6b00] transition-colors">
                  sales@codentrixa.com
                </a>
              </li>
              {/* <li>
                <a href="tel:+15550100100" className="hover:text-[#ff6b00] transition-colors">
                  +1 (555) 010-0100
                </a>
              </li> */}
              {/* <li className="leading-relaxed">
                San Francisco, CA<br />
                Remote Worldwide
              </li> */}
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon as keyof typeof SOCIAL_ICONS];
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-white/40 hover:text-[#ff6b00] hover:border-orange-500/30 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={14} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Codentrixa. All rights reserved.
          </p>
          {/* <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-white/25 hover:text-white/60 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
