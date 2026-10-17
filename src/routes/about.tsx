import { createFileRoute, Link } from "@tanstack/react-router";
import { meta } from "@/components/site/Page";
import {
  ShieldCheck,
  Gem,
  Lightbulb,
  Rocket,
  Award,
  ChevronRight,
  Sun,
  ArrowUpRight,
  Compass,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () =>
    meta(
      "About Us — Angadi | A New Era of Indian Enterprise",
      "Angadi is a new era of Indian enterprise, uniting Indian businesses, entrepreneurs and customers in a journey of growth, trust and opportunity."
    ),
  component: AboutPage,
});

/* -------------------------------------------------------------------------- */
/* MONOCHROMATIC SUNSHINE SVG EMBLEMS                                         */
/* -------------------------------------------------------------------------- */

function VisionEmblem({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Our Vision sunshine emblem">
      {/* Radiant Sun Rays */}
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-amber-400 dark:text-amber-500">
        <line x1="80" y1="18" x2="80" y2="35" />
        <line x1="106" y1="24" x2="98" y2="39" />
        <line x1="128" y1="41" x2="114" y2="52" />
        <line x1="140" y1="65" x2="124" y2="71" />
        <line x1="54" y1="24" x2="62" y2="39" />
        <line x1="32" y1="41" x2="46" y2="52" />
        <line x1="20" y1="65" x2="36" y2="71" />
      </g>
      {/* Sun Core */}
      <path
        d="M44 86 C44 64 60 48 80 48 C100 48 116 64 116 86 Z"
        className="fill-amber-200 dark:fill-amber-900/70 stroke-amber-600 dark:stroke-amber-400"
        strokeWidth="3.5"
      />
      {/* Dynamic Base Wave 1 */}
      <path
        d="M20 102 C45 92 65 110 95 102 C115 96 130 100 142 108"
        fill="none"
        className="stroke-amber-400 dark:stroke-amber-600"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Dynamic Base Wave 2 */}
      <path
        d="M26 118 C52 108 72 122 104 116 C124 110 138 114 148 120"
        fill="none"
        className="stroke-amber-300 dark:stroke-amber-700"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Ascending Growth Arrow */}
      <path
        d="M28 122 C48 108 80 92 122 52"
        fill="none"
        className="stroke-amber-700 dark:stroke-amber-300"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <polygon
        points="138,40 114,46 128,64"
        className="fill-amber-600 dark:fill-amber-400 stroke-amber-700 dark:stroke-amber-300"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RisingIndiaEmblem({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Made for a Rising India sunshine emblem">
      <circle cx="80" cy="80" r="68" className="stroke-amber-200 dark:stroke-amber-800/80" strokeWidth="1.5" strokeDasharray="3 3" />
      {/* Stylized Contour Map of India */}
      <path
        d="M78 28 L86 36 L84 46 L94 48 L104 54 L114 52 L110 60 L118 64 L120 72 L112 76 L108 86 L102 96 L98 106 L90 120 L80 138 L72 122 L66 108 L62 98 L52 92 L46 84 L48 76 L54 74 L52 66 L60 62 L64 50 L72 44 Z"
        className="fill-amber-100/70 dark:fill-amber-950/60 stroke-amber-600 dark:stroke-amber-400"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Ashoka Chakra */}
      <g transform="translate(80, 82)">
        <circle cx="0" cy="0" r="14" className="stroke-amber-700 dark:stroke-amber-300" strokeWidth="2" fill="none" />
        <circle cx="0" cy="0" r="3" className="fill-amber-700 dark:fill-amber-300" />
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="-13"
            x2="0"
            y2="13"
            transform={`rotate(${i * 15})`}
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="1.2"
          />
        ))}
      </g>
      {/* Upward Growth Swoosh Arrow */}
      <path
        d="M34 126 C52 110 82 98 132 50"
        fill="none"
        className="stroke-amber-600 dark:stroke-amber-400"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <polygon
        points="146,38 124,44 136,62"
        className="fill-amber-600 dark:fill-amber-400 stroke-amber-700 dark:stroke-amber-300"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PromiseShieldEmblem({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Our Promise sunshine emblem">
      <circle cx="80" cy="80" r="70" className="stroke-amber-200 dark:stroke-amber-800/80" strokeWidth="2" strokeDasharray="4 4" />
      <path
        d="M80 24 L126 40 C126 84 108 120 80 138 C52 120 34 84 34 40 Z"
        className="fill-amber-50 dark:fill-amber-950/50 stroke-amber-600 dark:stroke-amber-400"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M80 34 L116 48 C116 82 102 110 80 126 C58 110 44 82 44 48 Z"
        className="fill-amber-200/50 dark:fill-amber-900/40 stroke-amber-400 dark:stroke-amber-600"
        strokeWidth="1.5"
      />
      <path
        d="M62 78 L74 90 L102 62"
        fill="none"
        className="stroke-amber-700 dark:stroke-amber-300"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpiritMedallionEmblem({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Our Indian Spirit sunshine emblem">
      <circle cx="80" cy="80" r="66" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="3" fill="none" />
      <circle cx="80" cy="80" r="58" className="stroke-amber-300 dark:stroke-amber-700" strokeWidth="1.5" strokeDasharray="2 3" />
      <path
        d="M42 96 C40 76 48 58 64 44 M48 84 C48 74 54 64 64 56 M56 104 C52 94 56 82 66 74"
        className="stroke-amber-500 dark:stroke-amber-400"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M118 96 C120 76 112 58 96 44 M112 84 C112 74 106 64 96 56 M104 104 C108 94 104 82 94 74"
        className="stroke-amber-500 dark:stroke-amber-400"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M80 50 C86 64 96 74 96 86 C96 98 88 108 80 114 C72 108 64 98 64 86 C64 74 74 64 80 50 Z"
        className="fill-amber-200 dark:fill-amber-900/60 stroke-amber-600 dark:stroke-amber-400"
        strokeWidth="2.5"
      />
      <circle cx="80" cy="84" r="5" className="fill-amber-700 dark:fill-amber-300" />
    </svg>
  );
}

function DreamMountainEmblem({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Our Dream sunshine emblem">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-amber-400 dark:text-amber-500">
        <line x1="80" y1="22" x2="80" y2="38" />
        <line x1="102" y1="28" x2="94" y2="42" />
        <line x1="120" y1="44" x2="108" y2="54" />
        <line x1="58" y1="28" x2="66" y2="42" />
        <line x1="40" y1="44" x2="52" y2="54" />
      </g>
      <circle cx="80" cy="62" r="18" className="fill-amber-200/80 dark:fill-amber-900/50 stroke-amber-400 dark:stroke-amber-500" strokeWidth="1.5" />
      <polygon
        points="80,50 128,124 32,124"
        className="fill-amber-100/60 dark:fill-amber-950/60 stroke-amber-600 dark:stroke-amber-400"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <polygon
        points="80,50 80,124 32,124"
        className="fill-amber-300/60 dark:fill-amber-800/50"
      />
      <polygon
        points="110,72 144,124 76,124"
        className="fill-amber-200/60 dark:fill-amber-900/60 stroke-amber-500 dark:stroke-amber-500"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <line x1="80" y1="32" x2="80" y2="50" className="stroke-amber-700 dark:stroke-amber-300" strokeWidth="3" strokeLinecap="round" />
      <polygon points="80,32 100,38 80,44" className="fill-amber-600 dark:fill-amber-400" />
      <path
        d="M26 128 C40 120 60 122 80 120 C100 122 120 120 138 128"
        className="stroke-amber-400 dark:stroke-amber-600"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function JourneyAheadRocketEmblem({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="The Journey Ahead sunshine emblem">
      <path
        d="M48 114 C32 114 22 102 22 88 C22 74 34 62 50 62 C68 62 82 82 96 98 C110 114 124 124 140 124 C152 124 160 114 160 102 C160 88 146 76 130 76 C112 76 98 96 84 112 C72 126 60 134 46 134"
        fill="none"
        className="stroke-amber-400 dark:stroke-amber-600"
        strokeWidth="3"
        strokeDasharray="4 4"
      />
      <g transform="translate(100, 36) rotate(42)">
        <path d="M-6 40 L0 56 L6 40 Z" className="fill-amber-500 dark:fill-amber-400" />
        <path d="M-3 40 L0 48 L3 40 Z" className="fill-amber-200 dark:fill-amber-700" />
        <polygon points="-14,32 -6,38 -6,22" className="fill-amber-700 dark:fill-amber-300" />
        <polygon points="14,32 6,38 6,22" className="fill-amber-700 dark:fill-amber-300" />
        <path
          d="M0 -12 C10 4 10 24 8 36 L-8 36 C-10 24 -10 4 0 -12 Z"
          className="fill-amber-100 dark:fill-amber-900/60 stroke-amber-600 dark:stroke-amber-400"
          strokeWidth="3"
        />
        <circle cx="0" cy="14" r="5" className="fill-amber-600 dark:fill-amber-300 stroke-amber-700 dark:stroke-amber-400" strokeWidth="1.5" />
      </g>
      <g className="fill-amber-500 dark:fill-amber-300">
        <path d="M30 40 Q30 46 36 46 Q30 46 30 52 Q30 46 24 46 Q30 46 30 40 Z" />
        <path d="M140 44 Q140 48 144 48 Q140 48 140 52 Q140 48 136 48 Q140 48 140 44 Z" />
      </g>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN ABOUT PAGE IN MONOCHROMATIC SUNSHINE PALETTE                          */
/* -------------------------------------------------------------------------- */

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2b1803] transition-colors duration-300 dark:bg-[#140d04] dark:text-[#fef3c7]">
      {/* Top Breadcrumb Navigation */}
      <div className="border-b border-amber-200/70 bg-amber-50/60 dark:border-amber-900/50 dark:bg-[#1c1206]/50">
        <div className="wrap flex items-center justify-between py-3 text-xs font-medium text-amber-800 dark:text-amber-300">
          <div className="flex items-center gap-2">
            <Link to="/" className="transition hover:text-amber-950 dark:hover:text-amber-100">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-amber-500" />
            <span className="font-semibold text-amber-950 dark:text-amber-100">About Us</span>
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
      <section className="relative overflow-hidden border-b border-amber-200/80 py-12 lg:py-20 dark:border-amber-900/50">
        <div className="wrap">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Content */}
            <div className="space-y-6 lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/90 px-3.5 py-1 text-xs font-bold tracking-[0.2em] text-amber-900 uppercase dark:border-amber-700 dark:bg-amber-950/80 dark:text-amber-200">
                <Sun className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                ABOUT US
              </div>

              <div>
                <h1 className="text-4xl font-black tracking-tight text-amber-950 sm:text-5xl lg:text-6xl dark:text-amber-100">
                  ANGADI
                </h1>
                <p className="mt-2 text-xl font-bold tracking-tight text-amber-800 sm:text-2xl dark:text-amber-300">
                  A New Era of Indian Enterprise
                </p>
                <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600" />
              </div>

              <p className="text-base leading-relaxed text-amber-900/90 sm:text-lg dark:text-amber-200/90 font-medium">
                Angadi is more than a brand. It is a movement — uniting Indian businesses, entrepreneurs and customers in a journey of growth, trust and opportunity.
              </p>

              <div className="space-y-3 pt-2 text-sm leading-relaxed text-amber-900/80 dark:text-amber-200/80">
                <p>
                  Born from the spirit of India’s timeless tradition of trade and commerce, Angadi brings that heritage into a new generation — combining Indian entrepreneurship, modern technology, innovation, and the aspirations of a rapidly growing India.
                </p>
                <p>
                  Our vision is to build a trusted Indian brand that connects people, products, businesses, and opportunities across the nation. We believe India is not merely a place where businesses operate. <strong>India is where great businesses can be born, built, and transformed into something extraordinary.</strong>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/categories"
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-600 bg-amber-500 px-6 py-3 text-sm font-bold text-amber-950 shadow-md shadow-amber-500/20 transition hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30 dark:border-amber-400 dark:bg-amber-400 dark:text-amber-950 dark:hover:bg-amber-300"
                >
                  Explore Marketplace <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50/70 px-6 py-3 text-sm font-semibold text-amber-900 transition hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200 dark:hover:bg-amber-900/40"
                >
                  Connect With Us
                </Link>
              </div>
            </div>

            {/* Right Hero Fine-Art Illustration with Sunshine Sepia Glow */}
            <div className="lg:col-span-6">
              <div className="group relative overflow-hidden rounded-2xl border-2 border-amber-300/80 bg-amber-100/50 shadow-xl shadow-amber-500/10 dark:border-amber-700/60 dark:bg-amber-950/40">
                <img
                  src="/angadi_assets/about_hero_mono.jpg"
                  alt="Angadi - A New Era of Indian Enterprise fine art illustration"
                  className="w-full object-cover sepia-[0.35] brightness-[1.02] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-amber-100">
                  <span className="font-semibold tracking-wide uppercase">India Gate · Indian Enterprise · Growth</span>
                  <span className="rounded bg-amber-950/80 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-amber-300 uppercase backdrop-blur-sm border border-amber-500/30">
                    Sunshine Monochromatic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 1: OUR VISION                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-amber-200/80 bg-amber-50/50 py-12 lg:py-16 dark:border-amber-900/40 dark:bg-amber-950/20">
        <div className="wrap">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
            <div className="shrink-0 rounded-2xl border border-amber-300/70 bg-white p-4 shadow-sm dark:border-amber-800/80 dark:bg-amber-950/40">
              <VisionEmblem className="h-28 w-28 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
                <span>✦</span> SECTION 01
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-amber-950 sm:text-3xl dark:text-amber-100">
                Our Vision
              </h2>
              <p className="text-base font-semibold text-amber-800 dark:text-amber-300">
                Building India's Next Great Brand
              </p>
              <p className="max-w-4xl text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
                We envision Angadi becoming a name that millions of Indians recognize, trust, and proudly welcome into their everyday lives. Our ambition goes beyond selling products. We want to create an ecosystem where customers discover value, entrepreneurs find opportunity, businesses reach new customers, and Indian enterprise continues to grow. From one connection to millions, from one idea to an enduring institution — Angadi is built for the journey ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2: THE SPIRIT OF ANGADI                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-amber-200/80 py-12 lg:py-16 dark:border-amber-900/40">
        <div className="wrap">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-4 lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
                <span>⟡</span> SECTION 02
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-amber-950 sm:text-3xl dark:text-amber-100">
                The Spirit of Angadi
              </h2>
              <p className="text-base font-semibold text-amber-800 dark:text-amber-300">
                Rooted in Tradition. Built for Tomorrow.
              </p>
              <div className="space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
                <p>
                  The word <em>Angadi</em> carries a beautiful connection to India's history. For generations, the Angadi has represented a place of trade, discovery, relationships, opportunity, and enterprise.
                </p>
                <p>
                  It was where people met. Where goods changed hands. Where businesses began. Where communities connected.
                </p>
                <p>
                  Angadi carries that timeless spirit into the digital age — giving it a modern identity designed for the aspirations of today’s India and the possibilities of tomorrow.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border-2 border-amber-300/80 bg-amber-100/50 shadow-md dark:border-amber-700/60 dark:bg-amber-950/40">
                <img
                  src="/angadi_assets/about_bazaar_mono.jpg"
                  alt="Historic Indian Angadi marketplace entrance with traditional archway and stalls"
                  className="w-full object-cover sepia-[0.35] brightness-[1.02] contrast-[1.05] transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="absolute top-4 right-4 rounded-full border border-amber-500/40 bg-amber-950/85 px-4 py-1.5 text-xs font-serif font-semibold tracking-wide text-amber-200 shadow-lg backdrop-blur-md">
                  Same Spirit. New World.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3: MADE FOR A RISING INDIA                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-amber-200/80 bg-amber-50/50 py-12 lg:py-16 dark:border-amber-900/40 dark:bg-amber-950/20">
        <div className="wrap">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
            <div className="shrink-0 rounded-2xl border border-amber-300/70 bg-white p-4 shadow-sm dark:border-amber-800/80 dark:bg-amber-950/40">
              <RisingIndiaEmblem className="h-28 w-28 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
                <span>➜</span> SECTION 03
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-amber-950 sm:text-3xl dark:text-amber-100">
                Made for a Rising India
              </h2>
              <p className="text-base font-semibold text-amber-800 dark:text-amber-300">
                Empowering People. Enriching Businesses.
              </p>
              <p className="max-w-4xl text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
                India is changing. Technology is connecting people faster than ever. Entrepreneurs are thinking bigger. Businesses are reaching beyond geographical boundaries. Customers are discovering new possibilities every day. Angadi wants to be part of this transformation. We believe the future of Indian commerce will be shaped by innovation, accessibility, trust, and the determination of millions of Indian entrepreneurs. Our purpose is to contribute to that future by creating a brand that grows with India and for India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4: OUR PROMISE                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-amber-200/80 py-12 lg:py-16 dark:border-amber-900/40">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-5 lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
                <span>◇</span> SECTION 04
              </div>
              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-2xl border border-amber-300/70 bg-amber-50/70 p-3 shadow-sm dark:border-amber-800 dark:bg-amber-950/40">
                  <PromiseShieldEmblem className="h-20 w-20 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-amber-950 sm:text-3xl dark:text-amber-100">
                    Our Promise
                  </h2>
                  <p className="text-base font-semibold text-amber-800 dark:text-amber-300">
                    Trust at Every Connection
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
                Every great brand begins with trust. At Angadi, we believe every interaction matters — every product discovered, every order placed, every customer served, and every business relationship created. Our commitment is to continuously work toward:
              </p>
            </div>

            <div className="space-y-3 lg:col-span-7">
              <div className="flex items-start gap-4 rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 transition-all hover:border-amber-400 dark:border-amber-900/60 dark:bg-amber-950/30 dark:hover:border-amber-600">
                <div className="rounded-lg bg-amber-500 p-2 text-amber-950 font-bold dark:bg-amber-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-950 dark:text-amber-100">Trust</h3>
                  <p className="text-xs text-amber-900/70 sm:text-sm dark:text-amber-300/80">Building relationships that last.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 transition-all hover:border-amber-400 dark:border-amber-900/60 dark:bg-amber-950/30 dark:hover:border-amber-600">
                <div className="rounded-lg bg-amber-500 p-2 text-amber-950 font-bold dark:bg-amber-400">
                  <Gem className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-950 dark:text-amber-100">Value</h3>
                  <p className="text-xs text-amber-900/70 sm:text-sm dark:text-amber-300/80">Bringing meaningful value to our customers.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 transition-all hover:border-amber-400 dark:border-amber-900/60 dark:bg-amber-950/30 dark:hover:border-amber-600">
                <div className="rounded-lg bg-amber-500 p-2 text-amber-950 font-bold dark:bg-amber-400">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-950 dark:text-amber-100">Innovation</h3>
                  <p className="text-xs text-amber-900/70 sm:text-sm dark:text-amber-300/80">Embracing technology and new possibilities.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 transition-all hover:border-amber-400 dark:border-amber-900/60 dark:bg-amber-950/30 dark:hover:border-amber-600">
                <div className="rounded-lg bg-amber-500 p-2 text-amber-950 font-bold dark:bg-amber-400">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-950 dark:text-amber-100">Opportunity</h3>
                  <p className="text-xs text-amber-900/70 sm:text-sm dark:text-amber-300/80">Creating pathways for businesses and entrepreneurs to grow.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 transition-all hover:border-amber-400 dark:border-amber-900/60 dark:bg-amber-950/30 dark:hover:border-amber-600">
                <div className="rounded-lg bg-amber-500 p-2 text-amber-950 font-bold dark:bg-amber-400">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-950 dark:text-amber-100">Excellence</h3>
                  <p className="text-xs text-amber-900/70 sm:text-sm dark:text-amber-300/80">Continuously raising the standard of the experience we provide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5: OUR INDIAN SPIRIT                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-amber-200/80 bg-amber-50/50 py-12 lg:py-16 dark:border-amber-900/40 dark:bg-amber-950/20">
        <div className="wrap">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-4 lg:col-span-5">
              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-2xl border border-amber-300/70 bg-white p-3 shadow-sm dark:border-amber-800 dark:bg-amber-950/40">
                  <SpiritMedallionEmblem className="h-20 w-20 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
                    <span>❖</span> SECTION 05
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-amber-950 sm:text-3xl dark:text-amber-100">
                    Our Indian Spirit
                  </h2>
                  <p className="text-base font-semibold text-amber-800 dark:text-amber-300">
                    Together We Grow
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
                India has always been a nation of builders. From traditional artisans and traders to modern entrepreneurs, engineers, innovators, and business leaders, Indians have demonstrated an extraordinary ability to create, adapt, and grow.
              </p>
              <p className="text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
                Angadi proudly carries that spirit. We want to encourage Indians to discover Indian businesses, support Indian entrepreneurs, and participate in the growth story of our own economy.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center lg:col-span-3">
              <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-amber-300 bg-white p-6 shadow-sm dark:border-amber-700 dark:bg-amber-950/50">
                <div className="relative mb-3 flex h-24 w-24 items-center justify-center rounded-full border-2 border-amber-500 bg-amber-50 dark:border-amber-400 dark:bg-amber-900/40">
                  <Compass className="h-10 w-10 text-amber-600 dark:text-amber-300" />
                  <span className="absolute -top-2 rounded-full bg-amber-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase dark:bg-amber-400 dark:text-amber-950">
                    MADE IN INDIA
                  </span>
                </div>
                <div className="text-lg font-black tracking-tight text-amber-950 dark:text-amber-100">
                  Indian Businesses
                </div>
                <div className="font-serif italic text-sm font-semibold text-amber-700 dark:text-amber-300">
                  Indian Pride
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl border-l-4 border-amber-500 bg-white p-6 shadow-md dark:border-amber-400 dark:bg-amber-950/60">
                <div className="space-y-3 font-medium text-amber-900 dark:text-amber-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
                    <span>When Indian businesses grow, Indian families gain opportunities.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
                    <span>When Indian entrepreneurs grow, communities grow.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
                    <span className="font-bold text-amber-950 dark:text-amber-100">When communities grow, India grows.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 6: OUR DREAM                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-amber-200/80 py-12 lg:py-16 dark:border-amber-900/40">
        <div className="wrap">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
            <div className="shrink-0 rounded-2xl border border-amber-300/70 bg-amber-50/70 p-4 shadow-sm dark:border-amber-800 dark:bg-amber-950/40">
              <DreamMountainEmblem className="h-28 w-28 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
                <span>✧</span> SECTION 06
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-amber-950 sm:text-3xl dark:text-amber-100">
                Our Dream
              </h2>
              <p className="text-base font-semibold text-amber-800 dark:text-amber-300">
                One Angadi. One Indian Digital Shopping Journey.
              </p>
              <p className="max-w-4xl text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
                Our dream is to build more than a successful company. We want to build a brand that becomes part of India's story. A brand that begins with a vision, earns trust through action, grows through innovation, and eventually becomes a household name. We imagine a future where Angadi connects customers and businesses across India, creates opportunities for entrepreneurs, and becomes a powerful symbol of modern Indian enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 7: THE JOURNEY AHEAD                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-amber-200/80 bg-amber-50/50 py-12 lg:py-16 dark:border-amber-900/40 dark:bg-amber-950/20">
        <div className="wrap">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
            <div className="shrink-0 rounded-2xl border border-amber-300/70 bg-white p-4 shadow-sm dark:border-amber-800 dark:bg-amber-950/40">
              <JourneyAheadRocketEmblem className="h-28 w-28 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-700 uppercase dark:text-amber-400">
                <span>∞</span> SECTION 07
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-amber-950 sm:text-3xl dark:text-amber-100">
                The Journey Ahead
              </h2>
              <p className="text-base font-semibold text-amber-800 dark:text-amber-300">
                Bigger Dreams. Greater Impact.
              </p>
              <div className="max-w-4xl space-y-3 text-sm leading-relaxed text-amber-900/80 sm:text-base dark:text-amber-200/80">
                <p>
                  The greatest journeys are not defined by where they begin, but by what they aspire to become. Angadi is built with ambition. Driven by innovation. Strengthened by trust. Inspired by India. And focused on the possibilities ahead.
                </p>
                <p>
                  Our journey will continue to evolve with technology, customers, entrepreneurs, and the changing needs of our nation. <strong>We are not simply building a brand for today. We are building a vision for tomorrow.</strong>
                </p>
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
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-400 bg-amber-400 px-5 py-2.5 text-xs font-bold tracking-wider text-amber-950 uppercase shadow-md shadow-amber-400/20 transition hover:bg-amber-300"
                >
                  Start Shopping <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
