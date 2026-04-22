export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Glim",
  organization: "Glim",
  description:
    "Building AI products and systems that help. Specializing in NLP, Computer Vision, and low-resource languages.",
  navItems: [
    {
      label: "Product",
      href: "/product",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Product",
      href: "/product",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/Glim",
    huggingface: "https://huggingface.co/Glim",
    discord: "https://discord.gg/glim",
  },
};
