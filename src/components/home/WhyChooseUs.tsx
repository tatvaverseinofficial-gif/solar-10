import { BadgeCheck, Headphones, Ruler, ScrollText } from "lucide-react";
import { SectionHeading } from "@/components/shared/Section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/Motion";

const reasons = [
  {
    icon: Ruler,
    title: "Design before pitch",
    description:
      "Shade analysis, structural checks, and bill-based sizing come before any high-pressure close.",
  },
  {
    icon: ScrollText,
    title: "Transparent proposals",
    description:
      "Itemised BOMs, clear warranty terms, and realistic payback — not inflated brochure numbers.",
  },
  {
    icon: BadgeCheck,
    title: "Policy navigation",
    description:
      "Guidance through net metering, DISCOM visits, and subsidy portal steps for eligible homes.",
  },
  {
    icon: Headphones,
    title: "After-sales that answer",
    description:
      "Dedicated O&M options, monitoring support, and a team that picks up when generation dips.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-solar-navy section-pad">
      <div className="pointer-events-none absolute inset-0 mesh-pattern opacity-20" />
      <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-solar-yellow/10 blur-3xl" />
      <div className="container-premium relative">
        <FadeIn>
          <SectionHeading
            light
            align="center"
            eyebrow="Why Aarohan"
            title="Built for trust in a crowded market"
            description="Solar is a 25-year asset. We behave like a partner who will still be accountable in year ten."
            className="mb-16"
          />
        </FadeIn>
        <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <StaggerItem
              key={r.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-solar-yellow/30 hover:bg-white/[0.07]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-solar-yellow/15 text-solar-yellow transition group-hover:bg-solar-yellow group-hover:text-solar-navy-deep">
                <r.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{r.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/60">{r.description}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
