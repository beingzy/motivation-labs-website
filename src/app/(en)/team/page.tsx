import type { Metadata } from "next";
import Link from "next/link";
import { getProduct } from "@/lib/products";
import { productJsonLd } from "@/lib/structured-data";

const product = getProduct("team")!;

export const metadata: Metadata = {
  title: "Motivation Team — Operational OS for Human-Agent Teams",
  description: product.description,
  alternates: {
    canonical: "/team",
    languages: { en: "/team", zh: "/zh/team" },
  },
  openGraph: {
    title: "Motivation Team — Operational OS for Human-Agent Teams",
    description: product.description,
    type: "website",
    images: [{ url: "/og/team.png", width: 1200, height: 630, alt: "Motivation Team" }],
  },
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />

      {/* Hero */}
      <section className="bg-violet-50 border-b-2 border-black py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <div className="inline-block px-4 py-1.5 rounded-md border-2 border-black bg-violet-400 text-black text-[11px] font-black uppercase tracking-[0.15em] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              T — Motivation Team
            </div>
            <div className="inline-block px-3 py-1 rounded-md border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider text-black/50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Coming Soon
            </div>
          </div>
          <h1 className="font-hand text-5xl md:text-7xl text-black mb-6 leading-tight max-w-3xl">
            The backbone for modern teams.
          </h1>
          <p className="text-lg md:text-2xl text-black/70 mb-10 font-medium leading-relaxed max-w-2xl">
            {product.description}
          </p>
          <Link
            href="/"
            className="btn-notion inline-block bg-white text-black px-8 py-4 rounded-md font-black hover:bg-violet-100 uppercase tracking-wider text-sm"
          >
            ← Back to Motivation Labs
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-24 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Everything Your Team Needs
          </div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-12 md:mb-16">
            Four pillars of team operations.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                step: "01",
                title: "Onboarding",
                desc: "Automated onboarding flows for new humans and agents. Get anyone productive on day one.",
              },
              {
                step: "02",
                title: "SaaS Audit",
                desc: "Track every subscription, license, and tool your team uses. Eliminate waste and shadow IT.",
              },
              {
                step: "03",
                title: "API Governance",
                desc: "Centralized API key management with rotation policies, usage tracking, and access controls.",
              },
              {
                step: "04",
                title: "Agent Management",
                desc: "Register, monitor, and manage AI agents as first-class team members with clear permissions.",
              },
            ].map((feature) => (
              <div
                key={feature.step}
                className="p-5 md:p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white"
              >
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-5">
                  {feature.step}
                </div>
                <h3 className="font-black text-sm md:text-lg mb-2">{feature.title}</h3>
                <p className="text-xs md:text-sm text-notion-gray font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Motivation Team */}
      <section className="py-20 md:py-24 bg-violet-50 border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-6">
                One hub for your entire operational stack
              </h2>
              <p className="text-base md:text-lg text-black/70 font-medium leading-relaxed mb-8">
                Stop context-switching between admin tools. Motivation Team brings
                onboarding, subscriptions, API keys, and agent management into a
                single, unified interface.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm md:text-base font-medium">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                  Works for teams of 2 or 200
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base font-medium">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                  Built-in audit logging for compliance
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base font-medium">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                  API-first — integrates with your existing stack
                </li>
              </ul>
            </div>
            <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white p-6 md:p-8">
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-black/40 mb-6">
                Dashboard Preview
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Onboarding", color: "bg-violet-400" },
                  { label: "SaaS Audit", color: "bg-violet-300" },
                  { label: "API Keys", color: "bg-violet-200" },
                  { label: "Agents", color: "bg-violet-100" },
                ].map((mod) => (
                  <div key={mod.label} className="border border-black/10 p-3">
                    <div className={`w-full h-2 ${mod.color} rounded-sm mb-2`} />
                    <div className="text-[10px] font-black uppercase tracking-wider text-black/40">
                      {mod.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white text-center border-b-2 border-black">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-hand text-4xl md:text-6xl text-black mb-6 leading-tight">
            Your team deserves better ops.
          </h2>
          <p className="text-base md:text-lg text-black/70 mb-10 font-medium">
            See how Motivation Team can streamline your onboarding, SaaS
            management, and API governance.
          </p>
          <Link
            href="/"
            className="btn-notion inline-block bg-black text-white px-10 py-5 rounded-md font-black text-sm uppercase tracking-wider hover:bg-black/80"
          >
            ← Back to Motivation Labs
          </Link>
        </div>
      </section>
    </>
  );
}
