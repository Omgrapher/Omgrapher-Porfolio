"use client";

import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Share2, Download, Heart } from "lucide-react";
import type { ImageType } from "../types/index";
import type { JSX } from "react/jsx-runtime";

export const ImageDetail = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [image, setImage] = useState<ImageType | null>(null);
  const [relatedImages, setRelatedImages] = useState<ImageType[]>([]);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  // Sample gallery images - in a real app, these would come from a CMS or API
  const images: ImageType[] = [
    {
      id: 1,
      src: "/placeholder.svg?height=800&width=600",
      alt: "Portrait 1",
      category: "Studio",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=800&width=600",
      alt: "Portrait 2",
      category: "Outdoor",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=800&width=600",
      alt: "Portrait 3",
      category: "Fashion",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=800&width=600",
      alt: "Portrait 4",
      category: "Studio",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=800&width=600",
      alt: "Portrait 5",
      category: "Outdoor",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=800&width=600",
      alt: "Portrait 6",
      category: "Fashion",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=800&width=600",
      alt: "Portrait 7",
      category: "Studio",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=800&width=600",
      alt: "Portrait 8",
      category: "Outdoor",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=800&width=600",
      alt: "Portrait 9",
      category: "Fashion",
    },
  ];

  useEffect(() => {
    if (id) {
      const foundImage = images.find(
        (img: ImageType) => img.id === Number.parseInt(id)
      );
      if (foundImage) {
        setImage(foundImage);
        // Get related images from the same category
        const related = images
          .filter(
            (img: ImageType) =>
              img.category === foundImage.category && img.id !== foundImage.id
          )
          .slice(0, 4);
        setRelatedImages(related);
      }
    }
  }, [id]);

  const handlePrevious = (): void => {
    if (image) {
      const currentIndex = images.findIndex(
        (img: ImageType) => img.id === image.id
      );
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      navigate(`/gallery/${images[prevIndex].id}`);
    }
  };

  const handleNext = (): void => {
    if (image) {
      const currentIndex = images.findIndex(
        (img: ImageType) => img.id === image.id
      );
      const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      navigate(`/gallery/${images[nextIndex].id}`);
    }
  };

  const handleShare = (): void => {
    if (navigator.share) {
      navigator.share({
        title: image?.alt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleDownload = (): void => {
    if (image) {
      const link = document.createElement("a");
      link.href = image.src;
      link.download = `${image.alt}.jpg`;
      link.click();
    }
  };

  if (!image) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Imagen no encontrada
          </h2>
          <Link to="/gallery" className="text-purple-600 hover:text-purple-700">
            Volver a la galería
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16 min-h-screen bg-black"
    >
      {/* Header */}
      <div className="relative z-10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/gallery"
                className="inline-flex items-center text-white hover:text-purple-300 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Volver a la galería
              </Link>
            </motion.div>

            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full transition-colors ${
                  isLiked
                    ? "text-red-500 bg-red-500/20"
                    : "text-white hover:text-red-500"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
              </motion.button>
              <motion.button
                onClick={handleShare}
                className="p-2 rounded-full text-white hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Share2 className="h-5 w-5" />
              </motion.button>
              <motion.button
                onClick={handleDownload}
                className="p-2 rounded-full text-white hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Download className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative flex items-center justify-center min-h-[80vh] px-4">
        <motion.button
          onClick={handlePrevious}
          className="absolute left-4 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowLeft className="h-6 w-6" />
        </motion.button>

        <motion.div
          className="max-w-5xl max-h-[80vh] overflow-hidden rounded-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 15 }}
        >
          <img
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className="max-h-[80vh] max-w-full object-contain"
            crossOrigin="anonymous"
          />
        </motion.div>

        <motion.button
          onClick={handleNext}
          className="absolute right-4 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowRight className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Image Info */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {image.alt}
            </h1>
            <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              {image.category}
            </span>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Esta fotografía forma parte de mi colección de retratos
              profesionales, capturando la esencia única del sujeto con técnicas
              avanzadas de iluminación y composición.
            </p>
          </motion.div>

          {/* Related Images */}
          {relatedImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Imágenes Relacionadas
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedImages.map((relatedImage: ImageType) => (
                  <motion.div
                    key={relatedImage.id}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link to={`/gallery/${relatedImage.id}`}>
                      <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={relatedImage.src || "/placeholder.svg"}
                          alt={relatedImage.alt}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
