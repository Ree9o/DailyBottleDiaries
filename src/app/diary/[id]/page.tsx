import React from "react";
import getDiaries from "../../services/getDialies";
import DiaryCard from "../../_components/organisms/DiaryCard";
import { notFound } from "next/navigation";

interface DiaryPageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: DiaryPageProps) {
  const { id } = params;
  const diaries = await getDiaries();
  const diary = diaries.find((diary) => diary.id.toString() === id);

  if (!diary) {
    notFound();
  }

  return <DiaryCard diaryData={diary} name={diary.user.name} />;
}

export async function generateStaticParams() {
  const diaries = await getDiaries();
  return diaries.map((diary) => ({
    id: diary.id.toString(),
  }));
}
