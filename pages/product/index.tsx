import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { useState } from "react";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";

const products = [
  {
    id: 11,
    name: "PageStudio",
    shortDesc: "AI platform for education",
    fullDesc:
      "Knowledge made simple.\n\nStudy, Understand, and create a tailored experience without breaking the bank. " +
      "Currently in development with a waitlist for early access.",
    tags: [],
    // link: `${siteConfig.links.github}/waitlist-page`,
    link: `https://pagestudio1.framer.website/`,
    image: "/pagestudio_pic.jpg",
    photoCredit: "Photo by Alexey Holm",
  },

  {
    id: 12,
    name: "The Jerome API",
    shortDesc: "Language translation API",
    fullDesc:
      "Jerome is a Language translation API. "+ 
      "It is an affordable translations service for developers and businesses. " +  
      "It is a step towards addressing low resource languages in the AI space. " +
      "Currently in development.",
    tags: [],
    // link: `${siteConfig.links.github}/waitlist-page`,
    link: ``,
    image: "/jerome.jpg",
    photoCredit: "",
  },

  {
    id: 13,
    name: "Placeholder to test",
    shortDesc: "API",
    fullDesc:
      "",
    tags: [],
    // link: `${siteConfig.links.github}/waitlist-page`,
    link: ``,
    image: "/",
    photoCredit: "Photo by FreePik",
  }
];

const experiments = [
    {
    id: 1,
    name: "T5 Igbo-English Translation",
    shortDesc: "NLP for low-resource languages",
    fullDesc:
      "A fine-tuned T5-small model with 60.5M parameters,\
       specialized in Igbo-to-English translation. \
       Addressing the critical gap in AI support for low-resource African languages.",
    tags: [],
    link: `${siteConfig.links.huggingface}/t5-small_igbo-en`,
    image: "/t5_igbo.png",
    photoCredit: "",
  }
];

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | typeof experiments[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: typeof products[0] | typeof experiments[0]) => {
    setSelectedProduct(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <DefaultLayout>
      {/* Backdrop blur overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/30 z-40" />
      )}

      <section className="flex flex-col py-8 md:py-16 lg:py-20 pt-16 md:pt-24 max-w-6xl mx-auto px-4">
        <div className="mb-12 md:mb-20 max-w-3xl">
          <h1 className={title({ size: "lg", class: "mb-4 md:mb-8" })}>Products</h1>
          <br /><br />
          <p className="text-base md:text-xl text-default-600 leading-relaxed">
            Explore our AI-powered tools and models — from breakthrough
            translation systems for low-resource languages to experimental
            research advancing accessible AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => openModal(product)}
              className="group relative overflow-hidden rounded-lg cursor-pointer border border-gray-200 p-6 transition-all hover:border-blue-500 hover:shadow-lg text-left w-full"
              style={{ backfaceVisibility: "hidden" }}
              type="button"
            >
              {/* Card background with same image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url('${product.image}')`,
                }}
              />
              
              {/* Content overlay */}
              <div className="relative text-white">
                {/* Header section with same card styling */}
                <div className="p-6 md:p-8">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {product.tags.map((tag) => (
                      <Chip
                        key={tag}
                        className="bg-white/20 backdrop-blur-sm text-white border-white/30"
                        size="sm"
                        variant="bordered"
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h2>
                  <p className="text-base md:text-lg text-white/90 mb-6">{product.shortDesc}</p>
                </div>

                {/* Scrollable content area */}
                <div className="px-6 md:px-8 pb-6 max-h-[80vh] overflow-y-auto">
                  <div className="text-sm md:text-base text-white/90 leading-relaxed mb-4">
                    {product.fullDesc.split('\n\n').map((paragraph, index) => (
                      <p key={index} className={index > 0 ? 'mt-4' : ''}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {product.photoCredit && (
                    <p className="text-xs text-white/60 italic">
                      {product.photoCredit}
                    </p>
                  )}
                </div>

                {/* Footer with buttons */}
                <div className="p-6 md:p-8 pt-4 flex gap-3 justify-end border-t border-white/10">
                  <Button 
                    color="default" 
                    variant="light" 
                    onPress={closeModal}
                    className="text-white hover:bg-white/10"
                  >
                    Close
                  </Button>
                  {product.link && (
                    <Button 
                      as={Link}
                      href={product.link}
                      isExternal
                      className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                    >
                      View Project
                    </Button>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 md:mt-32 mb-12 md:mb-20 max-w-3xl">
          <h2 className={title({ size: "lg", class: "mb-4 md:mb-8" })}>Experiments</h2>
          <br /><br />
          <p className="text-base md:text-xl text-default-600 leading-relaxed">
            Some experiments and projects done in the open - for developers to use 
            and build on top of. 😌
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment) => (
            <button
              key={experiment.id}
              onClick={() => openModal(experiment)}
              className="group relative overflow-hidden rounded-lg cursor-pointer border border-gray-200 p-6 transition-all hover:border-blue-500 hover:shadow-lg text-left w-full"
              style={{ backfaceVisibility: "hidden" }}
              type="button"
            >
              {/* Card background with same image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url('${experiment.image}')`,
                }}
              />
              
              {/* Content overlay */}
              <div className="relative text-white">
                {/* Header section with same card styling */}
                <div className="p-6 md:p-8">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {experiment.tags.map((tag) => (
                      <Chip
                        key={tag}
                        className="bg-white/20 backdrop-blur-sm text-white border-white/30"
                        size="sm"
                        variant="bordered"
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">{experiment.name}</h2>
                  <p className="text-base md:text-lg text-white/90 mb-6">{experiment.shortDesc}</p>
                </div>

                {/* Scrollable content area */}
                <div className="px-6 md:px-8 pb-6 max-h-[80vh] overflow-y-auto">
                  <div className="text-sm md:text-base text-white/90 leading-relaxed mb-4">
                    {experiment.fullDesc.split('\n\n').map((paragraph, index) => (
                      <p key={index} className={index > 0 ? 'mt-4' : ''}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {experiment.photoCredit && (
                    <p className="text-xs text-white/60 italic">
                      {experiment.photoCredit}
                    </p>
                  )}
                </div>

                {/* Footer with buttons */}
                <div className="p-6 md:p-8 pt-4 flex gap-3 justify-end border-t border-white/10">
                  <Button 
                    color="default" 
                    variant="light" 
                    onPress={closeModal}
                    className="text-white hover:bg-white/10"
                  >
                    Close
                  </Button>
                  {experiment.link && (
                    <Button 
                      as={Link}
                      href={experiment.link}
                      isExternal
                      className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                    >
                      View Project
                    </Button>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Modal - Card-like expansion */}
        <Modal 
          isOpen={isModalOpen} 
          onClose={closeModal}
          size="3xl"
          classNames={{
            wrapper: "z-50 px-4",
            backdrop: "hidden",
            base: "bg-transparent shadow-none max-w-[95vw] sm:max-w-3xl",
          }}
          motionProps={{
            variants: {
              enter: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.4,
                  ease: [0.36, 0.66, 0.04, 1]
                }
              },
              exit: {
                scale: 0.95,
                opacity: 0,
                transition: {
                  duration: 0.3,
                  ease: [0.36, 0.66, 0.04, 1]
                }
              }
            }
          }}
        >
          <ModalContent className="bg-transparent shadow-none">
            {(onClose) => (
              <>
                {selectedProduct && (
                  <div className="relative rounded-lg overflow-hidden shadow-2xl animate-in">
                    {/* Card background with same image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url('${selectedProduct.image}')`,
                      }}
                    />
                    
                    {/* Content overlay */}
                    <div className="relative text-white">
                      {/* Header section with same card styling */}
                      <div className="p-6 md:p-8">
                        <div className="flex gap-2 mb-4 flex-wrap">
                          {selectedProduct.tags.map((tag) => (
                            <Chip
                              key={tag}
                              className="bg-white/20 backdrop-blur-sm text-white border-white/30"
                              size="sm"
                              variant="bordered"
                            >
                              {tag}
                            </Chip>
                          ))}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">{selectedProduct.name}</h2>
                        <p className="text-base md:text-lg text-white/90 mb-6">{selectedProduct.shortDesc}</p>
                      </div>

                      {/* Scrollable content area */}
                      <div className="px-6 md:px-8 pb-6 max-h-[80vh] overflow-y-auto">
                        <div className="text-sm md:text-base text-white/90 leading-relaxed mb-4">
                          {selectedProduct.fullDesc.split('\n\n').map((paragraph, index) => (
                            <p key={index} className={index > 0 ? 'mt-4' : ''}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        {selectedProduct.photoCredit && (
                          <p className="text-xs text-white/60 italic">
                            {selectedProduct.photoCredit}
                          </p>
                        )}
                      </div>

                      {/* Footer with buttons */}
                      <div className="p-6 md:p-8 pt-4 flex gap-3 justify-end border-t border-white/10">
                        <Button 
                          color="default" 
                          variant="light" 
                          onPress={onClose}
                          className="text-white hover:bg-white/10"
                        >
                          Close
                        </Button>
                        {selectedProduct.link && (
                          <Button 
                            as={Link}
                            href={selectedProduct.link}
                            isExternal
                            className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                          >
                            View Project
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </ModalContent>
        </Modal>
      </section>
    </DefaultLayout>
  );
}
