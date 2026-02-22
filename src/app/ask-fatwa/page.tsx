"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Loader2, Send } from "lucide-react";
import { Icon3D } from "@/components/ui/Icon3D";

export default function AskFatwaPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch("/api/ask-fatwa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      setResult(data.response || "Your inquiry has been received. Our scholars will respond Insha Allah.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-grid">
      <PageHeader title="Ask Fatwa" breadcrumbs={[{ label: "Ask Fatwa" }]} />

      <section className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto max-w-2xl px-4 py-16">
          <Card variant="module" glow="blue" className="border-[var(--primary)]/30">
            <CardHeader>
              <CardTitle>Submit your Deeni question</CardTitle>
              <p className="text-sm text-[var(--muted-foreground)]">
                Our Darul Iftaa will promptly answer your question. AI-assisted
                preliminary guidance may be provided.
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
                    placeholder="Subject of your inquiry"
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
                    placeholder="Your detailed question..."
                    rows={5}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}

                {result && (
                  <div className="rounded-lg border border-[var(--primary)]/30 bg-[var(--primary)]/10 p-4 text-sm">
                    {result}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Icon3D depth="sm" glow="blue" className="mr-2">
                        <Send className="h-4 w-4" />
                      </Icon3D>
                      SUBMIT
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
