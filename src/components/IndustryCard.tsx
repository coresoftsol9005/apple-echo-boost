import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Tilt3D } from "./Tilt3D";

type Props = {
  icon: LucideIcon;
  title: string;
  power: string;
  image: string;
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
      <Tilt3D max={3} lift={4} depth={18} className="h-full">
        <article
          className={`group relative h-full overflow-hidden rounded-3xl ${
            dark ? "bg-midnight text-white" : "bg-secondary text-foreground"
          } shadow-[0_30px_80px_-40px_rgba(13,71,161,0.45)] transition-shadow duration-500 hover:shadow-[0_40px_120px_-30px_rgba(13,71,161,0.6)]`}
        >
          <div className="px-8 pt-10 md:px-12 md:pt-14">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              <span className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${dark ? "text-skyblue" : "text-slate-soft"}`}>
                {title}
              </span>
            </div>
            <h3 className="mt-5 max-w-md text-balance text-3xl font-bold leading-[1.05] tracking-tight md:text-[42px]">
              {power}
            </h3>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-signal transition group-hover:gap-2.5"
            >
              Learn more
              <span aria-hidden>→</span>
            </a>
            <div
              className={`mt-2 inline-flex h-9 w-9 items-center justify-center rounded-full ${
                dark ? "bg-white/5" : "bg-white"
              }`}
              style={{ transform: "translateZ(40px)" }}
            >
              <Icon className={`h-4 w-4 ${dark ? "text-skyblue" : "text-navy"}`} aria-hidden />
            </div>
          </div>
          <div className="mt-6 flex justify-center px-6 pb-6" style={{ transform: "translateZ(60px)" }}>
            <img
              src={image}
              alt={`${title} interface preview`}
              loading="lazy"
              className="h-auto w-full max-w-[420px] select-none drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </article>
      </Tilt3D>
    </motion.div>
  );
}
