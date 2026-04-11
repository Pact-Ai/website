import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function BlogPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ color: "primary" })}>Blog</h1>
          <br />
          <h2 className="text-2xl mt-4 font-semibold text-default-600">
            Coming Soon
          </h2>
          <p className="mt-4 text-default-500">
            We are working on some interesting articles and updates. Stay tuned!
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
