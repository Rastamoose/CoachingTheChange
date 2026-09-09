import config from '../../sanity.json';

// ponytail: a GROQ query is just a URL — skipped @sanity/client for these five lines.
// Reads the public CDN endpoint, so no token ships in the bundle and only published posts come back.
const ENDPOINT = `https://${config.projectId}.apicdn.sanity.io/v${config.apiVersion}/data/query/${config.dataset}`;

export async function query<T>(groq: string, signal?: AbortSignal): Promise<T> {
  const res = await fetch(`${ENDPOINT}?query=${encodeURIComponent(groq)}`, { signal });
  if (!res.ok) throw new Error(`Sanity returned ${res.status}`);
  const { result } = await res.json();
  return result as T;
}

// ponytail: skipped @sanity/image-url — Sanity's CDN takes these as plain query params.
// Bump the params here if we ever need art direction beyond width.
export function imageUrl(url: string, width: number): string {
  return `${url}?w=${width}&auto=format&fit=max`;
}

export interface PostSummary {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  coverImage: string | null;
  coverAlt: string | null;
}

export interface Post extends PostSummary {
  body: unknown[];
}

const SUMMARY_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  "coverImage": coverImage.asset->url,
  "coverAlt": coverImage.alt
`;

export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]
  | order(publishedAt desc) {${SUMMARY_FIELDS}}`;

// Images inside the body arrive as asset references — resolve them to URLs here
// so the renderer doesn't have to know how Sanity's asset ids are built.
export const postQuery = (slug: string) =>
  `*[_type == "post" && slug.current == ${JSON.stringify(slug)}][0] {
    ${SUMMARY_FIELDS},
    body[]{..., _type == "image" => {..., "url": asset->url}}
  }`;

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
