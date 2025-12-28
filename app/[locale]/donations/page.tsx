import Link from "next/link";
import DailyIncreaseCountdown from "@/components/donations/DailyIncreaseCountdown";
import { getDonationSuggestedAmount } from "@/lib/donations/suggestedAmount";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function DonationsPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const { amount, baseAmount, dailyIncrease, nextTickAt, source } =
    await getDonationSuggestedAmount();

  return (
    <div className="space-y-16">
      {/* Part 1: Membership hero */}
      <section className="section relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-14 shadow-xl">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),transparent_55%)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,rgba(15,23,42,0.95),transparent)]" />
        </div>

        <div className="relative mx-auto max-w-4xl space-y-8 text-center">
          <div className="inline-flex items-center justify-center rounded-full border border-primary-500/80 bg-black/70 px-6 py-1 text-[11px] font-semibold tracking-[0.35em] text-primary-300">
            浩瀚训练营 · 捐赠会员
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-extrabold tracking-[0.3em] text-slate-50 md:text-5xl">
              会员招募
            </h1>
            <p className="text-sm font-semibold text-primary-300 md:text-base">
              认可浩瀚交易，愿意捐赠支持
            </p>
          </div>

          <p className="mx-auto max-w-2xl text-xs text-slate-300 md:text-sm">
            我们提供完全免费的专业培训服务，您的捐赠将帮助我们持续为更多人提供高质量的培训。
          </p>

          <div className="mx-auto mt-6 grid max-w-3xl gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-700 bg-black/60 px-6 py-5 text-center text-slate-50">
              <div className="text-2xl font-extrabold text-primary-300">90 天</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-slate-400">
                更长保障期
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-700 bg-black/60 px-6 py-5 text-center text-slate-50">
              <div className="text-2xl font-extrabold text-primary-300">解锁技术库</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-slate-400">
                更多权益
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-700 bg-black/60 px-6 py-5 text-center text-slate-50">
              <div className="text-2xl font-extrabold text-primary-300">不限年龄/学历</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-slate-400">
                更少限制
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Free services & donation usage */}
      <section className="section">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-[0.25em] text-slate-50 md:text-4xl">
            我们提供的服务
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)]">
          {/* Left: training course */}
          <div className="relative overflow-hidden rounded-2xl border border-sky-500/30 bg-slate-950/80 p-6 text-left text-slate-50 shadow-[0_0_30px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/80 hover:shadow-[0_0_45px_rgba(56,189,248,0.9)] hover:bg-slate-900/90">
            <div className="pointer-events-none absolute inset-px rounded-2xl border border-sky-400/15" />
            <div className="relative space-y-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-sky-300">
                01 // 免费服务
              </div>
              <h3 className="text-2xl font-extrabold md:text-3xl">系统化培训课程</h3>
              <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                30 天完整训练体系，从基础到实战，全部免费提供，无需支付任何学费。
              </p>
              <button className="mt-4 inline-flex items-center text-xs font-semibold text-sky-300">
                完整培训权限
                <span className="ml-1">→</span>
              </button>
            </div>
          </div>

          {/* Right: mentor support */}
          <div className="relative overflow-hidden rounded-2xl border border-sky-500/25 bg-slate-950/80 p-6 text-left text-slate-50 shadow-[0_0_30px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/80 hover:shadow-[0_0_45px_rgba(56,189,248,0.9)] hover:bg-slate-900/90">
            <div className="pointer-events-none absolute inset-px rounded-2xl border border-sky-400/10" />
            <div className="relative space-y-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-sky-300">
                02 // 导师支持
              </div>
              <h3 className="text-xl font-extrabold md:text-2xl">专业导师指导</h3>
              <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                一对一导师指导，全程陪伴训练，帮你建立交易系统、复盘流程和风险意识，所有支持完全免费。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row: real capital + donation usage */}
        <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <div className="relative overflow-hidden rounded-2xl border border-sky-500/25 bg-slate-950/80 p-6 text-left text-slate-50 shadow-[0_0_30px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/80 hover:shadow-[0_0_45px_rgba(56,189,248,0.9)] hover:bg-slate-900/90">
            <div className="pointer-events-none absolute inset-px rounded-2xl border border-sky-400/10" />
            <div className="relative space-y-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-sky-300">
                03 // 社区贡献
              </div>
              <h3 className="text-xl font-extrabold md:text-2xl">真实资金配置</h3>
              <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                通过考核后有机会获得真实资金账户配置，在专业风控下开启职业交易生涯，无需自投本金。
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-sky-500/25 bg-gradient-to-br from-sky-500 via-cyan-400 to-violet-500 p-6 text-left text-slate-50 shadow-[0_0_34px_rgba(56,189,248,0.8)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_48px_rgba(56,189,248,1)]">
            <div className="pointer-events-none absolute inset-px rounded-2xl border border-sky-100/20" />
            <div className="relative space-y-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-900/80">
                帮助更多人
              </div>
              <h3 className="text-xl font-extrabold md:text-2xl">您的捐赠用途</h3>
              <p className="text-xs leading-relaxed text-slate-950/90 md:text-sm">
                每一笔捐赠都会投入到团队建设、奖学金、心理辅导与训练设施中，帮助更多适合交易的人获得完全免费的系统化培训。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: Donation amount panel */}
      <section
        className="section"
        style={{ marginTop: "-20px" }}
      >
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-sky-500/40 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950/90 px-6 py-10 shadow-[0_0_40px_rgba(15,23,42,0.85)]">
          <div className="space-y-8 text-center">
            <div className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-black/60 px-4 py-1 text-[11px] font-semibold tracking-[0.25em] text-slate-300">
              建议捐赠金额
            </div>

            <div className="space-y-3">
              <div className="text-4xl font-extrabold text-primary-300 md:text-5xl">
                ${amount.toLocaleString()}
              </div>
              {source !== "supabase" && (
                <div className="text-[11px] text-amber-300/90">
                  当前为本地计算（未读取 Supabase 配置）
                </div>
              )}
              <div className="flex items-center justify-center gap-3 text-xs md:text-sm">
                <button className="inline-flex min-w-[80px] items-center justify-center rounded-full border border-primary-400 bg-primary-500/20 px-4 py-1 text-xs font-semibold text-primary-200 shadow-[0_0_20px_rgba(56,189,248,0.6)]">
                  USDT
                </button>
                <span className="text-slate-400">/</span>
                <button className="inline-flex min-w-[80px] items-center justify-center rounded-full border border-slate-600 bg-black/40 px-4 py-1 text-xs font-semibold text-slate-200">
                  USDC
                </button>
              </div>
            </div>

            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/80 px-4 py-2 text-[11px] text-slate-300">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] bg-primary-500/80 text-[9px] text-slate-950">
                ✓
              </span>
              <span className="flex items-center gap-2">
                <span>金额每日自动增加 ${dailyIncrease}</span>
                <span className="text-slate-500">·</span>
                <DailyIncreaseCountdown
                  nextTickAt={nextTickAt}
                  dailyIncrease={dailyIncrease}
                />
              </span>
            </div>

            <div className="mt-8 grid gap-4 text-left text-slate-50 md:grid-cols-3">
              <div className="flex flex-col justify-center rounded-2xl border border-slate-700 bg-black/60 px-6 py-4 text-center">
                <div className="text-xs font-semibold text-primary-200">起始金额</div>
                <div className="mt-2 text-xl font-extrabold text-slate-50">
                  ${baseAmount.toLocaleString()}
                </div>
              </div>
              <div className="flex flex-col justify-center rounded-2xl border border-slate-700 bg-black/60 px-6 py-4 text-center">
                <div className="text-xs font-semibold text-primary-200">每日增长</div>
                <div className="mt-2 text-xl font-extrabold text-slate-50">
                  + ${dailyIncrease}
                </div>
              </div>
              <div className="flex flex-col justify-center rounded-2xl border border-slate-700 bg-black/60 px-6 py-4 text-center">
                <div className="text-xs font-semibold text-primary-200">支付方式</div>
                <div className="mt-2 text-xs font-semibold text-slate-100 md:text-sm">
                  仅限 USDT / USDC
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Part 4: Donation process */}
            {/* Part 4: Donation process */}
      <section
        className="section"
        style={{ marginTop: "-40px" }}
      >
        <div className="mx-auto max-w-5xl rounded-[40px] border border-slate-700/80 bg-gradient-to-b from-black via-slate-950 to-black px-6 py-12 shadow-[0_0_46px_rgba(15,23,42,0.95)]">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-extrabold tracking-[0.25em] text-slate-50 md:text-3xl">
              捐赠流程
            </h2>
            <p className="text-xs text-slate-300 md:text-sm">
              通过邮件联系我们获取捐赠地址
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl border border-slate-700 bg-black/80 px-5 py-4 shadow-[0_0_24px_rgba(15,23,42,0.9)]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-400/80 bg-slate-950 text-xs font-bold text-sky-300">
                1
              </div>
              <div className="space-y-1 text-left">
                <div className="text-sm font-semibold text-slate-50 md:text-base">
                  准备阶段
                </div>
                <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                  请您自行准备好所需的 USDT/USDC，我们不做任何指示。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-700 bg-black/80 px-5 py-4 shadow-[0_0_24px_rgba(15,23,42,0.9)]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-400/80 bg-slate-950 text-xs font-bold text-sky-300">
                2
              </div>
              <div className="space-y-1 text-left">
                <div className="text-sm font-semibold text-sky-300 md:text-base">
                  邮件联络
                </div>
                <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                  发送至{" "}
                  <span className="font-mono text-sky-200">
                    alex294@163.com
                  </span>
                  ，说明您的捐赠意向。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-700 bg-black/80 px-5 py-4 shadow-[0_0_24px_rgba(15,23,42,0.9)]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-400/80 bg-slate-950 text-xs font-bold text-sky-300">
                3
              </div>
              <div className="space-y-1 text-left">
                <div className="text-sm font-semibold text-slate-50 md:text-base">
                  获取钱包地址
                </div>
                <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                  我们将通过邮件回复您具体的 USDT/USDC 捐赠地址。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-700 bg-black/80 px-5 py-4 shadow-[0_0_24px_rgba(15,23,42,0.9)]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-400/80 bg-slate-950 text-xs font-bold text-sky-300">
                4
              </div>
              <div className="space-y-1 text-left">
                <div className="text-sm font-semibold text-sky-300 md:text-base">
                  完成捐赠开始培训
                </div>
                <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                  按照提供的地址完成捐赠后，即可开始 90 天试用会员培训。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
            <a
              href="#donation-modal"
              className="btn-primary min-w-[180px] px-8 py-3 text-sm md:text-base"
            >
              邮件联系
            </a>

            <a
              href="#ready-modal-top"
              className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-slate-200 px-10 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-slate-100/5"
            >
              立即免费参加
            </a>



          </div>
        </div>
      </section>

            <div id="donations-top" className="h-0" />

      <div
        id="donation-modal"
        className="fixed inset-0 z-50 hidden items-center justify-center bg-black/70 backdrop-blur-sm"
      >
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-sky-500/60 bg-slate-950/95 text-slate-50 shadow-[0_0_40px_rgba(56,189,248,0.75)]">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-slate-900 via-sky-900 to-slate-950 px-5 py-3">
            <h3 className="text-base font-semibold tracking-wide">
              捐赠会员邮件联系
            </h3>
            <a
              href="#donations-top"
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
                捐赠会员申请
              </h4>
              <p className="text-[13px] leading-relaxed text-slate-300">
                请发送邮件到以下地址，说明你的捐赠意向，我们会尽快回复你。
              </p>
            </div>

            <div className="space-y-1 rounded-md border border-slate-700 bg-slate-900/70 px-3 py-2">
              <div className="text-[11px] text-slate-400">邮箱地址</div>
              <div className="flex items-center justify-between gap-3">
                <span className="break-all text-sm text-slate-50">
                  alex294@163.com
                </span>
              </div>
            </div>

            <div className="space-y-1 rounded-md border border-slate-700 bg-slate-900/70 px-3 py-2">
              <div className="text-[11px] text-slate-400">建议邮件主题</div>
              <div className="text-sm text-slate-50">捐赠会员申请</div>
            </div>

            <div className="rounded-md bg-slate-900/70 px-3 py-3 text-[11px] leading-relaxed text-slate-300">
              <span className="font-semibold text-slate-100">提示：</span>
              可在邮件中简单介绍自己、当前情况，以及对浩瀚训练营的了解和捐赠意向。
            </div>

            <div className="flex flex-col gap-3 pt-2 text-sm md:flex-row">
              <a
                href="mailto:alex294@163.com?subject=捐赠会员申请"
                className="inline-flex flex-1 items-center justify-center rounded bg-slate-100 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
              >
                打开邮件客户端
              </a>
              <a
                href="#donations-top"
                className="inline-flex flex-1 items-center justify-center rounded border border-slate-600 bg-slate-900/80 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
              >
                关闭
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Part 5: Important notice */}
      <section
        className="section"
        style={{ marginTop: "-72px" }}
      >
        <div className="mx-auto max-w-5xl rounded-[40px] border border-slate-500/70 bg-black/90 px-8 py-10 shadow-[0_0_38px_rgba(15,23,42,0.9)] md:px-12 md:py-12">
          <h2 className="text-xl font-extrabold text-sky-300 md:text-2xl">
            重要说明
          </h2>

          <ul className="mt-6 space-y-3 text-xs leading-relaxed text-slate-200 md:text-sm">
            <li className="flex gap-2">
              <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-sky-300" />
              <span>
                基于个人意愿提供的私人支持，属于自愿无偿捐赠，无任何商业承诺和约束力。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-sky-300" />
              <span>
                试用会员期限为 90 天，在此期间通过考核即可获得正式权益。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-sky-300" />
              <span>参与条件：和团队长沟通，通过初步筛选。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-sky-300" />
              <span>最终解释权归浩瀚交易所有。</span>
            </li>
          </ul>
        </div>
      </section>


            {/* Part 5: Important notice */}
      {/* <section
        className="section"
        style={{ marginTop: "-72px" }}
      >
        <div className="mx-auto max-w-5xl rounded-[40px] border border-slate-500/70 bg-black/90 px-8 py-10 shadow-[0_0_38px_rgba(15,23,42,0.9)] md:px-12 md:py-12">
          <h2 className="text-xl font-extrabold text-yellow-300 md:text-2xl">
            重要说明
          </h2>

          <ul className="mt-6 space-y-3 text-xs leading-relaxed text-slate-200 md:text-sm">
            <li className="flex gap-2">
              <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-yellow-300" />
              <span>
                基于个人意愿提供的私人支持，属于自愿无偿捐赠，无任何商业承诺和约束力。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-yellow-300" />
              <span>
                试用会员期限为 90 天，在此期间通过考核即可获得正式权益。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-yellow-300" />
              <span>参与条件：和指导员沟通，通过初步筛选。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-yellow-300" />
              <span>最终解释权归大阳亮克宾所有。</span>
            </li>
          </ul>
        </div>
      </section> */}


    </div>
  );
}
