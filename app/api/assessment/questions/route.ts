import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    let assessment = await prisma.assessment.findFirst({
      include: {
        questions: {
          orderBy: { order: "asc" },
        },
      },
    });

    if (!assessment) {
      assessment = await prisma.assessment.create({
        data: {
          title: "交易员心理测评",
          description: "评估情绪稳定性、风险意识、复盘习惯等维度。",
          questions: {
            create: Array.from({ length: 20 }).map((_, index) => ({
              order: index + 1,
              text: `示例问题 ${index + 1}：在连续亏损后，你会如何调整自己的状态？`,
            })),
          },
        },
        include: {
          questions: {
            orderBy: { order: "asc" },
          },
        },
      });
    }

    return NextResponse.json({
      id: assessment.id,
      title: assessment.title,
      description: assessment.description,
      questions: assessment.questions,
    });
  } catch (error) {
    console.error("GET /api/assessment/questions error", error);
    return NextResponse.json(
      { error: "Failed to load assessment questions" },
      { status: 500 },
    );
  }
}
