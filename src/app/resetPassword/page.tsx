"use client";
import Head from "next/head";
import { supabase } from "@/utils/supabase.client";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (password !== passwordConf) {
        setError("passwordが一致しません");
        throw Error;
      }

      const { data: resetData, error } = await supabase.auth.updateUser({
        password: password,
      });
      if (resetData) {
        console.log(resetData);
        router.refresh();
      }
      setSuccess(true);
      console.log(success);
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="container">
        <Head>
          <title>パスワードリセット画面</title>
        </Head>
        <main>
          <div className="grid">
            <form action="" onSubmit={onSubmit}>
              <div>
                <label htmlFor="">enter your new password</label>
                <input
                  className="text-black"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">confirm your new password</label>
                <input
                  className="text-black"
                  type="password"
                  required
                  value={passwordConf}
                  onChange={(e) => setPasswordConf(e.target.value)}
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
