"use client";

import Link from "next/link";
import { trackEvent } from "./GoogleAnalytics";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const activeLetters: Record<
  string,
  {
    slug: string;
    label: string;
    comingSoon: boolean;
    href: string;          // always links to homepage section
    hoverBg: string;
    hoverText: string;
  }
> = {
  K: {
    slug: "kids",
    label: "Kids",
    comingSoon: true,
    href: "/#kids",
    hoverBg: "hover:bg-amber-400",
    hoverText: "hover:text-amber-900",
  },
  M: {
    slug: "me",
    label: "Me",
    comingSoon: true,
    href: "/#me",
    hoverBg: "hover:bg-blue-400",
    hoverText: "hover:text-blue-900",
  },
  P: {
    slug: "pay",
    label: "Pay",
    comingSoon: false,
    href: "/#pay",
    hoverBg: "hover:bg-emerald-400",
    hoverText: "hover:text-emerald-900",
  },
  T: {
    slug: "team",
    label: "Team",
    comingSoon: true,
    href: "/#team",
    hoverBg: "hover:bg-violet-400",
    hoverText: "hover:text-violet-900",
  },
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
                className={`matrix-cell active group bg-black ${product.hoverBg} border-r-[3px] border-b-[3px] border-black h-24 md:h-32 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-150`}
                onClick={() =>
                  trackEvent("matrix_click", {
                    letter,
                    product: product.label,
                  })
                }
              >
                {/* Letter */}
                <span
                  className={`text-white ${product.hoverText} text-3xl font-black group-hover:scale-110 transition-all`}
                >
                  {letter}
                </span>

                {/* Product label */}
                <span
                  className={`absolute bottom-2 text-[9px] font-black text-white/70 ${product.hoverText} tracking-widest uppercase transition-colors`}
                >
                  {product.label}
                </span>

                {/* Live dot (Pay only) */}
                {!product.comingSoon && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400 group-hover:bg-emerald-700 transition-colors" />
                )}

                {/* Coming Soon badge — prominent pill */}
                {product.comingSoon && (
                  <span className="absolute top-2 right-0 left-0 flex justify-center">
                    <span className="px-1.5 py-0.5 bg-white/15 group-hover:bg-black/20 border border-white/30 group-hover:border-black/30 text-white group-hover:text-black/60 text-[7px] font-black uppercase tracking-wider rounded-sm transition-all">
                      Coming Soon
                    </span>
                  </span>
                )}
              </Link>
            );
          }

          // Inactive cells — grayed out
          return (
            <div
              key={letter}
              className="matrix-cell border-r-[3px] border-b-[3px] border-black h-24 md:h-32 flex items-center justify-center text-black/15 text-xl font-bold bg-white"
            >
              {letter}
            </div>
          );
        })}
        {/* Filler cells */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`filler-${i}`}
            className="hidden md:flex matrix-cell border-r-[3px] border-b-[3px] border-black h-24 md:h-32 bg-white"
          />
        ))}
      </div>
    </section>
  );
}
