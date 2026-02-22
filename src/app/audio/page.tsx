import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { audioCategories } from "@/data/content";
import { Headphones } from "lucide-react";
import { Icon3D } from "@/components/ui/Icon3D";

export default function AudioPage() {
  return (
    <div className="bg-grid">
      <PageHeader title="Audio" breadcrumbs={[{ label: "Audio" }]} />

      <section className="container mx-auto max-w-4xl px-4 py-16 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {audioCategories.map((category, i) => (
            <Link key={i} href={`/audio/${category.toLowerCase().replace(/\s+/g, "-")}`}>
              <Card variant="module" glow={i % 2 === 0 ? "blue" : "orange"} className="group flex items-center gap-4 p-6 transition-all hover:scale-[1.01]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/20 text-[var(--primary)]">
                  <Icon3D depth="md" glow="blue">
                    <Headphones className="h-7 w-7" />
                  </Icon3D>
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="group-hover:text-[var(--primary)] transition-colors">
                    {category}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
