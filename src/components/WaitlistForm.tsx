"use client";

import { useState } from "react";

interface WaitlistFormProps {
  product: string;
  accentClass?: string;
  buttonClass?: string;
}

export default function WaitlistForm({
  product,
  accentClass = "bg-black",
  buttonClass = "btn-notion bg-black text-white px-10 py-5 rounded-md font-black text-base uppercase tracking-wider hover:bg-black/80",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    // TODO: Wire up to Supabase or Loops/Resend
    // For now, simulate a successful submission
    await new Promise((r) => setTimeout(r, 800));

    console.log(`[Waitlist] product=${product} email=${email}`);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4">
        <div
          className={`inline-flex items-center gap-3 px-6 py-4 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white`}
        >
          <span className={`w-3 h-3 rounded-full ${accentClass} shrink-0`} />
          <span className="font-black text-sm uppercase tracking-wider">
            You&apos;re on the list
          </span>
        </div>
        <p className="text-sm text-black/60 font-medium">
          We&apos;ll reach out to <strong>{email}</strong> when{" "}
          {product} is ready for you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="your@email.com"
          className="flex-1 px-5 py-4 border-2 border-black font-medium text-sm focus:outline-none focus:ring-2 focus:ring-black/20 placeholder:text-black/30"
          disabled={status === "loading"}
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`${buttonClass} disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap`}
        >
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600 font-medium">{errorMsg}</p>
      )}
    </form>
  );
}
