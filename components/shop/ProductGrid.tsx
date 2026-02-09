"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppLink from "@/components/shared/WhatsAppLink";
import { Button } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/components/shared/LanguageProvider";

type Localized = { en: string; ta: string };

type Product = {
  id: string;
  name: Localized | string;
  description: Localized;
  priceLabel: Localized;
  category?: Localized | string;
  imageUrl: string;
};

function resolveText(value: Localized | string, lang: "en" | "ta") {
  if (typeof value === "string") return value;
  return lang === "en" ? value.en : value.ta;
}

function resolveEnglish(value: Localized | string) {
  if (typeof value === "string") return value;
  return value.en;
}

export default function ProductGrid({
  title,
  items,
}: {
  title: Localized;
  items: Product[];
}) {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <section className="space-y-4">
      <h2 className="font-display text-3xl text-[var(--brand-strong)]">
        {isEn ? title.en : title.ta}
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.24, delay: index * 0.03, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <Card className="h-full overflow-hidden p-0">
              <div className="relative h-44 w-full overflow-hidden bg-[var(--surface-muted)]">
                <Image
                  src={item.imageUrl}
                  alt={resolveText(item.name, lang)}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-2 p-4 sm:p-5">
                {item.category ? (
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    {resolveText(item.category, lang)}
                  </p>
                ) : null}

                <h3 className="text-base font-semibold text-[var(--brand-strong)]">
                  {resolveText(item.name, lang)}
                </h3>

                <p className="text-sm font-medium text-slate-600">
                  {resolveText(item.description, lang)}
                </p>

                <p className="text-xs font-semibold text-slate-500">
                  {resolveText(item.priceLabel, lang)}
                </p>

                <WhatsAppLink
                  message={
                    isEn
                      ? `Hi STAN BROS, I want to enquire about ${resolveEnglish(item.name)}.`
                      : `வணக்கம் STAN BROS, ${resolveEnglish(item.name)} பற்றி தெரியவேண்டும்.`
                  }
                >
                  <Button size="sm" className="mt-2 w-full">
                    {isEn ? "Enquire on WhatsApp" : "WhatsApp மூலம் விசாரிக்கவும்"}
                  </Button>
                </WhatsAppLink>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
