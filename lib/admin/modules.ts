import { FileTextIcon, FolderIcon, GlobeIcon, ImageIcon, MapIcon, SettingsIcon, ShoppingBagIcon, UsersIcon } from "@/components/admin-icons";

export const adminModules = [
  { key:"brands", fa:"برندها", en:"Brands", group:"catalog", icon:ShoppingBagIcon, roles:["manager","admin","seo"] },
  { key:"product-categories", fa:"دسته‌های محصول", en:"Product categories", group:"catalog", icon:FolderIcon, roles:["manager","admin","seo"] },
  { key:"products", fa:"محصولات", en:"Products", group:"catalog", icon:ShoppingBagIcon, roles:["manager","admin","seo"] },
  { key:"locations", fa:"کشورها، استان‌ها و شهرها", en:"Locations", group:"representatives", icon:MapIcon, roles:["manager","admin"] },
  { key:"representatives", fa:"نمایندگان", en:"Representatives", group:"representatives", icon:UsersIcon, roles:["manager","admin"] },
  { key:"representative-applications", fa:"درخواست‌های نمایندگی", en:"Representative applications", group:"requests", icon:FileTextIcon, roles:["manager","admin"] },
  { key:"editorial", fa:"اخبار و مقالات", en:"News & articles", group:"media", icon:FileTextIcon, roles:["manager","admin","seo"] },
  { key:"certificates", fa:"گواهینامه‌ها", en:"Certificates", group:"media", icon:FileTextIcon, roles:["manager","admin"] },
  { key:"galleries", fa:"آلبوم‌های گالری", en:"Gallery albums", group:"media", icon:ImageIcon, roles:["manager","admin","seo"] },
  { key:"media", fa:"رسانه و فایل‌ها", en:"Media library", group:"media", icon:ImageIcon, roles:["manager","admin","seo"] },
  { key:"jobs", fa:"موقعیت‌های شغلی", en:"Job positions", group:"hr", icon:UsersIcon, roles:["manager","admin"] },
  { key:"job-applications", fa:"درخواست‌های استخدام", en:"Job applications", group:"hr", icon:FileTextIcon, roles:["manager","admin"] },
  { key:"contact-submissions", fa:"فرم‌های تماس", en:"Contact submissions", group:"requests", icon:FileTextIcon, roles:["manager","admin"] },
  { key:"international-inquiries", fa:"همکاری بین‌المللی", en:"International inquiries", group:"requests", icon:GlobeIcon, roles:["manager","admin"] },
  { key:"translations", fa:"محتوای صفحات", en:"Page content", group:"settings", icon:GlobeIcon, roles:["manager","admin","seo"] },
  { key:"faqs", fa:"پرسش‌های متداول", en:"FAQs", group:"settings", icon:FileTextIcon, roles:["manager","admin","seo"] },
  { key:"seo", fa:"تنظیمات سئو", en:"SEO settings", group:"settings", icon:SettingsIcon, roles:["manager","admin","seo"] },
  { key:"menus", fa:"مدیریت منوها", en:"Navigation menus", group:"settings", icon:SettingsIcon, roles:["manager","admin","seo"] },
  { key:"site-settings", fa:"تنظیمات سایت", en:"Site settings", group:"settings", icon:SettingsIcon, roles:["manager"] },
] as const;

export type StaffRole = "manager" | "admin" | "seo";
export const roleLabel = (role:StaffRole) => ({manager:"مدیریت",admin:"ادمین",seo:"سئوکار"})[role];
