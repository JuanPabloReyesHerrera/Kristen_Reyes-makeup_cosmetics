import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { navConfig } from "../core/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { siteConfig } from "@/lib/site.config";
import BuyBotton from "@/features/store/components/ui/buy-botton";

/**
 * Navbar
 *
 * Renders DesktopNavbar (hidden on <md) and MobileNavbar (hidden on md+).
 * Each child is self-contained and handles its own visibility via Tailwind classes.
 *
 * Usage:
 *   <Navbar />
 *
 * Place inside a <header> with your preferred sticky/border styling, e.g.:
 *   <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
 *     <div className="container mx-auto px-4">
 *       <Navbar />
 *     </div>
 *   </header>
 */
export function Navbar() {
  const logoSize: number = 120;
  return (
    <nav className="flex h-16 items-center justify-between px-4 bg-background">
      {/* Brand */}
      <Button variant={"ghost"} className="rounded-3xl">
        <Link
          href={"/"}
          className="flex items-center gap-2 shrink-0 font-bold text-lg tracking-tight"
        >
          <Image
            width={logoSize}
            height={logoSize}
            src={siteConfig.logo.root.src}
            alt={siteConfig.name}
            className={siteConfig.logo.root.className}
          />
          <Image
            width={logoSize}
            height={logoSize}
            src={siteConfig.logo.dark.src}
            className={siteConfig.logo.dark.className}
            alt={siteConfig.name}
          />
        </Link>
      </Button>

      {/* Desktop: visible md+ */}
      <DesktopNavbar />

      {/* Mobile: visible below md */}
      <MobileNavbar />
      {/* CTA */}
      <BuyBotton />
    </nav>
  );
}
