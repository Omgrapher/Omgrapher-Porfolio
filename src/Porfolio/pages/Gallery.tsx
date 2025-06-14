"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Image } from "../../components/common/Image";
import { ImageModal } from "../components/ImageModal";

interface ImageType {
  id: number;
  src: string;
  alt: string;
  aspectRatio: "vertical" | "horizontal" | "square";
}

interface SelectedImage {
  src: string;
  alt: string;
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );

  // Generar el array de imágenes usando las Cards
  const galleryImages: ImageType[] = Array.from({ length: 51 }, (_, i) => {
    const imageNumber = i + 1;
    return {
      id: imageNumber,
      src: `/images/Card${imageNumber}.webp`,
      alt: `Fotografía ${imageNumber}`,
      aspectRatio: "vertical",
    };
  });

  const handleImageClick = (image: ImageType) => {
    setSelectedImage({
      src: image.src,
      alt: image.alt,
    });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            variants={item}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            isOpen={!!selectedImage}
            onClose={handleCloseModal}
            imageSrc={selectedImage.src}
            imageAlt={selectedImage.alt}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
