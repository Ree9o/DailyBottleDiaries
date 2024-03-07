// app/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/utils/supabase.client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return res.status(401).json({ error: error.message });

  // ログイン成功時の処理
  res.status(200).json({ data });
};
