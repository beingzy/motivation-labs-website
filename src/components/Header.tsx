"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { trackEvent } from "./GoogleAnalytics";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Dictionary } from "@/i18n";

function prefixHref(href: string, locale: "en" | "zh"): string {
  if (locale !== "zh") return href;
  // External or anchor-only links stay as-is
  if (href.startsWith("http") || href.startsWith("#")) return href;
  // Hash links like /#money → /zh/#money (but only the path part)
  if (href.startsWith("/#")) return `/zh/${href.slice(1)}`;
  // /money → /zh/money
  if (href === "/") return "/zh";
  return `/zh${href}`;
}

const productLinksBase = [
  {
    label: "Motivation Money",
    href: "/money",
    badge: "M",
    badgeColor: "bg-emerald-400",
    statusKey: "live" as const,
  },
  {
    label: "Motivate Kids",
    href: "/#kids",
    badge: "K",
    badgeColor: "bg-amber-400",
    statusKey: "soon" as const,
  },
  {
    label: "Motivate Me",
    href: "/#me",
    badge: "E",
    badgeColor: "bg-blue-400",
    statusKey: "soon" as const,
  },
  {
    label: "Motivation Team",
    href: "/#team",
    badge: "T",
    badgeColor: "bg-violet-400",
    statusKey: "soon" as const,
  },
];

interface HeaderProps {
  locale?: "en" | "zh";
  dict?: Dictionary;
}

export default function Header({ locale = "en", dict }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const nav = dict?.nav;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const homeHref = locale === "zh" ? "/zh" : "/";

  return (
    <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between relative">
      <Link href={homeHref} className="flex items-center space-x-3">
        <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <span className="text-white font-bold text-xl">M</span>
        </div>
        <span className="font-bold text-xl tracking-tight">Motivation Labs</span>
      </Link>

      <nav className="hidden md:flex items-center space-x-8 text-sm font-bold text-notion-gray">
        {/* Products dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            className="hover:text-black transition-colors flex items-center gap-1"
            onClick={() => {
              setProductsOpen(!productsOpen);
              trackEvent("nav_products_click");
            }}
          >
            {nav?.products ?? "Products"}
            <svg
              className={`w-3.5 h-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 9l-7 7-7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
              />
            </svg>
          </button>
          {productsOpen && (
            <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-64 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-2 z-50">
              {productLinksBase.map((p) => (
                <Link
                  key={p.href}
                  href={prefixHref(p.href, locale)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    setProductsOpen(false);
                    trackEvent("nav_product_select", {
                      product: p.label,
                    });
                  }}
                >
                  <span
                    className={`w-7 h-7 ${p.badgeColor} border-2 border-black rounded flex items-center justify-center text-xs font-black text-black`}
                  >
                    {p.badge}
                  </span>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-black">
                      {p.label}
                    </div>
                  </div>
                  {p.statusKey === "soon" && (
                    <span className="text-[9px] font-black text-black/40 uppercase tracking-wider">
                      {nav?.soon ?? "Soon"}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href={prefixHref("/blog", locale)}
          className="hover:text-black transition-colors"
        >
          {nav?.blog ?? "Blog"}
        </Link>

        <Link
          href={locale === "zh" ? "https://docs.motivationlabs.ai/zh/money" : "https://docs.motivationlabs.ai"}
          className="hover:text-black transition-colors"
        >
          {nav?.docs ?? "Docs"}
        </Link>

        <Link
          href={prefixHref("/#contact", locale)}
          className="hover:text-black transition-colors"
        >
          {nav?.contact ?? "Contact"}
        </Link>

        <LanguageSwitcher locale={locale} />
      </nav>

      {/* Mobile menu */}
      <div className="md:hidden flex items-center gap-3">
        <LanguageSwitcher locale={locale} />
        <button
          className="p-2 border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 6h16M4 12h16m-7 6h7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b-2 border-black p-6 md:hidden z-50">
          <nav className="flex flex-col space-y-2 text-sm font-bold">
            <div className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-2">
              {nav?.mobileProducts ?? "Products"}
            </div>
            {productLinksBase.map((p) => (
              <Link
                key={p.href}
                href={prefixHref(p.href, locale)}
                className="flex items-center gap-3 py-2 hover:text-black text-notion-gray"
                onClick={() => setMenuOpen(false)}
              >
                <span
                  className={`w-6 h-6 ${p.badgeColor} border-2 border-black rounded flex items-center justify-center text-[10px] font-black`}
                >
                  {p.badge}
                </span>
                {p.label}
                {p.statusKey === "soon" && (
                  <span className="text-[9px] font-black text-black/40 uppercase">
                    {nav?.soon ?? "Soon"}
                  </span>
                )}
              </Link>
            ))}
            <div className="border-t-2 border-black pt-4 mt-4 space-y-3">
              <Link
                href={prefixHref("/blog", locale)}
                className="block hover:text-black text-notion-gray"
                onClick={() => setMenuOpen(false)}
              >
                {nav?.blog ?? "Blog"}
              </Link>
              <Link
                href={locale === "zh" ? "https://docs.motivationlabs.ai/zh/money" : "https://docs.motivationlabs.ai"}
                className="block hover:text-black text-notion-gray"
                onClick={() => setMenuOpen(false)}
              >
                {nav?.docs ?? "Docs"}
              </Link>
              <Link
                href={prefixHref("/#contact", locale)}
                className="block hover:text-black text-notion-gray"
                onClick={() => setMenuOpen(false)}
              >
                {nav?.contact ?? "Contact"}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
