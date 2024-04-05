import React from "react";
import CreateDiaryPage from "../../components/organisms/CreateDiaryPage/CreateDiaryPage";
import { getServerSession } from "@/src/lib/auth";
import { notFound } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();
  if (!session || !session.user || !session.user.id) {
    notFound();
  }

  return <CreateDiaryPage userid={session.user.id} />;
}
