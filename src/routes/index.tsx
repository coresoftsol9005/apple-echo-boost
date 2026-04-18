import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Toaster } from "sonner";
import { UtensilsCrossed, Stethoscope, Scissors, ArrowRight, Instagram, Facebook, Sparkles, Target, Users, Zap, Check, Gift } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { IndustryCard } from "@/components/IndustryCard";
import { LeadForm } from "@/components/LeadForm";
import { CoreSoftLogo } from "@/components/CoreSoftLogo";
import { Tilt3D } from "@/components/Tilt3D";
import { Magnetic } from "@/components/Magnetic";
import { TestimonialsGrid } from "@/components/TestimonialsGrid";
import { BrandsMarquee } from "@/components/BrandsMarquee";

import heroLaptop from "@/assets/hero-laptop.jpg";
import deviceRestaurant from "@/assets/device-restaurant.jpg";
import deviceDoctor from "@/assets/device-doctor.jpg";
import deviceSalon from "@/assets/device-salon.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CoreSoft Solutions — Innovation for every business." },
      {
        name: "description",
        content:
          "Apple-grade websites, Google ranking and digital audits for restaurants, clinics and salons. 7-day delivery. 3× growth. Hisar, Haryana.",
      },
      { property: "og:title", content: "CoreSoft Solutions — Innovation for every business." },
      {
        property: "og:description",
        content:
          "Premium digital media & business audits. 7-day delivery. WhatsApp +91 81681 94134.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />
      <Navbar />
      <WhatsAppFab />

      <Hero />
      <BrandsMarquee />
      <MetricsBar />
      <Services />
      <Industries />
      <FreeTrial />
      <About />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}

/* ───────────────── HERO ───────────────── */
function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const spring = { stiffness: 100, damping: 22, mass: 0.6 };
  const scrollLift = useSpring(useTransform(scrollYProgress, [0, 0.5], [20, 0]), spring);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Mouse-driven 3D parallax tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), spring);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), spring);
  const floatX = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), spring);
  const floatY = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), spring);

  // Derived parallax values for floating badges (must be at top level)
  const ratingX = useTransform(floatX, (v) => -v * 0.7);
  const ratingY = useTransform(floatY, (v) => -v * 0.7);
  const shipX = useTransform(floatX, (v) => v * 0.5);
  const shipY = useTransform(floatY, (v) => -v * 0.4);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = showcaseRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section ref={heroRef} className="spotlight-host bg-hero relative overflow-hidden pt-28 text-white md:pt-36">
      <span className="spotlight" aria-hidden />
      <motion.div className="pointer-events-none absolute inset-0" style={{ y: orbY }} aria-hidden>
        <div className="glow-orb glow-orb-navy left-1/2 top-[-200px] h-[600px] w-[1100px] -translate-x-1/2" />
        <div className="glow-orb glow-orb-red right-[-200px] top-40 h-[420px] w-[420px]" />
      </motion.div>
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal" /> Hisar · Digital Media · Business Audits
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display group mx-auto max-w-6xl text-balance text-[52px] font-bold leading-[0.98] tracking-[-0.045em] md:text-[112px] lg:text-[128px]"
        >
          <span className="inline-block bg-gradient-to-br from-white via-white to-light-blue bg-clip-text text-transparent transition-all duration-500 group-hover:from-white group-hover:via-[#FFCDD2] group-hover:to-[#E53935] group-hover:[text-shadow:0_0_60px_rgba(229,57,53,0.25)]">
            Innovation for
          </span>{" "}
          <span className="relative inline-block bg-gradient-to-br from-white via-light-blue to-light-blue bg-clip-text text-transparent transition-all duration-500 group-hover:from-[#E53935] group-hover:via-white group-hover:to-light-blue">
            every business.
            <span className="pointer-events-none absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-signal transition-all duration-700 group-hover:w-full" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-skyblue/85 md:text-xl"
        >
          Apne business ko digital banaiye — premium websites, Google ranking, aur lead-machines.
          Delivered in <span className="text-white">7 days</span>. Average{" "}
          <span className="text-white">3× growth</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Magnetic>
            <a
              href="#contact"
              className="btn-lift btn-shimmer group inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_20px_50px_-15px_rgba(229,57,53,0.6)]"
            >
              Get a free audit
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Magnetic>
          <Magnetic strength={4}>
            <a
              href="#industries"
              className="btn-lift btn-ghost-brand inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-[14px] font-semibold text-white"
            >
              See what we build
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="relative mx-auto mt-20 w-full max-w-[1280px]"
          style={{ perspective: 1600 }}
        >
          <motion.div
            ref={showcaseRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{
              rotateX: rotX,
              rotateY: rotY,
              y: scrollLift,
              transformStyle: "preserve-3d",
              transformOrigin: "50% 80%",
            }}
            className="relative will-change-transform"
          >
            {/* Ambient red wash under the laptop */}
            <div
              className="absolute inset-x-16 -bottom-10 h-32 rounded-full bg-signal/40 blur-3xl"
              aria-hidden
            />
            {/* Cool blue counter-glow on the left */}
            <div
              className="absolute -left-10 top-1/3 h-64 w-64 rounded-full bg-navy-mid/50 blur-3xl"
              aria-hidden
            />

            {/* Hero showcase image */}
            <img
              src={heroLaptop}
              alt="CoreSoft analytics dashboard with restaurant booking app, WhatsApp leads and 4.9 star reviews"
              width={1920}
              height={1080}
              className="relative mx-auto w-full rounded-[32px] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/10"
            />

            {/* Floating badge: live conversions */}
            <motion.div
              style={{ x: floatX, y: floatY, transform: "translateZ(60px)" }}
              className="absolute -left-4 top-12 hidden items-center gap-3 rounded-2xl border border-white/10 bg-midnight/85 px-4 py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl md:flex"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-signal opacity-70" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-signal" />
              </span>
              <div className="text-left">
                <div className="font-display text-[13px] font-semibold text-white">+18 leads today</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-skyblue/70">Live · Hisar</div>
              </div>
            </motion.div>

            {/* Floating badge: rating */}
            <motion.div
              style={{
                x: ratingX,
                y: ratingY,
                transform: "translateZ(80px)",
              }}
              className="absolute -right-4 top-1/3 hidden flex-col gap-1 rounded-2xl border border-white/10 bg-midnight/85 px-4 py-3 text-left shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl md:flex"
            >
              <div className="font-display flex items-center gap-1.5 text-[15px] font-semibold text-white">
                4.9 <span className="text-signal">★★★★★</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-skyblue/70">Avg client rating</div>
            </motion.div>

            {/* Floating badge: 7-day delivery */}
            <motion.div
              style={{
                x: shipX,
                y: shipY,
                transform: "translateZ(40px)",
              }}
              className="absolute -bottom-4 left-1/4 hidden items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-[12px] font-semibold text-white shadow-[0_18px_40px_-15px_rgba(229,57,53,0.5)] backdrop-blur-xl md:flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Shipped in 7 days
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────── METRICS ───────────────── */
function MetricsBar() {
  const stats = [
    { k: "7 Days", v: "Average delivery" },
    { k: "3×", v: "Revenue growth" },
    { k: "50+", v: "Local businesses" },
    { k: "30 min", v: "Response on WhatsApp" },
  ];
  return (
    <section className="border-y border-white/10 bg-midnight/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-10 md:grid-cols-4 md:px-8 md:py-14">
        {stats.map((s, i) => (
          <motion.div
            key={s.k}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tilt3D max={2.5} lift={1.5} glare={false} className="h-full">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center md:text-left">
                <div className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">{s.k}</div>
                <div className="mt-1 text-[12px] uppercase tracking-[0.16em] text-skyblue/70">{s.v}</div>
              </div>
            </Tilt3D>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── SERVICES (Apple-style intro tile) ───────────────── */
function Services() {
  return (
    <section id="services" className="bg-apple-canvas py-4 md:py-6">
      <div className="mx-auto max-w-[1400px] px-3 md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="apple-tile min-h-[420px] md:min-h-[520px]"
        >
          <div className="apple-eyebrow">The Hook</div>
          <h2 className="apple-headline">
            Apne Business ko
            <br />
            Digital Banaiye.
          </h2>
          <p className="apple-sub max-w-[560px]">
            Restaurant, clinic ya salon — har business ke liye custom packages.
            Premium sites, Google ranking, Instagram growth. Transparent pricing.
          </p>
          <div className="apple-cta-row">
            <a href="#industries" className="apple-pill apple-pill-primary">
              See packages
            </a>
            <a href="#contact" className="apple-pill apple-pill-secondary">
              Talk to us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────── INDUSTRIES (Apple-style tile grid) ───────────────── */
function Industries() {
  return (
    <section id="industries" className="bg-apple-canvas py-4 md:py-6">
      <div className="mx-auto grid max-w-[1400px] gap-3 px-3 md:grid-cols-2 md:gap-5 md:px-5">
        <IndustryCard
          icon={UtensilsCrossed}
          title="Restaurant & Café"
          power="Online ordering. Built for full tables."
          image={deviceRestaurant}
        />
        <IndustryCard
          icon={Stethoscope}
          title="Doctor & Clinic"
          power="Google Ranking #1. Built for trust."
          image={deviceDoctor}
          tone="dark"
        />
        <IndustryCard
          icon={Scissors}
          title="Salon & Spa"
          power="Instagram-first booking. Built for beauty."
          image={deviceSalon}
          tone="dark"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="h-full"
        >
          <article className="apple-tile h-full min-h-[480px] md:min-h-[560px]">
            <div className="apple-eyebrow">Every Other Business</div>
            <h3 className="apple-headline max-w-[420px]">
              Built for you. Whatever you do.
            </h3>
            <p className="apple-sub max-w-[460px]">
              Retail, services, contractors — agar aap local hain aur grow karna
              chahte ho, hum aapke liye banayenge.
            </p>
            <div className="apple-cta-row">
              <a href="#contact" className="apple-pill apple-pill-primary">
                Talk to us
              </a>
              <a href="#trial" className="apple-pill apple-pill-secondary">
                Try free
              </a>
            </div>
            <div className="apple-tile-media">
              <div
                aria-hidden
                className="mx-auto h-32 w-32 rounded-full md:h-44 md:w-44"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, oklch(0.62 0.22 27 / 0.55), transparent 60%), radial-gradient(circle at 70% 70%, oklch(0.50 0.15 260 / 0.5), transparent 60%)",
                }}
              />
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────── FREE TRIAL ───────────────── */
function FreeTrial() {
  const perks = [
    "Free 1-page premium website (live in 7 days)",
    "Google Business Profile setup & optimization",
    "Logo + brand colors refresh",
    "WhatsApp click-to-chat button + lead routing",
    "1 Instagram reel mockup with captions",
    "30-min strategy call with the founder",
  ];

  return (
    <section
      id="trial"
      className="relative overflow-hidden bg-midnight py-20 text-white md:py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-[-150px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(229,57,53,0.22),transparent)]" />
        <div className="absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(closest-side,rgba(13,71,161,0.45),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Tilt3D max={1} lift={1} glare={false} className="w-full">
            <div className="brand-border relative overflow-hidden rounded-3xl border border-white/10 bg-grad-navy p-8 shadow-card-soft md:p-14">
              <div className="grid items-center gap-10 md:grid-cols-12">
                {/* Left: copy */}
                <div className="md:col-span-7">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-3 py-1.5">
                    <Gift className="h-3.5 w-3.5 text-signal" />
                    <span className="font-mono-brand text-[10px] uppercase tracking-[0.22em] text-white">
                      Limited · 5 spots / month
                    </span>
                  </div>

                  <h2 className="font-display text-balance text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white md:text-6xl">
                    1-Week Free Trial.
                    <br />
                    <span className="text-grad-red">Zero risk. All proof.</span>
                  </h2>

                  <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-skyblue/85">
                    Pehle dekho, phir decide karo. Hum aapke business ke liye ek
                    complete starter pack 7 din mein build karke denge —{" "}
                    <span className="text-white">bilkul free</span>. Pasand aaye
                    toh continue karein. Nahi, toh keep it. Yours.
                  </p>

                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-2.5 text-[14px] text-skyblue/90"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/15 ring-1 ring-signal/30">
                          <Check className="h-3 w-3 text-signal" strokeWidth={3} />
                        </span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <Magnetic>
                      <a
                        href="#contact"
                        className="btn-lift btn-shimmer group inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_20px_50px_-15px_rgba(229,57,53,0.6)]"
                      >
                        Claim my free week
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </Magnetic>
                    <p className="text-[12px] text-skyblue/60">
                      No credit card. No contracts. No catch.
                    </p>
                  </div>
                </div>

                {/* Right: trust panel */}
                <div className="md:col-span-5">
                  <div
                    className="relative rounded-2xl border border-white/10 bg-midnight/60 p-6 backdrop-blur-xl"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono-brand text-[10px] uppercase tracking-[0.22em] text-skyblue/70">
                        Starter Pack Value
                      </span>
                      <span className="text-[11px] text-skyblue/50 line-through">
                        ₹24,999
                      </span>
                    </div>
                    <div className="mt-2 font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
                      ₹0
                    </div>
                    <div className="mt-1 text-[12px] uppercase tracking-[0.18em] text-signal">
                      First week, on us
                    </div>

                    <div className="my-6 h-px w-full bg-white/10" />

                    <ul className="space-y-3 text-[13px] text-skyblue/85">
                      <TrustRow label="Delivery" value="7 days" />
                      <TrustRow label="Strategy call" value="30 min · founder" />
                      <TrustRow label="Cancellation" value="Anytime, no fee" />
                    </ul>

                    <div className="mt-6">
                      <SpotsTicker total={5} daysPerSpot={6} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tilt3D>
        </motion.div>
      </div>
    </section>
  );
}

function TrustRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-center justify-between gap-4">
      <span className="text-skyblue/60">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </li>
  );
}

function SpotsTicker({ total, daysPerSpot = 6 }: { total: number; daysPerSpot?: number }) {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [monthName, setMonthName] = useState("This month");
  const [claimed, setClaimed] = useState(0);

  const left = Math.max(total - claimed, 0);
  const pct = Math.min(100, (claimed / total) * 100);

  useEffect(() => {
    const compute = () => {
      const now = new Date();
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime();
      const diff = Math.max(end - now.getTime(), 0);
      return {
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        mins: Math.floor((diff % 3_600_000) / 60_000),
        secs: Math.floor((diff % 60_000) / 1000),
      };
    };
    const computeClaimed = () => {
      const now = new Date();
      // Day-of-month based decay: 1 spot consumed per `daysPerSpot` days, max total-1 (always leave 1).
      const decayed = Math.floor((now.getDate() - 1) / daysPerSpot);
      return Math.min(decayed, total - 1);
    };
    setMonthName(new Date().toLocaleString("en-US", { month: "long" }));
    setT(compute());
    setClaimed(computeClaimed());
    setMounted(true);
    const id = setInterval(() => {
      setT(compute());
      setClaimed(computeClaimed());
    }, 1000);
    return () => clearInterval(id);
  }, [daysPerSpot, total]);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-signal opacity-70" />
            <span className="relative h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-skyblue/70">
            {monthName} spots
          </span>
        </div>
        <span className="font-mono-brand text-[11px] text-white">
          <span className="text-signal">{left}</span>
          <span className="text-skyblue/50"> / {total} left</span>
        </span>
      </div>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-signal to-signal/60 transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-skyblue/60">
        <span>Window closes in</span>
        <span className="font-mono-brand text-white" suppressHydrationWarning>
          {mounted ? `${t.days}d · ${pad(t.hours)}:${pad(t.mins)}:${pad(t.secs)}` : "—"}
        </span>
      </div>
    </div>
  );
}

/* ───────────────── ABOUT ───────────────── */
function About() {
  const values = [
    {
      icon: Zap,
      title: "7-Day Delivery",
      body: "No agency delays. Most projects ship in a week — design, build, launch.",
    },
    {
      icon: Target,
      title: "Local-First Strategy",
      body: "Built for Hisar businesses. Google Maps, regional SEO, vernacular content.",
    },
    {
      icon: Sparkles,
      title: "Apple-Grade Craft",
      body: "Premium typography, motion, and micro-interactions. Every pixel intentional.",
    },
    {
      icon: Users,
      title: "Founder-Led Service",
      body: "Talk directly to the people building your site. No account managers, no handoffs.",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="glow-orb glow-orb-navy left-[-180px] top-32 h-[420px] w-[420px]" />
      <div className="glow-orb glow-orb-red right-[-150px] bottom-20 h-[360px] w-[360px]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-start gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow mb-5 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" /> About CoreSoft
            </div>
            <h2 className="font-display text-balance text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white md:text-6xl">
              A Hisar studio
              <br />
              building <span className="text-grad-red">India's local heroes.</span>
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-skyblue/80">
              CoreSoft Solutions started with one belief: every kirana, clinic and café in Haryana
              deserves the same digital craft as a Bengaluru startup. We design, code and launch
              premium websites — fast, transparent, and built to convert.
            </p>
            <p className="mt-4 text-pretty text-skyblue/70">
              Hisar mein based, but trusted by businesses across Haryana, Punjab and Delhi NCR.
            </p>

            <div className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-8">
              <Stat k="50+" v="Businesses launched" />
              <Stat k="98%" v="Client retention" />
              <Stat k="2024" v="Founded in Hisar" />
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Tilt3D max={1.5} lift={2} depth={8} className="h-full">
                    <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-signal/30 hover:bg-white/[0.05]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-grad-navy ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
                        <val.icon className="h-5 w-5 text-skyblue" aria-hidden />
                      </div>
                      <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-white">
                        {val.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-skyblue/75">{val.body}</p>
                    </div>
                  </Tilt3D>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">{k}</div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-skyblue/60">{v}</div>
    </div>
  );
}

/* ───────────────── TESTIMONIALS (grid + marquee) ───────────────── */
function Testimonials() {
  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-midnight py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-[500px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(13,71,161,0.45),transparent)]" />
        <div className="absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(229,57,53,0.18),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-skyblue">
            <span className="h-px w-8 bg-skyblue/40" />
            Client Results
            <span className="h-px w-8 bg-skyblue/40" />
          </div>
          <h2 className="text-balance text-5xl font-bold leading-[1.02] tracking-[-0.04em] md:text-7xl">
            Real Businesses,{" "}
            <span className="bg-gradient-to-br from-signal via-signal to-[#FF7A6E] bg-clip-text text-transparent">
              Real Growth
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-skyblue/80">
            Haryana ke local businesses jo CoreSoft ke saath scale kar rahe hain — unke words mein.
          </p>
          <p className="mt-3 text-[12px] uppercase tracking-[0.18em] text-skyblue/50">
            Tap any card to see their result
          </p>
        </div>

        <TestimonialsGrid />
      </div>
    </section>
  );
}

/* ───────────────── CONTACT ───────────────── */
function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-midnight py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(13,71,161,0.5),transparent)]" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(closest-side,rgba(229,57,53,0.22),transparent)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-skyblue">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" /> Let's Talk
          </div>
          <h2 className="text-balance text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white md:text-6xl">
            Your audit is{" "}
            <span className="text-signal">free</span>.
            <br />
            Your growth isn't.
          </h2>
          <p className="mt-6 max-w-md text-pretty text-lg text-skyblue/80">
            Send us a message — we'll review your business online and respond on
            WhatsApp within 30 minutes.
          </p>
          <div className="mt-10 space-y-4 text-skyblue/90">
            <a href="https://wa.me/918168194134" className="block text-lg font-medium text-white transition hover:text-signal">
              +91 81681 94134
            </a>
            <p className="text-[13px] uppercase tracking-[0.18em] text-skyblue/60">
              Hisar, Haryana · India
            </p>
          </div>
        </div>

        <div className="flex md:col-span-7">
          <Tilt3D max={1.5} lift={1} glare={false} className="w-full">
            <LeadForm />
          </Tilt3D>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── FOOTER ───────────────── */
function Footer() {
  return (
    <footer className="bg-midnight text-skyblue/70">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <CoreSoftLogo variant="dark" className="h-10 w-auto" />
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed">
              Premium digital media and business audits for India's local heroes.
              Built in Hisar, Haryana.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-skyblue/50">Contact</p>
            <a href="https://wa.me/918168194134" className="block text-white/90 transition hover:text-signal">+91 81681 94134</a>
            <a href="mailto:rkentra9005@gmail.com" className="mt-2 block transition hover:text-white">rkentra9005@gmail.com</a>
          </div>
          <div className="md:col-span-3">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-skyblue/50">Follow</p>
            <div className="flex gap-3">
              <SocialIcon href="https://facebook.com/coresoft.solutions" label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://instagram.com/coresoft.solutions" label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[12px] md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} CoreSoft Solutions. All rights reserved.</p>
          <p className="text-skyblue/50">Designed in Hisar · Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="btn-lift inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:border-signal hover:bg-signal hover:text-white"
    >
      {children}
    </a>
  );
}
