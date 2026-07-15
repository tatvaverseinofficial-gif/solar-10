"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import { Badge } from "@/components/ui/badge";

const filters: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Industrial", value: "industrial" },
];

export function ProjectsFilter() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const filtered = useMemo(
    () =>
      filter === "all" ? projects : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <div>
      <div className="chip-scroll mb-8 justify-start sm:mb-10 sm:justify-center">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={`rounded-full px-4 py-2.5 text-sm font-semibold transition sm:px-5 ${
              filter === f.value
                ? "bg-solar-navy text-white shadow-[var(--shadow-sm)]"
                : "border border-solar-line bg-white text-muted-foreground hover:border-solar-navy/30 hover:text-solar-navy"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <Link
            key={project.id}
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
              <Badge className="absolute left-4 top-4 capitalize" variant="accent">
                {project.category}
              </Badge>
            </div>
            <div className="p-6">
              <h2 className="font-display text-lg font-bold text-solar-navy group-hover:text-solar-blue">
                {project.title}
              </h2>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                {project.location}
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground">Capacity</p>
                  <p className="font-semibold text-solar-navy">{project.capacity}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Payback</p>
                  <p className="font-semibold text-solar-navy">{project.roi}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Savings</p>
                  <p className="font-semibold text-solar-navy">{project.annualSavings}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
