import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-tgiccc.png";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-gradient-header text-white">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <img src={logo} alt="TGiCCC" className="h-20 w-20 rounded-full" loading="lazy" />
          <h3 className="mt-4 font-display text-xl font-bold text-gradient-gold">TGiCCC</h3>
          <p className="mt-3 max-w-xs text-sm text-white/70 leading-relaxed">
            Telangana State Integrated Command and Control Centre — the central nerve centre for
            real-time monitoring, coordination and decision-making.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="flex h-9 w-9 items-center justify-center rounded-full glass transition-transform hover:scale-110 hover:text-teal"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Quick Links</h4>
          <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm text-white/80">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Organization", "/organization"],
              ["TGiCCC Info", "/tgiccc-info"],
              ["Media", "/media"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <li key={label}>
                <Link to={to} className="hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              <span>
                TGiCCC, Road No. 12<br />
                Banjara Hills, Hyderabad<br />
                Telangana – 500034
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-gold" />
              <a href="tel:8712674000" className="hover:text-gold">8712674000</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-gold" />
              <a href="mailto:info@tgiccc.telangana.gov.in" className="hover:text-gold">
                info@tgiccc.telangana.gov.in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/60 md:flex-row">
          <span>© {new Date().getFullYear()} Telangana Integrated Command and Control Centre. All rights reserved.</span>
          <span>Government of Telangana</span>
        </div>
      </div>
    </footer>
  );
}
