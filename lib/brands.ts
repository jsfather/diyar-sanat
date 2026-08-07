import type { Locale } from "@/lib/i18n";

export const brandCodes = ["hafman", "kentoil", "diyar-shimi"] as const;
export type BrandCode = (typeof brandCodes)[number];
export const brands = [
  { code:"hafman" as const, latin:"HAFMAN", fa:"هافمن", en:"Hafman", tone:"red" },
  { code:"kentoil" as const, latin:"Kentoil", fa:"کینت اویل", en:"Kentoil", tone:"amber" },
  { code:"diyar-shimi" as const, latin:"Dyar Shimi", fa:"دیار شیمی", en:"Dyar Shimi", tone:"blue" },
];
export function brandName(code:BrandCode,locale:Locale){const brand=brands.find(item=>item.code===code);return locale==="fa"?brand?.fa??code:brand?.en??code}
export function isBrandCode(value:string|undefined):value is BrandCode{return brandCodes.includes(value as BrandCode)}
