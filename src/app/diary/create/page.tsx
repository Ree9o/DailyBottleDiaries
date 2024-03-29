import React from "react";
import CreateDiaryPage from "../../components/organisms/CreateDiaryPage/CreateDiaryPage";
import { getServerSession } from "../../api/auth/[...nextauth]/route";
import { notFound } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();
  const user = session?.user as {
    id: string;
    name?: string;
    email?: string;
    image?: string;
  } | null;

  if (!user || !user.id) {
    // ユーザー情報が存在しない場合の処理
    notFound()
  }

  const userId = user.id;

  return <CreateDiaryPage userid={userId} />;
}
