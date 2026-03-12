import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const router = useRouter();

  //Hooks
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={clsx(
        "fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out",
        scrolled
          ? "top-6 w-[95%] max-w-4xl px-2"
          : "top-0 w-full max-w-full px-0"
      )}
    >
      <HeroUINavbar
        maxWidth="full"
        className={clsx(
          "transition-all duration-500 ease-in-out px-4 sm:px-6",
          scrolled
            ? "bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-lg shadow-black/30"
            : "bg-white/[0.02] backdrop-blur-md border-b border-white/[0.06] rounded-none shadow-none"
        )}
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarMenuToggle className="lg:hidden" />
          <NavbarBrand className="gap-3 max-w-fit">
            <NextLink className="flex justify-start items-center gap-2" href="/">
              <Logo />
              <p className="font-bold text-inherit">{siteConfig.name}</p>
            </NextLink>

          </NavbarBrand>
          <div className="hidden lg:flex gap-6 justify-end flex-1 pr-11">
            {siteConfig.navItems.map((item) => {
              const isActive = router.pathname === item.href;
              return (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "relative pb-1 transition-colors",
                      isActive && "text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary",
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              );
            })}
          </div>
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-6 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "w-full",
                    "size-lg",
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </HeroUINavbar>
    </div>
  );
};
