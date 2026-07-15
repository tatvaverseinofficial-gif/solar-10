import { createMetadata } from "@/lib/seo";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { CalculatorSettingsForm } from "@/components/admin/CalculatorSettingsForm";
import { isDemoMode } from "@/lib/admin-mode";

export const metadata = createMetadata({
  title: "Calculator Settings",
  description: "Configure tariff rates and yield assumptions used by the solar savings calculator.",
  noIndex: true,
});

export default function AdminCalculatorSettingsPage() {
  const isDemo = isDemoMode();

  return (
    <div>
      <AdminPageHeader
        title="Calculator Settings"
        description={
          isDemo
            ? "View-only calculator assumptions. Set DEMO=false in .env to unlock editing with mock Supabase."
            : "Edit mode enabled. Saving upserts calculator defaults via the mock Supabase client."
        }
      />
      <CalculatorSettingsForm />
    </div>
  );
}
