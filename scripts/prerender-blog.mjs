#!/usr/bin/env node
/**
 * Writes dist/blog/<slug>/index.html for every published post: a copy of the built
 * index.html with real og:/twitter: tags baked into the head.
 *
 * Why: social scrapers (LinkedIn, Facebook, Slack, WhatsApp) don't run JavaScript,
 * so a client-rendered post looks like a blank page with the generic site description.
 * This also turns post URLs into real 200s instead of GitHub Pages' 404 fallback.
 *
 * Only the tags are baked. The post body still loads live from Sanity, so edits
 * appear immediately without a rebuild.
 *
 * ponytail: string injection into a file we already built. No prerender framework,
 * no headless browser. If we ever need the body in the HTML too, that's when to
 * reach for a real prerenderer.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const config = JSON.parse(readFileSync(join(root, 'sanity.json'), 'utf8'));

export const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function metaTags({ title, description, image, url }) {
  const tags = [
    ['og:type', 'article'],
    ['og:title', title],
    ['og:description', description],
    ['og:url', url],
    ['twitter:card', image ? 'summary_large_image' : 'summary'],
    ['twitter:title', title],
    ['twitter:description', description],
  ];
  if (image) {
    tags.push(['og:image', image], ['twitter:image', image]);
  }

  return [
    `<title>${escapeAttr(title)}</title>`,
    `<meta name="description" content="${escapeAttr(description)}">`,
    ...tags.map(([property, content]) => {
      const attr = property.startsWith('twitter:') ? 'name' : 'property';
      return `<meta ${attr}="${property}" content="${escapeAttr(content)}">`;
    }),
  ].join('\n    ');
}

/** Replaces the shell's <title> and description, then injects the social tags. */
export function buildPage(shell, meta) {
  const stripped = shell
    .replace(/<title>.*?<\/title>/is, '')
    .replace(/<meta\s+name="description"[^>]*>/i, '');

  if (!/<\/head>/i.test(stripped)) {
    throw new Error('dist/index.html has no </head> — cannot inject meta tags');
  }
  return stripped.replace(/<\/head>/i, `  ${metaTags(meta)}\n  </head>`);
}

export async function fetchPosts() {
  const groq = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    title, "slug": slug.current, excerpt, "coverImage": coverImage.asset->url
  }`;
  const url = `https://${config.projectId}.apicdn.sanity.io/v${config.apiVersion}/data/query/${config.dataset}?query=${encodeURIComponent(groq)}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sanity returned ${res.status}: ${await res.text()}`);
  const { result } = await res.json();
  return result ?? [];
}

async function main() {
  if (config.projectId === 'REPLACE_WITH_PROJECT_ID') {
    console.warn('prerender-blog: sanity.json still has a placeholder projectId — skipping.');
    return;
  }

  const shell = readFileSync(join(dist, 'index.html'), 'utf8');
  const posts = await fetchPosts();

  for (const post of posts) {
    const dir = join(dist, 'blog', post.slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(
      join(dir, 'index.html'),
      buildPage(shell, {
        title: post.title,
        description: post.excerpt,
        image: post.coverImage ? `${post.coverImage}?w=1200&fit=max` : null,
        url: `${config.siteUrl}/blog/${post.slug}`,
      }),
    );
  }

  // The index gets its own tags so sharing /blog isn't a generic preview either.
  mkdirSync(join(dist, 'blog'), { recursive: true });
  writeFileSync(
    join(dist, 'blog', 'index.html'),
    buildPage(shell, {
      title: 'Blog | Coaching The Change',
      description:
        'Reflections, tools, and practical guidance on health, wellbeing, and lasting change.',
      image: null,
      url: `${config.siteUrl}/blog`,
    }),
  );

  console.log(`prerender-blog: wrote ${posts.length} post page(s) + blog index`);
}

// Only run when invoked directly, so check-blog.mjs can import the pure helpers.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((err) => {
    console.error('prerender-blog failed:', err.message);
    process.exit(1);
  });
}
