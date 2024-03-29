import React from "react";
import { prismaInitalied as prisma } from "@/src/lib/PrismaInitialized";

export default async function getDiaries() {
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
}
