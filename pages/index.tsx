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
        id="hero"
        className="relative flex items-center justify-center"
        style={{ height: 'calc(100vh - 64px)' }}
      >
        <div className="max-w-4xl text-center relative z-10">
          <h1 className={title({ size: "lg", class: "mb-4" })}>
            Building AI Systems&#160;
          </h1>
      
          <h1 className={title({ size: "lg", class: "mb-6 inline-flex items-center justify-center gap-2 flex-nowrap" })}>
            <span>That&#160;</span>
            <span className="inline-block w-[150px] text-left">
              <RotatingText
                texts={['Help', 'Matters', 'Lorem']}
                mainClassName="text-primary inline-block"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3500}
              />
            </span>
          </h1>
        </div>

        {showArrow && (
          <button
            className="absolute bottom-12 animate-bounce cursor-pointer border-none bg-transparent transition-opacity duration-300 z-10"
            onClick={scrollToContent}
            aria-label="Scroll to content"
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

      <section
        className="relative flex flex-col items-center justify-center gap-8 z-10"
        id="content"
        style={{ height: 'calc(100vh - 64px)' }}
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
            color="primary"
            href="/product"
            size="lg"
            variant="solid"
          >
            Explore Products
          </Button>
          <Button 
            as={NextLink} 
            href="/about" 
            size="lg" 
            variant="bordered"
            className="hover:border-primary transition-colors"
          >
            Learn More
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
