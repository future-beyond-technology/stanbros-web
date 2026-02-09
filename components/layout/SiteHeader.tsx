"use client";

import Image from "next/image";
import Link from "next/link";
import MobileNav, { type NavItem } from "@/components/layout/MobileNav";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import WhatsAppLink from "@/components/shared/WhatsAppLink";
import { getBrand } from "@/lib/data/loaders";
import { useLanguage } from "@/components/shared/LanguageProvider";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function SiteHeader({ brandName }: { brandName: string }) {
  const brand = getBrand();
  const { lang, setLang } = useLanguage();
  const isEn = lang === "en";
  const [brandPrimary, ...brandSuffixParts] = brandName.split(" ");
  const brandSecondary = brandSuffixParts.join(" ");

  const nav: NavItem[] = [
    { href: "/", label: { en: "Home", ta: "முகப்பு" } },
    { href: "/about", label: { en: "About", ta: "எங்களை பற்றி" } },
    {
      href: "/mobile",
      label: { en: "Mobile", ta: "மொபைல்" },
    },
    {
      href: "/lads-and-looms",
      label: { en: "Lads & Looms", ta: "லாட்ஸ் & லூம்ஸ்" },
    },
    { href: "/shoe-shop", label: { en: "Shoe Shop", ta: "ஷூ ஷாப்" } },
    { href: "/contact", label: { en: "Contact", ta: "தொடர்பு" } },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-[var(--border-subtle)] bg-[color:var(--surface-soft)]/95 backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center justify-between gap-3">
            <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
              <Image
                src="/brand/logo-mark.svg"
                alt={brandName}
                width={52}
                height={52}
                priority
                className="h-10 w-10 rounded-full object-cover ring-1 ring-[var(--border-subtle)] transition-transform duration-300 group-hover:scale-[1.03] sm:h-11 sm:w-11"
              />
              <span className="inline-flex items-center gap-1 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-muted)]/80 px-2.5 py-1">
                <span className="font-display text-xs uppercase tracking-[0.22em] text-[var(--brand-strong)] sm:text-sm">
                  {brandPrimary}
                </span>
                {brandSecondary ? (
                  <span className="font-display text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)] sm:text-sm">
                    {brandSecondary}
                  </span>
                ) : null}
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "rounded-full px-3 py-2 text-sm font-semibold transition-colors",
                    "text-[var(--brand-strong)] hover:bg-[var(--surface-muted)]"
                  )}
                >
                  {isEn ? item.label.en : item.label.ta}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden rounded-full border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-1 sm:inline-flex">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={cx(
                    "rounded-full px-3 py-1 text-xs font-semibold transition",
                    isEn && "bg-[var(--brand)] text-white"
                  )}
                  aria-pressed={isEn}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("ta")}
                  className={cx(
                    "rounded-full px-3 py-1 text-xs font-semibold transition",
                    !isEn && "bg-[var(--brand)] text-white"
                  )}
                  aria-pressed={!isEn}
                >
                  TA
                </button>
              </div>

              <div className="hidden sm:block">
                <WhatsAppLink
                  message={
                    isEn
                      ? brand.whatsapp.defaultMessage.en
                      : brand.whatsapp.defaultMessage.ta
                  }
                >
                  <Button variant="secondary" size="sm" className="h-10">
                    {isEn ? "WhatsApp Enquiry" : "WhatsApp விசாரணை"}
                  </Button>
                </WhatsAppLink>
              </div>

              <MobileNav items={nav} />
            </div>
          </div>

          <div className="flex items-center gap-2 pb-3 sm:hidden">
            <div className="inline-flex rounded-full border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-1">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={cx(
                  "rounded-full px-3 py-1 text-xs font-semibold transition",
                  isEn && "bg-[var(--brand)] text-white"
                )}
                aria-pressed={isEn}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("ta")}
                className={cx(
                  "rounded-full px-3 py-1 text-xs font-semibold transition",
                  !isEn && "bg-[var(--brand)] text-white"
                )}
                aria-pressed={!isEn}
              >
                TA
              </button>
            </div>

            <WhatsAppLink
              message={
                isEn ? brand.whatsapp.defaultMessage.en : brand.whatsapp.defaultMessage.ta
              }
              className="flex-1"
            >
              <Button variant="secondary" size="sm" className="h-9 w-full">
                {isEn ? "WhatsApp Enquiry" : "WhatsApp விசாரணை"}
              </Button>
            </WhatsAppLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
