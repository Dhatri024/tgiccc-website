import { Link } from "@tanstack/react-router";
import logoGov from "@/assets/logo-telangana-gov.png";
import logoTgiccc from "@/assets/logo-tgiccc.png";
import logoPolice from "@/assets/logo-telangana-police.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-header text-white shadow-elevated">
      {/* Top utility strip */}
      <div className="border-b border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-[11px] tracking-wide text-white/70">
          <span className="hidden sm:inline">Government of Telangana · Official Portal</span>
          <span className="font-mono text-gold">Speed · Technology · Service</span>
        </div>
      </div>

      {/* Logo row */}
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center gap-3 px-4 py-3 sm:py-4">
        <div className="flex items-center gap-3 justify-self-start">
          <Link to="/" className="inline-flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-slate-950/60 p-2 shadow-elevated">
            <img
              src={logoGov}
              alt="Government of Telangana"
              className="h-full w-full rounded-full object-contain"
            />
          </Link>
          <Link to="/" className="inline-flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-slate-950/60 p-2 shadow-elevated">
            <img
              src={logoPolice}
              alt="Telangana Police"
              className="h-full w-full rounded-full object-contain"
            />
          </Link>
        </div>

        <div className="text-center">
          <div className="text-base font-display font-black tracking-[0.24em] text-white drop-shadow-lg sm:text-2xl md:text-3xl">
            TGiCCC
          </div>
          <div className="mt-2 text-[11px] font-display font-semibold uppercase tracking-[0.28em] text-white sm:text-sm md:text-base">
            Telangana Integrated Command and Control Centre
          </div>
        </div>

        <div className="flex justify-end">
          <Link to="/" className="inline-flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-slate-950/60 p-1 shadow-elevated animate-glow-pulse">
            <img
              src={logoTgiccc}
              alt="TGiCCC – Telangana Integrated Command and Control Centre"
              className="h-full w-full rounded-full object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
