import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    let news = await prisma.news.findMany({
      orderBy: { publishedAt: "desc" },
      take: 20,
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

    return NextResponse.json(news);
  } catch (error) {
    console.error("GET /api/news error", error);
    return NextResponse.json(
      { error: "Failed to load news" },
      { status: 500 },
    );
  }
}
