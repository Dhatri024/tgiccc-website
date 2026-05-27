import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Quote, Award, Users } from "lucide-react";
import director from "@/assets/leader-director.png";

export const Route = createFileRoute("/directors-message")({
  head: () => ({
    meta: [
      { title: "Director's Message — TGiCCC" },
      { name: "description", content: "Message from the Director of Telangana Integrated Command and Control Centre." },
      { property: "og:title", content: "Director's Message — TGiCCC" },
      { property: "og:description", content: "Insights from our Director on TGiCCC's mission and impact." },
    ],
  }),
  component: DirectorsMessagePage,
});

function DirectorsMessagePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="Director's Message"
        subtitle="Leading Telangana's transformation through integrated command and control."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Director's Photo */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <img
                    src={director}
                    alt="Director, TGiCCC"
                    className="w-full rounded-2xl object-cover"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-display text-lg font-bold text-navy-deep">Director</h3>
                    <p className="text-sm text-foreground/70">Telangana Integrated Command and Control Centre</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <Quote className="h-8 w-8 text-teal flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="font-display text-2xl font-bold text-navy-deep mb-6">A Message from Our Director</h2>
                    <div className="space-y-4 text-foreground/80 leading-relaxed">
                      <p>
                        As we stand at the forefront of Telangana's digital transformation, TGiCCC represents more than just a technological achievement—it embodies our commitment to citizen safety and service excellence.
                      </p>
                      <p>
                        Our integrated command and control centre operates 24/7, bringing together police, fire, medical, and disaster management services under one intelligent platform. Through advanced AI, real-time surveillance, and collaborative decision-making, we are creating a safer, more responsive Telangana.
                      </p>
                      <p>
                        The success of TGiCCC lies in our ability to anticipate challenges, coordinate responses, and deliver actionable insights that protect lives and property across the state. We are proud to serve as the nerve centre that keeps Telangana safe and connected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h3 className="font-display text-xl font-bold text-navy-deep mb-6">Key Achievements</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { icon: Users, title: "Unified Response", desc: "Integrated emergency services under single command" },
                    { icon: Award, title: "24/7 Operations", desc: "Round-the-clock monitoring and response capability" },
                    { icon: Quote, title: "AI Integration", desc: "Advanced analytics for predictive safety measures" },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <Icon className="h-6 w-6 text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-navy-deep">{title}</h4>
                        <p className="text-sm text-foreground/70 mt-1">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision Forward */}
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h3 className="font-display text-xl font-bold text-navy-deep mb-4">Looking Forward</h3>
                <p className="text-foreground/80 leading-relaxed">
                  As we continue to expand our capabilities and integrate emerging technologies, TGiCCC remains committed to our core mission: protecting Telangana's citizens through innovation, collaboration, and unwavering dedication to public safety. Together, we are building a future where technology serves humanity, and safety is proactive rather than reactive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}