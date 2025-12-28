"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

function formatMs(ms: number) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0",
  )}:${String(seconds).padStart(2, "0")}`;
}

export default function DailyIncreaseCountdown({
  nextTickAt,
  dailyIncrease,
}: {
  nextTickAt: string;
  dailyIncrease: number;
}) {
  const router = useRouter();
  const nextTickMs = useMemo(() => Date.parse(nextTickAt), [nextTickAt]);
  const [remainingMs, setRemainingMs] = useState(() =>
    Number.isFinite(nextTickMs) ? Math.max(0, nextTickMs - Date.now()) : 0,
  );

  useEffect(() => {
    if (!Number.isFinite(nextTickMs)) return;

    setRemainingMs(Math.max(0, nextTickMs - Date.now()));
    const intervalId = window.setInterval(() => {
      setRemainingMs(Math.max(0, nextTickMs - Date.now()));
    }, 250);

    return () => window.clearInterval(intervalId);
  }, [nextTickMs]);

  useEffect(() => {
    if (!Number.isFinite(nextTickMs)) return;
    if (remainingMs > 0) return;

    const timeoutId = window.setTimeout(() => router.refresh(), 500);
    return () => window.clearTimeout(timeoutId);
  }, [dailyIncrease, nextTickMs, remainingMs, router]);

  if (!Number.isFinite(nextTickMs)) return null;

  return <span>距离下次 +${dailyIncrease}：{formatMs(remainingMs)}</span>;
}

