import Image from "next/image";
import Link from "next/link";
import {
  CategoryIcon,
  ChevronIcon,
  FlaskIcon,
  GearIcon,
  HeadsetIcon,
  ShieldIcon,
  UserIcon,
} from "@/components/icons";
import { IranMapMark } from "@/components/iran-map-mark";
import { getCatalog } from "@/lib/catalog";
import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const catalog = await getCatalog(lang);
  const fa = lang === "fa";
  const productImages = [
    "/images/product-engine-oil-dst.jpg",
    "/images/product-gear-oil-dst.jpg",
    "/images/product-brake-fluid-dst.jpg",
    "/images/product-antifreeze-dst.jpg",
  ] as const;
  const mediaImages = [
    "/images/factory-teaser-cover.png",
    "/images/product-engine-oil-dst.jpg",
    "/images/product-gear-oil-dst.jpg",
    "/images/product-antifreeze-dst.jpg",
  ] as const;

  const metrics = [
    [fa ? "۴ گروه محصول" : "4 product groups", fa ? "سبد تخصصی محصولات خودرو" : "Specialist automotive range", FlaskIcon, "red"],
    [fa ? "تولید در تبریز" : "Made in Tabriz", fa ? "تولید ایرانی، نگاه رو به جلو" : "Iranian production, forward-looking", GearIcon, "navy"],
    [fa ? "کنترل مرحله‌ای" : "Process control", fa ? "پایش منظم فرایند تولید" : "Structured production monitoring", ShieldIcon, "blue"],
    [fa ? "پشتیبانی تخصصی" : "Specialist support", fa ? "پاسخ‌گویی فنی محصولات" : "Technical product guidance", UserIcon, "amber"],
    [fa ? "چشم‌انداز توسعه" : "Growth outlook", fa ? "در مسیر بازارهای گسترده‌تر" : "Growing toward wider markets", IranMapMark, "green"],
  ] as const;
  const credentials = [
    [fa ? "استاندارد ملی ایران" : "Iran National Standard", "338", "national"],
    [fa ? "استاندارد بین‌المللی" : "International standard", "ASTM D3306", "international"],
    [fa ? "شماره استاندارد" : "Standard number", "10001517", "standard"],
    [fa ? "پروانه بهره‌برداری" : "Operating license", "7206290", "license"],
    [fa ? "شماره کسب‌وکار" : "Business number", "12452916074", "business"],
  ] as const;

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: dict.brandName,
    url: `https://diyarsanat.com/${lang}`,
    email: "info@diyarsanat.com",
    address: { "@type": "PostalAddress", addressLocality: "Tabriz", addressCountry: "IR" },
  };

  return (
    <main id="main-content" className="home-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} />

      <section className="hero-section">
        <div className="hero-photo">
          <Image src="/images/industrial-hero.webp" alt={dict.hero.sampleImage} fill priority sizes="(max-width: 800px) 100vw, 54vw" />
          <div className="hero-ribbons" aria-hidden="true" />
          <span className="made-in-iran-badge">
            <span className="iran-badge-mark" aria-hidden="true">
              <span className="iran-ribbon-flag"><i /><i /><i /></span>
              <IranMapMark />
              <span className="iran-gear"><GearIcon /></span>
            </span>
            <span className="iran-badge-copy"><strong>{fa ? "ساخت ایران" : "Made in Iran"}</strong><small>{fa ? "حرکت به جلو" : "Moving forward"}</small></span>
          </span>
        </div>
        <div className="hero-copy">
          <span className="hero-kicker">{dict.hero.titleLead}</span>
          <h1><strong>{dict.hero.titleAccent}</strong></h1>
          <h2>{dict.hero.eyebrow}</h2>
          <p>{dict.hero.description}</p>
          <div className="hero-actions">
            <Link className="button button-accent" href={`/${lang}/products`}>{dict.actions.viewProducts}<ChevronIcon className="directional-icon size-5" /></Link>
            <Link className="button button-secondary" href="#factory">{dict.actions.aboutFactory}</Link>
          </div>
          <div className="hero-dots" aria-hidden="true"><i /><i /><i className="active" /><i /></div>
        </div>
      </section>

      <section className="metrics-wrap" aria-label={fa ? "شاخص‌های دیار صنعت" : "Diyar Sanat highlights"}>
        <ul className="metrics-panel" role="list">
          {metrics.map(([title, body, Icon, tone]) => (
            <li className={`metric-item metric-tone-${tone}`} key={title}>
              <span className="metric-icon" aria-hidden="true"><Icon className="size-7" /></span>
              <span className="metric-copy"><strong>{title}</strong><small>{body}</small></span>
            </li>
          ))}
        </ul>
      </section>

      <section className="products-showcase section-space">
        <div className="container-wide">
          <div className="products-heading">
            <span>{fa ? "محصولات ما" : "Our products"}</span>
            <h2>{fa ? <>راهکارهای تخصصی برای <em>عملکرد بهتر</em></> : <>Specialist solutions for <em>better performance</em></>}</h2>
          </div>
          <div className="category-grid">
            {catalog.categories.map((category, index) => (
              <article key={category.id} className={`category-card product-tone-${index + 1}`}>
                <div className="product-art">
                  <Image src={productImages[index] ?? productImages[0]} alt={`${category.name} DST`} fill sizes="(max-width: 800px) 78vw, 300px" />
                </div>
                <div className="category-card-copy">
                  <span className="product-category-icon"><CategoryIcon name={category.icon} className="size-5" /></span>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <Link href={`/${lang}/products#${category.slug}`}>{dict.actions.viewProducts}<span><ChevronIcon className="directional-icon size-4" /></span></Link>
                </div>
              </article>
            ))}
          </div>
          <Link className="button all-products" href={`/${lang}/products`}>
            {fa ? "مشاهده همه محصولات" : "View all products"}
            <span><ChevronIcon className="directional-icon size-4" /></span>
          </Link>
        </div>
      </section>

      <section id="factory" className="factory-section section-space">
        <div className="container-wide factory-panel">
          <div className="factory-copy">
            <span className="factory-kicker">{fa ? "درباره مجموعه" : "Inside the company"}</span>
            <h2>{fa ? "دیار صنعت تبریز" : "Diyar Sanat Tabriz"}</h2>
            <p>{dict.factory.body}</p>
            <Link className="button button-secondary" href={`/${lang}#contact`}>{dict.actions.more}</Link>
          </div>
          <div className="factory-teaser" aria-label={fa ? "کاور تیزر معرفی کارخانه دیار صنعت تبریز" : "Diyar Sanat Tabriz factory teaser cover"}>
            <Image src="/images/factory-teaser-cover.png" alt={fa ? "نمای سینمایی خط تولید و کارخانه دیار صنعت" : "Cinematic view of the Diyar Sanat production line and factory"} fill sizes="(max-width: 800px) 100vw, 68vw" />
            <div className="factory-teaser-shade" aria-hidden="true" />
            <div className="teaser-caption"><span>{fa ? "تیزر معرفی کارخانه" : "Factory introduction"}</span><strong>{fa ? "از تولید دقیق تا حرکت رو به جلو" : "From precise production to moving forward"}</strong></div>
            <span className="teaser-play" aria-hidden="true"><i /></span>
            <div className="teaser-controls" aria-hidden="true"><span className="teaser-progress"><i /></span><small dir="ltr">00:00</small></div>
          </div>
          <div className="factory-values">
            {dict.trust.map(([title, body], index) => {
              const Icon = [ShieldIcon, FlaskIcon, GearIcon, HeadsetIcon][index];
              return <article key={title}><span><Icon className="size-7" /></span><div><h3>{title}</h3><p>{body}</p></div></article>;
            })}
          </div>
        </div>
      </section>

      <section id="media" className="media-section section-space">
        <div className="container-wide">
          <div className="section-heading-row">
            <div><span>{fa ? "مجله دیار صنعت" : "Diyar Sanat journal"}</span><h2>{fa ? "اخبار و تازه‌ها" : "News & insights"}</h2><p>{fa ? "تازه‌ترین مطالب تخصصی، رویدادها و راهنماهای مرتبط با محصولات" : "The latest technical articles, events, and product guidance"}</p></div>
          </div>
          <div className="media-grid">
            {[...dict.media.items, dict.media.items[0]].map(([title, type], index) => (
              <article className={index === 0 ? "media-featured" : "media-compact"} key={`${title}-${index}`}>
                <Link className="media-cover" href={`/${lang}#media`} aria-label={title}>
                  <Image src={mediaImages[index] ?? mediaImages[0]} alt="" fill sizes={index === 0 ? "(max-width: 800px) 88vw, 58vw" : "(max-width: 800px) 72vw, 240px"} />
                  <span>{type}</span>
                </Link>
                <div className="media-card-copy">
                  <div className="media-meta"><time dateTime="2026-08-06">{fa ? "۱۵ مرداد ۱۴۰۵" : "August 6, 2026"}</time><span aria-hidden="true" /><small>{fa ? "۳ دقیقه مطالعه" : "3 min read"}</small></div>
                  <h3>{title}</h3>
                  <Link href={`/${lang}#media`}>{fa ? "مطالعه مطلب" : "Read article"}<span><ChevronIcon className="directional-icon size-4" /></span></Link>
                </div>
              </article>
            ))}
          </div>
          <Link className="media-more" href={`/${lang}#media`}>{fa ? "مشاهده همه اخبار و مقالات" : "View all news and articles"}<span><ChevronIcon className="directional-icon size-4" /></span></Link>
        </div>
      </section>

      <section id="certificates" className="certificate-strip section-space">
        <div className="container-wide certificate-panel">
          <div className="certificate-copy"><span>{dict.navigation.certificates}</span><h2>{fa ? "مجوزها و استانداردهای مجموعه" : "Company licenses and standards"}</h2><p>{fa ? "شناسه‌های ثبتی و استانداردهای اعلام‌شده دیار صنعت تبریز" : "Declared registrations and standards of Diyar Sanat Tabriz"}</p></div>
          <ul className="certificate-list" role="list">{credentials.map(([title, value, tone]) => <li className={`credential-${tone}`} key={value}><span className="credential-icon"><ShieldIcon className="size-6" /></span><span className="credential-copy"><small>{title}</small><strong dir="ltr">{value}</strong></span></li>)}</ul>
        </div>
      </section>
    </main>
  );
}
