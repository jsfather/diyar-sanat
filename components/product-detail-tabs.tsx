"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

export function ProductDetailTabs({ locale, description, category }: { locale: Locale; description: string; category: string }) {
  const fa = locale === "fa"; const [tab, setTab] = useState("description");
  const tabs = [{ id:"description", label:fa?"توضیحات محصول":"Description" },{ id:"applications", label:fa?"کاربردها":"Applications" },{ id:"features", label:fa?"ویژگی‌ها":"Features" },{ id:"technical", label:fa?"مشخصات فنی":"Technical data" },{ id:"downloads", label:fa?"دانلودها":"Downloads" }];
  return <section className="product-tabs"><div className="product-tab-list" role="tablist" aria-label={fa?"اطلاعات محصول":"Product information"}>{tabs.map(item=><button key={item.id} type="button" role="tab" aria-selected={tab===item.id} onClick={()=>setTab(item.id)}>{item.label}</button>)}</div><div className="product-tab-panel" role="tabpanel">
    {tab==="description"?<><h2>{fa?"معرفی محصول":"Product overview"}</h2><p>{description} {fa?"این صفحه برای ارائه اطلاعات دقیق محصول طراحی شده و مشخصات قطعی پس از تأیید دیتاشیت فنی تکمیل می‌شود.":"This page is structured for precise product information; final specifications will be completed after technical-datasheet approval."}</p></>:null}
    {tab==="applications"?<><h2>{fa?"کاربرد پیشنهادی":"Suggested application"}</h2><p>{fa?`برای کاربردهای سازگار با گروه ${category}. انتخاب نهایی باید مطابق دفترچه خودرو و مشخصات فنی تأییدشده محصول انجام شود.`:`For applications compatible with the ${category} category. Final selection must follow the vehicle manual and approved product datasheet.`}</p></>:null}
    {tab==="features"?<><h2>{fa?"رویکرد عملکردی":"Performance approach"}</h2><ul><li>{fa?"تمرکز بر پایداری عملکرد در کاربرد سازگار":"Focused on stable performance in compatible applications"}</li><li>{fa?"طراحی‌شده در چارچوب سبد محصولات خودرویی دیار شیمی":"Designed within the Diyar Shimi automotive portfolio"}</li><li>{fa?"اطلاعات عملکردی نهایی منوط به دیتاشیت تأییدشده":"Final performance claims require an approved datasheet"}</li></ul></>:null}
    {tab==="technical"?<><h2>{fa?"وضعیت اطلاعات فنی":"Technical-data status"}</h2><p>{fa?"ویسکوزیته، استانداردها، سازگاری‌ها و بسته‌بندی‌های قطعی پس از دریافت سند رسمی هر SKU در این بخش منتشر می‌شوند.":"Final viscosity, standards, compatibility, and packaging data will appear here after the official SKU document is supplied."}</p></>:null}
    {tab==="downloads"?<div className="product-download-empty"><span>↓</span><h2>{fa?"فایل تأییدشده‌ای منتشر نشده است":"No approved file is published"}</h2><p>{fa?"کاتالوگ و دیتاشیت پس از تأیید رسمی برای دانلود قرار می‌گیرند.":"Catalogs and datasheets will be available after official approval."}</p></div>:null}
  </div></section>;
}
