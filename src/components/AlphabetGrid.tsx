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
    // default (non-hover) state — colored but lighter
    defaultBg: string;
    defaultText: string;
    defaultBadgeBg: string;
    defaultBadgeText: string;
    // hover state — full solid color block
    hoverBg: string;
    hoverText: string;
  }
> = {
  E: {
    slug: "me",
    label: "Me",
    comingSoon: true,
    href: "/#me",
    defaultBg: "bg-blue-200",
    defaultText: "text-blue-900",
    defaultBadgeBg: "bg-blue-400",
    defaultBadgeText: "text-blue-900",
    hoverBg: "hover:bg-blue-400",
    hoverText: "hover:text-blue-950",
  },
  K: {
    slug: "kids",
    label: "Kids",
    comingSoon: true,
    href: "/#kids",
    defaultBg: "bg-amber-200",
    defaultText: "text-amber-900",
    defaultBadgeBg: "bg-amber-400",
    defaultBadgeText: "text-amber-900",
    hoverBg: "hover:bg-amber-400",
    hoverText: "hover:text-amber-950",
  },
  M: {
    slug: "money",
    label: "Money",
    comingSoon: false,
    href: "/#money",
    defaultBg: "bg-emerald-200",
    defaultText: "text-emerald-900",
    defaultBadgeBg: "bg-emerald-400",
    defaultBadgeText: "text-emerald-900",
    hoverBg: "hover:bg-emerald-400",
    hoverText: "hover:text-emerald-950",
  },
  T: {
    slug: "team",
    label: "Team",
    comingSoon: true,
    href: "/#team",
    defaultBg: "bg-violet-200",
    defaultText: "text-violet-900",
    defaultBadgeBg: "bg-violet-400",
    defaultBadgeText: "text-violet-900",
    hoverBg: "hover:bg-violet-400",
    hoverText: "hover:text-violet-950",
  },
};

const comingSoonLabels: Record<string, string> = {
  en: "Coming Soon",
  zh: "\u5373\u5C06\u4E0A\u7EBF",
};

const ecosystemLabels: Record<string, string> = {
  en: "The Ecosystem (A-Z)",
  zh: "\u4EA7\u54C1\u77E9\u9635 (A-Z)",
};

interface AlphabetGridProps {
  locale?: "en" | "zh";
}

export default function AlphabetGrid({ locale = "en" }: AlphabetGridProps) {
  const prefix = locale === "zh" ? "/zh" : "";

  return (
    <section className="max-w-6xl mx-auto px-6 py-12" id="products">
      <div className="mb-8 text-xs font-black uppercase tracking-[0.25em] text-notion-gray">
        {ecosystemLabels[locale]}
      </div>
      <div className="grid grid-cols-4 md:grid-cols-8 border-t-[3px] border-l-[3px] border-black">
        {alphabet.map((letter) => {
          const product = activeLetters[letter];

          if (product) {
            const href = prefix
              ? `${prefix}${product.href.startsWith("/#") ? "/" + product.href.slice(1) : product.href}`
              : product.href;

            return (
              <Link
                key={letter}
                href={href}
                className={`matrix-cell active group ${product.defaultBg} ${product.hoverBg} border-r-[3px] border-b-[3px] border-black h-24 md:h-32 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-150`}
                onClick={() =>
                  trackEvent("matrix_click", { letter, product: product.label })
                }
              >
                {/* Letter */}
                <span
                  className={`${product.defaultText} ${product.hoverText} text-3xl font-black group-hover:scale-110 transition-all`}
                >
                  {letter}
                </span>

                {/* Product name */}
                <span
                  className={`absolute bottom-2 text-[9px] font-black ${product.defaultText} ${product.hoverText} tracking-widest uppercase opacity-70 transition-colors`}
                >
                  {product.label}
                </span>

                {/* Coming Soon pill — uses solid badge color for contrast */}
                {product.comingSoon && (
                  <span
                    className={`absolute top-1.5 left-0 right-0 flex justify-center`}
                  >
                    <span
                      className={`px-2 py-0.5 ${product.defaultBadgeBg} group-hover:bg-black/20 ${product.defaultBadgeText} group-hover:text-black/60 text-[7px] font-black uppercase tracking-wider border border-black/20 transition-all`}
                    >
                      {comingSoonLabels[locale]}
                    </span>
                  </span>
                )}

                {/* Live dot — Money only */}
                {!product.comingSoon && (
                  <span className="absolute top-2 right-2 live-dot w-2 h-2 rounded-full bg-emerald-600" />
                )}
              </Link>
            );
          }

          // Inactive — grayed out
          return (
            <div
              key={letter}
              className="matrix-cell border-r-[3px] border-b-[3px] border-black h-24 md:h-32 flex items-center justify-center text-black/15 text-xl font-bold bg-white"
            >
              {letter}
            </div>
          );
        })}
        {/* Filler */}
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
