import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { id: "asc" },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error("GET /api/users error", error);
    return NextResponse.json(
      { error: "Failed to load users" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, locale } = body ?? {};

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "email is required" },
        { status: 400 },
      );
    }

    const user = await prisma.user.upsert({
      where: { email },
      update: {
        name: typeof name === "string" ? name : undefined,
        locale: typeof locale === "string" ? locale : undefined,
      },
      create: {
        email,
        name: typeof name === "string" ? name : null,
        locale: typeof locale === "string" ? locale : undefined,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("POST /api/users error", error);
    return NextResponse.json(
      { error: "Failed to create or update user" },
      { status: 500 },
    );
  }
}
