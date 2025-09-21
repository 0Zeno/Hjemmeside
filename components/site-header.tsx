
import * as React from "react";

import ModeToggle from "./theeme-switch-button";
import Link from "next/link";


export function SiteHeader() {
  return (
    <header className="flex justify-between px-4">
      <nav className="pt-2 font-medium flex space-x-2">
        <ModeToggle/>
        <Link className="pt-2 hover:text-shadow" href="/">Hjem</Link>
        <Link className="pt-2 hover:text-shadow" href="/about">Om meg</Link>
      </nav>
    </header>
  );
}


