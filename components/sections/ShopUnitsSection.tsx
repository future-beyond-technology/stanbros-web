"use client";

import { motion } from "framer-motion";
import ShopUnitCard from "@/components/shop/ShopUnitCard";
import { useLanguage } from "@/components/shared/LanguageProvider";

export default function ShopUnitsSection({
  units,
}: {
  units: Array<{
    slug: string;
    path?: string;
    name: { en: string; ta: string };
    category: { en: string; ta: string };
    short: { en: string; ta: string };
    accent?: string;
  }>;
}) {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <section className="space-y-5">
      <motion.div
        className="max-w-3xl space-y-2"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
          {isEn ? "Business Units" : "வணிக பிரிவுகள்"}
        </p>
        <h2 className="font-display text-3xl text-[var(--brand-strong)] sm:text-4xl">
          {isEn
            ? "Three focused stores operating under one trusted banner"
            : "ஒரே நம்பகமான பெயரின் கீழ் செயல்படும் மூன்று திறமையான கடைகள்"}
        </h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {units.map((unit, index) => (
          <motion.div
            key={unit.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.28, delay: index * 0.07, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <ShopUnitCard unit={unit} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
