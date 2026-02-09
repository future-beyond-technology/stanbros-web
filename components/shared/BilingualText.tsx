"use client";

import { useLanguage } from "@/components/shared/LanguageProvider";

type TextTag = "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "small";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function BilingualText({
  en,
  ta,
  as = "div",
  className,
  enClassName,
  taClassName,
}: {
  en: string;
  ta: string;
  as?: TextTag;
  className?: string;
  enClassName?: string;
  taClassName?: string;
}) {
  const Wrapper = as;
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <Wrapper
      className={cx(className, isEn ? enClassName : taClassName)}
      lang={isEn ? undefined : "ta"}
    >
      {isEn ? en : ta}
    </Wrapper>
  );
}
