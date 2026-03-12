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
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16 relative z-10">
        {children}
      </main>
      <footer className="w-full border-t border-white/[0.06]">
        <div className="w-full px-6 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left — Social links */}
            <div className="flex items-center gap-4">
              <Link
                isExternal
                className="flex items-center gap-1.5 text-default-500 hover:text-foreground transition-colors"
                href={siteConfig.links.github}
                title="GitHub"
              >
                <GithubIcon size={16} />
                <span className="text-sm">GitHub</span>
              </Link>
              <Link
                isExternal
                className="flex items-center gap-1.5 text-default-500 hover:text-foreground transition-colors"
                href={siteConfig.links.discord}
                title="Discord"
              >
                <DiscordIcon size={16} />
                <span className="text-sm">Discord</span>
              </Link>
              <Link
                isExternal
                className="flex items-center gap-1.5 text-default-500 hover:text-foreground transition-colors"
                href={siteConfig.links.huggingface}
                title="HuggingFace"
              >
                <img src="/hf-logo.svg" alt="HuggingFace" className="w-4 h-4" />
                <span className="text-sm">HuggingFace</span>
              </Link>
            </div>

            {/* Center — Tagline */}
            <p className="text-default-400 text-xs italic">
              ...stay tuned for the future...
            </p>

            {/* Right — Copyright */}
            <p className="text-default-500 text-xs">
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
