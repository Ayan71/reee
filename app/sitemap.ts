import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { TECH_DETAILS } from '@/lib/tech-data';
import { BLOG_POSTS } from '@/lib/blog';
import { COUNTRIES } from '@/lib/countries';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/outsourcing', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/case-studies', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/careers', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/global', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const techRoutes = Object.keys(TECH_DETAILS).map((slug) => ({
    path: `/technologies/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  const blogRoutes = BLOG_POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  }));

  const countryRoutes = COUNTRIES.map((c) => ({
    path: `/global/${c.slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticRoutes, ...techRoutes, ...blogRoutes, ...countryRoutes].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
