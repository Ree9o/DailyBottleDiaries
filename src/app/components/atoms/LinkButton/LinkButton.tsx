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
        className={`w-32 bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded ${className}`}
      >
        {children}
      </button>
    </Link>
  );
}
