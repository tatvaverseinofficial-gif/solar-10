import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/blogs";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminAddButton, AdminRowActions } from "@/components/admin/AdminActions";
import { Badge } from "@/components/ui/badge";
import { isDemoMode } from "@/lib/admin-mode";

export const metadata = createMetadata({
  title: "Blogs",
  description: "Manage blog posts published on the Aarohan Solar blog.",
  noIndex: true,
});

export default function AdminBlogsPage() {
  const isDemo = isDemoMode();

  return (
    <div>
      <AdminPageHeader
        title="Blogs"
        description={
          isDemo
            ? "View-only list from mock data. Set DEMO=false in .env to enable editing."
            : "Edit mode enabled. Mutations run through the mock Supabase client."
        }
        action={<AdminAddButton label="New Post" table="blogs" />}
      />

      <AdminCard>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-5 py-3 font-medium">Title</th>
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">Author</th>
                <th className="px-5 py-3 font-medium">Published</th>
                <th className="px-5 py-3 font-medium">Read Time</th>
                <th className="px-5 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogPosts.map((post) => (
                <tr key={post.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                  <td className="max-w-sm px-5 py-3">
                    <p className="line-clamp-1 font-medium text-foreground">{post.title}</p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <Badge variant="outline" className="capitalize">{post.category.replace("-", " ")}</Badge>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{post.author}</td>
                  <td className="px-5 py-3 text-muted-foreground">{post.publishedAt}</td>
                  <td className="px-5 py-3 text-muted-foreground">{post.readTime}</td>
                  <td className="px-5 py-3">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-solar-navy"
                        title="View on site"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                      <AdminRowActions table="blogs" id={post.id} />
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
