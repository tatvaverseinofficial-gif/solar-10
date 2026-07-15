"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Menu,
  Phone,
  Sun,
  X,
  Home,
  Building2,
  Factory,
  ClipboardCheck,
  Wrench,
  BatteryCharging,
} from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const iconMap = {
  Home,
  Building2,
  Factory,
  ClipboardCheck,
  Wrench,
  BatteryCharging,
} as const;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", mega: true },
  { href: "/projects", label: "Projects" },
  { href: "/calculator", label: "Calculator" },
  { href: "/government-subsidy", label: "Subsidy" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  const linkIdle = scrolled
    ? "text-muted-foreground hover:text-solar-navy"
    : "text-white/80 hover:text-white";
  const linkActive = scrolled ? "text-solar-navy" : "text-white";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/40 bg-white/80 shadow-[var(--shadow-sm)] backdrop-blur-2xl"
          : "bg-transparent"
      )}
    >
      <div className="container-premium flex h-[4.25rem] items-center justify-between md:h-[5rem]">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-solar-yellow text-solar-navy-deep shadow-[var(--shadow-glow)] transition duration-300 group-hover:scale-105">
            <Sun className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span
            className={cn(
              "font-display text-lg font-bold tracking-tight md:text-xl transition-colors",
              scrolled ? "text-solar-navy" : "text-white"
            )}
          >
            Aarohan
            <span className="text-solar-yellow"> Solar</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.mega ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button
                  className={cn(
                    "relative flex items-center gap-1 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
                    pathname.startsWith("/services") ? linkActive : linkIdle
                  )}
                >
                  Services
                  <ChevronDown className={cn("h-3.5 w-3.5 transition", megaOpen && "rotate-180")} />
                  {pathname.startsWith("/services") && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-solar-yellow" />
                  )}
                </button>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full z-50 w-[680px] -translate-x-1/2 pt-4"
                    >
                      <div className="overflow-hidden rounded-3xl border border-solar-line bg-white/95 p-3 shadow-[var(--shadow-lg)] backdrop-blur-xl">
                        <div className="grid grid-cols-2 gap-1.5">
                          {services.map((service) => {
                            const Icon =
                              iconMap[service.icon as keyof typeof iconMap] ?? Home;
                            return (
                              <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                className="group/item flex gap-3 rounded-2xl p-3.5 transition hover:bg-solar-mist"
                              >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-solar-cream text-solar-navy transition group-hover/item:bg-solar-yellow">
                                  <Icon className="h-5 w-5" />
                                </span>
                                <span>
                                  <span className="block text-sm font-semibold text-solar-navy">
                                    {service.title}
                                  </span>
                                  <span className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                                    {service.description.slice(0, 72)}…
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="mt-2 border-t border-solar-line px-3 py-3">
                          <Link
                            href="/services"
                            className="text-sm font-semibold text-solar-blue transition hover:text-solar-navy"
                          >
                            View all services →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
                  pathname === link.href ? linkActive : linkIdle
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-solar-yellow" />
                )}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={`tel:${company.phoneRaw}`}
            className={cn(
              "hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition lg:flex",
              scrolled ? "text-solar-navy hover:bg-muted" : "text-white hover:bg-white/10"
            )}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-solar-yellow/15 text-solar-yellow">
              <Phone className="h-3.5 w-3.5" />
            </span>
            {company.phone}
          </a>
          <Button asChild variant="accent" size="sm" className="hidden md:inline-flex">
            <Link href="/contact">Get Free Quote</Link>
          </Button>
          <button
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-2xl xl:hidden",
              scrolled
                ? "bg-solar-mist text-solar-navy"
                : "bg-white/15 text-white backdrop-blur-sm"
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-solar-navy-deep/55 backdrop-blur-md xl:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,380px)] flex-col bg-white shadow-[var(--shadow-lg)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-solar-line px-5 py-5">
                <span className="font-display text-lg font-bold text-solar-navy">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl p-2.5 hover:bg-muted"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-3 py-4">
                {navLinks.map((link) =>
                  link.mega ? (
                    <div key={link.href} className="mb-1">
                      <button
                        className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-base font-semibold text-solar-navy"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                      >
                        Services
                        <ChevronDown
                          className={cn("h-4 w-4 transition", mobileServicesOpen && "rotate-180")}
                        />
                      </button>
                      {mobileServicesOpen && (
                        <div className="mb-2 ml-3 space-y-1 border-l-2 border-solar-yellow/40 pl-3">
                          {services.map((s) => (
                            <Link
                              key={s.id}
                              href={`/services/${s.slug}`}
                              className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                            >
                              {s.title}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-solar-blue"
                          >
                            All services
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-2xl px-4 py-3.5 text-base font-semibold text-solar-navy hover:bg-solar-mist"
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="mt-3 grid gap-1 border-t border-solar-line pt-4">
                  {[
                    ["/gallery", "Gallery"],
                    ["/faq", "FAQ"],
                    ["/testimonials", "Testimonials"],
                  ].map(([href, label]) => (
                    <Link
                      key={href}
                      href={href}
                      className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-3 border-t border-solar-line p-5">
                <Button asChild variant="accent" className="w-full">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-solar-navy"
                >
                  <Phone className="h-4 w-4 text-solar-yellow" />
                  {company.phone}
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
