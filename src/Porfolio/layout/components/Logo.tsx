"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export const Logo = () => {
  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a
        href="#"
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Camera className="h-8 w-8 text-purple-400" />
        <span className="ml-2 text-xl font-bold text-white">Omgrapher</span>
      </motion.a>
    </motion.div>
  );
};
