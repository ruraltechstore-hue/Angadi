import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { inr, useStore, shippingFor } from "@/lib/store";
import { ShieldCheck, Truck } from "lucide-react";

export const Route = createFileRoute("/_authenticated/checkout")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { title: "Checkout — Angadi" },
      { name: "description", content: "Complete your Angadi order." },
      { property: "og:title", content: "Checkout — Angadi" },
      { property: "og:description", content: "Complete your Angadi order." },
    ],
  }),
  component: Checkout,
});

const schema = z.object({
  shipping_name: z.string().trim().min(2, "Enter your full name").max(100),
  shipping_phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  shipping_address: z.string().trim().min(5, "Enter complete delivery address").max(300),
  shipping_city: z.string().trim().min(2, "Enter town/city").max(80),
  shipping_state: z.string().trim().min(2, "Enter state").max(80),
  shipping_pincode: z.string().trim().regex(/^\d{6}$/, "Enter a valid 6-digit postal pincode"),
});

const fields: [keyof z.infer<typeof schema>, string, string][] = [
  ["shipping_name", "Full Name", "e.g. Ramesh Kumar"],
  ["shipping_phone", "Mobile Number", "10-digit number"],
  ["shipping_address", "House, Street, Village / Area", "Door no., street, locality"],
  ["shipping_city", "Town / City / District", "City name"],
  ["shipping_state", "State", "e.g. Karnataka"],
  ["shipping_pincode", "Pincode", "6-digit PIN"],
];

function Checkout() {
  const { cart, clearCart } = useStore();
  const { user } = Route.useRouteContext();
  const navigate = useNavigate();
  const [form, setForm] = useState<Record<string, string>>({});
  const [pay, setPay] = useState("cod");
  const [busy, setBusy] = useState(false);
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const ship = shippingFor(subtotal);

  if (!cart.length) {
    return (
      <div className="wrap py-16 text-center">
        <h1 className="text-3xl font-bold text-navy dark:text-white">Your Cart is Empty</h1>
        <p className="mt-2 text-sm text-muted-foreground">Add products to your cart before proceeding to checkout.</p>
        <Link to="/products" className="btn mt-6">
          Browse Products
        </Link>
      </div>
    );
  }

  const place = async (e: React.FormEvent) => {
    e.preventDefault();
    if (ship === null) {
      toast.error("Delivery charges have not been confirmed for this pincode yet.");
      return;
    }
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your delivery address details");
      return;
    }
    setBusy(true);
    const { data, error } = await supabase
      .from("orders")
      .insert({
        ...parsed.data,
        user_id: user.id,
        items: cart,
        subtotal,
        shipping: ship,
        total: subtotal + ship,
        payment_method: "cod",
      })
      .select("order_number")
      .single();
    setBusy(false);

    if (error) {
      toast.error(error.message);
      return;
    }
    clearCart();
    toast.success("Order placed successfully!");
    navigate({ to: "/track", search: { order: data.order_number } });
  };

  return (
    <div className="wrap py-6">
      {/* Breadcrumbs */}
      <div className="crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/cart">Cart</Link>
        <span>/</span>
        <span className="text-foreground">Checkout</span>
      </div>

      <h1 className="mt-2 text-3xl font-bold text-navy dark:text-white">Checkout</h1>
      <p className="text-sm text-muted-foreground">Provide your delivery address to complete your order</p>

      <form onSubmit={place} className="mt-6 grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Shipping & Payment Form */}
        <div>
          {/* Section 1: Address */}
          <div className="rounded-2xl border border-line bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-gold" />
              <h2 className="text-lg font-bold text-navy dark:text-white">Delivery Address</h2>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {fields.map(([k, label, placeholder]) => (
                <div key={k} className={k === "shipping_address" ? "sm:col-span-2" : ""}>
                  <label className="mb-1 block text-xs font-semibold text-muted-foreground">{label}</label>
                  <input
                    value={form[k] ?? ""}
                    onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                    placeholder={placeholder}
                    required
                    className="w-full rounded-lg border border-line bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-gold"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Payment */}
          <div className="mt-6 rounded-2xl border border-line bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-gold" />
              <h2 className="text-lg font-bold text-navy dark:text-white">Payment Method</h2>
            </div>
            <div className="mt-4 space-y-2.5">
              <label
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                  pay === "cod" ? "border-gold bg-tint/50" : "border-line bg-card"
                }`}
              >
                <input
                  type="radio"
                  name="pay"
                  checked={pay === "cod"}
                  onChange={() => setPay("cod")}
                  className="accent-gold h-4 w-4"
                />
                <div>
                  <b className="block text-sm font-semibold text-navy dark:text-white">Cash on Delivery (COD)</b>
                  <span className="block text-xs text-muted-foreground">Pay with cash or UPI upon delivery</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary Aside */}
        <aside className="h-fit rounded-2xl border border-line bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-navy dark:text-white">Order Summary</h2>

          <ul className="mt-4 divide-y divide-line/60 text-sm">
            {cart.map((i) => (
              <li key={i.productId + (i.variant ?? "")} className="flex justify-between py-2.5">
                <div>
                  <span className="font-medium text-foreground">{i.name}</span>
                  {i.variant && <span className="block text-xs text-muted-foreground">{i.variant}</span>}
                  <span className="text-xs text-muted-foreground">Qty: {i.qty}</span>
                </div>
                <span className="font-semibold text-navy dark:text-white">{inr(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>

          <div className="gold-rule my-4" />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Items Subtotal</span>
              <span className="font-medium text-foreground">{inr(subtotal)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Delivery Fee</span>
              <span className="font-semibold text-amber-700 dark:text-amber-400">
                {ship === null ? "Not confirmed" : inr(ship)}
              </span>
            </div>
            <div className="mt-2 flex justify-between text-lg font-bold text-navy dark:text-white">
              <span>Total Payable</span>
              <span>{inr(subtotal + (ship ?? 0))}</span>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-soft p-3 text-xs text-muted-foreground">
            {ship === null ? (
              <p>⚠️ Delivery charges must be confirmed before an order can be placed to avoid unexpected fees.</p>
            ) : (
              <p>✓ All items and delivery charges confirmed.</p>
            )}
          </div>

          <button
            type="submit"
            disabled={busy || ship === null}
            className="btn mt-5 w-full cursor-pointer disabled:opacity-50"
          >
            {busy ? "Placing your order…" : "Place Order"}
          </button>
        </aside>
      </form>
    </div>
  );
}
