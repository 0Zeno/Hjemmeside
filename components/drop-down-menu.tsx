import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import NavLink from "./site-header";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { routes} from "./site-header";


export default function DropdownMenuButton() {
  return (
    <Button variant="backgroundblur" size="icon">
      <DropdownMenu>
        <DropdownMenuTrigger className="absolute"><MenuIcon /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            {routes.map((route) => {
              return (
                <Button key={route.name} variant="outline" size="default">
                  <NavLink href={route.href}>{route.name}</NavLink>
                </Button>
              );
            })}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Button>
  );
}
