"use client";

import { useState, useEffect, useRef, RefObject } from "react";

interface UseCarouselOptions {
  autoScrollInterval?: number;
  isMobile?: boolean;
}

interface UseCarouselReturn {
  scrollContainerRef: RefObject<HTMLDivElement>;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scroll: (direction: "left" | "right") => void;
  updateScrollButtons: () => void;
}

export const useCarousel = (
  options: UseCarouselOptions = {},
): UseCarouselReturn => {
  const { autoScrollInterval = 3000, isMobile = false } = options;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Update scroll button states
  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Scroll function
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = isMobile
        ? container.clientWidth
        : container.clientWidth * 0.8;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-center the middle product
  const centerMiddleProduct = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const products = container.children;

      if (products.length > 0) {
        const middleIndex = Math.floor(products.length / 2);
        const middleProduct = products[middleIndex] as HTMLElement;

        if (middleProduct) {
          const containerWidth = container.clientWidth;
          const productLeft = middleProduct.offsetLeft;
          const productWidth = middleProduct.clientWidth;

          const scrollPosition =
            productLeft - containerWidth / 2 + productWidth / 2;

          container.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
          });
        }
      }
    }
  };

  // Auto-scroll functionality
  const startAutoScroll = () => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }

    autoScrollTimerRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;

        // If we're at the end, go back to start
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          scroll("right");
        }
      }
    }, autoScrollInterval);
  };

  const stopAutoScroll = () => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  };

  // Setup scroll listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();

      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
      };
    }
  }, []);

  // Auto-center on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      centerMiddleProduct();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll setup
  useEffect(() => {
    startAutoScroll();

    const container = scrollContainerRef.current;
    if (container) {
      // Pause auto-scroll on user interaction
      const handleUserInteraction = () => {
        stopAutoScroll();
        // Resume after 5 seconds of no interaction
        setTimeout(() => {
          startAutoScroll();
        }, 5000);
      };

      container.addEventListener("mouseenter", stopAutoScroll);
      container.addEventListener("mouseleave", startAutoScroll);
      container.addEventListener("touchstart", handleUserInteraction);

      return () => {
        stopAutoScroll();
        container.removeEventListener("mouseenter", stopAutoScroll);
        container.removeEventListener("mouseleave", startAutoScroll);
        container.removeEventListener("touchstart", handleUserInteraction);
      };
    }

    return () => stopAutoScroll();
  }, [autoScrollInterval, isMobile]);

  return {
    scrollContainerRef,
    canScrollLeft,
    canScrollRight,
    scroll,
    updateScrollButtons,
  };
};
