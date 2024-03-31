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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 py-8 bg-white rounded-lg shadow-md  p-6 border border-gray-600">
        <button onClick={() => router.push(`mypage/${id}`)}>
          <h1>{diary.title}</h1>
          <div>{formattedDate}</div>
        </button>
      </div>
    </>
  );
}