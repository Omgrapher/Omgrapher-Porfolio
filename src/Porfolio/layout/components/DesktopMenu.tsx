"use client";

import { motion, type Variants } from "framer-motion";
import { type MenuItem } from "../types/navbar";

interface DesktopMenuProps {
  menuItems: MenuItem[];
  menuItemVariants: Variants;
}

export const DesktopMenu = ({
  menuItems,
  menuItemVariants,
}: DesktopMenuProps) => {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-8">
        {menuItems.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            className="text-white hover:text-purple-300 px-3 py-2 text-sm font-medium transition-colors duration-300"
            custom={i}
            variants={menuItemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
          </motion.a>
        ))}
      </div>
    </div>
  );
};
