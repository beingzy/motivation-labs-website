import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Motivation Labs",
  description:
    "Writing on motivation, AI-native tools, stablecoin operations, and building for the future.",
};

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-2xl">
        <div className="inline-block px-3 py-1 border-2 border-black bg-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Blog
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[0.95]">
          Ideas worth writing down.
        </h1>
        <p className="text-xl text-notion-gray leading-relaxed font-medium mb-16 max-w-xl">
          Writing on AI-native operations, stablecoin finance, motivation
          science, and building tools for people who take their work seriously.
        </p>
        <div className="border-t-2 border-black pt-12">
          <p className="text-notion-gray font-bold uppercase tracking-widest text-sm">
            First posts coming soon.
          </p>
        </div>
      </div>
    </main>
  );
}
