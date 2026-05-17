import type { Metadata } from 'next';
import { Mail, MapPin, Linkedin, Github, Twitter, Instagram, CalendarClock } from 'lucide-react';
import PageHeader from '@/components/sections/PageHeader';
import InquiryForm from '@/components/forms/InquiryForm';
import {
  COMPANY_EMAIL,
  COMPANY_ADDRESS,
  SOCIAL_LINKS,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to a Codentrixa delivery lead. Tell us about your project and we’ll come back within one business day.',
};

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  instagram: Instagram,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to a senior engineer — not a sales bot."
        description="Send us a message about your project, your timeline, and what you’re trying to ship. A delivery lead replies within one business day."
      />

      <section className="section-padding" style={{ background: 'var(--bg)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Form */}
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-5 space-y-3">
              <ContactRow
                icon={Mail}
                title="Email us"
                value={COMPANY_EMAIL}
                href={`mailto:${COMPANY_EMAIL}`}
                hint="We reply within one business day."
              />
              <ContactRow
                icon={CalendarClock}
                title="Book a consultation"
                value="30-minute discovery call"
                href={`mailto:${COMPANY_EMAIL}?subject=Consultation%20request`}
                hint="Free, no sales pitch."
              />
              <ContactRow
                icon={MapPin}
                title="Where we work from"
                value={COMPANY_ADDRESS}
                hint="Fully remote — overlapping hours with US, EU, and APAC clients."
              />

              {/* Social */}
              <div className="card-flat p-5">
                <h3
                  className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-3"
                  style={{ color: 'var(--muted)' }}
                >
                  Follow us
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SOCIAL_LINKS.map((s) => {
                    const Icon = SOCIAL_ICONS[s.icon];
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={s.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                        style={{ background: 'var(--bg)', border: '1px solid var(--line)', color: 'var(--ink)' }}
                      >
                        <Icon className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                        {s.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-20 md:pb-28" style={{ background: 'var(--bg)' }}>
        <div className="container-custom">
          <div
            className="rounded-[20px] overflow-hidden card-flat aspect-[16/6] flex items-center justify-center relative"
            aria-label="Map placeholder"
          >
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(28,24,20,0.05) 1px, transparent 1px), radial-gradient(rgba(28,24,20,0.05) 1px, transparent 1px)',
                backgroundSize: '24px 24px, 24px 24px',
                backgroundPosition: '0 0, 12px 12px',
              }}
            />
            <div className="relative text-center">
              <MapPin className="w-8 h-8 mx-auto" style={{ color: 'var(--accent)' }} />
              <p className="mt-3 text-sm font-medium" style={{ color: 'var(--ink)' }}>
                {COMPANY_ADDRESS}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
                Embed your preferred map provider here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  title,
  value,
  href,
  hint,
  external,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
  hint?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="card-surface p-5 flex items-start gap-4">
      <div
        className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center"
        style={{ background: 'var(--accent-soft)' }}
      >
        <Icon className="w-5 h-5" style={{ color: 'var(--accent-dark)' }} />
      </div>
      <div className="flex-1">
        <h3
          className="text-[11px] font-semibold tracking-[0.18em] uppercase"
          style={{ color: 'var(--muted)' }}
        >
          {title}
        </h3>
        <p className="text-sm font-medium mt-1 break-words" style={{ color: 'var(--ink)' }}>
          {value}
        </p>
        {hint && (
          <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
            {hint}
          </p>
        )}
      </div>
    </div>
  );

  if (!href) return inner;

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      className="block transition-transform hover:-translate-y-0.5"
    >
      {inner}
    </a>
  );
}
