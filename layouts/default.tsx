import React from "react";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { GithubIcon, DiscordIcon, Logo } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16 relative z-10">
        {children}
      </main>

      <footer className="w-full border-t border-white/[0.06] mt-24">
        {/* Main footer body */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
            {/* Brand column */}
            <div className="md:col-span-2 flex flex-col gap-5">
              <NextLink className="flex items-center gap-2 w-fit" href="/">
                <Logo className="text-primary" size={28} />
                <span className="font-bold text-lg tracking-tight">
                  {siteConfig.name}
                </span>
              </NextLink>
              <p className="text-default-500 text-sm leading-relaxed max-w-xs">
                Building AI systems that help, matter, and scale. Specializing
                in NLP, Computer Vision, and low-resource language solutions.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <Link
                  isExternal
                  aria-label="GitHub"
                  className="text-default-500 hover:text-foreground transition-colors"
                  href={siteConfig.links.github}
                >
                  <GithubIcon size={18} />
                </Link>
                <Link
                  isExternal
                  aria-label="Discord"
                  className="text-default-500 hover:text-foreground transition-colors"
                  href={siteConfig.links.discord}
                >
                  <DiscordIcon size={18} />
                </Link>
                <Link
                  isExternal
                  aria-label="HuggingFace"
                  className="text-default-500 hover:text-foreground transition-colors"
                  href={siteConfig.links.huggingface}
                >
                  <img
                    alt="HuggingFace"
                    className="w-[18px] h-[18px] opacity-60 hover:opacity-100 transition-opacity"
                    src="/hf-logo.svg"
                  />
                </Link>
              </div>
            </div>

            {/* Products column */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-default-400">
                Products
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  isExternal
                  className="text-sm text-default-500 hover:text-foreground transition-colors w-fit"
                  href="https://pagestudio1.framer.website/"
                >
                  NoteStudio
                </Link>
                <span className="text-sm text-default-500 cursor-default">
                  The Jerome API
                </span>
                <NextLink
                  className="text-sm text-default-500 hover:text-foreground transition-colors w-fit"
                  href="/experiments"
                >
                  Playground
                </NextLink>
              </div>
            </div>

            {/* Company column */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-default-400">
                Company
              </p>
              <div className="flex flex-col gap-3">
                <NextLink
                  className="text-sm text-default-500 hover:text-foreground transition-colors w-fit"
                  href="/about"
                >
                  About
                </NextLink>
                <Link
                  isExternal
                  className="text-sm text-default-500 hover:text-foreground transition-colors w-fit"
                  href={siteConfig.links.discord}
                >
                  Community
                </Link>
                <Link
                  isExternal
                  className="text-sm text-default-500 hover:text-foreground transition-colors w-fit"
                  href={siteConfig.links.github}
                >
                  Contribute
                </Link>
                <NextLink
                  className="text-sm text-default-500 hover:text-foreground transition-colors w-fit"
                  href="/blog"
                >
                  Blog
                </NextLink>
              </div>
            </div>
          </div>
        </div>

        {/* Legal strip */}
        <div className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-default-500">
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <p className="text-xs text-default-500 italic">
              ...stay tuned for the future...
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
