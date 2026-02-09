"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/components/shared/LanguageProvider";

const standards = [
  {
    en: "Curated Product Mix",
    ta: "தேர்ந்தெடுக்கப்பட்ட பொருள் தொகுப்பு",
    subEn:
      "Each unit carries practical, demand-driven products instead of overcrowded catalog noise.",
    subTa:
      "ஒவ்வொரு பிரிவிலும் தேவைக்கேற்ற பொருட்கள் மட்டுமே தேர்வு செய்யப்படுகின்றன; தேவையற்ற நிரம்பிய பட்டியல் இல்லை.",
  },
  {
    en: "Transparent Guidance",
    ta: "தெளிவான வழிகாட்டுதல்",
    subEn:
      "Customers get clear options, plain language comparisons, and honest recommendations.",
    subTa:
      "வாடிக்கையாளர்களுக்கு எளிய விளக்கம், தெளிவான ஒப்பீடு, நேர்மையான பரிந்துரைகள் வழங்கப்படுகின்றன.",
  },
  {
    en: "Consistent Service Process",
    ta: "ஒரே தரமான சேவை நடைமுறை",
    subEn:
      "From enquiry to final selection, every interaction is respectful, timely, and structured.",
    subTa:
      "விசாரணையிலிருந்து இறுதி தேர்வு வரை ஒவ்வொரு உரையாடலும் மரியாதையுடனும் நேர்த்தியுடனும் நடைபெறும்.",
  },
  {
    en: "Local Trust, Enterprise Finish",
    ta: "உள்ளூர் நம்பிக்கை, என்டர்பிரைஸ் தர முடிவு",
    subEn:
      "A neighborhood business experience presented with premium design and disciplined execution.",
    subTa:
      "உள்ளூர் வணிகத்தின் நம்பிக்கையை, பிரீமியம் வடிவமைப்பும் ஒழுங்கான செயல்பாடும் இணைத்து வழங்கும் அணுகுமுறை.",
  },
];

export default function HighlightsSection() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <section className="space-y-7">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
        className="max-w-3xl space-y-2"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
          {isEn ? "Enterprise Standards" : "என்டர்பிரைஸ் தரநிலைகள்"}
        </p>
        <h2 className="font-display text-3xl text-[var(--brand-strong)] sm:text-4xl">
          {isEn
            ? "A premium system behind every customer interaction"
            : "ஒவ்வொரு வாடிக்கையாளர் அனுபவத்திற்கும் பின்னால் உள்ள பிரீமியம் செயல்வழி"}
        </h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2">
        {standards.map((item, index) => (
          <motion.div
            key={item.en}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.28, delay: index * 0.06, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <Card className="liquid-card h-full p-6 sm:p-7">
              <p className="font-display text-2xl leading-tight text-[var(--brand-strong)]">
                {isEn ? item.en : item.ta}
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">
                {isEn ? item.subEn : item.subTa}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
