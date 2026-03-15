interface Window {
  gtag: (
    command: "event" | "config" | "js",
    targetOrAction: string | Date,
    params?: Record<string, string | number | boolean>
  ) => void;
  dataLayer: Array<unknown>;
}
