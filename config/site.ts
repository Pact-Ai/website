export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Pact-Ai",
  organization: "Pact-Ai",
  description: "Building AI products and systems that help. Specializing in NLP, Computer Vision, and low-resource languages.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Product",
      href: "/product",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Product",
      href: "/product",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/Pact-Ai",
    huggingface: "https://huggingface.co/Pact-Ai",
    discord: "https://discord.gg/pact-ai",
  },
};
