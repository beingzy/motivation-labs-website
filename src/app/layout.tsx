import type { Metadata } from "next";
import { Inter, Gochi_Hand, ZCOOL_KuaiLe } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const gochiHand = Gochi_Hand({
  variable: "--font-gochi-hand",
  subsets: ["latin"],
  weight: "400",
});

const zcoolKuaiLe = ZCOOL_KuaiLe({
  variable: "--font-zcool-kuaile",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://motivationlabs.ai"),
  title: {
    default: "Motivation Labs | AI-Native Software Studio",
    template: "%s | Motivation Labs",
  },
  description:
    "Motivation Labs is a lean, AI-native software studio building tools for people who take their lives and work seriously — and for the AI agents that work alongside them.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      zh: "/zh",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "zh_CN",
    siteName: "Motivation Labs",
    title: "Motivation Labs | AI-Native Software Studio",
    description:
      "Building tools for people who take their lives and work seriously — and for the AI agents that work alongside them.",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Motivation Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Motivation Labs | AI-Native Software Studio",
    description:
      "Building tools for people who take their lives and work seriously — and for the AI agents that work alongside them.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${gochiHand.variable} ${zcoolKuaiLe.variable} font-sans antialiased selection:bg-gray-200`}
      >
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd(), websiteJsonLd()]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
