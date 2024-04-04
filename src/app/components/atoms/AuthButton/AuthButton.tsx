"use client";
import React from "react";
import { signIn,signOut } from "next-auth/react";
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
          className={`w-32 text-black bg-slate-200 hover:bg-slate-300 font-bold py-2 px-4 rounded ${className}`}
          onClick={handleSignOut}
        >
          ログアウト
        </button>
      ) : (
        <button
          className={`w-32 text-black bg-slate-200 hover:bg-slate-300  font-bold py-2 px-4 rounded ${className}`}
          onClick={handleSignIn}
        >
          ログイン
        </button>
      )}
    </>
  );
}
