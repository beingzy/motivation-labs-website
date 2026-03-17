import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Motivation Labs",
  description:
    "Writing on stablecoin payroll, AI-native operations, crypto payment privacy, and building tools for global teams.",
  alternates: {
    canonical: "/blog",
    languages: { en: "/blog", zh: "/zh/blog" },
  },
};

export default function BlogPage() {
  const posts = getAllPosts("en");

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-3xl">
        <div className="inline-block px-3 py-1 border-2 border-black bg-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Blog
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[0.95]">
          Ideas worth writing down.
        </h1>
        <p className="text-xl text-notion-gray leading-relaxed font-medium mb-16 max-w-xl">
          Writing on stablecoin payroll, AI-native operations, and building
          tools for people who take their work seriously.
        </p>
        <div className="border-t-2 border-black pt-12 space-y-8">
          {posts.length === 0 ? (
            <p className="text-notion-gray font-bold uppercase tracking-widest text-sm">
              First posts coming soon.
            </p>
          ) : (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 border border-black/20 text-[9px] font-black uppercase tracking-wider text-black/50"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-[10px] font-bold text-black/30">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-black tracking-tight mb-2 group-hover:underline decoration-2">
                  {post.title}
                </h2>
                <p className="text-sm text-notion-gray font-medium leading-relaxed">
                  {post.description}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
