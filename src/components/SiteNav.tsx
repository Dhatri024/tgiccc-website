import { Link } from "@tanstack/react-router";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

type NavItem = { label: string; to: string; children?: { label: string; to: string }[] };

const items: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Vision & Mission", to: "/vision-mission" },
      { label: "Director's Message", to: "/directors-message" },
      { label: "Impacts & Benefits", to: "/impacts-benefits" },
      { label: "Structure & Legitimacy of TGiCCC", to: "/structure-legitimacy" },
    ],
  },
  {
    label: "Organization",
    to: "/organization",
    children: [
      { label: "Leadership", to: "/organization" },
      { label: "Departments", to: "/organization" },
    ],
  },
  {
    label: "TGiCCC Info",
    to: "/tgiccc-info",
    children: [
      { label: "Capabilities", to: "/tgiccc-info" },
      { label: "Infrastructure", to: "/tgiccc-info" },
    ],
  },
  {
    label: "Media & Publications",
    to: "/media",
    children: [
      { label: "News", to: "/media" },
      { label: "Press Releases", to: "/media" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-[88px] sm:top-[112px] z-40 border-b border-border glass-light">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4">
        {/* Desktop */}
        <ul className="hidden lg:flex items-center">
          {items.map((item) => (
            <li key={item.label} className="group relative">
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="flex items-center gap-1 px-4 py-4 text-sm font-medium text-foreground/80 transition-colors hover:text-navy data-[status=active]:text-navy data-[status=active]:font-semibold"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                <span className="absolute inset-x-3 bottom-2 h-0.5 origin-left scale-x-0 bg-gradient-teal transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
              {item.children && (
                <div className="invisible absolute left-2 top-full w-56 translate-y-1 rounded-xl border border-border bg-popover p-2 opacity-0 shadow-elevated transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      to={c.to}
                      className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-navy"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-3 text-navy"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Dial 112 */}
        <a
          href="tel:112"
          className="flex items-center gap-2 rounded-full bg-destructive px-4 py-2 my-2 text-sm font-bold text-destructive-foreground shadow-[0_0_24px_-4px_oklch(0.62_0.24_25/0.7)] transition-transform hover:scale-105"
        >
          <Phone className="h-4 w-4 animate-pulse" />
          Dial 112
        </a>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-popover px-4 py-3">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
