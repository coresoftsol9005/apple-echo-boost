import { UtensilsCrossed, Stethoscope, Scissors, Sparkles, Wrench, ShoppingBag, GraduationCap, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Brand = {
  name: string;
  tag: string;
  Icon: LucideIcon;
};

const brands: Brand[] = [
  { name: "Sharma Family Restaurant", tag: "Hisar", Icon: UtensilsCrossed },
  { name: "Verma Dental Clinic", tag: "Healthcare", Icon: Stethoscope },
  { name: "Glow Beauty Salon", tag: "Salon & Spa", Icon: Scissors },
  { name: "Agarwal Boutique", tag: "Retail", Icon: ShoppingBag },
  { name: "Singh Electrical Services", tag: "Service", Icon: Wrench },
  { name: "Little Stars Play School", tag: "Education", Icon: GraduationCap },
  { name: "Gupta Clinic", tag: "Healthcare", Icon: Stethoscope },
  { name: "R.K. Family Restaurant", tag: "Hisar", Icon: UtensilsCrossed },
  { name: "Bansal Properties", tag: "Real Estate", Icon: Building2 },
  { name: "Lumière Spa", tag: "Wellness", Icon: Sparkles },
];

export function BrandsMarquee() {
  // Duplicate so the loop is seamless
  const loop = [...brands, ...brands];

  return (
    <section
      aria-label="Businesses we work with"
      className="relative overflow-hidden border-y border-white/10 bg-midnight/80 py-10 md:py-14"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent md:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent md:w-48" />

      <div className="mx-auto mb-8 flex max-w-6xl items-center justify-center gap-3 px-5 text-center md:px-8">
        <span className="h-px w-8 bg-skyblue/30" />
        <span className="eyebrow">Businesses scaling with CoreSoft</span>
        <span className="h-px w-8 bg-skyblue/30" />
      </div>

      <div className="marquee-track">
        {loop.map((b, i) => (
          <BrandTile key={`${b.name}-${i}`} brand={b} />
        ))}
      </div>
    </section>
  );
}

function BrandTile({ brand }: { brand: Brand }) {
  const { Icon, name, tag } = brand;
  return (
    <div className="group flex shrink-0 items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-6 py-3.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/40 hover:bg-white/[0.05]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-grad-navy ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-5 w-5 text-skyblue" aria-hidden />
      </div>
      <div className="flex flex-col">
        <span className="font-display text-[15px] font-semibold leading-tight tracking-tight text-white">
          {name}
        </span>
        <span className="font-mono-brand text-[10px] uppercase tracking-[0.22em] text-skyblue/60">
          {tag}
        </span>
      </div>
    </div>
  );
}
