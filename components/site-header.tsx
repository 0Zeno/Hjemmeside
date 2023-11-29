import Link from "next/link";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, buttonVariants } from "@/components/button";
import ModeToggle from "./theeme-switch-button";

const routes = [
  {
    name: "Home",
    href: "/",
  },
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
      <h1 className="p-2 text-4xl font-medium hidden sm:block">
        Zeno Elio Leonardi
      </h1>
      <h1 className="p-2 text-4xl font-medium block sm:hidden">Zeno</h1>
      <nav className="pt-2 font-medium flex space-x-2">
        <ModeToggle />  
        {routes.map((route) => {
          return (
            <Button variant="outline" size="default">
              <NavLink key={route.name} href={route.href}>
              {route.name}
              </NavLink>
            </Button>
            
          );
        })}
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      {children}
    </Link>
  );
}
