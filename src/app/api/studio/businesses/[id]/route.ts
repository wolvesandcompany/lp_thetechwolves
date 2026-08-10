import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/wizard/auth";
import { createAdminSupabase } from "@/lib/supabase/admin";
import type { DoctorBusinessProfile } from "@/lib/wizard/doctor-profile-schema";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const admin = createAdminSupabase();
  const { data: business } = await admin.from("businesses").select("*").eq("id", id).maybeSingle();
  if (!business) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const isOwner = business.agent_id === user.id;
  if (!isOwner && user.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  if (business.status === "live" && user.role !== "admin") {
    return NextResponse.json({ error: "Live sites can only be edited by an admin" }, { status: 403 });
  }

  const body = (await request.json()) as { profile: Partial<DoctorBusinessProfile> };
  const nextProfile = { ...business.profile_data, ...body.profile };

  const { data, error } = await admin
    .from("businesses")
    .update({ profile_data: nextProfile })
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ business: data });
}
