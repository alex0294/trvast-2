import { prisma } from "@/lib/prisma";

export default async function NewsPage() {
  let news = await prisma.news.findMany({
    orderBy: { publishedAt: "desc" },
    take: 10,
  });

  if (news.length === 0) {
    news = await prisma.$transaction([
      prisma.news.create({
        data: {
          title: "美联储利率决议前，市场波动收敛",
          summary: "主要货币对维持区间震荡，黄金在关键支撑附近企稳。",
          category: "macro",
          source: "示例数据",
        },
      }),
      prisma.news.create({
        data: {
          title: "交易员情绪分化，股指高位震荡",
          summary: "部分成长板块获利了结，防御板块相对坚挺。",
          category: "equity",
          source: "示例数据",
        },
      }),
      prisma.news.create({
        data: {
          title: "大宗商品企稳，关注后续宏观数据反馈",
          summary: "原油、金属整体维持震荡偏强格局。",
          category: "commodity",
          source: "示例数据",
        },
      }),
    ]);
  }

  return (
    <div className="space-y-16">
      <section className="section rounded-3xl border border-slate-800/80 bg-gradient-to-br from-fuchsia-900/40 via-obsidian-900 to-slate-950 px-6 py-14 shadow-xl">
        <h1 className="mb-3 text-2xl font-semibold md:text-3xl">
          市场新闻与策略洞察
        </h1>
        <p className="text-sm text-slate-300">
          深度解析交易策略、市场结构与职业交易员的实战心得。当前页面示例性展示来自数据库的新闻列表，后续可以接入真实新闻源与 AI 分析模块。
        </p>
      </section>

      <section className="section grid gap-8 md:grid-cols-[0.8fr,1.4fr]">
        <aside className="card space-y-4 text-sm text-slate-200">
          <h2 className="section-title mb-2 !text-xl">时间筛选（示例）</h2>
          <div className="space-y-2 text-xs">
            <button className="btn-outline w-full justify-start">最近 7 天</button>
            <button className="btn-outline w-full justify-start">最近 30 天</button>
            <button className="btn-outline w-full justify-start">最近 3 个月</button>
          </div>
        </aside>
        <div className="space-y-6">
          <div className="card space-y-3">
            <div className="mb-1 text-xs text-primary-300">实时快讯 · 示例</div>
            <p className="text-sm text-slate-200">
              这里可以展示通过 API 获取的宏观事件、重要数据公布与市场波动提示。本示例使用 SQLite + Prisma 从本地数据库读取新闻数据。
            </p>
          </div>

          <div className="card space-y-3">
            <div className="mb-1 text-xs text-accent-300">
              最新新闻（来自数据库）
            </div>
            <ul className="space-y-2 text-sm text-slate-200">
              {news.map((item) => (
                <li key={item.id} className="border-b border-slate-800/80 pb-2 last:border-b-0">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{item.category ?? "news"}</span>
                    <span>
                      {item.publishedAt
                        ? new Date(item.publishedAt).toLocaleString()
                        : ""}
                    </span>
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-50">
                    {item.title}
                  </div>
                  {item.summary && (
                    <div className="mt-1 text-xs text-slate-300">
                      {item.summary}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

