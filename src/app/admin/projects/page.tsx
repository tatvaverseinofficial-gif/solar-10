import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { projects } from "@/data/projects";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminAddButton, AdminRowActions } from "@/components/admin/AdminActions";
import { Badge } from "@/components/ui/badge";
import { isDemoMode } from "@/lib/admin-mode";

export const metadata = createMetadata({
  title: "Projects",
  description: "Manage the projects shown on the public Aarohan Solar site.",
  noIndex: true,
});

export default function AdminProjectsPage() {
  const isDemo = isDemoMode();

  return (
    <div>
      <AdminPageHeader
        title="Projects"
        description={
          isDemo
            ? "View-only list from mock data. Set DEMO=false in .env to enable Add / Edit via mock Supabase."
            : "Edit mode enabled. Mutations run through the mock Supabase client until real credentials are connected."
        }
        action={<AdminAddButton label="Add Project" table="projects" />}
      />

      <AdminCard>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-5 py-3 font-medium">Project</th>
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">Capacity</th>
                <th className="px-5 py-3 font-medium">Location</th>
                <th className="px-5 py-3 font-medium">Completed</th>
                <th className="px-5 py-3 font-medium">Payback</th>
                <th className="px-5 py-3 font-medium">Annual Savings</th>
                <th className="px-5 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                  <td className="max-w-xs px-5 py-3 font-medium text-foreground">{project.title}</td>
                  <td className="px-5 py-3">
                    <Badge variant="outline" className="capitalize">{project.category}</Badge>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{project.capacity}</td>
                  <td className="px-5 py-3 text-muted-foreground">{project.location}</td>
                  <td className="px-5 py-3 text-muted-foreground">{project.completionDate}</td>
                  <td className="px-5 py-3 text-muted-foreground">{project.roi}</td>
                  <td className="px-5 py-3 font-medium text-solar-navy">{project.annualSavings}</td>
                  <td className="px-5 py-3">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        target="_blank"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-solar-navy"
                        title="View on site"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                      <AdminRowActions table="projects" id={project.id} />
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
