import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon, ShieldIcon } from "@/components/icons";
import { IranMapMark } from "@/components/iran-map-mark";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { getFooterNavigation } from "@/lib/navigation";
import { getManagedTranslations } from "@/lib/site-content";

export async function SiteFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const fa = locale === "fa";
  const footerNavigation = await getFooterNavigation(locale);
  const managed = await getManagedTranslations(locale, "global-footer");
  const t = (key: string, fallback: string) => managed[key]?.trim() || fallback;
  return (
    <footer id="contact" className="site-footer">
      <div className="newsletter container-wide">
        <div className="newsletter-icon"><MailIcon className="size-6" /></div>
        <div>
          <h2>{t("newsletter.title",dict.newsletter.title)}</h2>
          <p>{t("newsletter.description",dict.newsletter.body)}</p>
        </div>
        <form className="newsletter-form">
          <label className="sr-only" htmlFor="newsletter-email">{dict.newsletter.placeholder}</label>
          <input id="newsletter-email" type="email" inputMode="email" autoComplete="email" dir="ltr" placeholder={dict.newsletter.placeholder} disabled />
          <button type="button" disabled>{dict.newsletter.submit}</button>
        </form>
      </div>
      <div className="container-wide footer-grid">
        <div className="footer-credentials">
          <h3>{t("credentials.title", fa ? "نمادها و مجوزها" : "Credentials")}</h3>
          <div className="credential-marks">
            <span><IranMapMark className="size-8" /><small>{fa ? "ساخت ایران" : "Made in Iran"}</small></span>
            <span><ShieldIcon className="size-8" /><small>{fa ? "در انتظار تأیید" : "Pending approval"}</small></span>
          </div>
          <p>{fa ? "اطلاعات رسمی مجوزها پس از راستی‌آزمایی منتشر می‌شود." : "Official licensing details will be published after verification."}</p>
        </div>
        <div className="footer-contact">
          <h3>{t("contact.title", fa ? "اطلاعات تماس" : "Contact information")}</h3>
          <p><MapPinIcon className="size-4" />{t("contact.location", fa ? "تبریز، ایران" : "Tabriz, Iran")}</p>
          <p><PhoneIcon className="size-4" />{t("contact.phone", fa ? "شماره رسمی در انتظار تأیید" : "Official number pending approval")}</p>
          <a href={`mailto:${t("contact.email", "info@diyarsanat.com")}`} dir="ltr"><MailIcon className="size-4" />{t("contact.email", "info@diyarsanat.com")}</a>
        </div>
        <div>
          <h3>{t("customer_service.title",fa ? "خدمات مشتریان" : "Customer service")}</h3>
          <Link href={`/${locale}/faq`}>{fa ? "پرسش‌های متداول" : "Frequently asked questions"}</Link>
          <Link href={`/${locale}/buying-guide`}>{fa ? "راهنمای خرید" : "Buying guide"}</Link>
          <Link href={`/${locale}/request-tracking`}>{fa ? "پیگیری درخواست" : "Track a request"}</Link>
          <Link href={`/${locale}/contact`}>{fa ? "تماس با ما" : "Contact us"}</Link>
        </div>
        <div>
          <h3>{t("products.title",fa ? "محصولات" : "Products")}</h3>
          <Link href={`/${locale}/products`}>{fa ? "روغن موتور" : "Engine oil"}</Link>
          <Link href={`/${locale}/products`}>{fa ? "واسکازین" : "Gear oil"}</Link>
          <Link href={`/${locale}/products`}>{fa ? "مایع روغن ترمز" : "Brake fluid"}</Link>
          <Link href={`/${locale}/products`}>{fa ? "ضدیخ و ضدجوش" : "Antifreeze and coolant"}</Link>
        </div>
        <div>
          <h3>{t("quick_links.title", fa ? "دسترسی سریع" : "Quick links")}</h3>
          {footerNavigation.length ? footerNavigation.map(([label,href])=><Link href={href} key={href}>{label}</Link>) : <><Link href={`/${locale}`}>{dict.navigation.home}</Link><Link href={`/${locale}/about`}>{dict.navigation.about}</Link><Link href={`/${locale}/media`}>{dict.navigation.media}</Link><Link href={`/${locale}/contact`}>{dict.navigation.contact}</Link></>}
        </div>
      </div>
      <div className="footer-bottom container-wide">
        <span>{dict.footer.rights}</span>
        <span>{dict.footer.credit}</span>
      </div>
      <a className="back-to-top" href="#main-content" aria-label={fa ? "بازگشت به بالای صفحه" : "Back to top"}>⌃</a>
    </footer>
  );
}
