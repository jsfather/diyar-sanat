import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerPageHero } from "@/components/inner-page-hero";
import { MediaArchive } from "@/components/media-archive";
import { isLocale } from "@/lib/i18n";
import { getMediaArticlesFromDatabase } from "@/lib/media-content";
type Props = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const fa = lang === "fa";
  return {
    title: fa
      ? "رسانه، اخبار و آموزش | دیار صنعت تبریز"
      : "Media, news, and tutorials | Diyar Sanat Tabriz",
    description: fa
      ? "آرشیو اخبار، مقالات آموزشی و راهنماهای فنی دیار صنعت تبریز."
      : "Company news, educational articles, and automotive product guides from Diyar Sanat Tabriz.",
    alternates: {
      canonical: `/${lang}/media`,
      languages: { fa: "/fa/media", en: "/en/media" },
    },
  };
}
export default async function MediaPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const fa = lang === "fa",
    articles = await getMediaArticlesFromDatabase(lang);
  return (
    <main id="main-content" className="media-page">
      <InnerPageHero
        locale={lang}
        current={fa ? "رسانه" : "Media"}
        eyebrow={fa ? "مجله دیار صنعت" : "Diyar Sanat journal"}
        title={fa ? "اخبار، وبلاگ و آموزش" : "News, blog, and tutorials"}
        description={
          fa
            ? "مرجع محتوای رسمی مجموعه برای راهنماهای کاربردی، دانش فنی و خبرهای تأییدشده شرکت."
            : "The official content hub for practical guides, technical knowledge, and verified company news."
        }
      />
      <section
        className="container-wide media-archive-section"
        aria-label={fa ? "آرشیو رسانه" : "Media archive"}
      >
        <MediaArchive locale={lang} articles={articles} />
      </section>
    </main>
  );
}
