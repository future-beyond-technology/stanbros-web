import type { Metadata } from "next";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { getBrand } from "@/lib/data/loaders";
import Container from "@/components/ui/Container";
import { LanguageProvider } from "@/components/shared/LanguageProvider";
import MobileWhatsAppBar from "@/components/layout/MobileWhatsAppBar";

export const metadata: Metadata = {
  applicationName: "STAN BROS",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const brand = getBrand();

  return (
    <LanguageProvider>
      <div className="sb-shell">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>

        <SiteHeader brandName={brand.name} />

        <main id="content" className="pt-8 pb-32 sm:pt-10 sm:pb-16">
          <Container>
            <div className="min-h-[64dvh]">{children}</div>
          </Container>
        </main>

        <SiteFooter brandName={brand.name} />
        <MobileWhatsAppBar />
      </div>
    </LanguageProvider>
  );
}
