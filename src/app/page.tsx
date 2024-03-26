import DiariesContainer from "./_components/template/DiariesContainer";
import { getServerSession } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <DiariesContainer />
    </>
  );
}
