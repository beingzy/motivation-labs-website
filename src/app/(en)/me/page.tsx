import type { Metadata } from "next";
import Link from "next/link";
import { getProduct } from "@/lib/products";
import { productJsonLd } from "@/lib/structured-data";
import WaitlistForm from "@/components/WaitlistForm";

const product = getProduct("me")!;

export const metadata: Metadata = {
  title: "Motivate Me — Habit Formation Through Social Accountability",
  description: product.description,
  alternates: {
    canonical: "/me",
    languages: { en: "/me", zh: "/zh/me" },
  },
  openGraph: {
    title: "Motivate Me — Habit Formation Through Social Accountability",
    description: product.description,
    type: "website",
    images: [{ url: "/og/me.png", width: 1200, height: 630, alt: "Motivate Me" }],
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
      <section className="bg-blue-50 border-b-2 border-black py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <div className="inline-block px-4 py-1.5 rounded-md border-2 border-black bg-blue-400 text-black text-[11px] font-black uppercase tracking-[0.15em] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              E — Motivate Me
            </div>
            <div className="inline-block px-3 py-1 rounded-md border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider text-black/50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Coming Soon
            </div>
          </div>
          <h1 className="font-hand text-5xl md:text-7xl text-black mb-6 leading-tight max-w-3xl">
            Commitment through community.
          </h1>
          <p className="text-lg md:text-2xl text-black/70 mb-10 font-medium leading-relaxed max-w-2xl">
            {product.description}
          </p>
          <Link
            href="/"
            className="btn-notion inline-block bg-white text-black px-8 py-4 rounded-md font-black hover:bg-blue-100 uppercase tracking-wider text-sm"
          >
            ← Back to Motivation Labs
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-24 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            How It Works
          </div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-12 md:mb-16">
            Three forces that keep you going.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Public Commitments",
                desc: "Declare your goals to a small circle of trusted friends. Research shows public commitment dramatically increases follow-through.",
              },
              {
                step: "02",
                title: "Social Accountability",
                desc: "Your friends see your streaks — and your breaks. Gentle visibility creates just enough social pressure to keep you going.",
              },
              {
                step: "03",
                title: "Streak & Momentum",
                desc: "Visual streak tracking that makes consistency tangible. See your daily effort compound into real, undeniable progress.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white"
              >
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-5">
                  {item.step}
                </div>
                <h3 className="font-black text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-notion-gray font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-20 md:py-24 bg-blue-50 border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-6">
                Your habits, witnessed by the people who matter
              </h2>
              <p className="text-base md:text-lg text-black/70 font-medium leading-relaxed mb-8">
                Motivate Me is not another habit tracker you ignore. It&apos;s a
                social contract — a small group of friends who see your effort and
                cheer you on.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm md:text-base font-medium">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  Invite up to 5 accountability partners
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base font-medium">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  Daily check-ins take under 30 seconds
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base font-medium">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  Works for fitness, reading, learning, side projects — anything
                </li>
              </ul>
            </div>
            <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white p-6 md:p-8">
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-black/40 mb-6">
                App Preview
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 border border-black/10">
                  <span className="live-dot w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-xs font-black text-blue-600 uppercase tracking-widest">
                    3 friends watching
                  </span>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {[true, true, true, true, true, false, false].map((done, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-sm border-2 ${
                        done
                          ? "bg-blue-500 border-blue-600"
                          : "bg-blue-100 border-blue-200"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-black/30 pt-2">
                  5-day streak
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white text-center border-b-2 border-black">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-hand text-4xl md:text-6xl text-black mb-6 leading-tight">
            Stop breaking promises to yourself.
          </h2>
          <p className="text-base md:text-lg text-black/70 mb-10 font-medium">
            Join a growing community of people who keep commitments — together.
          </p>
          <WaitlistForm product="Motivate Me" accentClass="bg-blue-500" />
        </div>
      </section>
    </>
  );
}
