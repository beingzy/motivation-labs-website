import type { Metadata } from "next";
import { Inter, Gochi_Hand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

export const metadata: Metadata = {
  title: {
    default: "Motivation Labs | AI-Native Software Studio",
    template: "%s | Motivation Labs",
  },
  description:
    "Motivation Labs is a lean, AI-native software studio building tools for people who take their lives and work seriously — and for the AI agents that work alongside them.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Motivation Labs",
    title: "Motivation Labs | AI-Native Software Studio",
    description:
      "Building tools for people who take their lives and work seriously — and for the AI agents that work alongside them.",
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
        className={`${inter.variable} ${gochiHand.variable} font-sans antialiased selection:bg-gray-200`}
      >
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd(), websiteJsonLd()]),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
