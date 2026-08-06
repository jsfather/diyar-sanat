"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { regions, type CountryCode } from "@/lib/representatives";

type FormData = {
  fullName: string; identityCode: string; mobile: string; email: string;
  country: CountryCode; businessName: string; businessType: string; region: string; city: string; address: string;
  experience: string; distributionArea: string; facilities: string[];
  documentName: string; notes: string; captcha: string; consent: boolean;
};

const initialData: FormData = { fullName: "", identityCode: "", mobile: "", email: "", country: "iran", businessName: "", businessType: "", region: "", city: "", address: "", experience: "", distributionArea: "", facilities: [], documentName: "", notes: "", captcha: "", consent: false };

export function RepresentativeApplicationForm({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [trackingCode, setTrackingCode] = useState("");
  const labels = fa ? ["اطلاعات فردی", "کسب‌وکار", "توانمندی توزیع", "مدارک", "بازبینی"] : ["Personal details", "Business", "Distribution", "Documents", "Review"];
  const regionOptions = useMemo(() => regions[data.country], [data.country]);
  const update = (key: keyof FormData, value: FormData[keyof FormData]) => setData((current) => ({ ...current, [key]: value }));

  function validate(current: number) {
    const required: Record<number, (keyof FormData)[]> = { 1: ["fullName", "identityCode", "mobile"], 2: ["businessName", "businessType", "region", "city", "address"], 3: ["experience", "distributionArea"], 4: ["captcha", "consent"] };
    const nextErrors: Record<string, string> = {};
    for (const key of required[current] ?? []) if (!data[key] || (Array.isArray(data[key]) && !data[key].length)) nextErrors[key] = fa ? "تکمیل این فیلد الزامی است." : "This field is required.";
    if (current === 1 && data.mobile && !/^[+\d][\d\s-]{7,}$/.test(data.mobile)) nextErrors.mobile = fa ? "شماره تماس معتبر وارد کنید." : "Enter a valid phone number.";
    if (current === 4 && data.captcha && data.captcha !== "7") nextErrors.captcha = fa ? "پاسخ امنیتی صحیح نیست." : "The security answer is incorrect.";
    setErrors(nextErrors);
    return !Object.keys(nextErrors).length;
  }

  function next() { if (validate(step)) { setStep((value) => Math.min(5, value + 1)); setErrors({}); window.scrollTo({ top: 260, behavior: "smooth" }); } }
  function back() { setStep((value) => Math.max(1, value - 1)); setErrors({}); }
  function submit() { if (!validate(4)) return; const code = `DST-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`; setTrackingCode(code); setStep(6); }
  const field = (name: keyof FormData, label: string, type = "text", placeholder = "") => <label className="application-field"><span>{label}</span><input type={type} value={String(data[name])} placeholder={placeholder} onChange={(event) => update(name, event.target.value)} aria-invalid={Boolean(errors[name])} />{errors[name] ? <small role="alert">{errors[name]}</small> : null}</label>;

  if (step === 6) return <section className="application-result" aria-live="polite"><div className="application-success-mark" aria-hidden="true">✓</div><span>{fa ? "درخواست با موفقیت آماده شد" : "Application prepared successfully"}</span><h2>{fa ? "از درخواست همکاری شما متشکریم" : "Thank you for your application"}</h2><p>{fa ? "کد پیگیری زیر را ذخیره کنید. پس از اتصال سامانه به پایگاه داده، درخواست‌ها با همین ساختار برای بررسی واحد فروش ثبت خواهند شد." : "Save the tracking code below. Once storage is connected, applications will be registered with this structure for sales review."}</p><div className="tracking-code"><small>{fa ? "کد پیگیری" : "Tracking code"}</small><strong dir="ltr">{trackingCode}</strong></div><button className="button button-secondary" type="button" onClick={() => { setData(initialData); setStep(1); }}>{fa ? "ثبت درخواست جدید" : "New application"}</button></section>;

  return <section className="application-form-shell">
    <ol className="application-steps" aria-label={fa ? "مراحل درخواست" : "Application steps"}>{labels.map((label, index) => <li key={label} className={step === index + 1 ? "active" : step > index + 1 ? "done" : ""}><span>{step > index + 1 ? "✓" : index + 1}</span><small>{label}</small></li>)}</ol>
    <div className="application-panel">
      <header><span>{fa ? `مرحله ${step} از ۵` : `Step ${step} of 5`}</span><h2>{labels[step - 1]}</h2><p>{fa ? "اطلاعات را دقیق وارد کنید؛ موارد ستاره‌دار برای ادامه ضروری‌اند." : "Enter accurate information; required fields must be completed."}</p></header>
      {step === 1 ? <div className="application-grid">{field("fullName", fa ? "نام و نام خانوادگی *" : "Full name *")}{field("identityCode", fa ? "کد ملی / شماره گذرنامه *" : "National ID / passport *")}{field("mobile", fa ? "شماره همراه *" : "Mobile number *", "tel", "+98")}{field("email", fa ? "ایمیل" : "Email", "email")}</div> : null}
      {step === 2 ? <div className="application-grid">{field("businessName", fa ? "نام مجموعه *" : "Business name *")}{field("businessType", fa ? "نوع فعالیت *" : "Business type *", "text", fa ? "فروشگاه، پخش، عمده‌فروشی..." : "Retail, distribution, wholesale...")}<label className="application-field"><span>{fa ? "کشور *" : "Country *"}</span><select value={data.country} onChange={(event) => { update("country", event.target.value as CountryCode); update("region", ""); }}><option value="iran">{fa ? "ایران" : "Iran"}</option><option value="iraq">{fa ? "عراق" : "Iraq"}</option></select></label><label className="application-field"><span>{fa ? "استان *" : "Region *"}</span><select value={data.region} onChange={(event) => update("region", event.target.value)} aria-invalid={Boolean(errors.region)}><option value="">{fa ? "انتخاب استان" : "Choose a region"}</option>{regionOptions.map((region) => <option key={region.slug} value={region.slug}>{fa ? region.fa : region.en}</option>)}</select>{errors.region ? <small role="alert">{errors.region}</small> : null}</label>{field("city", fa ? "شهر *" : "City *")}<label className="application-field application-field-wide"><span>{fa ? "نشانی محل فعالیت *" : "Business address *"}</span><textarea rows={3} value={data.address} onChange={(event) => update("address", event.target.value)} aria-invalid={Boolean(errors.address)} />{errors.address ? <small role="alert">{errors.address}</small> : null}</label></div> : null}
      {step === 3 ? <div className="application-grid"><label className="application-field application-field-wide"><span>{fa ? "سابقه فعالیت و برندهای مرتبط *" : "Experience and related brands *"}</span><textarea rows={4} value={data.experience} onChange={(event) => update("experience", event.target.value)} aria-invalid={Boolean(errors.experience)} />{errors.experience ? <small role="alert">{errors.experience}</small> : null}</label><label className="application-field application-field-wide"><span>{fa ? "محدوده فعلی یا پیشنهادی توزیع *" : "Current or proposed distribution area *"}</span><textarea rows={3} value={data.distributionArea} onChange={(event) => update("distributionArea", event.target.value)} aria-invalid={Boolean(errors.distributionArea)} />{errors.distributionArea ? <small role="alert">{errors.distributionArea}</small> : null}</label><fieldset className="application-facilities"><legend>{fa ? "امکانات موجود" : "Available facilities"}</legend>{[["warehouse", fa ? "انبار" : "Warehouse"], ["vehicle", fa ? "ناوگان توزیع" : "Delivery vehicles"], ["sales", fa ? "تیم فروش" : "Sales team"], ["showroom", fa ? "فروشگاه یا نمایشگاه" : "Store or showroom"]].map(([value, label]) => <label key={value}><input type="checkbox" checked={data.facilities.includes(value)} onChange={(event) => update("facilities", event.target.checked ? [...data.facilities, value] : data.facilities.filter((item) => item !== value))} /><span>{label}</span></label>)}</fieldset></div> : null}
      {step === 4 ? <div className="application-grid"><label className="application-upload application-field-wide"><input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(event) => update("documentName", event.target.files?.[0]?.name ?? "")} /><span>＋</span><strong>{data.documentName || (fa ? "بارگذاری مجوز یا معرفی‌نامه" : "Upload license or introduction")}</strong><small>{fa ? "PDF، JPG یا PNG — حداکثر ۱۰ مگابایت" : "PDF, JPG or PNG — up to 10 MB"}</small></label><label className="application-field application-field-wide"><span>{fa ? "توضیحات تکمیلی" : "Additional notes"}</span><textarea rows={4} value={data.notes} onChange={(event) => update("notes", event.target.value)} /></label>{field("captcha", fa ? "پرسش امنیتی: حاصل ۳ + ۴ *" : "Security check: 3 + 4 *", "text", fa ? "پاسخ" : "Answer")}<label className="application-consent application-field-wide"><input type="checkbox" checked={data.consent} onChange={(event) => update("consent", event.target.checked)} /><span>{fa ? "صحت اطلاعات واردشده را تأیید می‌کنم و با بررسی آن توسط دیار صنعت موافقم. *" : "I confirm the information is accurate and consent to its review by Diyar Sanat. *"}</span>{errors.consent ? <small role="alert">{errors.consent}</small> : null}</label></div> : null}
      {step === 5 ? <div className="application-review"><Review title={labels[0]} onEdit={() => setStep(1)} rows={[[fa ? "نام" : "Name", data.fullName], [fa ? "تماس" : "Contact", data.mobile], [fa ? "ایمیل" : "Email", data.email || "—"]]} /><Review title={labels[1]} onEdit={() => setStep(2)} rows={[[fa ? "مجموعه" : "Business", data.businessName], [fa ? "محل فعالیت" : "Location", `${data.city}، ${regionOptions.find((item) => item.slug === data.region)?.[fa ? "fa" : "en"] ?? ""}`], [fa ? "نشانی" : "Address", data.address]]} /><Review title={labels[2]} onEdit={() => setStep(3)} rows={[[fa ? "محدوده توزیع" : "Distribution", data.distributionArea], [fa ? "امکانات" : "Facilities", data.facilities.length ? data.facilities.join("، ") : "—"]]} /></div> : null}
      <footer>{step > 1 ? <button type="button" className="button button-secondary" onClick={back}>{fa ? "مرحله قبل" : "Back"}</button> : <span />}{step < 5 ? <button type="button" className="button button-primary" onClick={next}>{fa ? "ادامه" : "Continue"}</button> : <button type="button" className="button button-primary" onClick={submit}>{fa ? "تأیید و ارسال درخواست" : "Confirm and submit"}</button>}</footer>
    </div>
  </section>;
}

function Review({ title, rows, onEdit }: { title: string; rows: string[][]; onEdit: () => void }) { return <section><header><h3>{title}</h3><button type="button" onClick={onEdit}>ویرایش</button></header>{rows.map(([label, value]) => <dl key={label}><dt>{label}</dt><dd>{value}</dd></dl>)}</section>; }
