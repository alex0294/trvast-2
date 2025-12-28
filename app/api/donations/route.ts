import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const currency = searchParams.get("currency") ?? "USD";

    const aggregate = await prisma.donation.aggregate({
      _sum: { amount: true },
      _count: true,
      where: { currency },
    });

    const totalAmount = aggregate._sum.amount ?? 0;
    const totalCount = aggregate._count ?? 0;

    return NextResponse.json({
      currency,
      totalAmount,
      totalCount,
    });
  } catch (error) {
    console.error("GET /api/donations error", error);
    return NextResponse.json(
      { error: "Failed to load donations summary" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, name, email, message, userId, currency } = body ?? {};

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return NextResponse.json(
        { error: "amount must be a positive number" },
        { status: 400 },
      );
    }

    const donation = await prisma.donation.create({
      data: {
        amount,
        currency: typeof currency === "string" ? currency : "USD",
        name: typeof name === "string" ? name : null,
        email: typeof email === "string" ? email : null,
        message: typeof message === "string" ? message : null,
        userId: typeof userId === "number" ? userId : null,
      },
    });

    return NextResponse.json(donation, { status: 201 });
  } catch (error) {
    console.error("POST /api/donations error", error);
    return NextResponse.json(
      { error: "Failed to create donation" },
      { status: 500 },
    );
  }
}
