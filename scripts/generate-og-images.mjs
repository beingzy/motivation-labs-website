import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/og");

const pages = [
  {
    name: "home",
    bg: "#ffffff",
    accent: "#000000",
    title: "Motivation Labs",
    line2: "AI-Native Software Studio",
    line3: "Tools for people and agents.",
  },
  {
    name: "money",
    bg: "#f2faf5",
    accent: "#059669",
    title: "Motivation Money",
    line2: "Stablecoin Payroll & Payment Ops",
    line3: "Self-custody · Private · Auditable",
    badge: "M",
    badgeColor: "#34d399",
  },
  {
    name: "money-zh",
    bg: "#f2faf5",
    accent: "#059669",
    title: "Motivation Money",
    line2: "稳定币薪资发放与支付运营",
    line3: "自托管 · 隐私支付 · 完整审计",
    badge: "M",
    badgeColor: "#34d399",
  },
  {
    name: "kids",
    bg: "#fffbf0",
    accent: "#d97706",
    title: "Motivate Kids",
    line2: "Builder's Mindset for Ages 3–10",
    line3: "Coming Soon",
    badge: "K",
    badgeColor: "#fbbf24",
  },
  {
    name: "me",
    bg: "#dbeafe",
    accent: "#1e40af",
    title: "Motivate Me",
    line2: "Habit Formation",
    line3: "Through Social Accountability",
    badge: "E",
    badgeColor: "#60a5fa",
  },
  {
    name: "team",
    bg: "#ede9fe",
    accent: "#5b21b6",
    title: "Motivation Team",
    line2: "Operational OS",
    line3: "For Human-Agent Teams",
    badge: "T",
    badgeColor: "#a78bfa",
  },
];

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildSVG({ bg, accent, title, line2, line3, badge, badgeColor }) {
  title = esc(title); line2 = esc(line2); line3 = esc(line3);
  const badgeSVG = badge
    ? `<rect x="80" y="80" width="56" height="56" rx="8" fill="${badgeColor}" stroke="#000" stroke-width="3"/>
       <text x="108" y="118" font-family="Inter,Helvetica,Arial,sans-serif" font-size="24" font-weight="900" text-anchor="middle" fill="#000">${badge}</text>`
    : `<rect x="80" y="80" width="48" height="48" rx="12" fill="#000" stroke="#000" stroke-width="3"/>
       <text x="104" y="114" font-family="Inter,Helvetica,Arial,sans-serif" font-size="24" font-weight="900" text-anchor="middle" fill="#fff">M</text>`;

  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${bg}"/>
  <rect y="624" width="1200" height="6" fill="${accent}"/>
  ${badgeSVG}
  <text x="80" y="230" font-family="Inter,Helvetica,Arial,sans-serif" font-size="64" font-weight="900" fill="#000" letter-spacing="-2">${title}</text>
  <text x="80" y="300" font-family="Inter,Helvetica,Arial,sans-serif" font-size="28" font-weight="600" fill="#707070">${line2}</text>
  <text x="80" y="345" font-family="Inter,Helvetica,Arial,sans-serif" font-size="24" font-weight="500" fill="#999999">${line3}</text>
  <text x="1120" y="590" font-family="Inter,Helvetica,Arial,sans-serif" font-size="14" font-weight="900" text-anchor="end" fill="#cccccc" letter-spacing="3">MOTIVATIONLABS.AI</text>
</svg>`;
}

for (const page of pages) {
  const svg = Buffer.from(buildSVG(page));
  await sharp(svg).png().toFile(join(outDir, `${page.name}.png`));
  console.log(`Generated: ${page.name}.png`);
}
console.log("Done.");
