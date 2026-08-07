import type { Metadata } from "next";
import Link from "next/link";
import { ChevronIcon, CategoryIcon, HomeIcon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { getCatalog } from "@/lib/catalog";
import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { brands, brandName, isBrandCode, type BrandCode } from "@/lib/brands";

type ProductsPageProps = {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ brand?: string | string[] }>;
};

export async function generateMetadata({ params }: PageProps<"/[lang]/products">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.products.pageTitle,
    description: dict.products.pageDescription,
    alternates: {
      canonical: `/${lang}/products`,
      languages: { fa: "/fa/products", en: "/en/products" },
    },
  };
}

export default async function ProductsPage({ params, searchParams }: ProductsPageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const catalog = await getCatalog(lang);
  const requestedBrand = (await searchParams).brand;
  const brandValue = Array.isArray(requestedBrand) ? requestedBrand[0] : requestedBrand;
  const selectedBrand: BrandCode | "all" = isBrandCode(brandValue) ? brandValue : "all";
  const visibleCategories = catalog.categories
    .map((category) => ({ ...category, products: selectedBrand === "all" ? category.products : category.products.filter((product) => product.brandCode === selectedBrand) }))
    .filter((category) => selectedBrand === "all" || category.products.length > 0);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: dict.navigation.home, item: `https://diyarsanat.com/${lang}` },
      { "@type": "ListItem", position: 2, name: dict.navigation.products, item: `https://diyarsanat.com/${lang}/products` },
    ],
  };

  return (
    <main id="main-content" className="products-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <header className="products-page-hero">
        <div className="container-wide">
          <nav className="breadcrumbs" aria-label={lang === "fa" ? "مسیر صفحه" : "Breadcrumb"}>
            <Link href={`/${lang}`}><HomeIcon className="size-4" />{dict.navigation.home}</Link>
            <ChevronIcon className="directional-icon size-4" />
            <span>{dict.navigation.products}</span>
          </nav>
          <span className="eyebrow">{dict.products.eyebrow}</span>
          <h1>{dict.products.pageTitle}</h1>
          <p>{dict.products.pageDescription}</p>
        </div>
      </header>

      <nav className="container-wide product-brand-tabs" aria-label={lang === "fa" ? "فیلتر محصولات بر اساس برند" : "Filter products by brand"}>
        <Link className={selectedBrand === "all" ? "active" : undefined} href={`/${lang}/products`}>{lang === "fa" ? "همه برندها" : "All brands"}</Link>
        {brands.map((brand) => <Link className={`${selectedBrand === brand.code ? "active" : ""} brand-${brand.code}`} key={brand.code} href={`/${lang}/products?brand=${brand.code}`}><strong dir="ltr">{brand.latin}</strong><small>{lang === "fa" ? brand.fa : brand.en}</small></Link>)}
      </nav>

      <div className="container-wide catalog-layout">
        <aside className="category-index" aria-label={lang === "fa" ? "گروه‌های محصول" : "Product groups"}>
          <h2>{lang === "fa" ? "گروه محصولات" : "Product groups"}</h2>
          {visibleCategories.map((category) => (
            <Link key={category.id} href={`#${category.slug}`}>
              <CategoryIcon name={category.icon} className="size-5" />
              <span>{category.name}</span>
            </Link>
          ))}
        </aside>
        <div className="catalog-content">
          {catalog.source === "fallback" ? <p className="sample-notice">{dict.products.sampleNotice}</p> : null}
          {visibleCategories.map((category) => (
            <section key={category.id} id={category.slug} className="catalog-category">
              <div className="catalog-category-heading" style={{ "--category-accent": category.accentColor } as React.CSSProperties}>
                <span><CategoryIcon name={category.icon} className="size-8" /></span>
                <div><h2>{category.name}</h2><p>{category.description}</p></div>
              </div>
              {category.products.length ? (
                <div className="product-grid catalog-products">
                  {category.products.map((product) => (
                    <ProductCard
                      key={product.id}
                      locale={lang}
                      name={product.name}
                      description={product.description}
                      specification={product.specification}
                      slug={product.slug}
                      imageUrl={product.imageUrl}
                      icon={category.icon}
                      categoryCode={category.code}
                      accentColor={category.accentColor}
                      detailsLabel={dict.actions.details}
                      brandCode={product.brandCode}
                      brandName={product.brandName}
                    />
                  ))}
                </div>
              ) : <p className="empty-state">{dict.products.empty}</p>}
            </section>
          ))}
          {selectedBrand !== "all" && visibleCategories.length === 0 ? (
            <section className={`brand-products-empty brand-${selectedBrand}`}>
              <strong dir="ltr">{brands.find((brand) => brand.code === selectedBrand)?.latin}</strong>
              <h2>{brandName(selectedBrand, lang)}</h2>
              <p>{lang === "fa" ? "محصول تأییدشده‌ای از این برند هنوز منتشر نشده است. به‌محض تکمیل اطلاعات فنی، محصولات در همین صفحه در دسترس خواهند بود." : "No verified products have been published for this brand yet. Products will appear here once their technical information is complete."}</p>
              <Link className="button button-secondary" href={`/${lang}/products`}>{lang === "fa" ? "مشاهده همه محصولات" : "View all products"}</Link>
            </section>
          ) : null}
        </div>
      </div>
    </main>
  );
}
