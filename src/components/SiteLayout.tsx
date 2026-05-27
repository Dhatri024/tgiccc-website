import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 animate-fade-up">
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-teal">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-white/75 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
