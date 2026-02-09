"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/components/shared/LanguageProvider";

const verses = [
  {
    ref: "Ecclesiastes 4:9",
    en: "Two are better than one; because they have a good reward for their labour.",
    ta: "இருவர் ஒன்றாக உழைத்தால், அவர்களின் உழைப்புக்கு சிறந்த பலன் கிடைக்கும்.",
    contextEn: "Reflects the brotherhood foundation of STAN BROS.",
    contextTa: "STAN BROS சகோதரத்துவ அடித்தளத்தை நினைவுபடுத்தும் வசனம்.",
  },
  {
    ref: "Proverbs 16:3",
    en: "Commit thy works unto the LORD, and thy thoughts shall be established.",
    ta: "உங்கள் செயலை கர்த்தரிடத்தில் ஒப்படையுங்கள்; உங்கள் திட்டங்கள் நிலைபெறும்.",
    contextEn: "A reminder to work with humility, clarity, and accountability.",
    contextTa: "தாழ்மையுடனும் தெளிவுடனும் பொறுப்புடனும் செயல்பட நினைவூட்டும் வசனம்.",
  },
  {
    ref: "Colossians 3:23",
    en: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men.",
    ta: "நீங்கள் செய்வதெல்லாம் முழு மனதுடன் செய்யுங்கள்; அது கர்த்தருக்காக செய்வதுபோல் இருக்கட்டும்.",
    contextEn: "Guides service quality and consistency across all business units.",
    contextTa: "அனைத்து வணிக பிரிவுகளிலும் தரமான, நிலையான சேவைக்கு வழிகாட்டும் வசனம்.",
  },
];

export default function SpiritualValuesSection() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <section id="spiritual-values" className="space-y-7">
      <motion.div
        className="max-w-3xl space-y-2"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
          {isEn ? "Spiritual Values" : "ஆன்மீக மதிப்புகள்"}
        </p>
        <h2 className="font-display text-3xl text-[var(--brand-strong)] sm:text-4xl">
          {isEn
            ? "Faith-inspired values that shape our service"
            : "எங்கள் சேவையை வழிநடத்தும் விசுவாசம் சார்ந்த மதிப்புகள்"}
        </h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-3">
        {verses.map((verse, index) => (
          <motion.div
            key={verse.ref}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.28, delay: index * 0.06, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <Card className="liquid-card h-full p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                {verse.ref}
              </p>
              <blockquote className="mt-3 font-display text-2xl leading-snug text-[var(--brand-strong)]">
                “{isEn ? verse.en : verse.ta}”
              </blockquote>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                {isEn ? verse.contextEn : verse.contextTa}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
