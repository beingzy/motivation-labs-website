import type { Metadata } from "next";
import Link from "next/link";
import { getProduct } from "@/lib/products";
import { productJsonLd } from "@/lib/structured-data";

const product = getProduct("me")!;

export const metadata: Metadata = {
  title: "Motivate Me — Habit Formation Through Social Accountability",
  description: product.description,
  openGraph: {
    title: "Motivate Me — Habit Formation Through Social Accountability",
    description: product.description,
    type: "website",
  },
};

export default function MePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />

      {/* Hero */}
      <section className="bg-blue-200 py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.15em] mb-6">
            E — Motivate Me
          </div>
          <h1 className="font-hand text-5xl md:text-7xl text-blue-900 mb-8 leading-tight max-w-3xl">
            Commitment through community.
          </h1>
          <p className="text-xl md:text-2xl text-blue-800/80 mb-12 font-medium leading-relaxed max-w-2xl">
            {product.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-950 transition-all transform hover:-translate-y-1 shadow-lg">
              Download App
            </button>
            <Link
              href="/#me"
              className="px-8 py-4 rounded-xl font-bold border-2 border-blue-900/20 text-blue-900 hover:border-blue-900/40 transition-all text-center"
            >
              Back to Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <article className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-bold">Public Commitments</h3>
              <p className="text-notion-gray leading-relaxed">
                Declare your goals to a small circle of trusted friends.
                Research shows public commitment dramatically increases
                follow-through.
              </p>
            </article>
            <article className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                👀
              </div>
              <h3 className="text-xl font-bold">Social Accountability</h3>
              <p className="text-notion-gray leading-relaxed">
                Your friends see your streaks — and your breaks. Gentle
                visibility creates just enough social pressure to keep you
                going.
              </p>
            </article>
            <article className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                🔥
              </div>
              <h3 className="text-xl font-bold">Streak & Momentum</h3>
              <p className="text-notion-gray leading-relaxed">
                Visual streak tracking that makes consistency tangible. See your
                daily effort compound into real, undeniable progress.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
              Your habits, witnessed by the people who matter
            </h2>
            <p className="text-lg text-notion-gray leading-relaxed mb-8">
              Motivate Me is not another habit tracker you ignore. It&apos;s a
              social contract — a small group of friends who see your effort and
              cheer you on.
            </p>
            <ul className="space-y-4 text-notion-gray">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                Invite up to 5 accountability partners
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                Daily check-ins take under 30 seconds
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                Works for fitness, reading, learning, side projects — anything
              </li>
            </ul>
          </div>
          <div className="bg-blue-100 aspect-square rounded-3xl flex items-center justify-center p-8 shadow-inner">
            <div className="w-full h-full border-8 border-white shadow-2xl rounded-2xl bg-white overflow-hidden flex flex-col">
              <div className="h-14 bg-blue-500 flex items-center justify-between px-6">
                <div className="w-4 h-4 rounded-full bg-white/40" />
                <div className="flex space-x-1">
                  <div className="w-6 h-6 rounded-full bg-white/20 border border-white/40" />
                  <div className="w-6 h-6 rounded-full bg-white/20 border border-white/40" />
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="h-5 bg-gray-100 rounded-full w-3/4" />
                <div className="h-5 bg-gray-100 rounded-full w-1/2" />
                <div className="flex items-center space-x-2 pt-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                    3 friends watching
                  </span>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  <div className="aspect-square bg-blue-500 rounded-md" />
                  <div className="aspect-square bg-blue-500 rounded-md" />
                  <div className="aspect-square bg-blue-500 rounded-md" />
                  <div className="aspect-square bg-blue-500 rounded-md" />
                  <div className="aspect-square bg-blue-500 rounded-md" />
                  <div className="aspect-square bg-blue-200 rounded-md" />
                  <div className="aspect-square bg-blue-100 rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-200 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-hand text-4xl md:text-5xl text-blue-900 mb-6">
            Stop breaking promises to yourself.
          </h2>
          <p className="text-lg text-blue-800/80 mb-10 font-medium">
            Join a growing community of people who keep commitments — together.
          </p>
          <button className="bg-blue-900 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-950 transition-all transform hover:-translate-y-1 shadow-lg">
            Download the App
          </button>
        </div>
      </section>
    </>
  );
}
