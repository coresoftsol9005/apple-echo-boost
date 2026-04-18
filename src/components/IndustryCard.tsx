import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

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
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-3xl ${
        dark ? "bg-midnight text-white" : "bg-secondary text-foreground"
      }`}
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
        <div className={`mt-2 inline-flex h-9 w-9 items-center justify-center rounded-full ${dark ? "bg-white/5" : "bg-white"}`}>
          <Icon className={`h-4 w-4 ${dark ? "text-skyblue" : "text-navy"}`} aria-hidden />
        </div>
      </div>
      <div className="mt-6 flex justify-center px-6 pb-6">
        <img
          src={image}
          alt={`${title} interface preview`}
          loading="lazy"
          className="h-auto w-full max-w-[420px] select-none drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
    </motion.article>
  );
}
