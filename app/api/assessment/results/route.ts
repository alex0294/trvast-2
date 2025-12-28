import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { assessmentId, answers, userId } = body ?? {};

    if (!assessmentId || typeof assessmentId !== "number") {
      return NextResponse.json(
        { error: "assessmentId is required" },
        { status: 400 },
      );
    }

    if (!answers || typeof answers !== "object") {
      return NextResponse.json(
        { error: "answers is required" },
        { status: 400 },
      );
    }

    const values = Object.values(answers as Record<string, number>);
    const filledValues = values.filter((v) => typeof v === "number");

    const averageScore =
      filledValues.length > 0
        ? filledValues.reduce((acc, v) => acc + v, 0) / filledValues.length
        : 0;

    const result = await prisma.assessmentResult.create({
      data: {
        assessmentId,
        userId: typeof userId === "number" ? userId : null,
        rawScore: averageScore,
        answersJson: JSON.stringify(answers),
      },
    });

    return NextResponse.json({
      id: result.id,
      assessmentId: result.assessmentId,
      averageScore,
      createdAt: result.createdAt,
    });
  } catch (error) {
    console.error("POST /api/assessment/results error", error);
    return NextResponse.json(
      { error: "Failed to save assessment result" },
      { status: 500 },
    );
  }
}
