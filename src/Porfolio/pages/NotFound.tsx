"use client";

import { motion } from "framer-motion";
import { Link } from "react-router";
import { Home, ArrowLeft, Camera } from "lucide-react";
import type { JSX } from "react/jsx-runtime";

export const NotFound = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-purple-900 pt-16"
    >
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Camera className="h-24 w-24 text-purple-400 mx-auto mb-4" />
          <h1 className="text-9xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Página No Encontrada
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
            Lo siento, la página que buscas no existe o ha sido movida a otra
            ubicación.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Home className="mr-2 h-4 w-4" />
              Ir al Inicio
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver Atrás
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <p className="text-gray-400 mb-4">
            ¿Necesitas ayuda? Explora estas secciones:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/gallery"
              className="text-purple-300 hover:text-purple-200 transition-colors"
            >
              Galería
            </Link>
            <Link
              to="/about"
              className="text-purple-300 hover:text-purple-200 transition-colors"
            >
              Sobre Mí
            </Link>
            <Link
              to="/contact"
              className="text-purple-300 hover:text-purple-200 transition-colors"
            >
              Contacto
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
