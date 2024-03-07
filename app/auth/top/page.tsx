"use client";
import Head from "next/head";
import { supabase } from "@/utils/supabase.client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Top() {
  const [error, setError] = useState(""); // エラーメッセージ用の状態
  const router = useRouter();
  const Logout = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        setError("logoutできませんでした");
        throw Error;
      }
      await router.push("/");
    } catch (error: any) {
      setError(error.message);
    }
  };
  useEffect(() => {
    // ユーザーの認証状態をチェック
    const session = supabase.auth.onAuthStateChange;

    // セッションがなければ、またはセッション内のユーザー情報がなければログインページにリダイレクト
    if (!session || !session.user) {
      router.push('/login'); // ログインページに適宜変更してください
    }
  }, [router]);
  return (
    <>
      <div className="container">
        <Head>
          <title>top page</title>
          <link rel="icon" href="/favicon.icon"></link>
        </Head>
        <main>
          <div className="grid">
            <h1>top</h1>

            <form action="" onSubmit={Logout}>
              <button type="submit">loggetOut</button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
