import { createMetadata } from "@/lib/seo";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { CompanySettingsForm } from "@/components/admin/CompanySettingsForm";
import { isDemoMode } from "@/lib/admin-mode";

export const metadata = createMetadata({
  title: "Settings",
  description: "Company profile and contact settings for Aarohan Solar.",
  noIndex: true,
});

export default function AdminSettingsPage() {
  const isDemo = isDemoMode();

  return (
    <div>
      <AdminPageHeader
        title="Settings"
        description={
          isDemo
            ? "View-only company settings. Fields are locked — set DEMO=false in .env to edit and save via mock Supabase."
            : "Edit mode enabled. Saving upserts into the mock Supabase settings table."
        }
      />
      <CompanySettingsForm />
    </div>
  );
}
