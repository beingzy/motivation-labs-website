import { Product } from "./products";

const BASE_URL = "https://motivationlabs.ai";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Motivation Labs",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "Motivation Labs is a lean, AI-native software studio building tools for people who take their lives and work seriously — and for the AI agents that work alongside them.",
    foundingDate: "2023",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    sameAs: [],
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
    publisher: {
      "@type": "Organization",
      name: "Motivation Labs",
      url: BASE_URL,
    },
    url: `${BASE_URL}/${product.slug}`,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Motivation Labs",
    url: BASE_URL,
    description:
      "AI-native software studio building tools for people who take their lives and work seriously.",
    publisher: organizationJsonLd(),
  };
}
