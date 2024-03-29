"use client";
import React from "react";
import Button from "../../atoms/Button/Button";
import deleteDiary from "@/src/app/services/deleteDiary";
import { useRouter } from "next/navigation";

interface DiaryCardProps {
  diaryData: {
    id: number;
    userId: string;
    title: string;
    content: string;
    isPublic: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  name: string | null;
}

export default function DiaryCard({ diaryData, name }: DiaryCardProps) {
  const router = useRouter();
  const formattedDate = diaryData.createdAt.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  const handleDelete = (id: number) => {
    try {
      deleteDiary(id);
      router.push("/");
    } catch (error) {
      window.alert("削除できませんでした");
      console.error(error);
    }
  };

  return (
    <>
      <div className="letter w-4/6 h-96 m-auto grid grid-cols-1 grid-rows-\[auto\_1fr\_auto\] gap-2">
        <h1 className="text-2xl row-start-1 row-end-2">{diaryData.title}</h1>
        <div className="row-start-2 row-end-3 overflow-y-auto scrollbar-hidden">
          <div>{diaryData.content}</div>
        </div>
        <div className="flex w-auto gap-5 text-xs row-start-3 row-end-4">
          <div>{formattedDate}</div> <div>{name}</div>
        </div>
        <Button type="submit" onClick={() => handleDelete(diaryData.id)}>
          削除
        </Button>
      </div>
    </>
  );
}
