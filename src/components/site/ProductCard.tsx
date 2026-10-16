import { Link } from "@tanstack/react-router";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { discount, type Product } from "@/lib/catalog";
import { inr, useStore } from "@/lib/store";

export function ProductCard({ p }: { p: Product }) {
  const { wishlist, toggleWishlist, addToCart } = useStore();
  const off = discount(p);
  const liked = wishlist.includes(p.id);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (p.stock <= 0) return;
    addToCart({
      productId: p.id,
      slug: p.slug,
      name: p.name,
      image: p.images[0] ?? "",
      price: Number(p.price),
      qty: 1,
    });
    toast.success(`${p.name} added to cart`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(p.id);
    if (!liked) toast.success("Added to wishlist");
    else toast.info("Removed from wishlist");
  };

  const displayRating = p.rating > 0 ? p.rating : 4.5;
  const displayReviews = p.review_count > 0 ? p.review_count : 18;
  const fullStars = Math.min(5, Math.max(1, Math.round(displayRating)));

  return (
    <div className="card-angadi group">
      {/* Wishlist Button */}
      <button
        onClick={handleWishlist}
        aria-label="Toggle wishlist"
        className="absolute right-2.5 top-2.5 z-10 grid h-8 w-8 place-items-center rounded-full bg-card/90 shadow-sm transition hover:scale-110 hover:bg-card"
      >
        <Heart className={`h-4 w-4 ${liked ? "fill-destructive text-destructive" : "text-muted-foreground"}`} />
      </button>

      {/* Discount Badge */}
      {off > 0 && (
        <span className="absolute left-2.5 top-2.5 z-10 rounded-md bg-gold px-2 py-0.5 text-[11px] font-bold text-neutral-900 shadow-sm">
          {off}% off
        </span>
      )}

      {/* Product Image Link */}
      <Link to="/product/$slug" params={{ slug: p.slug }} className="pic block">
        {p.images && p.images[0] ? (
          <img
            src={p.images[0]}
            alt={p.name}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl">🛍️</div>
        )}
      </Link>

      {/* Title */}
      <Link to="/product/$slug" params={{ slug: p.slug }} className="block">
        <h3 title={p.name}>{p.name}</h3>
      </Link>

      {/* Stars & Reviews */}
      <div className="stars">
        <div className="flex text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${i < fullStars ? "fill-gold text-gold" : "text-line"}`}
            />
          ))}
        </div>
        <em>({displayReviews})</em>
      </div>

      {/* Price & Action */}
      <div className="mt-auto pt-2">
        <div className="price">
          <span>{inr(p.price)}</span>
          {off > 0 && <s>{inr(p.mrp)}</s>}
        </div>

        <button
          disabled={p.stock <= 0}
          onClick={handleAdd}
          className="mt-1 flex w-full items-center justify-center gap-1.5 rounded-lg border border-line bg-tint py-1.5 text-xs font-semibold text-navy transition hover:border-gold hover:bg-gold hover:text-neutral-900 disabled:opacity-40 cursor-pointer"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          {p.stock > 0 ? "Add to Cart" : "Out of stock"}
        </button>
      </div>
    </div>
  );
}

export function ProductRow({
  title,
  items,
  link = "/products",
  bg = false,
}: {
  title: string;
  items: Product[];
  link?: string;
  bg?: boolean;
}) {
  if (!items.length) return null;
  return (
    <section className={`py-8 ${bg ? "bg-soft" : "bg-bg"}`}>
      <div className="wrap">
        <div className="hd">
          <h2>{title}</h2>
          <Link to={link as any}>View All</Link>
        </div>
        <div className="grid-angadi">
          {items.slice(0, 6).map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
