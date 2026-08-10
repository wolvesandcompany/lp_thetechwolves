import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/wizard/auth";
import { createAdminSupabase } from "@/lib/supabase/admin";
import { notifySlack } from "@/lib/wizard/businesses";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const admin = createAdminSupabase();
  const { data: business } = await admin.from("businesses").select("*").eq("id", id).maybeSingle();
  if (!business) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (business.agent_id !== user.id && user.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  if (business.status === "live") {
    return NextResponse.json({ error: "Already live" }, { status: 400 });
  }

  const body = (await request.json().catch(() => ({}))) as { paymentReference?: string };

  const { data, error } = await admin
    .from("businesses")
    .update({
      status: "pending_approval",
      payment_reference: body.paymentReference?.trim() || null,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thetechwolves.com";
  const paymentLine = body.paymentReference ? `\nPayment ref: ${body.paymentReference}` : "";
  await notifySlack(
    `🔔 *${business.profile_data.practiceName}* submitted for approval by ${user.email ?? user.id}.${paymentLine}\nPreview: ${baseUrl}/preview/${business.slug}\nApprove: ${baseUrl}/studio/admin`,
  );

  return NextResponse.json({ business: data });
}
