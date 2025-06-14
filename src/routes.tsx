import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { Home } from "./Porfolio/pages/Home";
import { Gallery } from "./Porfolio/pages/Gallery";
import { ImageDetail } from "./Porfolio/pages/ImageDetail";
import { About } from "./Porfolio/pages/About";
import { Contact } from "./Porfolio/pages/Contact";
import { NotFound } from "./Porfolio/pages/NotFound";

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
        path: "portfolio",
        element: <Gallery />,
      },
      {
        path: "services",
        element: <ImageDetail />,
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
