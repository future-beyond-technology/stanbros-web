import Card from "@/components/ui/Card";
import BilingualText from "@/components/shared/BilingualText";
import WhatsAppLink from "@/components/shared/WhatsAppLink";
import { Button } from "@/components/ui/Button";
import { getBrand, getShopUnits } from "@/lib/data/loaders";

export const metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  const brand = getBrand();
  const units = getShopUnits();

  return (
    <div className="space-y-8 pb-12 pt-4">
      <header className="space-y-3">
        <BilingualText
          as="h1"
          en="Contact STAN BROS"
          ta="STAN BROS தொடர்பு"
          className="font-display text-4xl text-[var(--brand-strong)] sm:text-5xl"
        />
        <BilingualText
          as="p"
          en="Send your requirement on WhatsApp and we will guide you with availability and best price options."
          ta="உங்கள் தேவையை WhatsApp-ல் அனுப்புங்கள். கிடைக்கும் நிலை மற்றும் சிறந்த விலை தேர்வுகளை எளிமையாக தெரிவிப்போம்."
          className="max-w-3xl text-base font-medium text-slate-700"
        />
      </header>

      <div className="grid gap-4 lg:grid-cols-12">
        <Card className="space-y-4 p-5 sm:p-6 lg:col-span-7">
          <BilingualText
            as="p"
            en="Primary WhatsApp"
            ta="முதன்மை WhatsApp"
            className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500"
          />
          <p className="font-display text-3xl text-[var(--brand-strong)]">{brand.whatsapp.numberE164}</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppLink message={brand.whatsapp.defaultMessage.en}>
              <Button size="lg">
                <BilingualText as="span" en="Start WhatsApp Chat" ta="WhatsApp உரையாடலை தொடங்குங்கள்" />
              </Button>
            </WhatsAppLink>
            <Button variant="secondary" size="lg" href="/">
              <BilingualText as="span" en="Back to Home" ta="முகப்புக்கு திரும்ப" />
            </Button>
          </div>

          <BilingualText
            as="p"
            en="Choose a business unit and message us directly:"
            ta="கீழே உள்ள வணிக பிரிவை தேர்வு செய்து நேரடியாக மெசேஜ் செய்யலாம்:"
            className="text-sm font-medium text-slate-600"
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {units.map((unit) => (
              <WhatsAppLink
                key={unit.slug}
                message={`Hi STAN BROS, I need details about ${unit.name.en}.`}
                className="block"
              >
                <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-4 transition-colors hover:bg-[var(--surface-contrast)]">
                  <BilingualText
                    as="p"
                    en={unit.name.en}
                    ta={unit.name.ta}
                    className="text-sm font-semibold text-[var(--brand-strong)]"
                  />
                </div>
              </WhatsAppLink>
            ))}
          </div>
        </Card>

        <Card className="space-y-4 p-5 sm:p-6 lg:col-span-5">
          <BilingualText
            as="h2"
            en="What to include in your message"
            ta="மெசேஜில் சேர்க்க வேண்டியது"
            className="text-lg font-semibold text-[var(--brand-strong)]"
          />

          <ol className="list-decimal space-y-1.5 pl-5 text-sm font-medium leading-relaxed text-slate-700">
            <li>
              <BilingualText
                as="span"
                en="Product or category name"
                ta="பொருள் அல்லது பிரிவு பெயர்"
              />
            </li>
            <li>
              <BilingualText
                as="span"
                en="Budget range"
                ta="பட்ஜெட் வரம்பு"
              />
            </li>
            <li>
              <BilingualText
                as="span"
                en="Preferred brand or size"
                ta="விருப்பமான பிராண்ட் அல்லது அளவு"
              />
            </li>
          </ol>

          <BilingualText
            as="p"
            en="Our team responds with practical options. No pressure, no over-selling."
            ta="எங்கள் குழு நடைமுறை தேர்வுகளை பகிரும். அழுத்தம் இல்லாமல், தேவைக்கு ஏற்ப வழிகாட்டுவோம்."
            className="text-sm font-medium leading-relaxed text-slate-700"
          />
        </Card>
      </div>
    </div>
  );
}
