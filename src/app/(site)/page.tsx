import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
import { SavingsSection } from "@/components/home/SavingsSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { SubsidyHighlight } from "@/components/home/SubsidyHighlight";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { SolarCalculator } from "@/components/calculator/SolarCalculator";
import { CTASection } from "@/components/shared/Section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Aarohan Solar | Premium Solar Installations Across India",
  description:
    "Premium residential, commercial, and industrial solar installations across India. Transparent pricing, subsidy guidance, and long-term O&M from Aarohan Solar, Pune.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <SavingsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSection />
      <FeaturedProjects />
      <TestimonialsPreview />
      <SubsidyHighlight />
      <section className="section-pad gradient-section-alt">
        <div className="container-premium">
          <SolarCalculator />
        </div>
      </section>
      <HomeFAQ />
      <CTASection />
    </>
  );
}
