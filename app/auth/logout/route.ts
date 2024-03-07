import { supabase } from "@/utils/supabase.client";
import type { Database } from "@/types/database.types";
import { NextRequest, NextResponse } from "next/server";
export default async function handler(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.redirect(new URL("/404", req.url));
  }

  const { error } = await supabase.auth.signOut();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  // 成功レスポンス
  return new Response(JSON.stringify({ message: "logged out successfully!" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
