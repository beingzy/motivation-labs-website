import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { zh } from "@/i18n";

export const metadata: Metadata = {
  alternates: {
    canonical: "/zh",
    languages: { en: "/", zh: "/zh" },
  },
  title: {
    default: "Motivation Labs | AI \u539F\u751F\u8F6F\u4EF6\u5DE5\u4F5C\u5BA4",
    template: "%s | Motivation Labs",
  },
  description:
    "Motivation Labs \u662F\u4E00\u5BB6\u7CBE\u7B80\u3001AI \u539F\u751F\u7684\u8F6F\u4EF6\u5DE5\u4F5C\u5BA4\uFF0C\u4E3A\u8BA4\u771F\u5BF9\u5F85\u751F\u6D3B\u548C\u5DE5\u4F5C\u7684\u4EBA\u6253\u9020\u5DE5\u5177\u2014\u2014\u4E5F\u4E3A\u4E0E\u4ED6\u4EEC\u5E76\u80A9\u534F\u4F5C\u7684 AI \u667A\u80FD\u4F53\u800C\u5EFA\u3002",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "Motivation Labs",
    title: "Motivation Labs | AI \u539F\u751F\u8F6F\u4EF6\u5DE5\u4F5C\u5BA4",
    description:
      "\u4E3A\u8BA4\u771F\u5BF9\u5F85\u751F\u6D3B\u548C\u5DE5\u4F5C\u7684\u4EBA\u6253\u9020\u5DE5\u5177\u2014\u2014\u4E5F\u4E3A\u4E0E\u4ED6\u4EEC\u5E76\u80A9\u534F\u4F5C\u7684 AI \u667A\u80FD\u4F53\u800C\u5EFA\u3002",
  },
};

export default function ZhLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="zh-locale">
      <Header locale="zh" dict={zh} />
      {children}
      <Footer locale="zh" dict={zh} />
    </div>
  );
}
