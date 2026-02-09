"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import WhatsAppLink from "@/components/shared/WhatsAppLink";
import { getBrand } from "@/lib/data/loaders";
import { useLanguage } from "@/components/shared/LanguageProvider";

export default function PremiumClosingSection() {
  const brand = getBrand();
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
      className="liquid-shell liquid-shine relative overflow-hidden rounded-[2rem] px-7 py-10 sm:px-10 sm:py-12"
    >
      <div className="liquid-orb liquid-orb-a pointer-events-none" />
      <div className="liquid-orb liquid-orb-b pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(184,146,90,0.22),transparent_38%)]" />
      <div className="relative space-y-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
          {isEn ? "Ready to Enquire" : "விசாரிக்க தயாரா"}
        </p>
        <h3 className="max-w-3xl font-display text-3xl text-[var(--brand-strong)] sm:text-4xl">
          {isEn
            ? "Tell us what you need. We will respond with practical options and best-value guidance."
            : "உங்கள் தேவையை பகிருங்கள். நடைமுறை தேர்வுகள் மற்றும் சிறந்த மதிப்பு வழிகாட்டுதலுடன் பதில் தருகிறோம்."}
        </h3>
        <div className="pt-1">
          <WhatsAppLink
            message={
              isEn ? brand.whatsapp.defaultMessage.en : brand.whatsapp.defaultMessage.ta
            }
          >
            <Button size="lg">
              {isEn ? "Send WhatsApp Enquiry" : "WhatsApp மூலம் விசாரணை அனுப்பவும்"}
            </Button>
          </WhatsAppLink>
        </div>
      </div>
    </motion.section>
  );
}
