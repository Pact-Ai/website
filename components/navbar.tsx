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

import { siteConfig } from "@/config/site";
import { Logo, ChevronDownIcon } from "@/components/icons";

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
          : "top-0 w-full max-w-full px-0",
      )}
    >
      <HeroUINavbar
        className={clsx(
          "transition-all duration-500 ease-in-out px-4 sm:px-6",
          scrolled
            ? "bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-lg shadow-black/30"
            : "bg-white/[0.02] backdrop-blur-md border-b border-white/[0.06] rounded-none shadow-none",
        )}
        maxWidth="full"
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarMenuToggle className="lg:hidden" />
          <NavbarBrand className="gap-3 max-w-fit">
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
                  <NavbarItem key="product-navbar-item">
                    <Dropdown className="bg-background/90 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30">
                      <DropdownTrigger>
                        <Button
                          disableRipple
                          className={clsx(
                            "p-0 bg-transparent data-[hover=true]:bg-transparent min-w-0 font-medium text-foreground relative transition-colors text-base flex items-center gap-1 h-auto",
                            isActive &&
                              "text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary",
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
                          className="transition-colors hover:bg-white/5 active:bg-white/10"
                          description="AI platform for education. Study, understand, and create."
                          href="https://pagestudio1.framer.website/"
                          target="_blank"
                          rel="noopener noreferrer"
                          startContent={
                            <img
                              alt="NoteStudio"
                              className="w-16 h-16 rounded-md object-cover border border-white/10"
                              src="/pagestudio_pic.jpg"
                            />
                          }
                        >
                          <span className="font-bold text-base mb-1 block">
                            NoteStudio
                          </span>
                        </DropdownItem>
                        <DropdownItem
                          key="jerome"
                          className="transition-colors hover:bg-white/5 active:bg-white/10"
                          description="Language translation API. Affordable service for developers."
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          startContent={
                            <img
                              alt="Jerome"
                              className="w-16 h-16 rounded-md object-cover border border-white/10"
                              src="/jerome.jpg"
                            />
                          }
                        >
                          <span className="font-bold text-base mb-1 block">
                            The Jerome API
                          </span>
                        </DropdownItem>
                        <DropdownItem
                          key="t5"
                          className="transition-colors hover:bg-white/5 active:bg-white/10"
                          description="NLP for low-resource languages. T5 Igbo-English."
                          href="https://huggingface.co/Pact-Ai/t5-small_igbo-en"
                          target="_blank"
                          rel="noopener noreferrer"
                          startContent={
                            <img
                              alt="T5"
                              className="w-16 h-16 rounded-md object-cover border border-white/10"
                              src="/t5_igbo.png"
                            />
                          }
                        >
                          <span className="font-bold text-base mb-1 block">
                            T5 Igbo-English
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
                      "relative pb-1 transition-colors",
                      isActive &&
                        "text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary",
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
                      href="https://pagestudio1.framer.website/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NoteStudio
                    </NextLink>
                    <NextLink
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "w-full pl-3 font-medium",
                      )}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Jerome API
                    </NextLink>
                    <NextLink
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "w-full pl-3 font-medium",
                      )}
                      href="https://huggingface.co/Pact-Ai/t5-small_igbo-en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      T5 Igbo-English
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
                      "size-lg",
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
