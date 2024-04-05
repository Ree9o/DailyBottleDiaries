"use client";

import React, { useState } from "react";
import AuthButton from "../../atoms/AuthButton/AuthButton";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import { FaBars, FaTimes } from "react-icons/fa";
import { Session } from "next-auth";

export default function HamburgerMenu({
  session,
}: {
  session: Session | null;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-50 bg-black p-4">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <aside
        className={`fixed left-0 top-0 z-10 h-screen w-64 transform bg-slate-400 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav
          className="flex flex-col items-center gap-5 pt-20"
          onClick={toggleMenu}
        >
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
