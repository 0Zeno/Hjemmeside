"use client";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "light";
  function changeTheme() {
    setTheme(isDarkMode ? "dark" : "light");
  }
  return (
    <Button variant="backgroudblur" onClick={() => changeTheme()}>
      <Moon className="h-[1.2rem] w-[1.2rem] dark:scale-0" />
      <Sun className="absolute h-[1.2rem] w-[1.2rem] scale-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
