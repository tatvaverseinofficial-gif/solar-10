import { PageHero, CTASection } from "@/components/shared/Section";
import { ProjectsFilter } from "@/components/projects/ProjectsFilter";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Solar Projects",
  description:
    "Browse Aarohan Solar’s residential, commercial, and industrial solar project portfolio across India — capacity, ROI, and client outcomes.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Installations that generate — and stand up to audits"
        description="Filter by segment and explore capacity, location, payback, and client feedback from real Aarohan Solar sites."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />
      <section className="py-16 md:py-24">
        <div className="container-premium">
          <ProjectsFilter />
        </div>
      </section>
      <CTASection title="Want results like these on your roof?" />
    </>
  );
}
