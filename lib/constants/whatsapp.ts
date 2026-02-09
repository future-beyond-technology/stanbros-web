export const DEFAULT_WHATSAPP_NUMBER_E164 =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER_E164 ?? "+918785751559";

export function toWhatsAppHref({
  numberE164,
  message,
}: {
  numberE164: string;
  message: string;
}) {
  const phone = numberE164.replace(/[^\d+]/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone.replace("+", "")}?text=${text}`;
}
