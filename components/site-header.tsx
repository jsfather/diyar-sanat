import Link from "next/link";
import { Suspense } from "react";
import { BrandMark } from "@/components/brand-mark";
import { HeaderNavigation } from "@/components/header-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteSearch } from "@/components/site-search";
import { MobileMenu } from "@/components/mobile-menu";
import { LocaleSwitcher } from "@/components/locale-switcher";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { getHeaderNavigation } from "@/lib/navigation";

export async function SiteHeader({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const nav = await getHeaderNavigation(locale);

  return (
    <header className="site-header">
      <div className="container-wide header-main">
        <BrandMark locale={locale} />
        <Suspense fallback={<nav className="desktop-nav" aria-hidden="true" />}><HeaderNavigation items={nav} label={locale === "fa" ? "ناوبری اصلی" : "Primary navigation"} /></Suspense>
        <div className="header-tools">
          <MobileMenu locale={locale} items={nav} />
          <LocaleSwitcher locale={locale} />
          <ThemeToggle lightLabel={dict.theme.light} darkLabel={dict.theme.dark} />
          <SiteSearch locale={locale} />
          <Link
            className="representative-button"
            href={`/${locale}/representative-application`}
            dir={locale === "fa" ? "rtl" : "ltr"}
          >
            {dict.actions.representative}
          </Link>
        </div>
      </div>
    </header>
  );
}
