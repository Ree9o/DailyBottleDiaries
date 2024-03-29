import React from "react";
interface Props {
  onclick: () => void;
  children: React.ReactNode;
  className: string;
}

export default function Button({ onclick, children, className }: Props) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}
