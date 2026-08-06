"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GridIcon, HomeIcon, InfoIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

export function MobileNavigation({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const { navigation } = getDictionary(locale);
  const items = [
    [navigation.representatives, `/${locale}/representatives`, MapPinIcon],
    [navigation.products, `/${locale}/products`, GridIcon],
    [navigation.home, `/${locale}`, HomeIcon],
    [navigation.contact, `/${locale}/contact`, PhoneIcon],
    [navigation.about, `/${locale}/about`, InfoIcon],
  ] as const;

  return (
    <nav className="mobile-bottom-nav" aria-label={locale === "fa" ? "دسترسی سریع" : "Quick navigation"}>
      {items.map(([label, href, Icon]) => {
        const route = href.split("#")[0];
        const active = route === `/${locale}` ? pathname === route : pathname === route || pathname.startsWith(`${route}/`);
        return <Link key={href} href={href} className={active ? "active" : undefined} aria-current={active ? "page" : undefined}>
          <span><Icon className="size-6" /></span>
          <small>{label}</small>
        </Link>;
      })}
    </nav>
  );
}
