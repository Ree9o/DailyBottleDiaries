"use client";

import React, { useState } from "react";
import AuthButton from "../../atoms/AuthButton/AuthButton";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import { FaBars, FaTimes } from "react-icons/fa";
import { Session } from "next-auth";

export default function HamburgerMenu({ session }: { session: Session | null }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 p-4 z-50 bg-black">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-slate-400 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-5 items-center pt-20">
          <div id="top">
            <LinkButton path="/">トップ</LinkButton>
          </div>
          {session && session.user ? (
            <>
              <div>
                <LinkButton path="/diary/create">作成</LinkButton>
              </div>
              <div>
                <LinkButton path="/mypage">マイページ</LinkButton>
              </div>
              <AuthButton session={session} />
            </>
          ) : (
            <div>
              <AuthButton session={session} />
            </div>
          )}
        </nav>
      </aside>
    </>
  );
}
