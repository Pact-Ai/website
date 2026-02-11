import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { GithubIcon, DiscordIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen overflow-x-hidden">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16 relative z-10">
        {children}
      </main>
      <footer className="w-full border-t border-default-200">
        <div className="w-full px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left Section */}
            <div className="flex items-center gap-6 flex-1 md:justify-start">
              {/* Logo placeholder */}
              <div className="w-24 h-10 bg-default-100 rounded flex items-center justify-center text-default-400 text-xs">
                Logo
              </div>

              {/* Social Icons Column */}
              <div className="flex flex-col gap-2">
                <Link
                  isExternal
                  className="flex items-center gap-2 text-default-500 hover:text-default-700 transition-colors"
                  href={siteConfig.links.github}
                  title="GitHub"
                >
                  <GithubIcon size={18} />
                  <span className="text-sm">GitHub</span>
                </Link>
                <Link
                  isExternal
                  className="flex items-center gap-2 text-default-500 hover:text-default-700 transition-colors"
                  href={siteConfig.links.discord}
                  title="Discord"
                >
                  <DiscordIcon size={18} />
                  <span className="text-sm">Discord</span>
                </Link>
                <Link
                  isExternal
                  className="flex items-center gap-2 text-default-500 hover:text-default-700 transition-colors"
                  href={siteConfig.links.huggingface}
                  title="HuggingFace"
                >
                  <img src="/hf-logo.svg" alt="HuggingFace" className="w-[18px] h-[18px]" />
                  <span className="text-sm">HuggingFace</span>
                </Link>
              </div>
            </div>

            {/* Middle Section */}
            <div className="flex items-center md:flex-shrink-0">
              <p className="text-default-500 text-xs italic">
                ...stay tuned for the future...
              </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-end gap-2 flex-1 md:justify-end">
              {/* Images Row */}
              <div className="flex items-center gap-2">
                {/* <div className="w-6 h-6 bg-default-100 rounded-full flex items-center justify-center text-default-400" style={{ fontSize: '6px' }}>
                  Saturn
                </div> */}
                🪐
                <div className="w-6 h-6 bg-default-100 rounded flex items-center justify-center text-default-400" style={{ fontSize: '6px' }}>
                  Africa
                </div>
              </div>

              {/* Copyright */}
              <p className="text-default-400 text-xs">
                © {new Date().getFullYear()} {siteConfig.name}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
