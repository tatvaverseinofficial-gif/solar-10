import { SectionHeading } from "@/components/shared/Section";
import { FadeIn } from "@/components/shared/Motion";

const steps = [
  {
    step: "01",
    title: "Consult & Survey",
    description:
      "Share your bill. We visit, measure the roof, check shade, and confirm electrical readiness.",
  },
  {
    step: "02",
    title: "Design & Proposal",
    description:
      "Receive layout drawings, BOM, savings model, subsidy assumptions, and a clear timeline.",
  },
  {
    step: "03",
    title: "Install & Commission",
    description:
      "Trained crews install structure, modules, and inverters with safety protocols and QA checks.",
  },
  {
    step: "04",
    title: "Net Meter & Support",
    description:
      "We support DISCOM formalities, hand over warranties, and set up monitoring for your family or plant team.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-pad gradient-section-alt">
      <div className="container-premium">
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Our process"
            title="From first call to first unit generated"
            description="A predictable path with no surprise add-ons mid-installation."
            className="mb-16"
          />
        </FadeIn>
        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-solar-yellow/50 to-transparent lg:block" />
          {steps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.08}>
              <div className="card-premium relative h-full p-6 md:p-7">
                <span className="font-display text-4xl font-bold text-solar-yellow/90">
                  {s.step}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-solar-navy">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
