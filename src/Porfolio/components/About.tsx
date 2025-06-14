import { motion, type Variants } from "framer-motion";
import { Camera, Award, Users, Heart } from "lucide-react";
import { getLocalImagePath } from "../../helpers/imageHelpers";

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const About = () => {
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

  return (
    <section id="about" className="py-20 bg-gray-50">
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
                <img
                  src={getLocalImagePath("Aboutme.webp")}
                  alt="Fotógrafo profesional"
                  className="w-full h-full object-cover"
                  loading="lazy"
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
              Sobre Mí
            </h2>
            <div className="w-24 h-1 bg-purple-600 mb-6"></div>

            <motion.p
              className="text-lg text-gray-700 mb-6"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              ¡Hola! Soy [Tu Nombre], un apasionado fotógrafo de retratos con
              más de 10 años de experiencia capturando la esencia de las
              personas a través de mi lente.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 mb-8"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Mi enfoque de la fotografía es profundamente personal. Creo que
              cada retrato debe contar una historia y revelar algo auténtico
              sobre el sujeto. Ya sea un retrato profesional, un retrato
              familiar o una sesión de concepto creativo, me esfuerzo por crear
              imágenes que resuenen con emoción y belleza atemporal.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature: FeatureItem, index: number) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="flex items-start"
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
