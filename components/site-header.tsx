import Link from "next/link";
import { Suspense } from "react";
import { BrandMark } from "@/components/brand-mark";
import { MenuIcon } from "@/components/icons";
import { HeaderNavigation } from "@/components/header-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteSearch } from "@/components/site-search";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const nav = [
    [dict.navigation.home, `/${locale}`],
    [dict.navigation.about, `/${locale}/about`],
    [dict.navigation.products, `/${locale}/products`],
    [dict.navigation.representatives, `/${locale}/representatives`],
    [dict.navigation.certificates, `/${locale}#certificates`],
    [locale === "fa" ? "همکاری بین‌المللی" : "International", `/${locale}/international-cooperation`],
    [dict.navigation.careers, `/${locale}/careers`],
    [dict.navigation.contact, `/${locale}/contact`],
  ] as const;

  return (
    <header className="site-header">
      <div className="container-wide header-main">
        <BrandMark locale={locale} />
        <Suspense fallback={<nav className="desktop-nav" aria-hidden="true" />}><HeaderNavigation items={nav} label={locale === "fa" ? "ناوبری اصلی" : "Primary navigation"} /></Suspense>
        <div className="header-tools">
          <details className="mobile-menu">
            <summary className="icon-button" aria-label={locale === "fa" ? "باز کردن منو" : "Open menu"}>
              <MenuIcon className="size-6" />
            </summary>
            <div className="mobile-menu-panel" dir={locale === "fa" ? "rtl" : "ltr"}>
              <BrandMark locale={locale} compact />
              <nav aria-label={locale === "fa" ? "منوی موبایل" : "Mobile menu"}>
                {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              </nav>
            </div>
          </details>
          <nav className="language-switcher" aria-label={locale === "fa" ? "انتخاب زبان" : "Choose language"} dir="ltr">
            <Link href="/fa" hrefLang="fa" lang="fa" className={locale === "fa" ? "active" : undefined} aria-current={locale === "fa" ? "page" : undefined}>FA</Link>
            <i aria-hidden="true" />
            <Link href="/en" hrefLang="en" lang="en" className={locale === "en" ? "active" : undefined} aria-current={locale === "en" ? "page" : undefined}>EN</Link>
          </nav>
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
