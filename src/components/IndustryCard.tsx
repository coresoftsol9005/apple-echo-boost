import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  power: string;
  image: string;
  /** light = soft Apple grey, dark = deep navy gradient */
  tone?: "light" | "dark";
};

export function IndustryCard({ icon: Icon, title, power, image, tone = "light" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <article className={`apple-tile ${tone === "dark" ? "is-dark" : ""} h-full min-h-[480px] md:min-h-[560px]`}>
        <div className="apple-eyebrow inline-flex items-center gap-2">
          <Icon className="h-3.5 w-3.5" aria-hidden />
          {title}
        </div>
        <h3 className="apple-headline max-w-[420px]">{power}</h3>
        <div className="apple-cta-row">
          <a href="#contact" className="apple-pill apple-pill-primary">
            Learn more
          </a>
          <a href="#contact" className="apple-pill apple-pill-secondary">
            Get a quote
          </a>
        </div>
        <div className="apple-tile-media">
          <img
            src={image}
            alt={`${title} interface preview`}
            loading="lazy"
            className="max-w-[420px] select-none drop-shadow-2xl"
          />
        </div>
      </article>
    </motion.div>
  );
}
