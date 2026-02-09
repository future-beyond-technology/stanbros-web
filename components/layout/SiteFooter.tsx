"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import WhatsAppLink from "@/components/shared/WhatsAppLink";
import { getBrand } from "@/lib/data/loaders";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/shared/LanguageProvider";

export default function SiteFooter({ brandName }: { brandName: string }) {
  const brand = getBrand();
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <footer className="mt-16 border-t border-[var(--border-subtle)] bg-[var(--surface-soft)]/80">
      <Container>
        <div className="py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <p className="font-display text-2xl text-[var(--brand-strong)]">{brandName}</p>
              <p className="text-sm font-semibold text-slate-700">
                {isEn ? brand.tagline.en : brand.tagline.ta}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                {isEn ? "Quick Links" : "விரைவு இணைப்புகள்"}
              </p>
              <div className="space-y-1 text-sm font-semibold text-[var(--brand-strong)]">
                <Link className="block hover:text-[var(--accent-strong)]" href="/">
                  {isEn ? "Home" : "முகப்பு"}
                </Link>
                <Link className="block hover:text-[var(--accent-strong)]" href="/about">
                  {isEn ? "About STAN BROS" : "STAN BROS பற்றி"}
                </Link>
                <Link className="block hover:text-[var(--accent-strong)]" href="/contact">
                  {isEn ? "Contact Us" : "தொடர்பு"}
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                {isEn ? "Enquiry" : "விசாரணை"}
              </p>
              <WhatsAppLink
                message={
                  isEn ? brand.whatsapp.defaultMessage.en : brand.whatsapp.defaultMessage.ta
                }
              >
                <Button size="sm" className="w-full sm:w-auto">
                  {isEn ? "Chat on WhatsApp" : "WhatsApp-ல் தொடர்பு"}
                </Button>
              </WhatsAppLink>
              <p className="text-xs font-semibold text-slate-500">{brand.whatsapp.numberE164}</p>
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--border-subtle)] pt-5 text-xs font-semibold text-slate-500">
            © {new Date().getFullYear()} {brandName}. {isEn ? "Built with care for local retail." : "உள்ளூர் வணிகத்திற்காக அக்கறையுடன் உருவாக்கப்பட்டது."}
          </div>
        </div>
      </Container>
    </footer>
  );
}
