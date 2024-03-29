"use client";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface Props {
  children: React.ReactNode;
  url: string;
  className?: string;
}
export default function RouterButton({ url, className, children }: Props) {
  const router = useRouter();
  return (
    <button
      className={`bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={() => router.push(url)}
    >
      {children}
    </button>
  );
}
