import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Target, Eye, Award, Shield, Sparkles, Monitor, Server, Globe2, Activity, Users, Database, Link2, Satellite } from "lucide-react";

export const Route = createFileRoute("/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — TGiCCC" },
      { name: "description", content: "Vision and mission of the Telangana Integrated Command and Control Centre." },
      { property: "og:title", content: "Vision & Mission — TGiCCC" },
      { property: "og:description", content: "Our vision for a digitally empowered Telangana and mission to deliver real-time surveillance and emergency response." },
    ],
  }),
  component: VisionMissionPage,
});

function VisionMissionPage() {
  const cardStyles = [
    "bg-gradient-to-br from-slate-900/5 via-slate-100 to-slate-50 border-slate-200",
    "bg-gradient-to-br from-slate-800/5 via-slate-100 to-slate-50 border-slate-200",
    "bg-gradient-to-br from-blue-900/5 via-blue-100 to-blue-50 border-blue-200",
    "bg-gradient-to-br from-cyan-900/5 via-cyan-100 to-cyan-50 border-cyan-200",
    "bg-gradient-to-br from-rose-900/5 via-rose-100 to-rose-50 border-rose-200",
    "bg-gradient-to-br from-emerald-900/5 via-emerald-100 to-emerald-50 border-emerald-200",
    "bg-gradient-to-br from-amber-900/5 via-amber-100 to-amber-50 border-amber-200",
    "bg-gradient-to-br from-violet-900/5 via-violet-100 to-violet-50 border-violet-200",
    "bg-gradient-to-br from-fuchsia-900/5 via-fuchsia-100 to-fuchsia-50 border-fuchsia-200",
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="Vision & Mission"
        subtitle="Our guiding principles for a safer, more connected Telangana."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Vision & Mission - Single Unique Design */}
            <div className="md:col-span-2 relative overflow-hidden rounded-[3rem] border border-purple-200/50 bg-gradient-to-br from-purple-50 via-white to-violet-50 p-12 shadow-xl">
              {/* Background decorative elements */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-purple-200/30 to-violet-300/30 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-gradient-to-br from-violet-200/40 to-purple-300/40 blur-2xl" />

              <div className="relative">
                <div className="flex items-center justify-center gap-6 mb-8">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-2xl shadow-purple-500/25">
                    <Eye className="h-10 w-10" />
                  </div>
                  <div className="h-px w-16 bg-gradient-to-r from-purple-300 to-violet-300" />
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-2xl shadow-violet-500/25">
                    <Target className="h-10 w-10" />
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-purple-800 bg-clip-text text-transparent mb-8">
                    Vision & Mission
                  </h2>

                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                      It enables the collation of information and collaborative monitoring, thus helping in the analysis of data and providing actionable information with approved visualisation for quicker decision-making, intelligent operation capabilities shall ensure integrated data visualisation, real-time collaboration, and deep analytics that can help different stakeholders prepare for exigencies, coordinate, and manage response efforts, and enhance the ongoing efficiency of operations.
                    </p>
                  </div>
                </div>

                {/* Decorative bottom elements */}
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                    <div className="h-2 w-8 rounded-full bg-gradient-to-r from-purple-400 to-violet-400" />
                    <div className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="h-2 w-8 rounded-full bg-gradient-to-r from-violet-400 to-purple-400" />
                    <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="text-center">
              <h3 className="font-display text-3xl font-bold text-navy-deep mb-4">Core Objectives</h3>
              <p className="text-center text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
                Telangana State Integrated Command and Control Centre fulfils the following objectives:
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Data & Tech Fusion",
                  icon: Sparkles,
                  text: "Fusion of Data, Information & Communication Technology infrastructure, and information systems to create a unified platform.",
                },
                {
                  title: "Unified Monitoring",
                  icon: Monitor,
                  text: "Link various ground-level security infrastructure and information systems for remote monitoring with a single view of actionable intelligence.",
                },
                {
                  title: "Shared Services",
                  icon: Users,
                  text: "Host shared services, centres of excellence, and citizen feedback centres with KPI monitoring at district and state levels.",
                },
                {
                  title: "Flexible & Scalable",
                  icon: Server,
                  text: "Technology fusion enables virtual consolidation of multiple agencies at one location with shared systems and specific business rules.",
                },
                {
                  title: "Disaster Response",
                  icon: Activity,
                  text: "Combat natural disasters and large-scale public events through specialized solution interventions and predefined Standard Operating Procedures (SOPs).",
                },
                {
                  title: "Multi-Agency Coordination",
                  icon: Link2,
                  text: "Solution interventions act as a force multiplier enabling coordinated response, information sharing, and situational awareness across agencies.",
                },
                {
                  title: "Information Infrastructure",
                  icon: Database,
                  text: "Entirely focus on the necessary structures, processes, and tools in place to support the gathering, processing, analysis, and dissemination of information.",
                },
                {
                  title: "Breaking Barriers & Collaboration",
                  icon: Globe2,
                  text: "Enable breaking down barriers between government agencies and provide a mechanism for government, public and private agencies to collaborate with a common purpose to safeguard people.",
                },
                {
                  title: "Centralized Communication & Monitoring",
                  icon: Satellite,
                  text: "24X7 Integrated Communications Centre with LTE, ROIP, UHF/VHF networks, real-time monitoring and disaster management systems.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${cardStyles[index]}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-cyan text-white shadow-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="font-display text-lg font-semibold text-navy-deep">{item.title}</h4>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/75">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}