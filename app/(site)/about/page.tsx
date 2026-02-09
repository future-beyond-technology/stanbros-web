import Card from "@/components/ui/Card";
import BilingualText from "@/components/shared/BilingualText";
import { getBrand } from "@/lib/data/loaders";

export const metadata = {
  title: "About STAN BROS",
};

export default function AboutPage() {
  const brand = getBrand();

  return (
    <article className="space-y-8 pb-12 pt-4">
      <header className="space-y-3">
        <BilingualText
          as="h1"
          en="About STAN BROS"
          ta="STAN BROS பற்றி"
          className="font-display text-4xl text-[var(--brand-strong)] sm:text-5xl"
        />
        <BilingualText
          as="p"
          en="A humble local retail journey built on brotherhood, trust, and consistency."
          ta="சகோதரத்துவம், நம்பிக்கை, நிலைத்தன்மை ஆகியவற்றின் மீது கட்டப்பட்ட எளிய உள்ளூர் வணிக பயணம்."
          className="max-w-3xl text-base font-medium text-slate-700"
        />
      </header>

      <Card className="space-y-6 p-5 sm:p-7">
        <section className="space-y-2">
          <BilingualText
            as="h2"
            en="The Story of Stains and Stanley"
            ta="ஸ்டைன்ஸ் மற்றும் ஸ்டான்லியின் கதை"
            className="text-lg font-semibold text-[var(--brand-strong)]"
          />
          <BilingualText
            as="p"
            en="Stains and Stanley are brothers who grew up sharing responsibility, discipline, and respect for people. Their business journey started with one clear thought: local customers deserve honest advice and dependable products without confusion."
            ta="ஸ்டைன்ஸ் மற்றும் ஸ்டான்லி இருவரும் பொறுப்பு உணர்வு, ஒழுக்கம், மனிதர்களை மதிக்கும் அணுகுமுறை ஆகியவற்றுடன் வளர்ந்த சகோதரர்கள். அவர்களின் வணிக பயணம் ஒரு தெளிவான எண்ணத்துடன் தொடங்கியது: உள்ளூர் வாடிக்கையாளர்களுக்கு குழப்பமில்லாமல் நேர்மையான ஆலோசனையும் நம்பகமான பொருட்களும் கிடைக்க வேண்டும்."
            className="text-sm font-medium leading-relaxed text-slate-700"
          />
        </section>

        <section className="space-y-2">
          <BilingualText
            as="h2"
            en="Brotherhood at the Core"
            ta="மையத்தில் சகோதரத்துவம்"
            className="text-lg font-semibold text-[var(--brand-strong)]"
          />
          <BilingualText
            as="p"
            en="For them, STAN BROS is not just a business name. It is a shared promise between two brothers to stay fair, keep quality consistent, and treat every customer with patience and respect."
            ta="அவர்களுக்கு STAN BROS என்பது ஒரு வணிகப் பெயர் மட்டும் அல்ல. அது இரண்டு சகோதரர்கள் இடையே உள்ள ஒரே வாக்குறுதி: நியாயமான அணுகுமுறை, ஒரே தரம், ஒவ்வொரு வாடிக்கையாளரிடமும் பொறுமையும் மரியாதையும்."
            className="text-sm font-medium leading-relaxed text-slate-700"
          />
        </section>

        <section className="space-y-2">
          <BilingualText
            as="h2"
            en="Shared Vision"
            ta="பகிரப்பட்ட பார்வை"
            className="text-lg font-semibold text-[var(--brand-strong)]"
          />
          <BilingualText
            as="p"
            en="Whether you visit the mobile store, clothing unit, or shoe shop, the experience should feel the same: clear guidance, practical value, and a local family-business warmth."
            ta="மொபைல் கடை, உடை பிரிவு, அல்லது ஷூ ஷாப் எதற்குச் சென்றாலும் அனுபவம் ஒரே மாதிரியாக இருக்க வேண்டும்: தெளிவான வழிகாட்டுதல், நடைமுறை மதிப்பு, குடும்ப வணிகத்தின் அன்பான அணுகுமுறை."
            className="text-sm font-medium leading-relaxed text-slate-700"
          />
        </section>

        <div className="rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent-soft)] p-5">
          <BilingualText
            as="p"
            en="Brotherhood Quote"
            ta="சகோதரத்துவ மேற்கோள்"
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-strong)]"
          />
          <BilingualText
            as="p"
            en={`“${brand.quote.en}”`}
            ta={`“${brand.quote.ta}”`}
            className="mt-2 font-display text-2xl leading-snug text-[var(--brand-strong)]"
          />
        </div>
      </Card>
    </article>
  );
}
