import type { Metadata } from "next";
import Link from "next/link";
import { ChevronIcon, CategoryIcon, HomeIcon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { getCatalog } from "@/lib/catalog";
import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

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

export default async function ProductsPage({ params }: PageProps<"/[lang]/products">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const catalog = await getCatalog(lang);

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
            <ChevronIcon className="size-4" />
            <span>{dict.navigation.products}</span>
          </nav>
          <span className="eyebrow">{dict.products.eyebrow}</span>
          <h1>{dict.products.pageTitle}</h1>
          <p>{dict.products.pageDescription}</p>
        </div>
      </header>

      <div className="container-wide catalog-layout">
        <aside className="category-index" aria-label={lang === "fa" ? "گروه‌های محصول" : "Product groups"}>
          <h2>{lang === "fa" ? "گروه محصولات" : "Product groups"}</h2>
          {catalog.categories.map((category) => (
            <Link key={category.id} href={`#${category.slug}`}>
              <CategoryIcon name={category.icon} className="size-5" />
              <span>{category.name}</span>
            </Link>
          ))}
        </aside>
        <div className="catalog-content">
          {catalog.source === "fallback" ? <p className="sample-notice">{dict.products.sampleNotice}</p> : null}
          {catalog.categories.map((category) => (
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
                      accentColor={category.accentColor}
                      detailsLabel={dict.actions.details}
                    />
                  ))}
                </div>
              ) : <p className="empty-state">{dict.products.empty}</p>}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
