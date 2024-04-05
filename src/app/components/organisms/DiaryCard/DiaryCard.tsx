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
  isCreateUser: boolean;
}

export default function DiaryCard({
  diaryData,
  name,
  isCreateUser,
}: DiaryCardProps) {
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
      <article className="letter grid-rows-\[auto\_1fr\_auto\] m-auto grid  h-96 w-5/6 grid-cols-1 items-center gap-2 sm:w-4/6  ">
        <h2 className="row-start-1 row-end-2 break-words text-2xl">
          {diaryData.title}
        </h2>
        <div className="scrollbar-hidden row-start-2 row-end-3 h-full overflow-y-auto">
          {diaryData.content}
        </div>
        <footer className="row-start-3 row-end-4 flex w-auto gap-5 text-xs">
          <time>{formattedDate}</time> <div>{name}</div>
        </footer>
        {isCreateUser && (
          <Button type="submit" onClick={() => handleDelete(diaryData.id)}>
            削除
          </Button>
        )}
      </article>
    </>
  );
}
