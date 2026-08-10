import "server-only";
import { createServerSupabase } from "@/lib/supabase/server";
import { createAdminSupabase } from "@/lib/supabase/admin";

export type SessionUser = { id: string; email: string | null; role: "sales" | "admin" };

/** Current logged-in agent/admin, or null. Reads the session cookie + their profile row. */
export async function getSessionUser(): Promise<SessionUser | null> {
  const supabase = await createServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const admin = createAdminSupabase();
  const { data: profile } = await admin.from("profiles").select("role").eq("id", user.id).maybeSingle();

  return {
    id: user.id,
    email: user.email ?? null,
    role: (profile?.role as "sales" | "admin") ?? "sales",
  };
}
