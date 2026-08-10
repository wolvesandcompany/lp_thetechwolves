import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/wizard/auth";
import { createAdminSupabase } from "@/lib/supabase/admin";
import { slugify, listBusinessesForAgent } from "@/lib/wizard/businesses";
import { DEFAULT_DOCTOR_PROFILE, type DoctorBusinessProfile } from "@/lib/wizard/doctor-profile-schema";

export async function GET() {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const businesses = await listBusinessesForAgent(user.id, user.role === "admin");
  return NextResponse.json({ businesses });
}

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = (await request.json()) as { profile: Partial<DoctorBusinessProfile> };
  const profile: DoctorBusinessProfile = { ...DEFAULT_DOCTOR_PROFILE, ...body.profile };

  if (!profile.practiceName?.trim()) {
    return NextResponse.json({ error: "practiceName is required" }, { status: 400 });
  }

  const admin = createAdminSupabase();
  const slug = slugify(profile.practiceName);

  const { data, error } = await admin
    .from("businesses")
    .insert({
      slug,
      template: "doctor-profile",
      agent_id: user.id,
      status: "draft",
      profile_data: profile,
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ business: data });
}
