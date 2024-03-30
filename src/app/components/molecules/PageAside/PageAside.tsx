import React from "react";
import RouterButton from "../../atoms/RouterButton/RouterButton";
import AuthButton from "../../atoms/AuthButton/AuthButton";
import { getServerSession } from "@/src/app/api/auth/[...nextauth]/route";

export default async function PageAside() {
  const session = await getServerSession();

  return (
    <>
      <aside className=" bg-amber-100 ">
        <nav className="flex flex-col gap-5 items-center pt-5">
          <div id="top">
            <RouterButton url="/">トップ</RouterButton>
          </div>
          {session && session.user ? (
            <>
              <div>
                <RouterButton url="/diary/create">作成</RouterButton>
              </div>

              <div>
                <RouterButton url="/mypage">マイページ</RouterButton>
              </div>
              <AuthButton session={session} />
            </>
          ) : (
            <div>
              <AuthButton session={session} />
            </div>
          )}
        </nav>
      </aside>
    </>
  );
}
