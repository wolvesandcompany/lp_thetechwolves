import { NextResponse, type NextRequest } from "next/server";
import { STUDIO_COOKIE, expectedSessionToken } from "@/lib/studio/auth";

/**
 * Gates /studio/* (and its API routes) behind a single shared password.
 * Everything outside /studio (the marketing site, /business, /company)
 * is untouched.
 *
 * Studio relies on writing uploaded HTML to a local disk volume (see
 * src/lib/studio/store.ts) — that only exists on the Docker/droplet
 * deploy. On Vercel's serverless filesystem those writes wouldn't
 * persist, so studio is disabled there rather than silently failing.
 */
export async function middleware(request: NextRequest) {
  const isStudioPath =
    request.nextUrl.pathname.startsWith("/studio") ||
    request.nextUrl.pathname.startsWith("/api/studio");

  if (!isStudioPath) {
    return NextResponse.next();
  }

  if (process.env.VERCEL) {
    return new NextResponse("Studio isn't available on this deployment.", { status: 404 });
  }

  // API routes handle their own auth (return proper 401 JSON) — middleware
  // only needs to redirect page views, and only exists here at all for the
  // Vercel gate above.
  if (request.nextUrl.pathname.startsWith("/api/studio")) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname === "/studio/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(STUDIO_COOKIE)?.value;
  const expected = await expectedSessionToken();

  if (!token || token !== expected) {
    const url = request.nextUrl.clone();
    url.pathname = "/studio/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio/:path*", "/api/studio/:path*"],
};
