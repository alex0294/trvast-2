import Link from "next/link";
import EnrollmentForm from "@/components/courses/EnrollmentForm";

export default function CoursesPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <div className="space-y-6">
      {/* Part 1: Hero */}
      <section className="section relative -mx-4 flex items-center justify-center overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 px-6 py-12 shadow-xl md:mx-[-40px] md:py-16 lg:mx-[-80px]">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.3),transparent_60%),radial-gradient(circle_at_bottom,_rgba(37,99,235,0.25),transparent_60%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,rgba(15,23,42,1),transparent)]" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(148,163,184,0.18),rgba(148,163,184,0.18)_1px,transparent_1px,transparent_6px)] mix-blend-soft-light" />
        </div>

        <div className="relative mx-auto max-w-5xl space-y-6 px-4 text-center md:px-6 lg:px-10">
          <div className="inline-flex items-center justify-center rounded-full border border-cyan-300/80 bg-slate-900/70 px-8 py-2 text-xs font-semibold tracking-[0.35em] text-slate-50 shadow-[0_0_30px_rgba(56,189,248,0.95)] ring-1 ring-cyan-400/70 md:px-10 md:py-2.5 md:text-sm">
            浩瀚专属训练营
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl font-extrabold tracking-[0.25em] text-slate-50 md:text-6xl">
              培训体系
            </h1>
            <p className="text-sm text-slate-200 md:text-base">
              30个工作日专业训练营，从新兵到战士的蜕变之路
            </p>
          </div>

          <div className="space-y-[46px]">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm">
              <div className="inline-flex min-w-[120px] items-center justify-center rounded-md border border-slate-600/80 bg-slate-900/60 px-4 py-2 font-semibold text-slate-100">
                <span className="mr-1 text-base font-bold">30</span>
                工作日
              </div>
              <div className="inline-flex min-w-[120px] items-center justify-center rounded-md border border-slate-600/80 bg-slate-900/60 px-4 py-2 font-semibold text-slate-100">
                循序渐进
              </div>
              <div className="inline-flex min-w-[120px] items-center justify-center rounded-md border border-slate-600/80 bg-slate-900/60 px-4 py-2 font-semibold text-slate-100">
                <span className="mr-1 text-base font-bold">&lt;16%</span>
                通过率
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm">
              <a
                href="#ready-modal-top"
                className="btn-primary min-w-[180px] px-10 py-4 text-xl md:text-2xl"
              >
                立刻加入
              </a>





              <Link
                href={`/${locale}/assessment`}
                className="inline-flex items-center justify-center rounded-full border border-primary-500 px-8 py-3 text-lg font-semibold text-primary-300 hover:bg-primary-500/10"

              >
                先做心理测评
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="courses-top" className="h-0" />

      {/* Part 2: Why us */}
      <section className="section relative">
        {/* Neon grid background */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.55)_1px,transparent_1px)] bg-[length:90px_90px]" />
        </div>

        <div className="mb-8 text-center">
          <h2 className="section-title !mb-0 text-center text-3xl md:text-4xl tracking-[0.35em] bg-gradient-to-r from-sky-300 via-cyan-400 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(56,189,248,0.85)]">
            为什么选择浩瀚交易
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500" />
        </div>

        <div className="mx-auto max-w-6xl space-y-6">
          {/* Top row: core advantage + profit share */}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)]">
            {/* Core advantage */}
            <div className="relative overflow-hidden rounded-2xl border border-cyan-500/25 bg-slate-900/60 p-6 text-left text-slate-50 shadow-[0_0_30px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/80 hover:shadow-[0_0_45px_rgba(56,189,248,0.9)] hover:bg-slate-900/80">
              <div className="pointer-events-none absolute -inset-px rounded-2xl border border-cyan-400/10" />
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                核心优势
              </div>
              <h3 className="mb-4 bg-gradient-to-r from-slate-50 via-cyan-100 to-slate-200 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">
                100% 免费培训
              </h3>
              <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                无需任何前期费用，我们提供完整的系统化培训。只有当你成功盈利后，我们才从利润中分成。
              </p>
            </div>

            {/* Profit share */}
            <div className="relative overflow-hidden rounded-2xl border border-cyan-500/25 bg-slate-900/60 p-6 text-left text-slate-50 shadow-[0_0_30px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/80 hover:shadow-[0_0_45px_rgba(56,189,248,0.9)] hover:bg-slate-900/80">
              <div className="pointer-events-none absolute -inset-px rounded-2xl border border-cyan-400/10" />
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                高额分润
              </div>
              <div className="mb-2 bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-400 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
                60–90%
              </div>
              <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                行业领先的分润比例，你的努力获得最大回报。
              </p>

              <div className="mt-6 border-t border-slate-700/70 pt-4">
                <div className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                  资金规模
                </div>
                <div className="mt-1 text-xl font-extrabold text-slate-50">
                  $100K – $2M
                </div>
              </div>
            </div>
          </div>

          {/* Middle row: real capital + mentor */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-6 text-left text-slate-50 shadow-[0_0_26px_rgba(15,23,42,0.85)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/80 hover:shadow-[0_0_40px_rgba(56,189,248,0.85)] hover:bg-slate-900/80">
              <div className="pointer-events-none absolute inset-px rounded-2xl border border-cyan-400/10" />
              <div className="relative">
                <h3 className="mb-2 text-sm font-semibold md:text-base">
                  真实资金配置
                </h3>
                <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                  通过考核后获得真实资金管理权限，在实战环境中放大你的优势。
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-6 text-left text-slate-50 shadow-[0_0_26px_rgba(15,23,42,0.85)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/80 hover:shadow-[0_0_40px_rgba(56,189,248,0.85)] hover:bg-slate-900/80">
              <div className="pointer-events-none absolute inset-px rounded-2xl border border-cyan-400/10" />
              <div className="relative">
                <h3 className="mb-2 text-sm font-semibold md:text-base">
                  专业导师指导
                </h3>
                <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                  经验丰富的交易员一对一指导，帮你纠正误区、加速成长。
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row: training system */}
          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/25 bg-slate-950/70 p-6 text-left text-slate-50 shadow-[0_0_32px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/80 hover:shadow-[0_0_48px_rgba(56,189,248,0.9)] hover:bg-slate-900/80">
            <div className="pointer-events-none absolute inset-px rounded-2xl border border-cyan-400/10" />
            <div className="flex flex-col gap-5 md:flex-row md:items-start">
              <div className="mb-2 flex items-start gap-3 md:mb-0 md:w-1/3">
                <div className="relative">
                  <h3 className="mb-1 text-base font-semibold md:text-lg">
                    系统化培训体系
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                    从基础理论到实战操作，完整的培训路径覆盖技术分析、风险管理、交易心理等核心模块。
                  </p>
                </div>
              </div>

              <div className="grid flex-1 gap-3 border-t border-slate-800 pt-4 text-center text-xs text-slate-300 md:grid-cols-4 md:border-t-0 md:border-l md:pt-0 md:text-sm">
                <div className="flex flex-col items-center justify-center rounded-xl bg-slate-950/70 px-3 py-3 ring-1 ring-slate-800/80">
                  <div className="text-lg font-extrabold text-cyan-300">
                    30+
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    课程模块
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl bg-slate-950/70 px-3 py-3 ring-1 ring-slate-800/80">
                  <div className="text-lg font-extrabold text-cyan-300">
                    1:1
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    导师辅导
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl bg-slate-950/70 px-3 py-3 ring-1 ring-slate-800/80">
                  <div className="text-lg font-extrabold text-cyan-300">
                    24/7
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    社群支持
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl bg-slate-950/70 px-3 py-3 ring-1 ring-slate-800/80">
                  <div className="text-lg font-extrabold text-cyan-300">
                    100%
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    实战导向
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: Training path */}
      <section className="section relative">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.55)_1px,transparent_1px)] bg-[length:90px_90px]" />
        </div>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-[0.35em] text-slate-50 drop-shadow-[0_0_32px_rgba(56,189,248,0.6)] md:text-4xl">
            培训路径
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500" />
        </div>
        <div className="grid gap-8 md:grid-cols-5">
          {[
            "基础理论学习",
            "模拟交易实践",
            "盈利考核",
            "小额实盘",
            "获得资金配置",
          ].map((title, index) => {
            const dayLabel =
              index === 0
                ? "第1-10天"
                : index === 1
                ? "第11-20天"
                : index === 2
                ? "第21-30天"
                : index === 3
                ? "第31-60天"
                : "通过后";

            const isStageFive = index === 4;

            return (
              <div
                key={title}
                className={`card min-h-[190px] px-6 py-8 transition-all duration-300 ${
                  isStageFive
                    ? "!border-rose-400/90 !shadow-[0_0_40px_rgba(244,114,182,0.95)] !bg-slate-900/80"
                    : "hover:-translate-y-1 hover:border-cyan-300/80 hover:shadow-[0_0_40px_rgba(56,189,248,0.9)] hover:bg-slate-900/80"
                }`}
              >
                <div className="mb-1 text-[10px] text-slate-400">
                  阶段 {index + 1}
                </div>
                <div className="mb-1 text-xs text-sky-300">{dayLabel}</div>
                <div
                  className={`mb-2 text-sm font-semibold ${
                    isStageFive
                      ? "bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent"
                      : ""
                  }`}
                >
                  {title}
                </div>
                <p className="text-xs text-slate-400">
                  {index === 1
                    ? "在模拟账户中应用所学知识，培养交易纪律和策略执行能力"
                    : index === 2
                    ? "在模拟账户中证明盈利能力，达到10%盈利目标，验证交易系统有效性"
                    : index === 3
                    ? "使用小额真实资金交易，固化交易系统，适应真实市场心理压力"
                    : index === 4
                    ? "成功通过考核，获得真实资金管理权限，开始职业交易生涯"
                    : "学习外汇市场基础知识、技术分析、风险管理等核心概念"}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Part 4: Requirements */}
      <section className="section">
        <div className="mb-[82px] text-center">
          <h2 className="text-3xl font-extrabold tracking-[0.35em] text-slate-50 md:text-4xl">
            申请要求
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left: not suitable */}
          <div className="relative overflow-hidden rounded-3xl border border-rose-900/70 bg-black/70 px-8 py-8 text-left text-slate-100 shadow-[0_0_34px_rgba(127,29,29,0.6)]">
            <div className="mb-6 inline-flex items-center justify-center rounded-md border border-rose-500/60 bg-black/60 px-3 py-2 text-rose-400">
              <span className="text-sm">!</span>
            </div>
            <h3 className="mb-4 text-xl font-extrabold text-rose-400 md:text-2xl">
              不适合的人群
            </h3>
            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="mt-[2px] text-xs text-rose-500">×</span>
                <span>寻求快速暴富的人</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[2px] text-xs text-rose-500">×</span>
                <span>缺乏纪律性和执行力</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[2px] text-xs text-rose-500">×</span>
                <span>无法承受压力和挫折</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[2px] text-xs text-rose-500">×</span>
                <span>没有时间投入学习</span>
              </li>
            </ul>
          </div>

          {/* Right: ideal candidates */}
          <div className="relative overflow-hidden rounded-3xl border border-emerald-900/70 bg-black/70 px-8 py-8 text-left text-slate-100 shadow-[0_0_34px_rgba(4,120,87,0.6)]">
            <div className="mb-6 inline-flex items-center justify-center rounded-md border border-emerald-500/60 bg-black/60 px-3 py-2 text-emerald-400">
              <span className="text-sm">✓</span>
            </div>
            <h3 className="mb-4 text-xl font-extrabold text-emerald-400 md:text-2xl">
              理想候选人
            </h3>
            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="mt-[2px] text-xs text-emerald-400">✓</span>
                <span>愿意投入时间系统学习</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[2px] text-xs text-emerald-400">✓</span>
                <span>具备良好的自律能力</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[2px] text-xs text-emerald-400">✓</span>
                <span>能够承受压力和挫折</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[2px] text-xs text-emerald-400">✓</span>
                <span>追求长期稳定收益</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Basic conditions wrapper */}
        <div className="mt-10 rounded-3xl border border-slate-800/80 bg-slate-950/80 px-6 py-6 text-slate-50 shadow-[0_0_40px_rgba(15,23,42,0.9)] md:px-10 md:py-8">
          <h3 className="mb-4 text-base font-semibold text-amber-300 md:text-lg">
            我们希望你：
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-700/80 bg-black/60 px-5 py-4">
              <h4 className="mb-3 text-sm font-semibold text-amber-200 md:text-base">
                基本条件
              </h4>
              <ul className="space-y-2 text-xs text-slate-200 md:text-sm">
                <li>大专学历以上，35 岁以下</li>
                <li>认真、细心、耐心，心理健康</li>
                <li>连续 30 个工作日（约 45 天）可稳定使用 Windows 电脑</li>
                <li>拥有独立的交易环境</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-700/80 bg-black/60 px-5 py-4">
              <h4 className="mb-3 text-sm font-semibold text-amber-200 md:text-base">
                时间要求
              </h4>
              <ul className="space-y-2 text-xs text-slate-200 md:text-sm">
                <li>周一到周五，每天至少 13:30 – 21:30 在线</li>
                <li>北京时间 20:00 必须参加团队长会议室复盘</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Part 5: Video */}
      <section className="section">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-[0.35em] text-slate-50 md:text-4xl">
            必看视频
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500" />
        </div>
        <div className="card">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Video 1: 百万美金交易员 */}
            <div>
              <a
                href="https://www.bilibili.com/video/BV19a411X7eY/"
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80 transition-all duration-300 group-hover:border-sky-400 group-hover:shadow-[0_0_32px_rgba(56,189,248,0.8)]">
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center border border-slate-500 bg-black/60">
                      <span className="ml-0.5 text-xl text-slate-100">&#9658;</span>
                    </div>
                  </div>
                </div>
              </a>
              <p className="mt-2 text-xs text-slate-300">
                视频 1 · 纪录片《百万美金交易员》——真实交易团队的考核与训练过程。
              </p>
            </div>

            {/* Video 2: 交易员：瞬息百万 */}
            <div>
              <a
                href="https://www.bilibili.com/video/BV1FZ4y1o734/"
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80 transition-all duration-300 group-hover:border-sky-400 group-hover:shadow-[0_0_32px_rgba(56,189,248,0.8)]">
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center border border-slate-500 bg-black/60">
                      <span className="ml-0.5 text-xl text-slate-100">&#9658;</span>
                    </div>
                  </div>
                </div>
              </a>
              <p className="mt-2 text-xs text-slate-300">
                视频 2 · 纪录片《交易员：瞬息百万》——展示极端行情下交易员的决策与心态。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 6: Booking & assessment */}
      <section className="section">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-extrabold tracking-[0.35em] bg-gradient-to-r from-slate-200 via-slate-400 to-slate-500 bg-clip-text text-transparent md:text-5xl">
            准备好接受挑战了吗？
          </h2>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center gap-[60px]">
          <p className="text-xs text-slate-400">
            提示：每人仅有一次机会
          </p>
          <a
            href="#ready-modal-top"
            className="btn-primary px-10 py-4 text-xl md:text-2xl"
          >
            我准备好了，立即开始！
          </a>

        </div>

        <div
          id="ready-modal-top"
          className="fixed inset-0 z-50 hidden items-center justify-center bg-black/70 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-sky-500/60 bg-slate-950/95 text-slate-50 shadow-[0_0_40px_rgba(56,189,248,0.75)]">
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-slate-900 via-sky-900 to-slate-950 px-5 py-3">
              <h3 className="text-base font-semibold tracking-wide">
                外汇交易员面试
              </h3>
              <a
                href="#courses-top"
                className="text-xl leading-none text-white/80 hover:text-white"
                aria-label="关闭"
              >
                ×
              </a>
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
                <a
                  href="#courses-top"
                  className="inline-flex flex-1 items-center justify-center rounded border border-slate-600 bg-slate-900/80 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
                >
                  关闭
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
