import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/wizard/auth";
import { createAdminSupabase } from "@/lib/supabase/admin";

export async function POST(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (user.role !== "admin") return NextResponse.json({ error: "Admins only" }, { status: 403 });

  const { id } = await params;
  const admin = createAdminSupabase();

  const { data, error } = await admin
    .from("businesses")
    .update({ status: "live", approved_by: user.id, approved_at: new Date().toISOString() })
    .eq("id", id)
    .eq("status", "pending_approval")
    .select()
    .single();

  if (error || !data) {
    return NextResponse.json({ error: error?.message ?? "Not pending approval" }, { status: 400 });
  }
  return NextResponse.json({ business: data });
}
