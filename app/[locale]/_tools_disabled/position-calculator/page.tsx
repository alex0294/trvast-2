"use client";

import { useState } from "react";
import Link from "next/link";
import { RealtimeTicker } from "@/components/tools/RealtimeTicker";

export default function PositionCalculatorPage({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  const [balance, setBalance] = useState(10000);
  const [riskPct, setRiskPct] = useState(2);
  const [stopLossPips, setStopLossPips] = useState(50);
  const [pipValuePerLot, setPipValuePerLot] = useState(10);

  const riskAmount = (balance * riskPct) / 100;
  const positionSize =
    stopLossPips > 0 ? riskAmount / (stopLossPips * pipValuePerLot) : 0;

  return (
    <div className="space-y-16">
      <section className="section rounded-3xl border border-slate-800/80 bg-gradient-to-br from-cyan-900/40 via-obsidian-900 to-slate-950 px-6 py-14 shadow-xl">
        <h1 className="mb-3 text-2xl font-semibold md:text-3xl">
          仓位计算器
        </h1>
        <p className="mb-4 text-sm text-slate-300">
          结合账户规模与风险参数，精确计算每笔交易的合理仓位，控制回撤，稳定成长。
        </p>
        <RealtimeTicker />
      </section>

      <section className="section grid gap-8 md:grid-cols-[1.2fr,0.9fr]">
        <div className="card space-y-4">
          <h2 className="section-title mb-2 !text-xl">参数输入</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-slate-400">
                账户余额 (USD)
              </label>
              <input
                type="number"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-primary-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-400">
                单笔风险比例 (%)
              </label>
              <input
                type="number"
                value={riskPct}
                onChange={(e) => setRiskPct(Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-primary-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-400">
                止损距离 (点)
              </label>
              <input
                type="number"
                value={stopLossPips}
                onChange={(e) => setStopLossPips(Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-primary-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-400">
                每标手点值 (USD)
              </label>
              <input
                type="number"
                value={pipValuePerLot}
                onChange={(e) =>
                  setPipValuePerLot(Number(e.target.value) || 0)
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-primary-400"
              />
            </div>
          </div>
        </div>

        <div className="card space-y-4">
          <h2 className="section-title mb-2 !text-xl">计算结果</h2>
          <div className="space-y-3 text-sm text-slate-200">
            <div className="flex items-center justify-between">
              <span>风险金额</span>
              <span className="font-mono">
                ${riskAmount.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>建议仓位（标准手）</span>
              <span className="font-mono">
                {positionSize.toFixed(2)} 手
              </span>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              以上为示例计算逻辑，正式使用时可根据你的风控模型和实际品种的点值设置进行调整。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">使用说明</h2>
        <div className="card">
          <ul className="list-disc space-y-2 pl-4 text-xs text-slate-300">
            <li>先确认账户余额与可接受的单笔风险比例（如 1%-2%）。</li>
            <li>根据交易计划设置合理的止损距离，避免过于紧凑或过于宽松。</li>
            <li>根据品种设置每标准手点值，或使用点值计算器自动计算。</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">其他工具</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/${locale}/tools/risk-reward-calculator`}
            className="btn-outline"
          >
            风险回报计算器
          </Link>
          <Link
            href={`/${locale}/tools/pip-calculator`}
            className="btn-outline"
          >
            点值计算器
          </Link>
        </div>
      </section>
    </div>
  );
}

