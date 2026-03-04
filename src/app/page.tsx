
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { Introduction } from "@/components/sections/introduction";
import { ProductCategories } from "@/components/sections/product-categories";
import { FeaturedProduct } from "@/components/sections/featured-product";
import { GlobalPresence } from "@/components/sections/global-presence";
import { WhyChoose } from "@/components/sections/why-choose";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Introduction />
      <ProductCategories />
      <FeaturedProduct />
      <WhyChoose />
      <GlobalPresence />
      <CTA />
      <Footer />
    </main>
  );
}
