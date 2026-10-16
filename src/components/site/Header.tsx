import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Heart, Search, ShoppingBag, User, LayoutDashboard, ShieldCheck, Truck, Headphones, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { categoriesQuery, productsQuery } from "@/lib/catalog";
import { useStore, inr } from "@/lib/store";
import { useAuth } from "@/lib/auth";

export function Header() {
  const { cart, wishlist } = useStore();
  const { user, isAdmin } = useAuth();
  const { data: cats = [] } = useQuery(categoriesQuery);
  const { data: products = [] } = useQuery(productsQuery);
  const [q, setQ] = useState("");
  const [focus, setFocus] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const count = cart.reduce((s, i) => s + i.qty, 0);

  const suggestions = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (t.length < 2) return [];
    return products
      .filter((p) => [p.name, p.brand ?? "", ...(p.tags ?? [])].join(" ").toLowerCase().includes(t))
      .slice(0, 6);
  }, [q, products]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setFocus(false);
    navigate({ to: "/products", search: { q: q.trim() || undefined } });
  };

  return (
    <>
      {/* Top Banner Bar */}
      <div className="top">
        <div className="wrap">
          <span className="flex items-center gap-1.5 font-medium">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Better Choices | Brighter Tomorrow
          </span>
          <span className="hidden items-center gap-1.5 sm:inline-flex">
            <Truck className="h-3.5 w-3.5 text-gold" />
            Worldwide Shipping
          </span>
          <span className="hidden items-center gap-1.5 md:inline-flex">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" />
            Secure Payments
          </span>
          <span className="hidden items-center gap-1.5 lg:inline-flex">
            <Headphones className="h-3.5 w-3.5 text-gold" />
            24/7 Support
          </span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 border-b bg-card shadow-sm">
        <div className="wrap">
          {/* Header Top Bar */}
          <div className="flex flex-wrap items-center gap-3 py-3 md:gap-6">
            {/* Brand Logo */}
            <Link to="/" className="flex shrink-0 items-center gap-2.5 text-decoration-none">
              <img
                src="/angadi_assets/img_1.png"
                alt="Angadi logo"
                className="h-11 w-11 object-contain"
              />
              <div className="leading-tight">
                <b className="block text-2xl font-bold tracking-[2px] text-navy dark:text-white">ANGADI</b>
                <small className="block text-[10px] font-semibold tracking-[3px] text-muted-foreground">
                  SHOP · GROW · SUCCEED
                </small>
              </div>
            </Link>

            {/* Search Bar */}
            <form onSubmit={submit} className="relative order-3 flex flex-1 basis-full md:order-2 md:basis-auto">
              <div className="flex w-full items-center overflow-hidden rounded-[10px] border-[1.5px] border-line bg-card focus-within:border-gold">
                <input
                  id="q"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onFocus={() => setFocus(true)}
                  onBlur={() => setTimeout(() => setFocus(false), 200)}
                  placeholder="Search for products, brands and more…"
                  aria-label="Search"
                  maxLength={100}
                  className="flex-1 bg-transparent px-3.5 py-2.5 text-sm text-foreground outline-none"
                />
                <button
                  type="submit"
                  className="border-0 bg-gold px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-gold-hover cursor-pointer"
                >
                  Search
                </button>
              </div>

              {/* Autocomplete Suggestions */}
              {focus && suggestions.length > 0 && (
                <div className="absolute inset-x-0 top-full z-50 mt-1.5 overflow-hidden rounded-xl border border-line bg-card shadow-xl">
                  {suggestions.map((p) => (
                    <Link
                      key={p.id}
                      to="/product/$slug"
                      params={{ slug: p.slug }}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm transition hover:bg-tint"
                    >
                      <div className="h-9 w-9 shrink-0 overflow-hidden rounded bg-tint">
                        {p.images[0] ? (
                          <img src={p.images[0]} alt="" className="h-full w-full object-cover" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-xs">📦</div>
                        )}
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="truncate font-medium text-foreground">{p.name}</p>
                        <p className="text-xs text-muted-foreground">{p.brand ?? "Angadi"}</p>
                      </div>
                      <span className="font-bold text-navy">{inr(p.price)}</span>
                    </Link>
                  ))}
                </div>
              )}
            </form>

            {/* User Acts */}
            <div className="order-2 ml-auto flex items-center gap-3 text-sm font-medium whitespace-nowrap md:order-3 md:gap-5">
              {isAdmin && (
                <Link
                  to="/admin"
                  className="hidden items-center gap-1.5 rounded-lg border border-line bg-tint px-3 py-1.5 text-xs font-semibold text-navy hover:border-gold md:inline-flex"
                >
                  <LayoutDashboard className="h-4 w-4" /> Admin
                </Link>
              )}

              <Link
                to={user ? "/account" : "/auth"}
                className="flex items-center gap-1.5 text-foreground hover:text-navy"
              >
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="hidden sm:inline">{user ? "My Account" : "Login / Signup"}</span>
              </Link>

              <Link
                to="/wishlist"
                className="relative flex items-center gap-1 text-foreground hover:text-navy"
                aria-label="Wishlist"
              >
                <Heart className={`h-4 w-4 ${wishlist.length > 0 ? "fill-destructive text-destructive" : "text-muted-foreground"}`} />
                <span className="hidden sm:inline">Wishlist</span>
                {wishlist.length > 0 && (
                  <span className="ml-1 rounded-full bg-gold px-1.5 py-0.2 text-[11px] font-bold text-neutral-900">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link
                to="/cart"
                className="cartlink flex items-center gap-1 font-semibold text-foreground hover:text-navy"
                aria-label="Cart"
              >
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                <span>Cart</span>
                <span className="ml-1 rounded-full bg-gold px-2 py-0.5 text-[11px] font-bold text-neutral-900">
                  {count}
                </span>
              </Link>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="menu border-t border-line/60 pt-1">
            <Link to="/" className={pathname === "/" ? "on" : ""}>
              Home
            </Link>
            <Link to="/categories" className={pathname === "/categories" ? "on" : ""}>
              All Categories
            </Link>
            <Link
              to="/products"
              search={{ sort: "new" }}
              className={pathname === "/products" && routerState.location.search?.sort === "new" ? "on" : ""}
            >
              New Arrivals
            </Link>
            <Link
              to="/products"
              search={{ sort: "rating" }}
              className={pathname === "/products" && routerState.location.search?.sort === "rating" ? "on" : ""}
            >
              Best Sellers
            </Link>
            <Link
              to="/products"
              search={{ sort: "discount" }}
              className={pathname === "/products" && routerState.location.search?.sort === "discount" ? "on" : ""}
            >
              Deals
            </Link>
            {cats.slice(0, 5).map((c) => (
              <Link
                key={c.id}
                to="/products"
                search={{ category: c.slug }}
                className={routerState.location.search?.category === c.slug ? "on" : ""}
              >
                {c.name}
              </Link>
            ))}
            <Link to="/about" className={pathname === "/about" ? "on" : ""}>
              About Us
            </Link>
            <Link to="/contact" className={pathname === "/contact" ? "on" : ""}>
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
