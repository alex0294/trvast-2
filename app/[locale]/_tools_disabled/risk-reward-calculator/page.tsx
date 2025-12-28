"use client";

import { useState } from "react";
import Link from "next/link";

export default function RiskRewardCalculatorPage({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  const [entry, setEntry] = useState(1.15875);
  const [stop, setStop] = useState(1.15825);
  const [target, setTarget] = useState(1.16075);
  const [riskAmount, setRiskAmount] = useState(200);

  const riskPips = Math.abs(entry - stop) * 10000;
  const rewardPips = Math.abs(target - entry) * 10000;
  const ratio = riskPips > 0 ? rewardPips / riskPips : 0;

  return (
    <div className="space-y-16">
      <section className="section rounded-3xl border border-slate-800/80 bg-gradient-to-br from-violet-900/40 via-obsidian-900 to-slate-950 px-6 py-14 shadow-xl">
        <h1 className="mb-3 text-2xl font-semibold md:text-3xl">
          风险回报计算器
        </h1>
        <p className="mb-4 text-sm text-slate-300">
          提前确认每笔交易的止损/止盈结构，并量化风险回报比，避免情绪化决策。
        </p>
        <div className="flex flex-wrap gap-4 text-xs text-slate-300">
          <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">
            当前示例风险回报：1:{ratio.toFixed(2)}
          </div>
          <div>风险金额示例：${riskAmount.toFixed(2)}</div>
        </div>
      </section>

      <section className="section grid gap-8 md:grid-cols-[1.2fr,0.9fr]">
        <div className="card space-y-4">
          <h2 className="section-title mb-2 !text-xl">价格结构</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs text-slate-400">
                入场价
              </label>
              <input
                type="number"
                value={entry}
                onChange={(e) => setEntry(Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-primary-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-400">
                止损价
              </label>
              <input
                type="number"
                value={stop}
                onChange={(e) => setStop(Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-primary-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-400">
                止盈价
              </label>
              <input
                type="number"
                value={target}
                onChange={(e) => setTarget(Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-primary-400"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-400">
              风险金额 (USD)
            </label>
            <input
              type="number"
              value={riskAmount}
              onChange={(e) => setRiskAmount(Number(e.target.value) || 0)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-primary-400"
            />
          </div>
        </div>

        <div className="card space-y-3 text-sm text-slate-200">
          <h2 className="section-title mb-2 !text-xl">计算结果</h2>
          <div className="flex items-center justify-between">
            <span>风险点数</span>
            <span className="font-mono">
              {riskPips.toFixed(1)} 点
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>收益点数</span>
            <span className="font-mono">
              {rewardPips.toFixed(1)} 点
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>风险回报比</span>
            <span className="font-mono">
              1:{ratio.toFixed(2)}
            </span>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            示例：当止损 50 点、止盈 100 点时，风险回报为 1:2。长期保持大于
            1:2 的交易结构，有助于抵御亏损波动。
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">风险回报指南</h2>
        <div className="card">
          <ul className="list-disc space-y-2 pl-4 text-xs text-slate-300">
            <li>尽量避免低于 1:1 的交易结构。</li>
            <li>常见目标结构：1:2、1:3、1:4 等。</li>
            <li>实际回报还取决于胜率与执行纪律，工具只是帮助你提前量化决策。</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">其他工具</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/${locale}/tools/position-calculator`}
            className="btn-outline"
          >
            仓位计算器
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

