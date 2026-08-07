import {notFound} from "next/navigation";
import {adminModules} from "@/lib/admin/modules";
import {requireStaff} from "@/lib/admin/auth";
type Props={params:Promise<{module:string}>};
export default async function AdminModulePage({params}:Props){const{module}=await params;const{profile}=await requireStaff();const item=adminModules.find(entry=>entry.key===module);if(!item||!(item.roles as readonly string[]).includes(profile.role))notFound();const Icon=item.icon;return <main className="admin-module-page"><header><div><span><Icon/></span><div><small>مدیریت ماژول</small><h1>{item.fa}</h1><p>{item.en}</p></div></div><button disabled>افزودن مورد جدید</button></header><section><div className="admin-module-empty"><Icon/><h2>زیرساخت این ماژول آماده شده است</h2><p>فرم فهرست، ایجاد، ویرایش، ترجمه فارسی/انگلیسی، وضعیت انتشار و تنظیمات سئو در مرحله CRUD این ماژول متصل می‌شود.</p></div></section></main>}
