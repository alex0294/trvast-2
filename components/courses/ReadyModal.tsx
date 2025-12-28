"use client";

import { useState } from "react";

type ReadyModalTriggerProps = {
  label: string;
  className: string;
};

export function ReadyModalTrigger({
  label,
  className,
}: ReadyModalTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(true)}
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-sky-500/60 bg-slate-950/95 text-slate-50 shadow-[0_0_40px_rgba(56,189,248,0.75)]">
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-slate-900 via-sky-900 to-slate-950 px-5 py-3">
              <h3 className="text-base font-semibold tracking-wide">
                外汇交易员面试
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xl leading-none text-white/80 hover:text-white"
                aria-label="关闭"
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="space-y-4 px-5 py-5 text-sm">
              <div className="space-y-2">
                <h4 className="text-base font-semibold text-slate-50">
                  训练营面试申请
                </h4>
                <p className="text-[13px] leading-relaxed text-slate-300">
                  请发送您的简历到以下邮箱，我们会尽快与您联系：
                </p>
              </div>

              <div className="space-y-1 rounded-md border border-slate-700 bg-slate-900/70 px-3 py-2">
                <div className="text-[11px] text-slate-400">邮箱地址</div>
                <div className="flex items-center justify-between gap-3">
                  <span className="break-all text-sm text-slate-50">
                    alex294@163.com
                  </span>
                  <span className="text-[11px] font-semibold text-sky-300">
                    复制
                  </span>
                </div>
              </div>

              <div className="space-y-1 rounded-md border border-slate-700 bg-slate-900/70 px-3 py-2">
                <div className="text-[11px] text-slate-400">邮件主题</div>
                <div className="text-sm text-slate-50">训练营面试申请</div>
              </div>

              <div className="rounded-md bg-slate-900/70 px-3 py-3 text-[11px] leading-relaxed text-slate-300">
                <span className="font-semibold text-slate-100">提示：</span>
                请在邮件中包含你的基本信息、教育背景，以及为什么想成为专业交易员的简要说明。
              </div>

              <div className="flex flex-col gap-3 pt-2 text-sm md:flex-row">
                <a
                  href="mailto:alex294@163.com?subject=训练营面试申请"
                  className="inline-flex flex-1 items-center justify-center rounded bg-slate-100 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
                >
                  打开邮件客户端
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex flex-1 items-center justify-center rounded border border-slate-600 bg-slate-900/80 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
                >
                  关闭
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

