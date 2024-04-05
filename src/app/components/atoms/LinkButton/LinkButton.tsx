"use client";
import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  path: string;
  className?: string;
}
export default function LinkButton({ path, className, children }: Props) {
  return (
    <Link href={path}>
      <button
        className={`w-32 rounded bg-slate-200 px-4 py-2 font-bold text-black hover:bg-slate-300 ${className}`}
      >
        {children}
      </button>
    </Link>
  );
}
