"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ProductDetailGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const [zoomed,setZoomed]=useState(false);
  useEffect(()=>{if(!zoomed)return; const close=(event:KeyboardEvent)=>{if(event.key==="Escape")setZoomed(false)}; document.addEventListener("keydown",close); return()=>document.removeEventListener("keydown",close)},[zoomed]);
  return <div className="product-detail-gallery"><button type="button" className="product-detail-main-image" onClick={()=>setZoomed(true)} aria-label={`Zoom ${name}`}><Image src={images[active]} alt={name} fill priority sizes="(max-width: 800px) 100vw, 48vw" /><span className="product-zoom-hint" aria-hidden="true">⌕</span></button><div className="product-detail-thumbs" aria-label="Product images">{images.map((image, index) => <button type="button" key={`${image}-${index}`} className={active === index ? "active" : undefined} onClick={() => setActive(index)} aria-label={`${name} ${index + 1}`}><Image src={image} alt="" fill sizes="90px" /></button>)}</div>{zoomed?<div className="product-lightbox" role="dialog" aria-modal="true" aria-label={`Zoomed ${name}`} onMouseDown={event=>{if(event.target===event.currentTarget)setZoomed(false)}}><button type="button" className="product-lightbox-close" onClick={()=>setZoomed(false)} aria-label="Close">×</button><div><Image src={images[active]} alt={name} fill sizes="95vw" /></div></div>:null}</div>;
}
