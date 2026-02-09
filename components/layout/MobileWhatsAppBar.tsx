"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import WhatsAppLink from "@/components/shared/WhatsAppLink";
import { getBrand } from "@/lib/data/loaders";
import { useLanguage } from "@/components/shared/LanguageProvider";

export default function MobileWhatsAppBar() {
  const brand = getBrand();
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <motion.div
      className="fixed inset-x-4 bottom-4 z-40 sm:hidden"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <WhatsAppLink
        message={
          isEn ? brand.whatsapp.defaultMessage.en : brand.whatsapp.defaultMessage.ta
        }
      >
        <Button className="w-full shadow-[var(--shadow-lift)]">
          {isEn ? "Enquire on WhatsApp" : "WhatsApp மூலம் தொடர்பு கொள்ளுங்கள்"}
        </Button>
      </WhatsAppLink>
    </motion.div>
  );
}
