"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type BackGroundImageProps = {
  imageSrcs: string[];
  alt: string;
  className?: string;
  interval?: number;
};

export function BackGroundImage({
  imageSrcs,
  alt,
  className,
  interval = 4000,
}: BackGroundImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageSrcs.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageSrcs.length);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const prevIndex = (currentIndex - 1 + imageSrcs.length) % imageSrcs.length;
  console.log("PrevIndex", prevIndex);

  return (
    <div className={`fixed left-0 top-navbar h-dvh w-full ${className}`}>
      {/* Capa base: imagen anterior, siempre opaca */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          className="object-cover md:object-[center_10%]"
          src={imageSrcs[prevIndex]}
          alt={alt}
          sizes="(max-width: 768px) 100dvw, (max-width: 1200px) 80vw, 50dvw"
          fill
        />
      </div>

      {/* Capa superior: se remonta con cada cambio de key → animación siempre desde 0 */}
      <div
        key={currentIndex}
        className="absolute inset-0 w-full h-full animate-fade-in"
      >
        <Image
          className="object-cover md:object-[center_10%]"
          src={imageSrcs[currentIndex]}
          alt={alt}
          sizes="(max-width: 768px) 100dvw, (max-width: 1200px) 80vw, 50dvw"
          fill
          priority
        />
      </div>
    </div>
  );
}
