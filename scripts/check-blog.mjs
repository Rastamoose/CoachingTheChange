#!/usr/bin/env node
/**
 * Run with: node scripts/check-blog.mjs
 *
 * Checks the two things that can actually break this blog:
 *   1. Meta-tag injection (a title with quotes must not blow up the HTML)
 *   2. The live Sanity query still returns the fields the site expects
 *
 * ponytail: assert-based, no test framework. The repo has no test setup and this
 * doesn't justify adding one.
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildPage, escapeAttr, fetchPosts } from './prerender-blog.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(readFileSync(join(root, 'sanity.json'), 'utf8'));

const SHELL = `<!doctype html><html><head><title>Old</title><meta name="description" content="old"></head><body><div id="root"></div></body></html>`;

function checkEscaping() {
  assert.equal(escapeAttr('a "b" <c> & d'), 'a &quot;b&quot; &lt;c&gt; &amp; d');

  // A real title with a quote in it must not break out of the content attribute.
  const html = buildPage(SHELL, {
    title: 'The "hard" part of change',
    description: 'On <resistance> & habit',
    image: 'https://cdn.sanity.io/x.jpg?w=1200',
    url: 'https://www.coachingthechange.com/blog/hard-part',
  });

  assert.match(html, /<meta property="og:title" content="The &quot;hard&quot; part of change">/);
  assert.match(html, /<meta property="og:description" content="On &lt;resistance&gt; &amp; habit">/);
  assert.equal(
    (html.match(/<title>/g) || []).length,
    1,
    'old <title> should be replaced, not duplicated',
  );
  assert.ok(!html.includes('content="old"'), 'old description should be removed');
  assert.match(html, /twitter:card" content="summary_large_image"/);
  console.log('  ✓ meta tag injection and escaping');
}

function checkNoImage() {
  const html = buildPage(SHELL, {
    title: 'No cover',
    description: 'x',
    image: null,
    url: 'https://www.coachingthechange.com/blog/no-cover',
  });
  assert.ok(!html.includes('og:image'), 'should omit og:image when there is no cover');
  assert.match(html, /twitter:card" content="summary"/);
  console.log('  ✓ posts without a cover image');
}

async function checkLiveQuery() {
  if (config.projectId === 'REPLACE_WITH_PROJECT_ID') {
    console.log('  … skipped live query (sanity.json has a placeholder projectId)');
    return;
  }

  const posts = await fetchPosts();
  console.log(`  ✓ Sanity reachable, ${posts.length} published post(s)`);

  for (const post of posts) {
    for (const field of ['title', 'slug', 'excerpt']) {
      assert.ok(post[field], `post "${post.slug ?? post.title}" is missing ${field}`);
    }
    assert.match(
      post.slug,
      /^[a-z0-9-]+$/,
      `slug "${post.slug}" has characters that will break the URL`,
    );
  }
  if (posts.length) console.log('  ✓ every post has the fields the site queries');
}

console.log('check-blog:');
checkEscaping();
checkNoImage();
await checkLiveQuery();
console.log('all checks passed');
