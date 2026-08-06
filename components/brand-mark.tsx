import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function BrandMark({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  return (
    <Link href={`/${locale}`} className="brand-mark" aria-label={locale === "fa" ? "دیار صنعت تبریز" : "Diyar Sanat Tabriz"}>
      <span className="brand-symbol" aria-hidden="true">DST</span>
      {!compact ? (
        <span className="brand-copy">
          <strong>{locale === "fa" ? "دیار صنعت تبریز" : "Diyar Sanat Tabriz"}</strong>
          <small>Diyar Sanat Tabriz</small>
        </span>
      ) : null}
    </Link>
  );
}
