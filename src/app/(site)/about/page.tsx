import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Target, Eye } from "lucide-react";
import {
  company,
  mission,
  vision,
  values,
} from "@/data/company";
import {
  teamMembers,
  timeline,
  certifications,
} from "@/data/gallery";
import { PageHero, CTASection, SectionHeading } from "@/components/shared/Section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/Motion";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Aarohan Solar — our mission, vision, leadership team, and journey building premium solar installations across India since 2014.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Aarohan Solar"
        title="Engineering clean energy for Indian rooftops and factories"
        description="Founded in Pune in 2014, we design and deliver solar systems with boardroom-grade engineering and neighbourhood-level honesty."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-premium grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/about/about-story.jpg"
                alt="Solar installation team at work"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading
              eyebrow="Our story"
              title={`${company.stats.experience} years of building systems that still perform`}
              description="We started with residential rooftops in Pune and grew into commercial campuses and industrial sheds — always with transparent proposals and after-sales accountability."
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Today, {company.name} has delivered {company.stats.capacityMw} of capacity
              across {company.stats.cities} cities, helping homeowners cut bills and helping
              factories lock in cleaner, more predictable energy costs.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-muted/50 p-4">
                <p className="font-display text-2xl font-bold text-solar-navy">
                  {company.stats.installations}
                </p>
                <p className="text-sm text-muted-foreground">Installations</p>
              </div>
              <div className="rounded-2xl border border-border bg-muted/50 p-4">
                <p className="font-display text-2xl font-bold text-solar-navy">
                  {company.stats.co2Saved}
                </p>
                <p className="text-sm text-muted-foreground">Tonnes CO₂ offset (est.)</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container-premium grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-3xl border border-border bg-white p-8 md:p-10">
              <Target className="h-8 w-8 text-solar-yellow" />
              <h2 className="mt-4 font-display text-2xl font-bold text-solar-navy">Mission</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{mission}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="h-full rounded-3xl border border-border bg-white p-8 md:p-10">
              <Eye className="h-8 w-8 text-solar-yellow" />
              <h2 className="mt-4 font-display text-2xl font-bold text-solar-navy">Vision</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{vision}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-premium">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Values"
              title="Principles that shape every proposal"
              className="mb-12"
            />
          </FadeIn>
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem
                key={v.title}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <CheckCircle2 className="h-6 w-6 text-solar-yellow" />
                <h3 className="mt-3 font-display text-lg font-bold text-solar-navy">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-solar-navy py-20 md:py-28">
        <div className="container-premium">
          <FadeIn>
            <SectionHeading
              light
              align="center"
              eyebrow="Timeline"
              title="Our journey"
              className="mb-14"
            />
          </FadeIn>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-white/20 md:left-1/2" />
            {timeline.map((event, i) => (
              <FadeIn key={event.year} delay={i * 0.05}>
                <div
                  className={`relative mb-10 flex flex-col md:mb-14 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-10 md:text-right md:ml-0" : "md:ml-auto md:pl-10"
                  }`}
                >
                  <span className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-solar-yellow md:left-auto md:right-0 md:translate-x-1/2" />
                  {i % 2 !== 0 && (
                    <span className="absolute left-0 top-1 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-solar-yellow md:block" />
                  )}
                  <p className="ml-10 font-display text-sm font-semibold text-solar-yellow md:ml-0">
                    {event.year}
                  </p>
                  <h3 className="ml-10 mt-1 font-display text-xl font-bold text-white md:ml-0">
                    {event.title}
                  </h3>
                  <p className="ml-10 mt-2 text-sm text-white/65 md:ml-0">
                    {event.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-premium">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Leadership"
              title="People behind the performance"
              className="mb-12"
            />
          </FadeIn>
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <StaggerItem key={member.id} className="overflow-hidden rounded-2xl border border-border bg-white">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-solar-navy">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-solar-blue">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="gradient-section py-20 md:py-28">
        <div className="container-premium">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Certifications & standards"
              title="Why customers trust us"
              description="Process discipline, bankable equipment, and documentation ready for audits and lenders."
              className="mb-12"
            />
          </FadeIn>
          <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c) => (
              <StaggerItem
                key={c.title}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <h3 className="font-display text-lg font-bold text-solar-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {c.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Prefer to talk to a human?{" "}
            <Link href="/contact" className="font-semibold text-solar-blue hover:underline">
              Schedule a consultation
            </Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
