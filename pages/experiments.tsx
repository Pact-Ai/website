import { Card, CardHeader, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { LightbulbFilamentIcon } from "@phosphor-icons/react";

import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";

const experiments = [
  {
    title: "T5 Igbo-English",
    description:
      "Neural Machine Translation for low-resource languages, focusing on Igbo to English translation using T5 architecture.",
    image: "/t5_igbo.png",
    tags: ["NLP", "NMT", "Low-Resource"],
    status: "Published",
    link: "https://huggingface.co/Glim/t5-small_igbo-en",
  },

  // {
  //   title: "Vision Transformer Exploration",
  //   description: "Experimental research into efficient ViT architectures for edge device deployment and real-time inference.",
  //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
  //   tags: ["Computer Vision", "ViT", "Edge AI"],
  //   status: "Ongoing",
  //   link: "#"
  // },
];

export default function ExperimentsPage() {
  return (
    <>
      <div className="py-48 justify-ce sm:px-32 px-12 w-screen pt-48 bg-gradient-to-br from-background/70 to-gray-900/70 -top-30 flex flex-col border-b border-b-white/10">
        <h1 className={title({ size: "lg" })}>Our Experiments. Our Builds.</h1>
        <p className={subtitle({ class: "mt-4 max-w-2xl" })}>
          A machine learning research space where we push the boundaries of NLP,
          Computer Vision, and AI infrastructure.
        </p>
        <div className="mt-8">
          <Button
            className="bg-foreground font-medium p-6 text-background "
            size="lg"
          >
            <LightbulbFilamentIcon />
            Request Spotlight
          </Button>
        </div>
      </div>
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
            {experiments.map((exp, index) => (
              <Card
                key={index}
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 group"
              >
                <CardHeader className="px-6 flex">
                  <div className="flex justify-between w-full items-start gap-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardBody className="p-5 flex flex-col gap-3">
                  <p className="text-default-500 text-sm line-clamp-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tags.map((tag) => (
                      <Chip
                        key={tag}
                        className="px-2 border-white/10 text-default-400"
                        size="sm"
                        variant="bordered"
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}
