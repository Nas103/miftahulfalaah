import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { recentPosts } from "@/data/content";
import { Search } from "lucide-react";
import { Icon3D } from "@/components/ui/Icon3D";
import Link from "next/link";

export default function FatawaPage() {
  return (
    <div className="bg-grid">
      <PageHeader title="Fatawa" breadcrumbs={[{ label: "Fatawa" }]} />

      <section className="container mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="text-[var(--muted-foreground)]">
              Islamic legal opinions and rulings from our Darul Iftaa. Browse
              fatawa by category or search for specific topics.
            </p>
            <div className="mt-8 space-y-4">
              {recentPosts.map((post, i) => (
                <Card key={post.slug} variant="module" glow={i % 2 === 0 ? "blue" : "purple"}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      <Link
                        href={`/fatawa/${post.slug}`}
                        className="hover:text-[var(--primary)] transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-[var(--muted-foreground)]">
                      Fatwa excerpt for {post.title}...
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">Search</label>
              <div className="relative">
                <Icon3D depth="sm" static className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]">
                  <Search className="h-4 w-4" />
                </Icon3D>
                <Input
                  placeholder="Search fatawa..."
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                <span className="h-4 w-1 rounded-full bg-[var(--primary)]" />
                Recent Posts
              </h3>
              <ul className="space-y-2">
                {recentPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/articles/${post.slug}`}
                      className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                <span className="h-4 w-1 rounded-full bg-[var(--primary)]" />
                Recent Comments
              </h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                No comments yet.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
