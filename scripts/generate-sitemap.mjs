#!/usr/bin/env node

/**
 * Pre-build script: generates public/sitemap.xml from products + blog content.
 * Run via `npm run prebuild` or automatically before `npm run build`.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BASE_URL = "https://motivationlabs.ai";
const NOW = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

// ── Products ──
const productSlugs = ["money", "me", "kids", "team"];
const liveProducts = new Set(["money"]);

// ── Blog slugs (auto-discover from content/blog/) ──
const blogDir = path.join(ROOT, "content/blog");
const blogSlugs = fs.existsSync(blogDir)
  ? fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith(".mdx") && !f.includes(".zh."))
      .map((f) => f.replace(/\.mdx$/, ""))
  : [];

// ── Helpers ──
function url(loc, lastmod, freq, priority, enPath, zhPath) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${enPath}"/>
    <xhtml:link rel="alternate" hreflang="zh" href="${BASE_URL}${zhPath}"/>
  </url>`;
}

// ── Build entries ──
const entries = [];

// Homepage
entries.push(url(`${BASE_URL}/`, NOW, "weekly", "1.0", "/", "/zh"));
entries.push(url(`${BASE_URL}/zh`, NOW, "weekly", "0.9", "/", "/zh"));

// Product pages
for (const slug of productSlugs) {
  const live = liveProducts.has(slug);
  const freq = live ? "weekly" : "monthly";
  entries.push(
    url(`${BASE_URL}/${slug}`, NOW, freq, live ? "0.9" : "0.7", `/${slug}`, `/zh/${slug}`)
  );
  entries.push(
    url(`${BASE_URL}/zh/${slug}`, NOW, freq, live ? "0.8" : "0.6", `/${slug}`, `/zh/${slug}`)
  );
}

// Blog index
entries.push(url(`${BASE_URL}/blog`, NOW, "weekly", "0.6", "/blog", "/zh/blog"));
entries.push(url(`${BASE_URL}/zh/blog`, NOW, "weekly", "0.5", "/blog", "/zh/blog"));

// Blog posts
for (const slug of blogSlugs) {
  entries.push(
    url(`${BASE_URL}/blog/${slug}`, NOW, "monthly", "0.8", `/blog/${slug}`, `/zh/blog/${slug}`)
  );
  entries.push(
    url(
      `${BASE_URL}/zh/blog/${slug}`,
      NOW,
      "monthly",
      "0.7",
      `/blog/${slug}`,
      `/zh/blog/${slug}`
    )
  );
}

// ── Write ──
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;

const outPath = path.join(ROOT, "public/sitemap.xml");
fs.writeFileSync(outPath, xml, "utf-8");
console.log(`✓ Generated sitemap.xml (${entries.length / 2} URL pairs, ${entries.length} entries)`);
