import { createMetadata } from "@/lib/seo";
import { faqs } from "@/data/faqs";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminAddButton, AdminRowActions } from "@/components/admin/AdminActions";
import { Badge } from "@/components/ui/badge";
import { isDemoMode } from "@/lib/admin-mode";

export const metadata = createMetadata({
  title: "FAQs",
  description: "Manage frequently asked questions shown on the Aarohan Solar site.",
  noIndex: true,
});

export default function AdminFaqsPage() {
  const isDemo = isDemoMode();

  return (
    <div>
      <AdminPageHeader
        title="FAQs"
        description={
          isDemo
            ? "View-only list from mock data. Set DEMO=false in .env to enable editing."
            : "Edit mode enabled. Mutations run through the mock Supabase client."
        }
        action={<AdminAddButton label="Add FAQ" table="faqs" />}
      />

      <AdminCard>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-5 py-3 font-medium">Question</th>
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">Answer</th>
                <th className="px-5 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {faqs.map((faq) => (
                <tr key={faq.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                  <td className="max-w-xs px-5 py-3 font-medium text-foreground">{faq.question}</td>
                  <td className="px-5 py-3">
                    <Badge variant="outline" className="capitalize">{faq.category}</Badge>
                  </td>
                  <td className="max-w-md px-5 py-3 text-muted-foreground">
                    <p className="line-clamp-2">{faq.answer}</p>
                  </td>
                  <td className="px-5 py-3">
                    <AdminRowActions table="faqs" id={faq.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminCard>
    </div>
  );
}
