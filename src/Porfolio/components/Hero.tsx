"use client";

import { motion } from "framer-motion";
import { Link } from "react-router";
import type { JSX } from "react/jsx-runtime";

export const Hero = (): JSX.Element => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Showcase.jpg')",
        }}
      ></motion.div>

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
        >
          Capturing <span className="text-purple-400">Momentos</span>, Creando{" "}
          <span className="text-purple-400">Memorias</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-200 mb-8"
        >
          Fotografía de retrato que cuenta tu historia única
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/gallery"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Galería
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
