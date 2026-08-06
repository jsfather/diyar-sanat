import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { MailIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <footer id="contact" className="site-footer">
      <div className="newsletter container-wide">
        <div className="newsletter-icon"><MailIcon className="size-6" /></div>
        <div>
          <h2>{dict.newsletter.title}</h2>
          <p>{dict.newsletter.body}</p>
        </div>
        <form className="newsletter-form">
          <label className="sr-only" htmlFor="newsletter-email">{dict.newsletter.placeholder}</label>
          <input id="newsletter-email" type="email" inputMode="email" autoComplete="email" dir="ltr" placeholder={dict.newsletter.placeholder} disabled />
          <button type="button" disabled>{dict.newsletter.submit}</button>
        </form>
      </div>
      <div className="container-wide footer-grid">
        <div className="footer-brand">
          <BrandMark locale={locale} />
          <p>{dict.footer.summary}</p>
          <span className="status-note">{dict.footer.status}</span>
        </div>
        <div>
          <h3>{locale === "fa" ? "محصولات" : "Products"}</h3>
          <Link href={`/${locale}/products`}>{locale === "fa" ? "روغن موتور" : "Engine oil"}</Link>
          <Link href={`/${locale}/products`}>{locale === "fa" ? "واسکازین" : "Gear oil"}</Link>
          <Link href={`/${locale}/products`}>{locale === "fa" ? "مایع ترمز" : "Brake fluid"}</Link>
          <Link href={`/${locale}/products`}>{locale === "fa" ? "ضدیخ" : "Antifreeze"}</Link>
        </div>
        <div>
          <h3>{locale === "fa" ? "دسترسی سریع" : "Quick links"}</h3>
          <Link href={`/${locale}`}>{dict.navigation.home}</Link>
          <Link href={`/${locale}#factory`}>{dict.navigation.about}</Link>
          <Link href={`/${locale}#media`}>{dict.navigation.media}</Link>
          <Link href={`/${locale}#contact`}>{dict.navigation.contact}</Link>
        </div>
        <div>
          <h3>{locale === "fa" ? "ارتباط" : "Contact"}</h3>
          <p>{locale === "fa" ? "تبریز، ایران" : "Tabriz, Iran"}</p>
          <p>{locale === "fa" ? "اطلاعات رسمی در انتظار تأیید" : "Official details pending approval"}</p>
          <a href="mailto:info@diyarsanat.com" dir="ltr">info@diyarsanat.com</a>
        </div>
      </div>
      <div className="footer-bottom container-wide">
        <span>{dict.footer.rights}</span>
        <span>{dict.footer.credit}</span>
      </div>
    </footer>
  );
}
