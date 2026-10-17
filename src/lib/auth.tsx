import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async (u: User | null) => {
      if (!active) return;
      setUser(u);
      if (u) {
        const isDesignatedAdmin = u.email?.toLowerCase() === "angadi9990@gmail.com";
        const { data } = await supabase.from("user_roles").select("role").eq("user_id", u.id);
        const hasAdminRole = !!data?.some((r) => r.role === "admin");
        if (active) setIsAdmin(isDesignatedAdmin || hasAdminRole);
      } else setIsAdmin(false);
      if (active) setLoading(false);
    };
    supabase.auth.getSession().then(({ data }) => load(data.session?.user ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setTimeout(() => load(s?.user ?? null), 0);
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  return { user, isAdmin, loading };
}
