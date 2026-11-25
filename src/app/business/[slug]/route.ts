import { NextRequest, NextResponse } from "next/server";
import { getBusinessHtml } from "@/lib/studio/store";

// Serves the raw uploaded HTML file as-is (not wrapped in the main
// site's layout). A restrictive CSP keeps any script in the uploaded
// page from reaching this domain's cookies or APIs.
export async function GET(_request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const html = getBusinessHtml(slug);

  if (!html) {
    return new NextResponse("Not found", { status: 404 });
  }

  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Content-Security-Policy": "default-src 'self' data: blob: https: 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'self'",
    },
  });
}
