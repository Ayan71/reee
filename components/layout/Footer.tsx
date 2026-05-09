'use client';

import { motion } from 'framer-motion';
import { Code as Code2, Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, NAV_LINKS, SERVICES } from '@/lib/constants';

const SOCIAL_ICONS = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080808] border-t border-white/[0.05] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#ff6b00]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA bar */}
        <div className="py-12 border-b border-white/[0.05]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Ready to build something
                <span className="gradient-text"> extraordinary?</span>
              </h2>
              <p className="text-white/50 mt-1 text-sm">Let's turn your vision into a world-class digital product.</p>
            </div>
            <motion.button
              onClick={() => handleNavClick('#contact')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff8c40] text-white font-semibold text-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all hover:-translate-y-0.5 whitespace-nowrap"
              whileTap={{ scale: 0.97 }}
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff6b00] to-[#ff8c40] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold text-lg">
                Coden<span className="gradient-text">trixa</span>
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Building future-ready digital solutions for startups and enterprises. We ship products that scale, perform, and impress.
            </p>
            <div className="flex items-center gap-2.5">
              {(['twitter', 'linkedin', 'github', 'instagram'] as const).map((social) => {
                const Icon = SOCIAL_ICONS[social];
                return (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/[0.07] flex items-center justify-center text-white/50 hover:text-[#ff6b00] hover:border-[#ff6b00]/30 hover:bg-[#ff6b00]/5 transition-all duration-200"
                    aria-label={social}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/45 hover:text-[#ff6b00] text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#ff6b00] transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <span className="text-white/45 hover:text-[#ff6b00] text-sm transition-colors duration-200 cursor-default block">
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#ff6b00]/10 border border-[#ff6b00]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-3.5 h-3.5 text-[#ff6b00]" />
                  </div>
                  <span className="text-white/45 group-hover:text-[#ff6b00] text-sm transition-colors duration-200 break-all">
                    {COMPANY_EMAIL}
                  </span>
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY_PHONE}`} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#ff6b00]/10 border border-[#ff6b00]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-[#ff6b00]" />
                  </div>
                  <span className="text-white/45 group-hover:text-[#ff6b00] text-sm transition-colors duration-200">
                    {COMPANY_PHONE}
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ff6b00]/10 border border-[#ff6b00]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#ff6b00]" />
                  </div>
                  <span className="text-white/45 text-sm">San Francisco, CA</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {currentYear} {COMPANY_NAME}. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200">
                {item}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
