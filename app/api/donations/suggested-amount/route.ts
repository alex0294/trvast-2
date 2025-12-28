import { getDonationSuggestedAmount } from "@/lib/donations/suggestedAmount";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
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

  const supabaseUrlHost = (() => {
    try {
      if (!url) return null;
      return new URL(url).host;
    } catch {
      return null;
    }
  })();

  // Debug: try Supabase RPC directly so we can return the real error instead of fallback.
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await (supabase as any).rpc(
      "tick_donation_suggested_amount",
      { p_key: "default" },
    );

    if (error) {
      return NextResponse.json(
        {
          suggestedAmount: await getDonationSuggestedAmount(),
          supabaseRpc: {
            ok: false,
            error: {
              code: (error as any).code ?? null,
              message: (error as any).message ?? String(error),
              details: (error as any).details ?? null,
              hint: (error as any).hint ?? null,
            },
          },
          env: {
            hasSupabaseUrl: typeof url === "string" && url.length > 0,
            hasSupabaseKey: typeof key === "string" && key.length > 0,
            supabaseKeyKind: keyKind,
            supabaseUrlHost,
          },
        },
        { headers: { "Cache-Control": "no-store, max-age=0" } },
      );
    }

    const row = Array.isArray(data) ? data[0] : data;
    return NextResponse.json(
      {
        suggestedAmount: {
          amount: Number(row?.amount),
          baseAmount: Number(row?.base_amount),
          dailyIncrease: Number(row?.daily_increase),
          nextTickAt: String(row?.next_tick_at),
          source: "supabase",
        },
        supabaseRpc: { ok: true },
        env: {
          hasSupabaseUrl: typeof url === "string" && url.length > 0,
          hasSupabaseKey: typeof key === "string" && key.length > 0,
          supabaseKeyKind: keyKind,
          supabaseUrlHost,
        },
      },
      { headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  } catch (err) {
    return NextResponse.json(
      {
        suggestedAmount: await getDonationSuggestedAmount(),
        supabaseRpc: {
          ok: false,
          error: { message: err instanceof Error ? err.message : String(err) },
        },
        env: {
          hasSupabaseUrl: typeof url === "string" && url.length > 0,
          hasSupabaseKey: typeof key === "string" && key.length > 0,
          supabaseKeyKind: keyKind,
          supabaseUrlHost,
        },
      },
      { headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  }
}
