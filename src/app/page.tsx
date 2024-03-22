"use client";
import { supabase } from "@/utils/supabase.client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<string | undefined>("");

  const getSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    return session;
  };
  const getUser = async () => {
    const { data } = await supabase.auth.getUser();
    console.log(data.user?.email);
    setUser(data.user?.email);
  };
  useEffect(() => {
    getUser();
    getSession();
  }, []);
  const router = useRouter();
  const logout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <>
      <div>Logged in now </div>
      <p>hello{user}</p>
      <button onClick={logout}>LoggedOut</button>
    </>
  );
}
