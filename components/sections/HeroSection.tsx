"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import WhatsAppLink from "@/components/shared/WhatsAppLink";
import { getBrand } from "@/lib/data/loaders";
import { useLanguage } from "@/components/shared/LanguageProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const brand = getBrand();
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const content = {
    badgeA: isEn ? "Enterprise-grade presentation" : "என்டர்பிரைஸ் தரத்தில் வடிவமைப்பு",
    badgeB: isEn ? "Built on Brotherhood" : "சகோதரத்துவ அடித்தளம்",
    badgeC: isEn ? "Faith + Service" : "ஆன்மீகம் + சேவை",
    title: isEn
      ? "Elegant local retail, delivered with enterprise discipline."
      : "என்டர்பிரைஸ் ஒழுக்கத்துடன் வழங்கப்படும் அழகான உள்ளூர் விற்பனை அனுபவம்.",
    subtitle: isEn
      ? "STAN BROS unites Mobile & Accessories, Lads & Looms, and Shoe Shop under one trusted brand founded by Stains and Stanley."
      : "ஸ்டைன்ஸ் மற்றும் ஸ்டான்லி நிறுவிய STAN BROS, மொபைல் & ஆக்சஸரீஸ், லாட்ஸ் & லூம்ஸ், ஷூ ஷாப் ஆகியவற்றை ஒரே நம்பகமான பிராண்டில் இணைக்கிறது.",
    ctaPrimary: isEn ? "Start WhatsApp Enquiry" : "WhatsApp விசாரணையை தொடங்குங்கள்",
    ctaSecondary: isEn ? "Explore Business Units" : "வணிக பிரிவுகளை பார்க்க",
    ctaFaith: isEn ? "View Spiritual Values" : "ஆன்மீக மதிப்புகள்",
    founderTitle: isEn ? "Founded by" : "நிறுவியவர்கள்",
    founderValue: isEn ? "Brothers Stains & Stanley" : "சகோதரர்கள் ஸ்டைன்ஸ் & ஸ்டான்லி",
    trustLine: isEn
      ? "Brotherhood • Trust • Consistency • Local pride"
      : "சகோதரத்துவம் • நம்பிக்கை • நிலைத்தன்மை • உள்ளூர் பெருமை",
    verseTitle: isEn ? "Guiding Verse" : "வழிகாட்டும் வசனம்",
    verseRef: "Ecclesiastes 4:9",
    verseText: isEn
      ? "Two are better than one; because they have a good reward for their labour."
      : "இருவர் ஒன்றாக உழைத்தால், அவர்களின் உழைப்புக்கு சிறந்த பலன் கிடைக்கும்.",
  };

  const metrics = [
    {
      value: "03",
      labelEn: "Dedicated business units",
      labelTa: "தனிப்பட்ட வணிக பிரிவுகள்",
    },
    {
      value: "02",
      labelEn: "Founding brothers",
      labelTa: "நிறுவனர் சகோதரர்கள்",
    },
    {
      value: "EN | TA",
      labelEn: "Full-page language switch",
      labelTa: "முழு-பக்க மொழி மாற்றம்",
    },
  ];

  return (
    <section className="liquid-shell liquid-shine relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
      <div className="premium-grid pointer-events-none absolute inset-0" />
      <div className="liquid-orb liquid-orb-a pointer-events-none" />
      <div className="liquid-orb liquid-orb-b pointer-events-none" />

      <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          className="space-y-7 lg:col-span-7"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="flex flex-wrap gap-2">
            <Badge>{content.badgeA}</Badge>
            <Badge>{content.badgeB}</Badge>
            <Badge>{content.badgeC}</Badge>
          </div>

          <h1 className="font-display text-balance text-4xl leading-[1.03] text-[var(--brand-strong)] sm:text-6xl lg:text-[4.1rem]">
            {content.title}
          </h1>

          <p className="max-w-2xl text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
            {content.subtitle}
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((item) => (
              <motion.div
                key={item.value}
                className="liquid-card rounded-2xl p-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <p className="font-display text-2xl text-[var(--brand-strong)]">{item.value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-600">
                  {isEn ? item.labelEn : item.labelTa}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <WhatsAppLink
              message={
                isEn ? brand.whatsapp.defaultMessage.en : brand.whatsapp.defaultMessage.ta
              }
            >
              <Button size="lg">{content.ctaPrimary}</Button>
            </WhatsAppLink>

            <Link href="#business-units">
              <Button variant="secondary" size="lg">
                {content.ctaSecondary}
              </Button>
            </Link>

            <Link href="#spiritual-values">
              <span className="inline-flex h-11 items-center px-2 text-sm font-semibold text-[var(--accent-strong)] hover:text-[var(--brand-strong)]">
                {content.ctaFaith} →
              </span>
            </Link>
          </div>

          <p className="text-sm font-semibold text-slate-600">{content.trustLine}</p>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <Card className="liquid-card h-full overflow-hidden">
            <div className="space-y-6 p-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  {content.founderTitle}
                </p>
                <p className="mt-1 text-lg font-semibold text-[var(--brand-strong)]">{content.founderValue}</p>
              </div>

              <blockquote className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-soft)]/70 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                  {isEn ? "Brotherhood Quote" : "சகோதரத்துவ மேற்கோள்"}
                </p>
                <p className="mt-2 font-display text-2xl leading-snug text-[var(--brand-strong)]">
                  “{isEn ? brand.quote.en : brand.quote.ta}”
                </p>
              </blockquote>

              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-soft)]/70 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                  {content.verseTitle} • {content.verseRef}
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">{content.verseText}</p>
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-[var(--brand)] via-[var(--accent)] to-[var(--brand)]/30" />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
