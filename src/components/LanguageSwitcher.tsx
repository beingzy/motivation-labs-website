"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ locale }: { locale: "en" | "zh" }) {
  const pathname = usePathname();

  const isZh = locale === "zh";
  const targetPath = isZh
    ? pathname.replace(/^\/zh/, "") || "/"
    : `/zh${pathname === "/" ? "" : pathname}`;

  return (
    <div className="inline-flex items-center border-2 border-black text-[10px] font-black uppercase tracking-[0.15em] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
      <Link
        href={isZh ? targetPath : pathname}
        className={`px-2 py-1 transition-colors ${
          !isZh ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
        }`}
      >
        EN
      </Link>
      <Link
        href={isZh ? pathname : targetPath}
        className={`px-2 py-1 transition-colors ${
          isZh ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
        }`}
      >
        中文
      </Link>
    </div>
  );
}
