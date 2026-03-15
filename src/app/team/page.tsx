import type { Metadata } from "next";
import Link from "next/link";
import { getProduct } from "@/lib/products";
import { productJsonLd } from "@/lib/structured-data";

const product = getProduct("team")!;

export const metadata: Metadata = {
  title: "Motivation Team — Operational OS for Human-Agent Teams",
  description: product.description,
  openGraph: {
    title: "Motivation Team — Operational OS for Human-Agent Teams",
    description: product.description,
    type: "website",
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
      <section className="bg-violet-200 py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-violet-600 text-white text-[11px] font-black uppercase tracking-[0.15em] mb-6">
            T — Motivation Team
          </div>
          <h1 className="font-hand text-5xl md:text-7xl text-violet-900 mb-8 leading-tight max-w-3xl">
            The backbone for modern teams.
          </h1>
          <p className="text-xl md:text-2xl text-violet-800/80 mb-12 font-medium leading-relaxed max-w-2xl">
            {product.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-violet-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-violet-950 transition-all transform hover:-translate-y-1 shadow-lg">
              Request Demo
            </button>
            <Link
              href="/#team"
              className="px-8 py-4 rounded-xl font-bold border-2 border-violet-900/20 text-violet-900 hover:border-violet-900/40 transition-all text-center"
            >
              Back to Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-16">
            Everything Your Team Needs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Onboarding",
                desc: "Automated onboarding flows for new humans and agents. Get anyone productive on day one.",
                icon: "🚀",
              },
              {
                title: "SaaS Audit",
                desc: "Track every subscription, license, and tool your team uses. Eliminate waste and shadow IT.",
                icon: "🔍",
              },
              {
                title: "API Governance",
                desc: "Centralized API key management with rotation policies, usage tracking, and access controls.",
                icon: "🔐",
              },
              {
                title: "Agent Management",
                desc: "Register, monitor, and manage AI agents as first-class team members with clear permissions.",
                icon: "🤖",
              },
            ].map((feature) => (
              <article key={feature.title} className="space-y-4 p-6 bg-violet-50/50 rounded-2xl">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-notion-gray leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-violet-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-violet-100 aspect-square rounded-3xl flex items-center justify-center p-8 shadow-inner">
            <div className="w-full grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border-2 border-violet-50">
                <div className="text-[10px] font-black text-violet-600 uppercase tracking-widest mb-4">
                  Onboarding
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-100 rounded-full w-full" />
                  <div className="h-2 bg-gray-100 rounded-full w-3/4" />
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border-2 border-violet-50">
                <div className="text-[10px] font-black text-violet-600 uppercase tracking-widest mb-4">
                  SaaS Audit
                </div>
                <div className="flex space-x-2">
                  <div className="w-4 h-4 bg-gray-100 rounded" />
                  <div className="w-4 h-4 bg-gray-100 rounded" />
                  <div className="w-4 h-4 bg-gray-100 rounded" />
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border-2 border-violet-50">
                <div className="text-[10px] font-black text-violet-600 uppercase tracking-widest mb-4">
                  API Governance
                </div>
                <div className="h-4 bg-violet-50 border border-violet-100 rounded-md w-full" />
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border-2 border-violet-50">
                <div className="text-[10px] font-black text-violet-600 uppercase tracking-widest mb-4">
                  Agents
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-violet-600" />
                  <div className="w-6 h-6 rounded-full bg-violet-200" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
              One hub for your entire operational stack
            </h2>
            <p className="text-lg text-notion-gray leading-relaxed mb-8">
              Stop context-switching between admin tools. Motivation Team brings
              onboarding, subscriptions, API keys, and agent management into a
              single, unified interface.
            </p>
            <ul className="space-y-4 text-notion-gray">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                Works for teams of 2 or 200
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                Built-in audit logging for compliance
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                API-first — integrates with your existing stack
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-violet-200 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-hand text-4xl md:text-5xl text-violet-900 mb-6">
            Your team deserves better ops.
          </h2>
          <p className="text-lg text-violet-800/80 mb-10 font-medium">
            See how Motivation Team can streamline your onboarding, SaaS
            management, and API governance.
          </p>
          <button className="bg-violet-900 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-violet-950 transition-all transform hover:-translate-y-1 shadow-lg">
            Request a Demo
          </button>
        </div>
      </section>
    </>
  );
}
