import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Building2, Users, Shield, Award, FileText, Scale } from "lucide-react";

export const Route = createFileRoute("/structure-legitimacy")({
  head: () => ({
    meta: [
      { title: "Structure & Legitimacy — TGiCCC" },
      { name: "description", content: "Organizational structure and legal framework of Telangana Integrated Command and Control Centre." },
      { property: "og:title", content: "Structure & Legitimacy — TGiCCC" },
      { property: "og:description", content: "The organizational framework and legal foundation of TGiCCC." },
    ],
  }),
  component: StructureLegitimacyPage,
});

function StructureLegitimacyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="Structure & Legitimacy"
        subtitle="The organizational framework and legal foundation of TGiCCC."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Legal Foundation */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-navy-deep text-center mb-8">Legal Foundation</h2>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <Scale className="h-8 w-8 text-teal flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-deep">Government of Telangana Initiative</h3>
                  <p className="mt-3 text-foreground/80 leading-relaxed">
                    TGiCCC operates under the direct authority of the Government of Telangana, established as a specialized agency for integrated emergency management and public safety coordination. Our legitimacy stems from state government directives and operates within the framework of Telangana's governance structure.
                  </p>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-teal mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-navy-deep">State Government Mandate</h4>
                        <p className="text-sm text-foreground/70">Authorized by Government of Telangana for integrated command operations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-teal mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-navy-deep">Legal Authority</h4>
                        <p className="text-sm text-foreground/70">Exercising powers delegated by state authorities for emergency coordination</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Organizational Structure */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-navy-deep text-center mb-8">Organizational Structure</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "Leadership Council",
                  desc: "Strategic oversight and policy direction",
                  members: ["Director", "Deputy Directors", "Chief Advisors"]
                },
                {
                  icon: Shield,
                  title: "Operations Division",
                  desc: "24/7 command and control operations",
                  members: ["Emergency Response", "Surveillance Control", "Dispatch Coordination"]
                },
                {
                  icon: Building2,
                  title: "Technical Division",
                  desc: "Infrastructure and technology management",
                  members: ["Systems Administration", "Data Analytics", "IT Security"]
                },
              ].map(({ icon: Icon, title, desc, members }) => (
                <div key={title} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <Icon className="h-8 w-8 text-teal" />
                  <h3 className="mt-4 font-display text-xl font-bold text-navy-deep">{title}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{desc}</p>
                  <ul className="mt-4 space-y-2">
                    {members.map((member, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="h-1 w-1 rounded-full bg-teal flex-shrink-0" />
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Inter-Agency Integration */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-navy-deep text-center mb-8">Inter-Agency Integration</h2>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-navy-deep mb-6">Collaborative Framework</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                TGiCCC serves as the central coordination hub for multiple government agencies, ensuring seamless integration and unified response capabilities across Telangana's emergency management ecosystem.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Police & Law Enforcement",
                    agencies: ["Telangana Police", "Traffic Police", "Special Protection Units"]
                  },
                  {
                    title: "Emergency Services",
                    agencies: ["Fire & Emergency Services", "Medical Emergency", "Disaster Management"]
                  },
                  {
                    title: "Government Coordination",
                    agencies: ["District Administration", "Municipal Corporations", "Revenue Department"]
                  },
                  {
                    title: "Technical Partners",
                    agencies: ["Telangana State Technology Services", "Private Security Agencies", "Technology Providers"]
                  },
                ].map(({ title, agencies }) => (
                  <div key={title} className="border border-border rounded-xl p-6">
                    <h4 className="font-semibold text-navy-deep mb-3">{title}</h4>
                    <ul className="space-y-1">
                      {agencies.map((agency, i) => (
                        <li key={i} className="text-sm text-foreground/70 flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-teal flex-shrink-0" />
                          {agency}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Accountability & Oversight */}
          <div>
            <h2 className="font-display text-3xl font-bold text-navy-deep text-center mb-8">Accountability & Oversight</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Performance Monitoring",
                  desc: "Regular audits and performance reviews ensure operational excellence and service quality standards.",
                  features: ["Monthly performance reports", "Quality assurance audits", "Stakeholder feedback integration"]
                },
                {
                  title: "Legal Compliance",
                  desc: "All operations conducted within established legal frameworks and data protection regulations.",
                  features: ["Privacy compliance", "Data security protocols", "Legal oversight mechanisms"]
                },
              ].map(({ title, desc, features }) => (
                <div key={title} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <h3 className="font-display text-xl font-bold text-navy-deep">{title}</h3>
                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{desc}</p>
                  <ul className="mt-4 space-y-2">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-teal flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}