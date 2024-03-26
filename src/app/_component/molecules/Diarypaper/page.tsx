import React from "react";
interface DiarypaperProps {
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
export default function Daiarypaper({ diaryData, name }: DiarypaperProps) {
  const formattedDate = diaryData.createdAt.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <>
      <div className="letter w-4/6 h-96 m-auto grid grid-cols-1 grid-rows-[auto_1fr_auto] gap-2">
        <h1 className="text-2xl row-start-1 row-end-2">{diaryData.title}</h1>
        <div className="row-start-2 row-end-3 overflow-y-auto scrollbar-hidden">
          <div>
            {diaryData.content} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            suscipit, voluptas modi quo iste, itaque fugit facilis facere perspiciatis at eligendi
            libero nulla? Odit vel fuga explicabo impedit, iusto soluta! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quo minus ducimus nihil? Consequatur, distinctio
            architecto! Quia aliquid accusamus accusantium porro! Nobis facilis repellat maiores
            animi iure esse, assumenda asperiores voluptatibus.
          </div>
        </div>
        <div className="flex w-auto gap-5 text-xs row-start-3 row-end-4">
          <div>{formattedDate}</div>
          <div>{name}</div>
        </div>
      </div>
    </>
  );
}
