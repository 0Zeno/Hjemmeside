import Link from "next/link";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, buttonVariants } from "@/components/ui/button";
import ModeToggle from "./theeme-switch-button";


export function SiteHeader() {
  return (
    <header className="flex justify-between px-4">
      <nav className="pt-2 font-medium flex space-x-2">
        <ModeToggle/>
      </nav>
    </header>
  );
}

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return <Link href={href}>{children}</Link>;
}
