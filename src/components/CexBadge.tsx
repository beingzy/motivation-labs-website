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
  },
  Coinbase: {
    logo: "/images/exchanges/coinbase.png",
    bg: "bg-[#0052FF]",
    text: "text-white",
  },
  Binance: {
    logo: "/images/exchanges/binance.png",
    bg: "bg-[#F0B90B]",
    text: "text-black",
  },
};

export default function CexBadge({ name, comingSoon = false, size = "sm" }: CexBadgeProps) {
  const c = config[name];
  const logoSize = size === "md" ? 16 : 12;
  const textClass = size === "md" ? "text-[11px]" : "text-[9px]";

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 border border-black/20 font-black uppercase tracking-wider ${c.bg} ${c.text} ${textClass} ${comingSoon ? "opacity-50" : ""}`}
    >
      <Image
        src={c.logo}
        alt={name}
        width={logoSize}
        height={logoSize}
        className="object-contain rounded-sm"
      />
      {name}
      {comingSoon && <span className="opacity-60 text-[7px] ml-0.5">Soon</span>}
    </span>
  );
}
