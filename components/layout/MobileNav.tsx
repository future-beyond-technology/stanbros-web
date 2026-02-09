"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/shared/LanguageProvider";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export type NavItem = {
  href: string;
  label: { en: string; ta: string };
};

export default function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const isEn = lang === "en";

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkGrid = useMemo(
    () =>
      items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          className={cx(
            "rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-4 py-3",
            "text-sm font-semibold text-[var(--brand-strong)] transition-colors hover:bg-[var(--surface-muted)]"
          )}
        >
          {isEn ? item.label.en : item.label.ta}
        </Link>
      )),
    [isEn, items]
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="sb-mobile-nav"
        className={cx(
          "inline-flex h-10 items-center justify-center rounded-full border border-[var(--border-subtle)]",
          "bg-[var(--surface-soft)] px-4 text-sm font-semibold text-[var(--brand-strong)]",
          "transition-colors hover:bg-[var(--surface-muted)]"
        )}
      >
        {open ? (isEn ? "Close" : "மூடு") : isEn ? "Menu" : "மெனு"}
      </button>

      {open ? (
        <div
          id="sb-mobile-nav"
          className="mt-3 space-y-4 rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-soft)] p-4 shadow-[var(--shadow-soft)]"
        >
          <div className="inline-flex rounded-full border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-1">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cx(
                "rounded-full px-3 py-1 text-xs font-semibold transition",
                isEn && "bg-[var(--brand)] text-white"
              )}
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
            >
              TA
            </button>
          </div>

          <div className="grid gap-3">{linkGrid}</div>
        </div>
      ) : null}
    </div>
  );
}
