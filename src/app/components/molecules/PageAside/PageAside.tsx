import React from "react";
import AuthButton from "../../atoms/AuthButton/AuthButton";
import { getServerSession } from "@/src/app/api/auth/[...nextauth]/route";
import LinkButton from "../../atoms/LinkButton/LinkButton";

export default async function PageAside() {
  const session = await getServerSession();
  return (
    <>
      <aside className=" bg-amber-100 h-screen">
        <nav className="flex flex-col gap-5 items-center pt-5">
          <div id="top">
            <LinkButton path="/">トップ</LinkButton>
          </div>
          {session && session.user ? (
            <>
              <div>
                <LinkButton path="/diary/create">作成</LinkButton>
              </div>

              <div>
                <LinkButton path="/mypage">マイページ</LinkButton>
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
