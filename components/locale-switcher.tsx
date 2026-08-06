"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname(); const nextLocale = locale === "fa" ? "en" : "fa";
  const href = pathname.replace(/^\/(fa|en)(?=\/|$)/, `/${nextLocale}`);
  return <Link className="locale-switcher" href={href || `/${nextLocale}`} hrefLang={nextLocale} lang={nextLocale} aria-label={locale === "fa" ? "تغییر زبان به انگلیسی" : "Switch language to Persian"}><span className="locale-globe" aria-hidden="true">◎</span><span className="locale-current"><small>{locale === "fa" ? "زبان" : "Language"}</small><strong>{locale === "fa" ? "فارسی" : "English"}</strong></span><b dir="ltr">{nextLocale.toUpperCase()}</b></Link>;
}
