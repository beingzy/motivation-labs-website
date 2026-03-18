import type { Metadata } from "next";
import { getProduct } from "@/lib/products";
import { zh } from "@/i18n";
import WaitlistForm from "@/components/WaitlistForm";

const product = getProduct("kids")!;
const d = zh.kids;

export const metadata: Metadata = {
  title: "Motivate Kids — 培养 3–10 岁儿童的建设者思维",
  description: product.description,
  alternates: { canonical: "/zh/kids", languages: { en: "/kids", zh: "/zh/kids" } },
  openGraph: {
    title: "Motivate Kids — 培养 3–10 岁儿童的建设者思维",
    description: product.description,
    type: "website",
    locale: "zh_CN",
  },
};

const zhLabels = {
  placeholder: "您的邮箱地址",
  button: "加入等候名单",
  loading: "提交中...",
  success: "您已加入名单",
  successDetail: "当 Motivate Kids 准备就绪时，我们会通过 {email} 联系您。",
  error: "请输入有效的邮箱地址。",
};

export default function ZhKidsPage() {
  return (
    <>
      <section className="bg-[#fffbf0] border-b-2 border-black py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 rounded-md border-2 border-black bg-amber-400 text-black text-[11px] font-black uppercase tracking-[0.15em] mb-8 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            {d.badge}
          </div>
          <div className="inline-block ml-3 px-3 py-1 rounded-md border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider text-black/50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {d.comingSoon}
          </div>
          <h1 className="font-hand text-5xl md:text-8xl text-black mt-8 mb-8 leading-tight max-w-4xl">
            {d.heading}
          </h1>
          <p className="text-xl md:text-2xl text-black/70 mb-12 font-medium leading-relaxed max-w-2xl">
            {product.description}
          </p>
          <WaitlistForm product="Motivate Kids" accentClass="bg-amber-500" labels={zhLabels} />
        </div>
      </section>
    </>
  );
}
