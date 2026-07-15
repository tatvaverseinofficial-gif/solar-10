"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/data/blogs";
import type { BlogCategory } from "@/types";

export function BlogListing() {
  const [category, setCategory] = useState<"all" | BlogCategory>("all");

  const posts = useMemo(
    () =>
      category === "all"
        ? blogPosts
        : blogPosts.filter((p) => p.category === category),
    [category]
  );

  const chip = (active: boolean) =>
    `rounded-full px-5 py-2.5 text-sm font-semibold transition ${
      active
        ? "bg-solar-navy text-white shadow-[var(--shadow-sm)]"
        : "border border-solar-line bg-white text-muted-foreground hover:border-solar-navy/30 hover:text-solar-navy"
    }`;

  return (
    <div>
      <div className="mb-12 flex flex-wrap justify-center gap-2.5">
        <button type="button" onClick={() => setCategory("all")} className={chip(category === "all")}>
          All
        </button>
        {blogCategories.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setCategory(c.slug)}
            className={chip(category === c.slug)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className={`card-premium group overflow-hidden ${
              index === 0 && category === "all" ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <div
              className={`relative overflow-hidden ${
                index === 0 && category === "all" ? "aspect-[21/9] md:aspect-[21/8]" : "aspect-[16/10]"
              }`}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-navy-deep/40 via-transparent to-transparent" />
            </div>
            <div className="p-6 md:p-7">
              <p className="eyebrow text-solar-blue">
                {blogCategories.find((c) => c.slug === post.category)?.label}
              </p>
              <h2 className="mt-3 font-display text-xl font-bold text-solar-navy transition group-hover:text-solar-blue md:text-2xl">
                {post.title}
              </h2>
              <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {post.readTime} ·{" "}
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
