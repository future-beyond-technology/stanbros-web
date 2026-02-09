import BilingualText from "@/components/shared/BilingualText";
import ProductGrid from "@/components/shop/ProductGrid";
import { getMobileProducts } from "@/lib/data/loaders";

export const metadata = {
  title: "STAN BROS Mobile & Accessories",
};

const brandTamil: Record<string, string> = {
  Apple: "ஆப்பிள்",
  Samsung: "சாம்சங்",
  Redmi: "ரெட்மி",
  Realme: "ரியல்மி",
  Vivo: "விவோ",
  Oppo: "ஒப்போ",
};

export default function MobilePage() {
  const data = getMobileProducts();

  return (
    <div className="space-y-8 pb-12 pt-4">
      <header className="space-y-3">
        <BilingualText
          as="h1"
          en="STAN BROS Mobile & Accessories"
          ta="STAN BROS மொபைல் & ஆக்சஸரீஸ்"
          className="font-display text-4xl text-[var(--brand-strong)] sm:text-5xl"
        />
        <BilingualText
          as="p"
          en="Explore smartphones and everyday accessories with practical guidance and WhatsApp-first enquiry support."
          ta="நடைமுறை வழிகாட்டுதலுடன் ஸ்மார்ட்போன்கள் மற்றும் அன்றாட ஆக்சஸரீஸ்களை பார்க்கவும். விரைவான விசாரணைக்கு WhatsApp ஆதரவு உள்ளது."
          className="max-w-3xl text-base font-medium text-slate-700"
        />
      </header>

      <ProductGrid
        title={{
          en: "Mobile Phones",
          ta: "மொபைல் போன்கள்",
        }}
        items={data.phones.map((phone) => ({
          id: phone.id,
          name: phone.name,
          description: phone.description,
          priceLabel: phone.priceLabel,
          category: {
            en: phone.brand,
            ta: brandTamil[phone.brand] ?? phone.brand,
          },
          imageUrl: phone.imageUrl,
        }))}
      />

      <ProductGrid
        title={{
          en: "Accessories",
          ta: "ஆக்சஸரீஸ்",
        }}
        items={data.accessories.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          priceLabel: item.priceLabel,
          imageUrl: item.imageUrl,
        }))}
      />
    </div>
  );
}
