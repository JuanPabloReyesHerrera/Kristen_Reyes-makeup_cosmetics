"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navConfig, type NavLink } from "../core/types";

// ─── Sub-link card (inside dropdown) ─────────────────────────────────────────

function SubLinkCard({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description?: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none",
            "transition-colors hover:bg-accent hover:text-accent-foreground",
            "focus:bg-accent focus:text-accent-foreground",
          )}
        >
          <div className="text-sm font-medium leading-none">{label}</div>
          {description && (
            <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">
              {description}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

// ─── Single nav item ──────────────────────────────────────────────────────────

function NavItem({ link }: { link: NavLink }) {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  // Link with dropdown children
  if (link.children?.length) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={cn(
            "bg-transparent",
            isActive && "text-foreground font-semibold",
          )}
        >
          {link.label}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[340px] gap-1 p-3 md:w-[420px] md:grid-cols-2">
            {link.children.map((sub) => (
              <SubLinkCard key={sub.href} {...sub} />
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  // Plain link
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className={cn(
            navigationMenuTriggerStyle(),
            "bg-transparent",
            isActive && "text-foreground font-semibold",
            link.variant === "ghost" && "text-muted-foreground",
          )}
        >
          {link.label}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

// ─── Desktop Navbar ───────────────────────────────────────────────────────────

type DesktopNavbarProps = {};

export function DesktopNavbar() {
  const { links, cta } = navConfig;

  return (
    // hidden on mobile, flex on md+

    <NavigationMenu className="hidden md:flex flex-1 justify-center">
      <NavigationMenuList>
        {links.map((link) => (
          <NavItem key={link.href} link={link} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
