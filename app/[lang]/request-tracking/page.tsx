import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerPageHero } from "@/components/inner-page-hero";
import { TrackingLookup } from "@/components/support-tools";
import { isLocale } from "@/lib/i18n";

type Props={params:Promise<{lang:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{const{lang}=await params;if(!isLocale(lang))return{};const fa=lang==="fa";return{title:fa?"پیگیری درخواست | دیار صنعت تبریز":"Track a request | Diyar Sanat Tabriz",description:fa?"راهنمای پیگیری درخواست‌های نمایندگی، تماس و همکاری با کد پیگیری دیار صنعت.":"Guidance for tracking representative, contact, and cooperation requests using a Diyar Sanat tracking code.",robots:{index:true,follow:true},alternates:{canonical:`/${lang}/request-tracking`,languages:{fa:"/fa/request-tracking",en:"/en/request-tracking"}}};}
export default async function RequestTrackingPage({params}:Props){const{lang}=await params;if(!isLocale(lang))notFound();const fa=lang==="fa";return <main id="main-content" className="support-page"><InnerPageHero locale={lang} current={fa?"پیگیری درخواست":"Request tracking"} eyebrow={fa?"وضعیت درخواست":"Request status"} title={fa?"درخواست خود را با کد پیگیری دنبال کنید":"Follow your request with its tracking code"} description={fa?"کد پیگیری و شماره موبایل ثبت‌شده را آماده داشته باشید. اطلاعات وضعیت فقط از مسیرهای رسمی شرکت ارائه می‌شود.":"Have your tracking code and registered mobile number ready. Status information is provided only through official channels."}/><TrackingLookup locale={lang}/></main>}
