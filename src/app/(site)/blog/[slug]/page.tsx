import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, blogCategories, getPostBySlug } from "@/data/blogs";
import { PageHero, CTASection } from "@/components/shared/Section";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

function renderContent(content: string) {
  const blocks = content.split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="mt-10 font-display text-2xl font-bold text-solar-navy"
        >
          {trimmed.replace(/^##\s+/, "")}
        </h2>
      );
    }
    if (trimmed.startsWith("### ")) {
      return (
        <h3
          key={i}
          className="mt-8 font-display text-xl font-bold text-solar-navy"
        >
          {trimmed.replace(/^###\s+/, "")}
        </h3>
      );
    }
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
          {items.map((item) => (
            <li key={item}>{item.replace(/^-\s+/, "")}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
        {trimmed.split(/(\*\*[^*]+\*\*)/).map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={j} className="font-semibold text-foreground">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return <span key={j}>{part}</span>;
        })}
      </p>
    );
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const categoryLabel =
    blogCategories.find((c) => c.slug === post.category)?.label ?? post.category;

  return (
    <>
      <PageHero
        eyebrow={categoryLabel}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Article" },
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="container-premium max-w-3xl">
          <div className="relative mb-10 aspect-[21/10] overflow-hidden rounded-3xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="font-semibold text-solar-navy">{post.author}</span>
            <span>·</span>
            <span>{post.authorRole}</span>
            <span>·</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{post.readTime} read</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8">{renderContent(post.content)}</div>
          <p className="mt-12 text-sm">
            <Link href="/blog" className="font-semibold text-solar-blue hover:underline">
              ← Back to all articles
            </Link>
          </p>
        </div>
      </article>
      <CTASection />
    </>
  );
}
