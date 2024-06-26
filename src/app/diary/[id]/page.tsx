import React from "react";
import getDiaries from "../../services/getDialies";
import DiaryCard from "../../components/organisms/DiaryCard/DiaryCard";
import { notFound } from "next/navigation";
import { getServerSession } from "@/src/lib/auth";
interface DiaryPageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: DiaryPageProps) {
  const { id } = params;
  const diaries = await getDiaries();
  const session = await getServerSession();
  const diary = diaries.find((diary) => diary.id.toString() === id);
  if (!diary) {
    notFound();
  }
  return (
    <div>
      {session && session?.user?.id === diary.userId ? (
        <DiaryCard
          diaryData={diary}
          name={diary.user.name}
          isCreateUser={true}
        />
      ) : (
        <DiaryCard
          diaryData={diary}
          name={diary.user.name}
          isCreateUser={false}
        />
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const diaries = await getDiaries();
  return diaries.map((diary) => ({
    id: diary.id.toString(),
  }));
}
