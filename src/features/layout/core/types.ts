// ─── Types ────────────────────────────────────────────────────────────────────
import { siteConfig, SiteConfig } from "@/lib/site.config";
export type NavLinkVariant = "default" | "highlight" | "ghost";

export interface NavSubLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavLink {
  label: string;
  href: string;
  /** Optional icon name (e.g. lucide icon key) */
  icon?: string;
  /** Visual treatment for the link */
  variant?: NavLinkVariant;
  /** Marks the link as external (opens in new tab) */
  external?: boolean;
  /** Nested dropdown links */
  children?: NavSubLink[];
}

export interface NavConfig {
  brand: SiteConfig;
  links: NavLink[];
  /** Optional CTA button rendered separately from the link list */
  cta?: {
    label: string;
    href: string;
    variant?: "default" | "outline" | "ghost";
  };
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const navConfig: NavConfig = {
  brand: siteConfig,
  links: [
    {
      label: "Inicio",
      href: "/",
      variant: "default",
    },
    {
      label: "Productos",
      href: "/productos",
      variant: "default",
      children: [
        {
          label: "Catálogo",
          href: "/productos/catalogo",
          description: "Explora toda nuestra línea de productos.",
        },
        {
          label: "Novedades",
          href: "/productos/novedades",
          description: "Lo último que acabamos de lanzar.",
        },
        {
          label: "Ofertas",
          href: "/productos/ofertas",
          description: "Descuentos y promociones vigentes.",
        },
      ],
    },
    {
      label: "Nosotros",
      href: "/nosotros",
      variant: "default",
    },
    {
      label: "Blog",
      href: "/blog",
      variant: "default",
    },
    {
      label: "Contacto",
      href: "/contacto",
      variant: "default",
    },
    {
      label: "Docs",
      href: "https://docs.acme.com",
      variant: "ghost",
      external: true,
    },
  ],
};
