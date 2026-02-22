"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo3D } from "@/components/logo/Logo3D";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/audio", label: "Audio" },
  { href: "/articles", label: "Articles" },
  { href: "/ask-fatwa", label: "Ask Fatwa" },
  {
    href: "/fatawa",
    label: "Fatawa",
    dropdown: [
      { href: "/fatawa", label: "All Fatawa" },
      { href: "/fatawa?category=fiqh", label: "Fiqh" },
    ],
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fatawaOpen, setFatawaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--card)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--card)]/80 shadow-[0_0_30px_rgba(59,130,246,0.05)]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <Logo3D size={120} />
          <span className="text-lg font-semibold tracking-tight">
            Miftahul Falaah
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setFatawaOpen(true)}
                onMouseLeave={() => setFatawaOpen(false)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-0.5 px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-[var(--border)]/50",
                    pathname === item.href
                      ? "text-[var(--primary)]"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                {fatawaOpen && (
                  <div className="absolute left-0 top-full mt-1 w-48 rounded-lg border border-[var(--border)] bg-[var(--card)] py-2 shadow-xl">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-[var(--muted-foreground)] hover:bg-[var(--border)]/50 hover:text-[var(--foreground)]"
                        onClick={() => setFatawaOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-[var(--border)]/50",
                  pathname === item.href
                    ? "text-[var(--primary)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--card)] md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-3 rounded-md text-sm font-medium",
                  pathname === item.href
                    ? "text-[var(--primary)] bg-[var(--border)]/30"
                    : "text-[var(--muted-foreground)]"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
