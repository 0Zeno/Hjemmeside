import Link from "next/link";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, buttonVariants } from "@/components/ui/button";
import ModeToggle from "./theeme-switch-button";
import DropdownMenuButton from "./drop-down-menu";

export const routes = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export function SiteHeader() {
  return (
    <header className="flex justify-between px-4 border-b">
      <a href="/">
        <h1 className="p-2 text-4xl font-medium hidden sm:block">
          Zeno Elio Leonardi
        </h1>
        <h1 className="p-2 text-4xl font-medium block sm:hidden">ZEL</h1>
      </a>
      <nav className="pt-2 font-medium flex space-x-2">
        <div className="hidden sm:block space-x-2">
          {routes.map((route) => {
            return (
              <Button key={route.name} variant="backgroudblur" size="default">
                <NavLink href={route.href}>{route.name}</NavLink>
              </Button>
            );
          })}
        </div>
        <div className="sm:hidden">
          <DropdownMenuButton />
        </div>
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
