import Image from "next/image";
import Link from "next/link";
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
import { PageHero, CTASection, SectionHeading } from "@/components/shared/Section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/Motion";
import { createMetadata } from "@/lib/seo";

const iconMap = {
  Home,
  Building2,
  Factory,
  ClipboardCheck,
  Wrench,
  BatteryCharging,
} as const;

export const metadata = createMetadata({
  title: "Solar Services",
  description:
    "Residential, commercial, industrial solar, EPC, maintenance, and battery storage solutions from Aarohan Solar across India.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Solar solutions engineered for Indian roofs and loads"
        description="Choose a pathway built for your tariff, roof type, and operations — from compact home systems to MW-scale industrial EPC."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-premium">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Full capability"
              title="Six focused service lines"
              description="Each offering includes design, documentation support, and optional long-term O&M."
              className="mb-14"
            />
          </FadeIn>
          <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Home;
              return (
                <StaggerItem key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-solar-cream text-solar-navy">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h2 className="font-display text-xl font-bold text-solar-navy">
                        {service.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      {service.startingPrice && (
                        <p className="mt-3 text-sm font-semibold text-solar-blue">
                          {service.startingPrice}
                        </p>
                      )}
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-solar-navy">
                        View details <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>
      <CTASection />
    </>
  );
}
