"use client";
import React from "react";

interface ButtonProps {
  fn: () => void;
  children: React.ReactNode;
}

export default function Button({ fn, children }: ButtonProps) {
  return (
    <button className="" onClick={() => fn()}>
      {children}
    </button>
  );
}
