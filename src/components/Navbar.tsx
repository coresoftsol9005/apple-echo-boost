import { useEffect, useState } from "react";
import { CoreSoftLogo } from "./CoreSoftLogo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#stories", label: "Stories" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-light backdrop-saturate-150 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label="CoreSoft Solutions home" className="flex items-center">
          <CoreSoftLogo className="h-7 w-auto md:h-8" />
        </a>
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium text-foreground/80 transition hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-signal px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-white shadow-sm transition hover:brightness-110"
        >
          Get Audit
        </a>
      </nav>
    </header>
  );
}
