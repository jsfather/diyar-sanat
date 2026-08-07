import type {Metadata} from "next";
import {fontClassFor} from "@/app/fonts";
import "../globals.css";
export const metadata:Metadata={title:{default:"پنل مدیریت دیار صنعت",template:"%s | پنل مدیریت"},robots:{index:false,follow:false,nocache:true}};
export default function AdminRootLayout({children}:{children:React.ReactNode}){return <html lang="fa" dir="rtl" suppressHydrationWarning><body className={fontClassFor("fa")} suppressHydrationWarning>{children}</body></html>}
