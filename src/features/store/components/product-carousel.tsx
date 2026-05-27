"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { type Product } from "../core/product.type";
import { ProductCard } from "./ui/product-card";
import { useCarousel } from "../hooks/use-carousel";

interface ProductCarouselProps {
  products: Product[];
  onViewMore?: () => void;
}

export const ProductCarousel = ({
  products,
  onViewMore,
}: ProductCarouselProps) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile/desktop
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollContainerRef, canScrollLeft, canScrollRight, scroll } =
    useCarousel({ isMobile, autoScrollInterval: 3000 });

  const handleViewMore = () => {
    if (onViewMore) {
      onViewMore();
    } else {
      console.log("Ver más productos clicked");
    }
  };

  return (
    <div
      className="relative w-full min-h-screen flex flex-col py-8 bg-background"
      id="makeup-cosmetics"
    >
      {/* Header */}
      <div className="px-4 md:px-8 py-6 md:py-12 max-w-[1600px] mx-auto w-full">
        <div className="space-y-2">
          <h2 className="font-heading text-4xl md:text-6xl font-light tracking-wide text-foreground">
            Nueva Colección
          </h2>
          <p className="text-sm md:text-base font-light tracking-widest text-muted-foreground uppercase">
            Piezas esenciales para tu guardarropa
          </p>
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div className="flex-1 relative max-w-[1600px] mx-auto w-full py-4 md:py-8">
        {/* Navigation Buttons - Desktop Only */}
        {!isMobile && (
          <>
            <button
              onClick={() => scroll("left")}
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-background/95 backdrop-blur-sm border border-border flex items-center justify-center transition-all duration-300 hover:bg-background hover:shadow-lg hover:scale-105 ${
                !canScrollLeft ? "opacity-0 pointer-events-none" : ""
              }`}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            <button
              onClick={() => scroll("right")}
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-background/95 backdrop-blur-sm border border-border flex items-center justify-center transition-all duration-300 hover:bg-background hover:shadow-lg hover:scale-105 ${
                !canScrollRight ? "opacity-0 pointer-events-none" : ""
              }`}
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </>
        )}

        {/* Products Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto px-4 md:px-8 py-4 md:py-8 scroll-smooth scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center px-4 md:px-8 py-8 md:py-12 max-w-[1600px] mx-auto w-full">
        <button
          onClick={handleViewMore}
          className="group flex items-center gap-3 px-6 md:px-12 py-4 md:py-5 bg-primary text-primary-foreground border-none text-sm font-normal tracking-widest transition-all duration-400 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl relative overflow-hidden w-full md:w-auto justify-center"
        >
          <span className="relative z-10">VER CATÁLOGO COMPLETO</span>
          <Plus className="w-5 h-5 transition-transform group-hover:rotate-90 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Desktop: productos de 320px */
        @media (min-width: 768px) {
          .flex-shrink-0 {
            width: 320px !important;
            min-width: 320px;
          }
        }
      `}</style>
    </div>
  );
};
