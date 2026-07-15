import Link from "next/link";
import { Mail, MapPin, Phone, Sun } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/shared/SocialIcons";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/calculator", label: "Solar Calculator" },
  { href: "/government-subsidy", label: "Government Subsidy" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-solar-navy-deep text-white">
      <div className="pointer-events-none absolute inset-0 mesh-pattern opacity-20" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-solar-yellow/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-solar-green/15 blur-3xl" />

      <div className="container-premium relative py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="mb-6 flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-solar-yellow text-solar-navy-deep shadow-[var(--shadow-glow)]">
                <Sun className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl font-bold tracking-tight">
                Aarohan<span className="text-solar-yellow"> Solar</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/65">
              {company.description}
            </p>
            <div className="mt-7 flex gap-2.5">
              {[
                { href: company.social.facebook, Icon: FacebookIcon, label: "Facebook" },
                { href: company.social.instagram, Icon: InstagramIcon, label: "Instagram" },
                { href: company.social.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
                { href: company.social.youtube, Icon: YoutubeIcon, label: "YouTube" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-solar-yellow/40 hover:bg-solar-yellow hover:text-solar-navy-deep"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5">
            <div>
              <h4 className="eyebrow mb-5 text-solar-yellow">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="eyebrow mb-5 text-solar-yellow">Services</h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-white/65 transition hover:text-white"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow mb-5 text-solar-yellow">Contact & Newsletter</h4>
            <ul className="mb-7 space-y-4 text-sm text-white/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-solar-yellow" />
                <span>{company.fullAddress}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-solar-yellow" />
                <a href={`tel:${company.phoneRaw}`} className="transition hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-solar-yellow" />
                <a href={`mailto:${company.email}`} className="transition hover:text-white">
                  {company.email}
                </a>
              </li>
            </ul>
            <form className="flex gap-2" action="#">
              <Input
                type="email"
                placeholder="Your email"
                className="border-white/15 bg-white/8 text-white placeholder:text-white/35"
                aria-label="Email for newsletter"
              />
              <Button type="button" variant="accent">
                Join
              </Button>
            </form>
            <p className="mt-2.5 text-xs text-white/35">Monthly solar insights. No spam.</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
