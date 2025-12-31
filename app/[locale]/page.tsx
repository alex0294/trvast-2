import Link from "next/link";

type ColumnCell = {
  main: string;
  sub?: string;
  icon?: "check" | "x";
};

type ComparisonRow = {
  label: string;
  haohan: ColumnCell;
  others: ColumnCell[];
};

type Testimonial = {
  id: string;
  name: string;
  role: string;
  date: string;
  text: string;
  initial: string;
  badgeGradient: string;
};

type Partner = {
  id: string;
  name: string;
  short: string;
  gradient: string;
};

type CareerStep = {
  id: number;
  title: string;
  description: string;
  badgeGradient: string;
};


const comparisonRows: ComparisonRow[] = [
  {
    label: "培训费用",
    haohan: { main: "完全免费", icon: "check" },
    others: [
      { main: "考核费" },
      { main: "高额学费" },
      { main: "购买费" },
      { main: "加盟费" },
    ],
  },
  {
    label: "培养模式",
    haohan: { main: "小团队孵化", icon: "check" },
    others: [
      { main: "无培训" },
      { main: "大班课" },
      { main: "无指导" },
      { main: "师徒制" },
    ],
  },
  {
    label: "社群支持",
    haohan: { main: "24/7", icon: "check" },
    others: [
      { main: "论坛" },
      { main: "有限时段" },
      { main: "N/A" },
      { main: "小群组" },
    ],
  },
  {
    label: "利润分成",
    haohan: { main: "60-90%", icon: "check" },
    others: [
      { main: "60-90%", icon: "check" },
      { main: "N/A" },
      { main: "N/A" },
      { main: "按协议" },
    ],
  },
  {
    label: "资金规模",
    haohan: { main: "$100K-$2M", icon: "check" },
    others: [
      { main: "$10K-$200K", icon: "check" },
      { main: "N/A", icon: "x" },
      { main: "N/A", icon: "x" },
      { main: "看情况" },
    ],
  },
  {
    label: "培养周期",
    haohan: { main: "30-60天", sub: "5阶段", icon: "check" },
    others: [
      { main: "1-3月" },
      { main: "6-12月" },
      { main: "N/A" },
      { main: "不确定" },
    ],
  },
  {
    label: "考核标准",
    haohan: { main: "稳定盈利", icon: "check" },
    others: [
      { main: "严格规则" },
      { main: "模糊" },
      { main: "N/A" },
      { main: "自定义" },
    ],
  },
  {
    label: "实盘经验",
    haohan: { main: "100%实战", icon: "check" },
    others: [
      { main: "视情况", icon: "check" },
      { main: "理论多" },
      { main: "N/A", icon: "x" },
      { main: "看水平" },
    ],
  },
  {
    label: "收入潜力",
    haohan: { main: "无上限", icon: "check" },
    others: [
      { main: "有上限" },
      { main: "有限" },
      { main: "靠运气" },
      { main: "不稳定" },
    ],
  },
];



const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "L同学",
    role: "全职交易员",
    date: "2024-06",
    text: "很严格，但也正因为这样，通过的人都真正有实力。回头看那 45 天的训练，是非常值得的决定。",
    initial: "L",
    badgeGradient: "from-emerald-400 via-cyan-400 to-sky-500",
  },
  {
    id: "t2",
    name: "Y同学",
    role: "职场交易员",
    date: "2024-05",
    text: "从传统金融行业转型过来，在浩瀚这里学到的是一整套系统，而不是零散技巧。考核、复盘和心理辅导都非常体系化。",
    initial: "Y",
    badgeGradient: "from-rose-500 via-fuchsia-500 to-violet-500",
  },
  {
    id: "t3",
    name: "Z同学",
    role: "独立交易员",
    date: "2024-04",
    text: "从新手到稳定盈利，每一次亏损都有详细复盘和风控评估，策略越打越扎实，账户曲线也越来越平滑、向上。",
    initial: "Z",
    badgeGradient: "from-amber-400 via-orange-400 to-rose-500",
  },
  {
    id: "t4",
    name: "C同学",
    role: "在校大学生",
    date: "2024-03",
    text: "还没开始大资金操作之前，就先学会了控制回撤和执行纪律。后面几个月的模拟和实盘，心态稳了很多。",
    initial: "C",
    badgeGradient: "from-sky-400 via-cyan-300 to-emerald-400",
  },
  {
    id: "t5",
    name: "W同学",
    role: "副业交易者",
    date: "2024-02",
    text: "做过多年股票投资，在这里系统补上了风控和交易计划这块短板，现在每一笔交易都有数据可以复盘和量化。",
    initial: "W",
    badgeGradient: "from-fuchsia-400 via-rose-400 to-amber-300",
  },
];

const testimonialImages: Record<string, string> = {
  t1: "/pnl/pnl-1.jpg",
  t2: "/pnl/pnl-2.jpg",
  t3: "/pnl/pnl-3.jpg",
  t4: "/pnl/pnl-6.jpg",
  t5: "/pnl/pnl-7.jpg",
};


const partners: Partner[] = [
  {
    id: "p1",
    name: "IC Markets",
    short: "IC",
    gradient: "from-rose-500 via-red-500 to-orange-400",
  },
  {
    id: "p2",
    name: "TradingView",
    short: "TV",
    gradient: "from-sky-400 via-cyan-400 to-emerald-400",
  },
  {
    id: "p3",
    name: "Binance",
    short: "BN",
    gradient: "from-amber-300 via-yellow-400 to-orange-400",
  },
  {
    id: "p4",
    name: "MetaTrader 4",
    short: "MT4",
    gradient: "from-emerald-400 via-cyan-400 to-sky-500",
  },
  {
    id: "p5",
    name: "MetaTrader 5",
    short: "MT5",
    gradient: "from-sky-500 via-indigo-500 to-fuchsia-500",
  },
  {
    id: "p6",
    name: "MetaApi",
    short: "MA",
    gradient: "from-rose-400 via-red-400 to-amber-400",
  },
  {
    id: "p7",
    name: "cTrader",
    short: "CT",
    gradient: "from-emerald-300 via-teal-400 to-sky-500",
  },
  {
    id: "p8",
    name: "Bybit",
    short: "BB",
    gradient: "from-amber-400 via-orange-400 to-rose-500",
  },
  {
    id: "p9",
    name: "OKX",
    short: "OKX",
    gradient: "from-slate-500 via-slate-300 to-slate-100",
  },
  {
    id: "p10",
    name: "Interactive Brokers",
    short: "IB",
    gradient: "from-red-500 via-rose-500 to-slate-800",
  },
];

const careerSteps: CareerStep[] = [
  {
    id: 1,
    title: "规则学习（3 天）",
    description: "姿势标准化，军事化管理，基础规则掌握。",
    badgeGradient: "from-emerald-400 via-cyan-400 to-sky-500",
  },
  {
    id: 2,
    title: "盈利练习（15 天）",
    description: "心态稳定训练，灵动性强化，领悟力提升。",
    badgeGradient: "from-sky-500 via-indigo-400 to-fuchsia-500",
  },
  {
    id: 3,
    title: "盈利考核（10 天）",
    description: "不漏单，不错单，不亏损，严格考核。",
    badgeGradient: "from-fuchsia-500 via-purple-500 to-violet-500",
  },
  {
    id: 4,
    title: "小额实盘（20 天）",
    description: "日回撤 ≤ 5%，总回撤 ≤ 10%，系统固化。",
    badgeGradient: "from-amber-400 via-orange-400 to-rose-500",
  },
  {
    id: 5,
    title: "大额矩阵（生涯开启）",
    description: "无限扩展 · 资金 $2M+ · 分成 60% - 90%。",
    badgeGradient: "from-emerald-300 via-sky-400 to-indigo-500",
  },
  {
    id: 6,
    title: "5 分钟级别（3 个月）",
    description: "单向交易，级别升级。",
    badgeGradient: "from-sky-400 via-fuchsia-500 to-rose-500",
  },
  {
    id: 7,
    title: "15 分钟级别（6 个月）",
    description: "多空双向交易。",
    badgeGradient: "from-purple-400 via-indigo-400 to-cyan-400",
  },
  {
    id: 8,
    title: "1 小时级别（1 年）",
    description: "多空双向交易，技术大成。",
    badgeGradient: "from-amber-300 via-rose-400 to-fuchsia-500",
  },
  {
    id: 9,
    title: "4H / 日级别（2 年）",
    description: "顶级交易员，财富自由。",
    badgeGradient: "from-emerald-400 via-cyan-400 to-amber-300",
  },
];

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <div className="space-y-16">
      {/* Part 1: Hero */}
      <section className="section relative -mx-4 md:-mx-8 flex min-h-[620px] md:min-h-[82vh] items-center justify-center overflow-hidden rounded-3xl border border-sky-500/30 bg-slate-950/80 px-6 md:px-10 py-20 md:py-24 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur-2xl">

        {/* Background orbits and grid */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.25),transparent_60%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(15,23,42,1),transparent)]" />
          <div className="absolute inset-0 bg-[conic-gradient(from_220deg_at_15%_40%,rgba(56,189,248,0.3),transparent_45%,rgba(79,70,229,0.35),transparent_80%)] mix-blend-screen" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(15,118,110,0.4),transparent_55%),radial-gradient(circle_at_right,_rgba(37,99,235,0.3),transparent_55%)] opacity-70" />
          {/* subtle tech grid */}
          <div className="absolute inset-[7px] rounded-[32px] border border-sky-500/10 bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.7)_1px,transparent_1px)] bg-[length:80px_80px]" />
          {/* rotating orbit ring */}
          <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-cyan-400/30 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),transparent_60%)] blur-[1px]" />
          <div className="absolute -right-52 top-10 h-[420px] w-[420px] rounded-full border border-fuchsia-400/20 bg-[conic-gradient(from_140deg,rgba(56,189,248,0.3),transparent,rgba(168,85,247,0.25),transparent)] opacity-70" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center">
          <div className="relative max-w-3xl space-y-6 text-left -mt-[60px] lg:-mt-[80px] lg:ml-[-40px]">

          <div className="inline-flex items-center rounded-sm border border-primary-500/70 bg-primary-500/10 px-4 py-1 text-xs font-semibold tracking-[0.25em] text-primary-300">
            ELITE TRADER PROGRAM
          </div>

          <div className="space-y-3">
            <div className="relative inline-block">
              <span className="relative px-6 py-2 text-6xl font-extrabold leading-none tracking-[0.3em] text-slate-50 drop-shadow-[0_0_25px_rgba(15,23,42,0.9)] md:text-7xl">
                <span className="bg-gradient-to-br from-slate-50 via-cyan-100 to-slate-300 bg-clip-text text-transparent">
                  浩 瀚
                </span>
              </span>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-500 via-cyan-400 to-accent-500 md:w-40" />
          </div>

          <div className="flex items-center gap-3 text-lg font-semibold text-slate-100 md:text-xl">
            <span className="text-primary-400">•</span>
            <span>精准 · 专业 · 高效</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-base md:text-lg mb-[80px]">
            <span className="rounded-full bg-primary-500 px-4 py-1 font-semibold text-slate-900 shadow-[0_0_25px_rgba(34,211,238,0.6)]">
              免费培养
            </span>
            <span className="text-base font-medium text-slate-200">
              真正的外汇专家
            </span>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-xs md:mt-12 md:flex-row md:gap-6 md:text-sm">
            <Link
              href={`/${locale}/courses`}
              className="btn-primary min-w-[200px] px-7 py-3 text-lg md:min-w-[220px] md:text-xl"
            >
              了解外汇培训
            </Link>

            <Link
              href={`/${locale}/assessment`}
              className="btn-outline min-w-[200px] !text-lg px-8 py-3 md:min-w-[220px]"
            >
              立即进行心理测评
            </Link>
          </div>

          </div>
        </div>
      </section>

      {/* Part 2: Comparison table */}
      {/* Part 2: Comparison table */}
        <section className="section -mt-4">
          <h2 className="mb-6 text-center text-lg font-black uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-400 to-fuchsia-400 drop-shadow-[0_0_45px_rgba(59,130,246,0.9)] md:text-2xl">
            浩瀚 vs 市场上的其他选择 · 一目了然的优势对比
          </h2>

          <div className="card overflow-hidden border border-slate-800/80 bg-gradient-to-b from-black/80 to-slate-950/80 p-0">
            {/* Mobile: cards (no horizontal scroll) */}
            <div className="md:hidden">
              <div className="space-y-4 p-4">
                {comparisonRows.map((row) => (
                  <div
                    key={row.label}
                    className="rounded-2xl border border-slate-800/80 bg-black/40 p-4 shadow-[0_0_24px_rgba(0,0,0,0.4)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm font-semibold text-slate-100">
                        {row.label}
                      </div>
                      <div className="text-[10px] font-semibold tracking-[0.28em] text-slate-500">
                        对比
                      </div>
                    </div>

                    <div className="mt-3 rounded-2xl border border-primary-500/60 bg-gradient-to-br from-primary-500/20 via-black/40 to-black/60 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-[11px] font-semibold tracking-[0.2em] text-primary-300">
                          浩瀚 · 免费培养
                        </div>
                        {row.haohan.icon === "check" ? (
                          <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                            ✔ 优势
                          </span>
                        ) : row.haohan.icon === "x" ? (
                          <span className="rounded-full bg-rose-500/15 px-2 py-1 text-[10px] font-semibold text-rose-300">
                            ✖ 无
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-2 text-lg font-extrabold text-primary-200">
                        {row.haohan.main}
                      </div>
                      {row.haohan.sub ? (
                        <div className="mt-1 text-xs text-primary-200/80">
                          {row.haohan.sub}
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      {row.others.map((cell, idx) => {
                        const otherLabels = ["自营机构", "传统机构", "线上课程", "个人自学"] as const;
                        return (
                          <div
                            key={`${row.label}-${idx}`}
                            className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-3"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="text-[11px] font-semibold text-slate-200">
                                {otherLabels[idx] ?? `对比项 ${idx + 1}`}
                              </div>
                              {cell.icon === "check" ? (
                                <span className="text-[10px] font-semibold text-emerald-400">
                                  ✔
                                </span>
                              ) : cell.icon === "x" ? (
                                <span className="text-[10px] font-semibold text-rose-500">
                                  ✖
                                </span>
                              ) : null}
                            </div>

                            <div className="mt-1 text-sm font-semibold text-slate-100">
                              {cell.main}
                            </div>
                            {cell.sub ? (
                              <div className="mt-0.5 text-[11px] text-slate-400">
                                {cell.sub}
                              </div>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: keep original table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="min-w-full border-collapse text-[11px] md:text-xs">
                <thead>
                  <tr className="bg-black/90 text-slate-300">
                    <th className="w-28 border-r border-slate-800 px-4 py-3 text-left text-slate-400">
                      对比项目
                    </th>
                    <th className="border-x border-primary-500 bg-gradient-to-b from-primary-500/20 to-black px-4 py-3 text-center">
                      <div className="inline-flex flex-col items-center gap-1">
                        <span className="text-[11px] font-semibold tracking-[0.2em] text-primary-300">
                          浩瀚
                        </span>
                        <span className="text-[10px] text-primary-200">免费培养</span>
                      </div>
                    </th>
                    <th className="px-4 py-3 text-center text-slate-300">自营机构</th>
                    <th className="px-4 py-3 text-center text-slate-300">传统机构</th>
                    <th className="px-4 py-3 text-center text-slate-300">线上课程</th>
                    <th className="px-4 py-3 text-center text-slate-300">个人自学</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, rowIndex) => (
                    <tr
                      key={row.label}
                      className={rowIndex % 2 === 0 ? "bg-black/40" : "bg-slate-950/40"}
                    >
                      <td className="whitespace-nowrap border-r border-slate-800 px-4 py-3 text-left text-slate-200">
                        {row.label}
                      </td>
                      <td className="border-x border-primary-500 bg-black/40 px-4 py-3 text-center">
                        <div className="font-semibold text-primary-300">
                          {row.haohan.main}
                        </div>
                        {row.haohan.sub ? (
                          <div className="mt-1 text-[10px] text-primary-200">
                            {row.haohan.sub}
                          </div>
                        ) : null}
                      </td>
                      {row.others.map((cell, idx) => (
                        <td
                          key={idx}
                          className="px-4 py-3 text-center text-[11px] text-slate-300"
                        >
                          <div className="inline-flex flex-col items-center gap-0.5">
                            <span>{cell.main}</span>
                            {cell.sub ? (
                              <span className="text-[10px] text-slate-500">
                                {cell.sub}
                              </span>
                            ) : null}
                            {cell.icon === "check" && (
                              <span className="text-[10px] text-emerald-400">✔</span>
                            )}
                            {cell.icon === "x" && (
                              <span className="text-[10px] text-rose-500">✖</span>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>


      {/* Part 1.5: Career roadmap */}
      <section className="section section-roadmap">
        <div className="relative mb-6 flex items-center justify-center">
          <div className="relative inline-flex items-center gap-3 rounded-full border border-cyan-400/40 bg-slate-900/60 px-6 py-2 shadow-[0_0_40px_rgba(34,211,238,0.45)]">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />
            <h2 className="bg-gradient-to-r from-cyan-300 via-sky-100 to-emerald-300 bg-clip-text text-xl font-extrabold tracking-[0.35em] text-transparent md:text-2xl">
              职业晋升之路
            </h2>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-6 shadow-[0_0_40px_rgba(15,23,42,0.7)]">
            <div className="relative space-y-4 text-base text-slate-200">
              {careerSteps.map((step) => {
                const isKeyStep = step.id === 5;
                const hasParen = !isKeyStep && step.title.includes("（");
                const parenIndex = hasParen ? step.title.indexOf("（") : -1;
                const mainTitle =
                  hasParen && parenIndex > -1
                    ? step.title.slice(0, parenIndex)
                    : step.title;
                const parenTitle =
                  hasParen && parenIndex > -1
                    ? step.title.slice(parenIndex)
                    : "";

                return (
                  <div
                    key={step.id}
                    className={`flex items-start gap-6 rounded-2xl border px-6 py-4 md:px-10 ${
                      isKeyStep
                        ? "border-rose-500/80 bg-black/60 shadow-[0_0_30px_rgba(248,113,113,0.45)]"
                        : "border-slate-800/80 bg-black/40"
                    }`}
                  >
                    <div className="flex w-32 shrink-0 items-center gap-4 text-left">
                      <div className="text-4xl font-extrabold text-slate-800/70">
                        {String(step.id).padStart(2, "0")}
                      </div>
                      <div className="space-y-0.5 text-[11px] leading-snug">
                        <div className="text-slate-500">阶段</div>
                        <div className="font-semibold text-rose-500">
                          第 {step.id} 阶段
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="text-sm font-semibold md:text-base">
                        {isKeyStep ? (
                          step.title
                        ) : (
                          <>
                            <span>{mainTitle}</span>
                            {parenTitle && (
                              <span className="ml-1 text-xs text-slate-500 align-baseline">
                                {parenTitle}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                      <p className="text-xs leading-relaxed text-slate-400 md:text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      </section>

      {/* Part 3: Quick links (hidden on design,保留结构) */}
      <section className="section grid gap-6 md:grid-cols-3 hidden">
        <div className="card space-y-2 text-sm text-slate-200">
          <h2 className="section-title mb-1 !text-xl">系统化培训</h2>
          <p className="text-xs text-slate-400">
            30 天集中训练营，从交易基础、策略搭建到模拟盘与实盘考核，配套资金账户与风控机制。
          </p>
          <Link
            href={`/${locale}/courses`}
            className="text-xs text-primary-300 underline-offset-2 hover:underline"
          >
            了解课程详情
          </Link>
        </div>
        <div className="card space-y-2 text-sm text-slate-200">
          <h2 className="section-title mb-1 !text-xl">心理测评与复盘</h2>
          <p className="text-xs text-slate-400">
            通过线上测评与日常复盘，评估情绪稳定性、风险承受能力与执行力，为资金配置提供依据。
          </p>
          <Link
            href={`/${locale}/assessment`}
            className="text-xs text-primary-300 underline-offset-2 hover:underline"
          >
            去做一个测评
          </Link>
        </div>
        <div className="card space-y-2 text-sm text-slate-200">
          <h2 className="section-title mb-1 !text-xl">资金账户与交易记录</h2>
          <p className="text-xs text-slate-400">
            示例展示资金账户与最近交易记录，实际项目中可以接入真实资管或券商接口。
          </p>
          <Link
            href={`/${locale}/system`}
            className="text-xs text-primary-300 underline-offset-2 hover:underline"
          >
            查看系统中枢
          </Link>
        </div>
      </section>

      {/* Part 4: Testimonials & PnL showcase */}
      <section className="section section-testimonials">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-extrabold tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-400 to-amber-300 md:text-3xl">
            学员感言 &amp; 收益展示
          </h2>
          <p className="text-xs text-slate-400 md:text-sm">
            来自真实学员的反馈与实盘收益截图（示意）
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-black/80 via-slate-950/90 to-black/90 px-4 py-8 shadow-[0_0_40px_rgba(15,23,42,0.8)]">
          <div className="relative overflow-hidden">
            <div className="flex w-max gap-6 testimonial-scroll">
              {[...testimonials, ...testimonials].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex w-72 flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/90 shadow-lg md:w-80"
                >
                  <div className="flex h-40 items-center justify-center border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black">
                    <div className="relative h-[85%] w-[92%] overflow-hidden rounded-md border border-slate-700 bg-slate-950">
                      {testimonialImages[item.id] ? (
                        <img
                          src={testimonialImages[item.id]}
                          alt={`${item.name} 收益截图`}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.45),transparent_60%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.35),transparent_60%)]" />
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between bg-gradient-to-b from-black/90 via-slate-950/95 to-black/95 px-5 py-4">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br ${item.badgeGradient} text-xs font-bold text-slate-950`}
                        >
                          {item.initial}
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-xs font-semibold text-slate-50">
                            {item.name}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {item.role}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-2 text-[10px] text-amber-400">
                      ★ ★ ★ ★ ★
                    </div>

                    <p className="line-clamp-4 text-xs leading-relaxed text-slate-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Part 5: Official partners */}
      {/* <section className="section section-partners">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-extrabold tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-400 to-amber-300 md:text-3xl">
            官方合作伙伴
          </h2>
          <p className="text-xs text-slate-400 md:text-sm">
            与全球领先的金融机构和平台建立战略合作伙伴关系
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border-y border-rose-900/60 bg-gradient-to-b from-black/90 via-slate-950 to-black/90 px-6 py-10 shadow-[0_0_40px_rgba(127,29,29,0.5)]">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rose-500/60 to-transparent" />
          </div>

          <div className="relative overflow-hidden">
            <div className="flex w-max items-center gap-10 partner-scroll">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex h-24 w-48 flex-shrink-0 items-center justify-center rounded-2xl border border-slate-800/90 bg-gradient-to-br from-slate-900 via-slate-950 to-black px-4 shadow-lg md:h-28 md:w-56"
                >
                  <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-950/60">
                    <div className="flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-slate-900/90 px-4">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br ${partner.gradient} text-xs font-extrabold text-slate-950`}
                      >
                        {partner.short}
                      </div>
                      <div className="text-sm font-semibold tracking-wide text-slate-100">
                        {partner.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}















