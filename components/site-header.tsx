import Link from "next/link";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, buttonVariants } from "@/components/ui/button";
import ModeToggle from "./theeme-switch-button";

export const routes = [
  {
    name: "Hjem",
    href: "/",
  },
  {
    name: "Prosjekter",
    href: "/prosjekter",
  },
];

export function SiteHeader() {
  return (
    <header className="flex justify-between px-4">
      <nav className="pt-2 font-medium flex space-x-2">
        <div className="space-x-2">
          {routes.map((route) => {
            return (
              <Button key={route.name} variant="backgroudblur" size="default">
                <NavLink href={route.href}>{route.name}</NavLink>
              </Button>
            );
          })}
        </div>
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
