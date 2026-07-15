import { createMetadata } from "@/lib/seo";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminAddButton } from "@/components/admin/AdminActions";
import { AdminGalleryGrid } from "@/components/admin/AdminGalleryGrid";
import { isDemoMode } from "@/lib/admin-mode";

export const metadata = createMetadata({
  title: "Gallery",
  description: "Manage gallery images shown on the Aarohan Solar site.",
  noIndex: true,
});

export default function AdminGalleryPage() {
  const isDemo = isDemoMode();

  return (
    <div>
      <AdminPageHeader
        title="Gallery"
        description={
          isDemo
            ? "View-only gallery from mock data. Set DEMO=false in .env to enable upload / edit."
            : "Edit mode enabled. Uploads and edits use the mock Supabase storage layer."
        }
        action={<AdminAddButton label="Upload Image" table="gallery" />}
      />
      <AdminGalleryGrid />
    </div>
  );
}
