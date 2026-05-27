import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  BarChart3,
  Users,
  Phone,
  Camera,
  TrafficCone,
  Database,
  Building2,
  Sun,
  ServerCog,
} from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-tgiccc.png";
import logoGov from "@/assets/logo-telangana-gov.png";
import logoPolice from "@/assets/logo-telangana-police.png";
import heroImg from "@/assets/hero-control-room.jpg";
import building from "@/assets/tgiccc-building.jpg";
import cm from "@/assets/leader-cm.png";
import dgp from "@/assets/leader-dgp.png";
import director from "@/assets/leader-director.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TGiCCC — Telangana Integrated Command and Control Centre" },
      {
        name: "description",
        content:
          "TGiCCC is the central nerve centre for real-time monitoring, emergency response, traffic and civic services across Telangana.",
      },
      { property: "og:title", content: "TGiCCC — Telangana Integrated Command and Control Centre" },
      {
        property: "og:description",
        content: "Speed. Technology. Service. The 24/7 command hub of Telangana.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <Leadership />
      <Capabilities />
      <CoreFunctions />
      <Infrastructure />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/60 to-navy-deep" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36 text-center">
        <div className="flex items-center justify-center gap-8 animate-zoom-in">
          <img
            src={logoGov}
            alt="Government of Telangana"
            className="h-32 w-32 md:h-40 md:w-40 rounded-full object-contain shadow-elevated"
          />
          <img
            src={logo}
            alt="TGiCCC"
            className="h-64 w-64 md:h-80 md:w-80 rounded-full object-contain animate-glow-pulse shadow-elevated"
          />
          <img
            src={logoPolice}
            alt="Telangana Police"
            className="h-32 w-32 md:h-40 md:w-40 rounded-full object-contain shadow-elevated"
          />
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-teal animate-fade-up">
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
          Live · 24 / 7 Operations
        </div>

        <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] animate-fade-up">
          Welcome To
          <span className="block mt-2 text-gradient-gold">
            Telangana Integrated
          </span>
          <span className="block text-gradient-teal">Command And Control Centre</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl font-display tracking-wide text-gold animate-fade-up">
          Speed · Technology · Service
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-white/75 leading-relaxed animate-fade-up">
          TGiCCC functions as the central nerve centre for real-time monitoring, coordination and
          decision-making across emergency response, policing, traffic management and civic services
          in Telangana.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-up">
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-gold-glow transition-transform hover:scale-105"
          >
            Explore TGiCCC
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:112"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 glass px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-destructive hover:border-destructive"
          >
            <Phone className="h-4 w-4" />
            Emergency · Dial 112
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-4 sm:grid-cols-4 max-w-4xl mx-auto animate-fade-up">
          {[
            ["24/7", "Operations"],
            ["441", "Auditorium Seats"],
            ["0.55 MW", "Solar Capacity"],
            ["Tier-3", "Data Center"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-2xl glass p-5 text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-gradient-teal">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="group relative overflow-hidden rounded-3xl shadow-elevated">
          <img
            src={building}
            alt="TGiCCC building"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            width={1280}
            height={896}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass p-5 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-teal">Headquarters</div>
            <div className="mt-1 font-display text-lg font-semibold">Banjara Hills, Hyderabad</div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-teal">
            <ShieldCheck className="h-3.5 w-3.5" />
            About TGiCCC
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold text-navy-deep">
            About TGiCCC
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
            <p>
              Established to spearhead a digitally empowered Telangana, the Telangana Integrated
              Command and Control Centre (TGiCCC) operates 24/7 as the central hub for real-time
              surveillance, emergency response, and public safety. By consolidating police, fire,
              medical, and disaster management services, we leverage advanced AI, data analytics, and
              collaborative monitoring to provide actionable insights, fostering rapid,
              technology-driven decision-making to enhance operational efficiency and protect
              citizens across the state.
            </p>
          </div>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const leaders = [
  { name: "Sri. Anumula Revanth Reddy", role: "Chief Minister & Home Minister", img: cm },
  { name: "Sri. B. Shivadhar Reddy, IPS", role: "Director General of Police", img: dgp },
  { name: "Sri. V. B. Kamalasan Reddy, Retd. IPS", role: "Director, TGiCCC", img: director },
];

function Leadership() {
  return (
    <section className="relative bg-gradient-to-b from-background to-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Leadership" title="Our Leadership" />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {leaders.map((l) => (
            <div
              key={l.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-teal/60 to-transparent" />
              <div className="relative mx-auto h-36 w-36">
                <div className="absolute inset-0 rounded-full bg-gradient-teal blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
                <img
                  src={l.img}
                  alt={l.name}
                  className={`relative h-36 w-36 rounded-full ring-4 ring-card shadow-elevated ${
                    l.img === cm
                      ? 'bg-slate-800 object-cover object-[50%_200%]'
                      : 'bg-slate-950 object-cover object-[50%_60%]'
                  }`}
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-navy-deep">{l.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-wider text-teal">{l.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const capabilities = [
  {
    icon: BarChart3,
    title: "Data Visualization",
    desc: "Interactive dashboards turning live signals into actionable intelligence on a unified video wall.",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    desc: "Multi-agency coordination with synchronized situational awareness across police, fire and medical.",
  },
  {
    icon: Activity,
    title: "Deep Analytics",
    desc: "AI-powered crime, traffic and civic analytics that surface patterns and predict incidents.",
  },
];

function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24 text-white">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="TGiCCC Capabilities"
          dark
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_18px_80px_-30px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_80px_-20px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-teal/20 blur-3xl opacity-70" />
              <div className="relative">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal to-cyan text-white shadow-[0_15px_30px_rgba(3,201,169,0.3)]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const coreFunctions = [
  { icon: Phone, title: "Unified Emergency Response", desc: "Single point dispatch via Dial 112 across the state." },
  { icon: Camera, title: "Video Surveillance & Analytics", desc: "City-wide CCTV grid with AI-driven incident detection." },
  { icon: TrafficCone, title: "Traffic Management", desc: "Adaptive signaling, congestion control and violation detection." },
  { icon: Database, title: "Data & Crime Analytics", desc: "Predictive modelling and pattern recognition at scale." },
];

function CoreFunctions() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Core Functions" title="Operational Pillars" />
        <div className="mt-14 relative">
          <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-gradient-to-b from-teal via-border to-transparent md:block md:left-1/2" />
          <div className="space-y-10">
            {coreFunctions.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`relative grid items-center gap-6 md:grid-cols-2 ${
                  i % 2 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`flex ${i % 2 ? "md:justify-start" : "md:justify-end"}`}>
                  <div
                    className={`group max-w-md rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-elevated ${
                      title === "Unified Emergency Response" || title === "Video Surveillance & Analytics" || title === "Traffic Management" || title === "Data & Crime Analytics" ? "cursor-pointer" : ""
                    }`}
                    onClick={() => (title === "Unified Emergency Response" || title === "Video Surveillance & Analytics" || title === "Traffic Management" || title === "Data & Crime Analytics") && setExpandedItem(expandedItem === title ? null : title)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-teal text-navy-deep shadow-glow">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-navy-deep">{title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">{desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex md:justify-center relative">
                  {expandedItem === "Unified Emergency Response" && i === 0 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-80 rounded-lg border border-teal/40 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-lg z-10 whitespace-normal">
                      <p className="text-sm text-white/90 leading-relaxed">
                        Integrated handling of police, fire, medical, women & child safety, and disaster emergencies through a single command platform ensuring rapid response.
                      </p>
                    </div>
                  )}
                  {expandedItem === "Video Surveillance & Analytics" && i === 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-80 rounded-lg border border-teal/40 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-lg z-10 whitespace-normal">
                      <p className="text-sm text-white/90 leading-relaxed">
                        Real-time CCTV monitoring supported by AI-based analytics including crowding, loitering, stopped vehicles, and intrusion detection.
                      </p>
                    </div>
                  )}
                  {expandedItem === "Traffic Management" && i === 2 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-80 rounded-lg border border-teal/40 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-lg z-10 whitespace-normal">
                      <p className="text-sm text-white/90 leading-relaxed">
                        Live traffic flow monitoring, congestion alerts, violation analysis, and operational support to traffic police units.
                      </p>
                    </div>
                  )}
                  {expandedItem === "Data & Crime Analytics" && i === 3 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-80 rounded-lg border border-teal/40 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-lg z-10 whitespace-normal">
                      <p className="text-sm text-white/90 leading-relaxed">
                        Analytical insights from CCTNS and allied systems to support predictive policing and evidence-based decisions.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const infra = [
  { icon: Building2, title: "High-Capacity Auditorium", value: "441", caption: "Seating capacity" },
  { icon: Sun, title: "Eco-Friendly Infrastructure", value: "0.55 MW", caption: "Solar capacity" },
  { icon: ServerCog, title: "Tier-3 Data Center", value: "99.98%", caption: "Uptime SLA" },
];

function Infrastructure() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Infrastructure" title="World-Class Facility" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {infra.map(({ icon: Icon, title, value, caption }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated"
            >
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-gold opacity-20 blur-3xl transition-opacity group-hover:opacity-40" />
              <Icon className="h-8 w-8 text-teal" />
              <div className="mt-6 font-display text-4xl font-bold text-navy-deep">{value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{caption}</div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="text-center">
      <div
        className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em] ${
          dark ? "glass text-teal" : "bg-teal/10 text-teal"
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`mt-4 font-display text-3xl md:text-5xl font-bold ${
          dark ? "text-white" : "text-navy-deep"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
