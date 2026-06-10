import { NextRequest, NextResponse } from "next/server";

// Common vulnerability scanner and automated tool signatures.
// Remove "python-requests" or "go-http-client" if you ever add a legitimate
// programmatic API consumer using those runtimes.
const BLOCKED_UA_PATTERNS = [
  "sqlmap",
  "nikto",
  "masscan",
  "zgrab",
  "nmap",
  "dirbuster",
  "nuclei",
  "hydra",
  "python-requests",
  "go-http-client",
];

// Allowlist of valid /api/* paths — any other /api/* request is rejected at the edge.
// This kills probes for CMS/framework backdoors (wp-admin, .env, phpunit, etc.)
const VALID_API_PATHS = new Set(["/api/og", "/api/btcmap", "/api/meetup-map", "/api/bitcoin-price"]);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ua = (req.headers.get("user-agent") ?? "").toLowerCase();

  if (BLOCKED_UA_PATTERNS.some((p) => ua.includes(p))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  if (pathname.startsWith("/api/") && !VALID_API_PATHS.has(pathname)) {
    return new NextResponse(
      JSON.stringify({ error: "Not found" }),
      { status: 404, headers: { "Content-Type": "application/json" } },
    );
  }

  const res = NextResponse.next();
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|apple-icon.png|icon.png|opengraph-image.png|sc-flag.svg).*)",
  ],
};
