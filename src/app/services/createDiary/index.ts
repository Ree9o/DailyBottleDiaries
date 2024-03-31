"use server";
import { prismaInitalied as prisma } from "@/src/lib/PrismaInitialized";

interface CreateDiaryProps {
  userId: string;
  title: string;
  content: string;
  isPublic: boolean;
}

export default async function createDiary({ userId, title, content, isPublic }: CreateDiaryProps) {
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
}
