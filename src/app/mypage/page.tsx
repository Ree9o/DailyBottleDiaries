import getUserDiaries from "../services/getUserDiaries";
import { getServerSession } from "@/src/lib/auth";
import { notFound } from "next/navigation";
import ProfileDiariesList from "../components/organisms/ProfileDiariesList/ProfileDiariesList";

export default async function page() {
  const session = await getServerSession();
  if (!session) {
    notFound();
  }
  const diaries = await getUserDiaries(session);

  return (
    <>
      <div className="grid h-screen w-full grid-cols-1 items-center justify-items-center overflow-auto bg-white  p-6 px-4 py-8 shadow-md sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4">
        {diaries.map((diary) => (
          <div
            key={diary.id}
            className="size-60 rounded-lg border border-black"
          >
            <ProfileDiariesList diary={diary} />
          </div>
        ))}
      </div>
    </>
  );
}
