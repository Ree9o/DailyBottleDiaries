import { supabase } from "@/utils/supabase.client";
import type { Database } from "@/types/database.types";
import { NextRequest, NextResponse } from "next/server";
export default async function Login(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.redirect(new URL("/404", req.url));
  }

  // リクエストからemailとpasswordを取得
  const { email, password } = await req.json();

  // Supabaseを使用してサインアップ
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  const { user } = data;
  // 成功レスポンス
  return new Response(JSON.stringify({ user }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
