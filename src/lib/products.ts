export interface Product {
  slug: string;
  letter: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  cta: { label: string; href: string };
  color: {
    bg: string;
    bgLight: string;
    text: string;
    textMuted: string;
    badge: string;
    badgeText: string;
    accent: string;
    accentHover: string;
  };
}

export const products: Product[] = [
  {
    slug: "me",
    letter: "E",
    name: "Motivate Me",
    shortName: "Me",
    tagline: "Commitment through community.",
    description:
      "Personal habit-formation powered by social accountability. Because a commitment made in front of others is a commitment you're more likely to keep.",
    cta: { label: "Download App", href: "/me" },
    color: {
      bg: "bg-blue-200",
      bgLight: "bg-blue-100",
      text: "text-blue-900",
      textMuted: "text-blue-800/80",
      badge: "bg-blue-600",
      badgeText: "text-blue-800",
      accent: "bg-blue-900",
      accentHover: "hover:bg-blue-950",
    },
  },
  {
    slug: "kids",
    letter: "K",
    name: "Motivate Kids",
    shortName: "Kids",
    tagline: "Nurture the builder's mindset.",
    description:
      "A behavior and mindset platform for parents and children ages 3–10. We turn daily chores into lessons on compounding effort and creative agency.",
    cta: { label: "Explore Platform", href: "/kids" },
    color: {
      bg: "bg-amber-200",
      bgLight: "bg-amber-100",
      text: "text-amber-900",
      textMuted: "text-amber-800/80",
      badge: "bg-amber-600",
      badgeText: "text-amber-800",
      accent: "bg-amber-900",
      accentHover: "hover:bg-amber-950",
    },
  },
  {
    slug: "money",
    letter: "M",
    name: "Motivation Money",
    shortName: "Money",
    tagline: "Stablecoin financial ops for modern teams.",
    description:
      "Self-custody treasury management with CEX-routed payments. Your funds stay in your Safe — payments are private, compliant, and fully auditable.",
    cta: { label: "Try Motivation Money", href: "/money" },
    color: {
      bg: "bg-emerald-200",
      bgLight: "bg-emerald-100",
      text: "text-emerald-900",
      textMuted: "text-emerald-800/80",
      badge: "bg-emerald-600",
      badgeText: "text-emerald-800",
      accent: "bg-emerald-900",
      accentHover: "hover:bg-emerald-950",
    },
  },
  {
    slug: "team",
    letter: "T",
    name: "Motivation Team",
    shortName: "Team",
    tagline: "The backbone for modern teams.",
    description:
      "A central hub for onboarding, SaaS management, and API key governance. The operational OS designed for lean human-agent hybrid teams.",
    cta: { label: "Request Demo", href: "/team" },
    color: {
      bg: "bg-violet-200",
      bgLight: "bg-violet-100",
      text: "text-violet-900",
      textMuted: "text-violet-800/80",
      badge: "bg-violet-600",
      badgeText: "text-violet-800",
      accent: "bg-violet-900",
      accentHover: "hover:bg-violet-950",
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
