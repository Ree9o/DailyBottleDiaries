import { getServerSession } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();
  console.log(session);
  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <div className="flex justify-center">
        {session ? <div>こんにちは {session.user?.name}さん</div> : <div>セッションがないよ</div>}
      </div>
    </>
  );
}
