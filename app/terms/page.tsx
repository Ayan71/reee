import type { Metadata } from 'next';
import PageHeader from '@/components/sections/PageHeader';
import JsonLd from '@/components/seo/JsonLd';
import { buildMetadata, breadcrumbLd } from '@/lib/seo';
import { COMPANY_NAME, COMPANY_EMAIL } from '@/lib/constants';

const CANONICAL_PATH = '/terms';
const LAST_UPDATED = 'May 2026';

export const metadata: Metadata = buildMetadata({
  title: 'Terms & Conditions',
  description:
    'The terms that govern your use of the Codentrixa website and any services we provide.',
  path: CANONICAL_PATH,
  keywords: ['terms', 'terms and conditions', 'service agreement'],
});

const SECTIONS: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: 'agreement',
    title: '1. Agreement',
    body: (
      <p>
        By accessing or using the {COMPANY_NAME} website (&ldquo;Site&rdquo;) or engaging our team for any
        services, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do
        not use the Site.
      </p>
    ),
  },
  {
    id: 'services',
    title: '2. Services',
    body: (
      <p>
        {COMPANY_NAME} provides software design, engineering, and operations services on a project,
        retainer, or dedicated-team basis. The exact scope, deliverables, and fees for each engagement
        are described in a separate written Statement of Work (SOW) or Master Services Agreement (MSA).
      </p>
    ),
  },
  {
    id: 'ip',
    title: '3. Intellectual property',
    body: (
      <>
        <p>
          All trademarks, logos, copy, and visual assets on this Site are the property of
          {' '}{COMPANY_NAME} unless otherwise noted. Code and deliverables produced under an
          engagement are governed by the IP terms in the relevant SOW or MSA.
        </p>
        <p>
          You may not copy, reproduce, or repurpose Site content for commercial use without written
          permission.
        </p>
      </>
    ),
  },
  {
    id: 'use',
    title: '4. Acceptable use',
    body: (
      <p>
        You agree not to use the Site for any unlawful purpose, to attempt to compromise its security,
        or to interfere with another visitor&rsquo;s use of the Site.
      </p>
    ),
  },
  {
    id: 'liability',
    title: '5. Limitation of liability',
    body: (
      <p>
        The Site is provided &ldquo;as is&rdquo; without warranties of any kind. To the maximum extent
        permitted by law, {COMPANY_NAME} will not be liable for any indirect, incidental, consequential,
        or punitive damages arising from your use of the Site.
      </p>
    ),
  },
  {
    id: 'links',
    title: '6. Third-party links',
    body: (
      <p>
        The Site may link to third-party websites or services that we do not control. We are not
        responsible for the content or practices of those third parties.
      </p>
    ),
  },
  {
    id: 'changes',
    title: '7. Changes to the Terms',
    body: (
      <p>
        We may update these Terms from time to time. Continued use of the Site after changes are
        published constitutes acceptance of the updated Terms.
      </p>
    ),
  },
  {
    id: 'contact',
    title: '8. Contact',
    body: (
      <p>
        For questions about these Terms, write to{' '}
        <a href={`mailto:${COMPANY_EMAIL}`} className="accent-text font-medium hover:underline">
          {COMPANY_EMAIL}
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Terms & Conditions', path: CANONICAL_PATH },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description={`The terms that govern your use of this website and any services we provide. Last updated ${LAST_UPDATED}.`}
      />
      <section className="section-tight" style={{ background: 'var(--bg)' }}>
        <div className="container-custom">
          <article className="max-w-3xl mx-auto">
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 mb-10">
                <h2 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: 'var(--ink)' }}>
                  {s.title}
                </h2>
                <div
                  className="space-y-3 text-sm md:text-[15px] leading-relaxed [&_a]:text-[var(--accent)] [&_a:hover]:underline"
                  style={{ color: 'var(--ink)' }}
                >
                  {s.body}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
