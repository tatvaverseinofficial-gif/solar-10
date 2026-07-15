import { PageHero, CTASection } from "@/components/shared/Section";
import { BlogListing } from "@/components/blog/BlogListing";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Solar Blog",
  description:
    "Practical solar tips, maintenance guides, technology explainers, and government scheme updates from Aarohan Solar’s India team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Clear writing for people buying solar in India"
        description="Skip the jargon. Practical articles on bills, subsidy, modules, cleaning, and industrial economics."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <section className="py-16 md:py-24">
        <div className="container-premium">
          <BlogListing />
        </div>
      </section>
      <CTASection />
    </>
  );
}
