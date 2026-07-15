import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { PageHero, CTASection, SectionHeading } from "@/components/shared/Section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/Motion";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container-premium grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
                priority
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <SectionHeading
              eyebrow={service.startingPrice ?? "Tailored systems"}
              title={`Built for ${service.shortTitle.toLowerCase()} that want measurable results`}
              description={service.longDescription}
            />
            <Button asChild variant="accent" className="mt-8">
              <Link href="/contact">Request a proposal</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container-premium">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Benefits"
              title="What you gain"
              className="mb-12"
            />
          </FadeIn>
          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit) => (
              <StaggerItem
                key={benefit}
                className="flex gap-3 rounded-2xl border border-border bg-white p-5"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-solar-yellow" />
                <p className="text-sm leading-relaxed text-foreground">{benefit}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-premium">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Process"
              title="How we deliver"
              className="mb-12"
            />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-white p-6">
                  <span className="font-display text-3xl font-bold text-solar-yellow">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-solar-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-section py-16 md:py-24">
        <div className="container-premium">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Gallery"
              title="Related installation visuals"
              className="mb-10"
            />
          </FadeIn>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {service.gallery.map((src, i) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`${service.title} gallery ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-premium max-w-3xl">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="FAQ"
              title={`${service.title} questions`}
              className="mb-8"
            />
            <div className="rounded-2xl border border-border bg-white px-5 md:px-8">
              <FAQAccordion items={service.faqs} />
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title={`Ready to explore ${service.title.toLowerCase()}?`}
        description="Tell us your bill and city — we’ll recommend a practical system size and next steps."
      />
    </>
  );
}
