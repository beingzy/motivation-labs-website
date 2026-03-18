import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n";

function prefixHref(href: string, locale: "en" | "zh"): string {
  if (locale !== "zh") return href;
  if (href.startsWith("http")) return href;
  if (href === "/") return "/zh";
  return `/zh${href}`;
}

interface FooterProps {
  locale?: "en" | "zh";
  dict?: Dictionary;
}

export default function Footer({ locale = "en", dict }: FooterProps) {
  const f = dict?.footer;

  return (
    <footer className="bg-white border-t-2 border-black" id="contact">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/motivation-labs-logo.png"
                alt="Motivation Labs"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-black text-2xl tracking-tight">
                Motivation Labs
              </span>
            </div>
            <p className="text-black/60 text-sm leading-relaxed font-medium max-w-xs">
              {f?.tagline ??
                "A lean, AI-native software studio building tools for people who take their lives and work seriously."}
            </p>
          </div>

          {/* Products */}
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-5">
              {f?.productsLabel ?? "Products"}
            </div>
            <ul className="space-y-3 text-sm font-black uppercase tracking-wider">
              <li>
                <Link
                  href={prefixHref("/money", locale)}
                  className="hover:underline decoration-2 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  Motivation Money
                  <span className="text-[9px] text-black/30 font-black uppercase tracking-widest">
                    {f?.live ?? "Live"}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={prefixHref("/kids", locale)}
                  className="hover:underline decoration-2 text-black/40 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                  Motivate Kids
                </Link>
              </li>
              <li>
                <Link
                  href={prefixHref("/me", locale)}
                  className="hover:underline decoration-2 text-black/40 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                  Motivate Me
                </Link>
              </li>
              <li>
                <Link
                  href={prefixHref("/team", locale)}
                  className="hover:underline decoration-2 text-black/40 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-violet-400 inline-block" />
                  Motivation Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-5">
              {f?.connectLabel ?? "Connect"}
            </div>
            <ul className="space-y-3 text-sm font-black uppercase tracking-wider">
              <li>
                <Link
                  href="https://x.com/motivationlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline decoration-2"
                >
                  {f?.xTwitter ?? "X / Twitter"}
                </Link>
              </li>
              <li>
                <Link
                  href={prefixHref("/blog", locale)}
                  className="hover:underline decoration-2"
                >
                  {f?.blog ?? "Blog"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-black text-[10px] font-black text-black/40 flex flex-col md:flex-row justify-between items-center uppercase tracking-[0.2em]">
          <span>{f?.copyright ?? "\u00A9 2024\u20132025 Motivation Labs LLC. All rights reserved."}</span>
          {/* "Motivation Labs" is the brand; "Motivation Labs LLC" is the registered legal entity */}
          <span className="mt-4 md:mt-0 font-hand text-2xl lowercase tracking-normal text-black opacity-80">
            {f?.motto ?? "Motivation is what makes it matter."}
          </span>
        </div>
      </div>
    </footer>
  );
}
