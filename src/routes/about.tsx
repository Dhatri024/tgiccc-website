import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Target, Eye, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TGiCCC" },
      { name: "description", content: "About the Telangana Integrated Command and Control Centre — vision, mission and mandate." },
      { property: "og:title", content: "About — TGiCCC" },
      { property: "og:description", content: "Vision, mission and mandate of TGiCCC." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="A Unified Command for a Safer Telangana"
        subtitle="TGiCCC consolidates police, fire, medical and disaster management services into one intelligent, always-on command hub."
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          {[
            { icon: Eye, title: "Vision", body: "A digitally empowered Telangana where citizens are protected by intelligent, always-on infrastructure." },
            { icon: Target, title: "Mission", body: "Deliver real-time surveillance, rapid emergency response and data-driven decision-making across the state." },
            { icon: Award, title: "Mandate", body: "Operate as the 24/7 nerve centre integrating policing, traffic, civic and disaster response services." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-elevated transition-shadow">
              <Icon className="h-8 w-8 text-teal" />
              <h3 className="mt-5 font-display text-xl font-bold text-navy-deep">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{body}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-4xl px-6 mt-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-deep">Our Story</h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            Established to spearhead a digitally empowered Telangana, TGiCCC operates 24/7 as the
            central hub for real-time surveillance, emergency response and public safety. By
            consolidating police, fire, medical, and disaster management services, we leverage
            advanced AI, data analytics, and collaborative monitoring to provide actionable
            insights — fostering rapid, technology-driven decision-making to enhance operational
            efficiency and protect citizens across the state.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
