import { motion, type Variants } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Camera } from "lucide-react";
import type React from "react";
import type { JSX } from "react/jsx-runtime";

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string | JSX.Element;
  href?: string;
}

interface ServicePackage {
  name: string;
  price: string;
  duration: string;
  features: string[];
}

export const Contact = (): JSX.Element => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@artistry.com",
      href: "mailto:contact@artistry.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+1 (234) 567-890",
      href: "tel:+1234567890",
    },
    {
      icon: MapPin,
      title: "Ubicación del Estudio",
      content: (
        <>
          123 Photography Lane
          <br />
          Creative District
          <br />
          City, State 12345
        </>
      ),
    },
    {
      icon: Clock,
      title: "Horarios",
      content: (
        <>
          Lun - Vie: 9:00 AM - 6:00 PM
          <br />
          Sáb: 10:00 AM - 4:00 PM
          <br />
          Dom: Por cita previa
        </>
      ),
    },
  ];

  const packages: ServicePackage[] = [
    {
      name: "Sesión Básica",
      price: "Q299",
      duration: "1 hora",
      features: [
        "20 fotos editadas",
        "Galería online",
        "Resolución alta",
        "Soporte por email",
      ],
    },
    {
      name: "Sesión Premium",
      price: "Q499",
      duration: "2 horas",
      features: [
        "50 fotos editadas",
        "Galería online",
        "Resolución alta",
        "USB con todas las fotos",
        "Impresiones 8x10",
      ],
    },
    {
      name: "Sesión Completa",
      price: "Q799",
      duration: "3 horas",
      features: [
        "100 fotos editadas",
        "Galería online",
        "Resolución alta",
        "USB con todas las fotos",
        "Álbum premium",
        "Sesión de maquillaje",
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
            Contáctame
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            ¿Listo para capturar momentos únicos? Hablemos sobre tu próxima
            sesión fotográfica.
          </motion.p>
        </div>
      </section>

      {/* Packages Section */}
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
              Paquetes de Sesión
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Elige el paquete que mejor se adapte a tus necesidades y
              presupuesto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg: ServicePackage, index: number) => (
              <motion.div
                key={pkg.name}
                className="bg-white rounded-lg shadow-lg p-8 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Más Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <Camera className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    {pkg.price}
                  </div>
                  <div className="text-gray-600">{pkg.duration}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature: string, featureIndex: number) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Información de Contacto
              </h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info: ContactInfo, index: number) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    className="flex items-start p-6 bg-gray-50 rounded-lg"
                    variants={itemVariants}
                    whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                  >
                    <div className="flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-700 hover:text-purple-600 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <div className="text-gray-700">{info.content}</div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="mt-12 p-8 bg-purple-50 rounded-lg text-center"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ¿Tienes Preguntas?
              </h3>
              <p className="text-gray-700 mb-6">
                No dudes en contactarme para cualquier consulta sobre sesiones,
                precios o disponibilidad. Estoy aquí para ayudarte a crear
                recuerdos inolvidables.
              </p>
              <div className="flex justify-center space-x-6">
                {["Instagram", "Facebook", "Twitter"].map((social: string) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="text-purple-600 hover:text-purple-700 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">{social}</span>
                    {social === "Instagram" && (
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
