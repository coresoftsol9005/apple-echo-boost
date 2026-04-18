import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
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
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:h-24 md:px-8">
        <a
          href="#top"
          aria-label="CoreSoft Solutions home"
          className="group flex items-center transition-transform duration-300 hover:scale-[1.04]"
        >
          <CoreSoftLogo className="h-12 w-auto md:h-14 lg:h-16 transition-all duration-300 group-hover:drop-shadow-[0_6px_24px_rgba(229,57,53,0.35)]" />
        </a>
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative inline-flex items-center text-[13px] font-medium text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-signal transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full bg-signal px-5 py-2 text-[12px] font-semibold uppercase tracking-wider text-white shadow-[0_10px_30px_-10px_rgba(229,57,53,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_18px_40px_-10px_rgba(229,57,53,0.8)] hover:brightness-110"
        >
          Get Audit
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </nav>
    </header>
  );
}
