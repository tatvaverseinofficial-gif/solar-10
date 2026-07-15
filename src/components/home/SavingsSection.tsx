import Image from "next/image";
import { IndianRupee, Leaf, TrendingDown, Zap } from "lucide-react";
import { SectionHeading } from "@/components/shared/Section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/Motion";

const benefits = [
  {
    icon: IndianRupee,
    title: "Lower monthly bills",
    description:
      "Offset daytime consumption and export surplus under net metering — typical homes see 70–90% bill reduction after commissioning.",
  },
  {
    icon: TrendingDown,
    title: "Hedge against tariff hikes",
    description:
      "Lock in a large share of your energy cost for 20+ years while DISCOM tariffs continue to rise across most states.",
  },
  {
    icon: Leaf,
    title: "Cut your carbon footprint",
    description:
      "Every kilowatt of rooftop solar displaces grid power often generated from thermal sources — measurable CO₂ savings every year.",
  },
  {
    icon: Zap,
    title: "Energy independence",
    description:
      "Add hybrid storage for outage backup, or keep a simple on-grid system focused purely on savings and reliability.",
  },
];

export function SavingsSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-solar-green-soft blur-3xl" />
      <div className="container-premium relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] shadow-[var(--shadow-lg)] sm:rounded-[1.75rem] md:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/hero/hero-secondary.jpg"
              alt="Solar panels catching sunlight on a rooftop"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-solar-navy-deep/40 via-transparent to-transparent" />
            <div className="absolute inset-x-3 bottom-3 rounded-xl glass p-4 sm:inset-x-5 sm:bottom-5 sm:rounded-2xl sm:p-5 md:inset-x-7 md:bottom-7 md:p-6">
              <p className="eyebrow text-solar-blue">Typical residential outcome</p>
              <p className="mt-1.5 font-display text-xl font-bold text-solar-navy sm:mt-2 sm:text-2xl md:text-3xl">
                ₹4,000–₹8,000 saved / month
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:mt-1.5 sm:text-sm">
                Based on 3–5 kW systems in high-tariff urban areas. Actual results vary.
              </p>
            </div>
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <SectionHeading
              eyebrow="Why solar pays"
              title="Savings you can measure, not marketing fluff"
              description="We size systems from your bills and roof — then show payback, subsidy assumptions, and generation estimates before you invest."
            />
          </FadeIn>
          <StaggerChildren className="mt-10 grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <StaggerItem
                key={item.title}
                className="card-premium group p-5 md:p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-solar-cream text-solar-navy transition group-hover:bg-solar-yellow">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-solar-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
