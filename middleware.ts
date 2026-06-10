import { timingSafeEqual } from "crypto";
import { type NextRequest, NextResponse } from "next/server";

function safeEqual(a: string, b: string): boolean {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  return aBuf.length === bBuf.length && timingSafeEqual(aBuf, bBuf);
}

function studioBasicAuth(request: NextRequest): NextResponse | null {
  const user = process.env.STUDIO_AUTH_USER;
  const pass = process.env.STUDIO_AUTH_PASSWORD;

  // Fail closed in production when credentials are not configured.
  if (!user || !pass) {
    return new NextResponse(null, { status: 404 });
  }

  const auth = request.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Sanity Studio"' },
    });
  }

  let decoded: string;
  try {
    decoded = atob(auth.slice(6));
  } catch {
    return new NextResponse("Invalid credentials", { status: 401 });
  }

  const colon = decoded.indexOf(":");
  if (colon === -1) {
    return new NextResponse("Invalid credentials", { status: 401 });
  }

  const providedUser = decoded.slice(0, colon);
  const providedPass = decoded.slice(colon + 1);

  if (!safeEqual(providedUser, user) || !safeEqual(providedPass, pass)) {
    return new NextResponse("Invalid credentials", { status: 401 });
  }

  return null;
}

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/studio")) {
    return NextResponse.next();
  }

  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const denied = studioBasicAuth(request);
  return denied ?? NextResponse.next();
}

export const config = {
  matcher: "/studio/:path*",
};
