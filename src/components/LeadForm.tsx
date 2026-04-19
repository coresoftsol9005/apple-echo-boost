import { useState } from "react";
import { toast } from "sonner";

type FormData = {
  fname: string;
  lname: string;
  cc: string;
  acode: string;
  phone: string;
  email: string;
  city: string;
  bname: string;
  ig: string;
  fb: string;
  web: string;
  category: string;
  services: string[];
  about: string;
  challenge: string;
  budget: string;
  extra: string;
  source: string;
};

const initialData: FormData = {
  fname: "",
  lname: "",
  cc: "+91",
  acode: "",
  phone: "",
  email: "",
  city: "",
  bname: "",
  ig: "",
  fb: "",
  web: "",
  category: "",
  services: [],
  about: "",
  challenge: "",
  budget: "",
  extra: "",
  source: "",
};

const categories = [
  { id: "restaurant", icon: "🍽️", label: "Restaurant / Café / Dhaba", sub: "Food, delivery, menu, orders" },
  { id: "salon", icon: "💅", label: "Salon / Spa / Beauty Parlour", sub: "Bookings, gallery, offers" },
  { id: "clinic", icon: "🏥", label: "Doctor / Clinic / Dentist", sub: "Appointments, trust, reviews" },
  { id: "service", icon: "🔧", label: "Service Business", sub: "Plumber, electrician, contractor etc." },
  { id: "retail", icon: "🛍️", label: "Retail / Shop / Boutique", sub: "Product listings, local discovery" },
  { id: "other", icon: "🏢", label: "Other Business", sub: "We cover all local businesses" },
];

const services = [
  { id: "website", label: "Website Design & Development", sub: "Professional site, mobile-friendly, fast" },
  { id: "seo", label: "Google SEO & Local Visibility", sub: "Rank higher on Google Maps & Search" },
  { id: "social", label: "Social Media Management", sub: "Instagram, Facebook — regular content" },
  { id: "gmb", label: "Google My Business Setup", sub: "Profile, reviews, photos, posts" },
  { id: "whatsapp", label: "WhatsApp Marketing & CRM", sub: "Automated campaigns, lead capture" },
  { id: "content", label: "Content & Graphic Design", sub: "Posts, banners, reels, videos" },
  { id: "ads", label: "Paid Ads (Google / Meta)", sub: "Run targeted local ads" },
  { id: "audit", label: "Digital Business Audit", sub: "Full review of your online presence" },
];

const budgets = [
  { id: "b1", label: "₹5,000 – ₹10,000 / month", sub: "Starter — essentials only" },
  { id: "b2", label: "₹10,000 – ₹20,000 / month", sub: "Growth — website + SEO + social" },
  { id: "b3", label: "₹20,000 – ₹50,000 / month", sub: "Professional — full digital presence" },
  { id: "b4", label: "₹50,000+ / month", sub: "Premium — aggressive growth & ads" },
  { id: "b5", label: "Not sure yet", sub: "Tell us your goal, we'll suggest a plan" },
];

const budgetLabels: Record<string, string> = {
  b1: "₹5k–₹10k/month",
  b2: "₹10k–₹20k/month",
  b3: "₹20k–₹50k/month",
  b4: "₹50k+/month",
  b5: "Not sure yet",
};

const catLabels: Record<string, string> = {
  restaurant: "Restaurant/Café",
  salon: "Salon/Spa",
  clinic: "Doctor/Clinic",
  service: "Service Business",
  retail: "Retail/Shop",
  other: "Other",
};

const TOTAL_STEPS = 8;

export function LeadForm() {
  const [step, setStep] = useState(0); // 0 = welcome, 1..8 = questions, 9 = success
  const [data, setData] = useState<FormData>(initialData);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const pct = step === 0 ? 5 : step >= 9 ? 100 : (step / TOTAL_STEPS) * 100;

  const validateAndNext = () => {
    if (step === 1) {
      if (!data.fname.trim() || !data.lname.trim()) {
        toast.error("Please enter your first and last name.");
        return;
      }
    }
    if (step === 2) {
      if (!data.phone.trim() || !data.email.trim()) {
        toast.error("Please fill in your WhatsApp number and email.");
        return;
      }
    }
    if (step === 3) {
      if (!data.bname.trim()) {
        toast.error("Please enter your business name.");
        return;
      }
    }
    if (step === 4) {
      if (!data.category) {
        toast.error("Please select your business type.");
        return;
      }
    }
    if (step === 5) {
      if (data.services.length === 0) {
        toast.error("Please select at least one service.");
        return;
      }
    }
    if (step === 6) {
      if (!data.about.trim()) {
        toast.error("Please describe your business briefly.");
        return;
      }
    }
    if (step === 7) {
      if (!data.budget) {
        toast.error("Please select a budget range.");
        return;
      }
    }
    next();
  };

  const submit = () => {
    setStep(9);
    toast.success("Thanks! We'll respond within 30 minutes on WhatsApp.");
  };

  const openWhatsApp = () => {
    const msg = `Hello CoreSoft Solutions! I just filled your discovery form.

Name: ${data.fname} ${data.lname}
Business: ${data.bname}
Category: ${catLabels[data.category] || data.category}
Services: ${data.services.join(", ")}
Budget: ${budgetLabels[data.budget] || data.budget}
About: ${data.about}
Phone: ${data.cc} ${data.acode} ${data.phone}
Email: ${data.email}
City: ${data.city}
Notes: ${data.extra}`;
    window.open(`https://wa.me/918168194134?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  return (
    <div className="cs-form w-full max-w-[640px] overflow-hidden rounded-2xl border border-skyblue/12 bg-[#0F1F3A] text-white shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)]">
      {/* Progress bar */}
      <div className="h-[3px] bg-skyblue/15">
        <div
          className="h-full rounded-r-sm bg-signal transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Top accent */}
      <div className="h-1 bg-signal" />

      <div className="px-6 py-8 md:px-10 md:py-9">
        {step === 0 && <WelcomeStep onStart={next} />}
        {step === 1 && (
          <NameStep data={data} update={update} onNext={validateAndNext} />
        )}
        {step === 2 && (
          <ContactStep data={data} update={update} onNext={validateAndNext} onBack={prev} />
        )}
        {step === 3 && (
          <BusinessStep data={data} update={update} onNext={validateAndNext} onBack={prev} />
        )}
        {step === 4 && (
          <CategoryStep data={data} update={update} onNext={validateAndNext} onBack={prev} />
        )}
        {step === 5 && (
          <ServicesStep data={data} update={update} onNext={validateAndNext} onBack={prev} />
        )}
        {step === 6 && (
          <GoalsStep data={data} update={update} onNext={validateAndNext} onBack={prev} />
        )}
        {step === 7 && (
          <BudgetStep data={data} update={update} onNext={validateAndNext} onBack={prev} />
        )}
        {step === 8 && (
          <ExtraStep data={data} update={update} onSubmit={submit} onBack={prev} />
        )}
        {step === 9 && <SuccessStep data={data} onWhatsApp={openWhatsApp} />}
      </div>

      <div className="flex items-center justify-between bg-[#070E1C] px-6 py-3 md:px-10">
        <p className="text-[11px] tracking-wider text-textmute">
          CoreSoft Solutions · Hisar, Haryana · +91 81681 94134
        </p>
        <div className="h-[2px] w-8 rounded-sm bg-signal" />
      </div>

      <style>{`
        .cs-input {
          width: 100%;
          background: rgba(10,22,40,0.8);
          border: 1px solid rgba(144,202,249,0.2);
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 14px;
          color: #fff;
          outline: none;
          transition: border-color .2s;
          font-family: inherit;
        }
        .cs-input::placeholder { color: #546E8A; }
        .cs-input:focus { border-color: #0D47A1; }
        .cs-textarea { resize: vertical; min-height: 100px; }
        .cs-label {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #546E8A;
          font-weight: 700;
          display: block;
          margin-bottom: 8px;
        }
        .cs-required { color: #E53935; margin-left: 2px; }
        .cs-step-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #90CAF9;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .cs-step-dot { width: 6px; height: 6px; border-radius: 50%; background: #E53935; }
        .cs-question {
          font-size: 22px;
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.5px;
          line-height: 1.25;
          margin-bottom: 8px;
        }
        .cs-question .accent { color: #E53935; }
        .cs-hint { font-size: 13px; color: #546E8A; margin-bottom: 24px; line-height: 1.6; }
        .cs-option {
          display: flex; align-items: center; gap: 12px;
          background: rgba(10,22,40,0.6);
          border: 1px solid rgba(144,202,249,0.15);
          border-radius: 10px;
          padding: 14px 16px;
          cursor: pointer;
          transition: all .2s;
          width: 100%;
          text-align: left;
        }
        .cs-option:hover { border-color: #0D47A1; background: rgba(13,71,161,0.1); }
        .cs-option.selected { border-color: #E53935; background: rgba(229,57,53,0.08); }
        .cs-option-mark {
          width: 18px; height: 18px;
          border-radius: 4px;
          border: 1.5px solid rgba(144,202,249,0.3);
          background: transparent;
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          transition: all .2s;
        }
        .cs-option.radio .cs-option-mark { border-radius: 50%; }
        .cs-option.selected .cs-option-mark { background: #E53935; border-color: #E53935; }
        .cs-option-text { font-size: 14px; color: #fff; font-weight: 500; }
        .cs-option-sub { font-size: 11px; color: #546E8A; margin-top: 2px; }
        .cs-btn-back {
          background: transparent;
          border: 1px solid rgba(144,202,249,0.2);
          color: #90CAF9;
          font-size: 13px; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: all .2s;
          font-family: inherit;
        }
        .cs-btn-back:hover { border-color: #90CAF9; background: rgba(144,202,249,0.05); }
        .cs-btn-next {
          background: #E53935;
          border: none;
          color: #fff;
          font-size: 13px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 12px 28px;
          border-radius: 8px;
          cursor: pointer;
          transition: all .2s;
          font-family: inherit;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .cs-btn-next:hover { background: #B71C1C; }
        .cs-step-counter {
          font-size: 11px; color: #546E8A; letter-spacing: 1px;
          font-family: 'DM Mono', ui-monospace, monospace;
        }
        .cs-nav {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 28px; padding-top: 20px;
          border-top: 1px solid rgba(144,202,249,0.08);
          gap: 12px;
        }
      `}</style>
    </div>
  );
}

/* ---------- Step Components ---------- */

function StepNav({
  counter,
  onBack,
  onNext,
  nextLabel = "Next  →",
}: {
  counter: string;
  onBack?: () => void;
  onNext: () => void;
  nextLabel?: string;
}) {
  return (
    <div className="cs-nav">
      {onBack ? (
        <button type="button" className="cs-btn-back" onClick={onBack}>
          ← Back
        </button>
      ) : (
        <span />
      )}
      <span className="cs-step-counter">{counter}</span>
      <button type="button" className="cs-btn-next" onClick={onNext}>
        {nextLabel}
      </button>
    </div>
  );
}

function WelcomeStep({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-signal bg-signal/10">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#E53935" strokeWidth={2} strokeLinecap="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>
      <div className="cs-step-tag justify-center">
        <span className="cs-step-dot" /> Client Discovery Form
      </div>
      <div className="cs-question">
        Apka Business,
        <br />
        <span className="accent">Hamaari Digital Expertise.</span>
      </div>
      <p className="mx-auto mt-3 max-w-[400px] text-sm leading-7 text-textmute">
        Tell us about your business in a few quick steps. We'll review your details and get back to
        you within 30 minutes on WhatsApp.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
        <Stat label="Delivery" value="7 Din" />
        <div className="h-8 w-px bg-skyblue/10" />
        <Stat label="Response" value="30 Min" />
        <div className="h-8 w-px bg-skyblue/10" />
        <Stat label="Transparent" value="100%" />
      </div>
      <div className="mt-8 flex justify-center">
        <button type="button" className="cs-btn-next" onClick={onStart}>
          Let's Get Started  →
        </button>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-lg font-black text-signal">{value}</div>
      <div className="text-[10px] uppercase tracking-[0.15em] text-textmute">{label}</div>
    </div>
  );
}

type StepProps = {
  data: FormData;
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
  onNext: () => void;
  onBack?: () => void;
};

function NameStep({ data, update, onNext }: StepProps) {
  return (
    <div>
      <div className="cs-step-tag">
        <span className="cs-step-dot" /> Step 1 of 8
      </div>
      <div className="cs-question">
        Aapka naam kya hai?<span className="accent">*</span>
      </div>
      <p className="cs-hint">Let's start with the basics — your full name.</p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label className="cs-label">
            First Name<span className="cs-required">*</span>
          </label>
          <input
            className="cs-input"
            placeholder="e.g. Rohit"
            value={data.fname}
            onChange={(e) => update("fname", e.target.value)}
          />
        </div>
        <div>
          <label className="cs-label">
            Last Name<span className="cs-required">*</span>
          </label>
          <input
            className="cs-input"
            placeholder="e.g. Kumar"
            value={data.lname}
            onChange={(e) => update("lname", e.target.value)}
          />
        </div>
      </div>
      <StepNav counter="01 / 08" onNext={onNext} />
    </div>
  );
}

function ContactStep({ data, update, onNext, onBack }: StepProps) {
  return (
    <div>
      <div className="cs-step-tag">
        <span className="cs-step-dot" /> Step 2 of 8
      </div>
      <div className="cs-question">
        Hum aapse kaise connect karein?<span className="accent">*</span>
      </div>
      <p className="cs-hint">Your WhatsApp number and email — we'll reach you within 30 minutes.</p>

      <div className="mb-3">
        <label className="cs-label">
          WhatsApp / Phone<span className="cs-required">*</span>
        </label>
        <div className="grid grid-cols-[90px_90px_1fr] gap-2">
          <input
            className="cs-input"
            placeholder="+91"
            value={data.cc}
            onChange={(e) => update("cc", e.target.value)}
          />
          <input
            className="cs-input"
            placeholder="Area"
            value={data.acode}
            onChange={(e) => update("acode", e.target.value)}
          />
          <input
            className="cs-input"
            placeholder="81681 94XXX"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="cs-label">
          Email Address<span className="cs-required">*</span>
        </label>
        <input
          className="cs-input"
          type="email"
          placeholder="you@yourbusiness.com"
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="cs-label">City / Location</label>
        <input
          className="cs-input"
          placeholder="e.g. Hisar, Haryana"
          value={data.city}
          onChange={(e) => update("city", e.target.value)}
        />
      </div>

      <StepNav counter="02 / 08" onNext={onNext} onBack={onBack} />
    </div>
  );
}

function BusinessStep({ data, update, onNext, onBack }: StepProps) {
  return (
    <div>
      <div className="cs-step-tag">
        <span className="cs-step-dot" /> Step 3 of 8
      </div>
      <div className="cs-question">
        Aapke business ka naam kya hai?<span className="accent">*</span>
      </div>
      <p className="cs-hint">
        Tell us your brand name and social handles — so we can do a quick online audit before we speak.
      </p>

      <div className="mb-3">
        <label className="cs-label">
          Business / Brand Name<span className="cs-required">*</span>
        </label>
        <input
          className="cs-input"
          placeholder="e.g. Sharma Restaurant, Riya Beauty Salon"
          value={data.bname}
          onChange={(e) => update("bname", e.target.value)}
        />
      </div>

      <div className="mb-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label className="cs-label">Instagram Handle</label>
          <input
            className="cs-input"
            placeholder="@yourbrand"
            value={data.ig}
            onChange={(e) => update("ig", e.target.value)}
          />
        </div>
        <div>
          <label className="cs-label">Facebook Page</label>
          <input
            className="cs-input"
            placeholder="facebook.com/yourbrand"
            value={data.fb}
            onChange={(e) => update("fb", e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="cs-label">Website (if any)</label>
        <input
          className="cs-input"
          placeholder="https://yourbusiness.com"
          value={data.web}
          onChange={(e) => update("web", e.target.value)}
        />
      </div>

      <StepNav counter="03 / 08" onNext={onNext} onBack={onBack} />
    </div>
  );
}

function CategoryStep({ data, update, onNext, onBack }: StepProps) {
  return (
    <div>
      <div className="cs-step-tag">
        <span className="cs-step-dot" /> Step 4 of 8
      </div>
      <div className="cs-question">
        Aapka business kis type ka hai?<span className="accent">*</span>
      </div>
      <p className="cs-hint">We specialise in specific verticals — select the one that fits best.</p>

      <div className="flex flex-col gap-2.5">
        {categories.map((c) => (
          <button
            type="button"
            key={c.id}
            className={`cs-option radio ${data.category === c.id ? "selected" : ""}`}
            onClick={() => update("category", c.id)}
          >
            <div className="cs-option-mark">
              {data.category === c.id && (
                <svg viewBox="0 0 10 10" width="10" height="10" fill="white">
                  <circle cx="5" cy="5" r="3" />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <div className="cs-option-text">
                <span className="mr-2">{c.icon}</span>
                {c.label}
              </div>
              <div className="cs-option-sub">{c.sub}</div>
            </div>
          </button>
        ))}
      </div>

      <StepNav counter="04 / 08" onNext={onNext} onBack={onBack} />
    </div>
  );
}

function ServicesStep({ data, update, onNext, onBack }: StepProps) {
  const toggle = (id: string) => {
    if (data.services.includes(id)) {
      update("services", data.services.filter((s) => s !== id));
    } else {
      update("services", [...data.services, id]);
    }
  };
  return (
    <div>
      <div className="cs-step-tag">
        <span className="cs-step-dot" /> Step 5 of 8
      </div>
      <div className="cs-question">
        Kaunsi services chahiye aapko?<span className="accent">*</span>
      </div>
      <p className="cs-hint">Select all that apply — we'll build a custom package for you.</p>

      <div className="flex flex-col gap-2.5">
        {services.map((s) => {
          const selected = data.services.includes(s.id);
          return (
            <button
              type="button"
              key={s.id}
              className={`cs-option ${selected ? "selected" : ""}`}
              onClick={() => toggle(s.id)}
            >
              <div className="cs-option-mark">
                {selected && (
                  <svg viewBox="0 0 10 8" width="10" height="8" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round">
                    <polyline points="1,4 4,7 9,1" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <div className="cs-option-text">{s.label}</div>
                <div className="cs-option-sub">{s.sub}</div>
              </div>
            </button>
          );
        })}
      </div>

      <StepNav counter="05 / 08" onNext={onNext} onBack={onBack} />
    </div>
  );
}

function GoalsStep({ data, update, onNext, onBack }: StepProps) {
  return (
    <div>
      <div className="cs-step-tag">
        <span className="cs-step-dot" /> Step 6 of 8
      </div>
      <div className="cs-question">
        Aapke business ke baare mein batayein<span className="accent">*</span>
      </div>
      <p className="cs-hint">
        Kya karte hain, kaun hai aapka customer, aur kya khaas hai aapke brand mein — 2-3 sentences mein likhein.
      </p>

      <div className="mb-3">
        <label className="cs-label">
          About Your Business<span className="cs-required">*</span>
        </label>
        <textarea
          className="cs-input cs-textarea"
          placeholder="e.g. Hum ek family restaurant hain jo authentic Haryanvi food serve karte hain..."
          value={data.about}
          onChange={(e) => update("about", e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="cs-label">Biggest Challenge Right Now</label>
        <input
          className="cs-input"
          placeholder="e.g. No online presence, low footfall, no reviews on Google..."
          value={data.challenge}
          onChange={(e) => update("challenge", e.target.value)}
        />
      </div>

      <StepNav counter="06 / 08" onNext={onNext} onBack={onBack} />
    </div>
  );
}

function BudgetStep({ data, update, onNext, onBack }: StepProps) {
  return (
    <div>
      <div className="cs-step-tag">
        <span className="cs-step-dot" /> Step 7 of 8
      </div>
      <div className="cs-question">
        Aapka monthly budget kitna hai?<span className="accent">*</span>
      </div>
      <p className="cs-hint">No judgment — this helps us suggest the right plan. All options get quality results.</p>

      <div className="flex flex-col gap-2.5">
        {budgets.map((b) => (
          <button
            type="button"
            key={b.id}
            className={`cs-option radio ${data.budget === b.id ? "selected" : ""}`}
            onClick={() => update("budget", b.id)}
          >
            <div className="cs-option-mark">
              {data.budget === b.id && (
                <svg viewBox="0 0 10 10" width="10" height="10" fill="white">
                  <circle cx="5" cy="5" r="3" />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <div className="cs-option-text">{b.label}</div>
              <div className="cs-option-sub">{b.sub}</div>
            </div>
          </button>
        ))}
      </div>

      <StepNav counter="07 / 08" onNext={onNext} onBack={onBack} />
    </div>
  );
}

function ExtraStep({
  data,
  update,
  onSubmit,
  onBack,
}: {
  data: FormData;
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
  onSubmit: () => void;
  onBack: () => void;
}) {
  return (
    <div>
      <div className="cs-step-tag">
        <span className="cs-step-dot" /> Step 8 of 8
      </div>
      <div className="cs-question">Kuch aur batana chahte hain?</div>
      <p className="cs-hint">
        Optional — any deadlines, special requirements, or questions? Reference number, event date,
        anything you want us to know.
      </p>

      <div className="mb-3">
        <label className="cs-label">Additional Notes</label>
        <textarea
          className="cs-input cs-textarea"
          placeholder="e.g. Hamare restaurant ka inauguration 15 May ko hai..."
          value={data.extra}
          onChange={(e) => update("extra", e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="cs-label">How Did You Hear About Us?</label>
        <select
          className="cs-input cursor-pointer"
          value={data.source}
          onChange={(e) => update("source", e.target.value)}
        >
          <option value="" className="bg-midnight">— Select —</option>
          <option value="whatsapp" className="bg-midnight">WhatsApp Message</option>
          <option value="friend" className="bg-midnight">Friend / Family Referral</option>
          <option value="google" className="bg-midnight">Google Search</option>
          <option value="instagram" className="bg-midnight">Instagram / Facebook</option>
          <option value="justdial" className="bg-midnight">JustDial / IndiaMART</option>
          <option value="other" className="bg-midnight">Other</option>
        </select>
      </div>

      <StepNav counter="08 / 08" onNext={onSubmit} onBack={onBack} nextLabel="Submit  ✓" />
    </div>
  );
}

function SuccessStep({ data, onWhatsApp }: { data: FormData; onWhatsApp: () => void }) {
  return (
    <div className="py-6 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-signal bg-signal/10">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#E53935" strokeWidth={2.5} strokeLinecap="round">
          <polyline points="20,6 9,17 4,12" />
        </svg>
      </div>
      <div className="text-[26px] font-black tracking-tight text-white">
        Shukriya, {data.fname || "Friend"}! 🙏
      </div>
      <p className="mx-auto mt-3 max-w-[400px] text-sm leading-7 text-textmute">
        Aapki details mil gayi hain. Hum 30 minutes mein aapke WhatsApp par reply karenge aur aapka
        free digital audit share karenge.
      </p>

      <div className="mx-auto mt-6 max-w-md rounded-xl border border-skyblue/12 bg-midnight/80 p-5 text-left">
        <SummaryRow k="Name" v={`${data.fname} ${data.lname}`} />
        <SummaryRow k="WhatsApp" v={`${data.cc} ${data.acode} ${data.phone}`.trim()} />
        <SummaryRow k="Business" v={data.bname} />
        <SummaryRow k="Category" v={catLabels[data.category] || data.category} />
        <SummaryRow k="Services" v={data.services.join(", ")} />
        <SummaryRow k="Budget" v={budgetLabels[data.budget] || data.budget} last />
      </div>

      <button
        type="button"
        onClick={onWhatsApp}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0D47A1] px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-white hover:bg-[#0D47A1]/90"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Chat on WhatsApp
      </button>
    </div>
  );
}

function SummaryRow({ k, v, last }: { k: string; v: string; last?: boolean }) {
  return (
    <div
      className={`flex items-start justify-between gap-4 py-2 ${
        last ? "" : "border-b border-skyblue/[0.07]"
      }`}
    >
      <span className="min-w-[100px] flex-shrink-0 text-[11px] font-bold uppercase tracking-wider text-textmute">
        {k}
      </span>
      <span className="text-right text-[13px] leading-6 text-skyblue">{v || "—"}</span>
    </div>
  );
}
