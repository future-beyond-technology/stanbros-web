"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "ta";

type LanguageContextValue = {
  lang: Lang;
  toggle: () => void;
  setLang: (value: Lang) => void;
};

const STORAGE_KEY = "sb-lang";
const COOKIE_KEY = "sb-lang";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function resolveStoredLang(value: string | null): Lang | null {
  if (value === "en" || value === "ta") return value;
  return null;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    try {
      const stored = resolveStoredLang(window.localStorage.getItem(STORAGE_KEY));
      if (stored) return stored;
    } catch {
      // ignore storage failures
    }
    return "en";
  });

  const setLang = (value: Lang) => {
    setLangState(value);
  };

  const toggle = () => setLang(lang === "en" ? "ta" : "en");

  useEffect(() => {
    document.documentElement.lang = lang === "ta" ? "ta" : "en";
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage failures
    }

    document.cookie = `${COOKIE_KEY}=${lang}; path=/; max-age=31536000; samesite=lax`;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggle, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      lang: "en" as Lang,
      toggle: () => {},
      setLang: () => {},
    };
  }
  return ctx;
}
