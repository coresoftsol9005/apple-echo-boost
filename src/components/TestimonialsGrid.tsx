import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import { Tilt3D } from "@/components/Tilt3D";

import avatarRajesh from "@/assets/avatar-rajesh.jpg";
import avatarPriya from "@/assets/avatar-priya.jpg";
import avatarAmit from "@/assets/avatar-amit.jpg";
import avatarSunita from "@/assets/avatar-sunita.jpg";
import avatarVikram from "@/assets/avatar-vikram.jpg";
import avatarNeha from "@/assets/avatar-neha.jpg";

type Testimonial = {
  category: string;
  body: string;
  name: string;
  business: string;
  initials: string;
  avatar: string;
  result: string;
};

const testimonials: Testimonial[] = [
  {
    category: "Restaurant",
    body: "CoreSoft ne hamare restaurant ki online presence completely transform kar di. Google par pehle hum page 4 par the, ab top 3 mein hain. Monthly orders 3x ho gaye sirf 45 din mein.",
    name: "Rajesh Sharma",
    business: "Sharma Family Restaurant",
    initials: "RS",
    avatar: avatarRajesh,
    result: "3× more orders in 45 days",
  },
  {
    category: "Salon & Spa",
    body: "WhatsApp automation aur Instagram management ne humari booking 80% badha di. Ab hume manually follow-up nahi karna padta — sab automatic ho gaya hai. Best investment ever!",
    name: "Priya Mehta",
    business: "Glow Beauty Salon",
    initials: "PM",
    avatar: avatarPriya,
    result: "80% increase in bookings",
  },
  {
    category: "Healthcare",
    body: "Meri clinic ke liye website aur Google My Business setup kiya CoreSoft ne. Ab roz 8–10 new patient inquiries aati hain online se. Pehle sirf walk-ins the. Kaam bahut professional hai.",
    name: "Dr. Amit Verma",
    business: "Verma Dental Clinic",
    initials: "AV",
    avatar: avatarAmit,
    result: "8–10 new patient leads daily",
  },
  {
    category: "Retail",
    body: "Social media content aur paid ads se hamare boutique ki reach Haryana bhar mein ho gayi. Online orders shuru ho gaye aur festival season mein revenue 2.5x tha last year se.",
    name: "Sunita Agarwal",
    business: "Agarwal Boutique",
    initials: "SA",
    avatar: avatarSunita,
    result: "2.5× festival revenue growth",
  },
  {
    category: "Service Business",
    body: "Pehle sirf referrals se kaam milta tha. CoreSoft ki team ne Google Ads aur local SEO se itne leads dilaye ki ab hume 2 aur electricians hire karne pade. Bahut acha ROI mila.",
    name: "Vikram Singh",
    business: "Singh Electrical Services",
    initials: "VS",
    avatar: avatarVikram,
    result: "Hired 2 new electricians",
  },
  {
    category: "Education",
    body: "Admission season mein CoreSoft ki digital campaign se 40+ new admissions mile. Website, Facebook ads, aur WhatsApp follow-up — sab kuch ek jagah se manage hua. Superb team!",
    name: "Neha Gupta",
    business: "Little Stars Play School",
    initials: "NG",
    avatar: avatarNeha,
    result: "40+ new admissions",
  },
];

export function TestimonialsGrid() {
  return (
    <div className="space-y-12">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            <Tilt3D max={1.5} lift={3} depth={10} className="h-full">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-500 hover:border-signal/40 hover:bg-white/[0.05] hover:shadow-[0_30px_80px_-30px_rgba(229,57,53,0.4)] md:p-8">
                {/* corner glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-signal/0 blur-3xl transition-all duration-700 group-hover:bg-signal/30" />

                <header className="relative flex items-start justify-between">
                  <div className="flex gap-0.5 text-signal">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-skyblue/70">
                    {t.category}
                  </span>
                </header>

                <blockquote className="relative mt-6 text-[15px] leading-relaxed text-white/85">
                  &ldquo;{t.body}&rdquo;
                </blockquote>

                <footer className="relative mt-8 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-signal to-navy ring-1 ring-white/10">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        width={88}
                        height={88}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[11px] font-bold tracking-wider text-white opacity-0">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-white">{t.name}</div>
                      <div className="mt-0.5 text-[12px] text-skyblue/70">{t.business}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-skyblue/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                </footer>
              </article>
            </Tilt3D>
          </motion.div>
        ))}
      </div>

      {/* Marquee strip */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-midnight to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-midnight to-transparent" />
        <div className="flex w-max animate-cs-marquee gap-12 pr-12">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={`${t.name}-${i}`} className="flex shrink-0 items-center gap-3">
              <div className="h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/15">
                <img
                  src={t.avatar}
                  alt=""
                  width={72}
                  height={72}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-[13px] font-semibold text-white">{t.name}</span>
              <span className="h-1 w-1 rounded-full bg-skyblue/40" />
              <span className="text-[13px] font-medium text-signal">{t.result}</span>
              <span className="ml-6 h-4 w-px bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
