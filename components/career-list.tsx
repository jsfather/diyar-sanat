"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

export function CareerList({ locale }: { locale: Locale }) {
  const fa = locale === "fa"; const [department, setDepartment] = useState("all"); const [type, setType] = useState("all");
  return <section className="career-browser" aria-labelledby="career-list-title"><header><div><span>{fa ? "موقعیت‌های فعال" : "Open roles"}</span><h2 id="career-list-title">{fa ? "فرصت‌های همکاری" : "Career opportunities"}</h2></div><div className="career-filters"><label><span>{fa ? "واحد" : "Department"}</span><select value={department} onChange={(event) => setDepartment(event.target.value)}><option value="all">{fa ? "همه واحدها" : "All departments"}</option><option value="sales">{fa ? "فروش" : "Sales"}</option><option value="production">{fa ? "تولید" : "Production"}</option><option value="quality">{fa ? "کنترل کیفیت" : "Quality"}</option></select></label><label><span>{fa ? "نوع همکاری" : "Work type"}</span><select value={type} onChange={(event) => setType(event.target.value)}><option value="all">{fa ? "همه انواع" : "All types"}</option><option value="full-time">{fa ? "تمام‌وقت" : "Full-time"}</option><option value="part-time">{fa ? "پاره‌وقت" : "Part-time"}</option><option value="internship">{fa ? "کارآموزی" : "Internship"}</option></select></label></div></header><div className="career-empty"><span>◎</span><h3>{fa ? "در حال حاضر موقعیت فعالی منتشر نشده است" : "No active position is currently published"}</h3><p>{fa ? "فیلترهای انتخاب‌شده حفظ می‌شوند؛ پس از تأیید و انتشار موقعیت‌های واقعی، کارت هر فرصت و صفحه جزئیات آن در همین بخش نمایش داده می‌شود." : "Your filters are ready; approved openings and their detail pages will appear here once published."}</p></div></section>;
}
