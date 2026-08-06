"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronIcon } from "@/components/icons";

export function HeaderNavigation({ items, label }: { items: readonly (readonly [string, string])[]; label: string }) {
  const pathname = usePathname();
  const locale = items[0]?.[1].split("/")[1] === "en" ? "en" : "fa";
  const productGroups = locale === "fa"
    ? [["روغن موتور", "روانکاری و حفاظت موتور", "engine-oil"], ["واسکازین", "انتقال قدرت و چرخ‌دنده", "gear-oil"], ["مایع روغن ترمز", "عملکرد پایدار سامانه ترمز", "brake-fluid"], ["ضدیخ و ضدجوش", "محافظت از مدار خنک‌کاری", "antifreeze"]]
    : [["Engine oil", "Engine lubrication and protection", "engine-oil"], ["Gear oil", "Transmission and gear protection", "gear-oil"], ["Brake fluid", "Stable braking-system performance", "brake-fluid"], ["Antifreeze", "Cooling-system protection", "antifreeze"]];
  const isActive = (href: string) => {
    const route = href.split("#")[0];
    if (href.includes("#")) return false;
    if (route.split("/").filter(Boolean).length === 1) return pathname === route;
    return pathname === route || pathname.startsWith(`${route}/`);
  };
  return <nav className="desktop-nav" aria-label={label}>
    {items.map(([text, href], index) => index === 2 ? <div className="desktop-nav-item has-mega" key={href}><Link href={href} className={isActive(href) ? "active" : undefined} aria-current={isActive(href) ? "page" : undefined}><span>{text}</span><ChevronIcon className="size-3 rotate-90" /></Link><div className="products-mega-menu"><div className="mega-menu-intro"><small>{locale === "fa" ? "محصولات دیار شیمی" : "Diyar Shimi products"}</small><strong>{locale === "fa" ? "راهکارهای تخصصی برای عملکرد بهتر" : "Specialist solutions for better performance"}</strong><Link href={`/${locale}/products`}>{locale === "fa" ? "مشاهده آرشیو محصولات" : "View product archive"}<ChevronIcon className="directional-icon size-4" /></Link></div><div className="mega-product-groups">{productGroups.map(([title, description, slug], groupIndex) => <Link key={slug} href={`/${locale}/products#${slug}`}><span>{String(groupIndex + 1).padStart(2,"0")}</span><div><strong>{title}</strong><small>{description}</small></div><ChevronIcon className="directional-icon size-4" /></Link>)}</div></div></div> : <Link key={href} href={href} className={isActive(href) ? "active" : undefined} aria-current={isActive(href) ? "page" : undefined}><span>{text}</span></Link>)}
  </nav>;
}
