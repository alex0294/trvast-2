import { getDonationSuggestedAmount } from "@/lib/donations/suggestedAmount";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getDonationSuggestedAmount();
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const keyKind =
    typeof key !== "string"
      ? "missing"
      : key.startsWith("sb_publishable_")
        ? "publishable"
        : key.startsWith("sb_secret_")
          ? "secret"
          : key.startsWith("eyJ")
            ? "jwt"
            : "other";

  return NextResponse.json(
    {
      suggestedAmount: data,
      env: {
        hasSupabaseUrl: typeof url === "string" && url.length > 0,
        hasSupabaseKey: typeof key === "string" && key.length > 0,
        supabaseKeyKind: keyKind,
      },
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    },
  );
}

