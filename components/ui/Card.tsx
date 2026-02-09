function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-soft)]",
        "shadow-[var(--shadow-soft)]",
        className
      )}
    >
      {children}
    </div>
  );
}
