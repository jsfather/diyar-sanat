import Link from "next/link";
import { GridIcon, HomeIcon, MapPinIcon, PhoneIcon, UserIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

export function MobileNavigation({ locale }: { locale: Locale }) {
  const { navigation } = getDictionary(locale);
  const items = [
    [navigation.representatives, `/${locale}/representatives`, MapPinIcon, false],
    [navigation.products, `/${locale}/products`, GridIcon, false],
    [navigation.home, `/${locale}`, HomeIcon, true],
    [navigation.contact, `/${locale}/contact`, PhoneIcon, false],
    [locale === "fa" ? "حساب کاربری" : "Account", `/${locale}#account`, UserIcon, false],
  ] as const;

  return (
    <nav className="mobile-bottom-nav" aria-label={locale === "fa" ? "دسترسی سریع" : "Quick navigation"}>
      {items.map(([label, href, Icon, active]) => (
        <Link key={href} href={href} className={active ? "active" : undefined}>
          <span><Icon className="size-6" /></span>
          <small>{label}</small>
        </Link>
      ))}
    </nav>
  );
}
