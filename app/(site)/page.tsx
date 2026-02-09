import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import ShopUnitsSection from "@/components/sections/ShopUnitsSection";
import SpiritualValuesSection from "@/components/sections/SpiritualValuesSection";
import PremiumClosingSection from "@/components/sections/PremiumClosingSection";
import { getShopUnits } from "@/lib/data/loaders";

export default function HomePage() {
  const units = getShopUnits();

  return (
    <div className="space-y-16 pb-16 lg:space-y-20">
      <HeroSection />
      <HighlightsSection />
      <section id="business-units">
        <ShopUnitsSection units={units} />
      </section>
      <SpiritualValuesSection />
      <PremiumClosingSection />
    </div>
  );
}
