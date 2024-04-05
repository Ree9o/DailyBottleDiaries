"use server";
import { prismaInitalied as prisma } from "@/src/lib/PrismaInitialized";
import { revalidatePath } from "next/cache";

interface CreateDiaryProps {
  userId: string;
  title: string;
  content: string;
  isPublic: boolean;
}

export default async function createDiary({ userId, title, content, isPublic }: CreateDiaryProps) {
  try {
    const diaries = await prisma.diary.create({
      data: {
        title: title,
        content: content,
        isPublic: isPublic,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return diaries;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    revalidatePath("/");
  }
}
