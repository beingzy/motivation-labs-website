import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AlphabetGrid from "@/components/AlphabetGrid";
import ScreenshotStack from "@/components/ScreenshotStack";
import CexBadge from "@/components/CexBadge";
import { zh } from "@/i18n";

export const metadata: Metadata = {
  title: "Motivation Labs | AI原生软件工作室 — 稳定币薪资、习惯养成与团队运营",
  description:
    "Motivation Labs 打造面向认真团队和个人的AI原生工具。稳定币薪资发放（Motivation Money）、习惯养成（Motivate Me）、儿童思维训练（Motivate Kids）和团队运营系统（Motivation Team）。",
  alternates: {
    canonical: "/zh",
    languages: { en: "/", zh: "/zh" },
  },
  openGraph: {
    title: "Motivation Labs | AI原生软件工作室",
    description:
      "为认真团队打造AI原生工具：稳定币薪资发放、习惯养成、儿童教育和团队运营。",
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Motivation Labs" }],
  },
  keywords: [
    "稳定币薪资",
    "加密货币工资",
    "USDC支付",
    "AI原生软件",
    "全球团队支付",
    "自托管国库",
    "motivation labs",
  ],
};

const d = zh.home;

export default function ZhHome() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b-2 border-black bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-36">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-black bg-emerald-400 text-black text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="live-dot w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                {d.badge}
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 md:mb-8 leading-[0.88]">
                Motivation
                <br />
                Labs.
              </h1>
              <p className="text-lg md:text-xl text-black/70 max-w-lg leading-relaxed font-medium mb-8 md:mb-10">
                {d.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Link
                  href="/zh/money"
                  className="btn-notion bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-md font-black hover:bg-black/80 uppercase tracking-wider text-sm"
                >
                  {d.cta1}
                </Link>
                <a
                  href="#products"
                  className="btn-notion inline-block bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-md font-black hover:bg-gray-50 uppercase tracking-wider text-sm border-2 border-black"
                >
                  {d.cta2}
                </a>
              </div>
            </div>

            {/* Stats panel */}
            <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white p-6 md:p-8">
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-black/40 mb-4 md:mb-6">
                {d.statsLabel}
              </div>
              <div className="grid grid-cols-2 gap-4 md:hidden">
                {d.statsMobile.map((stat) => (
                  <div key={stat.label} className="border border-black/10 p-3">
                    <div className="text-2xl font-black tracking-tighter">{stat.num}</div>
                    <div className="text-xs font-medium text-notion-gray">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="hidden md:block space-y-6">
                {d.statsDesktop.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline gap-4 border-b border-black/10 pb-5 last:border-0 last:pb-0"
                  >
                    <span className="text-4xl font-black tracking-tighter">{stat.num}</span>
                    <span className="text-sm font-medium text-notion-gray">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── A-Z Product Grid ── */}
      <AlphabetGrid locale="zh" />

      {/* ── Featured: Motivation Money ── */}
      <section
        className="py-20 md:py-32 border-t-2 border-black bg-[#f2faf5]"
        id="money"
        aria-label="Motivation Money"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6 md:mb-8 flex-wrap">
                <Image
                  src="/images/money/motivation_money_logo.png"
                  alt="Motivation Money"
                  width={36}
                  height={36}
                  className="object-contain logo-walk"
                />
                <div className="inline-block px-4 py-1.5 rounded-md border-2 border-black bg-emerald-400 text-black text-[11px] font-black uppercase tracking-[0.15em] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  {d.moneyBadge}
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-md border-2 border-black bg-black text-white text-[10px] font-black uppercase tracking-wider">
                  <span className="live-dot w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  {zh.nav.live}
                </span>
              </div>
              <h2 className="font-hand text-4xl md:text-6xl text-black mb-4 md:mb-6 leading-tight">
                {d.moneyHeading}
              </h2>
              <p className="text-base md:text-lg text-black/80 mb-6 md:mb-8 font-medium leading-relaxed">
                {d.moneyDesc}
              </p>
              <ul className="space-y-3 mb-8 md:mb-10">
                <li className="flex items-start gap-3 text-sm md:text-base font-medium">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  {d.moneyBullets[0]}
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base font-medium">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="flex items-center gap-1.5 flex-wrap">
                    {d.moneyBullets[1]}
                    <CexBadge name="OKX" />
                    <CexBadge name="Kraken" />
                    <CexBadge name="Coinbase" comingSoon />
                    <CexBadge name="Binance" comingSoon />
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base font-medium">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  {d.moneyBullets[2]}
                </li>
              </ul>
              <Link
                href="/zh/money"
                className="btn-notion inline-block bg-black text-white px-7 md:px-8 py-3 md:py-4 rounded-md font-black hover:bg-black/80 uppercase tracking-wider text-sm"
              >
                {d.moneyCta}
              </Link>
            </div>

            <div className="pt-4 pb-12 md:pb-10">
              <ScreenshotStack />
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Thesis ── */}
      <section className="py-16 md:py-24 bg-white border-t-2 border-black border-b-2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            <div className="md:col-span-1">
              <div className="inline-block px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] mb-4 md:mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {d.thesisLabel}
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                {d.thesisHeading}
              </h2>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-6 md:gap-10">
              {d.thesisItems.map((item) => (
                <div key={item.title}>
                  <h3 className="font-black mb-2 text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm text-notion-gray font-medium leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Coming Soon ── */}
      <section className="py-16 md:py-24 bg-black" id="coming-soon">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block px-3 py-1 border border-white/30 text-white/60 text-[10px] font-black uppercase tracking-wider mb-6 md:mb-8">
            {d.whatsNext}
          </div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white mb-10 md:mb-16">
            {d.comingSoonHeading}
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {d.comingSoonProducts.map((product) => {
              const colorMap: Record<string, string> = {
                K: "bg-amber-400",
                E: "bg-blue-400",
                T: "bg-violet-400",
              };
              const hrefMap: Record<string, string> = {
                K: "/zh/kids",
                E: "/zh/me",
                T: "/zh/team",
              };
              return (
                <Link
                  key={product.letter}
                  href={hrefMap[product.letter]}
                  className="block border border-white/10 bg-white/5 p-5 md:p-6 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 ${colorMap[product.letter]} text-black text-[10px] font-black uppercase tracking-wider border-2 border-white/20`}
                    >
                      {product.letter} — {product.name.split(" ").pop()}
                    </div>
                    <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">
                      {zh.nav.soon}
                    </span>
                  </div>
                  <h3 className="font-hand text-xl md:text-2xl text-white mb-2 md:mb-3 leading-tight">
                    {product.tagline}
                  </h3>
                  <p className="text-xs md:text-sm text-white/50 font-medium leading-relaxed mb-4 md:mb-6">
                    {product.desc}
                  </p>
                  <span className="text-[10px] font-black text-white/30 group-hover:text-white/60 uppercase tracking-widest transition-colors">
                    {d.learnMore}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
