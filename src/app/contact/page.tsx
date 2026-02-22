"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { siteConfig } from "@/data/content";
import { Mail, Loader2 } from "lucide-react";
import { Icon3D } from "@/components/ui/Icon3D";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-grid">
      <PageHeader title="Contact Us" breadcrumbs={[{ label: "Contact Us" }]} />

      <section className="container mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card variant="module" glow="blue">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <p className="text-sm text-[var(--muted-foreground)]">
                Get in touch with our administration team.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Your name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Your email *
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Subject *
                  </label>
                  <Input
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Your message (optional)
                  </label>
                  <textarea
                    className="flex min-h-[120px] w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:border-transparent"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Your message..."
                    rows={5}
                  />
                </div>
                {sent && (
                  <p className="text-sm text-[var(--primary)]">
                    Message sent successfully. JazakAllah!
                  </p>
                )}
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "SUBMIT"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card variant="module" glow="orange">
              <CardHeader>
                <CardTitle>Location</CardTitle>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {siteConfig.location}
                </p>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-[var(--border)]/30">
                  <iframe
                    title="Miftahul Falaah Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.1554!2d30.4472!3d-30.7217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQzJzE4LjEiUyAzMMKwMjYnNDkuOSJF!5e0!3m2!1sen!2sza!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="min-h-[200px]"
                  />
                </div>
                <p className="mt-4 text-sm text-[var(--muted-foreground)]">
                  2 Boundary Road, Oslo Beach, Port Shepstone, South Africa
                </p>
              </CardContent>
            </Card>

            <Card variant="module" glow="purple">
              <CardHeader>
                <CardTitle>Email contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href={`mailto:${siteConfig.emails.admin}`}
                  className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  <Icon3D depth="sm" glow="blue">
                    <Mail className="h-4 w-4" />
                  </Icon3D>
                  Administration — {siteConfig.emails.admin}
                </a>
                <a
                  href={`mailto:${siteConfig.emails.admissions}`}
                  className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  <Icon3D depth="sm" glow="blue">
                    <Mail className="h-4 w-4" />
                  </Icon3D>
                  Admissions — {siteConfig.emails.admissions}
                </a>
                <a
                  href={`mailto:${siteConfig.emails.finance}`}
                  className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  <Icon3D depth="sm" glow="blue">
                    <Mail className="h-4 w-4" />
                  </Icon3D>
                  Finance — {siteConfig.emails.finance}
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
