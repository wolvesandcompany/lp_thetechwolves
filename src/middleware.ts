import { NextResponse, type NextRequest } from "next/server";
import { STUDIO_COOKIE, expectedSessionToken } from "@/lib/studio/auth";

/**
 * Gates /studio/* behind a single shared password. Everything outside
 * /studio (the marketing site, /business, /company) is untouched.
 */
export async function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/studio")) {
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
  matcher: ["/studio/:path*"],
};
