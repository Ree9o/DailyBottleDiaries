import React from "react";
import PageAside from "../../molecules/PageAside/PageAside";
import HamburgerMenu from "../../molecules/HamburgerMenu/HamburgerMenu";
import type { Session } from "next-auth";

export default async function Menu({ session }: { session: Session | null }) {
  return (
    <>
      <div className="hidden md:block">
        <PageAside session={session} />
      </div>
      <div className="block md:hidden">
        <HamburgerMenu session={session} />
      </div>
    </>
  );
}
