"use client";

import { useState } from "react";
import Link from "next/link";

export default function PipCalculatorPage({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  const [pair, setPair] = useState("EURUSD");
  const [lotSize, setLotSize] = useState(1);
  const [price, setPrice] = useState(1.15875);

  const pipValue =
    pair.endsWith("JPY") ? (lotSize * 1000) / price : lotSize * 10;

  return (
    <div className="space-y-16">
      <section className="section rounded-3xl border border-slate-800/80 bg-gradient-to-br from-sky-900/40 via-obsidian-900 to-slate-950 px-6 py-14 shadow-xl">
        <h1 className="mb-3 text-2xl font-semibold md:text-3xl">
          点值计算器
        </h1>
        <p className="mb-4 text-sm text-slate-300">
          不同品种、不同仓位规模下，每一点波动到底等于多少钱，一目了然。
        </p>
      </section>

      <section className="section grid gap-8 md:grid-cols-[1.2fr,0.9fr]">
        <div className="card space-y-4">
          <h2 className="section-title mb-2 !text-xl">参数输入</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs text-slate-400">
                交易品种
              </label>
              <select
                value={pair}
                onChange={(e) => setPair(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-primary-400"
              >
                <option>EURUSD</option>
                <option>GBPUSD</option>
                <option>USDJPY</option>
                <option>XAUUSD</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-400">
                仓位规模（标准手）
              </label>
              <input
                type="number"
                value={lotSize}
                onChange={(e) => setLotSize(Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-primary-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-400">
                当前价格
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-primary-400"
              />
            </div>
          </div>
        </div>

        <div className="card space-y-4 text-sm text-slate-200">
          <h2 className="section-title mb-2 !text-xl">计算结果</h2>
          <div className="flex items-center justify-between">
            <span>每点价值</span>
            <span className="font-mono">
              ${pipValue.toFixed(2)}
            </span>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            示例：对于 EURUSD 等多数非日元货币对，1 标准手每点约等于 10
            美金；日元货币对点值计算略有不同。
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Pip 基础知识</h2>
        <div className="card">
          <ul className="list-disc space-y-2 pl-4 text-xs text-slate-300">
            <li>大多数货币对：小数点后第 4 位为 1 点。</li>
            <li>日元货币对：小数点后第 2 位为 1 点。</li>
            <li>黄金、指数等品种，需要根据交易规则单独确认点值定义。</li>
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
            href={`/${locale}/tools/risk-reward-calculator`}
            className="btn-outline"
          >
            风险回报计算器
          </Link>
        </div>
      </section>
    </div>
  );
}

