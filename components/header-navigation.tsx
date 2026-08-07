"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronIcon } from "@/components/icons";
import { brands } from "@/lib/brands";

export function HeaderNavigation({ items, label }: { items: readonly (readonly [string, string])[]; label: string }) {
  const pathname = usePathname();
  const locale = items[0]?.[1].split("/")[1] === "en" ? "en" : "fa";
  const brandItems = brands.map((brand) => ({ ...brand, name: locale === "fa" ? brand.fa : brand.en }));
  const isActive = (href: string) => {
    const route = href.split("#")[0];
    if (href.includes("#")) return false;
    if (route.split("/").filter(Boolean).length === 1) return pathname === route;
    return pathname === route || pathname.startsWith(`${route}/`);
  };

  return (
    <nav className="desktop-nav" aria-label={label}>
      {items.map(([text, href]) => href.endsWith("/products") ? (
        <div className="desktop-nav-item has-mega" key={href}>
          <Link href={href} className={isActive(href) ? "active" : undefined} aria-current={isActive(href) ? "page" : undefined}>
            <span>{text}</span><ChevronIcon className="size-3 rotate-90" />
          </Link>
          <div className="products-mega-menu">
            <div className="mega-menu-intro">
              <small>{locale === "fa" ? "سبد برندهای مجموعه" : "Our brand portfolio"}</small>
              <strong>{locale === "fa" ? "سه برند، یک مسیر تولید" : "Three brands, one production vision"}</strong>
              <Link href={`/${locale}/products`}>{locale === "fa" ? "مشاهده همه محصولات" : "View all products"}<ChevronIcon className="directional-icon size-4" /></Link>
            </div>
            <div className="mega-brand-list">
              {brandItems.map((brand) => (
                <Link className={`brand-${brand.code}`} key={brand.code} href={`/${locale}/products?brand=${brand.code}`}>
                  <span className="mega-brand-wordmark" dir="ltr">{brand.latin}</span>
                  <div>
                    <strong>{brand.name}</strong>
                    <small>{brand.code === "diyar-shimi" ? (locale === "fa" ? "مشاهده محصولات منتشرشده" : "View published products") : (locale === "fa" ? "معرفی محصولات به‌زودی" : "Products coming soon")}</small>
                  </div>
                  <ChevronIcon className="directional-icon size-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Link key={href} href={href} className={isActive(href) ? "active" : undefined} aria-current={isActive(href) ? "page" : undefined}><span>{text}</span></Link>
      ))}
    </nav>
  );
}
