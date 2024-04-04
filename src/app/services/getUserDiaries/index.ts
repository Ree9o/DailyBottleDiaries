"use server";
import { prismaInitalied as prisma } from "@/src/lib/PrismaInitialized";
import { Session } from "next-auth";
export default async function getUserDiaries(session: Session) {
  if (!session || !session.user || !session.user.email) {
    throw new Error("User not authenticated");
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
    select: {
      id: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }
  try {
    const diaries = await prisma.diary.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return diaries;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
