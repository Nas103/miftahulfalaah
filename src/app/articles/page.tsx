import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { recentPosts, featuredArticle } from "@/data/content";

export default function ArticlesPage() {
  return (
    <div className="bg-grid">
      <PageHeader title="Articles" breadcrumbs={[{ label: "Articles" }]} />

      <section className="container mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="mb-6 text-xl font-bold text-[var(--foreground)]">
          {featuredArticle}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post, i) => (
            <Card key={post.slug} variant="module" glow={i % 3 === 0 ? "blue" : i % 3 === 1 ? "orange" : "purple"}>
              <CardHeader>
                <CardTitle>
                  <Link
                    href={`/articles/${post.slug}`}
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Link href={`/articles/${post.slug}`}>
                  <Button variant="glass" size="sm">Learn more</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
