import { PageHero, CTASection } from "@/components/shared/Section";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gallery",
  description:
    "Explore Aarohan Solar installation photography — residential rooftops, commercial campuses, industrial sheds, and project teams across India.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual record of systems that work"
        description="Filter by segment and open any image in a lightbox to see project context."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />
      <section className="py-16 md:py-24">
        <div className="container-premium">
          <GalleryGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}
