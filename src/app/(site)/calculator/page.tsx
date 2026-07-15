import { PageHero, CTASection } from "@/components/shared/Section";
import { SolarCalculator } from "@/components/calculator/SolarCalculator";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Solar Savings Calculator",
  description:
    "Estimate recommended solar system size, annual savings, payback period, and CO₂ reduction for Indian homes and businesses. Demo calculator — site survey required for quotes.",
  path: "/calculator",
});

export default function CalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Calculator"
        title="Estimate your solar savings in minutes"
        description="Enter your monthly bill, property type, and roof type for an illustrative system size and payback. Final designs always follow a site survey."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Calculator" },
        ]}
      />
      <section className="py-16 md:py-24">
        <div className="container-premium">
          <SolarCalculator />
          <p className="mt-8 rounded-2xl border border-border bg-muted/50 p-5 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Disclaimer:</strong> This calculator is
            a demo for educational purposes. It uses generalised Indian tariff and yield
            assumptions. Subsidy estimates are illustrative and subject to government
            policy. Aarohan Solar quotations are issued only after a technical site
            survey and bill analysis.
          </p>
        </div>
      </section>
      <CTASection
        title="Want numbers you can take to the bank?"
        description="Book a free survey for a proposal with layout, BOM, and city-specific yield modelling."
      />
    </>
  );
}
