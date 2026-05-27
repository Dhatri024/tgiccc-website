import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { TrendingUp, Clock, Shield, Users, Zap, Award } from "lucide-react";

export const Route = createFileRoute("/impacts-benefits")({
  head: () => ({
    meta: [
      { title: "Impacts & Benefits — TGiCCC" },
      { name: "description", content: "The measurable impacts and benefits of Telangana Integrated Command and Control Centre." },
      { property: "og:title", content: "Impacts & Benefits — TGiCCC" },
      { property: "og:description", content: "How TGiCCC is transforming public safety and emergency response in Telangana." },
    ],
  }),
  component: ImpactsBenefitsPage,
});

function ImpactsBenefitsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="Impacts & Benefits"
        subtitle="Measuring our success in enhancing public safety and service delivery."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Key Metrics */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-navy-deep text-center mb-12">Measurable Impact</h2>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { value: "40%", label: "Faster Emergency Response", icon: Clock },
                { value: "60%", label: "Reduction in Response Time", icon: TrendingUp },
                { value: "24/7", label: "Operational Coverage", icon: Shield },
                { value: "100%", label: "State-wide Integration", icon: Users },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm">
                  <Icon className="h-8 w-8 text-teal mx-auto mb-4" />
                  <div className="font-display text-3xl font-bold text-navy-deep">{value}</div>
                  <div className="mt-2 text-sm text-foreground/70">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Rapid Response",
                desc: "Unified command platform enables faster coordination between police, fire, and medical services, reducing emergency response times significantly.",
                benefits: ["Single point dispatch", "Real-time coordination", "Cross-agency communication"]
              },
              {
                icon: Shield,
                title: "Enhanced Safety",
                desc: "Proactive surveillance and AI-driven analytics prevent incidents and enable rapid intervention when emergencies occur.",
                benefits: ["Predictive analytics", "24/7 monitoring", "Early warning systems"]
              },
              {
                icon: Users,
                title: "Citizen Services",
                desc: "Integrated services provide citizens with seamless access to emergency support through the unified Dial 112 system.",
                benefits: ["Single emergency number", "Multi-service integration", "Improved accessibility"]
              },
              {
                icon: Award,
                title: "Operational Efficiency",
                desc: "Data-driven decision making and automated processes optimize resource allocation and response strategies.",
                benefits: ["Resource optimization", "Evidence-based decisions", "Performance analytics"]
              },
              {
                icon: TrendingUp,
                title: "Economic Impact",
                desc: "Reduced incident response times and improved safety contribute to economic stability and business confidence.",
                benefits: ["Reduced downtime", "Property protection", "Business continuity"]
              },
              {
                icon: Clock,
                title: "24/7 Reliability",
                desc: "Always-on infrastructure ensures consistent service delivery and immediate response capability around the clock.",
                benefits: ["Continuous monitoring", "Instant alerts", "Round-the-clock support"]
              },
            ].map(({ icon: Icon, title, desc, benefits }) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-elevated transition-shadow">
                <Icon className="h-8 w-8 text-teal" />
                <h3 className="mt-4 font-display text-xl font-bold text-navy-deep">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{desc}</p>
                <ul className="mt-4 space-y-2">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Success Stories */}
          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold text-navy-deep text-center mb-12">Success Stories</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Multi-Agency Rescue Operation",
                  desc: "Coordinated response involving police, fire, and medical services saved 15 lives during a major accident, with response time reduced by 45%.",
                  impact: "15 lives saved, 45% faster response"
                },
                {
                  title: "Predictive Crime Prevention",
                  desc: "AI analytics identified high-risk areas, enabling preventive police deployment that reduced incidents by 30% in target zones.",
                  impact: "30% reduction in targeted areas"
                },
              ].map(({ title, desc, impact }) => (
                <div key={title} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <h3 className="font-display text-xl font-bold text-navy-deep">{title}</h3>
                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1 text-sm font-medium text-teal">
                    <TrendingUp className="h-4 w-4" />
                    {impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}