import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import PageLayout from '../components/ui/PageLayout';
import Container from '../components/ui/Container';
import { useQuery } from '../lib/useQuery';
import { postQuery, imageUrl, formatDate, type Post } from '../lib/sanity';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-gray-700 leading-relaxed mb-5">{children}</p>,
    h2: ({ children }) => (
      <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-lora text-xl font-semibold text-gray-900 mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-pastel-green pl-5 my-8 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-5 space-y-2 text-gray-700">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 underline underline-offset-2 hover:text-gray-600"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) =>
      value?.url ? (
        <img
          src={imageUrl(value.url, 1200)}
          alt={value.alt ?? ''}
          loading="lazy"
          className="w-full rounded-xl my-8"
        />
      ) : null,
  },
};

/**
 * ponytail: sets the tab title for people browsing the site. Social scrapers don't
 * run JS and never see this — scripts/prerender-blog.mjs bakes the real og: tags
 * into static HTML at build time for them.
 */
function useDocumentTitle(title: string | undefined) {
  useEffect(() => {
    if (!title) return;
    const previous = document.title;
    document.title = `${title} | Coaching The Change`;
    return () => {
      document.title = previous;
    };
  }, [title]);
}

export default function BlogPost() {
  const { slug = '' } = useParams();
  const { data: post, loading, error } = useQuery<Post | null>(postQuery(slug));

  useDocumentTitle(post?.title);

  const notFound = !loading && !error && !post;

  return (
    <PageLayout>
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <Container size="md">
          <Link to="/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            ← Back to blog
          </Link>

          {loading && <p className="text-center text-gray-500 py-16">Loading…</p>}

          {error && (
            <div className="text-center py-16">
              <p className="text-gray-600 mb-4">We couldn't load this post just now.</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-pastel-green hover:bg-pastel-green/90 text-gray-800 font-medium px-5 py-2 rounded-full text-sm transition-all"
              >
                Try again
              </button>
            </div>
          )}

          {notFound && (
            <div className="text-center py-16">
              <h1 className="font-playfair text-2xl font-bold text-gray-900 mb-3">
                Post not found
              </h1>
              <p className="text-gray-600 mb-6">
                This post may have been moved or removed.
              </p>
              <Link
                to="/blog"
                className="inline-block bg-pastel-green hover:bg-pastel-green/90 text-gray-800 font-medium px-5 py-2 rounded-full text-sm transition-all"
              >
                See all posts
              </Link>
            </div>
          )}

          {post && (
            <>
              <header className="mt-6 mb-10">
                <time dateTime={post.publishedAt} className="text-sm text-gray-500">
                  {formatDate(post.publishedAt)}
                </time>
                <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
                  {post.title}
                </h1>
              </header>

              {post.coverImage && (
                <img
                  src={imageUrl(post.coverImage, 1200)}
                  alt={post.coverAlt ?? ''}
                  className="w-full rounded-2xl mb-12"
                />
              )}

              <div className="font-lato text-base sm:text-lg">
                <PortableText value={post.body} components={components} />
              </div>
            </>
          )}
        </Container>
      </article>
    </PageLayout>
  );
}
