import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { ChevronIcon, MenuIcon, SearchIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const switchLocale = locale === "fa" ? "en" : "fa";
  const nav = [
    [dict.navigation.home, `/${locale}`],
    [dict.navigation.about, `/${locale}#factory`],
    [dict.navigation.products, `/${locale}/products`],
    [dict.navigation.representatives, `/${locale}#representatives`],
    [dict.navigation.certificates, `/${locale}#certificates`],
    [dict.navigation.media, `/${locale}#media`],
    [dict.navigation.contact, `/${locale}#contact`],
  ] as const;

  return (
    <header className="site-header">
      <div className="container-wide header-main">
        <BrandMark locale={locale} />
        <nav className="desktop-nav" aria-label={locale === "fa" ? "ناوبری اصلی" : "Primary navigation"}>
          {nav.map(([label, href], index) => (
            <Link key={href} href={href} className={index === 0 ? "active" : undefined}>
              {label}
              {index === 2 ? <ChevronIcon className="size-3 rotate-90" /> : null}
            </Link>
          ))}
        </nav>
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
          <Link
            className="language-switch"
            href={`/${switchLocale}`}
            hrefLang={switchLocale}
            lang={switchLocale}
            dir={switchLocale === "fa" ? "rtl" : "ltr"}
          >
            {dict.languageLabel}
          </Link>
          <ThemeToggle lightLabel={dict.theme.light} darkLabel={dict.theme.dark} />
          <button className="icon-button desktop-tool" aria-label={locale === "fa" ? "جست‌وجو" : "Search"}>
            <SearchIcon className="size-5" />
          </button>
          <Link
            className="representative-button"
            href={`/${locale}#representatives`}
            dir={locale === "fa" ? "rtl" : "ltr"}
          >
            {dict.actions.representative}
          </Link>
        </div>
      </div>
    </header>
  );
}
