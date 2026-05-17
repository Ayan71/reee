import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

/**
 * robots.txt for Codentrixa.
 *
 * We explicitly allow the major AI crawlers (GPTBot, ChatGPT-User, OAI-SearchBot,
 * PerplexityBot, ClaudeBot, Google-Extended, anthropic-ai, Applebot-Extended,
 * Bytespider, cohere-ai) so the site can be cited in ChatGPT, Perplexity,
 * Gemini, Google AI Overviews, Apple Intelligence, and other AI search engines.
 *
 * Standard crawlers are allowed everywhere except admin / internal Next paths.
 */
export default function robots(): MetadataRoute.Robots {
  const sharedDisallow = ['/api/', '/_next/', '/admin/'];

  const aiUserAgents = [
    'GPTBot',
    'ChatGPT-User',
    'OAI-SearchBot',
    'PerplexityBot',
    'Perplexity-User',
    'ClaudeBot',
    'anthropic-ai',
    'Claude-Web',
    'Google-Extended',
    'Applebot',
    'Applebot-Extended',
    'Bytespider',
    'cohere-ai',
    'Amazonbot',
    'DuckAssistBot',
    'YouBot',
    'Meta-ExternalAgent',
    'Meta-ExternalFetcher',
  ];

  return {
    rules: [
      // Standard search crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: sharedDisallow,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: sharedDisallow,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: sharedDisallow,
      },
      // Explicit allow-list for AI search crawlers — these have to opt-in
      // and many sites block them by default, which hurts AI search visibility.
      ...aiUserAgents.map((ua) => ({
        userAgent: ua,
        allow: '/',
        disallow: sharedDisallow,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
