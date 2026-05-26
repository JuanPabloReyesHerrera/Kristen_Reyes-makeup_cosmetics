type socialsMedia = {
  page: string;
  userId: string;
  link: string;
};
type logoMode = {
  src: string;
  className: string;
};
export type SiteConfig = {
  name: string;
  description: string;
  logo: { root: logoMode; dark: logoMode };
  url: string;
  href: "/";
  socialsMdeia: socialsMedia[];
};

export const siteConfig: SiteConfig = {
  name: "Kristen Reyes",
  description: "Descripción corta de Kristen Reyes y su marca.",
  logo: {
    root: {
      src: "/assets/logo-root.png",
      className: "object-contain dark:hidden",
    },
    dark: {
      src: "/assets/logo-dark.png",
      className: "hidden object-contain dark:block",
    },
  },
  url: "https://www.kristenreyes.com",
  href: "/",

  socialsMdeia: [
    {
      page: "instagra",
      userId: "kistenreyes_",
      link: "https://www.instagram.com/kristenreyes_",
    },
  ],
};
