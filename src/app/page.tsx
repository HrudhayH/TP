
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { Introduction } from "@/components/sections/introduction";
import { ProductCategories } from "@/components/sections/product-categories";
import { FeaturedProduct } from "@/components/sections/featured-product";
import { GlobalPresence } from "@/components/sections/global-presence";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <Introduction />
      <ProductCategories />
      <FeaturedProduct />
      <GlobalPresence />
      <CTA />
      <Footer />
    </main>
  );
}
