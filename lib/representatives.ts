import type { Locale } from "@/lib/i18n";

export type CountryCode = "iran" | "iraq";
export type Region = { slug: string; fa: string; en: string; x: number; y: number };
export type Representative = {
  id: string;
  country: CountryCode;
  region: string;
  cityFa: string;
  cityEn: string;
  businessFa: string;
  businessEn: string;
  managerFa: string;
  managerEn: string;
  addressFa: string;
  addressEn: string;
  phone: string;
  whatsapp?: string;
  directions?: string;
};

export const regions: Record<CountryCode, readonly Region[]> = {
  iran: [
    ["west-azerbaijan","آذربایجان غربی","West Azerbaijan",102,104],["east-azerbaijan","آذربایجان شرقی","East Azerbaijan",142,92],["ardabil","اردبیل","Ardabil",183,92],["gilan","گیلان","Gilan",225,105],["mazandaran","مازندران","Mazandaran",282,115],["golestan","گلستان","Golestan",342,122],["north-khorasan","خراسان شمالی","North Khorasan",397,132],["razavi-khorasan","خراسان رضوی","Razavi Khorasan",427,190],["south-khorasan","خراسان جنوبی","South Khorasan",405,284],["sistan-baluchestan","سیستان و بلوچستان","Sistan and Baluchestan",430,385],["hormozgan","هرمزگان","Hormozgan",330,425],["kerman","کرمان","Kerman",344,340],["yazd","یزد","Yazd",302,283],["isfahan","اصفهان","Isfahan",250,264],["fars","فارس","Fars",260,354],["bushehr","بوشهر","Bushehr",205,367],["khuzestan","خوزستان","Khuzestan",153,325],["ilam","ایلام","Ilam",112,275],["kermanshah","کرمانشاه","Kermanshah",112,225],["kurdistan","کردستان","Kurdistan",132,180],["zanjan","زنجان","Zanjan",175,155],["qazvin","قزوین","Qazvin",212,158],["alborz","البرز","Alborz",242,168],["tehran","تهران","Tehran",268,177],["semnan","سمنان","Semnan",330,180],["qom","قم","Qom",253,207],["markazi","مرکزی","Markazi",213,220],["hamadan","همدان","Hamadan",168,220],["lorestan","لرستان","Lorestan",168,270],["chaharmahal-bakhtiari","چهارمحال و بختیاری","Chaharmahal and Bakhtiari",215,292],["kohgiluyeh-boyer-ahmad","کهگیلویه و بویراحمد","Kohgiluyeh and Boyer-Ahmad",215,332],
  ].map(([slug,fa,en,x,y]) => ({ slug: String(slug), fa: String(fa), en: String(en), x: Number(x), y: Number(y) })),
  iraq: [
    ["dohuk","دهوک","Duhok",220,72],["erbil","اربیل","Erbil",275,105],["sulaymaniyah","سلیمانیه","Sulaymaniyah",330,135],["nineveh","نینوا","Nineveh",205,135],["kirkuk","کرکوک","Kirkuk",278,160],["saladin","صلاح‌الدین","Saladin",250,205],["diyala","دیاله","Diyala",330,220],["anbar","الانبار","Al Anbar",150,245],["baghdad","بغداد","Baghdad",277,255],["karbala","کربلا","Karbala",240,285],["babylon","بابل","Babylon",275,292],["wasit","واسط","Wasit",335,290],["najaf","نجف","Najaf",242,330],["qadisiyyah","قادسیه","Al-Qadisiyyah",285,335],["maysan","میسان","Maysan",365,340],["dhi-qar","ذی‌قار","Dhi Qar",325,380],["muthanna","مثنی","Al Muthanna",270,405],["basra","بصره","Basra",365,420],["halabja","حلبچه","Halabja",355,165],
  ].map(([slug,fa,en,x,y]) => ({ slug: String(slug), fa: String(fa), en: String(en), x: Number(x), y: Number(y) })),
};

// Deliberately empty until employer-approved representative records are supplied.
export const representatives: readonly Representative[] = [];

export function isCountry(value: string | undefined): value is CountryCode { return value === "iran" || value === "iraq"; }
export function regionName(region: Region, locale: Locale) { return locale === "fa" ? region.fa : region.en; }
export function findRegion(country: CountryCode, slug?: string) { return regions[country].find((region) => region.slug === slug); }
