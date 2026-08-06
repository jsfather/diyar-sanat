import Image from "next/image";
import Link from "next/link";
import { CategoryIcon, ChevronIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n";

type ProductCardProps = {
  locale: Locale;
  name: string;
  description: string;
  specification: string;
  slug: string;
  imageUrl: string | null;
  icon: string;
  accentColor: string;
  detailsLabel: string;
};

export function ProductCard(props: ProductCardProps) {
  const { locale, name, description, specification, slug, imageUrl, icon, accentColor, detailsLabel } = props;
  return (
    <article className="product-card">
      <div className="product-visual" style={{ "--product-accent": accentColor } as React.CSSProperties}>
        {imageUrl ? (
          <Image src={imageUrl} alt={name} fill sizes="(max-width: 768px) 70vw, 280px" />
        ) : (
          <>
            <span className="product-canister" aria-hidden="true"><CategoryIcon name={icon} className="size-12" /></span>
            <small>{locale === "fa" ? "تصویر نمونه" : "Sample image"}</small>
          </>
        )}
      </div>
      <div className="product-card-copy">
        <h3>{name}</h3>
        <strong dir="ltr">{specification}</strong>
        <p>{description}</p>
        <Link href={`/${locale}/products#${slug}`}>
          {detailsLabel}<ChevronIcon className="directional-icon size-4" />
        </Link>
      </div>
    </article>
  );
}
