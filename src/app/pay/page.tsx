import type { Metadata } from "next";
import Link from "next/link";
import { getProduct } from "@/lib/products";
import { productJsonLd } from "@/lib/structured-data";
import WaitlistForm from "@/components/WaitlistForm";

const product = getProduct("pay")!;

export const metadata: Metadata = {
  title: "Motivation Pay — Financial Operations for AI-Native Companies",
  description:
    "Collect money in, move money out — and keep the business context attached. The financial operations layer for globally distributed, stablecoin-native teams.",
  openGraph: {
    title: "Motivation Pay — Financial Operations for AI-Native Companies",
    description:
      "Collect money in, move money out — and keep the business context attached.",
    type: "website",
  },
};

const currentCapabilities = [
  "End-to-end payout pipeline from treasury to recipient",
  "Safe multi-sig integration with on-chain transaction tracking",
  "OKX withdrawal pipeline with automated status sync",
  "Payroll runs for recurring team compensation",
  "Ad-hoc payments — bonuses, contractors, one-off obligations",
  "Reimbursements with evidence attachments",
  "Wallet verification via micro-deposit confirmation",
  "Duplicate payroll detection with overlap warning",
  "Encrypted exchange credentials at rest",
  "Configurable notification privacy controls",
  "Full audit log with 40+ action types",
  "Role-based access — operator and employee separation",
  "Multi-entity management",
  "Per-employee stablecoin and network preferences",
  "OpenAPI 3.1 specification",
];

const roadmapItems = [
  "Invoice module for stablecoin client collections",
  "Public payment pages with wallet address and QR code",
  "On-chain payment detection with automatic reconciliation",
  "Recurring billing for retainer and subscription revenue",
  "REST API v1 and MCP server for AI agent access",
  "Coinbase and Binance exchange adapters",
];

const principles = [
  {
    title: "Stablecoin-First",
    body: "Built for teams where stablecoins are the natural operating rail — global, programmable, and agent-compatible from day one.",
  },
  {
    title: "Operations Before Optics",
    body: "A transaction hash is not enough. Every action preserves the reason, owner, approver, evidence, and status progression.",
  },
  {
    title: "Auditability by Default",
    body: "Records are useful not just for the operator today, but for the finance lead, accountant, and CPA who review it later.",
  },
  {
    title: "Privacy With Control",
    body: "Financial operations contain sensitive information. The system reduces unnecessary leakage while maintaining accountability.",
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
          <div className="inline-block px-4 py-1.5 rounded-md border-2 border-black bg-emerald-400 text-black text-[11px] font-black uppercase tracking-[0.15em] mb-8 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            P — Motivation Pay
          </div>
          <h1 className="font-hand text-5xl md:text-8xl text-black mb-8 leading-tight max-w-4xl">
            Financial operations for AI-native companies.
          </h1>
          <p className="text-xl md:text-2xl text-black/70 mb-12 font-medium leading-relaxed max-w-2xl">
            Collect money in, move money out — and keep the business context
            attached. One operational layer for globally distributed,
            stablecoin-native teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#waitlist"
              className="btn-notion bg-black text-white px-8 py-4 rounded-md font-black hover:bg-black/80 uppercase tracking-wider text-sm text-center"
            >
              Join Waitlist
            </a>
            <Link
              href="/#pay"
              className="btn-notion inline-block bg-white text-black px-8 py-4 rounded-md font-black hover:bg-emerald-50 uppercase tracking-wider text-sm text-center"
            >
              Back to Overview
            </Link>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8">
              Most financial tools split your business into disconnected silos.
            </h2>
            <p className="text-lg text-notion-gray leading-relaxed mb-6">
              Traditional payroll handles fiat. Crypto tools handle transfers.
              Invoicing tools handle billing. Accounting reconstructs the story
              after the fact.
            </p>
            <p className="text-lg text-notion-gray leading-relaxed mb-10">
              But operators experience money as one continuous flow — revenue
              expected, revenue received, obligations paid out, and a clean
              trail at the end of the cycle. When those steps live in different
              systems, collections are hard to track, payout execution stays
              manual, payment reasons get lost, and month-end becomes cleanup
              work.
            </p>
            <div className="p-6 border-2 border-black bg-emerald-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-black text-lg text-black leading-snug">
                Motivation Pay is designed to solve that operations gap — not
                just the transfer itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Two Core Jobs ── */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-white">
            Two core jobs. One system.
          </h2>
          <p className="text-white/60 font-medium mb-16 max-w-xl">
            Pay-in and pay-out belong together. When you see both sides in one
            place, you can answer the questions that actually matter.
          </p>
          <div className="grid md:grid-cols-2 gap-0 border-2 border-white">
            {/* Pay-Out — Live */}
            <div className="p-10 border-b-2 md:border-b-0 md:border-r-2 border-white">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-2 py-0.5 bg-emerald-400 text-black text-[10px] font-black uppercase tracking-wider rounded">
                  Live Today
                </span>
              </div>
              <h3 className="text-2xl font-black mb-4">Pay-Out</h3>
              <p className="text-white/70 leading-relaxed mb-8">
                Run global payments for your team — payroll, reimbursements, and
                ad-hoc obligations — with documentation, controls, and an audit
                trail baked in.
              </p>
              <ul className="space-y-2 text-white/70 text-sm font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Payroll runs for recurring compensation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Ad-hoc payments to one or multiple recipients
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Reimbursements with evidence attachments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Safe multi-sig + OKX CEX pipeline
                </li>
              </ul>
            </div>
            {/* Pay-In — Roadmap */}
            <div className="p-10 opacity-80">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-2 py-0.5 border border-white/30 text-white/60 text-[10px] font-black uppercase tracking-wider rounded">
                  Roadmap
                </span>
              </div>
              <h3 className="text-2xl font-black mb-4">Pay-In</h3>
              <p className="text-white/70 leading-relaxed mb-8">
                Collect stablecoin funding from clients in a structured,
                reconcilable way — invoices, payment pages, and recurring billing
                for retainer-based work.
              </p>
              <ul className="space-y-2 text-white/70 text-sm font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                  Stablecoin invoice creation with line items
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                  Public payment pages with QR code
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                  On-chain payment detection and reconciliation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                  Recurring billing for retainer revenue
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What It Is / Is Not ── */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-black tracking-tight mb-8 uppercase">
              What Motivation Pay is
            </h2>
            <ul className="space-y-4">
              {[
                "A financial operations platform",
                "Pay-in and pay-out in one system",
                "Built around documentation, controls, and audit trail",
                "Designed for globally distributed, stablecoin-native teams",
                "CPA-grade reporting support",
                "AI-agent-ready infrastructure",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base font-medium"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tight mb-8 uppercase">
              What it is not
            </h2>
            <ul className="space-y-4">
              {[
                "A fiat on-ramp or fiat off-ramp",
                "A banking-as-a-service layer",
                "A general crypto wallet product",
                "A broad trading platform",
                "A full accounting system replacement",
                "A consumer-facing payments app",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base font-medium text-notion-gray"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-black/20 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-medium text-notion-gray border-l-4 border-black pl-4">
              Motivation Pay starts once your organization is already operating
              in stablecoins. We focus on financial operations, not fiat
              conversion.
            </p>
          </div>
        </div>
      </section>

      {/* ── Current Capabilities ── */}
      <section className="py-24 bg-[#f2faf5] border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Live today
            </h2>
            <span className="px-3 py-1 border-2 border-black bg-emerald-400 text-black text-[10px] font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              In production
            </span>
          </div>
          <p className="text-lg text-notion-gray mb-12 max-w-xl font-medium">
            These are current product capabilities, not roadmap claims.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentCapabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-start gap-3 p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-sm font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Principles ── */}
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
                Motivation Pay is expanding from a strong pay-out product into a
                complete pay-in plus pay-out financial operating system. The
                items below are deliberate product directions — not vague future
                positioning.
              </p>
            </div>
            <ul className="space-y-3">
              {roadmapItems.map((item) => (
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

      {/* ── Ideal Customers ── */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Built for teams like yours
          </h2>
          <p className="text-notion-gray font-medium mb-12 max-w-xl">
            Motivation Pay is especially well suited for operators who need more
            control than a wallet alone can provide.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                label: "AI-native startups",
                desc: "Lean teams with global reach and agent-assisted workflows.",
              },
              {
                label: "Consulting & agency firms",
                desc: "Mixed project-based and recurring client revenue to collect.",
              },
              {
                label: "Remote-first companies",
                desc: "Employees and contractors distributed across borders and banking systems.",
              },
              {
                label: "Safe-based treasury teams",
                desc: "Multi-sig custody with a professional payout layer on top.",
              },
              {
                label: "Finance leads & operators",
                desc: "People who need audit trails and reporting, not just wallets.",
              },
              {
                label: "Agent-forward businesses",
                desc: "Organizations building toward agent-operable financial infrastructure.",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-black mb-2">{c.label}</h3>
                <p className="text-notion-gray text-sm font-medium leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="waitlist" className="py-32 bg-[#f2faf5] border-b-2 border-black text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-hand text-4xl md:text-6xl text-black mb-6 leading-tight">
            Move from &ldquo;we can send stablecoins&rdquo; to &ldquo;we run
            financial operations professionally.&rdquo;
          </h2>
          <p className="text-lg text-black/70 mb-10 font-medium">
            Join the waitlist for early access. Currently piloting with
            AI-native companies.
          </p>
          <WaitlistForm product="Motivation Pay" accentClass="bg-emerald-500" />
        </div>
      </section>
    </>
  );
}
