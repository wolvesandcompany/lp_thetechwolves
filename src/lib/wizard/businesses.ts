import "server-only";
import { createAdminSupabase } from "@/lib/supabase/admin";
import type { DoctorBusinessProfile } from "./doctor-profile-schema";

export type BusinessStatus = "draft" | "pending_approval" | "live";

export type BusinessRow = {
  id: string;
  slug: string;
  template: "doctor-profile";
  agent_id: string;
  status: BusinessStatus;
  profile_data: DoctorBusinessProfile;
  payment_reference: string | null;
  approved_by: string | null;
  approved_at: string | null;
  created_at: string;
  updated_at: string;
};

/** "Bright Smile Dermatology" -> "bright-smile-dermatology-x7k2" (suffix avoids collisions) */
export function slugify(name: string): string {
  const base = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 60);
  const suffix = Math.random().toString(36).slice(2, 6);
  return `${base}-${suffix}`;
}

export async function getBusinessBySlug(slug: string): Promise<BusinessRow | null> {
  const supabase = createAdminSupabase();
  const { data, error } = await supabase.from("businesses").select("*").eq("slug", slug).maybeSingle();
  if (error || !data) return null;
  return data as BusinessRow;
}

export async function listBusinessesForAgent(agentId: string, isAdmin: boolean): Promise<BusinessRow[]> {
  const supabase = createAdminSupabase();
  let query = supabase.from("businesses").select("*").order("created_at", { ascending: false });
  if (!isAdmin) query = query.eq("agent_id", agentId);
  const { data } = await query;
  return (data as BusinessRow[]) ?? [];
}

export async function listPendingApproval(): Promise<BusinessRow[]> {
  const supabase = createAdminSupabase();
  const { data } = await supabase
    .from("businesses")
    .select("*")
    .eq("status", "pending_approval")
    .order("updated_at", { ascending: true });
  return (data as BusinessRow[]) ?? [];
}

export async function notifySlack(text: string) {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
  } catch {
    // Non-critical — don't fail the request over a Slack outage.
  }
}
