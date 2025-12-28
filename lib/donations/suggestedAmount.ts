import { getSupabaseAdmin } from "@/lib/supabase/admin";

export type DonationSuggestedAmount = {
  amount: number;
  baseAmount: number;
  dailyIncrease: number;
  nextTickAt: string;
  source: "supabase" | "fallback";
};

function getFallback() {
  const baseAmount = 1299;
  const dailyIncrease = 5;
  const start = new Date("2025-12-10T00:00:00Z");
  const now = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const diffDays = Math.max(
    0,
    Math.floor((now.getTime() - start.getTime()) / msPerDay),
  );

  const amount = baseAmount + diffDays * dailyIncrease;
  const nextTickAt = new Date(
    start.getTime() + (diffDays + 1) * msPerDay,
  ).toISOString();

  return { amount, baseAmount, dailyIncrease, nextTickAt, source: "fallback" as const };
}

export async function getDonationSuggestedAmount(): Promise<DonationSuggestedAmount> {
  try {
    const supabase = getSupabaseAdmin();

    const { data, error } = await (supabase as any).rpc(
      "tick_donation_suggested_amount",
      { p_key: "default" },
    );

    if (error) throw error;
    const row = Array.isArray(data) ? data[0] : data;
    if (!row) throw new Error("No data returned from tick_donation_suggested_amount");

    return {
      amount: Number(row.amount),
      baseAmount: Number(row.base_amount),
      dailyIncrease: Number(row.daily_increase),
      nextTickAt: String(row.next_tick_at),
      source: "supabase",
    };
  } catch (err) {
    console.warn("[donations] suggested amount fallback:", err);
    return getFallback();
  }
}
