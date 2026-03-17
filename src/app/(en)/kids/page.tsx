import type { Metadata } from "next";
import Link from "next/link";
import { getProduct } from "@/lib/products";
import { productJsonLd } from "@/lib/structured-data";

const product = getProduct("kids")!;

export const metadata: Metadata = {
  title: "Motivate Kids — Builder's Mindset for Ages 3–10",
  description: product.description,
  alternates: {
    canonical: "/kids",
    languages: { en: "/kids", zh: "/zh/kids" },
  },
  openGraph: {
    title: "Motivate Kids — Builder's Mindset for Ages 3–10",
    description: product.description,
    type: "website",
    images: [{ url: "/og/kids.png", width: 1200, height: 630, alt: "Motivate Kids" }],
  },
};

export default function KidsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
      <section className="bg-[#fffbf0] border-b-2 border-black py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 rounded-md border-2 border-black bg-amber-400 text-black text-[11px] font-black uppercase tracking-[0.15em] mb-8 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            K — Motivate Kids
          </div>
          <div className="inline-block ml-3 px-3 py-1 rounded-md border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider text-black/50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Coming Soon
          </div>
          <h1 className="font-hand text-5xl md:text-8xl text-black mt-8 mb-8 leading-tight max-w-4xl">
            Nurture the builder&apos;s mindset.
          </h1>
          <p className="text-xl md:text-2xl text-black/70 mb-12 font-medium leading-relaxed max-w-2xl">
            {product.description}
          </p>
          <Link
            href="/"
            className="btn-notion inline-block bg-white text-black px-8 py-4 rounded-md font-black hover:bg-amber-50 uppercase tracking-wider text-sm"
          >
            ← Back to Motivation Labs
          </Link>
        </div>
      </section>
    </>
  );
}
