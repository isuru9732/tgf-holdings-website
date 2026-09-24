import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  ["/", "Home"], ["/solutions", "Solutions"], ["/projects-brands", "Projects & Brands"],
  ["/about", "About Us"], ["/contact-support", "Contact & Support"],
];

export function Logo() {
  return <span className="logo-lockup"><img src="/tgf-logo.png" alt="TGF Holding"/><span><b>The Global Food</b><small>Holding</small></span></span>;
}

export function Header({active}:{active:string}) {
  return <header className="header">
    <Link href="/" className="logo-link"><Logo/></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(([href,label])=><Link key={href} className={active===href?"active":""} href={href}>{label}</Link>)}</nav>
    <Link className="gold-btn header-cta" href="/contact-support#project-enquiry">Discuss your project <span>→</span></Link>
    <details className="mobile-menu"><summary aria-label="Open navigation">Menu</summary><nav>{nav.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav></details>
  </header>;
}

export function Footer() {
  return <footer className="footer">
    <div className="footer-brand"><Logo/><p>End-to-end commercial kitchen and hospitality solutions across Sri Lanka and regional markets.</p><div className="socials"><a href="#">in</a><a href="#">f</a><a href="#">◎</a></div></div>
    <div><b>Solutions</b><Link href="/solutions#planning">Planning & design</Link><Link href="/solutions#equipment">Equipment solutions</Link><Link href="/solutions#delivery">Project execution</Link><Link href="/contact-support#technical-support">After-sales support</Link></div>
    <div><b>Company</b><Link href="/about">About us</Link><Link href="/projects-brands">Projects & brands</Link><Link href="/contact-support">Contact us</Link><Link href="/contact-support#technical-support">Technical support</Link></div>
    <div><b>Regional markets</b><a href="#sri-lanka">Sri Lanka</a><a href="#bangladesh">Bangladesh</a><a href="#maldives">Maldives</a><a href="#dubai">UAE</a></div>
    <div><b>Get in touch</b><a href="tel:+94727568612">+94 72 756 8612</a><a href="mailto:info@tgfholding.com">info@tgfholding.com</a><span>Colombo, Sri Lanka</span></div>
    <p className="fineprint">© 2026 The Global Food Holding (Pvt) Ltd. All rights reserved. <span>Corporate facts and regional links subject to client confirmation.</span></p>
  </footer>;
}

export function Shell({active,children}:{active:string,children:ReactNode}) { return <><Header active={active}/><main>{children}</main><Footer/></>; }

export function PageHero({eyebrow,title,copy}:{eyebrow:string,title:ReactNode,copy:string}) {
  return <section className="page-hero"><div className="page-hero-image"/><div className="page-hero-copy"><span className="kicker">{eyebrow}</span><h1>{title}</h1><p>{copy}</p></div><div className="page-index">TGF / 2026</div></section>;
}

export function CtaBand() { return <section className="cta-band"><div><span className="kicker">Let’s build what’s next</span><h2>Planning a kitchen<br/>that has to perform?</h2></div><Link className="gold-btn" href="/contact-support#project-enquiry">Discuss your project <span>→</span></Link></section>; }
