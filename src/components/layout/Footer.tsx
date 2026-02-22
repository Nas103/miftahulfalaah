import Link from "next/link";
import { siteConfig } from "@/data/content";
import { ChevronUp, MapPin, Mail } from "lucide-react";
import { Icon3D } from "@/components/ui/Icon3D";
import { Logo3D } from "@/components/logo/Logo3D";

const footerLinks = [
  { href: "/about", label: "About us" },
  { href: "/audio", label: "Audio" },
  { href: "/articles", label: "Articles" },
  { href: "/ask-fatwa", label: "Ask Fatwa" },
  { href: "/fatawa", label: "Fatawa" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--card)] bg-grid overflow-hidden">
      {/* Subtle radial glow and gold accent */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-48 w-64 -translate-x-1/2 rounded-full bg-[var(--primary)]/10 blur-[60px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-32 w-32 rounded-full bg-[212,175,55]/15 blur-[50px]"
        style={{ backgroundColor: "rgba(192, 192, 192, 0.12)" }}
        aria-hidden
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 transition-transform hover:scale-105">
              <Logo3D size={168} />
              <div>
                <p className="text-lg font-semibold tracking-tight">
                  Miftahul Falaah
                </p>
                <p className="mt-0.5 text-sm text-[var(--muted-foreground)]">
                  {siteConfig.tagline}
                </p>
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              <span className="h-4 w-1 rounded-full bg-[var(--primary)]" />
              Quick Links
            </h3>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)] hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              <span className="h-4 w-1 rounded-full bg-[var(--accent)]" />
              Contact
            </h3>
            <div className="space-y-3">
              <p className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                <span>{siteConfig.location}</span>
              </p>
              <div className="space-y-2">
                <a
                  href={`mailto:${siteConfig.emails.admin}`}
                  className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
                >
                  <Icon3D depth="sm" static>
                    <Mail className="h-4 w-4" />
                  </Icon3D>
                  {siteConfig.emails.admin}
                </a>
                <a
                  href={`mailto:${siteConfig.emails.admissions}`}
                  className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.emails.admissions}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-[var(--border)] pt-8 md:flex-row md:justify-between">
          <p className="text-sm text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} Miftahul Falaah. All rights reserved.
          </p>
          <Link
            href="#top"
            className="glass-water flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-[var(--foreground)] transition-all hover:border-[var(--primary)]/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            aria-label="Scroll to top"
          >
            <Icon3D depth="sm" glow="blue">
              <ChevronUp className="h-5 w-5" />
            </Icon3D>
          </Link>
        </div>
      </div>
    </footer>
  );
}
