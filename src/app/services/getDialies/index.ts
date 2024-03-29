import React from "react";
import { PrismaClient } from "@prisma/client";

export default async function getDiaries() {
  const prisma = new PrismaClient();
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
