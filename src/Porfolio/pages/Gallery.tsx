"use client";

import { Link } from "react-router";
import { motion, type Variants } from "framer-motion";
import type { ImageType } from "../types/index";

export const Gallery = () => {
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
    {
      id: 10,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Portrait 10",
      category: "Wedding",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Portrait 11",
      category: "Wedding",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Portrait 12",
      category: "Corporate",
    },
  ];

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Portfolio Gallery
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Explora mi colección de fotografías de retrato, cada una contando
            una historia única y capturando momentos especiales.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Images Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {images.map((image: ImageType) => (
              <motion.div key={image.id} variants={item} layout>
                <Link to={`/gallery/${image.id}`}>
                  <motion.div
                    className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-gray-200"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="aspect-w-3 aspect-h-4">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-purple-300 text-sm font-medium">
                        {image.category}
                      </span>
                      <h3 className="text-white text-lg font-semibold">
                        {image.alt}
                      </h3>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
