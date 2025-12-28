import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const accountIdParam = searchParams.get("accountId");
    const accountId = accountIdParam ? Number(accountIdParam) : undefined;

    const transactions = await prisma.transaction.findMany({
      where: accountId ? { accountId } : undefined,
      orderBy: { timestamp: "desc" },
      take: 50,
    });

    return NextResponse.json(transactions);
  } catch (error) {
    console.error("GET /api/transactions error", error);
    return NextResponse.json(
      { error: "Failed to load transactions" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { accountId, type, direction, symbol, amount, price, description } =
      body ?? {};

    if (!accountId || typeof accountId !== "number") {
      return NextResponse.json(
        { error: "accountId is required" },
        { status: 400 },
      );
    }

    if (!type || typeof type !== "string") {
      return NextResponse.json(
        { error: "type is required" },
        { status: 400 },
      );
    }

    if (!amount || typeof amount !== "number") {
      return NextResponse.json(
        { error: "amount is required" },
        { status: 400 },
      );
    }

    const transaction = await prisma.transaction.create({
      data: {
        accountId,
        type,
        direction: typeof direction === "string" ? direction : null,
        symbol: typeof symbol === "string" ? symbol : null,
        amount,
        price: typeof price === "number" ? price : null,
        description: typeof description === "string" ? description : null,
      },
    });

    return NextResponse.json(transaction, { status: 201 });
  } catch (error) {
    console.error("POST /api/transactions error", error);
    return NextResponse.json(
      { error: "Failed to create transaction" },
      { status: 500 },
    );
  }
}
