import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { PageHero, CTASection, SectionHeading } from "@/components/shared/Section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/Motion";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Customer Testimonials",
  description:
    "Read reviews from homeowners, societies, hotels, schools, and factories who installed solar with Aarohan Solar across India.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What our customers say after the meter spins"
        description="Ratings, locations, and project types from real Aarohan Solar installations."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Testimonials" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container-premium">
          <FadeIn>
            <SectionHeading
              align="center"
              title="Trusted across homes, campuses, and plants"
              className="mb-12"
            />
          </FadeIn>
          <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem
                key={t.id}
                className="flex h-full flex-col rounded-[1.75rem] border border-solar-line bg-white p-7 shadow-[var(--shadow-sm)]"
              >
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-solar-yellow text-solar-yellow"
                    />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{t.content}”
                </p>
                {t.savings && (
                  <p className="mt-4 text-sm font-semibold text-solar-blue">
                    Savings: {t.savings}
                  </p>
                )}
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-solar-navy">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
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
      <CTASection title="Become our next success story" />
    </>
  );
}
