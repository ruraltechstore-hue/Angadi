import { createFileRoute, Link } from "@tanstack/react-router";
import { meta } from "@/components/site/Page";
import {
  ShieldCheck,
  Scale,
  Truck,
  ChevronRight,
  Sun,
  BadgeCheck,
  Building2,
} from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () =>
    meta(
      "Terms & Conditions — Angadi | A New Era of Indian Enterprise",
      "Terms and Conditions governing the use of the Angadi marketplace, upholding trust, authentic Indian enterprise, transparent delivery, and fair commerce."
    ),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2b1803] transition-colors duration-300 dark:bg-[#140d04] dark:text-[#fef3c7]">
      {/* Top Breadcrumbs */}
      <div className="border-b border-amber-200/70 bg-amber-50/60 dark:border-amber-900/50 dark:bg-[#1c1206]/50">
        <div className="wrap flex items-center justify-between py-3 text-xs font-medium text-amber-800 dark:text-amber-300">
          <div className="flex items-center gap-2">
            <Link to="/" className="transition hover:text-amber-950 dark:hover:text-amber-100">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-amber-500" />
            <span className="font-semibold text-amber-950 dark:text-amber-100">Terms &amp; Conditions</span>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <Sun className="h-3.5 w-3.5 text-amber-500 animate-spin-slow" />
            <span className="text-[11px] font-semibold tracking-widest text-amber-700 dark:text-amber-400 uppercase">
              Monochromatic Sunshine Edition
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* HERO SECTION                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden border-b border-amber-200/80 py-12 lg:py-16 dark:border-amber-900/50">
        <div className="wrap">
          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/90 px-3.5 py-1 text-xs font-bold tracking-[0.2em] text-amber-900 uppercase dark:border-amber-700 dark:bg-amber-950/80 dark:text-amber-200">
              <Scale className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              LEGAL ETHICS &amp; GOVERNANCE
            </div>

            <div>
              <h1 className="text-3xl font-black tracking-tight text-amber-950 sm:text-4xl lg:text-5xl dark:text-amber-100">
                Terms &amp; Conditions
              </h1>
              <p className="mt-2 text-lg font-bold tracking-tight text-amber-800 sm:text-xl dark:text-amber-300">
                Angadi — A New Era of Indian Enterprise
              </p>
              <div className="mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600" />
            </div>

            <p className="text-sm leading-relaxed text-amber-900/90 sm:text-base dark:text-amber-200/90">
              Rooted in the timeless Indian tradition of honest commerce, fair trade, and mutual respect, these Terms and Conditions govern your engagement with the Angadi marketplace. We believe every interaction matters — every product discovered, every order placed, every customer served, and every Indian business empowered.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-amber-800/80 dark:text-amber-300/80">
              <span>Last updated: October 2026</span>
              <span>•</span>
              <span>Jurisdiction: Republic of India</span>
              <span>•</span>
              <span>Governed by Consumer Protection (E-Commerce) Rules</span>
            </div>
          </div>

          {/* Quick-Pillar Summary Cards in Sunshine Style */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 shadow-sm transition hover:border-amber-400 dark:border-amber-900/60 dark:bg-amber-950/30 dark:hover:border-amber-600">
              <div className="mb-2 inline-flex rounded-lg bg-amber-500 p-2 text-amber-950 font-bold dark:bg-amber-400">
                <BadgeCheck className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-amber-950 dark:text-amber-100">100% Authentic Products</h3>
              <p className="mt-1 text-xs text-amber-900/70 dark:text-amber-300/80">
                Direct partnerships with verified Indian manufacturers, artisans, and enterprises.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 shadow-sm transition hover:border-amber-400 dark:border-amber-900/60 dark:bg-amber-950/30 dark:hover:border-amber-600">
              <div className="mb-2 inline-flex rounded-lg bg-amber-500 p-2 text-amber-950 font-bold dark:bg-amber-400">
                <Truck className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-amber-950 dark:text-amber-100">Zero Hidden Charges</h3>
              <p className="mt-1 text-xs text-amber-900/70 dark:text-amber-300/80">
                Delivery fees are strictly verified by pincode prior to checkout; no surprise charges.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 shadow-sm transition hover:border-amber-400 dark:border-amber-900/60 dark:bg-amber-950/30 dark:hover:border-amber-600">
              <div className="mb-2 inline-flex rounded-lg bg-amber-500 p-2 text-amber-950 font-bold dark:bg-amber-400">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-amber-950 dark:text-amber-100">Server-Enforced Pricing</h3>
              <p className="mt-1 text-xs text-amber-900/70 dark:text-amber-300/80">
                Order totals are computed by secure database triggers to guarantee price integrity.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 shadow-sm transition hover:border-amber-400 dark:border-amber-900/60 dark:bg-amber-950/30 dark:hover:border-amber-600">
              <div className="mb-2 inline-flex rounded-lg bg-amber-500 p-2 text-amber-950 font-bold dark:bg-amber-400">
                <Building2 className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-amber-950 dark:text-amber-100">Empowering Indian Sellers</h3>
              <p className="mt-1 text-xs text-amber-900/70 dark:text-amber-300/80">
                Equitable marketplace conditions protecting both consumer rights and local makers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* DETAILED TERMS SECTIONS                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-12 lg:py-16">
        <div className="wrap max-w-4xl space-y-12">
          {/* Section 1 */}
          <div className="space-y-3 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 sm:p-8 dark:border-amber-900/40 dark:bg-amber-950/20">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
              <span>✦</span> SECTION 01
            </div>
            <h2 className="text-xl font-bold tracking-tight text-amber-950 sm:text-2xl dark:text-amber-100">
              Acceptance of Terms &amp; The Angadi Enterprise Model
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
              <p>
                Welcome to <strong>Angadi</strong> (“we”, “our”, or “us”). By accessing our digital marketplace, browsing catalog items, registering an account, or placing an order, you agree to be bound by these Terms and Conditions and our Privacy Policy.
              </p>
              <p>
                Angadi is an Indian e-commerce marketplace dedicated to reviving the historical ethos of the ancient Indian <em>Angadi</em> — an open, honest, and vibrant marketplace where consumers discover quality goods, businesses reach new customers, and Indian enterprise thrives in the modern digital age.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-3 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 sm:p-8 dark:border-amber-900/40 dark:bg-amber-950/20">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
              <span>⟡</span> SECTION 02
            </div>
            <h2 className="text-xl font-bold tracking-tight text-amber-950 sm:text-2xl dark:text-amber-100">
              Authentic Indian Products &amp; Verified Sourcing
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
              <p>
                We take immense pride in supporting Indian craftsmanship, manufacturing, and commerce. We partner with verified manufacturers, artisans, and distributors to ensure authenticity, quality standards, and genuine goods.
              </p>
              <p>
                In keeping with our promise of excellence, we never invent catalog entries, fake ratings, or misleading product specifications. Every item listed is subjected to our catalog verification protocols before presentation to customers.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 sm:p-8 dark:border-amber-900/40 dark:bg-amber-950/20">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
              <span>➜</span> SECTION 03
            </div>
            <h2 className="text-xl font-bold tracking-tight text-amber-950 sm:text-2xl dark:text-amber-100">
              Transparent Pricing &amp; Pincode-Based Delivery Fee Safeguard
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
              <p>
                All product prices are quoted in Indian Rupees (₹) and include applicable statutory taxes unless expressly detailed otherwise.
              </p>
              <p>
                <strong>Unconfirmed Delivery Fee Protection:</strong> In strict alignment with our customer trust policy, unconfirmed delivery charges block order submission in both the storefront user interface and database order triggers. Shipping charges are computed transparently based on destination postal pincodes. We never charge made-up or speculative delivery fees.
              </p>
              <p>
                <strong>Server-Verified Pricing:</strong> All final order totals are recomputed and validated server-side by our automated database pricing trigger (`price_order`). Client-side price alterations are strictly blocked and rejected to guarantee absolute transaction integrity.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-3 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 sm:p-8 dark:border-amber-900/40 dark:bg-amber-950/20">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
              <span>◇</span> SECTION 04
            </div>
            <h2 className="text-xl font-bold tracking-tight text-amber-950 sm:text-2xl dark:text-amber-100">
              Orders, Fulfillment &amp; Nationwide Delivery
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
              <p>
                Placing an item in your shopping cart does not reserve inventory or freeze promotional prices. Orders are formally confirmed upon successful payment verification and delivery address validation.
              </p>
              <p>
                We coordinate with established logistics providers across India and international transit corridors to achieve prompt and safe dispatches. While we strive to meet all estimated delivery dates, unforeseen courier delays or regional disruptions will be communicated promptly through order tracking.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-3 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 sm:p-8 dark:border-amber-900/40 dark:bg-amber-950/20">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
              <span>❖</span> SECTION 05
            </div>
            <h2 className="text-xl font-bold tracking-tight text-amber-950 sm:text-2xl dark:text-amber-100">
              User Accounts &amp; Platform Integrity
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
              <p>
                While customers may freely browse products and utilize their cart and wishlist without logging in, finalizing an order requires providing accurate shipping and contact details.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your credentials. Any fraudulent use, abusive bot scraping, or unauthorized exploitation of promotional discounts will result in immediate termination of account privileges and cancellation of suspicious orders.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="space-y-3 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 sm:p-8 dark:border-amber-900/40 dark:bg-amber-950/20">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
              <span>✧</span> SECTION 06
            </div>
            <h2 className="text-xl font-bold tracking-tight text-amber-950 sm:text-2xl dark:text-amber-100">
              Returns, Replacements &amp; Fair Play
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
              <p>
                We believe in straightforward, stress-free customer resolutions. If an item arrives damaged, defective, or materially distinct from its verified description, you are eligible for an immediate replacement or full refund according to our Return Policy.
              </p>
              <p>
                To safeguard independent artisans and regional small enterprises from fraudulent chargebacks or dishonest returns, returned items must include original tags, packaging, and proof of purchase.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="space-y-3 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 sm:p-8 dark:border-amber-900/40 dark:bg-amber-950/20">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
              <span>∞</span> SECTION 07
            </div>
            <h2 className="text-xl font-bold tracking-tight text-amber-950 sm:text-2xl dark:text-amber-100">
              Intellectual Property &amp; Legal Jurisdiction
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
              <p>
                The name <em>Angadi</em>, the brand identity “A New Era of Indian Enterprise”, associated logos, visual styling, illustrations, text, and catalog curations are proprietary assets of Angadi and protected under Indian and international intellectual property laws.
              </p>
              <p>
                These Terms and Conditions shall be interpreted, construed, and enforced in accordance with the laws of the Republic of India. Any legal disputes arising out of the use of the platform shall fall under the jurisdiction of the competent courts of India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* MAJESTIC MONOCHROMATIC SUNSHINE BANNER                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden border-b border-amber-300/80 bg-gradient-to-r from-[#1c1204] via-[#2a1a05] to-[#180f03] text-amber-100 dark:border-amber-800">
        <div className="absolute inset-0 opacity-25 mix-blend-luminosity">
          <img
            src="/angadi_assets/about_banner_mono.jpg"
            alt="Historic Indian monument architectural panorama"
            className="h-full w-full object-cover object-center sepia contrast-125"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1204]/95 via-[#2a1a05]/90 to-[#180f03]/85" />

        <div className="wrap relative z-10 py-16 lg:py-20">
          <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8">
            <div className="space-y-2 md:col-span-4">
              <div className="text-3xl font-black tracking-widest text-amber-300 sm:text-4xl">
                ANGADI
              </div>
              <p className="text-sm font-semibold tracking-wider text-amber-200/80 uppercase">
                A New Era of Indian Enterprise
              </p>
              <div className="h-0.5 w-16 bg-amber-400" />
            </div>

            <div className="space-y-1.5 border-l-0 pl-0 md:col-span-4 md:border-l md:border-amber-700/60 md:pl-8">
              <p className="text-sm font-semibold tracking-wide text-amber-200">Built in India.</p>
              <p className="text-sm font-semibold tracking-wide text-amber-200">Inspired by India.</p>
              <p className="text-sm font-semibold tracking-wide text-amber-200">Growing with India.</p>
              <p className="text-sm font-semibold tracking-wide text-amber-200">Moving towards the future.</p>
            </div>

            <div className="space-y-4 md:col-span-4 md:text-right">
              <div>
                <p className="font-serif text-2xl italic tracking-wide text-amber-200 sm:text-3xl">
                  Welcome to Angadi.
                </p>
                <p className="font-serif text-sm italic text-amber-300/80">
                  The journey begins here.
                </p>
              </div>
              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-400 bg-amber-400 px-5 py-2.5 text-xs font-bold tracking-wider text-amber-950 uppercase shadow-md shadow-amber-400/20 transition hover:bg-amber-300"
                >
                  Our Story &amp; Ethos <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
