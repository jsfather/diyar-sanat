import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MobileNavigation } from "@/components/mobile-navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { directionFor, getDictionary, isLocale, locales } from "@/lib/i18n";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  const title = lang === "fa" ? "دیار صنعت تبریز" : "Diyar Sanat Tabriz";
  const description = lang === "fa"
    ? "وب‌سایت رسمی دیار صنعت تبریز و برند دیار شیمی؛ تولیدکننده روانکارها و سیالات تخصصی خودرو."
    : "Official website of Diyar Sanat Tabriz and Diyar Shimi automotive lubricants and specialty fluids.";

  return {
    metadataBase: new URL("https://diyarsanat.com"),
    title: { default: title, template: `%s | ${title}` },
    description,
    applicationName: dict.brandName,
    alternates: {
      canonical: `/${lang}`,
      languages: { fa: "/fa", en: "/en" },
    },
    openGraph: {
      type: "website",
      locale: lang === "fa" ? "fa_IR" : "en_US",
      siteName: title,
      title,
      description,
      images: [{ url: "/images/industrial-hero.webp", width: 1536, height: 1024, alt: dict.hero.sampleImage }],
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} dir={directionFor(lang)} suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main-content">
          {lang === "fa" ? "پرش به محتوای اصلی" : "Skip to main content"}
        </a>
        <SiteHeader locale={lang} />
        {children}
        <SiteFooter locale={lang} />
        <MobileNavigation locale={lang} />
      </body>
    </html>
  );
}
