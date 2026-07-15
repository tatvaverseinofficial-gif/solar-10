"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-4",
            light ? "text-solar-yellow" : "text-solar-blue"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-[1.85rem] font-bold tracking-tight sm:text-4xl md:text-[2.65rem] text-balance",
          light ? "text-white" : "text-solar-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-[0.98rem] leading-relaxed md:text-lg md:leading-relaxed",
            light ? "text-white/72" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
      {align === "center" && (
        <div className={cn("divider-glow mx-auto mt-8 w-24", light && "opacity-70")} />
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden gradient-hero pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0 mesh-pattern opacity-25" />
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-solar-yellow/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-solar-green/15 blur-3xl" />

      <div className="container-premium relative">
        {breadcrumbs && (
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/55"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/30">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="eyebrow mb-4 text-solar-yellow">{eyebrow}</p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-[3.5rem] text-balance"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}

export function CTASection({
  title = "Ready to cut your electricity bill with solar?",
  description = "Get a free site survey and a transparent proposal with savings estimates, subsidy guidance, and timelines — tailored to your roof and tariff.",
  primaryHref = "/contact",
  primaryLabel = "Request Free Quote",
  secondaryHref = "/calculator",
  secondaryLabel = "Try Savings Calculator",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/misc/cta-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-solar-navy-deep/92 via-solar-navy/88 to-solar-navy-deep/90" />
      <div className="pointer-events-none absolute inset-0 mesh-pattern opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[60%] -translate-x-1/2 rounded-full bg-solar-yellow/20 blur-3xl" />

      <div className="container-premium relative text-center">
        <p className="eyebrow mb-4 text-solar-yellow">Next step</p>
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold text-white md:text-5xl text-balance">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link
            href={primaryHref}
            className="btn-shine inline-flex h-13 min-h-[3.35rem] items-center justify-center gap-2 rounded-2xl bg-solar-yellow px-8 text-sm font-semibold text-solar-navy-deep shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 hover:bg-solar-gold"
          >
            {primaryLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex h-13 min-h-[3.35rem] items-center justify-center rounded-2xl border border-white/30 px-8 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
