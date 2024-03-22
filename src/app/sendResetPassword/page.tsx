"use client";
import Head from "next/head";
import { supabase } from "@/utils/supabase.client";
import { useState } from "react";
import React from "react";
export default function SendResetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let attempt = 0;
    const maxAttempts = 3;
    const retryDelay = 2000; // ミリ秒

    const sendRequest = async () => {
      try {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}resetPassword`,
        });
        setSuccess(true);
      } catch (error: any) {
        if (error.status === 429 && attempt < maxAttempts) {
          setTimeout(() => {
            attempt++;
            sendRequest();
          }, retryDelay);
        } else {
          setError(error.message);
        }
      }
    };

    sendRequest();
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
            {success && <p>success!!</p>}
          </div>
        </main>
      </div>
    </>
  );
}
