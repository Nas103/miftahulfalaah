import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHeader({ title, breadcrumbs = [] }: PageHeaderProps) {
  const fullBreadcrumbs = [{ label: "Home", href: "/" }, ...breadcrumbs];

  return (
    <div className="border-b border-[var(--border)] bg-[var(--card)]/50 radial-glow">
      <div className="container mx-auto max-w-6xl px-4 py-6 md:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            {title}
          </h1>
          <nav className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
            {fullBreadcrumbs.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="h-4 w-4 text-[var(--muted)]" />}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 hover:text-[var(--primary)] transition-colors"
                  >
                    {i === 0 && <Home className="h-4 w-4" />}
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[var(--foreground)]">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
