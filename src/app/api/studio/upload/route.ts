import { NextRequest, NextResponse } from "next/server";
import { STUDIO_COOKIE, expectedSessionToken } from "@/lib/studio/auth";
import { saveBusinessHtml, slugify, uniqueSlug } from "@/lib/studio/store";

const MAX_BYTES = 3 * 1024 * 1024; // 3MB, plenty for a single static page

export async function POST(request: NextRequest) {
  const token = request.cookies.get(STUDIO_COOKIE)?.value;
  const expected = await expectedSessionToken();
  if (!token || token !== expected) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const form = await request.formData();
  const name = form.get("name");
  const file = form.get("file");

  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "Business name is required" }, { status: 400 });
  }
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "HTML file is required" }, { status: 400 });
  }
  if (file.size === 0 || file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File must be between 1 byte and 3MB" }, { status: 400 });
  }

  const html = await file.text();
  if (!/<html[\s>]/i.test(html)) {
    return NextResponse.json({ error: "File doesn't look like a full HTML page" }, { status: 400 });
  }

  const baseSlug = slugify(name);
  if (!baseSlug) {
    return NextResponse.json({ error: "Business name produced an empty slug" }, { status: 400 });
  }

  const slug = uniqueSlug(baseSlug);
  saveBusinessHtml(slug, html);

  return NextResponse.json({ ok: true, slug, url: `/business/${slug}` });
}
