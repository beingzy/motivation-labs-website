import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CexBadge from "@/components/CexBadge";
import { zh } from "@/i18n";

const d = zh.money;

export const metadata: Metadata = {
  title: "Motivation Money — 稳定币薪资发放与加密货币支付运营平台",
  description:
    "全球团队稳定币薪资软件。Safe自托管资金库，通过CEX路由的USDC/USDT隐私支付，完整审计追踪。API优先设计——为AI智能体和人类而建。免费开始使用。",
  alternates: {
    canonical: "/zh/money",
    languages: { en: "/money", zh: "/zh/money" },
  },
  openGraph: {
    title: "Motivation Money — 稳定币薪资发放与加密货币支付运营平台",
    description:
      "用USDC/USDT给全球团队发工资。自托管资金库、CEX路由隐私支付、完整审计追踪。支持AI智能体自动化。",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/og/money-zh.png", width: 1200, height: 630, alt: "Motivation Money" }],
  },
};

export default function ZhMoneyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#f2faf5] border-b-2 border-black py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <Image
                  src="/images/money/motivation_money_logo.png"
                  alt="Motivation Money"
                  width={52}
                  height={52}
                  className="object-contain logo-walk"
                />
                <div className="inline-block px-4 py-1.5 rounded-md border-2 border-black bg-emerald-400 text-black text-[11px] font-black uppercase tracking-[0.15em] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  M — Motivation Money
                </div>
              </div>

              <h1 className="font-hand text-5xl md:text-7xl text-black mb-6 leading-tight max-w-xl">
                {d.heroH1}
              </h1>
              <p className="text-xl text-black/70 mb-10 font-medium leading-relaxed max-w-lg">
                {d.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://motivation-pay.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-notion bg-black text-white px-8 py-4 rounded-md font-black hover:bg-black/80 uppercase tracking-wider text-sm text-center"
                >
                  {d.heroCta}
                </a>
                <Link
                  href="/zh"
                  className="btn-notion inline-block bg-white text-black px-8 py-4 rounded-md font-black hover:bg-emerald-50 uppercase tracking-wider text-sm text-center"
                >
                  {d.heroBack}
                </Link>
              </div>
            </div>

            <div className="screenshot-card">
              <Image
                src="/images/money/04-dashboard.png"
                alt="Motivation Money Dashboard"
                width={720}
                height={480}
                className="w-full h-auto block"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="inline-block px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {d.problemLabel}
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight whitespace-pre-line">
              {d.problemHeading}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {d.problemPersonas.map((item, i) => {
              const avatars = [
                "/images/money/01_male_short_side_parted_black_hair_open_mouth.png",
                "/images/money/04_female_long_straight_black_hair_gentle_smile.png",
                "/images/money/07_male_curly_dark_hair_aviator_glasses_open_grin.png",
              ];
              return (
                <div
                  key={item.name}
                  className="quote-card p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="quote-avatar w-12 h-12 border-2 border-black bg-gray-50 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                      <Image
                        src={avatars[i]}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-black text-sm">{item.name}</div>
                      <div className="text-[10px] font-black uppercase tracking-wider text-black/30">
                        {item.pain}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-notion-gray font-medium leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Product Walkthrough ── */}
      <section className="py-24 bg-[#f2faf5] border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              {d.walkthroughHeading}
            </h2>
            <p className="text-lg text-notion-gray font-medium">
              {d.walkthroughSubtitle}
            </p>
          </div>

          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
                  01
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">
                  {d.step1Heading}
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  {d.step1Desc}
                </p>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  {d.step1Bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="screenshot-card">
                <Image
                  src="/images/money/05-team-list.png"
                  alt="Team management in Motivation Money"
                  width={720}
                  height={480}
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 screenshot-card">
                <Image
                  src="/images/money/07-payouts-list.png"
                  alt="Payouts list in Motivation Money"
                  width={720}
                  height={480}
                  className="w-full h-auto block"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
                  02
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">
                  {d.step2Heading}
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  {d.step2Desc}
                </p>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  {d.step2Bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
                  03
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">
                  {d.step3Heading}
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  {d.step3Desc}
                </p>
                <div className="flex items-center gap-2 flex-wrap mb-5">
                  <span className="text-xs font-black text-black/40 uppercase tracking-wider">{d.supportedExchanges}</span>
                  <CexBadge name="OKX" size="md" />
                  <CexBadge name="Coinbase" size="md" comingSoon />
                  <CexBadge name="Binance" size="md" comingSoon />
                </div>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  {d.step3Bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="screenshot-card">
                <Image
                  src="/images/money/09-run-detail-confirmed.png"
                  alt="Payment execution in Motivation Money"
                  width={720}
                  height={480}
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 screenshot-card">
                <Image
                  src="/images/money/17-audit-log.png"
                  alt="Audit log in Motivation Money"
                  width={720}
                  height={480}
                  className="w-full h-auto block"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
                  04
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">
                  {d.step4Heading}
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  {d.step4Desc}
                </p>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  {d.step4Bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-16">
            {d.principlesHeading}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {d.principles.map((p, i) => (
              <div key={p.title} className="space-y-4">
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-black text-lg">{p.title}</h3>
                <p className="text-notion-gray text-sm leading-relaxed font-medium">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block px-3 py-1 border border-white/30 text-white/60 text-[10px] font-black uppercase tracking-wider mb-6">
                {d.roadmapLabel}
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-white">
                {d.roadmapHeading}
              </h2>
              <p className="text-white/70 leading-relaxed font-medium">
                {d.roadmapDesc}
              </p>
            </div>
            <ul className="space-y-3">
              {d.roadmapItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-4 border border-white/10 bg-white/5"
                >
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                  <span className="text-sm font-medium text-white/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            {d.whoHeading}
          </h2>
          <p className="text-notion-gray font-medium mb-12 max-w-xl">
            {d.whoSubtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {d.whoPersonas.map((c, i) => {
              const avatars = [
                "/images/money/05_female_black_bob_round_glasses_heart_mouth.png",
                "/images/money/02_male_swept_up_dark_hair_furrowed_brows_open_mouth.png",
                "/images/money/03_male_pompadour_black_hair_half_lidded_eyes_open_mouth.png",
              ];
              return (
                <div
                  key={c.label}
                  className="quote-card p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex gap-4"
                >
                  <div className="quote-avatar w-12 h-12 border-2 border-black bg-gray-50 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
                    <Image
                      src={avatars[i]}
                      alt={c.label}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-black mb-1">{c.label}</h3>
                    <p className="text-notion-gray text-sm font-medium leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-24 bg-[#f2faf5] border-b-2 border-black" id="pricing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="inline-block px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              定价
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              所有功能，每个方案都包含。
              <br />
              唯一的区别是席位数量。
            </h2>
          </div>

          <div className="mb-10 p-4 border-2 border-black bg-emerald-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block">
            <span className="text-sm font-black uppercase tracking-wider">
              Pro 方案免费 3 个月 — 无需信用卡
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Free */}
            <div className="p-6 md:p-8 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-4">
                免费版
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black tracking-tighter">$0</span>
                <span className="text-sm font-bold text-notion-gray">/月</span>
              </div>
              <p className="text-sm text-notion-gray font-medium leading-relaxed mb-6">
                最多 3 名活跃团队成员。与 Pro 版功能完全相同。无需信用卡，无试用期 — 在席位限制内永久免费。
              </p>
              <ul className="space-y-2 text-sm font-medium text-notion-gray">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  完整仪表盘、REST API 和 CLI
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  薪资发放、临时付款、报销
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  审计日志和 CSV 导出
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  自定义邮件品牌
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  Webhooks 和 OpenAPI 规范
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  零平台手续费
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  24 个月账单记录
                </li>
              </ul>
            </div>

            {/* Pro */}
            <div className="p-6 md:p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-wider">
                最受欢迎
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-4">
                Pro
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="price-struck text-3xl font-black tracking-tighter text-black/40">$1.99</span>
                <span className="text-5xl font-black tracking-tighter">$0</span>
                <span className="text-sm font-bold text-notion-gray">/成员/月</span>
              </div>
              <p className="text-xs font-bold mb-6">
                <span className="text-emerald-600">前 3 个月免费。</span>
                之后 $1.99/成员/月，前 3 名成员始终免费。
              </p>
              <p className="text-sm text-notion-gray font-medium leading-relaxed mb-6">
                取消席位限制，成本线性增长，助力团队指数级扩张。自助管理账单。
              </p>
              <ul className="space-y-2 text-sm font-medium text-notion-gray mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  包含免费版所有功能
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  无限团队成员
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  永久账单记录
                </li>
              </ul>

              <div className="border-t-2 border-black pt-6">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-3">
                  附加服务
                </div>
                <div className="p-4 border-2 border-dashed border-black/30 bg-emerald-50">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xl font-black tracking-tight">$99</span>
                    <span className="text-xs font-bold text-notion-gray">/月</span>
                  </div>
                  <h4 className="font-black text-sm mb-2">专属基础设施</h4>
                  <ul className="space-y-1.5 text-xs font-medium text-notion-gray">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                      静态出站 IP，用于 CEX API 白名单
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                      隔离的计算和数据库资源
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                      专属 VPS — 无共享租户
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-notion-gray font-medium">
              无交易手续费。唯一的可变成本是交易所的提现费用（通常 $1–$10）。{" "}
              <Link
                href="https://docs.motivationlabs.ai/zh/money/pricing"
                className="underline decoration-2 hover:text-black"
              >
                查看完整定价详情 →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 bg-white border-b-2 border-black text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/money/motivation_money_logo.png"
              alt="Motivation Money"
              width={64}
              height={64}
              className="object-contain logo-walk"
            />
          </div>
          <h2 className="font-hand text-4xl md:text-5xl text-black mb-6 leading-tight">
            {d.ctaHeading}
          </h2>
          <p className="text-lg text-black/70 mb-10 font-medium">
            {d.ctaSubtitle}
          </p>
          <a
            href="https://motivation-pay.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-notion inline-block bg-black text-white px-10 py-5 rounded-md font-black text-base uppercase tracking-wider hover:bg-black/80"
          >
            {d.ctaButton}
          </a>
        </div>
      </section>
    </>
  );
}
