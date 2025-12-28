import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { courseId, name, email, userId } = body ?? {};

    if (!courseId || typeof courseId !== "number") {
      return NextResponse.json(
        { error: "courseId is required" },
        { status: 400 },
      );
    }

    if (!name || !email) {
      return NextResponse.json(
        { error: "name and email are required" },
        { status: 400 },
      );
    }

    const enrollment = await prisma.enrollment.create({
      data: {
        courseId,
        name,
        email,
        userId: typeof userId === "number" ? userId : null,
      },
    });

    return NextResponse.json(enrollment, { status: 201 });
  } catch (error) {
    console.error("POST /api/enrollments error", error);
    return NextResponse.json(
      { error: "Failed to create enrollment" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const enrollments = await prisma.enrollment.findMany({
      include: { course: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(enrollments, { status: 200 });
  } catch (error) {
    console.error("GET /api/enrollments error", error);
    return NextResponse.json(
      { error: "Failed to load enrollments" },
      { status: 500 },
    );
  }
}
