import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Clock, CalendarDays, Quote } from 'lucide-react';
import CTA from '@/components/sections/CTA';
import JsonLd from '@/components/seo/JsonLd';
import { buildMetadata, breadcrumbLd, SITE_URL } from '@/lib/seo';
import { BLOG_POSTS, BLOG_TINTS, getPostBySlug } from '@/lib/blog';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return buildMetadata({
      title: 'Article not found',
      description: 'The article you are looking for does not exist.',
      path: `/blog/${params.slug}`,
      noindex: true,
    });
  }
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPostPage({ params }: Params) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const tint = BLOG_TINTS[post.tint];
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.date,
            url: `${SITE_URL}/blog/${post.slug}`,
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
            author: { '@type': 'Person', name: post.author },
            publisher: { '@id': `${SITE_URL}/#organization` },
            keywords: post.tags.join(', '),
            wordCount: post.body
              .map((b) => (b.type === 'ul' ? b.items.join(' ') : (b as { text?: string }).text ?? ''))
              .join(' ')
              .split(/\s+/).length,
          },
        ]}
      />

      <article className="relative" style={{ background: 'var(--bg)' }}>
        {/* Header */}
        <header
          className="relative overflow-hidden pt-12 md:pt-16 pb-10"
          style={{ background: tint.bg }}
        >
          <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
          <div className="container-custom relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold mb-6"
              style={{ color: 'var(--ink)', opacity: 0.7 }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to all essays
            </Link>
            <div className="max-w-3xl">
              <span
                className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full"
                style={{ background: '#fff', color: tint.ink }}
              >
                {post.category}
              </span>
              <h1
                className="h-display mt-5 text-balance"
                style={{ color: 'var(--ink)' }}
              >
                {post.title}
              </h1>
              <p className="lede mt-5 text-pretty" style={{ color: 'var(--ink)', opacity: 0.78 }}>
                {post.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs" style={{ color: 'var(--ink)', opacity: 0.7 }}>
                <span className="inline-flex items-center gap-2">
                  <span
                    className="w-7 h-7 rounded-full inline-flex items-center justify-center text-[11px] font-semibold"
                    style={{ background: 'var(--ink)', color: '#fff' }}
                  >
                    {post.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                  <span>
                    <span className="font-semibold" style={{ color: 'var(--ink)' }}>{post.author}</span>
                    <span className="opacity-70"> · {post.authorRole}</span>
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readMins} min read
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <section className="section-tight">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {post.body.map((block, i) => {
                switch (block.type) {
                  case 'h2':
                    return (
                      <h2
                        key={i}
                        className="text-2xl md:text-3xl font-semibold mt-12 mb-4"
                        style={{ color: 'var(--ink)' }}
                      >
                        {block.text}
                      </h2>
                    );
                  case 'h3':
                    return (
                      <h3
                        key={i}
                        className="text-xl font-semibold mt-8 mb-3"
                        style={{ color: 'var(--ink)' }}
                      >
                        {block.text}
                      </h3>
                    );
                  case 'p':
                    return (
                      <p
                        key={i}
                        className="text-[16px] md:text-[17px] leading-[1.75] my-5"
                        style={{ color: 'var(--ink)' }}
                      >
                        {block.text}
                      </p>
                    );
                  case 'ul':
                    return (
                      <ul key={i} className="my-5 space-y-2.5 pl-1">
                        {block.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="relative pl-6 text-[16px] leading-[1.7]"
                            style={{ color: 'var(--ink)' }}
                          >
                            <span
                              className="absolute left-0 top-[0.65em] w-2 h-2 rounded-full"
                              style={{ background: 'var(--accent)' }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  case 'quote':
                    return (
                      <blockquote
                        key={i}
                        className="my-8 p-6 rounded-2xl flex gap-4 items-start"
                        style={{ background: 'var(--surface)', borderLeft: `3px solid var(--accent)` }}
                      >
                        <Quote className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                        <div>
                          <p className="text-lg md:text-xl font-medium italic leading-snug" style={{ color: 'var(--ink)' }}>
                            “{block.text}”
                          </p>
                          {block.cite && (
                            <p className="mt-2 text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--muted)' }}>
                              — {block.cite}
                            </p>
                          )}
                        </div>
                      </blockquote>
                    );
                  case 'callout':
                    return (
                      <div
                        key={i}
                        className="my-8 p-5 md:p-6 rounded-2xl"
                        style={{ background: 'var(--accent-soft)', border: '1px solid rgba(245,92,26,0.2)' }}
                      >
                        <div
                          className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-2"
                          style={{ color: 'var(--accent-dark)' }}
                        >
                          {block.title}
                        </div>
                        <p className="text-[15px] leading-relaxed" style={{ color: 'var(--ink)' }}>
                          {block.text}
                        </p>
                      </div>
                    );
                }
              })}

              {/* Tags */}
              <div className="mt-10 pt-8 flex flex-wrap items-center gap-2" style={{ borderTop: '1px solid var(--line)' }}>
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase mr-2" style={{ color: 'var(--muted)' }}>
                  Tags
                </span>
                {post.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="section-tight pt-0">
          <div className="container-custom">
            <h2 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: 'var(--ink)' }}>
              Keep reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card-surface p-5 group">
                  <span
                    className="text-[10px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full"
                    style={{ background: BLOG_TINTS[p.tint].bg, color: BLOG_TINTS[p.tint].ink }}
                  >
                    {p.category}
                  </span>
                  <h3 className="mt-3 text-sm md:text-base font-semibold leading-snug" style={{ color: 'var(--ink)' }}>
                    {p.title}
                  </h3>
                  <div
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold transition-colors"
                    style={{ color: 'var(--accent)' }}
                  >
                    Read article
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <CTA
        eyebrow="Have a project in mind?"
        title="Talk to a senior engineer."
        body="Real engineers, two-week sprints, and a written delivery plan in your inbox within one business day."
      />
    </>
  );
}
