import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { meta } from "@/components/site/Page";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact Us — Angadi", "Get in touch with the Angadi team for customer support and order inquiries."),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [busy, setBusy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    const p = schema.safeParse(f);
    if (!p.success) {
      toast.error(p.error.issues[0]?.message ?? "Please fill in all fields correctly");
      return;
    }
    setBusy(true);
    const { error } = await supabase.from("contact_messages").insert(p.data);
    setBusy(false);

    if (error) {
      toast.error("Could not send your message. Please try again.");
      return;
    }
    setSubmitted(true);
    toast.success("Thank you! Your message has been sent.");
    setF({ name: "", email: "", message: "" });
  };

  return (
    <div className="wrap py-6">
      {/* Breadcrumbs */}
      <div className="crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <span className="text-foreground">Contact Us</span>
      </div>

      <div className="mt-4">
        <h1 className="text-3xl font-bold text-navy dark:text-white md:text-4xl">Contact Us</h1>
        <p className="mt-1 text-sm text-muted-foreground">Have questions about an order or product? We're here to help.</p>
        <div className="gold-rule my-5 w-40" />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact Details & Highlights */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-line bg-card p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-navy dark:text-white">Customer Support</h2>
              <div className="flex items-start gap-3 text-sm">
                <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <b className="block text-foreground font-semibold">Email Us</b>
                  <span className="text-muted-foreground">support@angadi.in</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <b className="block text-foreground font-semibold">Support Hours</b>
                  <span className="text-muted-foreground">Monday – Saturday: 9:00 AM – 7:00 PM IST</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <b className="block text-foreground font-semibold">Marketplace Operations</b>
                  <span className="text-muted-foreground">India</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-soft p-5 text-xs text-muted-foreground">
              <b>Prompt Response Guarantee</b>
              <p className="mt-1">
                We respond to all customer inquiries within 24 hours. For existing orders, please mention your order reference number.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="box max-w-none">
            {submitted && (
              <div className="mb-4 rounded-lg bg-green-100 p-3 text-xs font-semibold text-green-800 dark:bg-green-950 dark:text-green-300">
                ✓ Message received! We will reply to your email within 24 hours.
              </div>
            )}

            <form onSubmit={send} className="space-y-4">
              <div>
                <label>Your Name</label>
                <input
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={f.name}
                  onChange={(e) => setF({ ...f, name: e.target.value })}
                />
              </div>

              <div>
                <label>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="ananya@example.com"
                  value={f.email}
                  onChange={(e) => setF({ ...f, email: e.target.value })}
                />
              </div>

              <div>
                <label>Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="How can we help you today?"
                  value={f.message}
                  onChange={(e) => setF({ ...f, message: e.target.value })}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={busy}
                  className="btn flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  {busy ? "Sending…" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
