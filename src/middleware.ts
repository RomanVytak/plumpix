import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const username = process.env.BASIC_AUTH_USERNAME || "";
  const password = process.env.BASIC_AUTH_PASSWORD || "";

  // Skip authentication for API routes (optional)
  if (req.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Check for Authorization header
  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return new Response("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
    });
  }

  // Decode Basic Auth credentials
  const base64Credentials = authHeader.split(" ")[1];
  const credentials = atob(base64Credentials);
  const [reqUsername, reqPassword] = credentials.split(":");

  // Verify credentials
  if (reqUsername !== username || reqPassword !== password) {
    return new Response("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
    });
  }

  // Allow the request if credentials match
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*", // Apply middleware to all routes
};
