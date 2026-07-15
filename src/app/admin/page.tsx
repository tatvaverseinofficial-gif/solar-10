import Link from "next/link";
import {
  Users,
  FolderKanban,
  Newspaper,
  Quote,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blogs";
import { testimonials } from "@/data/testimonials";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminCard } from "@/components/admin/AdminCard";
import { StatCard } from "@/components/admin/StatCard";
import { Badge } from "@/components/ui/badge";

export const metadata = createMetadata({
  title: "Dashboard",
  description: "Overview of leads, projects, and content for Aarohan Solar.",
  noIndex: true,
});

const recentLeads = [
  { id: "1", name: "Rohit Sharma", city: "Pune", service: "Residential Solar", status: "New", date: "2026-07-14" },
  { id: "2", name: "Nikita Deshpande", city: "Mumbai", service: "Commercial Solar", status: "Contacted", date: "2026-07-13" },
  { id: "3", name: "Suresh Gupta", city: "Ahmedabad", service: "Industrial Solar", status: "Site Visit", date: "2026-07-12" },
  { id: "4", name: "Farah Ansari", city: "Jaipur", service: "Battery Storage", status: "New", date: "2026-07-11" },
  { id: "5", name: "Manoj Verma", city: "Coimbatore", service: "Solar Maintenance", status: "Converted", date: "2026-07-09" },
];

const statusStyles: Record<string, string> = {
  New: "bg-solar-cream text-solar-gold",
  Contacted: "bg-secondary text-secondary-foreground",
  "Site Visit": "bg-solar-cream text-solar-navy",
  Converted: "bg-primary text-primary-foreground",
};

export default function AdminDashboardPage() {
  const recentProjects = projects.slice(0, 5);
  const recentBlogs = blogPosts.slice(0, 4);

  return (
    <div>
      <AdminPageHeader
        title="Dashboard"
        description="A snapshot of enquiries, active work, and published content from mock data. Use DEMO in .env to switch admin between view-only and edit mode."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Leads" value="128" icon={Users} hint="+12 this week" />
        <StatCard label="Projects Delivered" value={String(projects.length)} icon={FolderKanban} hint="Across residential, commercial & industrial" />
        <StatCard label="Published Blogs" value={String(blogPosts.length)} icon={Newspaper} hint="Latest post 2026-05-12" />
        <StatCard label="Testimonials" value={String(testimonials.length)} icon={Quote} hint="Avg. rating 4.9 / 5" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <AdminCard className="lg:col-span-2">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="font-display text-base font-bold text-solar-navy">Recent Leads</h2>
            <span className="text-xs text-muted-foreground">Demo data</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-5 py-3 font-medium">Name</th>
                  <th className="px-5 py-3 font-medium">Service</th>
                  <th className="px-5 py-3 font-medium">City</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                    <td className="px-5 py-3 font-medium text-foreground">{lead.name}</td>
                    <td className="px-5 py-3 text-muted-foreground">{lead.service}</td>
                    <td className="px-5 py-3 text-muted-foreground">{lead.city}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[lead.status]}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{lead.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="font-display text-base font-bold text-solar-navy">Recent Blog Posts</h2>
            <Link href="/admin/blogs" className="inline-flex items-center gap-1 text-xs font-semibold text-solar-blue hover:underline">
              View all <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <ul className="divide-y divide-border">
            {recentBlogs.map((post) => (
              <li key={post.id} className="px-5 py-3.5">
                <p className="line-clamp-2 text-sm font-semibold text-foreground">{post.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {post.author} · {post.publishedAt}
                </p>
              </li>
            ))}
          </ul>
        </AdminCard>
      </div>

      <div className="mt-6">
        <AdminCard>
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="font-display text-base font-bold text-solar-navy">Recent Projects</h2>
            <Link href="/admin/projects" className="inline-flex items-center gap-1 text-xs font-semibold text-solar-blue hover:underline">
              View all <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-5 py-3 font-medium">Project</th>
                  <th className="px-5 py-3 font-medium">Category</th>
                  <th className="px-5 py-3 font-medium">Capacity</th>
                  <th className="px-5 py-3 font-medium">Location</th>
                  <th className="px-5 py-3 font-medium">Annual Savings</th>
                </tr>
              </thead>
              <tbody>
                {recentProjects.map((project) => (
                  <tr key={project.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                    <td className="px-5 py-3 font-medium text-foreground">{project.title}</td>
                    <td className="px-5 py-3">
                      <Badge variant="outline" className="capitalize">{project.category}</Badge>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{project.capacity}</td>
                    <td className="px-5 py-3 text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {project.location}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-medium text-solar-navy">{project.annualSavings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminCard>
      </div>
    </div>
  );
}
