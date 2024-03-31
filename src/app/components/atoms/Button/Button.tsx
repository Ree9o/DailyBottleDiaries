import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

export default function Button({ children, className, type = "button", onClick }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-30 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
}
