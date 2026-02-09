import { DEFAULT_WHATSAPP_NUMBER_E164, toWhatsAppHref } from "@/lib/constants/whatsapp";

export default function WhatsAppLink({
  message,
  numberE164 = DEFAULT_WHATSAPP_NUMBER_E164,
  className,
  children,
}: {
  message: string;
  numberE164?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const href = toWhatsAppHref({ numberE164, message });
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

