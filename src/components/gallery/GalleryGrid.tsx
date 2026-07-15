"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryItems } from "@/data/gallery";

const filters = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Industrial", value: "industrial" },
  { label: "Installation", value: "installation" },
  { label: "Team", value: "team" },
] as const;

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");
  const [active, setActive] = useState<(typeof galleryItems)[number] | null>(null);

  const items = useMemo(
    () =>
      filter === "all"
        ? galleryItems
        : galleryItems.filter((g) => g.category === filter),
    [filter]
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              filter === f.value
                ? "bg-solar-navy text-white shadow-[var(--shadow-sm)]"
                : "border border-solar-line bg-white text-muted-foreground hover:border-solar-navy/30 hover:text-solar-navy"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.05 }}
            onClick={() => setActive(item)}
            className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.25rem] shadow-[var(--shadow-sm)]"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                sizes="(max-width:1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-navy-deep/80 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-left text-white">
                <p className="font-display text-base font-bold">{item.title}</p>
                <p className="text-xs text-white/75">
                  {item.location}
                  {item.capacity ? ` · ${item.capacity}` : ""}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-solar-navy-deep/90 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              onClick={() => setActive(null)}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="bg-white p-5">
                <h3 className="font-display text-xl font-bold text-solar-navy">
                  {active.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {active.location}
                  {active.capacity ? ` · ${active.capacity}` : ""} ·{" "}
                  <span className="capitalize">{active.category}</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
