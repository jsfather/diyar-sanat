import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-06T00:00:00+03:30");
  return locales.flatMap((locale) => [
    { url: `https://diyarsanat.com/${locale}`, lastModified, changeFrequency: "weekly" as const, priority: 1 },
    { url: `https://diyarsanat.com/${locale}/products`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
  ]);
}
