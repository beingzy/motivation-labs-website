import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export default function GoogleAnalytics() {
  if (GA_ID === "G-XXXXXXXXXX") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}

/**
 * Track a custom event in Google Analytics.
 * Usage: trackEvent("matrix_click", { letter: "P", product: "Motivation Pay" })
 */
export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
}
