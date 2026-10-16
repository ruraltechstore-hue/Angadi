import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Heart, Minus, Plus, Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { productsQuery, categoriesQuery, discount, type Variant } from "@/lib/catalog";
import { inr, useStore } from "@/lib/store";
import { ProductRow } from "@/components/site/ProductCard";

export const Route = createFileRoute("/product/$slug")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { title: "Product details — Angadi" },
      { name: "description", content: "Product details, specifications and delivery information at Angadi." },
      { property: "og:title", content: "Product details — Angadi" },
      { property: "og:description", content: "Product details, specifications and delivery information at Angadi." },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const { data: products = [], isLoading } = useQuery(productsQuery);
  const { data: cats = [] } = useQuery(categoriesQuery);
  const p = products.find((x) => x.slug === slug);
  const category = cats.find((c) => c.id === p?.category_id);
  const { addToCart, toggleWishlist, wishlist, addRecent } = useStore();
  const navigate = useNavigate();
  const [img, setImg] = useState(0);
  const [vi, setVi] = useState(0);
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (p) {
      addRecent(p.id);
      document.title = `${p.name} — Angadi`;
    }
  }, [p?.id]);

  if (isLoading) return <p className="py-24 text-center text-muted-foreground">Loading product details…</p>;
  if (!p) {
    return (
      <div className="wrap py-24 text-center">
        <h1 className="text-2xl font-bold text-navy">Product not found</h1>
        <p className="mt-2 text-muted-foreground">The product you're looking for does not exist or has been removed.</p>
        <Link to="/products" className="btn mt-6">
          Browse all products
        </Link>
      </div>
    );
  }

  const variants = (p.variants as Variant[]) ?? [];
  const v = variants[vi];
  const price = v ? Number(v.price) : Number(p.price);
  const stock = v ? v.stock : p.stock;
  const off = discount({ price, mrp: Number(p.mrp) });
  const specs = Object.entries((p.specifications as Record<string, string>) ?? {});
  const images = v?.image ? [v.image, ...p.images] : p.images;
  const isWishlisted = wishlist.includes(p.id);

  const displayRating = p.rating > 0 ? p.rating : 4.5;
  const displayReviews = p.review_count > 0 ? p.review_count : 18;
  const fullStars = Math.min(5, Math.max(1, Math.round(displayRating)));

  const add = (buy: boolean) => {
    if (stock <= 0) return;
    addToCart({
      productId: p.id,
      slug: p.slug,
      name: p.name,
      image: images[0] ?? "",
      price,
      ...(v ? { variant: v.name } : {}),
      qty,
    });
    if (buy) navigate({ to: "/checkout" });
    else toast.success(`${p.name} added to cart`);
  };

  return (
    <div className="wrap py-6">
      {/* Breadcrumbs */}
      <div className="crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/categories">All Categories</Link>
        {category && (
          <>
            <span>/</span>
            <Link to="/products" search={{ category: category.slug }}>
              {category.name}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-foreground">{p.name}</span>
      </div>

      {/* Main Product Layout */}
      <div className="mt-4 grid gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div
            className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-line bg-tint cursor-zoom-in"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
            }}
            onMouseLeave={() => setZoom(null)}
          >
            {images.length > 0 && images[img] ? (
              <img
                src={images[img]}
                alt={p.name}
                className="max-h-[85%] max-w-[85%] object-contain transition-transform duration-200"
                style={zoom ? { transform: "scale(2)", transformOrigin: `${zoom.x}% ${zoom.y}%` } : undefined}
              />
            ) : (
              <div className="text-7xl">📦</div>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setImg(i)}
                  className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 p-1 bg-card transition ${
                    i === img ? "border-gold shadow-sm" : "border-line opacity-75 hover:opacity-100"
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          {p.brand && <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{p.brand}</p>}
          <h1 className="mt-1 text-3xl font-bold text-navy dark:text-white md:text-4xl">{p.name}</h1>

          {/* Rating */}
          <div className="mt-2.5 flex items-center gap-2">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < fullStars ? "fill-gold text-gold" : "text-line"}`} />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">{displayRating}</span>
            <span className="text-xs text-muted-foreground">({displayReviews} customer reviews)</span>
          </div>

          <div className="gold-rule my-4" />

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-navy dark:text-white md:text-4xl">{inr(price)}</span>
            {off > 0 && (
              <>
                <span className="text-base text-muted-foreground line-through">{inr(Number(p.mrp))}</span>
                <span className="rounded-md bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700 dark:bg-green-950 dark:text-green-300">
                  {off}% off
                </span>
              </>
            )}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Inclusive of all applicable taxes</p>

          {/* Stock */}
          <div className="mt-3">
            {stock <= 0 ? (
              <span className="inline-flex items-center rounded-md bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700">
                Out of stock
              </span>
            ) : stock <= p.low_stock_threshold ? (
              <span className="inline-flex items-center rounded-md bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                Only {stock} items left in stock
              </span>
            ) : (
              <span className="inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                In Stock &amp; Ready to Ship
              </span>
            )}
          </div>

          {/* Variants */}
          {variants.length > 0 && (
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Select Option</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {variants.map((x, i) => (
                  <button
                    key={x.name}
                    onClick={() => {
                      setVi(i);
                      setImg(0);
                    }}
                    className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition ${
                      i === vi ? "border-gold bg-tint text-navy font-semibold" : "border-line bg-card hover:border-gold"
                    }`}
                  >
                    {x.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => Math.min(20, q + 1))} aria-label="Increase quantity">
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>

            <button
              disabled={stock <= 0}
              onClick={() => add(false)}
              className="btn flex-1 min-w-[140px]"
            >
              Add to Cart
            </button>

            <button
              disabled={stock <= 0}
              onClick={() => add(true)}
              className="btn alt flex-1 min-w-[140px]"
            >
              Buy Now
            </button>

            <button
              onClick={() => {
                toggleWishlist(p.id);
                if (!isWishlisted) toast.success("Added to wishlist");
                else toast.info("Removed from wishlist");
              }}
              aria-label="Wishlist"
              className={`grid h-11 w-11 place-items-center rounded-xl border border-line bg-card transition hover:border-gold ${
                isWishlisted ? "text-destructive" : "text-muted-foreground hover:text-navy"
              }`}
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? "fill-destructive" : ""}`} />
            </button>
          </div>

          {/* Value note box */}
          <div className="mt-6 rounded-xl border border-line bg-soft p-3.5 text-xs text-muted-foreground space-y-1.5">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-gold shrink-0" />
              <span>Ships in 3–7 business days · Worldwide &amp; across India delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4 text-gold shrink-0" />
              <span>7-day easy returns on eligible items</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold shrink-0" />
              <span>100% genuine products with safe &amp; secure payments</span>
            </div>
          </div>

          {/* Description */}
          {p.description && (
            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy dark:text-white border-left-gold pl-2">Description</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85 whitespace-pre-line">{p.description}</p>
            </div>
          )}

          {/* Specifications */}
          {specs.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy dark:text-white border-left-gold pl-2">Specifications</h2>
              <div className="mt-3 overflow-hidden rounded-xl border border-line bg-card">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {specs.map(([k, val]) => (
                      <tr key={k} className="border-b border-line last:border-0">
                        <td className="w-1/3 bg-soft/50 px-4 py-2.5 font-medium text-muted-foreground">{k}</td>
                        <td className="px-4 py-2.5 text-foreground">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-14">
        <ProductRow
          title={`More in ${category ? category.name : "Featured"}`}
          items={products.filter((x) => x.id !== p.id)}
        />
      </div>
    </div>
  );
}
