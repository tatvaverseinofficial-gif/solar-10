import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Calendar, Zap, TrendingUp, Quote } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { PageHero, CTASection } from "@/components/shared/Section";
import { FadeIn } from "@/components/shared/Motion";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.images[0],
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero
        eyebrow="Project"
        title={project.title}
        description={project.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.city },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container-premium">
          <FadeIn>
            <div className="relative mb-8 aspect-[21/9] overflow-hidden rounded-3xl md:mb-12">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <Badge className="absolute left-6 top-6 capitalize" variant="accent">
                {project.category}
              </Badge>
            </div>
          </FadeIn>

          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: Zap, label: "Capacity", value: project.capacity },
                  { icon: TrendingUp, label: "Payback", value: project.roi },
                  { icon: MapPin, label: "Location", value: project.location },
                  { icon: Calendar, label: "Completed", value: project.completionDate },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border bg-white p-4"
                  >
                    <stat.icon className="h-4 w-4 text-solar-yellow" />
                    <p className="mt-2 text-xs text-muted-foreground">{stat.label}</p>
                    <p className="mt-0.5 font-display text-sm font-bold text-solar-navy md:text-base">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="font-display text-2xl font-bold text-solar-navy">
                  Project overview
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-solar-navy">
                  Estimated annual savings: {project.annualSavings}
                </p>
              </div>

              <div className="mt-10">
                <h3 className="font-display text-xl font-bold text-solar-navy">
                  System highlights
                </h3>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                {project.images.slice(1).map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} photo ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 rounded-3xl border border-border bg-solar-navy p-7 text-white">
                <Quote className="h-8 w-8 text-solar-yellow" />
                <p className="mt-4 text-sm leading-relaxed text-white/85">
                  “{project.testimonial}”
                </p>
                <p className="mt-6 font-semibold">{project.clientName}</p>
                <p className="text-sm text-white/60">{project.location}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
