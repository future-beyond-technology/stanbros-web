import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/35";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--brand)] text-white hover:bg-[var(--brand-strong)] shadow-[var(--shadow-soft)]",
  secondary:
    "border border-[var(--border-subtle)] bg-[var(--surface-soft)] text-[var(--brand-strong)] hover:border-[var(--brand)]/40 hover:bg-[var(--surface-muted)]",
  ghost:
    "text-[var(--brand-strong)] hover:bg-[var(--surface-muted)] border border-transparent",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  target,
  rel,
  onClick,
  type,
  disabled,
}: {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const cls = cx(base, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("https");
    if (isExternal) {
      return (
        <a className={cls} href={href} target={target} rel={rel}>
          {children}
        </a>
      );
    }
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cls}
      onClick={onClick}
      type={type ?? "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
