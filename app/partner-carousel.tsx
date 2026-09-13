"use client";

import { useEffect, useMemo, useState } from "react";

export type PartnerBrand = readonly [name:string, src:string, dark?:boolean];

export function PartnerCarousel({brands,variant="partners"}:{brands:readonly PartnerBrand[];variant?:"partners"|"clients"}) {
  const groups=useMemo(()=>{
    const pageCount=Math.ceil(brands.length/6);
    const minimum=Math.floor(brands.length/pageCount);
    const larger=brands.length%pageCount;
    const pages:PartnerBrand[][]=[];
    let cursor=0;
    for(let page=0;page<pageCount;page++){
      const size=minimum+(page<larger?1:0);
      pages.push(brands.slice(cursor,cursor+size) as PartnerBrand[]);
      cursor+=size;
    }
    return pages;
  },[brands]);
  const [active,setActive]=useState(0);
  const [paused,setPaused]=useState(false);

  useEffect(()=>{
    if(paused||groups.length<2)return;
    const timer=window.setInterval(()=>setActive(current=>(current+1)%groups.length),5000);
    return()=>window.clearInterval(timer);
  },[paused,groups.length]);

  const clients=variant==="clients";
  return <div className={`partner-carousel ${clients?"client-carousel":""}`} onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocus={()=>setPaused(true)} onBlur={()=>setPaused(false)}>
    {clients?<div className="client-carousel-stage" aria-live="polite">{groups.map((group,index)=><div className={`country-logo-row country-client-row client-logo-set ${index===active?"active":""}`} aria-hidden={index!==active} key={index}>{group.map(([name,src])=><div className="client-logo-card" key={name}><img src={src} alt={name} decoding="async"/></div>)}</div>)}</div>:<div className="partner-logo-row" key={active} aria-live="polite">
      {groups[active].map(([name,src,dark])=><div className={dark?"partner-logo-card logo-on-dark":"partner-logo-card"} key={name}><img src={src} alt={name} loading="lazy" decoding="async"/></div>)}
    </div>}
    <div className={`partner-carousel-controls ${clients?"client-carousel-controls":""}`} aria-label={`${clients?"Client":"Partner"} logo groups`}>
      {groups.map((_,index)=><button type="button" key={index} className={index===active?"active":""} aria-label={`Show ${clients?"client":"partner"} logo group ${index+1}`} aria-current={index===active?"true":undefined} onClick={()=>setActive(index)}/>) }
    </div>
  </div>;
}
