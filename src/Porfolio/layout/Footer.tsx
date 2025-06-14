import { motion, type Variants } from "framer-motion";
import { Camera, Instagram } from "lucide-react";
import type { JSX } from "react/jsx-runtime";

interface SocialLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

export const Footer = () => {
  const currentYear: number = new Date().getFullYear();

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

  const socialLinks: SocialLink[] = [
    {
      name: "Instagram",
      href: "https://instagram.com/omgrapher",
      icon: <Instagram className="h-6 w-6" />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div whileHover={{ rotate: 10 }}>
                <Camera className="h-8 w-8 text-purple-400" />
              </motion.div>
              <span className="ml-2 text-xl font-bold">Omgrapher</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Capturando momentos hermosos y creando retratos atemporales que
              cuentan tu historia única.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              {socialLinks.map((social: SocialLink, index: number) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  custom={index}
                  variants={itemVariants}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p>
              &copy; {currentYear} Omgrapher. Todos los derechos reservados.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
