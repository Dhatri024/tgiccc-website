import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TGiCCC" },
      { name: "description", content: "Get in touch with the Telangana Integrated Command and Control Centre." },
      { property: "og:title", content: "Contact — TGiCCC" },
      { property: "og:description", content: "Address, phone and email for TGiCCC." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Get In Touch"
        subtitle="For queries, partnerships and media — reach out to the TGiCCC office."
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div className="space-y-5">
            {[
              { icon: MapPin, title: "Address", body: "TGiCCC, Road No. 12, Banjara Hills,\nHyderabad, Telangana – 500034" },
              { icon: Phone, title: "Phone", body: "8712674000" },
              { icon: Mail, title: "Email", body: "info@tgiccc.telangana.gov.in" },
              { icon: Clock, title: "Operations", body: "24 × 7 · 365 days" },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-teal text-navy-deep">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
                  <div className="mt-1 whitespace-pre-line text-sm font-medium text-navy-deep">{body}</div>
                </div>
              </div>
            ))}
          </div>

          <form className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h3 className="font-display text-2xl font-bold text-navy-deep">Send us a message</h3>
            <div className="mt-6 grid gap-4">
              <input className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal" placeholder="Full name" />
              <input className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal" placeholder="Email" type="email" />
              <input className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal" placeholder="Subject" />
              <textarea rows={5} className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal" placeholder="Your message" />
              <button type="button" className="rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-gold-glow hover:scale-[1.02] transition-transform">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
