import type { Metadata } from 'next';
import PageHeader from '@/components/sections/PageHeader';
import CaseStudies from '@/components/sections/CaseStudies';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real engagements, real outcomes. Logistics, AI, mobile, SaaS, and B2B platforms — the problems we walked into and the systems we built.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Engagements, not screenshots."
        description="Each case below is a problem we walked into, the architecture we built, and the metrics that followed. Filter by category to see the work most relevant to yours."
      />
      <CaseStudies />
      <CTA
        eyebrow="Have a similar problem?"
        title="Bring us in for a written architecture review."
        body="A senior engineer will spend a day with your team, document the current system, and write a one-pager with the top three risks and recommended next steps."
        primaryLabel="Start Project"
        secondaryLabel="Book Consultation"
      />
    </>
  );
}
