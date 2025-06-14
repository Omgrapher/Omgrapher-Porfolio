"use client";

import type React from "react";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";
import type { JSX } from "react/jsx-runtime";
import { Image } from "../../components/common/Image";
import { getLocalImagePath } from "../../helpers/imageHelpers";
import { ImageModal } from "../components/ImageModal";

interface ImageType {
  id: number;
  src: string;
  alt: string;
}

export const Gallery = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  // Generar el array de imágenes usando las Cards
  const generateGalleryImages = (): ImageType[] => {
    const images: ImageType[] = [];

    for (let i = 1; i <= 51; i++) {
      const imageNumber = i.toString();
      images.push({
        id: i,
        src: getLocalImagePath(`images/Card${imageNumber}.webp`),
        alt: `Fotografía ${imageNumber}`,
      });
    }

    return images;
  };

  const images = generateGalleryImages();

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

  const handleImageClick = (image: ImageType) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Images Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {images.map((image: ImageType) => (
            <motion.div
              key={image.id}
              variants={item}
              layout
              className="w-full"
            >
              <div
                onClick={() => handleImageClick(image)}
                className="cursor-pointer"
              >
                <motion.div
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "100%" }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      fallbackSrc={getLocalImagePath("fallback.svg")}
                      loading="lazy"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedImage && (
          <ImageModal
            isOpen={!!selectedImage}
            onClose={handleCloseModal}
            imageSrc={selectedImage.src}
            imageAlt={selectedImage.alt}
          />
        )}
      </div>
    </section>
  );
};
