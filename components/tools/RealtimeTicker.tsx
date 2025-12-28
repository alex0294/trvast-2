"use client";

import { useEffect, useState } from "react";

type TickerState = {
  eurusd: number;
  gold: number;
};

export function RealtimeTicker() {
  const [ticker, setTicker] = useState<TickerState>({
    eurusd: 1.15875,
    gold: 4253.98
  });

  useEffect(() => {
    const id = setInterval(() => {
      setTicker((prev) => ({
        eurusd: +(prev.eurusd + (Math.random() - 0.5) * 0.0004).toFixed(5),
        gold: +(prev.gold + (Math.random() - 0.5) * 1.5).toFixed(2)
      }));
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
      <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">
        实时示例数据
      </div>
      <div className="flex items-center gap-2">
        <span className="text-slate-400">EURUSD</span>
        <span className="font-mono text-sm text-primary-300">
          {ticker.eurusd.toFixed(5)}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-slate-400">XAUUSD</span>
        <span className="font-mono text-sm text-accent-300">
          {ticker.gold.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

