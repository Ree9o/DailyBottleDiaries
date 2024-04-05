import React from "react";
import AuthButton from "../../atoms/AuthButton/AuthButton";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import type { Session } from "next-auth";

export default async function PageAside({
  session,
}: {
  session: Session | null;
}) {
  return (
    <>
      <aside className="h-screen bg-gray-500">
        <nav className="flex flex-col items-center gap-5 pt-5">
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
