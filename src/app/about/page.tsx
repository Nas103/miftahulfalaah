import { PageHeader } from "@/components/layout/PageHeader";
import { aboutContent } from "@/data/content";

export default function AboutPage() {
  return (
    <div className="bg-grid">
      <PageHeader title="About Us" breadcrumbs={[{ label: "About Us" }]} />

      <section className="container mx-auto max-w-4xl px-4 py-16 text-center md:px-6">
        <div className="mx-auto">
          <h2 className="text-xl font-semibold text-[var(--muted-foreground)]">
            Message from the Respected Founder and Principal,{" "}
            {aboutContent.founder}
          </h2>
          <p className="mt-4 text-center text-2xl text-[var(--primary)] drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]" dir="rtl">
            {aboutContent.bismillah}
          </p>

          <div className="mt-12 space-y-6 text-left text-[var(--muted-foreground)]">
            {aboutContent.paragraphs.map((para, i) => (
              <p key={i} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
