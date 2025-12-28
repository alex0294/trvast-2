import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    let roles = await prisma.role.findMany({ orderBy: { id: "asc" } });

    if (roles.length === 0) {
      roles = await prisma.$transaction([
        prisma.role.create({ data: { name: "guest" } }),
        prisma.role.create({ data: { name: "student" } }),
        prisma.role.create({ data: { name: "admin" } }),
      ]);
    }

    return NextResponse.json(roles);
  } catch (error) {
    console.error("GET /api/roles error", error);
    return NextResponse.json(
      { error: "Failed to load roles" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name } = body ?? {};

    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "name is required" },
        { status: 400 },
      );
    }

    const role = await prisma.role.create({
      data: { name },
    });

    return NextResponse.json(role, { status: 201 });
  } catch (error) {
    console.error("POST /api/roles error", error);
    return NextResponse.json(
      { error: "Failed to create role" },
      { status: 500 },
    );
  }
}
