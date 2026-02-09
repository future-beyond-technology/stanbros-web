"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/components/shared/LanguageProvider";

type Unit = {
  slug: string;
  path?: string;
  name: { en: string; ta: string };
  category: { en: string; ta: string };
  short: { en: string; ta: string };
  accent?: string;
};

function accentBar(accent?: string) {
  if (accent === "brand-2") return "from-[var(--accent)]/80 to-[var(--accent)]/20";
  if (accent === "brand-3") return "from-[var(--brand)]/75 to-[var(--accent)]/35";
  return "from-[var(--brand)] to-[var(--brand)]/20";
}

export default function ShopUnitCard({ unit }: { unit: Unit }) {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const href = unit.path ?? `/shops/${unit.slug}`;

  return (
    <Link href={href} className="block">
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Card className="liquid-card relative overflow-hidden p-6 sm:p-7">
          <div
            className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentBar(
              unit.accent
            )}`}
          />

          <div className="space-y-3">
            <p className="font-display text-2xl text-[var(--brand-strong)]">
              {isEn ? unit.name.en : unit.name.ta}
            </p>
            <p className="text-sm font-semibold text-slate-600">
              {isEn ? unit.category.en : unit.category.ta}
            </p>
            <p className="text-sm font-medium text-slate-700">
              {isEn ? unit.short.en : unit.short.ta}
            </p>
            <p className="pt-1 text-sm font-semibold text-[var(--accent-strong)]">
              {isEn ? "Explore unit" : "இந்த பிரிவை பார்க்க"} →
            </p>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
