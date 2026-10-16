import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { categoriesQuery } from "@/lib/catalog";
import { meta } from "@/components/site/Page";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/categories")({
  head: () => meta("All Categories — Angadi", "Browse all product categories available on Angadi."),
  component: Categories,
});

const CAT_COLORS = ["#e3f0ff", "#dff7e8", "#e1f6ea", "#fde4f1", "#e3f0ff", "#fde3e3", "#fef3c7", "#f3e8ff"];
const CAT_EMOJIS = ["📱", "💻", "🏠", "🧴", "🏋️", "👕", "🧸", "🔌", "🍶", "✨"];

function Categories() {
  const { data: cats = [], isLoading } = useQuery(categoriesQuery);

  return (
    <div className="wrap py-6">
      {/* Breadcrumbs */}
      <div className="crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <span className="text-foreground">All Categories</span>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-navy dark:text-white">All Categories</h1>
        <span className="text-sm text-muted-foreground">{cats.length} categories</span>
      </div>

      {isLoading ? (
        <p className="py-20 text-center text-muted-foreground">Loading categories…</p>
      ) : cats.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-muted-foreground">No categories available.</p>
          <Link to="/" className="btn mt-4">Go to Home</Link>
        </div>
      ) : (
        <>
          {/* Circular Category Grid */}
          <div className="cats mt-4">
            {cats.map((c, idx) => (
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
            ))}
          </div>

          {/* Detailed Category Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cats.map((c, idx) => (
              <Link
                key={c.id}
                to="/products"
                search={{ category: c.slug }}
                className="group flex items-center gap-4 rounded-xl border border-line bg-card p-4 shadow-sm transition hover:border-gold hover:shadow-md"
              >
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl overflow-hidden text-2xl font-bold"
                  style={{ backgroundColor: CAT_COLORS[idx % CAT_COLORS.length] }}
                >
                  {c.image_url ? (
                    <img src={c.image_url} alt={c.name} className="h-full w-full object-cover" />
                  ) : (
                    CAT_EMOJIS[idx % CAT_EMOJIS.length]
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="truncate font-semibold text-navy dark:text-white group-hover:text-gold">
                    {c.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">Browse all products</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-navy" />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
