'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Github, Instagram, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { services, techCategories } from '@/lib/data';

const companyLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'Outsourcing', href: '/#outsourcing' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  const topServices = services.slice(0, 7);
  const topTech = techCategories.flatMap((c) => c.items).slice(0, 8);

  return (
    <footer className="surface border-t border-line">
      <div className="container-custom py-16 md:py-20">
        {/* Top CTA */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-12 mb-12 border-b border-line">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-ink leading-tight">
              Have a project in mind?
              <span className="block muted-text font-normal text-base mt-2 max-w-xl">
                Tell us what you are building. We will respond within 48 hours with a clear next step.
              </span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/#contact" className="btn-secondary">
              Book Consultation
            </Link>
            <Link href="/#contact" className="btn-primary">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-lg bg-brand text-white flex items-center justify-center font-semibold">
                C
              </span>
              <div className="leading-tight">
                <div className="font-semibold text-ink">Codentrixa</div>
                <div className="text-[10px] tracking-[0.2em] uppercase muted-text">IT &amp; Software</div>
              </div>
            </Link>
            <p className="mt-5 text-sm leading-relaxed muted-text max-w-sm">
              A premium software development company building enterprise-grade web, mobile, AI, and SaaS products
              for clients and outsourcing partners worldwide.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href="mailto:contact@codentrixa.com" className="flex items-center gap-2 text-ink/80 hover:text-brand">
                <Mail className="w-4 h-4 text-brand" /> contact@codentrixa.com
              </a>
              <a href="tel:+15550100" className="flex items-center gap-2 text-ink/80 hover:text-brand">
                <Phone className="w-4 h-4 text-brand" /> +1 (555) 0100
              </a>
              <span className="flex items-center gap-2 text-ink/80">
                <MapPin className="w-4 h-4 text-brand" /> Remote-first &middot; Global delivery
              </span>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ink mb-4">Services</div>
            <ul className="space-y-2.5 text-sm">
              {topServices.map((s) => (
                <li key={s.slug}>
                  <Link href="/#services" className="muted-text hover:text-brand transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ink mb-4">Technologies</div>
            <ul className="space-y-2.5 text-sm">
              {topTech.map((t) => (
                <li key={t.name}>
                  <Link href="/#technologies" className="muted-text hover:text-brand transition-colors">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ink mb-4">Company</div>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="muted-text hover:text-brand transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ink mb-4">Hire / Outsource</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/#outsourcing" className="muted-text hover:text-brand">Hire Remote Developers</Link></li>
              <li><Link href="/#outsourcing" className="muted-text hover:text-brand">Offshore Teams</Link></li>
              <li><Link href="/#outsourcing" className="muted-text hover:text-brand">Startup Partnership</Link></li>
              <li><Link href="/careers" className="muted-text hover:text-brand">Join Our Team</Link></li>
              <li><Link href="/#contact" className="muted-text hover:text-brand">WhatsApp Sales</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-xs muted-text">
            &copy; {new Date().getFullYear()} Codentrixa. All rights reserved.
          </div>
          <div className="flex items-center gap-5 text-xs muted-text">
            <Link href="#" className="hover:text-brand">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand">Terms &amp; Conditions</Link>
            <Link href="#" className="hover:text-brand">Cookies</Link>
          </div>
          <div className="flex items-center gap-2">
            {[
              { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              { Icon: Twitter, href: '#', label: 'Twitter' },
              { Icon: Github, href: '#', label: 'GitHub' },
              { Icon: Instagram, href: '#', label: 'Instagram' },
            ].map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-card border border-line flex items-center justify-center text-ink/70 hover:text-brand hover:border-brand transition-colors"
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
