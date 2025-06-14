import { Footer } from "./Porfolio/layout/Footer";
import { Outlet } from "react-router";
import { Navbar } from "./Porfolio/layout/Navbar";
import { menuItems } from "./Porfolio/data/navigationData";

export const App = () => {
  return (
    <>
      <Navbar menuItems={menuItems} />
      <Outlet />
      <Footer />
    </>
  );
};
