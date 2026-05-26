"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { navConfig, type NavLink } from "../core/types";
import { siteConfig } from "@/lib/site.config";
import BuyBotton from "@/features/store/components/ui/buy-botton";

// ─── Mobile link item ─────────────────────────────────────────────────────────

function MobileNavItem({
  link,
  onClose,
}: {
  link: NavLink;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === link.href;
  const [open, setOpen] = useState(false);

  // Link with nested children → collapsible
  if (link.children?.length) {
    return (
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
          {link.label}
          <ChevronDown
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4">
          <ul className="mt-1 space-y-1 border-l border-border pl-3">
            {link.children.map((sub) => (
              <li key={sub.href}>
                <Link
                  href={sub.href}
                  onClick={onClose}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm transition-colors",
                    "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    pathname === sub.href && "text-foreground font-medium",
                  )}
                >
                  <span>{sub.label}</span>
                  {sub.description && (
                    <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                      {sub.description}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  // Plain link
  return (
    <Link
      href={link.href}
      onClick={onClose}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        isActive ? "text-foreground bg-accent" : "text-muted-foreground",
        link.variant === "ghost" && "italic",
      )}
    >
      {link.label}
      {link.external && (
        <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
      )}
    </Link>
  );
}

// ─── Mobile Navbar ────────────────────────────────────────────────────────────

export function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const { brand, links, cta } = navConfig;

  return (
    // visible on mobile, hidden on md+
    <div className="flex md:hidden items-center ">
      {/* Sheet trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Abrir menú">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[280px] sm:w-[320px] flex flex-col"
        >
          <SheetHeader className="text-left">
            <SheetTitle asChild>
              <Link
                href={siteConfig.href}
                onClick={() => setOpen(false)}
                className="font-bold text-lg tracking-tight"
              >
                {brand.name}
              </Link>
            </SheetTitle>
          </SheetHeader>

          {/* Links */}
          <nav className="mt-6 flex-1 space-y-1 overflow-y-auto">
            {links.map((link) => (
              <MobileNavItem
                key={link.href}
                link={link}
                onClose={() => setOpen(false)}
              />
            ))}
          </nav>

          <SheetFooter>
            <BuyBotton />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
