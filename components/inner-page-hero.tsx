import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getManagedTranslations } from "@/lib/site-content";

const namespaces:Record<string,string>={"درباره ما":"about","About us":"about","تماس با ما":"contact",Contact:"contact","پرسش‌های متداول":"faq",FAQ:"faq","راهنمای خرید":"buying-guide","Buying guide":"buying-guide","همکاری بین‌المللی":"international","International cooperation":"international"};
export async function InnerPageHero({ locale, eyebrow, title, description, current }: { locale: Locale; eyebrow: string; title: string; description: string; current: string }) {
  const fa = locale === "fa";
  const managed=namespaces[current]?await getManagedTranslations(locale,namespaces[current]):{};
  const t=(key:string,fallback:string)=>managed[key]?.trim()||fallback;
  return <header className="inner-page-hero"><div className="container-wide"><nav aria-label={fa ? "مسیر صفحه" : "Breadcrumb"}><Link href={`/${locale}`}>{fa ? "خانه" : "Home"}</Link><span>/</span><span aria-current="page">{t("hero.current",current)}</span></nav><span className="eyebrow">{t("hero.eyebrow",eyebrow)}</span><h1>{t("hero.title",title)}</h1><p>{t("hero.description",description)}</p></div></header>;
}
