import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { categoriesQuery, productsQuery, discount } from "@/lib/catalog";
import { ProductCard } from "@/components/site/ProductCard";

type Search = {
  q?: string | undefined;
  category?: string | undefined;
  sort?: "new" | "low" | "high" | "discount" | "rating" | undefined;
};

export const Route = createFileRoute("/products")({
  validateSearch: (s: { q?: unknown; category?: unknown; sort?: unknown }): Search => ({
    q: typeof s.q === "string" ? s.q.slice(0, 100) : undefined,
    category: typeof s.category === "string" ? s.category : undefined,
    sort: ["new", "low", "high", "discount", "rating"].includes(s.sort as string)
      ? (s.sort as Search["sort"])
      : undefined,
  }),
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { title: "Shop Products — Angadi" },
      { name: "description", content: "Browse the available Angadi products. Best prices, discounts, and fast delivery." },
      { property: "og:title", content: "Shop Products — Angadi" },
      { property: "og:description", content: "Browse the available Angadi products." },
    ],
  }),
  component: Products,
});

function Products() {
  const { q, category, sort } = Route.useSearch();
  const { data: cats = [] } = useQuery(categoriesQuery);
  const { data: products = [], isLoading } = useQuery(productsQuery);
  const navigate = Route.useNavigate();
  const currentCat = cats.find((c) => c.slug === category);
  const term = q?.toLowerCase();

  let list = products.filter((p) => {
    if (currentCat && p.category_id !== currentCat.id) return false;
    if (term && ![p.name, p.brand ?? "", p.description ?? "", ...(p.tags ?? [])].join(" ").toLowerCase().includes(term)) {
      return false;
    }
    return true;
  });

  if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
  if (sort === "discount") list = [...list].sort((a, b) => discount(b) - discount(a));
  if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

  const pageTitle = q
    ? `Results for "${q}"`
    : currentCat
    ? currentCat.name
    : sort === "new"
    ? "New Arrivals"
    : sort === "rating"
    ? "Best Sellers"
    : sort === "discount"
    ? "Deals & Offers"
    : "All Products";

  return (
    <div className="wrap py-6">
      {/* Breadcrumbs */}
      <div className="crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/products">Shop</Link>
        {currentCat && (
          <>
            <span>/</span>
            <span className="text-foreground">{currentCat.name}</span>
          </>
        )}
        {q && (
          <>
            <span>/</span>
            <span className="text-foreground">Search</span>
          </>
        )}
      </div>

      {/* Header and Toolbar */}
      <div className="mt-2">
        <h1 className="text-3xl font-bold text-navy dark:text-white">{pageTitle}</h1>
      </div>

      {/* Category Pills & Sort Bar */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            to="/products"
            search={{ q, sort }}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              !category
                ? "bg-navy text-white dark:bg-gold dark:text-neutral-900"
                : "border border-line bg-card text-muted-foreground hover:border-gold hover:text-navy"
            }`}
          >
            All Items
          </Link>
          {cats.map((c) => (
            <Link
              key={c.id}
              to="/products"
              search={{ q, sort, category: c.slug }}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                category === c.slug
                  ? "bg-navy text-white dark:bg-gold dark:text-neutral-900"
                  : "border border-line bg-card text-muted-foreground hover:border-gold hover:text-navy"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{list.length} products</span>
          <select
            value={sort ?? "new"}
            onChange={(e) =>
              navigate({
                search: { q, category, sort: e.target.value as Search["sort"] },
                replace: true,
              })
            }
            aria-label="Sort"
            className="rounded-lg border border-line bg-card px-3 py-1.5 text-xs font-medium text-foreground outline-none focus:border-gold"
          >
            <option value="new">Sort: Newest</option>
            <option value="rating">Top rated</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
            <option value="discount">Biggest discount</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {isLoading ? (
        <p className="py-24 text-center text-muted-foreground">Loading products…</p>
      ) : list.length === 0 ? (
        <div className="py-24 text-center">
          <p className="text-lg font-medium text-foreground">No products found.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/products" className="btn sm">
              Clear Filters
            </Link>
            <Link to="/categories" className="btn alt sm">
              Browse Categories
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid-angadi mt-6">
          {list.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </div>
  );
}
