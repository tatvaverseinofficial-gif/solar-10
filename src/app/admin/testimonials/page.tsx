import { createMetadata } from "@/lib/seo";
import { testimonials } from "@/data/testimonials";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminAddButton, AdminRowActions } from "@/components/admin/AdminActions";
import { isDemoMode } from "@/lib/admin-mode";
import { Star } from "lucide-react";

export const metadata = createMetadata({
  title: "Testimonials",
  description: "Manage customer testimonials shown across the Aarohan Solar site.",
  noIndex: true,
});

export default function AdminTestimonialsPage() {
  const isDemo = isDemoMode();

  return (
    <div>
      <AdminPageHeader
        title="Testimonials"
        description={
          isDemo
            ? "View-only list from mock data. Set DEMO=false in .env to enable editing."
            : "Edit mode enabled. Mutations run through the mock Supabase client."
        }
        action={<AdminAddButton label="Add Testimonial" table="testimonials" />}
      />

      <AdminCard>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Project</th>
                <th className="px-5 py-3 font-medium">Rating</th>
                <th className="px-5 py-3 font-medium">Quote</th>
                <th className="px-5 py-3 font-medium">Savings</th>
                <th className="px-5 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((t) => (
                <tr key={t.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                  <td className="px-5 py-3">
                    <p className="font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} · {t.location}</p>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{t.projectType}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-0.5 text-solar-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5" fill={i < t.rating ? "currentColor" : "none"} />
                      ))}
                    </div>
                  </td>
                  <td className="max-w-sm px-5 py-3 text-muted-foreground">
                    <p className="line-clamp-2">{t.content}</p>
                  </td>
                  <td className="px-5 py-3 font-medium text-solar-navy">{t.savings ?? "—"}</td>
                  <td className="px-5 py-3">
                    <AdminRowActions table="testimonials" id={t.id} />
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
