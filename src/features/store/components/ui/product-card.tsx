"use client";

import { useState } from "react";
import { Product } from "../../core/product.type";
import { formatPrice } from "../../core/format-price";

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="flex-shrink-0 cursor-pointer transition-transform hover:scale-[1.02]"
      style={{
        animation: "fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards",
        animationDelay: `${index * 0.1}s`,
        width: "calc((100% - 2rem) / 3)",
      }}
    >
      <div className="relative overflow-hidden bg-neutral-100 aspect-[3/4] rounded-sm">
        {/* Image */}
        <img
          src={product.cover}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />

        {/* Loading State */}
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-neutral-200" />
        )}

        {/* Hover Overlay with Characteristics */}
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
          <div className="space-y-1 md:space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {product.characteristics.slice(0, 2).map((char, idx) => (
              <div key={idx} className="text-white/90 text-xs md:text-sm">
                <span className="font-light tracking-wide">{char.label}:</span>
                <span className="ml-2 font-normal">{char.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-3 md:mt-4 space-y-1 md:space-y-2">
        <h3 className="text-sm md:text-lg font-light tracking-wide text-foreground font-heading">
          {product.name}
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 leading-relaxed hidden md:block">
          {product.description}
        </p>
        <div className="text-base md:text-xl font-light tracking-wide text-foreground pt-1 md:pt-2">
          {formatPrice(product.price)}
        </div>
      </div>
    </div>
  );
};
