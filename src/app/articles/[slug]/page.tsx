import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { recentPosts } from "@/data/content";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return recentPosts.map((post) => ({ slug: post.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = recentPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div>
      <PageHeader
        title={post.title}
        breadcrumbs={[{ label: "Articles", href: "/articles" }, { label: post.title }]}
      />

      <section className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto max-w-2xl">
          <article className="prose prose-invert max-w-none">
            <p className="text-[var(--muted-foreground)]">
              Full article content for &quot;{post.title}&quot; would be loaded from
              a CMS or database. This is a placeholder for the enhanced Miftahul
              Falaah web application.
            </p>
          </article>
          <Link href="/articles" className="mt-8 inline-block">
            <Button variant="outline">← Back to Articles</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
