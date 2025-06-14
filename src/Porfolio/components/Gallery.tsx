"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import type { GalleryProps, ImageType } from "../types";
import type { JSX } from "react/jsx-runtime";

export const Gallery = ({ setSelectedImage }: GalleryProps): JSX.Element => {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  // Sample gallery images - in a real app, these would come from a CMS or API
  const images: ImageType[] = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Portrait 1",
      category: "Studio",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Portrait 2",
      category: "Outdoor",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Portrait 3",
      category: "Fashion",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Portrait 4",
      category: "Studio",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Portrait 5",
      category: "Outdoor",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Portrait 6",
      category: "Fashion",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Portrait 7",
      category: "Studio",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Portrait 8",
      category: "Outdoor",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Portrait 9",
      category: "Fashion",
    },
  ];

  useEffect(() => {
    // Intersection Observer para animación de aparición al hacer scroll
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            const imageId = Number.parseInt(
              entry.target.getAttribute("data-id") || "0"
            );
            setVisibleImages((prev: number[]) => [...prev, imageId]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".image-item");
    elements.forEach((el: Element) => observer.observe(el));

    return () => elements.forEach((el: Element) => observer.unobserve(el));
  }, []);

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

  const handleImageClick = (image: ImageType): void => {
    setSelectedImage(image);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portfolio Gallery
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Una colección de mis mejores trabajos de fotografía de retrato,
            capturando la esencia y personalidad de cada sujeto.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {images.map((image: ImageType) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-2 image-item"
              onClick={() => handleImageClick(image)}
              data-id={image.id}
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-purple-300 text-sm font-medium">
                  {image.category}
                </span>
                <h3 className="text-white text-xl font-semibold">
                  {image.alt}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
