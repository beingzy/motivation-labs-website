import Link from "next/link";
import AlphabetGrid from "@/components/AlphabetGrid";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationJsonLd(), websiteJsonLd()]),
        }}
      />

      {/* ── Hero ── */}
      <section className="border-b-2 border-black bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-black bg-emerald-400 text-black text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                Motivation Pay is live
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.88]">
                Motivation
                <br />
                Labs.
              </h1>
              <p className="text-xl text-black/70 max-w-lg leading-relaxed font-medium mb-10">
                A lean, AI-native software studio building tools for people who
                take their lives and work seriously — and for the AI agents that
                work alongside them.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/pay"
                  className="btn-notion bg-black text-white px-8 py-4 rounded-md font-black hover:bg-black/80 uppercase tracking-wider text-sm"
                >
                  See Motivation Pay →
                </Link>
                <a
                  href="#products"
                  className="btn-notion inline-block bg-white text-black px-8 py-4 rounded-md font-black hover:bg-gray-50 uppercase tracking-wider text-sm border-2 border-black"
                >
                  All Products
                </a>
              </div>
            </div>

            {/* Stats / brand panel */}
            <div className="hidden md:block">
              <div className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white p-8">
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-black/40 mb-6">
                  Studio At a Glance
                </div>
                <div className="space-y-6">
                  {[
                    { num: "4", label: "Products in the ecosystem" },
                    { num: "1", label: "Live and in production" },
                    { num: "100%", label: "AI-native from day one" },
                    { num: "∞", label: "Motivation to build" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-baseline gap-4 border-b border-black/10 pb-5 last:border-0 last:pb-0"
                    >
                      <span className="text-4xl font-black tracking-tighter">
                        {stat.num}
                      </span>
                      <span className="text-sm font-medium text-notion-gray">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── A-Z Product Grid ── */}
      <AlphabetGrid />

      {/* ── Featured: Motivation Pay ── */}
      <section
        className="py-32 border-t-2 border-black bg-[#f2faf5]"
        id="pay"
        aria-label="Motivation Pay"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-block px-4 py-1.5 rounded-md border-2 border-black bg-emerald-400 text-black text-[11px] font-black uppercase tracking-[0.15em] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  P — Motivation Pay
                </div>
                <span className="px-3 py-1 rounded-md border-2 border-black bg-black text-white text-[10px] font-black uppercase tracking-wider">
                  Live Now
                </span>
              </div>
              <h2 className="font-hand text-5xl md:text-7xl text-black leading-tight max-w-2xl">
                Stablecoin payroll for AI teams.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: description + features + CTA */}
            <div>
              <p className="text-xl text-black/80 mb-10 font-medium leading-relaxed">
                Built for the AI-native economy. Collect money in, move money
                out — with every action tagged with reason, owner, approver, and
                audit trail. The financial operations layer for globally
                distributed, stablecoin-native teams.
              </p>
              <ul className="space-y-3 mb-12">
                {[
                  "End-to-end payout pipeline from treasury to recipient",
                  "Payroll, bonuses, reimbursements, and one-off payments",
                  "Safe multi-sig + OKX withdrawal integration",
                  "Role-based access — operator and employee separation",
                  "40+ action audit log with full history",
                  "OpenAPI 3.1 spec — agent-ready from day one",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base font-medium">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/pay"
                className="btn-notion inline-block bg-black text-white px-8 py-4 rounded-md font-black hover:bg-black/80 uppercase tracking-wider text-sm"
              >
                Full Product Details →
              </Link>
            </div>

            {/* Right: dashboard mockup */}
            <div className="dashboard-container">
              <div className="dashboard-header">
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-600 font-bold text-lg">&#9670;</span>
                  <span className="text-[11px] font-black uppercase tracking-wider">
                    Payroll Control
                  </span>
                </div>
                <span className="px-2 py-0.5 border-2 border-black bg-emerald-100 text-[9px] font-black rounded">
                  NETWORK LIVE
                </span>
              </div>
              <div className="dashboard-main !p-0 flex flex-col">
                <div className="p-6 bg-emerald-50 border-b-2 border-black">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black text-black/40 uppercase">
                      Pending USDC Batch
                    </span>
                    <span className="text-[10px] font-black text-black uppercase">
                      v2.4
                    </span>
                  </div>
                  <div className="text-4xl font-black text-black">$42,800.00</div>
                </div>
                <div className="flex-1 p-4">
                  <table className="w-full data-table">
                    <thead>
                      <tr>
                        <th>Recipient</th>
                        <th>Method</th>
                        <th className="text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Agent_0x4f...</td>
                        <td>CEX-Routing</td>
                        <td className="text-right">$12,400</td>
                      </tr>
                      <tr>
                        <td>Studio_0x92...</td>
                        <td>Multi-Sig</td>
                        <td className="text-right">$24,100</td>
                      </tr>
                      <tr>
                        <td>Node_0x11...</td>
                        <td>Instant</td>
                        <td className="text-right">$6,300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-white border-t-2 border-black mt-auto">
                  <div className="w-full py-3 bg-black text-white text-xs font-black uppercase tracking-widest rounded border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                    Execute Batch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section className="py-24 bg-white border-t-2 border-black border-b-2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <div className="inline-block px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Our Thesis
              </div>
              <h2 className="text-3xl font-black tracking-tight leading-tight">
                Motivation is infrastructure.
              </h2>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-10">
              {[
                {
                  title: "AI-Native First",
                  body: "Every product is designed to work with AI agents as first-class users — not bolted on after.",
                },
                {
                  title: "Operational Depth",
                  body: "We build tools that operators actually rely on. Not demos, not MVPs with futures — production-grade from day one.",
                },
                {
                  title: "Small & Focused",
                  body: "One feature done completely beats ten features done halfway. We ship narrow and deep.",
                },
                {
                  title: "Audit by Default",
                  body: "Every meaningful action in our products creates a record — who, what, why, when. Accountability is not optional.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-black mb-2">{item.title}</h3>
                  <p className="text-sm text-notion-gray font-medium leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Coming Soon ── */}
      <section className="py-24 bg-black" id="coming-soon">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block px-3 py-1 border border-white/30 text-white/60 text-[10px] font-black uppercase tracking-wider mb-8">
            What&apos;s Next
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-16">
            Three more products in development.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                letter: "K",
                color: "bg-amber-400",
                name: "Motivate Kids",
                tagline: "Nurture the builder's mindset.",
                desc: "A behavior and mindset platform for parents and children ages 3–10. Turn daily effort into compounding growth.",
                href: "/kids",
              },
              {
                letter: "M",
                color: "bg-blue-400",
                name: "Motivate Me",
                tagline: "Commitment through community.",
                desc: "Personal habit-formation powered by social accountability. Because commitment made publicly is commitment kept.",
                href: "/me",
              },
              {
                letter: "T",
                color: "bg-violet-400",
                name: "Motivation Team",
                tagline: "The backbone for modern teams.",
                desc: "A central hub for onboarding, SaaS management, and API key governance — designed for lean human-agent teams.",
                href: "/team",
              },
            ].map((product) => (
              <div
                key={product.letter}
                className="border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 ${product.color} text-black text-[10px] font-black uppercase tracking-wider border-2 border-white/20`}
                  >
                    {product.letter} — {product.name.split(" ")[1]}
                  </div>
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">
                    Soon
                  </span>
                </div>
                <h3 className="font-hand text-2xl text-white mb-3 leading-tight">
                  {product.tagline}
                </h3>
                <p className="text-sm text-white/50 font-medium leading-relaxed">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
