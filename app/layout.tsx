import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "STAN BROS",
    template: "%s | STAN BROS",
  },
  description:
    "STAN BROS retail website for Mobile & Accessories, Lads & Looms, and Shoe Shop. Tamil and English browsing with WhatsApp enquiry.",
  metadataBase: new URL("https://stanbros.in"),
  openGraph: {
    title: "STAN BROS",
    description:
      "A trusted local retail brand by brothers Stains and Stanley. Explore mobiles, menswear, and footwear.",
    url: "https://stanbros.in",
    siteName: "STAN BROS",
    images: [{ url: "/brand/og.svg", width: 1200, height: 630, alt: "STAN BROS" }],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
