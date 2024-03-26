import { getServerSession } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import getDiaries from "./services/getDialies";
import Daiarypaper from "./_component/molecules/Diarypaper/page";

export default async function Page() {
  const session = await getServerSession();
  // if (!session) {
  //   redirect("/login");
  // }

  const diaries = await getDiaries();
  console.log(diaries);
  return (
    <>
      <div className=" justify-center w-full h-screen">
        {/* <div>こんにちは {session.user?.name}さん</div> */}
        {diaries.map((diary) => (
          <div key={diary.id}>
            <Daiarypaper diaryData={diary} name={diary.user.name} />
          </div>
        ))}
      </div>
    </>
  );
}
