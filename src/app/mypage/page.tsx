import getUserDiaries from "../services/getUserDiaries";
import { getServerSession } from "../api/auth/[...nextauth]/route";
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
      <div className="overflow-auto h-screen w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  items-center justify-items-center px-4 py-8 bg-white  shadow-md p-6">
        {diaries.map((diary) => (
          <div key={diary.id} className="border border-black rounded-lg size-60">
            <ProfileDiariesList diary={diary} />
          </div>
        ))}
      </div>
    </>
  );
}
