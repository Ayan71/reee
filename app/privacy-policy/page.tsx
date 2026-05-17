import type { Metadata } from 'next';
import PageHeader from '@/components/sections/PageHeader';
import JsonLd from '@/components/seo/JsonLd';
import { buildMetadata, breadcrumbLd } from '@/lib/seo';
import { COMPANY_NAME, COMPANY_EMAIL } from '@/lib/constants';

const CANONICAL_PATH = '/privacy-policy';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How Codentrixa collects, uses, stores, and protects personal information across our website and client engagements.',
  path: CANONICAL_PATH,
  keywords: ['privacy policy', 'data protection', 'GDPR', 'cookies'],
});

type Section = { id: string; title: string; body: React.ReactNode };

const LAST_UPDATED = 'May 2026';

const SECTIONS: Section[] = [
  {
    id: 'who-we-are',
    title: '1. Who we are',
    body: (
      <>
        <p>
          {COMPANY_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is an enterprise software studio
          operating remotely on a global basis. This Privacy Policy explains what personal information
          we collect when you visit codentrixa.com, request a proposal, apply for a role, or otherwise
          interact with us — and how we use and protect it.
        </p>
        <p>
          If you have any questions, you can reach our team at{' '}
          <a href={`mailto:${COMPANY_EMAIL}`} className="accent-text font-medium hover:underline">
            {COMPANY_EMAIL}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'what-we-collect',
    title: '2. Information we collect',
    body: (
      <>
        <p>We collect a limited set of information, only when it is necessary to provide our services:</p>
        <ul>
          <li>
            <strong>Contact details</strong> — name, work email, phone, company, and the message you send us
            through inquiry forms or by email.
          </li>
          <li>
            <strong>Application details</strong> — when you apply for an open role, we receive your CV,
            portfolio links, and the answers you provide on the application form.
          </li>
          <li>
            <strong>Usage data</strong> — basic analytics about how visitors use the site (pages viewed,
            referring source, device, country). We do not build advertising profiles.
          </li>
          <li>
            <strong>Cookies and local storage</strong> — see the &ldquo;Cookies&rdquo; section below.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use-it',
    title: '3. How we use your information',
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to inquiries, scope projects, and deliver the services you engage us for.</li>
          <li>Evaluate job applications and run our hiring pipeline.</li>
          <li>
            Operate, secure, and improve the website (e.g. fix bugs, measure aggregate traffic, prevent abuse).
          </li>
          <li>Comply with legal and contractual obligations.</li>
        </ul>
        <p>
          We do <strong>not</strong> sell your personal information, and we do not share it with advertisers.
        </p>
      </>
    ),
  },
  {
    id: 'legal-basis',
    title: '4. Legal basis for processing',
    body: (
      <>
        <p>
          Where the GDPR or similar laws apply, we rely on one or more of the following bases: your consent
          (for example when you submit a form), the necessity of processing to provide a service you have asked
          for, our legitimate business interests (running and improving the site), or legal obligations
          (tax, accounting, fraud prevention).
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: '5. Cookies & similar technologies',
    body: (
      <>
        <p>
          We use a small number of essential and analytics cookies. Essential cookies are required for the
          site to work (for example to remember your cookie preferences). Analytics cookies help us understand
          how the site is used in aggregate. You can accept or reject non-essential cookies through the banner
          shown on your first visit, and you can clear cookies at any time from your browser settings.
        </p>
        <ul>
          <li>
            <strong>cookie-consent</strong> — stores your cookie preference for up to 12 months.
          </li>
          <li>
            <strong>Analytics</strong> — anonymized, aggregated traffic data. Disabled until you accept.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'sharing',
    title: '6. Who we share information with',
    body: (
      <>
        <p>
          We share information only with the service providers we need to operate the business
          (for example our email, hosting, and analytics vendors), all of whom are bound by confidentiality
          and data-processing agreements.
        </p>
        <p>
          We may disclose information when required by law, to enforce our agreements, or to protect the
          safety of our team or the public.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    title: '7. How long we keep information',
    body: (
      <>
        <p>
          We retain personal information only for as long as is necessary for the purpose it was collected
          for, or as required by applicable law. Inquiry submissions are retained for up to 24 months; job
          applications for up to 12 months unless you ask us to remove them earlier.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: '8. Your rights',
    body: (
      <>
        <p>
          Depending on where you live, you may have the right to access, correct, or delete the personal
          information we hold about you; to restrict or object to certain processing; to receive a portable
          copy of your data; and to withdraw any consent you previously gave.
        </p>
        <p>
          To exercise these rights, email{' '}
          <a href={`mailto:${COMPANY_EMAIL}`} className="accent-text font-medium hover:underline">
            {COMPANY_EMAIL}
          </a>
          . We will respond within 30 days.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: '9. Security',
    body: (
      <>
        <p>
          We use industry-standard technical and organizational safeguards — TLS in transit, encrypted
          storage at rest, role-based access, and regular reviews — to protect personal information from
          unauthorized access, disclosure, or loss.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    title: '10. Children',
    body: (
      <p>
        Our services are not directed at children under 16, and we do not knowingly collect personal
        information from them.
      </p>
    ),
  },
  {
    id: 'changes',
    title: '11. Changes to this policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;last
        updated&rdquo; date at the top of this page. Material changes will be communicated clearly on the site.
      </p>
    ),
  },
  {
    id: 'contact',
    title: '12. Contact us',
    body: (
      <p>
        Questions, requests, or concerns? Reach us anytime at{' '}
        <a href={`mailto:${COMPANY_EMAIL}`} className="accent-text font-medium hover:underline">
          {COMPANY_EMAIL}
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Privacy Policy', path: CANONICAL_PATH },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Privacy Policy',
            description:
              'How Codentrixa collects, uses, stores, and protects personal information.',
            dateModified: new Date().toISOString(),
          },
        ]}
      />
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How we collect, use, and protect personal information. Last updated ${LAST_UPDATED}.`}
      />

      <section className="section-tight" style={{ background: 'var(--bg)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Sticky TOC */}
            <aside className="lg:col-span-3">
              <div
                className="lg:sticky lg:top-28 p-5 rounded-2xl"
                style={{ background: 'var(--card)', border: '1px solid var(--line)' }}
              >
                <p
                  className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-4"
                  style={{ color: 'var(--muted)' }}
                >
                  On this page
                </p>
                <ul className="space-y-2 text-sm">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block transition-colors hover:opacity-100"
                        style={{ color: 'var(--ink)', opacity: 0.78 }}
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Body */}
            <article
              className="lg:col-span-9 prose prose-neutral max-w-none"
              style={{ color: 'var(--ink)' }}
            >
              {SECTIONS.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-28 mb-10">
                  <h2 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: 'var(--ink)' }}>
                    {s.title}
                  </h2>
                  <div
                    className="space-y-3 text-sm md:text-[15px] leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-[var(--accent)] [&_a:hover]:underline"
                    style={{ color: 'var(--ink)' }}
                  >
                    {s.body}
                  </div>
                </section>
              ))}
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
