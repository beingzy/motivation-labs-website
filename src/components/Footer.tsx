import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-black" id="contact">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="font-black text-2xl mb-3 tracking-tight">
              Motivation Labs LLC
            </div>
            <p className="text-black/60 text-sm leading-relaxed font-medium max-w-xs">
              A lean, AI-native software studio building tools for people who
              take their lives and work seriously.
            </p>
          </div>

          {/* Products */}
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-5">
              Products
            </div>
            <ul className="space-y-3 text-sm font-black uppercase tracking-wider">
              <li>
                <Link
                  href="/pay"
                  className="hover:underline decoration-2 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  Motivation Pay
                  <span className="text-[9px] text-black/30 font-black uppercase tracking-widest">
                    Live
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/kids"
                  className="hover:underline decoration-2 text-black/40 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                  Motivate Kids
                </Link>
              </li>
              <li>
                <Link
                  href="/me"
                  className="hover:underline decoration-2 text-black/40 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                  Motivate Me
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:underline decoration-2 text-black/40 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-violet-400 inline-block" />
                  Motivation Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-5">
              Connect
            </div>
            <ul className="space-y-3 text-sm font-black uppercase tracking-wider">
              <li>
                <Link
                  href="https://x.com/motivationlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline decoration-2"
                >
                  X / Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:underline decoration-2"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-black text-[10px] font-black text-black/40 flex flex-col md:flex-row justify-between items-center uppercase tracking-[0.2em]">
          <span>&copy; 2024–2025 Motivation Labs LLC. All rights reserved.</span>
          <span className="mt-4 md:mt-0 font-hand text-2xl lowercase tracking-normal text-black opacity-80">
            Focus is the new currency.
          </span>
        </div>
      </div>
    </footer>
  );
}
