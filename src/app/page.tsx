"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Page() {
  const { data: session } = useSession();

  return (
    <>
      <div className="flex justify-center">
        {session ? (
          <button
            className=" flex w-full justify-center border-2 border-b border-red-300 hover:border-red-400 bg-red-200 hover:bg-red-300 pb-6 pt-8 backdrop-blur-2xl dark:border-red-800 dark:hover:border-red-900 dark:bg-red-800/50 dark:hover:bg-red-900/30 lg:static lg:w-auto lg:rounded-xl lg:p-4"
            onClick={() => signOut()}
          >
            sign out
          </button>
        ) : (
          <button
            className=" flex w-full justify-center border-2 border-b border-red-300 hover:border-red-400 bg-red-200 hover:bg-red-300 pb-6 pt-8 backdrop-blur-2xl dark:border-red-800 dark:hover:border-red-900 dark:bg-red-800/50 dark:hover:bg-red-900/30 lg:static lg:w-auto lg:rounded-xl lg:p-4"
            onClick={() => signIn()}
          >
            sign in
          </button>
        )}
      </div>
    </>
  );
}
