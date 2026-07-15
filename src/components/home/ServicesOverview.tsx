import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Building2,
  Factory,
  ClipboardCheck,
  Wrench,
  BatteryCharging,
  ArrowUpRight,
} from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/shared/Section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/Motion";

const iconMap = {
  Home,
  Building2,
  Factory,
  ClipboardCheck,
  Wrench,
  BatteryCharging,
} as const;

export function ServicesOverview() {
  return (
    <section className="gradient-section section-pad">
      <div className="container-premium">
        <FadeIn>
          <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we deliver"
              title="Solar solutions for every Indian roof"
              description="From bungalows and apartments to factories and campuses — engineered systems with clear economics."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-solar-blue transition hover:gap-2.5 hover:text-solar-navy"
            >
              Explore all services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Home;
            return (
              <StaggerItem key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  className="card-premium group relative flex h-full flex-col overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-solar-navy-deep/70 via-solar-navy-deep/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-solar-navy shadow-[var(--shadow-sm)] backdrop-blur-sm transition group-hover:bg-solar-yellow">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="font-display text-xl font-bold text-solar-navy">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    {service.startingPrice && (
                      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-solar-green">
                        {service.startingPrice}
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-solar-blue transition group-hover:gap-2.5">
                      Learn more <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
