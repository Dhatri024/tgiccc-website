import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { BarChart3, Users, Activity, Building2, Sun, ServerCog } from "lucide-react";

export const Route = createFileRoute("/tgiccc-info")({
  head: () => ({
    meta: [
      { title: "TGiCCC Info — Capabilities & Infrastructure" },
      { name: "description", content: "TGiCCC capabilities, core functions and world-class infrastructure." },
      { property: "og:title", content: "TGiCCC Info" },
      { property: "og:description", content: "Capabilities and infrastructure of Telangana's command centre." },
    ],
  }),
  component: InfoPage,
});

function InfoPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="TGiCCC Info"
        title="Capabilities & Infrastructure"
        subtitle="Inside the systems, technology and facilities powering 24/7 operations across Telangana."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl font-bold text-navy-deep">Capabilities</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { icon: BarChart3, title: "Data Visualization", desc: "Live dashboards on a unified video wall." },
              { icon: Users, title: "Real-time Collaboration", desc: "Synchronized multi-agency response." },
              { icon: Activity, title: "Deep Analytics", desc: "AI for crime, traffic and civic patterns." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-elevated transition-shadow">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-teal text-navy-deep shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-deep">{title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-20 font-display text-3xl font-bold text-navy-deep">Infrastructure</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { icon: Building2, title: "Auditorium", value: "441 Seats" },
              { icon: Sun, title: "Solar", value: "0.55 MW" },
              { icon: ServerCog, title: "Data Center", value: "Tier-3" },
            ].map(({ icon: Icon, title, value }) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <Icon className="h-8 w-8 text-gold" />
                <div className="mt-4 font-display text-3xl font-bold text-navy-deep">{value}</div>
                <div className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
