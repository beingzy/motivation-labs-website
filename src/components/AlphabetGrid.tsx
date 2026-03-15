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
    href: string;
    bg: string;
    bgHover: string;
    text: string;
  }
> = {
  K: {
    slug: "kids",
    label: "Kids",
    comingSoon: true,
    href: "/#kids",
    bg: "bg-amber-300",
    bgHover: "hover:bg-amber-400",
    text: "text-amber-900",
  },
  M: {
    slug: "me",
    label: "Me",
    comingSoon: true,
    href: "/#me",
    bg: "bg-blue-300",
    bgHover: "hover:bg-blue-400",
    text: "text-blue-900",
  },
  P: {
    slug: "pay",
    label: "Pay",
    comingSoon: false,
    href: "/pay",
    bg: "bg-emerald-400",
    bgHover: "hover:bg-emerald-500",
    text: "text-emerald-900",
  },
  T: {
    slug: "team",
    label: "Team",
    comingSoon: true,
    href: "/#team",
    bg: "bg-violet-300",
    bgHover: "hover:bg-violet-400",
    text: "text-violet-900",
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
                className={`matrix-cell active group ${product.bg} ${product.bgHover} border-r-[3px] border-b-[3px] border-black h-24 md:h-32 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-150`}
                onClick={() =>
                  trackEvent("matrix_click", {
                    letter,
                    product: product.label,
                  })
                }
              >
                <span
                  className={`${product.text} text-3xl font-black group-hover:scale-110 transition-transform`}
                >
                  {letter}
                </span>
                <span
                  className={`absolute bottom-2 text-[9px] font-black ${product.text} tracking-widest uppercase opacity-70`}
                >
                  {product.label}
                </span>
                {product.comingSoon ? (
                  <span className={`absolute top-1.5 right-1.5 text-[7px] font-black ${product.text} opacity-40 uppercase tracking-wider`}>
                    Soon
                  </span>
                ) : (
                  /* Live indicator dot */
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-emerald-700 opacity-70" />
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
