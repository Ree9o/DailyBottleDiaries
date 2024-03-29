"use server";
import { prismaInitalied as prisma } from "@/src/lib/PrismaInitialized";

export default async function deleteDiary( id: number ) {
  const diary = await prisma.diary.delete({
    where: {
      id,
    },
  });
  return diary;
}
