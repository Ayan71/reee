"use client";

import Link from "next/link";
import {
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_ADDRESS,
  FOOTER_SECTIONS,
  SOCIAL_LINKS,
} from "@/lib/constants";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  instagram: Instagram,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="container-custom">
        {/* CTA bar */}
        <div
          className="py-12 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ borderBottom: "1px solid var(--line)" }}
        >
          <div className="max-w-xl">
            <h3
              className="text-2xl md:text-3xl font-semibold leading-tight"
              style={{ color: "var(--ink)" }}
            >
              Ready to build something serious?
            </h3>
            <p className="mt-2 lede">
              Tell us about your project — we&apos;ll come back within one
              business day.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Link href="/contact" className="btn-primary">
              Start Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/careers" className="btn-secondary">
              Open Roles
            </Link>
          </div>
        </div>

        {/* Main columns */}
        <div className="py-12 md:py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img
                src="/codentrixa.png"
                alt={`${COMPANY_NAME} logo`}
                className="h-[3.4rem] w-auto"
              />
            </Link>
            <p
              className="mt-5 text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              An enterprise software studio building production web, mobile, and
              AI products for startups and growing businesses. Remote-first
              since day one.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail
                  className="w-4 h-4 mt-0.5"
                  style={{ color: "var(--accent)" }}
                />
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="hover:underline"
                  style={{ color: "var(--ink)" }}
                >
                  {COMPANY_EMAIL}
                </a>
              </li>
           
            </ul>
          </div>

          <FooterColumn title="Services" items={FOOTER_SECTIONS.services} />
          <FooterColumn
            title="Technologies"
            items={FOOTER_SECTIONS.technologies}
          />
          <FooterColumn title="Company" items={FOOTER_SECTIONS.company} />
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--line)" }}
        >
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © {year} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            {FOOTER_SECTIONS.legal.map((l: { label: string; href: string }) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs hover:underline"
                style={{ color: "var(--muted)" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon];
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.name}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                    style={{
                      background: "var(--card)",
                      border: "1px solid var(--line)",
                      color: "var(--ink)",
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4
        className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-4"
        style={{ color: "var(--muted)" }}
      >
        {title}
      </h4>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm transition-colors hover:opacity-100"
              style={{ color: "var(--ink)", opacity: 0.78 }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
