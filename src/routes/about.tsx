import { createFileRoute, Link } from "@tanstack/react-router";
import { meta } from "@/components/site/Page";
import { Rocket, ShieldCheck, Star, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => meta("About Us — Angadi", "Learn about Angadi – India's online marketplace built for a brighter tomorrow."),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="wrap py-6">
      {/* Breadcrumbs */}
      <div className="crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <span className="text-foreground">About Us</span>
      </div>

      <div className="mt-4">
        <h1 className="text-3xl font-bold text-navy dark:text-white md:text-4xl">About Angadi</h1>
        <div className="gold-rule my-5 w-40" />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4 text-sm leading-relaxed text-foreground/85 md:text-base">
            <p>
              <strong>Angadi</strong> is an online marketplace built to make good products easy to find and accessible to everyone. We work with trusted manufacturers and suppliers to bring quality goods directly to your doorstep without middlemen or inflated markups.
            </p>
            <p>
              Our promise is simple: carefully selected products, reliable delivery, secure payments, and dedicated customer support whenever you need it.
            </p>
            <p className="font-semibold text-navy dark:text-gold">
              Shop · Grow · Succeed — Better choices for a brighter tomorrow.
            </p>
            <div className="pt-4">
              <Link to="/categories" className="btn">
                Browse All Categories
              </Link>
            </div>
          </div>

          <div className="perks">
            <div className="perk">
              <Rocket className="ic text-navy shrink-0" />
              <div>
                <b>Fast &amp; Reliable Delivery</b>
                <p>Prompt shipping across India and worldwide destinations</p>
              </div>
            </div>
            <div className="perk">
              <ShieldCheck className="ic text-navy shrink-0" />
              <div>
                <b>100% Secure Shopping</b>
                <p>Safe payments, privacy protection, and transparent checkout</p>
              </div>
            </div>
            <div className="perk">
              <Star className="ic text-navy shrink-0" />
              <div>
                <b>Top Quality Products</b>
                <p>Authentic, verified items handpicked for quality and durability</p>
              </div>
            </div>
            <div className="perk">
              <Sparkles className="ic text-navy shrink-0" />
              <div>
                <b>Local Reach, Global Standards</b>
                <p>Empowering rural and urban customers with equal access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
