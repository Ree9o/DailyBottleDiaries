"use server";
import { prismaInitalied as prisma } from "@/src/lib/PrismaInitialized";

export default async function getDiaries() {
  try {
    const diaries = await prisma.diary.findMany({
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
      where: {
        isPublic: true,
      },
    });
    return diaries;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
