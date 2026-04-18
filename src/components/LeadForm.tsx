import { useState } from "react";
import { toast } from "sonner";

const categories = ["Restaurant", "Doctor / Clinic", "Salon / Spa", "Retail", "Other"];

export function LeadForm() {
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    business: "",
    category: "Restaurant",
    message: "",
  });

  const update = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.name || !data.phone || !data.business) {
      toast.error("Please fill name, WhatsApp and business name.");
      return;
    }
    setSubmitting(true);
    const text = encodeURIComponent(
      `Hi CoreSoft! I'd like a free audit.\n\nName: ${data.name}\nBusiness: ${data.business}\nCategory: ${data.category}\nPhone: ${data.phone}\nNotes: ${data.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/918168194134?text=${text}`, "_blank", "noopener");
      toast.success("Opening WhatsApp — we'll respond within 30 minutes.");
      setSubmitting(false);
    }, 350);
  };

  return (
    <form
      onSubmit={submit}
      className="glass relative w-full max-w-2xl rounded-3xl p-6 text-white shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)] md:p-10"
    >
      <div className="mb-6 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-signal" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-skyblue">Free Discovery</span>
      </div>
      <h3 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl">
        Tell us about your business.
        <br />
        <span className="text-signal">We'll respond in 30 minutes.</span>
      </h3>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Field label="Your Name" required>
          <input value={data.name} onChange={update("name")} placeholder="Rohit Kumar" className="cs-input" />
        </Field>
        <Field label="WhatsApp" required>
          <input value={data.phone} onChange={update("phone")} placeholder="+91 81681 94XXX" className="cs-input" />
        </Field>
        <Field label="Business Name" required>
          <input value={data.business} onChange={update("business")} placeholder="Sharma Restaurant" className="cs-input" />
        </Field>
        <Field label="Category">
          <select value={data.category} onChange={update("category")} className="cs-input appearance-none">
            {categories.map((c) => (
              <option key={c} value={c} className="bg-midnight text-white">
                {c}
              </option>
            ))}
          </select>
        </Field>
        <div className="md:col-span-2">
          <Field label="What do you need?">
            <textarea
              value={data.message}
              onChange={update("message")}
              rows={3}
              placeholder="Website, Google ranking, Instagram management…"
              className="cs-input resize-none"
            />
          </Field>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-[12px] text-skyblue/70">
          By submitting you agree to be contacted on WhatsApp at +91 81681 94134.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="btn-lift btn-shimmer group inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_18px_40px_-15px_rgba(229,57,53,0.6)] disabled:opacity-60 disabled:hover:transform-none"
        >
          {submitting ? "Opening…" : "Request Free Audit"}
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </button>
      </div>

      <style>{`
        .cs-input {
          width: 100%;
          background: rgba(10,22,40,0.55);
          border: 1px solid rgba(144,202,249,0.18);
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 14px;
          color: #fff;
          outline: none;
          transition: border-color .2s, background .2s;
          font-family: inherit;
        }
        .cs-input::placeholder { color: rgba(144,202,249,0.45); }
        .cs-input:focus { border-color: #E53935; background: rgba(10,22,40,0.8); }
      `}</style>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-skyblue">
        {label}
        {required && <span className="ml-1 text-signal">*</span>}
      </span>
      {children}
    </label>
  );
}
