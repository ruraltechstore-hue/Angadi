import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { productsQuery } from "@/lib/catalog";
import { useStore } from "@/lib/store";
import { ProductCard } from "@/components/site/ProductCard";
import { meta } from "@/components/site/Page";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/wishlist")({
  head: () => meta("Wishlist — Angadi", "Products you've saved for later at Angadi."),
  component: Wishlist,
});

function Wishlist() {
  const { wishlist } = useStore();
  const { data: products = [], isLoading } = useQuery(productsQuery);
  const items = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="wrap py-6">
      {/* Breadcrumbs */}
      <div className="crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <span className="text-foreground">Wishlist</span>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-navy dark:text-white">My Wishlist</h1>
        <span className="text-sm text-muted-foreground">{items.length} saved items</span>
      </div>

      {isLoading ? (
        <p className="py-24 text-center text-muted-foreground">Loading your wishlist…</p>
      ) : items.length === 0 ? (
        <div className="py-20 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-soft text-muted-foreground">
            <Heart className="h-8 w-8" />
          </div>
          <p className="mt-4 text-lg font-medium text-foreground">Your wishlist is empty</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Save items you love by tapping the heart icon on any product.
          </p>
          <Link to="/products" className="btn mt-6">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid-angadi mt-6">
          {items.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </div>
  );
}
