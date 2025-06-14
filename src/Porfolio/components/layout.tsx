"use client";

import { Outlet, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import type { JSX } from "react/jsx-runtime";

export const Layout = (): JSX.Element => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar menuItems={[]} />
      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <Outlet />
        </div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};
