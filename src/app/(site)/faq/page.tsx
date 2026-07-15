import { PageHero, CTASection } from "@/components/shared/Section";
import { FAQFilter } from "@/components/faq/FAQFilter";
import { faqs } from "@/data/faqs";
import { createMetadata, faqPageSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers on solar cost, subsidy, net metering, installation timelines, maintenance, and technical topics for Indian homeowners and businesses.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Straight answers before you invest"
        description={`${faqs.length}+ questions covering cost, subsidy, installation, and long-term care.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <section className="py-16 md:py-24">
        <div className="container-premium">
          <FAQFilter />
        </div>
      </section>
      <CTASection />
    </>
  );
}
