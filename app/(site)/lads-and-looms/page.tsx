import BilingualText from "@/components/shared/BilingualText";
import ProductGrid from "@/components/shop/ProductGrid";
import { getClothingProducts } from "@/lib/data/loaders";

export const metadata = {
  title: "STAN BROS Lads & Looms",
};

export default function LadsAndLoomsPage() {
  const data = getClothingProducts();

  return (
    <div className="space-y-8 pb-12 pt-4">
      <header className="space-y-3">
        <BilingualText
          as="h1"
          en="STAN BROS Lads & Looms"
          ta="STAN BROS லாட்ஸ் & லூம்ஸ்"
          className="font-display text-4xl text-[var(--brand-strong)] sm:text-5xl"
        />
        <BilingualText
          as="p"
          en="Men’s clothing collections for office wear, everyday comfort, and traditional occasions."
          ta="ஆபிஸ் அணிவகை, அன்றாட வசதி, பாரம்பரிய நிகழ்ச்சிகளுக்கான ஆண்கள் உடைத் தொகுப்புகள்."
          className="max-w-3xl text-base font-medium text-slate-700"
        />
      </header>

      <ProductGrid
        title={{
          en: "Featured Clothing",
          ta: "தேர்ந்தெடுத்த உடைகள்",
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
