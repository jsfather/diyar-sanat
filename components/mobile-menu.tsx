"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { MenuIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n";

export function MobileMenu({ locale, items }: { locale: Locale; items: readonly (readonly [string, string])[] }) {
  const [open,setOpen]=useState(false); const fa=locale==="fa";
  useEffect(()=>{if(!open)return; const close=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpen(false)}; document.addEventListener("keydown",close); return()=>document.removeEventListener("keydown",close)},[open]);
  return <div className="mobile-menu"><button type="button" className="icon-button mobile-menu-trigger" aria-label={fa?"باز کردن منو":"Open menu"} aria-expanded={open} onClick={()=>setOpen(true)}><MenuIcon className="size-6"/></button>{open?<div className="mobile-menu-backdrop" onMouseDown={event=>{if(event.target===event.currentTarget)setOpen(false)}}><div className="mobile-menu-panel" role="dialog" aria-modal="true" aria-label={fa?"منوی اصلی":"Main menu"} dir={fa?"rtl":"ltr"}><header><BrandMark locale={locale} compact/><button type="button" className="mobile-menu-close" onClick={()=>setOpen(false)} aria-label={fa?"بستن منو":"Close menu"}>×</button></header><nav aria-label={fa?"منوی موبایل":"Mobile menu"}>{items.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}<span aria-hidden="true">←</span></Link>)}</nav></div></div>:null}</div>;
}
