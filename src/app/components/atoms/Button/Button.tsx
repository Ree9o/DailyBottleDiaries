import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

export default function Button({
  children,
  className,
  type = "button",
  onClick,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-30 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
}
