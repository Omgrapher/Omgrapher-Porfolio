import { motion } from "framer-motion";
import type { GalleryProps, ImageType } from "../types";
import type { JSX } from "react/jsx-runtime";

export function Gallery({ setSelectedImage }: GalleryProps): JSX.Element {
  // Sample gallery images - in a real app, these would come from a CMS or API
  const galleryImages: ImageType[] = [
    {
      id: 1,
      src: "/images/gallery/image1.jpg",
      alt: "Fotografía de boda",
      aspectRatio: "vertical",
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

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
