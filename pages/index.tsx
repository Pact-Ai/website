import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import RotatingText from "@/components/RotatingText";
import LightRays from "@/components/LightRays";

export default function IndexPage() {

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

          <p className="mt-6 text-default-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Pioneering NLP, Computer Vision & low-resource language solutions —
            from research to production.
          </p>
        </div>
      </section>

      {/* Aesthetic LightRays background */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none mix-blend-screen opacity-60">
        <LightRays
          className="custom-rays"
          distortion={0}
          fadeDistance={1}
          followMouse={true}
          lightSpread={0.5}
          mouseInfluence={0.1}
          noiseAmount={0}
          pulsating={false}
          rayLength={3}
          raysColor="#ffffff"
          raysOrigin="top-center"
          raysSpeed={1}
          saturation={1}
        />
      </div>
    </DefaultLayout>
  );
}
