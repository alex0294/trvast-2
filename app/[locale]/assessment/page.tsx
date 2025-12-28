import Image from "next/image";
import Link from "next/link";

export default function AssessmentIntroPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <div className="space-y-0">
      <section className="section mx-auto max-w-4xl rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950 px-6 py-12 shadow-xl">
        <div className="flex flex-col items-center gap-10">
          {/* Icon + title */}
          <div className="flex flex-col items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-sky-500/60 bg-slate-950/90 shadow-[0_0_28px_rgba(56,189,248,0.7)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black">
                <Image
                  src="/brain-test.png"
                  alt="交易员心理测试图标"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-extrabold tracking-[0.35em] text-slate-50 md:text-4xl">
                交易员心理测试
              </h1>
              <p className="text-sm text-slate-300 md:text-base">
                全面评估您的交易心理素质，为训练营筛选真正适配的交易员
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid w-full gap-4 text-xs md:grid-cols-3 md:text-sm">
            <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-4 text-center shadow-[0_0_22px_rgba(15,23,42,0.8)]">
              <div className="mx-auto mb-2 inline-flex items-center justify-center rounded-md bg-slate-900 px-2 py-1 text-[11px] font-semibold tracking-[0.25em] text-sky-300">
                时长
              </div>
              <div className="text-[11px] text-slate-400">测试时长</div>
              <div className="mt-1 text-sm font-semibold text-slate-50 md:text-base">
                约 5–8 分钟
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-4 text-center shadow-[0_0_22px_rgba(15,23,42,0.8)]">
              <div className="mx-auto mb-2 inline-flex items-center justify-center rounded-md bg-slate-900 px-2 py-1 text-[11px] font-semibold tracking-[0.25em] text-sky-300">
                题目
              </div>
              <div className="text-[11px] text-slate-400">题目数量</div>
              <div className="mt-1 text-sm font-semibold text-slate-50 md:text-base">
                20 道题目
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-4 text-center shadow-[0_0_22px_rgba(15,23,42,0.8)]">
              <div className="mx-auto mb-2 inline-flex items-center justify-center rounded-md bg-slate-900 px-2 py-1 text-[11px] font-semibold tracking-[0.25em] text-sky-300">
                维度
              </div>
              <div className="text-[11px] text-slate-400">评估维度</div>
              <div className="mt-1 text-sm font-semibold text-slate-50 md:text-base">
                5 个核心维度
              </div>
            </div>
          </div>

          {/* Dimensions card */}
          <div className="w-full rounded-2xl border border-slate-800 bg-slate-950/80 p-6 md:p-8 shadow-[0_0_26px_rgba(15,23,42,0.9)]">
            <div className="mb-4 text-sm font-semibold text-slate-100 md:text-base">
              测试维度包括：
            </div>

            <div className="grid gap-4 text-sm text-slate-200 md:grid-cols-2 md:gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900 text-[11px] font-bold tracking-[0.2em] text-sky-300">
                    R
                  </span>
                  <span>风险承受能力</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900 text-[11px] font-bold tracking-[0.2em] text-sky-300">
                    D
                  </span>
                  <span>决策能力</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900 text-[11px] font-bold tracking-[0.2em] text-sky-300">
                    S
                  </span>
                  <span>压力管理</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900 text-[11px] font-bold tracking-[0.2em] text-sky-300">
                    E
                  </span>
                  <span>情绪控制能力</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900 text-[11px] font-bold tracking-[0.2em] text-sky-300">
                    Z
                  </span>
                  <span>纪律性</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <Link
              href={`/${locale}/assessment/test`}
              className="btn-primary min-w-[220px] px-10 !py-4 !text-lg"


            >
              开始测试
            </Link>
            <p className="text-[11px] text-slate-500">
              请根据您的真实感受作答，没有对错之分
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

