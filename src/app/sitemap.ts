import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.website;
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/government-subsidy",
    "/calculator",
    "/gallery",
    "/blog",
    "/faq",
    "/testimonials",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((b) => ({
    url: `${base}/blog/${b.slug}`,
    lastModified: new Date(b.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}
