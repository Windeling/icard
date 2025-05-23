import { Header } from "@/components/header";
import { iCardNav } from "@/components/iCard-nav";
import { HeroSection } from "@/components/hero-section";
import { ProductComparison } from "@/components/product-comparison";
import { AccessoriesSection } from "@/components/accessories-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <iCardNav />
      <HeroSection />
      <ProductComparison />
      <AccessoriesSection />
      <Footer />
    </main>
  );
}
