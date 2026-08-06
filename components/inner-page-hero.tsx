import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function InnerPageHero({ locale, eyebrow, title, description, current }: { locale: Locale; eyebrow: string; title: string; description: string; current: string }) {
  const fa = locale === "fa";
  return <header className="inner-page-hero"><div className="container-wide"><nav aria-label={fa ? "مسیر صفحه" : "Breadcrumb"}><Link href={`/${locale}`}>{fa ? "خانه" : "Home"}</Link><span>/</span><span aria-current="page">{current}</span></nav><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div></header>;
}
