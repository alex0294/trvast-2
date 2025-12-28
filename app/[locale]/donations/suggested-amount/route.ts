import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET(req: NextRequest) {
  const url = new URL("/api/donations/suggested-amount", req.url);
  return NextResponse.redirect(url, {
    headers: { "Cache-Control": "no-store, max-age=0" },
  });
}

