"use client";

import { useState } from "react";

interface WaitlistFormProps {
  product: string;
  accentClass?: string;
  buttonClass?: string;
  labels?: {
    placeholder?: string;
    button?: string;
    loading?: string;
    success?: string;
    successDetail?: string;
    error?: string;
  };
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default function WaitlistForm({
  product,
  accentClass = "bg-black",
  buttonClass = "btn-notion bg-black text-white px-10 py-5 rounded-md font-black text-base uppercase tracking-wider hover:bg-black/80",
  labels,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const t = {
    placeholder: labels?.placeholder ?? "your@email.com",
    button: labels?.button ?? "Join Waitlist",
    loading: labels?.loading ?? "Joining...",
    success: labels?.success ?? "You\u2019re on the list",
    successDetail: labels?.successDetail ?? `We\u2019ll reach out to {email} when ${product} is ready for you.`,
    error: labels?.error ?? "Please enter a valid email address.",
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg(t.error);
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    try {
      if (SUPABASE_URL && SUPABASE_ANON_KEY) {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify({ email, product }),
        });
        if (!res.ok && res.status !== 409) {
          throw new Error(`HTTP ${res.status}`);
        }
      } else {
        // Fallback: log locally when Supabase is not configured
        console.log(`[Waitlist] product=${product} email=${email}`);
        await new Promise((r) => setTimeout(r, 400));
      }
      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4">
        <div
          className={`inline-flex items-center gap-3 px-6 py-4 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white`}
        >
          <span className={`w-3 h-3 rounded-full ${accentClass} shrink-0`} />
          <span className="font-black text-sm uppercase tracking-wider">
            {t.success}
          </span>
        </div>
        <p className="text-sm text-black/60 font-medium">
          {t.successDetail.replace("{email}", email)}
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
          placeholder={t.placeholder}
          className="flex-1 px-5 py-4 border-2 border-black font-medium text-sm focus:outline-none focus:ring-2 focus:ring-black/20 placeholder:text-black/30"
          disabled={status === "loading"}
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`${buttonClass} disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap`}
        >
          {status === "loading" ? t.loading : t.button}
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600 font-medium">{errorMsg}</p>
      )}
    </form>
  );
}
