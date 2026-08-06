import Image from "next/image";
import Link from "next/link";
import { CategoryIcon, ChevronIcon, FlaskIcon, HeadsetIcon, IranIcon, ShieldIcon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredProducts, getCatalog } from "@/lib/catalog";
import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const catalog = await getCatalog(lang);
  const featured = featuredProducts(catalog);
  const trustIcons = [ShieldIcon, FlaskIcon, IranIcon, HeadsetIcon] as const;

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: dict.brandName,
    url: `https://diyarsanat.com/${lang}`,
    email: "info@diyarsanat.com",
    address: { "@type": "PostalAddress", addressLocality: "Tabriz", addressCountry: "IR" },
  };

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} />
      <section className="hero-section">
        <Image
          className="hero-image"
          src="/images/industrial-hero.webp"
          alt={dict.hero.sampleImage}
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-wash" />
        <div className="container-wide hero-content">
          <div className="hero-copy">
            <span className="eyebrow">{dict.hero.eyebrow}</span>
            <h1>
              <span>{dict.hero.titleLead}</span>
              <strong>{dict.hero.titleAccent}</strong>
            </h1>
            <p>{dict.hero.description}</p>
            <div className="hero-actions">
              <Link className="button button-accent" href={`/${lang}/products`}>
                {dict.actions.viewProducts}<ChevronIcon className="size-5" />
              </Link>
              <Link className="button button-secondary" href="#factory">{dict.actions.aboutFactory}</Link>
            </div>
          </div>
        </div>
        <span className="made-in-iran-badge">
          <IranIcon className="size-9" />
          <span><strong>{lang === "fa" ? "ساخت ایران" : "Made in Iran"}</strong><small>{lang === "fa" ? "حرکت به جلو" : "Moving forward"}</small></span>
        </span>
      </section>

      <section className="trust-section section-space">
        <div className="container-wide">
          <SectionHeading eyebrow={lang === "fa" ? "ارزش‌های ما" : "Our values"} title={dict.trustTitle} />
          <div className="trust-grid">
            {dict.trust.map(([title, body], index) => {
              const Icon = trustIcons[index];
              return (
                <article key={title}>
                  <span><Icon className="size-8" /></span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="category-section section-space">
        <div className="container-wide">
          <SectionHeading eyebrow={dict.products.eyebrow} title={dict.products.title} />
          <div className="category-grid">
            {catalog.categories.map((category) => (
              <Link key={category.id} href={`/${lang}/products#${category.slug}`} className="category-card" style={{ "--category-accent": category.accentColor } as React.CSSProperties}>
                <span><CategoryIcon name={category.icon} className="size-10" /></span>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <small>{dict.actions.details}<ChevronIcon className="size-4" /></small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="products-section section-space">
        <div className="container-wide">
          <div className="section-title-row">
            <SectionHeading eyebrow={dict.products.eyebrow} title={dict.products.featured} align="start" />
            <Link href={`/${lang}/products`}>{dict.actions.viewAll}<ChevronIcon className="size-4" /></Link>
          </div>
          <div className="product-grid">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                locale={lang}
                name={product.name}
                description={product.description}
                specification={product.specification}
                slug={product.slug}
                imageUrl={product.imageUrl}
                icon={product.category.icon}
                accentColor={product.category.accentColor}
                detailsLabel={dict.actions.details}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="factory" className="factory-section section-space">
        <div className="container-wide factory-panel">
          <div className="factory-image">
            <Image src="/images/industrial-hero.webp" alt={dict.hero.sampleImage} fill sizes="(max-width: 900px) 100vw, 55vw" />
            <span>{lang === "fa" ? "تصویر نمونه" : "Sample image"}</span>
          </div>
          <div className="factory-copy">
            <span className="eyebrow">{dict.factory.eyebrow}</span>
            <h2>{dict.factory.title}</h2>
            <p>{dict.factory.body}</p>
            <ul>{dict.factory.points.map((point) => <li key={point}><ShieldIcon className="size-5" />{point}</li>)}</ul>
            <Link className="button button-secondary" href={`/${lang}#contact`}>{dict.actions.more}</Link>
          </div>
        </div>
      </section>

      <section id="representatives" className="representatives-section section-space">
        <div className="container-wide representatives-panel">
          <div>
            <span className="eyebrow">{dict.navigation.representatives}</span>
            <h2>{lang === "fa" ? "شبکه‌ای در حال شکل‌گیری" : "A network in development"}</h2>
            <p>{lang === "fa" ? "زیرساخت انتخاب استان و معرفی نمایندگان پس از دریافت اطلاعات تأییدشده فعال می‌شود." : "Province discovery and representative profiles will activate after verified company data is supplied."}</p>
          </div>
          <div className="iran-outline" aria-hidden="true"><IranIcon /></div>
          <Link className="button button-accent" href={`/${lang}#contact`}>{dict.actions.representative}</Link>
        </div>
      </section>

      <section id="media" className="media-section section-space">
        <div className="container-wide">
          <SectionHeading eyebrow={dict.media.eyebrow} title={dict.media.title} />
          <div className="media-grid">
            {dict.media.items.map(([title, type], index) => (
              <article key={title}>
                <div className={`media-visual media-${index + 1}`}><CategoryIcon name={catalog.categories[index]?.icon ?? "droplet"} className="size-12" /></div>
                <span>{type}</span>
                <h3>{title}</h3>
                <p>{lang === "fa" ? "محتوای نمونه تا آغاز انتشار رسمی" : "Sample copy until editorial publishing begins"}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="certificate-strip">
        <div className="container-wide">
          <div>
            <span className="eyebrow">{dict.navigation.certificates}</span>
            <h2>{lang === "fa" ? "مدارک پس از راستی‌آزمایی منتشر می‌شوند" : "Documents will appear after verification"}</h2>
          </div>
          {[1, 2, 3, 4].map((item) => <span key={item} className="certificate-placeholder"><ShieldIcon className="size-7" />{lang === "fa" ? "در انتظار تأیید" : "Pending"}</span>)}
        </div>
      </section>
    </main>
  );
}
