"use client";

import { motion } from "framer-motion";
import { Camera, Instagram } from "lucide-react";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        {/* Logo y Descripción */}
        <div className="space-y-4 mb-8">
          <Link to="/" className="inline-flex items-center">
            <Camera className="h-8 w-8 text-purple-400" />
            <span className="ml-2 text-xl font-bold">Omgrapher</span>
          </Link>
          <p className="text-gray-400 max-w-md mx-auto">
            Capturando momentos únicos y creando recuerdos que durarán para
            siempre.
          </p>
        </div>

        {/* Instagram */}
        <div className="mb-8">
          <motion.a
            href="https://instagram.com/omgrapher"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-400 hover:text-purple-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Instagram className="h-6 w-6" />
            <span className="ml-2">@omgrapher</span>
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Omgrapher. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
