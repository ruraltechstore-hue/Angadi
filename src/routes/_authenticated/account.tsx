import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { inr, statusLabel } from "@/lib/store";
import { useAuth } from "@/lib/auth";
import { Package, LayoutDashboard, LogOut, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/_authenticated/account")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { title: "My Account — Angadi" },
      { name: "description", content: "Your Angadi account and order history." },
      { property: "og:title", content: "My Account — Angadi" },
      { property: "og:description", content: "Your Angadi account and order history." },
    ],
  }),
  component: Account,
});

function Account() {
  const { user } = Route.useRouteContext();
  const { isAdmin } = useAuth();
  const qc = useQueryClient();
  const navigate = useNavigate();

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["my-orders", user.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const signOut = async () => {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  return (
    <div className="wrap py-6">
      {/* Breadcrumbs */}
      <div className="crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <span className="text-foreground">My Account</span>
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <h1 className="text-3xl font-bold text-navy dark:text-white">My Account</h1>
          <p className="mt-1 text-sm text-muted-foreground">{user.email}</p>
        </div>

        <div className="flex items-center gap-3">
          {isAdmin && (
            <Link to="/admin" className="btn flex items-center gap-1.5 text-xs">
              <LayoutDashboard className="h-4 w-4" /> Admin Panel
            </Link>
          )}
          <button
            onClick={signOut}
            className="btn ghost flex items-center gap-1.5 text-xs cursor-pointer"
          >
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="hd">
          <h2>Order History</h2>
          <span className="text-sm text-muted-foreground">{orders.length} orders</span>
        </div>

        {isLoading ? (
          <p className="py-16 text-center text-muted-foreground">Loading orders…</p>
        ) : orders.length === 0 ? (
          <div className="rounded-2xl border border-line bg-card p-12 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-soft text-navy">
              <Package className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="mt-4 font-semibold text-foreground">No orders placed yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              When you purchase products, your order status and history will appear here.
            </p>
            <Link to="/products" className="btn mt-6">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((o) => (
              <Link
                key={o.id}
                to="/track"
                search={{ order: o.order_number }}
                className="group flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line bg-card p-5 shadow-sm transition hover:border-gold hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <b className="text-navy dark:text-white font-semibold">Order #{o.order_number}</b>
                    <span className="rounded-full bg-tint px-2.5 py-0.5 text-xs font-semibold text-navy">
                      {statusLabel(o.status)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Placed on {new Date(o.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} · {(o.items as unknown[]).length} items
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-navy dark:text-white">{inr(o.total)}</span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-navy" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
