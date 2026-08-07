import Image from "next/image";
import Link from "next/link";
import { CategoryIcon, ChevronIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n";
import type { BrandCode } from "@/lib/brands";

type ProductCardProps = {
  locale: Locale;
  name: string;
  description: string;
  specification: string;
  slug: string;
  imageUrl: string | null;
  icon: string;
  categoryCode: string;
  accentColor: string;
  detailsLabel: string;
  brandCode: BrandCode;
  brandName: string;
};

export function ProductCard(props: ProductCardProps) {
  const { locale, name, description, specification, slug, imageUrl, categoryCode, accentColor, detailsLabel, brandCode, brandName } = props;
  const fallbackImages: Record<string, string> = { "engine-oil": "/images/product-engine-oil-dst.png", "gear-oil": "/images/product-gear-oil-dst.png", "brake-fluid": "/images/product-brake-fluid-dst.png", antifreeze: "/images/product-antifreeze-dst.png" };
  const resolvedImage = imageUrl ?? fallbackImages[categoryCode];
  return (
    <article className="product-card" style={{ "--product-accent": accentColor } as React.CSSProperties}>
      <div className="product-visual" style={{ "--product-accent": accentColor } as React.CSSProperties}>
        {resolvedImage ? (
          <Image src={resolvedImage} alt={name} fill sizes="(max-width: 768px) 70vw, 280px" />
        ) : (
          <>
            <span className="product-canister" aria-hidden="true"><CategoryIcon name={props.icon} className="size-12" /></span>
            <small>{locale === "fa" ? "تصویر نمونه" : "Sample image"}</small>
          </>
        )}
      </div>
      <div className="product-card-copy">
        <span className={`product-brand-chip brand-${brandCode}`} dir="ltr">{brandName}</span>
        <h3>{name}</h3>
        <strong dir="ltr">{specification}</strong>
        <p>{description}</p>
        <Link href={`/${locale}/products/${slug}`}>
          {detailsLabel}<ChevronIcon className="directional-icon size-4" />
        </Link>
      </div>
    </article>
  );
}
