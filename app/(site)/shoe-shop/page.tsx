import BilingualText from "@/components/shared/BilingualText";
import ProductGrid from "@/components/shop/ProductGrid";
import { getShoeProducts } from "@/lib/data/loaders";

export const metadata = {
  title: "STAN BROS Shoe Shop",
};

export default function ShoeShopPage() {
  const data = getShoeProducts();

  return (
    <div className="space-y-8 pb-12 pt-4">
      <header className="space-y-3">
        <BilingualText
          as="h1"
          en="STAN BROS Shoe Shop"
          ta="STAN BROS ஷூ ஷாப்"
          className="font-display text-4xl text-[var(--brand-strong)] sm:text-5xl"
        />
        <BilingualText
          as="p"
          en="Footwear range across casual, formal, sports, sandals, and slippers with comfort-focused guidance."
          ta="கேஷுவல், ஃபார்மல், ஸ்போர்ட்ஸ், செண்டல், ஸ்லிப்பர் உள்ளிட்ட பல வகை காலணிகள், வசதியை மையமாக கொண்ட வழிகாட்டுதலுடன்."
          className="max-w-3xl text-base font-medium text-slate-700"
        />
      </header>

      <ProductGrid
        title={{
          en: "Featured Footwear",
          ta: "தேர்ந்தெடுத்த காலணிகள்",
        }}
        items={data.items.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          priceLabel: {
            en: "Best price available",
            ta: "சிறந்த விலை கிடைக்கும்",
          },
          category: item.category,
          imageUrl: item.imageUrl,
        }))}
      />
    </div>
  );
}
