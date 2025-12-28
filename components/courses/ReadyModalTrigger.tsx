"use client";

import { useState, type ReactNode } from "react";

type ReadyModalTriggerProps = {
  renderTrigger: (open: () => void) => ReactNode;
};

export default function ReadyModalTrigger({
  renderTrigger,
}: ReadyModalTriggerProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {renderTrigger(handleOpen)}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-sky-500/60 bg-slate-950/95 text-slate-50 shadow-[0_0_40px_rgba(56,189,248,0.75)]">
            <div className="flex items-center justify-between bg-gradient-to-r from-slate-900 via-sky-900 to-slate-950 px-5 py-3">
              <h3 className="text-base font-semibold tracking-wide">
                外汇交易员面试
              </h3>
              <button
                type="button"
                onClick={handleClose}
                className="text-xl leading-none text-white/80 hover:text-white"
                aria-label="关闭"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 px-5 py-5">
              <div className="space-y-1 text-sm">
                <label className="block text-slate-200">
                  姓名 <span className="text-primary-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="请输入您的姓名"
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-primary-500"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label className="block text-slate-200">
                  称呼 <span className="text-primary-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="请填写我们如何称呼您"
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-primary-500"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label className="block text-slate-200">
                  邮箱 <span className="text-primary-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="请输入您的邮箱"
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-primary-500"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label className="block text-slate-200">
                  手机号码 <span className="text-primary-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="请输入您的手机号码"
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-primary-500"
                />
              </div>

              <button
                type="button"
                className="mt-2 w-full rounded bg-slate-100 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
              >
                提交
              </button>

              <p className="pt-1 text-center text-[11px] text-slate-500">
                我们重视您的隐私，不会分享您的信息
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

