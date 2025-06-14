"use client";

import { motion } from "framer-motion";
import { Camera, Award, Users, Clock, Calendar } from "lucide-react";
import type { JSX } from "react/jsx-runtime";

interface ServiceCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  price: string;
  features: string[];
}

export const Services = (): JSX.Element => {
  const services: ServiceCard[] = [
    {
      icon: Camera,
      title: "Sesión Básica",
      description: "Perfecta para retratos individuales o en pareja",
      price: "Desde $150",
      features: [
        "1 hora de sesión",
        "10 fotos editadas",
        "Entrega digital",
        "Sesión en estudio o exterior",
      ],
    },
    {
      icon: Users,
      title: "Sesión Familiar",
      description: "Captura momentos especiales con tu familia",
      price: "Desde $250",
      features: [
        "2 horas de sesión",
        "20 fotos editadas",
        "Entrega digital",
        "Sesión en estudio o exterior",
        "Cambios de vestuario",
      ],
    },
    {
      icon: Award,
      title: "Sesión Premium",
      description: "La experiencia fotográfica más completa",
      price: "Desde $350",
      features: [
        "3 horas de sesión",
        "30 fotos editadas",
        "Entrega digital y álbum físico",
        "Sesión en estudio o exterior",
        "Cambios de vestuario ilimitados",
        "Maquillaje profesional incluido",
      ],
    },
  ];

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
            Servicios Fotográficos
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Descubre nuestros paquetes de sesiones fotográficas diseñados para
            capturar tus momentos más especiales.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <p className="text-2xl font-bold text-purple-600 mb-6">
                      {service.price}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-gray-600"
                        >
                          <Calendar className="h-5 w-5 text-purple-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                    >
                      Reservar Ahora
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
