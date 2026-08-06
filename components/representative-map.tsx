import Link from "next/link";
import type { CountryCode, Region } from "@/lib/representatives";
import type { Locale } from "@/lib/i18n";
import iranProvincePaths from "@/lib/iran-provinces-data";
import iraqGovernoratePaths from "@/lib/iraq-governorates-data";

const iranPathSlugs: Record<string, string> = {
  alborz:"alborz",ardabil:"ardabil","azerbaijan-east":"east-azerbaijan","azerbaijan-west":"west-azerbaijan",bushehr:"bushehr","chahar-mahaal-bakhtiari":"chaharmahal-bakhtiari",fars:"fars",gilan:"gilan",golestan:"golestan",hamadan:"hamadan",hormozgan:"hormozgan",ilam:"ilam",isfahan:"isfahan",kerman:"kerman",kermanshah:"kermanshah","khorasan-north":"north-khorasan","khorasan-razavi":"razavi-khorasan","khorasan-south":"south-khorasan",khuzestan:"khuzestan","kohgiluyeh-boyer-ahmad":"kohgiluyeh-boyer-ahmad",kurdistan:"kurdistan",lorestan:"lorestan",markazi:"markazi",mazandaran:"mazandaran",qazvin:"qazvin",qom:"qom",semnan:"semnan","sistan-baluchestan":"sistan-baluchestan",tehran:"tehran",yazd:"yazd",zanjan:"zanjan",
};

export function RepresentativeMap({ locale, country, regions, active }: { locale: Locale; country: CountryCode; regions: readonly Region[]; active?: string }) {
  if (country === "iran") return <div className="representative-map-shell">
    <svg className="representative-map iran-province-map" viewBox="20 0 970 960" role="img" aria-label={locale === "fa" ? "نقشه تعاملی استان‌های ایران" : "Interactive map of Iran provinces"}>
      <g>{iranProvincePaths.map((province) => {
        const slug = iranPathSlugs[province.className];
        const region = regions.find((item) => item.slug === slug);
        if (!slug || !region) return null;
        return <Link key={slug} href={`/${locale}/representatives/iran/${slug}`} aria-label={locale === "fa" ? region.fa : region.en} className={active === slug ? "province-path active" : "province-path"}>
          <path d={province.d} vectorEffect="non-scaling-stroke" /><title>{locale === "fa" ? region.fa : region.en}</title>
        </Link>;
      })}</g>
    </svg>
    <p>{locale === "fa" ? "برای مشاهده نمایندگان، خود استان را روی نقشه انتخاب کنید." : "Select a province directly on the map."}</p>
  </div>;
  return <div className="representative-map-shell">
    <svg className="representative-map iraq-governorate-map" viewBox="0 0 1000 1000" role="img" aria-label={locale === "fa" ? "نقشه تعاملی استان‌های عراق" : "Interactive map of Iraq governorates"}>
      <g>{iraqGovernoratePaths.map((governorate) => {
        const region = regions.find((item) => item.slug === governorate.slug);
        if (!region) return null;
        return <Link key={governorate.slug} href={`/${locale}/representatives/iraq/${governorate.slug}`} aria-label={locale === "fa" ? region.fa : region.en} className={active === governorate.slug ? "province-path active" : "province-path"}>
          <path d={governorate.d} vectorEffect="non-scaling-stroke" /><title>{locale === "fa" ? region.fa : region.en}</title>
        </Link>;
      })}</g>
    </svg>
    <p>{locale === "fa" ? "استان را مستقیماً روی نقشه انتخاب کنید؛ حلبچه از انتخاب‌گر استان در دسترس است." : "Select a governorate directly on the map; Halabja is available in the region selector."}</p>
  </div>;
}
