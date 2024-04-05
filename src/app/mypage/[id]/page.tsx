import React from "react";
import getUserDiaries from "../../services/getUserDiaries";
import { getServerSession } from "@/src/lib/auth";
import { notFound } from "next/navigation";
import DiaryCard from "../../components/organisms/DiaryCard/DairyCard";

interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {
  const { id } = params;
  const session = await getServerSession();
  if (!session) {
    notFound();
  }
  const diaries = await getUserDiaries(session);
  const diary = diaries.find((diary) => diary.id.toString() === id);
  if (!diary || !session || !session.user || !session.user.name) {
    notFound();
  }

  return session.user?.id === diary.userId ? (
    <DiaryCard diaryData={diary} name={session.user.name} isCreateUser={true} />
  ) : (
    <DiaryCard
      diaryData={diary}
      name={session.user.name}
      isCreateUser={false}
    />
  );
}
