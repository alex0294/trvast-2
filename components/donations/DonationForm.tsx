"use client";

import { useState } from "react";

export default function DonationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const numericAmount = Number(amount);
    if (!numericAmount || Number.isNaN(numericAmount) || numericAmount <= 0) {
      setError("请输入有效的捐赠金额。");
      return;
    }

    try {
      setSubmitting(true);
      setError(null);
      setSuccess(null);

      const res = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          amount: numericAmount,
          message,
        }),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "提交失败");
      }

      setSuccess("感谢你的支持！本次捐赠已记录（示例数据）。");
      setName("");
      setEmail("");
      setAmount("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setError("提交捐赠时出错，请稍后重试。");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-200"
    >
      <div className="font-semibold text-slate-100">在线捐赠 · 示例</div>
      <p className="text-[11px] text-slate-400">
        通过后端 API 记录你的捐赠意向（仅作演示，不会真实扣款）。
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-1">
          <label className="block text-[11px] text-slate-400">姓名（可选）</label>
          <input
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-100 outline-none focus:border-primary-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label className="block text-[11px] text-slate-400">邮箱（可选）</label>
          <input
            type="email"
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-100 outline-none focus:border-primary-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-[11px] text-slate-400">捐赠金额（USD）</label>
        <input
          type="number"
          min="1"
          step="1"
          className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-100 outline-none focus:border-primary-500"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block text-[11px] text-slate-400">备注（可选）</label>
        <textarea
          rows={3}
          className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-100 outline-none focus:border-primary-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {error && <div className="text-[11px] text-rose-400">{error}</div>}
      {success && (
        <div className="text-[11px] text-emerald-400">{success}</div>
      )}

      <button
        type="submit"
        className="btn-primary mt-1 w-full justify-center text-xs"
        disabled={submitting}
      >
        {submitting ? "提交中..." : "提交捐赠意向"}
      </button>
    </form>
  );
}

