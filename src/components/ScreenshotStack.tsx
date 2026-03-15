"use client";

import { useState } from "react";
import Image from "next/image";

const screens = [
  {
    src: "/images/pay/04-dashboard.png",
    alt: "Dashboard overview",
    label: "Dashboard",
  },
  {
    src: "/images/pay/07-payouts-list.png",
    alt: "Payouts list",
    label: "Payouts",
  },
  {
    src: "/images/pay/09-run-detail-confirmed.png",
    alt: "Payroll run detail",
    label: "Run Detail",
  },
  {
    src: "/images/pay/17-audit-log.png",
    alt: "Audit log",
    label: "Audit Log",
  },
];

const stackedTransforms = [
  "translateX(-8%) translateY(4%) rotate(-5deg)",
  "translateX(-3%) translateY(2%) rotate(-1.5deg)",
  "translateX(3%) translateY(2%) rotate(1.5deg)",
  "translateX(8%) translateY(4%) rotate(5deg)",
];

const fannedTransforms = [
  "translateX(-52%) translateY(12%) rotate(-20deg)",
  "translateX(-18%) translateY(4%) rotate(-7deg)",
  "translateX(18%) translateY(4%) rotate(7deg)",
  "translateX(52%) translateY(12%) rotate(20deg)",
];

export default function ScreenshotStack() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-64 md:h-80 cursor-pointer select-none"
      style={{ overflow: "visible" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover hint */}
      <div
        className="absolute -bottom-7 left-0 right-0 text-center transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
          Hover to explore
        </span>
      </div>

      {screens.map((screen, i) => (
        <div
          key={screen.src}
          style={{
            position: "absolute",
            inset: 0,
            transform: hovered ? fannedTransforms[i] : stackedTransforms[i],
            transition: `transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 30}ms`,
            zIndex: hovered ? i + 1 : screens.length - i,
          }}
          className="screenshot-card overflow-hidden"
        >
          <Image
            src={screen.src}
            alt={screen.alt}
            width={720}
            height={480}
            className="w-full h-full object-cover object-top"
          />
          {/* Label appears on hover */}
          <div
            style={{
              opacity: hovered ? 1 : 0,
              transition: `opacity 0.2s ease ${i * 30 + 150}ms`,
            }}
            className="absolute bottom-0 left-0 right-0 bg-black py-2 px-3 border-t-2 border-black"
          >
            <span className="text-[10px] font-black text-white uppercase tracking-widest">
              {screen.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
