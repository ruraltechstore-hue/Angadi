import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Check, Truck, Search, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { inr, statusLabel, statusSteps, type CartItem } from "@/lib/store";

export const Route = createFileRoute("/_authenticated/track")({
  validateSearch: (s: Record<string, unknown>): { order?: string | undefined } => ({
    order: typeof s["order"] === "string" ? (s["order"] as string).slice(0, 30) : undefined,
  }),
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { title: "Track Your Order — Angadi" },
      { name: "description", content: "Check the real-time delivery status of your Angadi order." },
      { property: "og:title", content: "Track Your Order — Angadi" },
      { property: "og:description", content: "Check the real-time delivery status of your Angadi order." },
    ],
  }),
  component: Track,
});

function Track() {
  const { order } = Route.useSearch();
  const navigate = useNavigate();
  const [input, setInput] = useState(order ?? "");
  const { data, isLoading } = useQuery({
    queryKey: ["order", order],
    enabled: !!order,
    queryFn: async () => {
      if (!order) return null;
      const { data } = await supabase.from("orders").select("*").eq("order_number", order).maybeSingle();
      return data;
    },
  });
  const idx = data ? statusSteps.indexOf(data.status) : -1;

  return (
    <div className="wrap py-6">
      {/* Breadcrumbs */}
      <div className="crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <span className="text-foreground">Track Order</span>
      </div>

      <div className="mx-auto max-w-3xl py-4">
        <div className="flex items-center gap-3">
          <Truck className="h-8 w-8 text-gold" />
          <div>
            <h1 className="text-3xl font-bold text-navy dark:text-white">Track Your Order</h1>
            <p className="text-xs text-muted-foreground">Enter your order reference number below</p>
          </div>
        </div>

        {/* Search input form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/track", search: { order: input.trim() } });
          }}
          className="mt-6 flex gap-2"
        >
          <div className="relative flex-1">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your order number (e.g. ORD-12345)"
              className="w-full rounded-xl border border-line bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-gold"
            />
          </div>
          <button type="submit" className="btn flex items-center gap-2">
            <Search className="h-4 w-4" /> Track
          </button>
        </form>

        {order && isLoading && (
          <p className="mt-8 text-center text-muted-foreground">Looking up order details…</p>
        )}

        {order && !isLoading && !data && (
          <div className="mt-8 rounded-2xl border border-line bg-card p-8 text-center">
            <p className="font-semibold text-foreground">No order found with number "#{order}".</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Please ensure the order number is correct and placed from your account.
            </p>
          </div>
        )}

        {data && (
          <div className="mt-8 rounded-2xl border border-line bg-card p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4">
              <div>
                <b className="text-lg text-navy dark:text-white font-bold">Order #{data.order_number}</b>
                <p className="text-xs text-muted-foreground">
                  Placed on {new Date(data.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                </p>
              </div>
              <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-neutral-900 dark:text-gold">
                {statusLabel(data.status)}
              </span>
            </div>

            {/* Status Steps Progress */}
            {data.status === "cancelled" ? (
              <p className="mt-6 rounded-lg bg-red-50 p-3 text-center text-sm font-semibold text-destructive">
                This order was cancelled.
              </p>
            ) : (
              <div className="mt-8">
                <ol className="grid grid-cols-5 gap-2">
                  {statusSteps.map((s, i) => (
                    <li key={s} className="flex flex-col items-center text-center text-xs">
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-full font-bold transition ${
                          i <= idx
                            ? "bg-navy text-gold shadow-sm dark:bg-gold dark:text-neutral-900"
                            : "bg-tint text-muted-foreground"
                        }`}
                      >
                        {i <= idx ? <Check className="h-5 w-5" /> : i + 1}
                      </span>
                      <span className="mt-2 font-medium capitalize text-foreground">{statusLabel(s)}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div className="gold-rule my-6" />

            {/* Items list */}
            <h3 className="font-semibold text-navy dark:text-white">Order Items</h3>
            <ul className="mt-3 divide-y divide-line/60 text-sm">
              {(data.items as CartItem[]).map((i, k) => (
                <li key={k} className="flex justify-between py-2.5">
                  <span className="text-foreground">
                    {i.name}
                    {i.variant ? ` (${i.variant})` : ""} × {i.qty}
                  </span>
                  <span className="font-semibold text-navy dark:text-white">{inr(i.price * i.qty)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4 text-sm">
              <span className="text-muted-foreground">
                Payment: {data.payment_method === "cod" ? "Cash on Delivery" : "Online Payment"} ({data.payment_status})
              </span>
              <span className="text-lg font-bold text-navy dark:text-white">Total: {inr(data.total)}</span>
            </div>

            {/* Delivery address */}
            <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-soft p-3.5 text-xs text-muted-foreground">
              <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <div>
                <b className="text-foreground">Shipping to:</b> {data.shipping_name}, {data.shipping_address}, {data.shipping_city}, {data.shipping_state} - {data.shipping_pincode}
                <br />
                <b>Phone:</b> {data.shipping_phone}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
