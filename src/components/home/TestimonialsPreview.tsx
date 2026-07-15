import Image from "next/image";
import Link from "next/link";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/Section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/Motion";

export function TestimonialsPreview() {
  const items = testimonials.slice(0, 3);

  return (
    <section className="section-pad">
      <div className="container-premium">
        <FadeIn>
          <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Customer stories"
              title="Trusted by homeowners and plant heads alike"
            />
            <Link
              href="/testimonials"
              className="text-sm font-semibold text-solar-blue transition hover:text-solar-navy"
            >
              Read all reviews →
            </Link>
          </div>
        </FadeIn>
        <StaggerChildren className="grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <StaggerItem
              key={t.id}
              className="card-premium flex h-full flex-col p-7"
            >
              <Quote className="h-8 w-8 text-solar-yellow/80" />
              <div className="mb-4 mt-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-solar-yellow text-solar-yellow" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                “{t.content}”
              </p>
              {t.savings && (
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-solar-green">
                  {t.savings}
                </p>
              )}
              <div className="mt-6 flex items-center gap-3 border-t border-solar-line pt-5">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-solar-cream">
                  <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <p className="font-semibold text-solar-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.projectType} · {t.location}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
