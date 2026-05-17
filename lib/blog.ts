// ─────────────────────────────────────────────────────────────────────────
//  Blog content — AI, modern engineering, and delivery essays.
//  Each post body is rendered server-side as structured paragraphs.
// ─────────────────────────────────────────────────────────────────────────

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'callout'; title: string; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: 'AI' | 'Engineering' | 'Product' | 'Delivery';
  tags: string[];
  author: string;
  authorRole: string;
  /** ISO date string. */
  date: string;
  /** Reading time in minutes. */
  readMins: number;
  /** Tailwind-friendly tint key (matches BLOG_TINTS). */
  tint: 'amber' | 'sky' | 'violet' | 'emerald' | 'rose' | 'slate';
  body: BlogBlock[];
};

export const BLOG_TINTS: Record<BlogPost['tint'], { bg: string; ink: string }> = {
  amber: { bg: 'rgba(245,158,11,0.12)', ink: '#92400E' },
  sky: { bg: 'rgba(14,165,233,0.12)', ink: '#0369A1' },
  violet: { bg: 'rgba(139,92,246,0.12)', ink: '#5B21B6' },
  emerald: { bg: 'rgba(16,185,129,0.12)', ink: '#065F46' },
  rose: { bg: 'rgba(244,63,94,0.12)', ink: '#9F1239' },
  slate: { bg: 'rgba(100,116,139,0.14)', ink: '#1E293B' },
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'ai-first-product-development',
    title: 'AI-First Product Development: How Modern Teams Are Rewriting the Playbook',
    excerpt:
      'AI is no longer a feature you bolt on after launch — it is the substrate for how product teams discover, design, and deliver software. Here is what changes when you take an AI-first stance.',
    category: 'AI',
    tags: ['AI', 'Product', 'LLM', 'RAG'],
    author: 'Kumar Shanu',
    authorRole: 'Engineering Lead, Codentrixa',
    date: '2026-05-12',
    readMins: 8,
    tint: 'amber',
    body: [
      { type: 'p', text: 'Over the past 24 months a quiet shift has happened in how the best product teams build software. The question is no longer "where can we add AI?" — it is "what does this product look like if AI is the substrate it is built on?" That single reframing changes discovery, design, engineering, and operations.' },
      { type: 'p', text: 'In this post we share the patterns we have seen working in production across logistics, real-estate, travel, and ERP products we have shipped — and the patterns that quietly fall apart at scale.' },
      { type: 'h2', text: 'What "AI-first" actually means' },
      { type: 'p', text: 'AI-first is not "we use ChatGPT to write our copy." It is a stance about where intelligence lives in your product. Three things characterize an AI-first team:' },
      { type: 'ul', items: [
        'The product has at least one workflow where an LLM owns a decision a human used to own — and a feedback loop exists to grade that decision.',
        'Internal tools — CRM, ops dashboards, support tooling — are LLM-augmented by default, not as an afterthought.',
        'The engineering team treats prompts, embeddings, and evals as first-class artifacts in source control, with the same review rigor as a database migration.',
      ]},
      { type: 'h2', text: 'Discovery: from interviews to traces' },
      { type: 'p', text: 'In a classic product cycle, you do user interviews, then synthesize. In an AI-first cycle, your traces — every prompt, response, and downstream user action — are themselves a product research dataset. We are seeing teams replace 70% of their interview cadence with weekly trace reviews, surfacing failure modes that no user would have articulated in a 30-minute call.' },
      { type: 'callout', title: 'Pattern that works', text: 'Build a "trace inbox" in week one of any AI feature. Capture the full prompt, response, and a structured outcome ("user accepted / edited / abandoned"). Review 50 random traces per week as a team. This single ritual will replace half of your usability testing.' },
      { type: 'h2', text: 'Engineering: prompts are code, evals are tests' },
      { type: 'p', text: 'The single biggest engineering mistake we see is treating prompts as configuration. They are not. They are executable logic, and they need the same review, versioning, and rollback machinery as code. Treat your prompt repository the way you treat your migrations folder.' },
      { type: 'ul', items: [
        'Every prompt has an owner, a changelog, and a regression eval suite.',
        'Every eval run produces a numerical score on a held-out set, gated in CI.',
        'A "shadow mode" lets you compare a new prompt version against production before promoting it.',
      ]},
      { type: 'h2', text: 'Architecture: small models close to the data, big models at the edges' },
      { type: 'p', text: 'A common anti-pattern is shipping every LLM call to the most expensive frontier model. The reality is that frontier models earn their keep on creative or open-ended tasks; for structured extraction, classification, and routing, smaller fine-tuned or distilled models are 10× cheaper, 5× faster, and often more accurate.' },
      { type: 'p', text: 'A practical architecture: a routing layer that classifies the incoming request, sends 80% of it to small models running close to your data, and reserves the frontier model for the 20% that genuinely needs it. Cost falls, latency falls, and reliability rises.' },
      { type: 'h2', text: 'Delivery: the two-week loop still wins' },
      { type: 'p', text: 'AI-first does not mean "ship faster" in a magical sense. The teams shipping the best AI products are still on disciplined two-week sprints, with a Friday demo and a green CI build. What changes is that one of the demo slots is always reserved for "show the trace of a hard case from this week." That single slot keeps the team grounded in real user behavior, not in benchmark scores.' },
      { type: 'quote', text: 'The fastest teams we work with are not the ones using the most AI. They are the ones with the cleanest feedback loops between user behavior and model behavior.' },
      { type: 'h2', text: 'Where this is going' },
      { type: 'p', text: 'Over the next year we expect three shifts to harden: (1) inference moves closer to the user as on-device models mature, (2) "evals as a service" becomes table-stakes for serious AI products, and (3) the boundary between product and platform engineering dissolves — every team is now both.' },
      { type: 'p', text: 'If you are starting an AI-first product, the most important thing you can do this quarter is build the discipline of trace review. Models will keep getting better; your ability to learn from them is what will decide whether your product gets better with them.' },
    ],
  },
  {
    slug: 'rag-systems-that-actually-work',
    title: 'RAG Systems That Actually Work in Production',
    excerpt:
      'Most "RAG" demos collapse the moment you put them in front of real users with real documents. Here is the engineering checklist we run on every retrieval system we ship.',
    category: 'AI',
    tags: ['RAG', 'Vector Search', 'LLM', 'Architecture'],
    author: 'Kumar Shanu',
    authorRole: 'Engineering Lead, Codentrixa',
    date: '2026-04-22',
    readMins: 7,
    tint: 'violet',
    body: [
      { type: 'p', text: 'Retrieval-augmented generation is one of the most reached-for patterns in modern AI engineering — and one of the most under-engineered. A working notebook with LangChain and a vector store is not a production RAG system. It is a prototype that will quietly mislead your users until you fix the boring parts.' },
      { type: 'p', text: 'This is the engineering checklist we run before any RAG system ships to real users.' },
      { type: 'h2', text: '1. Chunk like a librarian, not like a developer' },
      { type: 'p', text: 'The default of "1000-token chunks with 200-token overlap" is a starting point, not an answer. Real documents have structure — sections, tables, footnotes — and that structure carries meaning your chunker is destroying by default.' },
      { type: 'ul', items: [
        'Chunk along semantic boundaries (headings, paragraphs, table rows) before falling back to length.',
        'Preserve the document hierarchy in metadata — section title, parent doc, page number — so the LLM can quote it back.',
        'For tables, store the table as a unit. For long tables, store it once as-is and once row-by-row.',
      ]},
      { type: 'h2', text: '2. Embed twice, retrieve once' },
      { type: 'p', text: 'A single embedding model rarely captures both "topic" and "intent." Hybrid retrieval — dense vectors plus BM25 — covers about 80% of failure modes in practice. For the remaining 20%, a second embedding pass on the user query (rewriting it into 2-3 alternate phrasings) is often the highest-ROI change you can make.' },
      { type: 'callout', title: 'Cheap win', text: 'Before pulling results, rewrite the user query into 3 alternates with a small model and union the result sets. This routinely lifts recall by 15-25% on real workloads.' },
      { type: 'h2', text: '3. Re-rank — always' },
      { type: 'p', text: 'Top-k vector search retrieves what is similar, not what is relevant. A cross-encoder re-ranker on the top 30 hits, returning the top 5 for the LLM context window, is non-negotiable for anything user-facing. Modern re-rankers add 20-40ms and double the perceived quality.' },
      { type: 'h2', text: '4. Cite, do not summarize blindly' },
      { type: 'p', text: 'A RAG system without citations is a RAG system that will hallucinate, full stop. The LLM should be forced to quote the source chunk verbatim, and your UI should surface that quote alongside the synthesized answer. Users tolerate uncertainty when they can verify it; they do not tolerate confident wrong answers.' },
      { type: 'h2', text: '5. Eval on real questions, not synthetic ones' },
      { type: 'p', text: 'The fastest way to ship a broken RAG system is to evaluate it on questions a teammate wrote. Real users ask incomplete, ambiguous, and contradictory questions. Build an eval set from actual production traces within the first month, and grow it weekly. Without this, every "improvement" is a guess.' },
      { type: 'quote', text: 'The best RAG system is the one with the most disciplined eval set, not the one with the fanciest vector store.' },
      { type: 'h2', text: '6. Plan for the long context era' },
      { type: 'p', text: 'Long-context models (200k+ tokens) are changing the calculus. For many internal-knowledge use cases, a thin retrieval layer that pulls a whole section into a long-context model now outperforms a chunked RAG pipeline on accuracy. RAG is not going away, but the right granularity is shifting upward. Design for that.' },
      { type: 'h2', text: 'TL;DR' },
      { type: 'ul', items: [
        'Chunk along semantic structure, not just length.',
        'Use hybrid retrieval plus query rewriting.',
        'Always re-rank.',
        'Always cite — and surface citations to users.',
        'Eval on real production traces, weekly.',
      ]},
    ],
  },
  {
    slug: 'flutter-in-2026',
    title: 'Flutter in 2026: One Codebase, Honestly Worth It',
    excerpt:
      'After shipping production Flutter apps to the App Store and Play Store for three years, here is where the platform genuinely wins, where it still hurts, and how to decide.',
    category: 'Engineering',
    tags: ['Flutter', 'Mobile', 'Cross-Platform'],
    author: 'Kumar Shanu',
    authorRole: 'Engineering Lead, Codentrixa',
    date: '2026-03-30',
    readMins: 6,
    tint: 'sky',
    body: [
      { type: 'p', text: 'Flutter has been in our stack for over three years. In that time we have shipped real estate, travel, ERP, and logistics apps to both stores with single Flutter codebases. This is what we know in 2026 — without the marketing.' },
      { type: 'h2', text: 'Where Flutter genuinely wins' },
      { type: 'ul', items: [
        'You ship to iOS and Android from one codebase with one team — saving roughly 40% of mobile budget on average.',
        'UI consistency is exceptional. Pixel-identical screens across platforms without per-platform branching.',
        'Hot reload remains the best developer-experience win in mobile, period. Iteration speed is 2-3× native.',
        'The widget model scales to design systems gracefully — much better than UIKit or Compose at the same size.',
      ]},
      { type: 'h2', text: 'Where it still hurts' },
      { type: 'p', text: 'Flutter is not a free lunch, and the teams that pretend it is end up shipping mediocre apps. The real costs:' },
      { type: 'ul', items: [
        'Platform integrations (Bluetooth LE, advanced camera, deep background work) still need native channels and a native-fluent engineer.',
        'App-store policy edges — push notification config, deep linking, IAP — require platform expertise you cannot ignore.',
        'Binary size is a real constraint for some markets; an empty Flutter app is heavier than an empty native app.',
        'Animation-heavy or audio-latency-sensitive apps are still better served by native.',
      ]},
      { type: 'callout', title: 'Our rule of thumb', text: 'If the product is content-driven (forms, lists, dashboards, marketplaces) Flutter wins comfortably. If the product is sensor-driven (AR, audio engineering, hardware integrations), we still recommend native or a hybrid approach.' },
      { type: 'h2', text: 'What changed in 2026' },
      { type: 'p', text: 'Three shifts have made Flutter materially better this year: Impeller is now the default rendering engine on both platforms, the Material 3 widgets feel modern out-of-the-box, and the Dart team has closed most of the macro story. Practically this means smoother animations, less custom theming, and less boilerplate.' },
      { type: 'h2', text: 'How to decide' },
      { type: 'p', text: 'For most B2C and B2B apps with a single team and one budget, Flutter remains the highest-leverage choice in 2026. For sensor-heavy or platform-deep apps, native is still the right call. For everything in between, the deciding factor is your team — not the framework.' },
    ],
  },
  {
    slug: 'modern-monolith-architecture',
    title: 'The Modern Monolith: Why We Are Quietly Going Back',
    excerpt:
      'After a decade of microservice maximalism, the pendulum has swung back. Here is what a modern monolith looks like and when it is the right choice in 2026.',
    category: 'Engineering',
    tags: ['Architecture', 'Backend', 'Modular Monolith'],
    author: 'Kumar Shanu',
    authorRole: 'Engineering Lead, Codentrixa',
    date: '2026-03-08',
    readMins: 7,
    tint: 'emerald',
    body: [
      { type: 'p', text: 'For ten years the default answer to "how should we structure our backend?" was microservices. In 2026 that answer is finally being questioned in public, and we are seeing serious teams choose the modular monolith — sometimes openly, sometimes under quieter names like "service-oriented monolith" or "cell architecture."' },
      { type: 'h2', text: 'Why the pendulum swung back' },
      { type: 'p', text: 'Microservices solve real problems — independent deploys, team autonomy, technology heterogeneity. But those wins come with a tax: distributed tracing, network failures, deploy orchestration, schema migrations across services. For teams under 50 engineers, the tax is almost always larger than the win.' },
      { type: 'h2', text: 'What "modern monolith" actually means' },
      { type: 'p', text: 'A modern monolith is not a 2010-era ball of mud. It is:' },
      { type: 'ul', items: [
        'A single deployable unit, but with internal modules that have explicit boundaries.',
        'A clear dependency direction between modules — like a layered architecture, but per business domain.',
        'A single database with schemas-per-module, not a single shared blob.',
        'Asynchronous boundaries between modules (event bus, queue) where they make business sense.',
        'Built so that any module can be extracted into a service when it has earned the right to be one.',
      ]},
      { type: 'callout', title: 'Earned the right', text: 'A module has "earned the right" to become a service when it has independent scaling needs, an independent compliance domain, or a team that owns it end-to-end. Until then, keep it in the monolith.' },
      { type: 'h2', text: 'The hidden cost of premature microservices' },
      { type: 'p', text: 'We have onboarded engagements where the team spent six months building infrastructure — service mesh, distributed tracing, multi-cluster deploys — for an application that had three real domains. The same team could have shipped six months of features. The most expensive code is the code that should not have been written.' },
      { type: 'h2', text: 'When microservices are still right' },
      { type: 'ul', items: [
        'You have teams that genuinely need independent deploys (regulatory, scale).',
        'You have meaningfully different runtime needs (a Python ML service vs. a Go ingestion service).',
        'You are at a size where the org chart already looks like microservices — the architecture should match.',
      ]},
      { type: 'h2', text: 'Our default in 2026' },
      { type: 'p', text: 'For every greenfield engagement under 30 engineers, we now default to a modular monolith — usually in TypeScript or Python — with a single Postgres database and a per-module schema. We extract services only when the data shows they are needed. So far the regret rate is zero; the relief rate is high.' },
    ],
  },
  {
    slug: 'shipping-velocity-without-breaking-things',
    title: 'Shipping Velocity Without Breaking Things: The Engineering Org We Wish We Had Earlier',
    excerpt:
      'Going fast and shipping reliably are not opposites. They live on the same axis, and the lever is your delivery cadence — not your engineers.',
    category: 'Delivery',
    tags: ['Delivery', 'Engineering Management', 'Process'],
    author: 'Kumar Shanu',
    authorRole: 'Engineering Lead, Codentrixa',
    date: '2026-02-18',
    readMins: 5,
    tint: 'rose',
    body: [
      { type: 'p', text: 'The most common myth in engineering management is that velocity and quality trade off. They do not. They live on the same axis, and the lever that controls them is your delivery cadence — not the hours your engineers put in.' },
      { type: 'h2', text: 'The two-week rhythm' },
      { type: 'p', text: 'After running dozens of engagements, the cadence that has held up best for us is the two-week sprint with a public Friday demo. Not because two weeks is magical, but because it is short enough to keep scope honest and long enough to ship something real.' },
      { type: 'h2', text: 'The four rituals that actually matter' },
      { type: 'ul', items: [
        'Monday planning — scope this sprint against last sprint, no more, no less.',
        'Wednesday mid-sprint check — flag the one thing most likely to slip, in writing.',
        'Friday demo — five minutes, live software, everyone watches.',
        'Friday retro — one thing to keep, one thing to change, one thing to stop. Written down.',
      ]},
      { type: 'h2', text: 'What we stop doing' },
      { type: 'p', text: 'We have stopped doing daily standups for any team smaller than eight people. We have stopped pre-grooming backlogs more than one sprint ahead. We have stopped writing Jira tickets that nobody reads. None of these have hurt delivery — most have improved it.' },
      { type: 'callout', title: 'The single highest-ROI ritual', text: 'A Friday demo where actual software runs, on a public link, in front of the client. It compresses sales, QA, and stakeholder management into one weekly event — and it puts pressure on the system that nothing else can replicate.' },
      { type: 'h2', text: 'Quality is the velocity floor' },
      { type: 'p', text: 'The teams that ship fast are not the teams that cut corners. They are the teams that cut nothing because their tests, infrastructure, and review process are tuned to make the safe path the fast path. If your safest option is also your slowest one, you have built the wrong system — not hired the wrong engineers.' },
    ],
  },
  {
    slug: 'choosing-an-outsourcing-partner-in-the-ai-era',
    title: 'Choosing an Outsourcing Partner in the AI Era',
    excerpt:
      'AI compresses the cost of code but inflates the cost of judgment. Here is the new buyer\'s checklist for choosing a software partner in 2026.',
    category: 'Product',
    tags: ['Outsourcing', 'AI', 'Hiring'],
    author: 'Kumar Shanu',
    authorRole: 'Engineering Lead, Codentrixa',
    date: '2026-01-29',
    readMins: 6,
    tint: 'slate',
    body: [
      { type: 'p', text: 'AI changes what it means to outsource software. Code is cheaper. Judgment, ownership, and integration are not — and those are exactly the things you have to evaluate a partner on now.' },
      { type: 'h2', text: 'What does not change' },
      { type: 'ul', items: [
        'Senior engineers, not body-shop staffing.',
        'A single point of accountability for delivery.',
        'Transparent monthly billing with a single SOW.',
        'Source code, infra, and credentials owned by you from day one.',
      ]},
      { type: 'h2', text: 'What is new' },
      { type: 'ul', items: [
        'Ask how the team uses AI internally — and how that feeds into the price you pay.',
        'Ask for a written AI policy: what tools, what data, what guardrails.',
        'Ask to see one prompt, one eval, and one trace from a real engagement. If they cannot show you, they have not lived it.',
        'Ask how their pricing model has changed. If it has not, that is a yellow flag.',
      ]},
      { type: 'callout', title: 'Question to ask in your first call', text: '"Show me a feature your team shipped in the last 30 days where AI changed the cost or shape of the implementation." A real answer takes two minutes. A vague one is a signal.' },
      { type: 'h2', text: 'The new failure mode' },
      { type: 'p', text: 'The old failure mode was a partner that shipped slowly. The new failure mode is a partner that ships fast but ships the wrong thing — because AI made the typing cheap and removed the friction that used to force people to think. Look for a partner whose process forces thinking before typing, regardless of how much AI they use.' },
      { type: 'h2', text: 'What good looks like in 2026' },
      { type: 'p', text: 'A modern outsourcing partner gives you a senior squad that delivers on a two-week cadence, uses AI heavily for the parts where it adds leverage, refuses to use it for the parts where it removes accountability, and treats your codebase, your data, and your customers with the same care they would treat their own. Anything less is a body shop with a new logo.' },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
