import { createFileRoute, Link } from "@tanstack/react-router";
import { meta } from "@/components/site/Page";
import {
  Lock,
  EyeOff,
  Database,
  Smartphone,
  ChevronRight,
  ShieldCheck,
  Sun,
  Mail,
} from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () =>
    meta(
      "Privacy Policy — Angadi | Trust at Every Connection",
      "Learn how Angadi safeguards customer and seller data with transparency, zero data selling, and RBI-grade security standards."
    ),
  component: PrivacyPage,
});

function PrivacyPage() {
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
            <span className="font-semibold text-amber-950 dark:text-amber-100">Privacy Policy</span>
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
              <Lock className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              DATA SOVEREIGNTY &amp; PRIVACY
            </div>

            <div>
              <h1 className="text-3xl font-black tracking-tight text-amber-950 sm:text-4xl lg:text-5xl dark:text-amber-100">
                Privacy Policy
              </h1>
              <p className="mt-2 text-lg font-bold tracking-tight text-amber-800 sm:text-xl dark:text-amber-300">
                Angadi — Trust at Every Connection
              </p>
              <div className="mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600" />
            </div>

            <p className="text-sm leading-relaxed text-amber-900/90 sm:text-base dark:text-amber-200/90">
              Every great brand begins with trust. At Angadi, we believe every interaction matters — every product discovered, every order placed, every customer served, and every relationship created. We treat your personal data with absolute integrity, complete transparency, and strict adherence to Indian digital protection standards.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-amber-800/80 dark:text-amber-300/80">
              <span>Last updated: October 2026</span>
              <span>•</span>
              <span>Information Technology Act Compliant</span>
              <span>•</span>
              <span>Zero Data Brokering Guarantee</span>
            </div>
          </div>

          {/* Quick-Pillar Summary Cards in Sunshine Style */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 shadow-sm transition hover:border-amber-400 dark:border-amber-900/60 dark:bg-amber-950/30 dark:hover:border-amber-600">
              <div className="mb-2 inline-flex rounded-lg bg-amber-500 p-2 text-amber-950 font-bold dark:bg-amber-400">
                <EyeOff className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-amber-950 dark:text-amber-100">Zero Data Selling</h3>
              <p className="mt-1 text-xs text-amber-900/70 dark:text-amber-300/80">
                We never sell, rent, or trade your personal details with third-party advertising brokers.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 shadow-sm transition hover:border-amber-400 dark:border-amber-900/60 dark:bg-amber-950/30 dark:hover:border-amber-600">
              <div className="mb-2 inline-flex rounded-lg bg-amber-500 p-2 text-amber-950 font-bold dark:bg-amber-400">
                <Smartphone className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-amber-950 dark:text-amber-100">Shop Without Login</h3>
              <p className="mt-1 text-xs text-amber-900/70 dark:text-amber-300/80">
                Cart, wishlist, and browsing history live in local device storage; shop privately.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 shadow-sm transition hover:border-amber-400 dark:border-amber-900/60 dark:bg-amber-950/30 dark:hover:border-amber-600">
              <div className="mb-2 inline-flex rounded-lg bg-amber-500 p-2 text-amber-950 font-bold dark:bg-amber-400">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-amber-950 dark:text-amber-100">Encrypted Payments</h3>
              <p className="mt-1 text-xs text-amber-900/70 dark:text-amber-300/80">
                Processed via certified RBI-authorized payment gateways; card numbers are never stored.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 shadow-sm transition hover:border-amber-400 dark:border-amber-900/60 dark:bg-amber-950/30 dark:hover:border-amber-600">
              <div className="mb-2 inline-flex rounded-lg bg-amber-500 p-2 text-amber-950 font-bold dark:bg-amber-400">
                <Database className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-amber-950 dark:text-amber-100">Private Cloud Storage</h3>
              <p className="mt-1 text-xs text-amber-900/70 dark:text-amber-300/80">
                Private cloud tables and short-lived signed URLs protect all account and order records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* DETAILED PRIVACY SECTIONS                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-12 lg:py-16">
        <div className="wrap max-w-4xl space-y-12">
          {/* Section 1 */}
          <div className="space-y-3 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 sm:p-8 dark:border-amber-900/40 dark:bg-amber-950/20">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
              <span>✦</span> SECTION 01
            </div>
            <h2 className="text-xl font-bold tracking-tight text-amber-950 sm:text-2xl dark:text-amber-100">
              Our Core Philosophy: Trust at Every Connection
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
              <p>
                At Angadi, trust is not merely a legal requirement — it is our identity. As we work to build India's next great brand and foster an enduring ecosystem for Indian enterprise, protecting the privacy of our customers and sellers is central to our mission.
              </p>
              <p>
                This policy outlines the precise information we collect, the lawful purposes for which it is used, and the robust controls available to you to manage your personal data.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-3 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 sm:p-8 dark:border-amber-900/40 dark:bg-amber-950/20">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
              <span>⟡</span> SECTION 02
            </div>
            <h2 className="text-xl font-bold tracking-tight text-amber-950 sm:text-2xl dark:text-amber-100">
              Information We Collect &amp; Why
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
              <p>
                We collect only what is strictly necessary to fulfill your orders and provide an excellent customer experience:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-amber-900/90 dark:text-amber-200/90">
                <li>
                  <strong>Contact &amp; Delivery Details:</strong> Your full name, delivery address, postal pincode, email address, and mobile phone number for logistics fulfillment and SMS/WhatsApp dispatch alerts.
                </li>
                <li>
                  <strong>Transaction History:</strong> Records of items purchased, amounts paid, payment gateway reference IDs, and fulfillment status.
                </li>
                <li>
                  <strong>Customer Support Inquiries:</strong> Correspondence records when you contact our helpline or support desk to resolve questions or delivery adjustments.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 sm:p-8 dark:border-amber-900/40 dark:bg-amber-950/20">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
              <span>➜</span> SECTION 03
            </div>
            <h2 className="text-xl font-bold tracking-tight text-amber-950 sm:text-2xl dark:text-amber-100">
              Respecting Client Freedom: Local Storage Without Forced Login
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
              <p>
                Unlike invasive platforms that compel visitors to authenticate before viewing prices or adding items to a basket, Angadi respects your autonomy:
              </p>
              <p>
                Your <strong>shopping cart</strong>, <strong>wishlist</strong>, and <strong>recently viewed items</strong> are stored locally within your personal web browser using HTML5 LocalStorage. No server tracking profile is maintained while you explore our marketplace. You only share your details when you choose to finalize an order.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-3 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 sm:p-8 dark:border-amber-900/40 dark:bg-amber-950/20">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
              <span>◇</span> SECTION 04
            </div>
            <h2 className="text-xl font-bold tracking-tight text-amber-950 sm:text-2xl dark:text-amber-100">
              Payment Security &amp; RBI Compliance
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
              <p>
                All digital transactions on Angadi are routed through PCI-DSS certified, Reserve Bank of India (RBI) authorized payment aggregators supporting Unified Payments Interface (UPI), RuPay, Visa, MasterCard, and NetBanking.
              </p>
              <p>
                Angadi does not collect, log, or store your debit/credit card numbers, CVV codes, or UPI MPINs on our servers. All sensitive financial data is directly encrypted and tokenized by certified payment gateways.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-3 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 sm:p-8 dark:border-amber-900/40 dark:bg-amber-950/20">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
              <span>❖</span> SECTION 05
            </div>
            <h2 className="text-xl font-bold tracking-tight text-amber-950 sm:text-2xl dark:text-amber-100">
              Cloud Infrastructure &amp; Private Storage
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
              <p>
                Our data storage architecture enforces Row-Level Security (RLS) on all customer tables. Storage buckets containing receipts, documents, or media uploads are private by default, blocking unauthorized public access. Secure operations are performed using short-lived signed URLs to prevent unauthorized data exposure.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="space-y-3 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 sm:p-8 dark:border-amber-900/40 dark:bg-amber-950/20">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
              <span>✧</span> SECTION 06
            </div>
            <h2 className="text-xl font-bold tracking-tight text-amber-950 sm:text-2xl dark:text-amber-100">
              Your Privacy Rights &amp; Data Control
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
              <p>
                Under Indian digital data privacy regulations, you have explicit rights to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-amber-900/90 dark:text-amber-200/90">
                <li>Review the personal data Angadi maintains regarding your account.</li>
                <li>Request immediate rectification of erroneous contact or address information.</li>
                <li>Request permanent account deletion and purging of non-statutory data.</li>
                <li>Opt out of non-essential transactional communications at any time.</li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div className="space-y-3 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 sm:p-8 dark:border-amber-900/40 dark:bg-amber-950/20">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
              <span>∞</span> SECTION 07
            </div>
            <h2 className="text-xl font-bold tracking-tight text-amber-950 sm:text-2xl dark:text-amber-100">
              Grievance Officer &amp; Regulatory Redressal
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
              <p>
                In compliance with the Information Technology Act, 2000 and rules made thereunder, our designated Grievance Officer is available to address any privacy or data concerns:
              </p>
              <div className="rounded-xl border-2 border-amber-300 bg-white p-5 shadow-sm dark:border-amber-800 dark:bg-amber-950/50">
                <div className="space-y-1 text-sm">
                  <p className="font-bold text-amber-950 dark:text-amber-100">Angadi Data Protection &amp; Grievance Redressal</p>
                  <p className="text-amber-900/80 dark:text-amber-300/80">Attention: Grievance Officer</p>
                  <p className="text-amber-900/80 dark:text-amber-300/80">Email: <strong className="text-amber-950 dark:text-amber-100">privacy@angadi.in</strong></p>
                  <p className="text-amber-900/80 dark:text-amber-300/80">Marketplace: Angadi Technologies Private Limited, India</p>
                </div>
              </div>
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
                  to="/terms"
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-400 bg-amber-400 px-5 py-2.5 text-xs font-bold tracking-wider text-amber-950 uppercase shadow-md shadow-amber-400/20 transition hover:bg-amber-300"
                >
                  View Terms &amp; Conditions <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
