"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const screens = [
  { src: "/images/pay/04-dashboard.png",            alt: "Dashboard overview",   label: "Dashboard"   },
  { src: "/images/pay/07-payouts-list.png",          alt: "Payouts list",         label: "Payouts"     },
  { src: "/images/pay/09-run-detail-confirmed.png",  alt: "Payroll run detail",   label: "Run Detail"  },
  { src: "/images/pay/17-audit-log.png",             alt: "Audit log",            label: "Audit Log"   },
];

// Desktop: fan horizontally
const desktopStacked = [
  "translateX(-8%) translateY(4%) rotate(-5deg)",
  "translateX(-3%) translateY(2%) rotate(-1.5deg)",
  "translateX(3%)  translateY(2%) rotate(1.5deg)",
  "translateX(8%)  translateY(4%) rotate(5deg)",
];
const desktopFanned = [
  "translateX(-52%) translateY(14%) rotate(-22deg)",
  "translateX(-18%) translateY(5%)  rotate(-7deg)",
  "translateX(18%)  translateY(5%)  rotate(7deg)",
  "translateX(52%)  translateY(14%) rotate(22deg)",
];

// Mobile: fan vertically
const mobileStacked = [
  "translateY(-6%) translateX(3%)  rotate(-3deg)",
  "translateY(-2%) translateX(1%)  rotate(-1deg)",
  "translateY(2%)  translateX(-1%) rotate(1deg)",
  "translateY(6%)  translateX(-3%) rotate(3deg)",
];
const mobileFanned = [
  "translateY(-62%) translateX(6%)  rotate(-5deg)",
  "translateY(-21%) translateX(2%)  rotate(-1.5deg)",
  "translateY(21%)  translateX(-2%) rotate(1.5deg)",
  "translateY(62%)  translateX(-6%) rotate(5deg)",
];

export default function ScreenshotStack() {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const stacked = isMobile ? mobileStacked : desktopStacked;
  const fanned  = isMobile ? mobileFanned  : desktopFanned;

  return (
    <div
      // On mobile when fanned, need extra vertical clearance
      className={`relative cursor-pointer select-none transition-all duration-500 ${
        isMobile
          ? hovered ? "h-[520px]" : "h-52"
          : hovered ? "h-80"       : "h-72 md:h-80"
      }`}
      style={{ overflow: "visible" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Touch support for mobile
      onTouchStart={() => setHovered((v) => !v)}
    >
      {/* Hint */}
      <div
        className="absolute left-0 right-0 text-center transition-opacity duration-300 pointer-events-none"
        style={{
          bottom: isMobile ? "-1.5rem" : "-1.75rem",
          opacity: hovered ? 0 : 1,
        }}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
          {isMobile ? "Tap to explore" : "Hover to explore"}
        </span>
      </div>

      {screens.map((screen, i) => (
        <div
          key={screen.src}
          style={{
            position: "absolute",
            inset: 0,
            transform: hovered ? fanned[i] : stacked[i],
            transition: `transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 35}ms`,
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
          {/* Label fades in on hover */}
          <div
            style={{
              opacity: hovered ? 1 : 0,
              transition: `opacity 0.2s ease ${i * 35 + 160}ms`,
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
