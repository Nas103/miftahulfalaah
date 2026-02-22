import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { HeroEnrollButton } from "@/components/enroll/HeroEnrollButton";
import {
  siteConfig,
  courses,
  recentPosts,
} from "@/data/content";

export default function Home() {
  return (
    <div className="bg-grid">
      {/* Hero - centered, dark, vertical beam */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden border-b border-[var(--border)] py-20 radial-glow md:py-28">
        <div className="hero-beam" aria-hidden />
        <div className="container relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="hero-title-wrap relative z-10 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="hero-title-smoke" aria-hidden />
            <span className="hero-title-gold-dust relative z-10">Miftahul Falaah</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted-foreground)] md:text-xl">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 max-w-xl text-[var(--muted-foreground)]">
            Located in Oslo Beach, Port Shepstone — 125 km South of Durban.
            Spectacular ocean views rejuvenate the minds and spirit of our students.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <HeroEnrollButton />
            <Link href="/contact">
              <Button variant="liquid" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
          {/* Floating dashboard placeholder */}
          <div className="mt-16 w-full max-w-4xl rounded-2xl border border-[var(--primary)]/30 bg-[var(--card)]/80 p-6 shadow-[0_0_40px_rgba(59,130,246,0.15)] backdrop-blur-sm [transform:perspective(800px)_rotateX(2deg)]">
            <div className="grid gap-4 sm:grid-cols-3">
              {["Courses", "Darul Iftaa", "Admissions"].map((item, i) => (
                <div
                  key={item}
                  className="rounded-xl border border-[var(--border)] bg-[var(--background)]/50 p-4 text-center"
                >
                  <p className="font-medium text-[var(--primary)]">{item}</p>
                  <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                    Learn more →
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Light section - Unmatched productivity style */}
      <section className="border-b border-[var(--border)] bg-[var(--background)] py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-semibold md:text-3xl">Our Mission & History</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
            Our aim is to propagate Islam in its pristine purity as propounded by
            our Salafus Saaliheen and Akaabireen. We make Dua unto Allah Ta&apos;ala
            that He enables us to do so. Ameen.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <Card
              variant="module"
              glow="blue"
              className="flex flex-col items-start p-8 text-left"
            >
              <h3 className="text-xl font-semibold">Our History</h3>
              <p className="mt-4 text-[var(--muted-foreground)]">
                Founded by Hadhrat Mufti Yacoob Vally Sahib دامت برکاته in 1997
                with 5 Hifdhul Qur&apos;aan students. Today a fully fledged Darul Uloom.
              </p>
            </Card>
            <Card
              variant="module"
              glow="orange"
              className="flex flex-col items-start p-8 text-left"
            >
              <h3 className="text-xl font-semibold">Courses Offered</h3>
              <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm text-[var(--muted-foreground)]">
                {courses.slice(0, 5).map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ol>
              <Link href="/about" className="mt-6">
                <Button variant="glass" size="sm">
                  Syllabus
                </Button>
              </Link>
            </Card>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[var(--muted-foreground)]">
            Boarding, hostel, meals. Affiliated to ATII. Darul Iftaa for Deeni
            questions. Students welcome locally and abroad.
          </p>
        </div>
      </section>

      {/* Dark section - Articles grid */}
      <section className="relative border-b border-[var(--border)] bg-[var(--card)]/40 py-20 radial-glow">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-center text-2xl font-semibold opacity-90 md:text-3xl">
            ARTICLES
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.slice(0, 3).map((post, i) => (
              <Card
                key={post.slug}
                variant="module"
                glow={i % 3 === 0 ? "blue" : i % 3 === 1 ? "orange" : "purple"}
                className="group"
              >
                <CardHeader>
                  <CardTitle className="group-hover:text-[var(--primary)] transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href={`/articles/${post.slug}`}>
                    <Button variant="glass" size="sm">
                      Learn more
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA - dark, glowing left, content right */}
      <section className="relative flex min-h-[40vh] flex-col items-center justify-center overflow-hidden py-20 md:flex-row md:gap-16">
        <div
          className="absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--primary)]/20 blur-[80px]"
          aria-hidden
        />
        <div
          className="absolute right-1/4 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[var(--accent)]/15 blur-[60px]"
          aria-hidden
        />
        <div className="container relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center md:flex-row md:justify-between md:text-left">
          <div className="md:max-w-md">
            <h2 className="text-3xl font-bold md:text-4xl">Join the Movement</h2>
            <p className="mt-4 text-[var(--muted-foreground)]">
              Be part of Miftahul Falaah — Islamic Seat for Higher Deeni Education.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-0">
            <Link href="/contact">
              <Button variant="liquid" size="lg">Contact Us</Button>
            </Link>
            <Link href="/about">
              <Button variant="liquid" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
