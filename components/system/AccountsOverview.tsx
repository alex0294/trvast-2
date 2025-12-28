"use client";

import { useEffect, useState } from "react";

 type Account = {
  id: number;
  name: string;
  currency: string;
  type: string;
  balance: number;
};

 type Transaction = {
  id: number;
  accountId: number;
  type: string;
  direction: string | null;
  symbol: string | null;
  amount: number;
  price: number | null;
  timestamp: string;
  description: string | null;
};

export default function AccountsOverview() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/accounts");
        if (!res.ok) {
          throw new Error("加载账户失败");
        }
        const data = (await res.json()) as Account[];
        setAccounts(data);

        if (data.length > 0) {
          const txRes = await fetch(
            `/api/transactions?accountId=${data[0].id}`,
          );
          if (txRes.ok) {
            const txData = (await txRes.json()) as Transaction[];
            setTransactions(txData);
          }
        }
      } catch (err) {
        console.error(err);
        setError("加载资金账户数据时出错，请稍后重试。");
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, []);

  return (
    <section className="section">
      <h2 className="section-title mb-2 !text-xl">资金账户与交易记录 · 示例</h2>
      <p className="mb-4 text-xs text-slate-400">
        下面的数据来自后端 Prisma + SQLite。生产环境中可以接入真实资管账户或券商接口。
      </p>

      {loading && (
        <div className="text-sm text-slate-300">正在加载账户数据...</div>
      )}
      {error && <div className="text-sm text-rose-400">{error}</div>}

      {!loading && !error && (
        <div className="grid gap-6 md:grid-cols-[0.9fr,1.1fr]">
          <div className="card space-y-3 text-xs text-slate-200">
            <div className="text-[11px] font-semibold text-slate-300">
              资金账户概览
            </div>
            {accounts.length === 0 && (
              <div className="text-slate-400">暂无账户数据。</div>
            )}
            {accounts.map((account) => (
              <div
                key={account.id}
                className="rounded-lg border border-slate-700 bg-slate-900/70 p-3"
              >
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-slate-100">
                    {account.name}
                  </div>
                  <div className="text-[11px] uppercase text-slate-400">
                    {account.type}
                  </div>
                </div>
                <div className="mt-2 text-sm font-semibold text-primary-300">
                  {account.balance.toLocaleString()} {account.currency}
                </div>
              </div>
            ))}
          </div>

          <div className="card space-y-3 text-xs text-slate-200">
            <div className="text-[11px] font-semibold text-slate-300">
              最近交易记录（示例）
            </div>
            {transactions.length === 0 && (
              <div className="text-slate-400">暂无交易记录。</div>
            )}
            {transactions.length > 0 && (
              <div className="overflow-hidden rounded-lg border border-slate-800">
                <table className="min-w-full divide-y divide-slate-800 text-[11px]">
                  <thead className="bg-slate-900/80 text-slate-400">
                    <tr>
                      <th className="px-3 py-2 text-left font-medium">时间</th>
                      <th className="px-3 py-2 text-left font-medium">类型</th>
                      <th className="px-3 py-2 text-left font-medium">品种</th>
                      <th className="px-3 py-2 text-right font-medium">数量</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-950/60">
                    {transactions.map((tx) => (
                      <tr key={tx.id}>
                        <td className="px-3 py-1.5 text-slate-400">
                          {new Date(tx.timestamp).toLocaleString()}
                        </td>
                        <td className="px-3 py-1.5 text-slate-200">
                          {tx.type}
                        </td>
                        <td className="px-3 py-1.5 text-slate-200">
                          {tx.symbol ?? "-"}
                        </td>
                        <td className="px-3 py-1.5 text-right text-slate-200">
                          {tx.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

