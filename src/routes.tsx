import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { Home } from "./Porfolio/pages/Home";
import { Gallery } from "./Porfolio/pages/Gallery";
import { Services } from "./Porfolio/pages/Services";
import { About } from "./Porfolio/pages/About";
import { Contact } from "./Porfolio/pages/Contact";
import { NotFound } from "./Porfolio/pages/NotFound";
import { ImageDetail } from "./Porfolio/pages/ImageDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "gallery/:id",
        element: <ImageDetail />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
