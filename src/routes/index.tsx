import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Rocket, ShieldCheck, Star, Headphones, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { categoriesQuery, productsQuery, discount } from "@/lib/catalog";
import { ProductCard } from "@/components/site/ProductCard";
import { meta } from "@/components/site/Page";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/")({
  head: () => meta("Angadi – Shop · Grow · Succeed", "Your One-Stop Online Store for a Better Tomorrow. Premium products, trusted brands, fast & reliable delivery."),
  component: Home,
});

// Scene configurations matching Angadi reference
const SCENES = [
  { t: "#6fb1e8", b: "#ffe2a0", s: "#ffb938", x: 760, y: 300, m1: "#9db8d0", m2: "#5c7a6a", g1: "#5aa34a", g2: "#3e8a3a" },
  { t: "#4a9be0", b: "#cfe8fb", s: "#fff3b0", x: 900, y: 270, m1: "#a9c4dc", m2: "#4f7a91", g1: "#4fae5b", g2: "#2f8a4a" },
  { t: "#a8d8c8", b: "#f3f7d8", s: "#ffe9a0", x: 640, y: 310, m1: "#b7d0c4", m2: "#4f8a6a", g1: "#6bb560", g2: "#3c8f45" },
  { t: "#f08a5d", b: "#ffd29a", s: "#ffb347", x: 820, y: 330, m1: "#c9a0a0", m2: "#6b5a7a", g1: "#6aa04a", g2: "#3f7f3a" },
];

const CAT_COLORS = ["#e3f0ff", "#dff7e8", "#e1f6ea", "#fde4f1", "#e3f0ff", "#fde3e3", "#fef3c7", "#f3e8ff"];
const CAT_EMOJIS = ["📱", "💻", "🏠", "🧴", "🏋️", "👕", "🧸", "🔌", "🍶", "✨"];

function Home() {
  const { data: cats = [] } = useQuery(categoriesQuery);
  const { data: products = [], isLoading } = useQuery(productsQuery);
  const { recent } = useStore();
  const [cur, setCur] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCur((prev) => (prev + 1) % SCENES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const go = (n: number) => {
    setCur((n + SCENES.length) % SCENES.length);
  };

  const trending = products.filter((p) => p.is_trending);
  const bestSellers = products.filter((p) => p.is_bestseller);
  const newArrivals = products.filter((p) => p.is_new);
  const deals = [...products].filter((p) => discount(p) > 0).sort((a, b) => discount(b) - discount(a));
  const recentItems = recent
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  // Fallbacks if tags are not yet assigned in DB
  const displayTrending = trending.length > 0 ? trending : products.slice(0, 6);
  const displayDeals = deals.length > 0 ? deals : products.slice(0, 6);
  const displayBestSellers = bestSellers.length > 0 ? bestSellers : products.slice(0, 6);
  const displayNewArrivals = newArrivals.length > 0 ? newArrivals : products.slice(0, 6);

  return (
    <div>
      {/* 1. Hero Banner with Interactive Scenic Slider & Perks */}
      <div className="hero">
        {SCENES.map((c, i) => {
          const f = i % 2 ? ' transform="translate(1200 0) scale(-1 1)"' : "";
          return (
            <svg
              key={i}
              className={`slide ${i === cur ? "on" : ""}`}
              viewBox="0 0 1200 500"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id={`sk${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor={c.t} />
                  <stop offset="1" stopColor={c.b} />
                </linearGradient>
                <radialGradient id={`gl${i}`}>
                  <stop offset="0" stopColor={c.s} />
                  <stop offset="1" stopColor={c.s} stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="1200" height="500" fill={`url(#sk${i})`} />
              <circle cx={c.x} cy={c.y} r="290" fill={`url(#gl${i})`} opacity=".85" />
              <circle cx={c.x} cy={c.y} r="38" fill="#fff6c9" />
              <g dangerouslySetInnerHTML={{ __html: f ? `<g ${f}>` : "<g>" }} />
              <path
                fill={c.m1}
                d="M0 360 120 270 230 340 380 220 520 330 640 260 780 350 930 240 1080 330 1200 280V500H0z"
              />
              <path
                fill={c.m2}
                d="M0 420 180 330 300 390 470 290 600 380 760 250 900 370 1050 310 1200 400V500H0z"
              />
              <path fill="#fff" opacity=".9" d="M760 250 733 292 752 284 766 298 786 286z" />
              <path fill="#fff" opacity=".85" d="M470 290 450 322 466 316 480 326 494 318z" />
              <g />
              <path fill={c.g1} d="M0 450Q200 400 400 440T800 430T1200 440V500H0z" />
              <path fill={c.g2} d="M0 482Q300 440 600 476T1200 462V500H0z" />
              <path d="M560 470Q800 400 1020 215" stroke="#f6b400" strokeWidth="9" fill="none" strokeLinecap="round" opacity=".9" />
              <path fill="#f6b400" d="M1040 185 1000 205 1022 222 1015 245z" />
            </svg>
          );
        })}

        <div className="wrap relative z-10 grid items-center gap-8 py-10 md:grid-cols-[1.1fr_1fr] md:py-16">
          {/* Hero Left Content */}
          <div>
            <p className="eyebrow">WELCOME TO</p>
            <img
              src="/angadi_assets/img_2.png"
              alt="Angadi"
              className="h-20 w-auto object-contain md:h-24"
            />
            <h1 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
              Your One-Stop Online Store for a Better Tomorrow
            </h1>
            <p className="mt-3 text-base text-neutral-800">
              Premium products | Trusted brands | Fast &amp; reliable delivery
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/products" className="btn text-base">
                Shop Now
              </Link>
              <Link to="/categories" className="btn alt text-base">
                Browse Categories
              </Link>
            </div>
          </div>

          {/* Hero Right Perks */}
          <div className="perks justify-self-stretch md:justify-self-end md:w-[330px]">
            <div className="perk">
              <Rocket className="ic text-navy shrink-0" />
              <div>
                <b>Fast Delivery</b>
                <p>Across India &amp; worldwide</p>
              </div>
            </div>
            <div className="perk">
              <ShieldCheck className="ic text-navy shrink-0" />
              <div>
                <b>Secure Payments</b>
                <p>100% safe &amp; reliable</p>
              </div>
            </div>
            <div className="perk">
              <Star className="ic text-navy shrink-0" />
              <div>
                <b>Top Quality Products</b>
                <p>Only the best for you</p>
              </div>
            </div>
            <div className="perk">
              <Headphones className="ic text-navy shrink-0" />
              <div>
                <b>Dedicated Support</b>
                <p>We're always here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Arrow Buttons */}
        <button className="ar l" onClick={() => go(cur - 1)} aria-label="Previous slide">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button className="ar r" onClick={() => go(cur + 1)} aria-label="Next slide">
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Dots */}
        <div className="dots" id="dots">
          {SCENES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={i === cur ? "on" : ""}
              aria-label={`Scene ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 2. Circular Category Icons */}
      <div className="wrap">
        <div className="cats">
          {cats.length > 0 ? (
            cats.map((c, idx) => (
              <Link
                key={c.id}
                to="/products"
                search={{ category: c.slug }}
                className="cat"
              >
                <i style={{ backgroundColor: CAT_COLORS[idx % CAT_COLORS.length] }}>
                  {c.image_url ? (
                    <img src={c.image_url} alt={c.name} />
                  ) : (
                    CAT_EMOJIS[idx % CAT_EMOJIS.length]
                  )}
                </i>
                <span>{c.name}</span>
              </Link>
            ))
          ) : (
            <div className="py-4 text-center text-sm text-muted-foreground col-span-full">
              Loading categories…
            </div>
          )}
        </div>
      </div>

      {/* 3. Section: Trending Products */}
      {products.length > 0 && (
        <section className="bg-soft py-10">
          <div className="wrap">
            <div className="hd">
              <h2>Trending Products</h2>
              <Link to="/products" search={{ sort: "rating" }} className="flex items-center gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid-angadi">
              {displayTrending.slice(0, 6).map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Section: Deals of the Day */}
      {products.length > 0 && (
        <section className="bg-bg py-10">
          <div className="wrap">
            <div className="hd">
              <h2>Deals of the Day</h2>
              <Link to="/products" search={{ sort: "discount" }} className="flex items-center gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid-angadi">
              {displayDeals.slice(0, 6).map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Section: Best Sellers */}
      {products.length > 0 && (
        <section className="bg-soft py-10">
          <div className="wrap">
            <div className="hd">
              <h2>Best Sellers</h2>
              <Link to="/products" search={{ sort: "rating" }} className="flex items-center gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid-angadi">
              {displayBestSellers.slice(0, 6).map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Section: New Arrivals */}
      {products.length > 0 && (
        <section className="bg-bg py-10">
          <div className="wrap">
            <div className="hd">
              <h2>New Arrivals</h2>
              <Link to="/products" search={{ sort: "new" }} className="flex items-center gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid-angadi">
              {displayNewArrivals.slice(0, 6).map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Recently Viewed */}
      {recentItems.length > 0 && (
        <section className="bg-soft py-10">
          <div className="wrap">
            <div className="hd">
              <h2>Recently Viewed</h2>
            </div>
            <div className="grid-angadi">
              {recentItems.slice(0, 6).map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty Database State Notice */}
      {!isLoading && products.length === 0 && (
        <div className="wrap py-20 text-center">
          <p className="text-xl font-semibold text-navy">No products available yet.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Products added via the Admin Panel will appear here automatically.
          </p>
          <Link to="/categories" className="btn mt-6">
            Browse Categories
          </Link>
        </div>
      )}
    </div>
  );
}
