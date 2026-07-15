import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/Section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/Motion";
import { Badge } from "@/components/ui/badge";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="gradient-section section-pad">
      <div className="container-premium">
        <FadeIn>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects that generate — and convince boards"
              description="Residential villas, commercial roofs, and industrial sheds across India."
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-solar-blue transition hover:gap-2.5 hover:text-solar-navy"
            >
              View all projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <StaggerChildren className="grid gap-6 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.id}>
              <Link
                href={`/projects/${project.slug}`}
                className="card-premium group block overflow-hidden"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width:1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-solar-navy-deep/50 via-transparent to-transparent opacity-80" />
                  <Badge className="absolute left-4 top-4 capitalize" variant="accent">
                    {project.category}
                  </Badge>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-display text-lg font-bold text-solar-navy transition group-hover:text-solar-blue">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-solar-yellow" />
                    {project.location}
                  </p>
                  <div className="mt-5 grid grid-cols-3 gap-3 border-t border-solar-line pt-5 text-sm">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Capacity</p>
                      <p className="mt-1 font-semibold text-solar-navy">{project.capacity}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Payback</p>
                      <p className="mt-1 font-semibold text-solar-navy">{project.roi}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Savings</p>
                      <p className="mt-1 font-semibold text-solar-navy">{project.annualSavings}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
