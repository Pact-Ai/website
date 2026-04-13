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
        style={{
          height: "calc(100vh - 64px)",
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
        }}
      >
        {/* Ultra-minimalist abstract accent at the bottom of the hero */}
        <div
          className="absolute inset-0 bg-no-repeat opacity-70"
          style={{
            backgroundImage: "url('/hero-accent-minimal.png')",
            backgroundSize: "100% auto",
            backgroundPosition: "center bottom 0px" // Change this '0px' to move the lines up or down
          }}
        />
        <div className="max-w-4xl text-center relative z-10 px-4">
          <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight mb-4 text-foreground">
            Building AI Systems&#160;
          </h1>

          <h1
            className="text-4xl lg:text-6xl font-semibold tracking-tight mb-6 inline-flex items-center justify-center gap-2 flex-nowrap text-foreground"
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
        </div>
      </section>
    </DefaultLayout>
  );
}
