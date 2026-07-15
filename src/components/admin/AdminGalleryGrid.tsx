"use client";

import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminRowActions } from "@/components/admin/AdminActions";
import { Badge } from "@/components/ui/badge";

export function AdminGalleryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {galleryItems.map((item) => (
        <AdminCard key={item.id} className="group">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width:768px) 50vw, 25vw"
            />
            <Badge variant="accent" className="absolute left-2.5 top-2.5 capitalize">
              {item.category}
            </Badge>
            <div className="absolute right-2.5 top-2.5 rounded-lg bg-white/95 p-0.5 opacity-0 shadow-sm transition group-hover:opacity-100">
              <AdminRowActions table="gallery" id={item.id} />
            </div>
          </div>
          <div className="p-3.5">
            <p className="line-clamp-1 text-sm font-semibold text-foreground">{item.title}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {item.location}
              {item.capacity ? ` · ${item.capacity}` : ""}
            </p>
          </div>
        </AdminCard>
      ))}
    </div>
  );
}
