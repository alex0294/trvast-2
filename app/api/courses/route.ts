import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    let courses = await prisma.course.findMany({
      orderBy: { id: "asc" },
    });

    if (courses.length === 0) {
      courses = await prisma.$transaction([
        prisma.course.create({
          data: {
            title: "交易员启蒙营",
            description: "从零基础到理解市场结构与风险意识。",
          },
        }),
        prisma.course.create({
          data: {
            title: "实盘交易训练营",
            description: "以实盘为核心的执行力与风险控制训练。",
          },
        }),
      ]);
    }

    return NextResponse.json(courses);
  } catch (error) {
    console.error("GET /api/courses error", error);
    return NextResponse.json(
      { error: "Failed to load courses" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, startDate, endDate } = body ?? {};

    if (!title || typeof title !== "string") {
      return NextResponse.json(
        { error: "title is required" },
        { status: 400 },
      );
    }

    const course = await prisma.course.create({
      data: {
        title,
        description: description ?? null,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
      },
    });

    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    console.error("POST /api/courses error", error);
    return NextResponse.json(
      { error: "Failed to create course" },
      { status: 500 },
    );
  }
}
