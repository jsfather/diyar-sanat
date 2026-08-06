import localFont from "next/font/local";
import type { Locale } from "@/lib/i18n";

const iranYekan = localFont({
  src: "./fonts/IRANYekanXVF.woff2",
  variable: "--font-iran-yekan",
  weight: "100 1000",
  style: "normal",
  display: "swap",
  preload: false,
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

const iranYekanFaNum = localFont({
  src: "./fonts/IRANYekanXVFaNumVF.woff2",
  variable: "--font-iran-yekan",
  weight: "100 1000",
  style: "normal",
  display: "swap",
  preload: false,
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

export function fontClassFor(locale: Locale) {
  return locale === "fa" ? iranYekanFaNum.variable : iranYekan.variable;
}
