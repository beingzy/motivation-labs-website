import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProduct } from "@/lib/products";
import { productJsonLd } from "@/lib/structured-data";

const product = getProduct("pay")!;

export const metadata: Metadata = {
  title: "Motivation Pay — Stablecoin Payroll for AI-Native Teams",
  description:
    "Run payroll, bonuses, and reimbursements in USDC — with every payment tracked, auditable, and executable in one click. Built for globally distributed, stablecoin-native teams.",
  openGraph: {
    title: "Motivation Pay — Stablecoin Payroll for AI-Native Teams",
    description:
      "Run payroll, bonuses, and reimbursements in USDC — with every payment tracked, auditable, and executable in one click.",
    type: "website",
  },
};

const principles = [
  {
    title: "Stablecoin-First",
    body: "Built for teams already operating on-chain. USDC and USDT are the rails — not an afterthought.",
  },
  {
    title: "Operations Before Optics",
    body: "A transaction hash is not enough. Every payment keeps its reason, approver, and status history.",
  },
  {
    title: "Auditability by Default",
    body: "Every action creates a record — payroll created, confirmed, executed, failed. Nothing disappears.",
  },
  {
    title: "Privacy With Control",
    body: "Sensitive financial data stays controlled. Operators choose what employees see.",
  },
];

export default function PayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />

      {/* ── Hero ── */}
      <section className="bg-[#f2faf5] border-b-2 border-black py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Logo + badge */}
              <div className="flex items-center gap-4 mb-10">
                <Image
                  src="/images/pay/motivation_money_logo.png"
                  alt="Motivation Pay"
                  width={52}
                  height={52}
                  className="object-contain logo-walk"
                />
                <div className="inline-block px-4 py-1.5 rounded-md border-2 border-black bg-emerald-400 text-black text-[11px] font-black uppercase tracking-[0.15em] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  P — Motivation Pay
                </div>
              </div>

              <h1 className="font-hand text-5xl md:text-7xl text-black mb-6 leading-tight max-w-xl">
                Run stablecoin payroll like a pro.
              </h1>
              <p className="text-xl text-black/70 mb-10 font-medium leading-relaxed max-w-lg">
                Pay your global team in USDC. Every payroll run, bonus, and
                reimbursement — tracked, auditable, and executable in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://motivation-pay.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-notion bg-black text-white px-8 py-4 rounded-md font-black hover:bg-black/80 uppercase tracking-wider text-sm text-center"
                >
                  Try Motivation Pay →
                </a>
                <Link
                  href="/"
                  className="btn-notion inline-block bg-white text-black px-8 py-4 rounded-md font-black hover:bg-emerald-50 uppercase tracking-wider text-sm text-center"
                >
                  ← Back
                </Link>
              </div>
            </div>

            {/* Dashboard screenshot */}
            <div className="hidden md:block">
              <div className="screenshot-card">
                <Image
                  src="/images/pay/04-dashboard.png"
                  alt="Motivation Pay Dashboard"
                  width={720}
                  height={480}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="inline-block px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Stablecoin teams outgrew wallets.
              <br />
              They never got proper finance ops.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                avatar: "/images/pay/01_male_short_side_parted_black_hair_open_mouth.png",
                name: "Alex, Founder",
                quote: "We pay 12 people globally in USDC. Every month it's a spreadsheet, 3 wallet apps, and prayer.",
                pain: "No payroll layer",
              },
              {
                avatar: "/images/pay/04_female_long_straight_black_hair_gentle_smile.png",
                name: "Sarah, Finance Lead",
                quote: "Our auditors ask for payment history. I export wallet transactions and try to explain what each one meant.",
                pain: "No audit trail",
              },
              {
                avatar: "/images/pay/07_male_curly_dark_hair_aviator_glasses_open_grin.png",
                name: "Marcus, Ops",
                quote: "I've sent bonuses from three different exchanges. There's no record of why, who approved, or what it was for.",
                pain: "No context attached",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 border-2 border-black bg-gray-50 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                    <Image
                      src={item.avatar}
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
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Walkthrough ── */}
      <section className="py-24 bg-[#f2faf5] border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              From setup to paid — in one tool.
            </h2>
            <p className="text-lg text-notion-gray font-medium">
              Motivation Pay handles the full payment lifecycle, with the
              context your finance team actually needs.
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
                  Your team, fully onboarded.
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  Add teammates with their wallet addresses, role, and contract
                  type. Motivation Pay supports FTEs, contractors, and
                  advisors — each with their own payment preferences and coin
                  settings.
                </p>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Wallet verification with micro-deposit confirmation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Per-employee coin and network preferences
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Role-based access — operators and employees separated
                  </li>
                </ul>
              </div>
              <div className="screenshot-card">
                <Image
                  src="/images/pay/05-team-list.png"
                  alt="Team management in Motivation Pay"
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
                  src="/images/pay/07-payouts-list.png"
                  alt="Payouts list in Motivation Pay"
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
                  Every payment type, one view.
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  Monthly payroll, Q1 bonuses, ad-hoc payments, expense
                  reimbursements — all in a single, clean list. No more
                  hunting across tools to know what got paid and when.
                </p>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Payroll runs with per-employee breakdowns
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Ad-hoc bonuses and one-time payments
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Reimbursements with evidence attachments
                  </li>
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
                  Execute via CEX — with full context.
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  Fund from your Safe multi-sig, route through your exchange,
                  and pay each recipient in a single run.
                </p>
                {/* CEX logos */}
                <div className="flex items-center gap-2 flex-wrap mb-5">
                  <span className="text-xs font-black text-black/40 uppercase tracking-wider">Supported exchanges</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-white text-[10px] font-black uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    OKX
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0052FF] text-white text-[10px] font-black uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] opacity-50">
                    Coinbase <span className="text-[8px] opacity-70">Soon</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F0B90B] text-black text-[10px] font-black uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] opacity-50">
                    Binance <span className="text-[8px] opacity-70">Soon</span>
                  </span>
                </div>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Safe → CEX fund transfer in one proposal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Per-recipient execution with live status tracking
                  </li>
                </ul>
              </div>
              <div className="screenshot-card">
                <Image
                  src="/images/pay/09-run-detail-confirmed.png"
                  alt="Payroll run execution in Motivation Pay"
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
                  src="/images/pay/17-audit-log.png"
                  alt="Audit log in Motivation Pay"
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
                  Every action, on record.
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  A complete, timestamped audit trail — payroll created,
                  confirmed, executed, who did it and when. Your CPA will
                  thank you. Your future self will too.
                </p>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    40+ tracked action types
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Actor, timestamp, and details on every event
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Exportable CSV for finance and compliance
                  </li>
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
            Built on four principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p, i) => (
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
                Roadmap
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-white">
                Pay-in is coming.
              </h2>
              <p className="text-white/70 leading-relaxed font-medium">
                Motivation Pay is expanding from a strong pay-out product
                into a complete financial operating system — collecting client
                revenue in, paying team out, all in one place.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Invoice module for stablecoin client collections",
                "Public payment pages with wallet address and QR code",
                "On-chain payment detection with auto-reconciliation",
                "REST API v1 and MCP server for AI agent access",
                "Additional CEX adapters — Kraken, Bybit",
              ].map((item) => (
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
            Built for teams like yours
          </h2>
          <p className="text-notion-gray font-medium mb-12 max-w-xl">
            If your team operates in stablecoins and needs more than a wallet,
            Motivation Pay was built for you.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                avatar: "/images/pay/05_female_black_bob_round_glasses_heart_mouth.png",
                label: "AI-native startups",
                desc: "Lean teams with global reach, stablecoin treasuries, and agent-assisted workflows.",
              },
              {
                avatar: "/images/pay/02_male_swept_up_dark_hair_furrowed_brows_open_mouth.png",
                label: "Remote-first companies",
                desc: "Distributed employees and contractors across borders who prefer USDC over wire transfers.",
              },
              {
                avatar: "/images/pay/03_male_pompadour_black_hair_half_lidded_eyes_open_mouth.png",
                label: "Finance leads & operators",
                desc: "People who need audit trails and reporting — not just a wallet with a transaction hash.",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex gap-4"
              >
                <div className="w-12 h-12 border-2 border-black bg-gray-50 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
                  <Image
                    src={c.avatar}
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
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 bg-[#f2faf5] border-b-2 border-black text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/pay/motivation_money_logo.png"
              alt="Motivation Pay"
              width={64}
              height={64}
              className="object-contain logo-walk"
            />
          </div>
          <h2 className="font-hand text-4xl md:text-6xl text-black mb-6 leading-tight">
            From &ldquo;we send stablecoins&rdquo; to
            &ldquo;we run financial ops.&rdquo;
          </h2>
          <p className="text-lg text-black/70 mb-10 font-medium">
            Motivation Pay is live and ready to use. No waitlist — get started today.
          </p>
          <a
            href="https://motivation-pay.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-notion inline-block bg-black text-white px-10 py-5 rounded-md font-black text-base uppercase tracking-wider hover:bg-black/80"
          >
            Try Motivation Pay →
          </a>
        </div>
      </section>
    </>
  );
}
