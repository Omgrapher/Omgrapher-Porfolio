"use client";

import { useEffect, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ImageModalProps } from "../types";

export const ImageModal = ({ image, onClose }: ImageModalProps) => {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";

    // Handle escape key press
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // Prevent click events from bubbling up to the overlay
  const handleContentClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
      onClick={onClose}
    >
      <motion.button
        className="absolute top-4 right-4 text-white hover:text-purple-300 focus:outline-none"
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X className="h-8 w-8" />
      </motion.button>

      <motion.div
        className="relative max-w-5xl max-h-[90vh] overflow-hidden"
        onClick={handleContentClick}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 15 }}
      >
        <img
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          className="max-h-[90vh] max-w-full object-contain"
        />

        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-medium">{image.alt}</h3>
          <p className="text-sm text-gray-300">{image.category}</p>
        </motion.div>

        <motion.button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>

        <motion.button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
