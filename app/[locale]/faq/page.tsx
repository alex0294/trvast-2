"use client";

import { useState, type ReactNode } from "react";

type FaqCategory =
  | "about-haohan"
  | "training"
  | "income"
  | "rules"
  | "others";

type FaqTabId = "all" | FaqCategory;

type FaqItem = {
  q: string;
  a: ReactNode;
  category: FaqCategory;
};

const FAQ_CATEGORY_TABS: { id: FaqTabId; label: string }[] = [
  { id: "all", label: "全部" },
  { id: "about-haohan", label: "关于浩瀚" },
  { id: "training", label: "关于培训" },
  { id: "income", label: "关于收入与分润" },
  { id: "rules", label: "交易铁律" },
  { id: "others", label: "其他问题" },
];

const FAQ_ITEMS: FaqItem[] = [
  // 关于浩瀚
  {
    q: "什么是浩瀚外汇交易培训？",
    a: "浩瀚是一个专注于筛选和培养职业外汇交易员的专业训练平台。我们用大约 30 个工作日，在真实交易节奏和严格规则下，判断一名新人是否具备做交易的潜力。通过考核的学员，有机会获得资金支持，走上职业交易道路。",
    category: "about-haohan",
  },
  {
    q: "为什么筛选如此严格？",
    a: "在交易世界里，并不是每个人都适合做高强度交易。我们的目标是只让真正适合的人进入这个行业，对个人负责，也对资金负责。严格的筛选机制，可以尽早识别不适配的候选人，避免他们在错误的道路上付出过多时间和金钱。",
    category: "about-haohan",
  },
  {
    q: "30 个工作日会学到什么？",
    a: "第 1–3 个工作日：完成规则学习，熟悉交易系统与基本纪律。\n第 3–20 个工作日：在模拟环境中找到自己的节奏，要求连续 10 个工作日不违章、不漏单、不写损失理由。\n第 20–40 个工作日：在更高强度的训练和评估中，固化执行力和风险控制，为后续实盘打下基础。",
    category: "about-haohan",
  },
  {
    q: "为什么只有一次机会？",
    a: "因为交易需要极高的自律和专注度，不适合反复“试试看”。一旦真正进入交易训练，就意味着团队要投入大量时间和精力陪伴你成长。我们希望每一位进入训练营的人都经过慎重考虑，并用尽全力去证明自己是否适合这条路。",
    category: "about-haohan",
  },
  {
    q: "通过考核的概率有多大？",
    a: "根据历史数据，通过最终考核的人大约占所有报名学员的 15%–18%。这并不意味着其他人失败，而是说明我们对风险、纪律和长期稳定性的要求远高于普通培训。越严格的筛选，对真正适合的少数人越公平。",
    category: "about-haohan",
  },

  // 关于培训
  {
    q: "培训是免费的吗？",
    a: "是的，培训本身不收取学费。但你需要付出的是真实的时间和精力。一旦被选中进入训练，就意味着要在接下来的 30 个工作日里全身心投入，像对待正式工作一样对待这段训练。",
    category: "training",
  },
  {
    q: "需要什么样的基础条件？",
    a: "学历：大专及以上，35 岁以下。\n个人素质：认真、细心、耐心，心理稳定，能承受一定压力。\n时间投入：连续 30 个工作日可以稳定参加训练。\n硬件环境：一台 Windows 电脑，安静且不被频繁打扰的交易环境。\n作息要求：周一到周五，每天至少 13:30–21:30 在线，晚 20:00 参加团队长会议室复盘。",
    category: "training",
  },
  
  {
    q: "通过考核后可以获得什么？",
    a: "通过考核后，你将有机会获得真实资金账户的配置，从小额实盘开始，随着稳定性和风控表现的提升，逐步增加资金规模。收益采用分成模式，分润比例：60%-90%+（随能力提升而提高），具体比例会根据资金池和综合表现确定，目标是在控制风险的前提下，让优秀的交易员获得与能力匹配的回报。",
    category: "training",
  },
  {
    q: "学习过程中可以提问吗？",
    a: (
      <>
        可以。每天北京时间20:00有团队长会议室复盘，可以直接开麦与团队长沟通。其他时间可以通过微信与团队长联系。但请注意：
        <strong className="font-semibold text-slate-50">
          学员之间不得加微信、电话等联系方式
        </strong>
        ，这是纪律红线。
      </>
    ),
    category: "training",
  },

  // 关于收入与分润
  {
    q: "我需要自己出资吗?",
    a: (
      <>
        完全不需要。学员全程不需要任何出资。我们提供所有的培训和实盘资金。唯一的可选付费项目是云端交易环境（用于保证交易环境的稳定性和公平性）。
      </>
    ),
    category: "income",
  },
  {
    q: "通过考核后的收入分配如何？",
    a: "60%-90%，具体比例取决于您的资金量和业绩表现。这是行业内极具竞争力的分成比例。",
    category: "income",
  },
  {
    q: "为什么不需要付学费？",
    a: "跟传统学科不同，不需要你付出数万美金的\"学费\"，毕竟这是一个钱生钱的行当。我们的模式是：我们培养你，你通过后我们分享你的战果。这是一种合作共赢的关系，而非雇佣关系。你是一个独立的创业者，独立的个体。",
    category: "income",
  },

  // 交易铁律
  {
    q: "什么是交易铁律？",
    a: "交易纪律就像法律法规，触碰一次就会被标上不信任的标签。一旦触碰，就再也无法进入矩阵团队；第二次触碰红线，直接劝退离开团队。交易就像做手术，务必严肃，容不得任何不遵守规则的人。",
    category: "rules",
  },
  {
    q: "交易规则红线有哪些？",
    a: "硬止损线不能移动，位置务必设置正确\n只有标准和激进两种进场方式（盈利训练阶段额外增加破止损线入场），其他都是错单\n不能跨越红折线持仓\n止损和出场必须满足规则条件，不满足一律按错单处理\n5倍以上利润才能使用止盈线",
    category: "rules",
  },
  {
    q: "会议纪律红线有哪些？",
    a: "学员之间不得加微信、电话等联系方式\n会议室内保持严肃，不得闲聊，不得谈论除交易外其他话题",
    category: "rules",
  },
  {
    q: "如果不适合做交易会怎样？",
    a: "如果在30个工作日内，我们判断你不适合做交易，会如实告知，并劝诫其此生不要踏足二级市场。这不是侮辱，而是保护。不适合的人进入二级市场，最终只会成为韭菜，亏损累累。我们帮你避免这个结局。",
    category: "rules",
  },

  // 其他问题
  {
    q: "为什么说“年轻人更适合”？",
    a: "国内多数\"经验丰富\"的中年交易员，往往是失败者：不良习惯缠身，或在不上不下的泥沼中挣扎。经验有时是枷锁，而非利剑。真正适配的是20-35岁的年轻人：学习迅捷、适应力强，能直面市场风暴。我们计划在30个工作日内，让年轻人直达那些\"专家\"10-20年的盈利高度。",
    category: "others",
  },
  {
    q: "交易有风险吗？",
    a: "交易存在较高风险，可能导致本金损失。市场波动、杠杆使用、情绪化决策等都可能带来亏损。我们会系统教授风险管理知识，但请务必记住：交易有风险，投资需谨慎，不要投入超过您承受能力的资金。",
    category: "others",
  },
  {
    q: "我可以一边工作一边参加培训吗？",
    a: "不可以。培训要求连续30个工作日，周一到周五每天最低保证 13:30 - 21:30 在线。这是全职投入的筛选和培养过程。如果无法保证时间投入，建议不要申请，因为这会浪费双方的时间。",
    category: "others",
  },
  {
    q: "通过考核后还需要每天在线吗？",
    a: "不需要。通过考核进入大额矩阵后，你将拥有完全自由的工作时间，每天不限制交易量，只需保证每日不亏的底线即可。你可以在阿尔卑斯山滑雪，夏威夷游泳或北海道发呆……金钱会源源不断地自动流入你的口袋。",
    category: "others",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<FaqTabId>("all");

  const visibleItems =
    activeCategory === "all"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-16">
      {/* Part 1: FAQ hero */}
      <section className="section relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-black via-slate-950 to-slate-950 px-6 py-16 shadow-xl">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.28),transparent_60%)]" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(15,23,42,0.7),rgba(15,23,42,0.7)_1px,transparent_1px,transparent_8px)] mix-blend-soft-light" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),transparent)]" />
        </div>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center space-y-6 text-center">
          <div className="inline-flex items-center justify-center rounded-sm border border-sky-500/80 bg-black/70 px-6 py-1 text-[11px] font-semibold tracking-[0.35em] text-sky-300 shadow-[0_0_26px_rgba(56,189,248,0.7)]">
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h1 className="text-4xl font-extrabold tracking-[0.35em] text-slate-50 md:text-5xl">
            常见问题解答
          </h1>

          <div className="space-y-3">
            <p className="text-xs font-medium tracking-[0.35em] text-slate-300 md:text-sm">
              FAQ
            </p>
            <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
              开启职业交易之路前，先读懂这些问题
            </p>
          </div>
        </div>
      </section>

      {/* Divider + Part 2 wrapper */}
      <div>
        <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-sky-500/70 to-transparent" />

        {/* Part 2: FAQ tabs + list */}
        <section className="section pt-[44px] md:pt-[52px]">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {FAQ_CATEGORY_TABS.map((tab) => {
              const isActive = tab.id === activeCategory;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`min-w-[120px] rounded-full border px-4 py-1.5 text-xs md:text-sm transition-colors duration-200 ${
                    isActive
                      ? "border-primary-500 bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-500 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.75)]"
                      : "border-slate-700 bg-slate-900/70 text-slate-200 hover:border-primary-400 hover:text-primary-300"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-5">
            {visibleItems.length === 0 ? (
              <p className="text-center text-xs text-slate-500">
                该类别的问题正在整理中。
              </p>
            ) : (
              visibleItems.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-slate-800/80 bg-obsidian-900/60 p-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm text-slate-200">
                    <span>{item.q}</span>
                    <span className="text-xs text-primary-400 group-open:hidden">
                      展开
                    </span>
                    <span className="hidden text-xs text-primary-400 group-open:inline">
                      收起
                    </span>
                  </summary>
                  <p className="mt-3 whitespace-pre-line pl-4 text-xs leading-loose tracking-wide text-slate-400">
                    {item.a}
                  </p>
                </details>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
