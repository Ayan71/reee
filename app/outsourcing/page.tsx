import type { Metadata } from 'next';
import PageHeader from '@/components/sections/PageHeader';
import Outsourcing from '@/components/sections/Outsourcing';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import JsonLd from '@/components/seo/JsonLd';
import { buildMetadata, breadcrumbLd, serviceLd, faqLd } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Outsourcing & Dedicated Teams',
  description:
    'Hire dedicated remote developers, offshore squads, or full outsourced IT teams. Monthly engagement, senior engineers, and full transparency.',
  path: '/outsourcing',
  keywords: [
    'IT outsourcing services',
    'dedicated remote developers',
    'offshore development team',
    'startup CTO partnership',
    'staff augmentation',
  ],
});

const FAQ_ITEMS = [
  {
    q: 'How fast can you ramp up a dedicated developer?',
    a: 'For most stacks (React, Next.js, Flutter, Node.js, Python) we can have a senior engineer onboarded inside 7–10 business days.',
  },
  {
    q: 'How do you handle time zones?',
    a: 'We default to a 4-hour overlap with your team, regardless of your time zone. Async-first culture means handoffs work even outside that window.',
  },
  {
    q: 'Can I change developers if it’s not a fit?',
    a: 'Yes — within the first 30 days of any engagement we’ll swap an engineer with no extra cost. After that, with two weeks notice.',
  },
  {
    q: 'Who manages the developer day-to-day?',
    a: 'You do. We assign a delivery lead who owns staffing, coverage, and quality, but the engineer reports into your standups, your tools, your roadmap.',
  },
  {
    q: 'Do you sign IP and NDA agreements?',
    a: 'Always. All work product transfers to you on payment. We sign NDAs upfront, no questions asked.',
  },
  {
    q: 'What does it cost?',
    a: 'Senior engineers from $X,XXX / month depending on stack and seniority. We send a written quote within 24 hours of a discovery call.',
  },
];

export default function OutsourcingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Outsourcing', path: '/outsourcing' },
          ]),
          serviceLd({
            name: 'IT Outsourcing & Dedicated Development Teams',
            description:
              'Senior engineers on a monthly retainer — dedicated developers, offshore squads, or full outsourced IT teams.',
            path: '/outsourcing',
          }),
          faqLd(FAQ_ITEMS),
        ]}
      />
      <PageHeader
        eyebrow="Outsourcing services"
        title="Senior engineers, on a monthly invoice. No agency markup, no surprises."
        description="We've extended in-house teams for SaaS, fintech, logistics, and AI clients across three continents. Hire one developer, a full squad, or a long-term offshore team — same playbook, same quality bar."
        chips={['Dedicated developers', 'Offshore squads', 'Startup CTO partnerships', 'Long-term retainers']}
      />
      <Outsourcing />
      <FAQ items={FAQ_ITEMS} surface="surface" />
      <CTA
        eyebrow="Let’s scope your team"
        title="Hire your first developer in under two weeks."
        body="Tell us the role, the stack, and the seniority. We’ll send three matched profiles for you to interview within five business days."
        primaryLabel="Hire Remote Team"
        secondaryLabel="Outsource Your Project"
      />
    </>
  );
}
