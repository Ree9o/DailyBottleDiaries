"use client";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

function JumpButton(url: string, { children }: { children: React.ReactNode }) {
  const router = useRouter();
  return <button onClick={() => router.push(url)}>{children}</button>;
}

export default JumpButton;
