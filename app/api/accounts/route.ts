import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userIdParam = searchParams.get("userId");
    const userId = userIdParam ? Number(userIdParam) : undefined;

    let accounts = await prisma.account.findMany({
      where: userId ? { userId } : undefined,
      orderBy: { id: "asc" },
    });

    if (accounts.length === 0) {
      const demoUser = await prisma.user.upsert({
        where: { email: "demo-trader@example.com" },
        update: {},
        create: {
          email: "demo-trader@example.com",
          name: "示例交易员",
        },
      });

      accounts = await prisma.$transaction([
        prisma.account.create({
          data: {
            userId: demoUser.id,
            name: "训练账户",
            currency: "USD",
            type: "training",
            balance: 10000,
          },
        }),
        prisma.account.create({
          data: {
            userId: demoUser.id,
            name: "实盘账户",
            currency: "USD",
            type: "live",
            balance: 50000,
          },
        }),
      ]);
    }

    return NextResponse.json(accounts);
  } catch (error) {
    console.error("GET /api/accounts error", error);
    return NextResponse.json(
      { error: "Failed to load accounts" },
      { status: 500 },
    );
  }
}
