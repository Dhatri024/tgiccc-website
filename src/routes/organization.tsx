import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import cm from "@/assets/leader-cm.png";
import dgp from "@/assets/leader-dgp.png";
import director from "@/assets/leader-director.png";

export const Route = createFileRoute("/organization")({
  head: () => ({
    meta: [
      { title: "Organization — TGiCCC" },
      { name: "description", content: "Leadership and organisational structure of TGiCCC." },
      { property: "og:title", content: "Organization — TGiCCC" },
      { property: "og:description", content: "Meet the leadership steering Telangana's command centre." },
    ],
  }),
  component: OrgPage,
});

const leaders = [
  { name: "Sri. Anumula Revanth Reddy", role: "Chief Minister & Home Minister", img: cm },
  { name: "Sri. B. Shivadhar Reddy, IPS", role: "Director General of Police", img: dgp },
  { name: "Sri. V. B. Kamalasan Reddy, Retd. IPS", role: "Director, TGiCCC", img: director },
];

function OrgPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Organization"
        title="Leadership Steering The Mission"
        subtitle="Distinguished leaders driving Telangana's vision for a technology-led, citizen-first command and control ecosystem."
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          {leaders.map((l) => (
            <div key={l.name} className="group rounded-3xl border border-border bg-card p-8 text-center shadow-sm hover:-translate-y-2 hover:shadow-elevated transition-all duration-500">
              <div className="relative mx-auto h-40 w-40">
                <div className="absolute inset-0 rounded-full bg-gradient-teal blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
                <img src={l.img} alt={l.name} loading="lazy" width={512} height={512}
                  className="relative h-40 w-40 rounded-full object-cover ring-4 ring-card shadow-elevated" />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-navy-deep">{l.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-wider text-teal">{l.role}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
