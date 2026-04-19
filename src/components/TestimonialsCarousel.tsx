import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tilt3D } from "@/components/Tilt3D";

import avatarRajesh from "@/assets/avatar-rajesh.jpg";
import avatarAnil from "@/assets/avatar-anil.jpg";
import avatarPriya from "@/assets/avatar-priya.jpg";
import avatarVikram from "@/assets/avatar-vikram.jpg";

type Quote = {
  body: string;
  who: string;
  role: string;
  avatar: string;
  rating?: number;
};

const quotes: Quote[] = [
  {
    body: "CoreSoft ne hamare restaurant ki website 7 din mein bana di. Online orders ab triple ho gaye hain. Worth every rupee.",
    who: "Rajesh Kumar",
    role: "Owner · R.K. Family Restaurant, Hisar",
    avatar: avatarRajesh,
    rating: 5,
  },
  {
    body: "Pehle clinic ke liye Google par koi nahi dhundhta tha. Ab har hafte 40+ naye patients book kar rahe hain online.",
    who: "Dr. Anil Gupta",
    role: "MBBS, MD · Gupta Clinic",
    avatar: avatarAnil,
    rating: 5,
  },
  {
    body: "Instagram aur website dono ka combined work — bookings 3x ho gayi. Team responds within minutes on WhatsApp.",
    who: "Priya Sharma",
    role: "Founder · Glow Beauty Studio",
    avatar: avatarPriya,
    rating: 5,
  },
  {
    body: "Local SEO ne hamari shop ko Google Maps par No.1 kar diya. Walk-in customers literally double ho gaye hain.",
    who: "Vikram Singh",
    role: "Owner · Singh Electronics",
    avatar: avatarVikram,
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 5500, stopOnInteraction: true, stopOnMouseEnter: true }),
  );

  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[autoplay.current]}
      className="relative"
    >
      <CarouselContent className="-ml-4">
        {quotes.map((q, i) => (
          <CarouselItem key={q.who} className="basis-full pl-4 md:basis-1/2 lg:basis-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="h-full"
            >
              <Tilt3D max={3} lift={3} glare className="h-full">
                <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-[0_20px_60px_-30px_rgba(13,71,161,0.25)] transition-shadow duration-500 hover:shadow-[0_30px_80px_-25px_rgba(13,71,161,0.35)] md:p-10">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-6 top-2 select-none font-serif text-[140px] leading-none text-signal/10"
                    style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  >
                    “
                  </span>

                  <div className="relative">
                    {q.rating && (
                      <div className="mb-4 flex gap-0.5 text-signal">
                        {Array.from({ length: q.rating }).map((_, idx) => (
                          <Star key={idx} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                    )}
                    <blockquote
                      className="text-balance text-xl font-light leading-[1.35] text-foreground md:text-[26px]"
                      style={{ fontFamily: "'Newsreader', 'New York', Georgia, serif" }}
                    >
                      {q.body}
                    </blockquote>
                  </div>

                  <figcaption className="mt-8 flex items-center gap-4">
                    <img
                      src={q.avatar}
                      alt={q.who}
                      width={56}
                      height={56}
                      loading="lazy"
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-signal/20"
                    />
                    <div>
                      <div className="text-[15px] font-semibold text-navy">{q.who}</div>
                      <div className="mt-0.5 text-[12px] text-slate-soft">{q.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Tilt3D>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-8 flex items-center justify-center gap-3">
        <CarouselPrevious className="static h-10 w-10 translate-x-0 translate-y-0 border-border/70 bg-background text-navy hover:bg-secondary hover:text-signal" />
        <CarouselNext className="static h-10 w-10 translate-x-0 translate-y-0 border-border/70 bg-background text-navy hover:bg-secondary hover:text-signal" />
      </div>
    </Carousel>
  );
}
