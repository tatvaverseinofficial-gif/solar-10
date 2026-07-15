import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blogs";
import { galleryItems, teamMembers } from "@/data/gallery";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminUploadButton } from "@/components/admin/AdminActions";
import { isDemoMode } from "@/lib/admin-mode";

export const metadata = createMetadata({
  title: "Media Library",
  description: "Browse image assets currently referenced across the Aarohan Solar site.",
  noIndex: true,
});

function buildMediaLibrary() {
  const paths = new Set<string>();

  projects.forEach((p) => p.images.forEach((img) => paths.add(img)));
  services.forEach((s) => {
    paths.add(s.image);
    s.gallery.forEach((img) => paths.add(img));
  });
  blogPosts.forEach((b) => paths.add(b.image));
  galleryItems.forEach((g) => paths.add(g.image));
  teamMembers.forEach((t) => paths.add(t.image));

  return Array.from(paths).sort();
}

export default function AdminMediaPage() {
  const media = buildMediaLibrary();
  const isDemo = isDemoMode();

  return (
    <div>
      <AdminPageHeader
        title="Media Library"
        description={
          isDemo
            ? `${media.length} assets in view-only mode. Set DEMO=false to enable mock Supabase uploads.`
            : `${media.length} assets. Upload uses mock Supabase storage until real credentials are connected.`
        }
        action={<AdminUploadButton />}
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {media.map((path) => (
          <AdminCard key={path} className="group">
            <div className="relative aspect-square overflow-hidden bg-muted">
              <Image
                src={path}
                alt={path}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width:768px) 33vw, 16vw"
              />
            </div>
            <p className="truncate p-2 text-[11px] text-muted-foreground" title={path}>
              {path.split("/").pop()}
            </p>
          </AdminCard>
        ))}
      </div>
    </div>
  );
}
