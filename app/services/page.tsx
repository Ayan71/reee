import type { Metadata } from 'next';
import PageHeader from '@/components/sections/PageHeader';
import Services from '@/components/sections/Services';
import ProcessSteps from '@/components/sections/ProcessSteps';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web, mobile, AI, SaaS, cloud, and outsourcing services from a senior engineering studio. End-to-end delivery, monthly retainers, long-term support.',
};

const DELIVERY_PROCESS = [
  { step: 1, title: 'Discovery', description: 'Spec workshop and a written delivery plan in week one — fixed scope or rolling sprint, your call.' },
  { step: 2, title: 'Design', description: 'Figma design system, prototype, and acceptance criteria locked before we ship code.' },
  { step: 3, title: 'Build', description: 'Two-week sprints, a Friday demo, and a green CI build at the end of every sprint.' },
  { step: 4, title: 'Launch', description: 'Phased rollout, observability wired up, and an on-call rotation for the first 30 days.' },
  { step: 5, title: 'Operate', description: 'Maintenance retainers, version upgrades, and feature work from the same team that built it.' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="An enterprise studio you can scale up — or down — every quarter."
        description="From product discovery through long-term operations, we cover the full software lifecycle. Pick a single service or hire a full squad — both run on the same delivery playbook."
      />
      <Services showHeader={false} />
      <ProcessSteps steps={DELIVERY_PROCESS} surface="surface" />
      <CTA
        eyebrow="Tell us what you’re building"
        title="From idea to production — with a senior team you can trust."
        body="We take on a small number of engagements per quarter so every client gets senior attention. If we’re a fit, we’ll come back with a clear plan and pricing within one business day."
      />
    </>
  );
}
