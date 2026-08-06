import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon, ShieldIcon } from "@/components/icons";
import { IranMapMark } from "@/components/iran-map-mark";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const fa = locale === "fa";
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
        <div className="footer-credentials">
          <h3>{fa ? "نمادها و مجوزها" : "Credentials"}</h3>
          <div className="credential-marks">
            <span><IranMapMark className="size-8" /><small>{fa ? "ساخت ایران" : "Made in Iran"}</small></span>
            <span><ShieldIcon className="size-8" /><small>{fa ? "در انتظار تأیید" : "Pending approval"}</small></span>
          </div>
          <p>{fa ? "اطلاعات رسمی مجوزها پس از راستی‌آزمایی منتشر می‌شود." : "Official licensing details will be published after verification."}</p>
        </div>
        <div className="footer-contact">
          <h3>{fa ? "اطلاعات تماس" : "Contact information"}</h3>
          <p><MapPinIcon className="size-4" />{fa ? "تبریز، ایران" : "Tabriz, Iran"}</p>
          <p><PhoneIcon className="size-4" />{fa ? "شماره رسمی در انتظار تأیید" : "Official number pending approval"}</p>
          <a href="mailto:info@diyarsanat.com" dir="ltr"><MailIcon className="size-4" />info@diyarsanat.com</a>
        </div>
        <div>
          <h3>{fa ? "خدمات مشتریان" : "Customer service"}</h3>
          <Link href={`/${locale}#representatives`}>{fa ? "پرسش‌های متداول" : "Frequently asked questions"}</Link>
          <Link href={`/${locale}#contact`}>{fa ? "راهنمای خرید" : "Buying guide"}</Link>
          <Link href={`/${locale}#contact`}>{fa ? "پیگیری درخواست" : "Track a request"}</Link>
          <Link href={`/${locale}/contact`}>{fa ? "تماس با ما" : "Contact us"}</Link>
        </div>
        <div>
          <h3>{fa ? "محصولات" : "Products"}</h3>
          <Link href={`/${locale}/products`}>{fa ? "روغن موتور" : "Engine oil"}</Link>
          <Link href={`/${locale}/products`}>{fa ? "واسکازین" : "Gear oil"}</Link>
          <Link href={`/${locale}/products`}>{fa ? "مایع روغن ترمز" : "Brake fluid"}</Link>
          <Link href={`/${locale}/products`}>{fa ? "ضدیخ و ضدجوش" : "Antifreeze and coolant"}</Link>
        </div>
        <div>
          <h3>{fa ? "دسترسی سریع" : "Quick links"}</h3>
          <Link href={`/${locale}`}>{dict.navigation.home}</Link>
          <Link href={`/${locale}/about`}>{dict.navigation.about}</Link>
          <Link href={`/${locale}/careers`}>{dict.navigation.careers}</Link>
          <Link href={`/${locale}/international-cooperation`}>{fa ? "همکاری بین‌المللی" : "International cooperation"}</Link>
          <Link href={`/${locale}/contact`}>{dict.navigation.contact}</Link>
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
