import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RepresentativeApplicationForm } from "@/components/representative-application-form";
import { isLocale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return { title: lang === "fa" ? "درخواست نمایندگی | دیار صنعت تبریز" : "Representative application | Diyar Sanat Tabriz", description: lang === "fa" ? "فرم پنج‌مرحله‌ای درخواست نمایندگی فروش و توزیع محصولات دیار صنعت." : "Five-step application for Diyar Sanat sales and distribution representation.", alternates: { canonical: `/${lang}/representative-application` } };
}

export default async function RepresentativeApplicationPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const fa = lang === "fa";
  return <main id="main-content" className="application-page">
    <div className="application-hero"><div className="container-wide"><nav aria-label={fa ? "مسیر صفحه" : "Breadcrumb"}><Link href={`/${lang}`}>{fa ? "خانه" : "Home"}</Link><span>/</span><Link href={`/${lang}/representatives`}>{fa ? "نمایندگان" : "Representatives"}</Link><span>/</span><span aria-current="page">{fa ? "درخواست نمایندگی" : "Application"}</span></nav><span className="eyebrow">{fa ? "فرصت همکاری تجاری" : "Business partnership"}</span><h1>{fa ? "درخواست نمایندگی دیار صنعت" : "Apply to represent Diyar Sanat"}</h1><p>{fa ? "در پنج مرحله کوتاه، توانمندی‌ها و محدوده فعالیت خود را معرفی کنید. اطلاعات شما پس از ثبت برای ارزیابی اولیه واحد فروش آماده می‌شود." : "Introduce your capabilities and operating area in five short steps. Your information will be prepared for an initial sales-team review."}</p></div></div>
    <div className="container-wide"><RepresentativeApplicationForm locale={lang} /></div>
  </main>;
}
