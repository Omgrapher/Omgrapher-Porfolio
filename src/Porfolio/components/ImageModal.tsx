"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "../../components/common/Image";
import { getLocalImagePath } from "../../helpers/imageHelpers";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-7xl max-h-[90vh] mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-contain"
              fallbackSrc={getLocalImagePath("fallback.svg")}
              style={{
                maxHeight: "90vh",
                width: "auto",
                margin: "0 auto",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
