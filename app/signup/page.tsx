"use client";
import Head from "next/head";
import { supabase } from "@/utils/supabase.client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [error, setError] = useState(""); // エラーメッセージ用の状態
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault(); // フォームのデフォルトの送信を防ぐ

    // パスワードとパスワード確認が一致するかチェック
    if (password !== passwordConf) {
      setError("パスワードが一致しません。");
      return;
    }

    // Supabaseを使用してログイン
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (data) console.log(data);
    // エラーがあれば状態にセット
    if (error) {
      setError(error.message);
      return;
    }
    await router.push("/12top");
  };

  return (
    <>
      <div className="container">
        <div className="grid">
          <form onSubmit={onSubmit}>
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
