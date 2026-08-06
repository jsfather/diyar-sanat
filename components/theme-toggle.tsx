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
  return (
    <button className="icon-button" type="button" onClick={toggleTheme} aria-label={label} title={label}>
      <MoonIcon className="theme-icon theme-icon-light size-5" />
      <SunIcon className="theme-icon theme-icon-dark size-5" />
    </button>
  );
}
