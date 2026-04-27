"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  BracketsCurlyIcon,
  CubeIcon,
  PencilLineIcon,
} from "@phosphor-icons/react";

import { siteConfig } from "@/config/site";
import { Logo, ChevronDownIcon } from "@/components/icons";

export const Navbar = () => {
  const router = useRouter();

  //Hooks
  const [scrolled, setScrolled] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

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
          : "top-0 w-full max-w-full px-0",
      )}
    >
      <HeroUINavbar
        className={clsx(
          "transition-all duration-500 ease-in-out px-4 sm:px-6",
          scrolled
            ? "bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-lg shadow-black/30"
            : "rounded-none shadow-none bg-transparent backdrop-blur-none border-b border-white/0",
        )}
        maxWidth="full"
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarMenuToggle className="lg:hidden" />
          <NavbarBrand className="gap-3 max-w-fit absolute left-1/2 -translate-x-1/2 lg:static lg:translate-0">
            <NextLink
              className="flex justify-start items-center gap-2"
              href="/"
            >
              <Logo />
              <p className="font-bold text-inherit">{siteConfig.name}</p>
            </NextLink>
          </NavbarBrand>
          <div className="hidden lg:flex gap-6 justify-end flex-1 pr-11">
            {siteConfig.navItems.map((item) => {
              const isActive = router.pathname === item.href;

              if (item.label === "Product" || item.label === "Products") {
                return (
                  <NavbarItem
                    key="product-navbar-item"
                    className="flex items-center"
                    onMouseEnter={() => setIsProductMenuOpen(true)}
                    onMouseLeave={() => setIsProductMenuOpen(false)}
                  >
                    <Dropdown
                      className={clsx(
                        "bg-transparent text-white backdrop-blur-xs border border-white/10 shadow-lg shadow-black/30",
                        scrolled &&
                          "bg-black/10 border border-white/10 text-black",
                      )}
                      isOpen={isProductMenuOpen}
                    >
                      <DropdownTrigger>
                        <Button
                          disableRipple
                          className={clsx(
                            "bg-transparent data-[hover=true]:bg-white/10 data-[hover=true]:scale-100 min-w-0 font-medium text-foreground relative transition-colors flex uppercase text-xs tracking-wide items-center gap-1 h-auto p-3 px-4 duration-300 rounded-md",
                            isActive && "text-primary bg-white/10",
                          )}
                          endContent={
                            <ChevronDownIcon
                              className="translate-y-[0.5px] opacity-70"
                              size={12}
                            />
                          }
                          radius="sm"
                          variant="light"
                        >
                          {item.label}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Products list"
                        className="w-[400px]"
                        itemClasses={{
                          base: "gap-4 px-4 py-3 rounded-lg flex items-center group transition-all",
                        }}
                      >
                        <DropdownItem
                          key="notestudio"
                          className={clsx(
                            "transition-colors hover:bg-white/5! active:bg-white/10 flex items-end text-white",
                            scrolled && "hover:bg-white/70! hover:text-black!",
                          )}
                          description="AI platform for education. Study, understand, and create."
                          href="https://pagestudio1.framer.website/"
                          rel="noopener noreferrer"
                          startContent={
                            <div className="p-4 rounded-md border border-white/10 bg-white text-black">
                              <PencilLineIcon size={32} weight="duotone" />
                            </div>
                          }
                          target="_blank"
                        >
                          <span className="font-bold text-base mb-1 block">
                            NoteStudio
                          </span>
                        </DropdownItem>
                        <DropdownItem
                          key="jerome"
                          className={clsx(
                            "transition-colors hover:bg-white/5! active:bg-white/10 flex items-end text-white",
                            scrolled && "hover:bg-white/70! hover:text-black!",
                          )}
                          description="Language translation API. Affordable service for developers."
                          href="#"
                          rel="noopener noreferrer"
                          startContent={
                            <div className="p-4 rounded-md border border-white/10 bg-white text-black">
                              <BracketsCurlyIcon size={32} weight="duotone" />
                            </div>
                          }
                          target="_blank"
                        >
                          <span className="font-bold text-base mb-1 block">
                            The Jerome API
                          </span>
                        </DropdownItem>
                        <DropdownItem
                          key="mesh"
                          className={clsx(
                            "transition-colors hover:bg-white/5! active:bg-white/10 flex items-end text-white",
                            scrolled && "hover:bg-white/70! hover:text-black!",
                          )}
                          description="A machine learning research space"
                          href="/experiments"
                          startContent={
                            <div className="p-4 rounded-md border border-white/10 bg-white text-black">
                              <CubeIcon size={32} weight="duotone" />
                            </div>
                          }
                        >
                          <span className="font-bold text-base mb-1 block">
                            Mesh
                          </span>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavbarItem>
                );
              }

              return (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "relative uppercase text-xs tracking-wide hover:bg-white/10 flex items-center px-4 py-3 transition-colors duration-300 rounded-md",
                      isActive && "text-primary bg-white/10",
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

        <NavbarMenu
          className={clsx("bg-background/5", scrolled && "top-0 py-24")}
        >
          <div className="mx-4 mt-6 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => {
              if (item.label === "Product" || item.label === "Products") {
                return (
                  <div
                    key={`${item}-${index}`}
                    className="flex flex-col gap-3 mt-2 mb-2"
                  >
                    <p className="font-semibold text-foreground/50 text-sm uppercase tracking-wider pl-1">
                      Products
                    </p>
                    <NextLink
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "w-full pl-3 font-medium",
                      )}
                      href="https://waitlist.notestudio.net"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NoteStudio
                    </NextLink>
                    <NextLink
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "w-full pl-3 font-medium",
                      )}
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      The Jerome API
                    </NextLink>
                    <NextLink
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "w-full pl-3 font-medium",
                      )}
                      href="/experiments"
                    >
                      Mesh
                    </NextLink>
                    <div className="w-full h-px bg-white/10 my-1" />
                  </div>
                );
              }

              return (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "w-full",
                      "text-lg",
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarMenuItem>
              );
            })}
          </div>
        </NavbarMenu>
      </HeroUINavbar>
    </div>
  );
};
