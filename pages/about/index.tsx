import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-12 py-16 md:py-20 pt-24">
        <div className="max-w-4xl text-center">
          <h1 className={title({ size: "lg", class: "mb-4" })}>About</h1>

        </div>

        <div className="w-full max-w-4xl">
              <p className="text-default-600 text-lg text-center leading-relaxed mb-4">
                At euiclidai, our mission is to democratize access to cutting-edge AI
                technologies. We believe in harnessing the power of artificial
                intelligence to create tools that empower individuals and
                communities worldwide.
              </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
