"use client";

import Link from "next/link";
import { trackEvent } from "./GoogleAnalytics";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const activeLetters: Record<
  string,
  { slug: string; label: string; comingSoon: boolean; href: string }
> = {
  K: { slug: "kids", label: "Kids", comingSoon: true, href: "/#kids" },
  M: { slug: "me", label: "Me", comingSoon: true, href: "/#me" },
  P: { slug: "pay", label: "Pay", comingSoon: false, href: "/pay" },
  T: { slug: "team", label: "Team", comingSoon: true, href: "/#team" },
};

export default function AlphabetGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12" id="products">
      <div className="mb-8 text-xs font-black uppercase tracking-[0.25em] text-notion-gray">
        The Ecosystem (A-Z)
      </div>
      <div className="grid grid-cols-4 md:grid-cols-8 border-t-[3px] border-l-[3px] border-black">
        {alphabet.map((letter) => {
          const product = activeLetters[letter];
          if (product) {
            return (
              <Link
                key={letter}
                href={product.href}
                className="matrix-cell active group bg-black border-r-[3px] border-b-[3px] border-black h-24 md:h-32 flex flex-col items-center justify-center relative overflow-hidden"
                onClick={() =>
                  trackEvent("matrix_click", {
                    letter,
                    product: product.label,
                  })
                }
              >
                <span className="text-white text-3xl font-black group-hover:scale-110 transition-transform">
                  {letter}
                </span>
                <span className="absolute bottom-2 text-[9px] font-black text-white tracking-widest uppercase">
                  {product.label}
                </span>
                {product.comingSoon && (
                  <span className="absolute top-1.5 right-1.5 text-[7px] font-black text-white/50 uppercase tracking-wider">
                    Soon
                  </span>
                )}
              </Link>
            );
          }
          return (
            <div
              key={letter}
              className="matrix-cell border-r-[3px] border-b-[3px] border-black h-24 md:h-32 flex items-center justify-center text-notion-gray/30 text-xl font-bold bg-white"
            >
              {letter}
            </div>
          );
        })}
        {/* Filler cells for 8-col alignment */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`filler-${i}`}
            className="hidden md:flex matrix-cell border-r-[3px] border-b-[3px] border-black h-24 md:h-32 bg-gray-50/50"
          />
        ))}
      </div>
    </section>
  );
}
