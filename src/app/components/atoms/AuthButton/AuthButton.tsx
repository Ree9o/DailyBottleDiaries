"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

export default function AuthButton({
  session,
  className,
}: {
  session: Session | null;
  className?: string;
}) {
  const router = useRouter();
  const handleSignOut = () => {
    signOut();
    router.refresh();
  };
  const handleSignIn = () => {
    signIn();
    router.refresh();
  };
  return (
    <>
      {session?.user ? (
        <button
          className={`w-32 rounded bg-slate-200 px-4 py-2 font-bold text-black hover:bg-slate-300 ${className}`}
          onClick={handleSignOut}
        >
          ログアウト
        </button>
      ) : (
        <button
          className={`w-32 rounded bg-slate-200 px-4  py-2 font-bold text-black hover:bg-slate-300 ${className}`}
          onClick={handleSignIn}
        >
          ログイン
        </button>
      )}
    </>
  );
}
