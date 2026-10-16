import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { inr, itemKey, useStore, shippingFor } from "@/lib/store";
import { meta } from "@/components/site/Page";

export const Route = createFileRoute("/cart")({
  head: () => meta("Your Cart — Angadi", "Review and manage items in your Angadi shopping cart."),
  component: Cart,
});

function Cart() {
  const { cart, updateQty, removeFromCart } = useStore();
  const navigate = useNavigate();
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const ship = shippingFor(subtotal);

  if (!cart.length) {
    return (
      <div className="wrap py-16 text-center">
        {/* Breadcrumbs */}
        <div className="crumbs justify-center">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="text-foreground">Cart</span>
        </div>

        <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-soft text-navy">
          <ShoppingBag className="h-10 w-10 text-muted-foreground" />
        </div>
        <h1 className="mt-4 text-3xl font-bold text-navy dark:text-white">Your Cart is Empty</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link to="/products" className="btn mt-6">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="wrap py-6">
      {/* Breadcrumbs */}
      <div className="crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <span className="text-foreground">Cart</span>
      </div>

      <h1 className="mt-2 text-3xl font-bold text-navy dark:text-white">Shopping Cart</h1>
      <p className="text-sm text-muted-foreground">{cart.length} unique items in your cart</p>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Cart Items Table */}
        <div className="overflow-x-auto rounded-2xl border border-line bg-card shadow-sm">
          <table className="w-full min-w-[560px] text-left">
            <thead>
              <tr className="border-b border-line bg-soft/60 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3">Product</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3 text-center">Quantity</th>
                <th className="px-4 py-3 text-right">Total</th>
                <th className="px-3 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {cart.map((i) => {
                const k = itemKey(i);
                return (
                  <tr key={k} className="transition hover:bg-soft/30">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3.5">
                        <Link
                          to="/product/$slug"
                          params={{ slug: i.slug }}
                          className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-tint p-1"
                        >
                          {i.image ? (
                            <img src={i.image} alt={i.name} className="h-full w-full object-contain" />
                          ) : (
                            <span className="text-xl">🛍️</span>
                          )}
                        </Link>
                        <div>
                          <Link
                            to="/product/$slug"
                            params={{ slug: i.slug }}
                            className="font-medium text-navy hover:text-gold dark:text-white line-clamp-1"
                          >
                            {i.name}
                          </Link>
                          {i.variant && (
                            <span className="mt-0.5 block text-xs text-muted-foreground">
                              Variant: {i.variant}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 font-medium text-foreground">{inr(i.price)}</td>
                    <td className="px-4 py-4 text-center">
                      <div className="qty inline-flex">
                        <button
                          onClick={() => updateQty(k, i.qty - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span>{i.qty}</span>
                        <button
                          onClick={() => updateQty(k, i.qty + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right font-bold text-navy dark:text-white">
                      {inr(i.price * i.qty)}
                    </td>
                    <td className="px-3 py-4 text-right">
                      <button
                        onClick={() => removeFromCart(k)}
                        className="rounded-lg p-1.5 text-muted-foreground transition hover:bg-red-50 hover:text-destructive"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Cart Summary */}
        <aside className="h-fit rounded-2xl border border-line bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-navy dark:text-white">Order Summary</h2>

          <div className="mt-4 space-y-2.5 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal ({cart.reduce((s, i) => s + i.qty, 0)} items)</span>
              <span className="font-semibold text-foreground">{inr(subtotal)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Delivery charges</span>
              <span className="font-medium text-amber-700 dark:text-amber-400">
                {ship === null ? "Not confirmed" : inr(ship)}
              </span>
            </div>
            <div className="gold-rule my-3" />
            <div className="flex justify-between text-lg font-bold text-navy dark:text-white">
              <span>Estimated Total</span>
              <span>{inr(subtotal + (ship ?? 0))}</span>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-soft p-3 text-xs text-muted-foreground">
            {ship === null ? (
              <p>Delivery charges are calculated and confirmed at checkout based on your delivery address.</p>
            ) : (
              <p>Delivery fee confirmed. Taxes included.</p>
            )}
          </div>

          <button
            onClick={() => navigate({ to: "/checkout" })}
            className="btn mt-5 w-full cursor-pointer"
          >
            Proceed to Checkout
          </button>

          <Link
            to="/products"
            className="btn ghost mt-2.5 w-full flex items-center justify-center gap-1.5"
          >
            <ArrowLeft className="h-4 w-4" /> Continue Shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
