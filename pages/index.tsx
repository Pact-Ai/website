import { Button } from "@heroui/button";
import NextLink from "next/link";
import { useEffect, useState } from "react";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import RotatingText from "@/components/RotatingText";

export default function IndexPage() {
  const [showArrow, setShowArrow] = useState(true);

  const scrollToContent = () => {
    document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");

      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        const scrolled = window.scrollY;

        setShowArrow(scrolled < heroBottom - 200);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <DefaultLayout>
      <section
        className="relative flex items-center justify-center overflow-hidden"
        id="hero"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <div className="max-w-4xl text-center relative z-10 px-4">
          <h1 className={title({ size: "lg", class: "mb-4" })}>
            Building AI Systems&#160;
          </h1>

          <h1
            className={title({
              size: "lg",
              class:
                "mb-6 inline-flex items-center justify-center gap-2 flex-nowrap",
            })}
          >
            <span>That&#160;</span>
            <span className="inline-block w-[150px] text-left">
              <RotatingText
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                initial={{ y: "100%" }}
                mainClassName="text-primary inline-block"
                rotationInterval={3500}
                splitLevelClassName="overflow-hidden"
                staggerDuration={0.025}
                staggerFrom="last"
                texts={["Help", "Matter", "Scale"]}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </span>
          </h1>

          <p className="mt-6 text-default-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Pioneering NLP, Computer Vision & low-resource language solutions —
            from research to production.
          </p>
        </div>

        {showArrow && (
          <button
            aria-label="Scroll to content"
            className="absolute bottom-12 animate-bounce cursor-pointer border-none bg-transparent transition-opacity duration-300 z-10"
            onClick={scrollToContent}
          >
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </section>

      {/* Gradient separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <section
        className="relative flex flex-col items-center justify-center gap-8 z-10"
        id="content"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <div className="max-w-4xl text-center">
          <p className={subtitle({ class: "mx-auto max-w-2xl" })}>
            Specializing in Natural Language Processing, Computer Vision, and
            breakthrough solutions for low-resource languages.
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <Button
            as={NextLink}
            className="hover:border-primary transition-colors"
            href="/about"
            size="lg"
            variant="bordered"
          >
            Learn More
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
