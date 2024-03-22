"use client";
import { supabase } from "@/utils/supabase.client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(""); // エラーメッセージ用の状態
  const router = useRouter();
  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault(); // フォームのデフォルトの送信を防ぐ
  //   // パスワードとパスワード確認が一致するかチェック
  //   if (password !== passwordConf) {
  //     setError("パスワードが一致しません。");
  //     return;
  //   }
  //   // Supabaseを使用してログイン
  //   const { data, error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //   });
  //   if (data) console.log(data);
  //   if (error) {
  //     setError(error.message);
  //     return;
  //   }
  //   await router.push("/top");
  // };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault(); // デフォルトのフォーム送信を防ぐ
    if (password !== passwordConf) {
      setError("パスワードが一致しません。");
      return;
    }
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (!error && data) {
      const response = await fetch("http://localhost:3000/api/saveUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username }),
      });
      if (!response.ok) {
        window.alert("ユーザー登録に失敗しました");
        console.log(error);
      } else {
        console.error("サインアップに失敗しました", error);
      }
      // router.push("/top");
    }
  };

  return (
    <>
      <div className="container">
        <div className="grid">
          <form onSubmit={(e) => handleSignUp(e)}>
            <div>
              <label htmlFor="username">username</label>
              <input
                className="text-black"
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">address</label>
              <input
                className="text-black"
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input
                className="text-black"
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="passwordConf">password(確認)</label>
              <input
                className="text-black"
                id="passwordConf"
                type="password"
                required
                value={passwordConf}
                onChange={(e) => setPasswordConf(e.target.value)}
              />
            </div>
            {error && <p>{error}</p>} {/* エラーメッセージの表示 */}
            <button type="submit">サインアップ</button>
          </form>
        </div>
      </div>
    </>
  );
}
