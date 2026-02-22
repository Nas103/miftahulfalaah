import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { ImageIcon } from "lucide-react";
import { Icon3D } from "@/components/ui/Icon3D";

const galleryPlaceholders = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  alt: `Miftahul Falaah campus ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <div className="bg-grid">
      <PageHeader title="Gallery" breadcrumbs={[{ label: "Gallery" }]} />

      <section className="container mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryPlaceholders.map((item, i) => (
            <Card
              key={item.id}
              variant="module"
              glow={i % 3 === 0 ? "blue" : i % 3 === 1 ? "orange" : "purple"}
              className="group aspect-[4/3] overflow-hidden p-0"
            >
              <div className="flex h-full w-full items-center justify-center bg-[var(--border)]/30 transition-all duration-300 group-hover:bg-[var(--primary)]/20 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <Icon3D depth="lg" glow="blue" className="text-[var(--muted-foreground)] group-hover:text-[var(--primary)]">
                  <ImageIcon className="h-12 w-12" />
                </Icon3D>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-[var(--muted-foreground)]">
          Add your campus photos to the <code>public/gallery</code> folder and
          wire up Next.js Image for optimal loading.
        </p>
      </section>
    </div>
  );
}
