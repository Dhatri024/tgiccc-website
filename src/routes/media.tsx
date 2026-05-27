import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Newspaper, Calendar } from "lucide-react";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media & Publications — TGiCCC" },
      { name: "description", content: "News, press releases and publications from TGiCCC." },
      { property: "og:title", content: "Media & Publications — TGiCCC" },
      { property: "og:description", content: "Latest from Telangana's command centre." },
    ],
  }),
  component: MediaPage,
});

const items = [
  { date: "May 2026", title: "TGiCCC expands AI-driven traffic analytics across Hyderabad", tag: "Press Release" },
  { date: "Apr 2026", title: "Joint drill: Police, Fire and EMS coordinated through TGiCCC", tag: "News" },
  { date: "Mar 2026", title: "Annual report on emergency response published", tag: "Publication" },
  { date: "Feb 2026", title: "TGiCCC inaugurates Tier-3 data centre upgrade", tag: "News" },
];

function MediaPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Media & Publications"
        title="Newsroom"
        subtitle="Updates, press releases and publications from the Telangana Integrated Command and Control Centre."
      />
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 space-y-4">
          {items.map((it) => (
            <article key={it.title} className="group flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-elevated hover:-translate-y-0.5 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Newspaper className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {it.date}
                    <span className="rounded-full bg-gold/15 px-2 py-0.5 text-gold">{it.tag}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-navy-deep group-hover:text-teal transition-colors">
                    {it.title}
                  </h3>
                </div>
              </div>
              <a href="#" className="text-sm font-semibold text-teal hover:underline shrink-0">Read →</a>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
