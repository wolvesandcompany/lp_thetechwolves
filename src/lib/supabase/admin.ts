import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * Service-role client — bypasses RLS entirely. NEVER import this into a
 * Client Component or expose SUPABASE_SERVICE_ROLE_KEY to the browser.
 * All privileged writes (create/submit/approve) go through this, from
 * Route Handlers only, after checking the caller's role ourselves.
 */
export function createAdminSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  );
}
