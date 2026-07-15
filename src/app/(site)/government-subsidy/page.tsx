import Image from "next/image";
import {
  FileText,
  ListChecks,
  ShieldAlert,
  UserCheck,
  Landmark,
} from "lucide-react";
import { PageHero, CTASection, SectionHeading } from "@/components/shared/Section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/Motion";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Government Solar Subsidy",
  description:
    "Understand residential rooftop solar subsidy eligibility, documents, and application steps in India. Clear guidance with policy disclaimers from Aarohan Solar.",
  path: "/government-subsidy",
  image: "/images/misc/subsidy.jpg",
});

const steps = [
  {
    title: "Check eligibility basics",
    description:
      "Confirm you are a residential consumer with a valid DISCOM connection and suitable rooftop rights or society approval where required.",
  },
  {
    title: "Register on the official portal",
    description:
      "Create an application on the national rooftop solar / PM Surya Ghar portal using details matching your electricity bill.",
  },
  {
    title: "Upload documents & select vendor",
    description:
      "Submit identity, address, bill, and bank details as listed on the portal. Choose a registered installer according to current portal rules.",
  },
  {
    title: "Install & commission",
    description:
      "Complete installation through your installer. Soft and hard commissioning steps follow utility and portal workflows.",
  },
  {
    title: "DISCOM inspection & net metering",
    description:
      "Your DISCOM conducts inspections and installs a bi-directional meter as per state procedures.",
  },
  {
    title: "Subsidy processing",
    description:
      "After successful verification, central financial assistance is processed per prevailing MNRE / implementing agency timelines — not by the installer.",
  },
];

const documents = [
  "Latest electricity bill in the applicant’s name",
  "Aadhaar / identity proof as required by the portal",
  "Proof of address matching the installation site",
  "Bank account details for disbursement",
  "Roof ownership proof or society NOC when applicable",
  "Passport-size photograph / additional KYC if requested",
];

export default function SubsidyPage() {
  return (
    <>
      <PageHero
        eyebrow="Government subsidy"
        title="Residential solar subsidy — explained without the hype"
        description="We help eligible homeowners navigate documents and portal steps. Subsidy amounts and timelines always follow government policy — never installer guarantees."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Government Subsidy" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container-premium grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/misc/subsidy.jpg"
                alt="Subsidy documentation and consultation"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <SectionHeading
              eyebrow="PM Surya Ghar context"
              title="Central support for eligible homes"
              description="Schemes such as PM Surya Ghar Muft Bijli Yojana aim to accelerate residential rooftop adoption through central financial assistance for qualifying consumers."
            />
            <ul className="mt-8 space-y-4">
              {[
                {
                  icon: UserCheck,
                  text: "Primarily oriented toward residential / domestic consumers",
                },
                {
                  icon: Landmark,
                  text: "Administered via official government portals and DISCOMs",
                },
                {
                  icon: ShieldAlert,
                  text: "Commercial & industrial projects usually follow different incentive paths",
                },
              ].map((item) => (
                <li key={item.text} className="flex gap-3 text-sm text-muted-foreground">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-solar-yellow" />
                  {item.text}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container-premium">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Eligibility (indicative)"
              title="Who typically qualifies"
              description="Exact eligibility is defined by the Government of India and your DISCOM. Always verify on the official portal before investing."
              className="mb-12"
            />
          </FadeIn>
          <StaggerChildren className="grid gap-6 md:grid-cols-3">
            {[
              "Domestic consumer with a valid electricity connection",
              "Adequate unshaded rooftop / terrace rights for installation",
              "Application completed as per current national portal rules",
            ].map((text) => (
              <StaggerItem
                key={text}
                className="rounded-2xl border border-border bg-white p-6 text-sm leading-relaxed text-muted-foreground"
              >
                {text}
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-solar-yellow" />
              <h2 className="font-display text-2xl font-bold text-solar-navy">
                Documents commonly required
              </h2>
            </div>
            <ul className="mt-6 space-y-3">
              {documents.map((doc) => (
                <li
                  key={doc}
                  className="rounded-xl border border-border bg-white px-4 py-3 text-sm"
                >
                  {doc}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="flex items-center gap-3">
              <ListChecks className="h-6 w-6 text-solar-yellow" />
              <h2 className="font-display text-2xl font-bold text-solar-navy">
                Application steps
              </h2>
            </div>
            <ol className="mt-6 space-y-4">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-solar-navy font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-solar-navy">{step.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-premium">
          <div className="rounded-3xl border border-amber-200 bg-solar-cream/60 p-6 md:p-8">
            <div className="flex gap-3">
              <ShieldAlert className="h-6 w-6 shrink-0 text-solar-gold" />
              <div>
                <h3 className="font-display text-lg font-bold text-solar-navy">
                  Important disclaimer
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Subsidy eligibility, slab amounts, documentation, disbursement timelines,
                  and portal procedures are governed entirely by the Government of India,
                  MNRE, state agencies, and DISCOMs. Policies change. Aarohan Solar provides
                  guidance and coordination support but does not control, guarantee, or
                  accelerate subsidy payments. Always validate current rules on official
                  government websites before making purchase decisions based on subsidy
                  assumptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need help preparing your subsidy file?"
        description="We’ll walk you through documents and portal steps for eligible residential projects — honestly, with current caveats."
      />
    </>
  );
}
