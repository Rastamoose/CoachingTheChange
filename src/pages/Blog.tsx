import { Link } from 'react-router-dom';
import PageLayout from '../components/ui/PageLayout';
import Container from '../components/ui/Container';
import { useQuery } from '../lib/useQuery';
import { POSTS_QUERY, imageUrl, formatDate, type PostSummary } from '../lib/sanity';

function PostCard({ post }: { post: PostSummary }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    >
      {post.coverImage && (
        <div className="aspect-[16/9] overflow-hidden bg-gray-100">
          <img
            src={imageUrl(post.coverImage, 800)}
            alt={post.coverAlt ?? ''}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 p-6">
        <time dateTime={post.publishedAt} className="text-xs text-gray-500 mb-2">
          {formatDate(post.publishedAt)}
        </time>
        <h2 className="font-lora text-xl font-semibold text-gray-900 mb-3 leading-snug">
          {post.title}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{post.excerpt}</p>
        <span className="mt-4 text-sm font-medium text-gray-800 group-hover:text-gray-900">
          Read more →
        </span>
      </div>
    </Link>
  );
}

function Message({ children }: { children: React.ReactNode }) {
  return <p className="text-center text-gray-500 py-16">{children}</p>;
}

export default function Blog() {
  const { data: posts, loading, error } = useQuery<PostSummary[]>(POSTS_QUERY);

  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <Container>
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Blog
          </h1>
          <p className="text-gray-600 text-center leading-relaxed mb-12 max-w-2xl mx-auto">
            Reflections, tools, and practical guidance on health, wellbeing, and lasting change.
          </p>

          {loading && <Message>Loading posts…</Message>}

          {error && (
            <div className="text-center py-16">
              <p className="text-gray-600 mb-4">We couldn't load the blog just now.</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-pastel-green hover:bg-pastel-green/90 text-gray-800 font-medium px-5 py-2 rounded-full text-sm transition-all"
              >
                Try again
              </button>
            </div>
          )}

          {posts && posts.length === 0 && (
            <Message>No posts yet — check back soon.</Message>
          )}

          {posts && posts.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </PageLayout>
  );
}
