import { Button } from "@/components/ui/Button";
import WhatsAppLink from "@/components/shared/WhatsAppLink";
import Card from "@/components/ui/Card";
import BilingualText from "@/components/shared/BilingualText";
import { getBrand } from "@/lib/data/loaders";

export default function EnquiryCTA({
  title,
  subtitle,
  presetMessage,
}: {
  title: { en: string; ta: string };
  subtitle: { en: string; ta: string };
  presetMessage?: { en: string; ta: string };
}) {
  const brand = getBrand();
  const message =
    presetMessage?.en ??
    `${brand.whatsapp.defaultMessage.en} (${title.en})`;

  return (
    <Card className="p-5 sm:p-6">
      <BilingualText
        en={title.en}
        ta={title.ta}
        enClassName="text-lg font-extrabold"
        taClassName="text-sm font-semibold"
      />
      <div className="mt-2 text-sm font-semibold text-slate-700">
        {subtitle.en}
      </div>
      <div className="mt-1 text-sm font-semibold text-slate-500" lang="ta">
        {subtitle.ta}
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <WhatsAppLink message={message}>
          <Button size="lg">WhatsApp now</Button>
        </WhatsAppLink>
        <div className="text-xs font-semibold text-slate-500">
          {brand.whatsapp.numberE164}
        </div>
      </div>
    </Card>
  );
}

