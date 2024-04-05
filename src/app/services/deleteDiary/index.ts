"use server";
import { prismaInitalied as prisma } from "@/src/lib/PrismaInitialized";
import { revalidatePath } from "next/cache";

export default async function deleteDiary(id: number) {
  try {
    const diary = await prisma.diary.delete({
      where: {
        id,
      },
    });
    return diary;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    revalidatePath("/");
  }
}
