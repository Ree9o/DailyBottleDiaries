"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface DiaryGridsProps {
  diary: {
    id: number;
    userId: string;
    title: string;
    content: string;
    isPublic: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
}
export default function DiaryContaienerItem({ diary }: DiaryGridsProps) {
  const router = useRouter();
  const id = String(diary.id);
  const formattedDate = diary.createdAt.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  return (
    <>
      <button className="size-60" type="button" onClick={() => router.push(`diary/${id}`)}>
        <h1>{diary.title}</h1>
        <div>{formattedDate}</div>
      </button>
    </>
  );
}
