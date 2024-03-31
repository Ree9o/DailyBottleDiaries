"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
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
          className={` w-32 bg-neutral-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded ${className}`}
          onClick={handleSignOut}
        >
          ログアウト
        </button>
      ) : (
        <button
          className={`w-32 bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded ${className}`}
          onClick={handleSignIn}
        >
          ログイン
        </button>
      )}
    </>
  );
}
