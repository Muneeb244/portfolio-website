"use client";

import { useTheme } from "@/context/theme-context";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label={
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      }
      aria-pressed={theme === "dark"}
      className="fixed bottom-5 right-5 bg-white/80 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white/40 cursor-pointer shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
}
