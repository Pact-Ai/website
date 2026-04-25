import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";

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
  // {
  //   title: "Project Jerome API",
  //   description: "Developing robust API endpoints for multi-lingual translation services with a focus on African languages.",
  //   image: "/jerome.jpg",
  //   tags: ["API", "Language", "Infrastructure"],
  //   status: "Private Beta",
  //   link: "#"
  // }
];

export default function ExperimentsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-12">
        <div className="max-w-4xl text-center mb-12">
          <h1 className={title({ size: "lg" })}>The Mesh</h1>
          <p className={subtitle({ class: "mt-4 max-w-2xl mx-auto" })}>
            A machine learning research space where we push the boundaries of
            NLP, Computer Vision, and AI infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
          {experiments.map((exp, index) => (
            <Card
              key={index}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 group"
            >
              <CardHeader className="p-0 overflow-hidden aspect-video">
                <Image
                  alt={exp.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  src={exp.image}
                  width="100%"
                />
              </CardHeader>
              <CardBody className="p-5 flex flex-col gap-3">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <Chip
                    className="px-3 bg-white/10 text-default-400"
                    size="sm"
                    variant="flat"
                  >
                    {exp.status}
                  </Chip>
                </div>
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
              <Divider className="bg-white/10" />
              <CardFooter className="p-4">
                <Button
                  as={NextLink}
                  className="w-full font-medium bg-primary text-black hover:opacity-90 transition-opacity"
                  href={exp.link}
                  radius="full"
                  rel={
                    exp.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  size="sm"
                  target={exp.link.startsWith("http") ? "_blank" : undefined}
                >
                  {exp.status === "Published"
                    ? "View Publication"
                    : "Learn More"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
