import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Toaster } from "sonner";
import { UtensilsCrossed, Stethoscope, Scissors, ArrowRight, Instagram, Facebook } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { IndustryCard } from "@/components/IndustryCard";
import { LeadForm } from "@/components/LeadForm";
import { CoreSoftLogo } from "@/components/CoreSoftLogo";
import { Tilt3D } from "@/components/Tilt3D";
import { Magnetic } from "@/components/Magnetic";
import { TestimonialsGrid } from "@/components/TestimonialsGrid";

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
      <MetricsBar />
      <Services />
      <Industries />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}

/* ───────────────── HERO ───────────────── */
function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const spring = { stiffness: 100, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.5], [5, 0]), spring);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.4], [0.985, 1]), spring);
  const lift = useSpring(useTransform(scrollYProgress, [0, 0.5], [20, 0]), spring);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-midnight pt-28 text-white md:pt-36">
      <motion.div className="pointer-events-none absolute inset-0 opacity-60" style={{ y: orbY }} aria-hidden>
        <div className="absolute -top-40 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(13,71,161,0.55),transparent)]" />
        <div className="absolute right-[-200px] top-40 h-[400px] w-[400px] rounded-full bg-[radial-gradient(closest-side,rgba(229,57,53,0.18),transparent)]" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-skyblue backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal" /> Hisar · Digital Media · Business Audits
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="group mx-auto max-w-6xl text-balance text-[52px] font-bold leading-[0.98] tracking-[-0.045em] md:text-[112px] lg:text-[128px]"
        >
          <span className="inline-block bg-gradient-to-br from-white via-white to-[#90CAF9] bg-clip-text text-transparent transition-all duration-500 group-hover:from-white group-hover:via-[#FFCDD2] group-hover:to-[#E53935] group-hover:[text-shadow:0_0_60px_rgba(229,57,53,0.25)]">
            Innovation for
          </span>{" "}
          <span className="relative inline-block bg-gradient-to-br from-white via-[#90CAF9] to-[#90CAF9] bg-clip-text text-transparent transition-all duration-500 group-hover:from-[#E53935] group-hover:via-white group-hover:to-[#90CAF9]">
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
              className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_20px_50px_-15px_rgba(229,57,53,0.6)] transition hover:brightness-110"
            >
              Get a free audit <ArrowRight className="h-4 w-4" />
            </a>
          </Magnetic>
          <Magnetic strength={4}>
            <a
              href="#industries"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-[14px] font-semibold text-white transition hover:bg-white/10"
            >
              See what we build
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="relative mx-auto mt-16 w-full max-w-5xl"
          style={{ perspective: 1400 }}
        >
          <motion.div
            style={{ rotateX, scale, y: lift, transformStyle: "preserve-3d", transformOrigin: "50% 100%" }}
            className="relative will-change-transform"
          >
            <div className="absolute inset-x-10 -bottom-4 h-20 rounded-full bg-signal/30 blur-3xl" aria-hidden />
            <img
              src={heroLaptop}
              alt="MacBook displaying CoreSoft business dashboard"
              width={1920}
              height={1080}
              className="relative mx-auto w-full rounded-[28px] shadow-[0_60px_140px_-30px_rgba(0,0,0,0.8)]"
            />
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
    <section className="border-y border-border bg-secondary/40">
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
              <div className="rounded-2xl bg-background/60 p-5 text-center md:text-left">
                <div className="text-3xl font-bold tracking-tight text-navy md:text-4xl">{s.k}</div>
                <div className="mt-1 text-[12px] uppercase tracking-[0.16em] text-slate-soft">{s.v}</div>
              </div>
            </Tilt3D>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── SERVICES (the hook) ───────────────── */
function Services() {
  return (
    <section id="services" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-signal">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" /> The Hook
            </div>
            <h2 className="text-balance text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-navy md:text-6xl">
              Apne Business ko
              <br />
              <span className="bg-gradient-to-r from-navy via-navy to-signal bg-clip-text text-transparent">
                Digital Banaiye.
              </span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-pretty text-lg leading-relaxed text-slate-soft">
              Chahe restaurant ho, clinic ho, ya salon — humne har business ke liye
              custom packages banaye hain. Professional sites, Google ranking, aur
              Instagram growth — sab ek hi jagah, transparent pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── INDUSTRIES ───────────────── */
function Industries() {
  return (
    <section id="industries" className="bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-5 md:grid-cols-2">
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
          >
            <Tilt3D max={1.5} lift={2} depth={7} className="h-full">
              <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-10 text-white shadow-[0_30px_80px_-30px_rgba(13,71,161,0.6)] md:p-12">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skyblue">
                    Every Other Business
                  </span>
                </div>
                <h3 className="mt-5 max-w-md text-balance text-3xl font-bold leading-[1.05] md:text-[42px]">
                  Built for you. Whatever you do.
                </h3>
                <p className="mt-4 max-w-md text-skyblue/80">
                  Retail, services, contractors — agar aap local hain aur grow karna chahte ho,
                  hum aapke liye banayenge.
                </p>
                <Magnetic>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-[13px] font-semibold uppercase tracking-wider text-white transition hover:brightness-110"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    Talk to us <ArrowRight className="h-4 w-4" />
                  </a>
                </Magnetic>
              </div>
            </Tilt3D>
          </motion.div>
        </div>
      </div>
    </section>
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
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-signal hover:bg-signal hover:text-white"
    >
      {children}
    </a>
  );
}
