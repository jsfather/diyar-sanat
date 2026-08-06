"use client";

import { useRouter } from "next/navigation";
import type { CountryCode, Region } from "@/lib/representatives";
import type { Locale } from "@/lib/i18n";

export function RepresentativeSelectors({ locale, country, region, regionOptions }: { locale: Locale; country: CountryCode; region?: string; regionOptions: readonly Region[] }) {
  const router = useRouter();
  const go = (nextCountry: CountryCode, nextRegion?: string) => router.push(`/${locale}/representatives/${nextCountry}${nextRegion ? `/${nextRegion}` : ""}`);
  return <div className="representative-selectors">
    <label><span>{locale === "fa" ? "کشور" : "Country"}</span><select value={country} onChange={(event) => go(event.target.value as CountryCode)}><option value="iran">{locale === "fa" ? "ایران" : "Iran"}</option><option value="iraq">{locale === "fa" ? "عراق" : "Iraq"}</option></select></label>
    <label><span>{locale === "fa" ? "استان" : "Province / governorate"}</span><select value={region ?? ""} onChange={(event) => go(country, event.target.value || undefined)}><option value="">{locale === "fa" ? "همه استان‌ها" : "All regions"}</option>{regionOptions.map((item) => <option key={item.slug} value={item.slug}>{locale === "fa" ? item.fa : item.en}</option>)}</select></label>
  </div>;
}
