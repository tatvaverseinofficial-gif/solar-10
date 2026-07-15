import Link from "next/link";
import { faqs } from "@/data/faqs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { SectionHeading } from "@/components/shared/Section";
import { FadeIn } from "@/components/shared/Motion";

export function HomeFAQ() {
  return (
    <section className="gradient-section section-pad">
      <div className="container-premium grid gap-12 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers before you book a survey"
            description="Straight responses on cost, subsidy, installation, and net metering."
          />
          <Link
            href="/faq"
            className="mt-7 inline-block text-sm font-semibold text-solar-blue transition hover:text-solar-navy"
          >
            Browse all FAQs →
          </Link>
        </FadeIn>
        <FadeIn delay={0.1} className="lg:col-span-8">
          <div className="rounded-[1.75rem] border border-solar-line bg-white px-5 shadow-[var(--shadow-sm)] md:px-9">
            <FAQAccordion items={faqs.slice(0, 6)} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
