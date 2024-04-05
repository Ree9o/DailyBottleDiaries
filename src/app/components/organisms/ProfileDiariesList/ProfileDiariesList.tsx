"use client";
import { useRouter } from "next/navigation";

import React from "react";

interface Props {
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
export default function ProfileDiariesList({ diary }: Props) {
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
      <button
        className="size-60 p-3"
        type="button"
        onClick={() => router.push(`mypage/${id}`)}
      >
        <h2 className="overflow-hidden text-ellipsis">{diary.title}</h2>
        <div>{formattedDate}</div>
      </button>
    </>
  );
}
