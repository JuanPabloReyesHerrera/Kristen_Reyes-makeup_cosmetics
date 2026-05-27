import { BackGroundImage } from "@/components/shared/background-image";
import { Hero } from "@/features/home/components/hero";
import { ProductCarousel } from "@/features/store/components/product-carousel";
import { SAMPLE_PRODUCTS } from "@/features/store/core/sample-products";
import { siteConfig } from "@/lib/site.config";

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col">
      <section className="flex flex-col w-full h-fit overflow-hidden">
        <BackGroundImage
          imageSrc={"/assets/hero.jpeg"}
          alt={siteConfig.name}
          className="h-dvh"
        />
        <Hero />
        <ProductCarousel products={SAMPLE_PRODUCTS} />
      </section>
    </main>
  );
}
