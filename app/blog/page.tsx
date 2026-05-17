import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Clock, CalendarDays } from 'lucide-react';
import PageHeader from '@/components/sections/PageHeader';
import CTA from '@/components/sections/CTA';
import JsonLd from '@/components/seo/JsonLd';
import { buildMetadata, breadcrumbLd, SITE_URL } from '@/lib/seo';
import { BLOG_POSTS, BLOG_TINTS } from '@/lib/blog';

const CANONICAL_PATH = '/blog';

export const metadata: Metadata = buildMetadata({
  title: 'Blog — AI, modern engineering, and delivery',
  description:
    'Essays from the Codentrixa team on AI-first product development, modern engineering, delivery, and the systems we build for clients.',
  path: CANONICAL_PATH,
  keywords: [
    'AI blog',
    'modern engineering',
    'RAG',
    'LLM',
    'software delivery',
    'Flutter',
    'monolith vs microservices',
    'AI product development',
  ],
});

const CATEGORIES = ['All'] as const;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndexPage() {
  const sorted = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: CANONICAL_PATH },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Codentrixa Blog',
            url: `${SITE_URL}${CANONICAL_PATH}`,
            blogPost: sorted.map((p) => ({
              '@type': 'BlogPosting',
              headline: p.title,
              description: p.excerpt,
              datePublished: p.date,
              url: `${SITE_URL}${CANONICAL_PATH}/${p.slug}`,
              author: { '@type': 'Person', name: p.author },
            })),
          },
        ]}
      />
      <PageHeader
        eyebrow="Insights"
        title="AI, modern engineering, and delivery."
        description="Essays from the team — what we are seeing in production, what we are betting on, and what we wish we had known earlier."
      />

      <section className="section-tight pt-2" style={{ background: 'var(--bg)' }}>
        <div className="container-custom">
          {/* Category chips (visual; static page so no filter state) */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((c) => (
              <span
                key={c}
                className="px-4 py-1.5 rounded-full text-sm font-medium"
                style={{
                  background: c === 'All' ? 'var(--accent)' : 'var(--card)',
                  color: c === 'All' ? '#fff' : 'var(--ink)',
                  border: `1px solid ${c === 'All' ? 'var(--accent)' : 'var(--line)'}`,
                }}
              >
                {c}
              </span>
            ))}
          </div>

          {/* Featured */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="block card-surface p-0 overflow-hidden mb-10 group"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                <div
                  className="lg:col-span-5 relative overflow-hidden p-8 md:p-10 flex flex-col justify-between"
                  style={{
                    background: BLOG_TINTS[featured.tint].bg,
                  }}
                >
                  <div>
                    <span
                      className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full"
                      style={{ background: '#fff', color: BLOG_TINTS[featured.tint].ink }}
                    >
                      Featured · {featured.category}
                    </span>
                    <h2
                      className="mt-5 text-2xl md:text-3xl font-semibold leading-snug text-balance"
                      style={{ color: 'var(--ink)' }}
                    >
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'var(--ink)', opacity: 0.78 }}>
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-4 text-xs" style={{ color: 'var(--ink)', opacity: 0.7 }}>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {formatDate(featured.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readMins} min read
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                  <p
                    className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-2"
                    style={{ color: 'var(--muted)' }}
                  >
                    By {featured.author} · {featured.authorRole}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {featured.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: 'var(--accent)' }}
                  >
                    Read the full essay
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Rest of the posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card-surface p-6 flex flex-col group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-[10px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full"
                    style={{
                      background: BLOG_TINTS[p.tint].bg,
                      color: BLOG_TINTS[p.tint].ink,
                    }}
                  >
                    {p.category}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-semibold leading-snug" style={{ color: 'var(--ink)' }}>
                  {p.title}
                </h3>
                <p className="text-sm mt-2 flex-1 leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {p.excerpt}
                </p>
                <div className="mt-5 pt-4 flex items-center justify-between text-xs" style={{ color: 'var(--muted)', borderTop: '1px solid var(--line)' }}>
                  <span>{formatDate(p.date)}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {p.readMins} min
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Want updates?"
        title="We publish new essays every other week."
        body="Working on something where AI, modern engineering, or delivery cadence matters? Tell us about it — we are always happy to talk shop."
        primaryLabel="Start a project"
        secondaryLabel="View case studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
