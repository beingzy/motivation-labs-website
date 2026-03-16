import Image from "next/image";

interface CexBadgeProps {
  name: "OKX" | "Coinbase" | "Binance";
  comingSoon?: boolean;
  size?: "sm" | "md";
}

const config = {
  OKX: {
    logo: "/images/exchanges/okx.png",
    bg: "bg-black",
    text: "text-white",
    href: "https://www.okx.com/account/register",
  },
  Coinbase: {
    logo: "/images/exchanges/coinbase.png",
    bg: "bg-[#1652F0]",
    text: "text-white",
    href: "https://www.coinbase.com/signup",
  },
  Binance: {
    logo: "/images/exchanges/binance.png",
    bg: "bg-[#181A20]",
    text: "text-[#F3BA2F]",
    href: "https://accounts.binance.com/register",
  },
};

export default function CexBadge({ name, comingSoon = false, size = "sm" }: CexBadgeProps) {
  const c = config[name];
  const logoSize = size === "md" ? 16 : 12;
  const textClass = size === "md" ? "text-[11px]" : "text-[9px]";

  const inner = (
    <>
      <Image
        src={c.logo}
        alt={name}
        width={logoSize}
        height={logoSize}
        className="object-contain rounded-sm"
      />
      {name}
      {comingSoon && (
        <span className="relative ml-0.5 px-1.5 py-px bg-white/20 border border-white/30 text-[7px] font-black uppercase tracking-wider rounded-sm">
          Soon
        </span>
      )}
    </>
  );

  const className = `inline-flex items-center gap-1 px-2 py-0.5 border border-black/20 font-black uppercase tracking-wider ${c.bg} ${c.text} ${textClass} ${comingSoon ? "relative" : ""} hover:brightness-110 transition-all`;

  return (
    <a
      href={c.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {inner}
      {comingSoon && (
        <span className="absolute -top-px -right-px w-2 h-2 rounded-full bg-amber-400 border border-black/30" />
      )}
    </a>
  );
}
