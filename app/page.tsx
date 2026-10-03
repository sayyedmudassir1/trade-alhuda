import type { Metadata } from "next";

import Hero from "@/components/hero";
import ProductCarouselSection from "@/components/ProductCarouselSection";
import WhyChooseAlHuda from "@/components/WhyChooseUs";
import ConnectingMarkets from "@/components/ConnectingMarkets";
import ProductPortfolio from "@/components/ProductPortfolio";
import TradeCta from "@/components/TradeCta";

export const metadata: Metadata = {
  title: "Al Huda | Global Trading & Product Solutions",
  description:
    "Discover Al Huda's products, capabilities, market reach, and trading solutions built to connect businesses and markets globally.",
};

export default function Page() {
  return (
    <main
      id="main-content"
      className="
                min-h-screen
                overflow-hidden                
            "
    >
      {/* =========================================================
                01. HERO
                Primary value proposition + first conversion point
            ========================================================== */}

      <section aria-labelledby="hero-heading">
        <Hero />
      </section>

      {/* =========================================================
                02. PRODUCT EXPERIENCE
                Visual proof + product discovery
            ========================================================== */}

      <section
        aria-labelledby="products-heading"
        className="relative"
      >
        <ProductCarouselSection />
      </section>

      {/* =========================================================
                03. WHY AL HUDA
                Trust, differentiation, and credibility
            ========================================================== */}

      <section
        aria-labelledby="why-alhuda-heading"
        className="relative"
      >
        <WhyChooseAlHuda />
      </section>

      {/* =========================================================
                04. GLOBAL REACH
                Markets, geography, connectivity, and capability
            ========================================================== */}

      <section
        aria-labelledby="markets-heading"
        className="relative"
      >
        <ConnectingMarkets />
      </section>

      {/* =========================================================
                05. PRODUCT PORTFOLIO
                Deeper product exploration and discovery
            ========================================================== */}

      <section
        aria-labelledby="portfolio-heading"
        className="relative"
      >
        <ProductPortfolio />
      </section>

      {/* =========================================================
                06. CONVERSION
                Final CTA / enquiry / business action
            ========================================================== */}

      <section
        aria-labelledby="trade-heading"
        className="relative"
      >
        <TradeCta />
      </section>
    </main>
  );
}
