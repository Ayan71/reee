import type { Metadata } from 'next';
import PageHeader from '@/components/sections/PageHeader';
import CaseStudies from '@/components/sections/CaseStudies';
import CTA from '@/components/sections/CTA';
import JsonLd from '@/components/seo/JsonLd';
import { buildMetadata, breadcrumbLd } from '@/lib/seo';
import { CASE_STUDIES, SITE_URL } from '@/lib/constants';

const CANONICAL_PATH = '/case-studies';

export const metadata: Metadata = buildMetadata({
  title: 'Case Studies',
  description:
    'Real engagements, real outcomes. Logistics, AI, mobile, SaaS, and B2B platforms — the problems we walked into and the systems we built.',
  path: CANONICAL_PATH,
  keywords: [
    'software development case studies',
    'logistics platform case study',
    'AI case study',
    'SaaS case study',
    'mobile app case study',
  ],
});


export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Case Studies', path: CANONICAL_PATH },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Case Studies',
            description:
              'A collection of Codentrixa client engagements with documented problems, solutions, and outcomes.',
            url: `${SITE_URL}${CANONICAL_PATH}`,
            hasPart: CASE_STUDIES.map((c) => ({
              '@type': 'CreativeWork',
              name: c.title,
              about: c.category,
              description: c.summary,
            })),
          },
        ]}
      />
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
      />
    </>
  );
}
