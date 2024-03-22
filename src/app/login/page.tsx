"use client";
import Head from "next/head";
import { supabase } from "@/utils/supabase.client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [error, setError] = useState(""); // エラーメッセージ用の状態
  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // パスワードとパスワード確認が一致するかチェック
      if (password !== passwordConf) {
        setError("パスワードが一致しません。");
        return;
      }

      const { data: dataUser, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (dataUser) {
        console.log(dataUser);
        router.refresh();
      }
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <Head>
        <title>ログイン画面</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grid">
          <form onSubmit={onLogin}>
            <div>
              <label>メールアドレス</label>
              <input
                className="text-black"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                className="text-black"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード（確認）</label>
              <input
                className="text-black"
                type="password"
                required
                value={passwordConf}
                onChange={(e) => setPasswordConf(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">ログイン</button>
              <br />
              <Link href="/signup">ユーザー登録がお済みでない方はこちらから</Link>
              <br />
              <Link href="/sendResetPassword">パスワードをお忘れの方はこちらから</Link>
            </div>
          </form>
          {error && <p>{error}</p>}
        </div>
      </main>
    </div>
  );
}
