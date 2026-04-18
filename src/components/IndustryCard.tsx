import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Tilt3D } from "./Tilt3D";

type Props = {
  icon: LucideIcon;
  title: string;
  power: string;
  image: string;
  /** dark = midnight surface, light = navy-mid (slightly brighter) surface */
  tone?: "light" | "dark";
};

export function IndustryCard({ icon: Icon, title, power, image, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tilt3D max={1.5} lift={2} depth={9} className="h-full">
        <article
          className={`spotlight-host group relative h-full overflow-hidden rounded-3xl border border-white/10 text-white ${
            dark ? "bg-midnight" : "bg-grad-navy"
          } shadow-card-soft transition-all duration-500 hover:border-signal/40 hover:shadow-red-glow`}
        >
          <span className="spotlight" aria-hidden />
          <div className="relative z-[2] px-8 pt-10 md:px-12 md:pt-14">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal pulse-ring" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skyblue">
                {title}
              </span>
            </div>
            <h3 className="font-display mt-5 max-w-md text-balance text-3xl font-bold leading-[1.05] tracking-tight md:text-[42px]">
              {power}
            </h3>
            <a
              href="#contact"
              className="link-underline mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-signal transition-all duration-300 group-hover:gap-2.5"
            >
              Learn more
              <span aria-hidden>→</span>
            </a>
            <div
              className="mt-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-signal/20 group-hover:ring-signal/40"
              style={{ transform: "translateZ(20px)" }}
            >
              <Icon className="h-4 w-4 text-skyblue transition-colors duration-300 group-hover:text-white" aria-hidden />
            </div>
          </div>
          <div className="relative z-[2] mt-6 flex justify-center px-6 pb-6" style={{ transform: "translateZ(30px)" }}>
            <img
              src={image}
              alt={`${title} interface preview`}
              loading="lazy"
              className="h-auto w-full max-w-[420px] select-none drop-shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.04]"
            />
          </div>
        </article>
      </Tilt3D>
    </motion.div>
  );
}
