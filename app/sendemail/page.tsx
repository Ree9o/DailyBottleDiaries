"use client";
import Head from "next/head";
import { supabase } from "@/utils/supabase.client";
import { useState } from "react";

export default function Sendemail() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "'http://localhost:3000/passwordReset/'",
      });
      if (error) {
        setError("passswordがリセットできませんでした。");
        throw Error;
      }
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="container">
        <Head>
          <title>パスワードリセット送信画面</title>
        </Head>
        <main>
          <div className="grid">
            <form action="" onSubmit={onSubmit}>
              <div>
                <label htmlFor="">登録メールアドレス</label>
                <input
                  className="text-black"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <button type="submit">send mail</button>
              </div>
            </form>
            {error && <p>{error}</p>}
          </div>
        </main>
      </div>
    </>
  );
}
