"use client";

import { useEffect } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";

type ThemeToggleProps = {
  lightLabel: string;
  darkLabel: string;
};

export function ThemeToggle({ lightLabel, darkLabel }: ThemeToggleProps) {
  useEffect(() => {
    const stored = window.localStorage.getItem("diyar-theme");
    const nextDark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const nextDark = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    window.localStorage.setItem("diyar-theme", nextDark ? "dark" : "light");
  }

  const label = `${lightLabel} / ${darkLabel}`;
  return <button className="theme-switch" type="button" onClick={toggleTheme} aria-label={label} title={label}><span className="theme-switch-track"><span className="theme-switch-sun"><SunIcon className="size-4" /></span><span className="theme-switch-moon"><MoonIcon className="size-4" /></span></span></button>;
}
