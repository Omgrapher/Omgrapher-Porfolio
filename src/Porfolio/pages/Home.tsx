"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight, Camera, Award, Users } from "lucide-react";
import type { JSX } from "react/jsx-runtime";
import { Image } from "../../components/common/Image";
import { getLocalImagePath } from "../../helpers/imageHelpers";

interface FeatureCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const Home = (): JSX.Element => {
  const features: FeatureCard[] = [
    {
      icon: Camera,
      title: "Fotografía Profesional",
      description:
        "Capturamos la esencia única de cada momento con técnicas profesionales",
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description:
        "Entregamos resultados de la más alta calidad que superan las expectativas",
    },
    {
      icon: Users,
      title: "Experiencia Personalizada",
      description:
        "Cada sesión es única y adaptada a tus necesidades específicas",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={getLocalImagePath("images/Showcase.jpg")}
            alt="Showcase de fotografía profesional"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              minHeight: "100vh",
              width: "100%",
              objectPosition: "center center",
            }}
            fallbackSrc={getLocalImagePath("fallback.svg")}
          />
        </motion.div>

        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Capturando <span className="text-purple-400">Momentos</span>,
            Creando <span className="text-purple-400">Memorias</span>
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
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/portfolio"
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Ver Galería
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
              >
                Contáctame
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir a Omgrapher?
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una experiencia fotográfica única que combina técnica
              profesional con creatividad artística.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature: FeatureCard, index: number) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="h-8 w-8 text-purple-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para tu Sesión?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contacta conmigo hoy y comencemos a crear recuerdos que durarán
              para siempre.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Reservar Sesión
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
