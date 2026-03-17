import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getAllSlugs } from "@/lib/blog";
import BlogContent from "@/components/BlogContent";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug, "en");
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
      languages: { en: `/blog/${slug}`, zh: `/zh/blog/${slug}` },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug, "en");
  if (!post) return <div>Post not found</div>;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Motivation Labs",
      url: "https://motivationlabs.ai",
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <Link
          href="/blog"
          className="inline-block text-sm font-bold text-notion-gray hover:text-black mb-8"
        >
          ← All posts
        </Link>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-[0.95] max-w-3xl">
            {post.title}
          </h1>
          <p className="text-lg text-notion-gray font-medium mb-4 max-w-2xl">
            {post.description}
          </p>
          <div className="text-sm text-black/40 font-bold">
            {post.author} · {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </div>
        </div>
        <div className="border-t-2 border-black pt-12">
          <BlogContent source={post.content} />
        </div>
      </main>
    </>
  );
}
