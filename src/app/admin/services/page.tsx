import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminAddButton, AdminRowActions } from "@/components/admin/AdminActions";
import { Badge } from "@/components/ui/badge";
import { isDemoMode } from "@/lib/admin-mode";

export const metadata = createMetadata({
  title: "Services",
  description: "Manage the service offerings listed on the public Aarohan Solar site.",
  noIndex: true,
});

export default function AdminServicesPage() {
  const isDemo = isDemoMode();

  return (
    <div>
      <AdminPageHeader
        title="Services"
        description={
          isDemo
            ? "View-only list from mock data. Set DEMO=false in .env to enable editing."
            : "Edit mode enabled. Mutations run through the mock Supabase client."
        }
        action={<AdminAddButton label="Add Service" table="services" />}
      />

      <AdminCard>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-5 py-3 font-medium">Service</th>
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">Starting Price</th>
                <th className="px-5 py-3 font-medium">Benefits</th>
                <th className="px-5 py-3 font-medium">Process Steps</th>
                <th className="px-5 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                  <td className="px-5 py-3">
                    <p className="font-medium text-foreground">{service.title}</p>
                    <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{service.description}</p>
                  </td>
                  <td className="px-5 py-3">
                    <Badge variant="outline" className="capitalize">{service.category}</Badge>
                  </td>
                  <td className="px-5 py-3 font-medium text-solar-navy">{service.startingPrice ?? "—"}</td>
                  <td className="px-5 py-3 text-muted-foreground">{service.benefits.length}</td>
                  <td className="px-5 py-3 text-muted-foreground">{service.process.length}</td>
                  <td className="px-5 py-3">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/services/${service.slug}`}
                        target="_blank"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-solar-navy"
                        title="View on site"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                      <AdminRowActions table="services" id={service.id} />
                    </div>
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
