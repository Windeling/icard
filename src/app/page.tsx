import { Header } from "@/components/header";
import { IPadNav } from "@/components/ipad-nav";
import { HeroSection } from "@/components/hero-section";
import { ProductComparison } from "@/components/product-comparison";
import { AccessoriesSection } from "@/components/accessories-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <IPadNav />
      <HeroSection />
      <ProductComparison />
      <AccessoriesSection />
      <Footer />
    </main>
  );
}
