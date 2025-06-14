import type React from "react";

import { motion, type Variants } from "framer-motion";
import {
  Camera,
  Award,
  Users,
  Heart,
  MapPin,
  Calendar,
  Star,
} from "lucide-react";
import type { JSX } from "react/jsx-runtime";
import { Image } from "../../components/common/Image";
import { getLocalImagePath } from "../../helpers/imageHelpers";

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

export const About = (): JSX.Element => {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features: FeatureItem[] = [
    {
      icon: Camera,
      title: "Visión Creativa",
      description: "Perspectiva única que captura la esencia de cada sujeto",
    },
    {
      icon: Award,
      title: "Premiado",
      description: "Excelencia reconocida en fotografía de retratos",
    },
    {
      icon: Users,
      title: "Enfocado en el Cliente",
      description: "Experiencia personalizada adaptada a tus necesidades",
    },
    {
      icon: Heart,
      title: "Apasionado",
      description: "Dedicado a crear retratos hermosos y significativos",
    },
  ];

  const stats: Stat[] = [
    { number: "500+", label: "Sesiones Completadas" },
    { number: "10+", label: "Años de Experiencia" },
    { number: "100%", label: "Clientes Satisfechos" },
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
            Sobre Mí
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Conoce la historia detrás de la lente y mi pasión por capturar
            momentos únicos.
          </motion.p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-x-12">
            {/* Image column */}
            <motion.div
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <motion.div
                  className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={getLocalImagePath("images/Aboutme.webp")}
                    alt="Fotógrafo profesional"
                    className="w-full h-full object-cover"
                    fallbackSrc={getLocalImagePath("fallback.svg")}
                  />
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-100 rounded-lg -z-10"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                ></motion.div>
                <motion.div
                  className="absolute -top-6 -left-6 w-48 h-48 bg-purple-200 rounded-lg -z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                ></motion.div>
              </div>
            </motion.div>

            {/* Content column */}
            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mi Historia
              </h2>
              <div className="w-24 h-1 bg-purple-600 mb-6"></div>

              <motion.p
                className="text-lg text-gray-700 mb-6"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                ¡Hola! Soy Marlon Ovalle, un apasionado fotógrafo de retratos
                con más de 10 años de experiencia capturando la esencia de las
                personas a través de mi lente. Mi viaje en la fotografía comenzó
                como un hobby durante el básico y se convirtió en mi pasión de
                vida.
              </motion.p>

              <motion.p
                className="text-lg text-gray-700 mb-6"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Mi enfoque de la fotografía es profundamente personal. Creo que
                cada retrato debe contar una historia y revelar algo auténtico
                sobre el sujeto. Ya sea un retrato profesional, un retrato
                familiar o una sesión de concepto creativo, me esfuerzo por
                crear imágenes que resuenen con emoción y belleza atemporal.
              </motion.p>

              <motion.p
                className="text-lg text-gray-700 mb-8"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                He tenido el privilegio de trabajar con cientos de clientes,
                desde familias hasta ejecutivos y artistas. Cada sesión es una
                nueva aventura y una oportunidad de crear algo único y
                memorable.
              </motion.p>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                  <span>Guatemala</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                  <span>Desde 2013</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat: Stat, index: number) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-purple-600 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegirme?
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature: FeatureItem, index: number) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="flex items-start p-6 bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
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
