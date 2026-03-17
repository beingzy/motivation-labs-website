import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  locale: string;
  content: string;
  ogImage?: string;
}

function getPostFiles(locale: string): string[] {
  const suffix = locale === "en" ? ".mdx" : `.${locale}.mdx`;
  try {
    return fs
      .readdirSync(BLOG_DIR)
      .filter((f) => {
        if (locale === "en") {
          // English files: end with .mdx but NOT .zh.mdx
          return f.endsWith(".mdx") && !f.includes(".zh.");
        }
        return f.endsWith(suffix);
      });
  } catch {
    return [];
  }
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.zh\.mdx$/, "").replace(/\.mdx$/, "");
}

export function getPost(slug: string, locale = "en"): BlogPost | null {
  const filename = locale === "en" ? `${slug}.mdx` : `${slug}.${locale}.mdx`;
  const filepath = path.join(BLOG_DIR, filename);

  if (!fs.existsSync(filepath)) {
    // Fall back to English if no translation exists
    if (locale !== "en") return getPost(slug, "en");
    return null;
  }

  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Motivation Labs",
    tags: data.tags || [],
    locale,
    content,
    ogImage: data.ogImage,
  };
}

export function getAllPosts(locale = "en"): BlogPost[] {
  const files = getPostFiles(locale);

  return files
    .map((f) => {
      const slug = slugFromFilename(f);
      return getPost(slug, locale);
    })
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllSlugs(): string[] {
  return getPostFiles("en").map(slugFromFilename);
}
