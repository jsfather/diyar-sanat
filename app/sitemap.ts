import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-07T00:00:00+03:30");
  return locales.flatMap((locale) => [
    { url: `https://diyarsanat.com/${locale}`, lastModified, changeFrequency: "weekly" as const, priority: 1 },
    { url: `https://diyarsanat.com/${locale}/products`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `https://diyarsanat.com/${locale}/products/advanced-engine-oil-10w40`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `https://diyarsanat.com/${locale}/about`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `https://diyarsanat.com/${locale}/representatives`, lastModified, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `https://diyarsanat.com/${locale}/representative-application`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `https://diyarsanat.com/${locale}/contact`, lastModified, changeFrequency: "yearly" as const, priority: 0.7 },
    { url: `https://diyarsanat.com/${locale}/careers`, lastModified, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `https://diyarsanat.com/${locale}/careers/general-application`, lastModified, changeFrequency: "monthly" as const, priority: 0.55 },
    { url: `https://diyarsanat.com/${locale}/international-cooperation`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `https://diyarsanat.com/${locale}/media`, lastModified, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `https://diyarsanat.com/${locale}/media/choosing-the-right-engine-oil`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `https://diyarsanat.com/${locale}/representatives/iran/east-azerbaijan`, lastModified, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `https://diyarsanat.com/${locale}/faq`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `https://diyarsanat.com/${locale}/buying-guide`, lastModified, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `https://diyarsanat.com/${locale}/request-tracking`, lastModified, changeFrequency: "monthly" as const, priority: 0.55 },
  ]);
}
